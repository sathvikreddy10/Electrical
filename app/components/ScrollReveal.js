"use client"; 

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// 1. Changed 'style' to 'customClasses' (or className) so it's clear what it does
export default function ScrollRevealText({ text, customClasses }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"] 
  });
  

  const words = text.split(" ");

  return (
    <p 
      ref={containerRef} 
      // 2. THE FIX: Notice the backticks (` `) inside the curly braces!
      className={`flex flex-wrap font-outfit font-medium ${customClasses}`}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.2, 1]); 

  return (
    <motion.span style={{ opacity }} className="text-[#111]">
      {children}
    </motion.span>
  );
}