'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollRevealText from "./ScrollReveal"

// THE INTERCOM: We bring in your custom hook
import { useLenisEngine } from './LenisProvider' 

gsap.registerPlugin(ScrollTrigger)

export default function MyPage() {
  const triggerDivRef = useRef(null)
  
  // TUNE IN: Grab the engine from your layout
  const lenis = useLenisEngine()

  useEffect(() => {
    // Check if the engine is running yet
    console.log('Lenis status:', lenis) 
    if (!lenis || !triggerDivRef.current) return

    const myTrigger = ScrollTrigger.create({
      trigger: triggerDivRef.current, 
      start: "top bottom", 
      end: "bottom top", 
      /* markers: true,  */// Keep this on to see the physical tripwire
      
      onEnter: () => {
        lenis.options.duration = 3.0
        lenis.options.wheelMultiplier = 0.1 // Heavy mud mode
        console.log('Entered zone: Slowing down') 
      },
      onLeave: () => {
        lenis.options.duration = 1.0
        lenis.options.wheelMultiplier = 1.5 // Back to normal
        console.log('Left zone: Speeding up')
      },
      onEnterBack: () => {
        lenis.options.duration = 3.0
        lenis.options.wheelMultiplier = 0.1
        console.log('Re-entered zone from bottom: Slowing down')
      },
      onLeaveBack: () => {
        lenis.options.duration = 1.0
        lenis.options.wheelMultiplier = 1.5
        console.log('Left zone from top: Speeding up')
      }
    })
      
    return () => {
      myTrigger.kill() 
      lenis.options.wheelMultiplier = 1.5 
    }
  }, [lenis]) 

  return (
    <div className="relative z-2 bg-[#efeded]">
      
      
      {/* THE MASTER WRAPPER: One ref to rule both sections */}
      <div ref={triggerDivRef}> 

        {/* Section 1 */}
        <div className="h-[80vh] pt-[20vh]"> 
          <div className="max-w-[55vw] ml-[3rem]">
            <ScrollRevealText 
              text="The grid of tomorrow isn't built on yesterday's blueprints. We are a collective of driven minds, pushing the absolute limits of circuitry, sustainable energy, and complex systems. We don't just adapt to the resistance—we use it to propel ourselves forward. Transforming raw potential into kinetic impact" 
              customClasses="leading-[2rem] gap-[0.3rem] text-[2rem]"
            />
          </div>
        </div>
          
        {/* Section 2 */}
        <div className="h-[100vh] pt-[40vh]"> 
          <div className="max-w-[55vw] ml-[calc(45vw-3rem)]">
            <ScrollRevealText 
              text="The grid of tomorrow isn't built on yesterday's blueprints. We are a collective of driven minds, pushing the absolute limits of circuitry, sustainable energy, and complex systems. We don't just adapt to the resistance—we use it to propel ourselves forward. Transforming raw potential into kinetic impact" 
              customClasses="leading-[2rem] gap-[0.3rem] text-[2rem]"
            />
          </div>
        </div>

      </div>

    </div>
  );
}