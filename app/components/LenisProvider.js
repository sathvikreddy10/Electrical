'use client'

import { useEffect } from 'react'

export default function LenisProvider({ children }) {
  useEffect(() => {
    let lenis

    const init = async () => {
      const { default: Lenis } = await import('lenis')
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
      const raf = (time) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }

    init()
    return () => { if (lenis) lenis.destroy() }
  }, [])

  return children
}