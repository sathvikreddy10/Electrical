'use client'

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Loader() {
  const loaderRef = useRef(null)

  useEffect(() => {
    // 1. Hire a normal director. No ScrollTrigger needed.
    const tl = gsap.timeline()

    // 2. ACT 1: The text fades and slides up slightly
    tl.from('.intro-text', { 
        y: 30, 
        opacity: 0, 
        duration: 1,
        ease: "power3.out"
    })
    
    // 3. ACT 2: The White Wipe (Stretches up from the floor to cover text)
    // We add a tiny delay ("+=0.5") so the user has half a second to actually read the text
    tl.to('.white-wipe', {
        scaleY: 1,
        duration: 0.5,
        ease: "power3.inOut"
    }, "+=1.5")

    // 4. THE HEIST: Hide the text in the dark while the white wipe is covering it
    tl.set('.intro-text', { opacity: 0 })

    // 5. ACT 3: Pull the white wipe up into the ceiling
    tl.to('.white-wipe', {
        scaleY: 0,
        transformOrigin: "top", // Change origin so it shrinks upward
        duration: 0.5,
        ease: "power3.inOut"
    })

    // 6. THE GRAND REVEAL: Slide the entire black vault door up into the ceiling
    tl.to(loaderRef.current, {
        yPercent: -100, // This means "move up by 100% of your own height"
        duration: 1.2,
        ease: "power4.inOut"
    })
    
    // 7. CLEANUP: Once it's off-screen, completely hide the HTML so it doesn't block mouse clicks
    .set(loaderRef.current, { display: "none" })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    // THE VAULT DOOR: fixed, inset-0 makes it cover the entire monitor. z-[99] ensures it's on top of EVERYTHING.
    <div ref={loaderRef} className="fixed inset-0 z-[99] bg-[#111] flex items-center justify-center w-full h-screen">
        
        {/* TEXT WRAPPER: relative and overflow-hidden trap the white wipe inside this box */}
        <div className="relative overflow-hidden flex items-center justify-center px-[2rem] py-[1rem]">
            
            {/* THE TEXT */}
            <h1 className="intro-text text-[#fff] text-[2rem] flex flex-col items-center justify-center font-syne font-bold relative z-10 uppercase gap-3">
                <div className="st self-center align-middle leading-none">Welcome to the heart of innovation, </div> 
                <div className="nt self-center align-middle leading-none">Brace yourself to look into a world of innovation</div>
            </h1>
            
            {/* THE WHITE WIPE: Starts scaled to 0 (invisible). Pinned to the bottom. */}
            <div 
                className="white-wipe absolute bottom-0 left-0 w-full h-full bg-[#fff] z-20"
                style={{ transformOrigin: "bottom", transform: "scaleY(0)" }}
            ></div>

        </div>

    </div>
  )
}