'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'

import EEA from "../Assets/EEA-logo.svg"
import Arrow from "../Assets/Arrow.svg"

const links = ['About', 'Events', 'Team', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

        useEffect(() => {
        let lastY = window.scrollY

        const onScroll = () => {
            const currentY = window.scrollY
            const goingDown = currentY > lastY
            setScrolled(goingDown)
            lastY = currentY
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
        }, [])

  return (
    <>
      <nav className={`fixed relative top-[0.75rem] left-1/2 -translate-x-1/2 z-50 flex items-center justify-between pl-[2.1rem] pr-[0.5rem] bg-white rounded-full transition-all duration-500 h-[3.9rem] ${scrolled ? 'w-[72%] ' : 'w-[98%] '}`}>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} aria-label="menu" className="flex flex-col justify-center gap-[0.3rem] w-[2.5rem] h-[2.5rem] bg-transparent border-0 cursor-pointer shrink-0">
          <span className={`h-[0.1875rem] bg-[#1d1d1d] rounded transition-all duration-300 ${open ? 'w-[2rem] rotate-45 translate-y-[0.45rem]' : 'w-[2rem]'}`} />
          <span className={`h-[0.1875rem] bg-[#1d1d1d] rounded transition-all duration-300 ${open ? 'w-[1.3rem] -rotate-45 -translate-y-[0.45rem]' : 'w-[1.3rem]'}`} />
        </button>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 font-syne font-bold text-lg text-black no-underline whitespace-nowrap">
            <Image
                src={EEA}
                alt="EEA logo"
                width={120}
                height={40}
                className='w-[3.6rem]'
                loading="eager"
                priority
               
            />
        </Link>

        {/* Apply */}
        <Link href="/join">
          <div className="font-syne button w-[8.2rem] h-[3.2rem] bg-[#FFC8A9] rounded-full flex items-center justify-center pl-[0.6rem]">

          <span className='leading-none text-[1.2rem] flex gap-2'>Apply <Image
          
                                                            src={Arrow}
                                                            alt="Arrow"
                                                            
                                                            className='w-[1.1rem]'
                                                            loading="eager"
                                                            priority
                                                             ></Image> 
          </span> 

          </div>
        </Link>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-10 transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {links.map((link) => (
          <Link key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="font-syne font-bold text-5xl text-black no-underline hover:text-red transition-colors">
            {link}
          </Link>
        ))}
        <Link href="/join" onClick={() => setOpen(false)} className="font-syne text-black bg-peach px-10 py-[0.75rem] rounded-[3.8rem] no-underline mt-4">
          Apply Now
        </Link>
      </div>
    </>
  )
}