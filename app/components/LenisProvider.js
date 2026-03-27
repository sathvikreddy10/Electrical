'use client'

import { useEffect, useState, createContext, useContext } from 'react'

// 1. Create the radio channel
const LenisContext = createContext(null)

// 2. Export our custom hook so MyPage can tune in
export const useLenisEngine = () => useContext(LenisContext)

export default function LenisProvider({ children }) {
  // 3. Set up state to hold the engine
  const [lenisInstance, setLenisInstance] = useState(null)

  useEffect(() => {
    let lenis

    const init = async () => {
      const { default: Lenis } = await import('lenis')
      lenis = new Lenis({
        duration: 1.2,
        wheelMultiplier: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
      
      // 4. Save the live engine to React State
      setLenisInstance(lenis)

      const raf = (time) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }

    init()
    return () => { if (lenis) lenis.destroy() }
  }, [])

  return (
    // 5. Broadcast the engine to the children (your whole app)
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  )
}