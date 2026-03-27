'use client'

import { useEffect, useRef } from "react"
import gsap from "gsap"
import Image from "next/image"
import Transformer from "../Assets/Tranformer.png"

export default function Hero() {
  const textRef = useRef(null)
  const bottomBarRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    // 1. THE WAIT: Holds for exactly 2 seconds while your loader finishes
    const tl = gsap.timeline({ delay: 4.1 })

    // 2. FAST IMAGE WIPE: 0.5 seconds
    tl.fromTo(imageRef.current, 
        { opacity: 0, scale: 0.95 }, 
        { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
    )

    // 3. FAST RIGHT TEXT SLIDE: 0.5 seconds
    tl.fromTo(textRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "<0.1" // Staggers it just 100 milliseconds behind the image
    )

    // 4. FAST BOTTOM BAR CREEP: 0.5 seconds
    tl.fromTo(bottomBarRef.current,
        { y: 7, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "<0.1" 
    )

    return () => tl.kill()
  }, [])

  return (
   <div className='Hero w-full flex flex-col pt-[4.9rem] h-[100vh] sticky top-0 z-1'>
    <div className="image-text flex w-full justify-between h-[70vh]">
        
        <div ref={imageRef} className="image w-[clamp(45rem,54vw,54rem)] shrink-0 opacity-0">
            <Image
            src={Transformer}
            className="block w-full h-full object-cover object-top"
            alt="transformer"
            loading="eager"/>
        </div>
        
        <div ref={textRef} className="text font-medium font-outfit text-[1.8rem] max-w-[34.6vw] mr-[2.8rem] leading-[2.4rem] pt-[4rem] opacity-0">
            We are the definitive proving ground for next-generation engineering talent. By merging rigorous academic theory with high-stakes, real-world execution, we cultivate the elite minds that industry leaders actively seek. We don't just follow the standard; we engineer the benchmark
        </div>
        </div>
        
        <div ref={bottomBarRef} className="bottombar bg-[#fff] w-full flex-[1] pl-[4.5rem] pt-[1.2rem] flex flex-col gap-[0.25rem] -mt-[0.2rem] opacity-0">
            <div className="Nitandhra font-syne text-[1.8rem] text-[#333] leading-none whitespace-pre">
                NIT    Andhra pradesh
            </div>
            <div className="EEA font-outfit font-medium text-[3.4rem] leading-none">
                Electrical Association
            </div>
        </div>
   </div>
  )
}