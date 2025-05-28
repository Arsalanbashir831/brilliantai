"use client"
import React from 'react';

import { GridPattern } from '../magicui/grid-pattern';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function Hero() {
  // Twinkling shining-star shapes component
  //bg-image url : '/startup/Noise & Texture.png'
  const Stars = () => {
    const count = 40;
    return (
      <div className="absolute inset-0 pointer-events-none z-20">
        {Array.from({ length: count }).map((_, i) => {
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const size = Math.random() * 10 + 4; // star size between 4px and 14px
          const delay = Math.random() * 5;
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{ top: `${y}%`, left: `${x}%`, width: size, height: size }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay }}
            >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M12 0L12 24" stroke="url(#paint0_linear_0_2487)"/>
<path d="M24 12L-9.53674e-07 12" stroke="url(#paint1_linear_0_2487)"/>
</g>
<defs>
<linearGradient id="paint0_linear_0_2487" x1="12" y1="24" x2="12" y2="0" gradientUnits="userSpaceOnUse">
{/* <stop stop-color="white" stop-opacity="0"/> */}
<stop offset="0.50284" stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_0_2487" x1="0" y1="12" x2="24" y2="12" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.50284" stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

            </motion.div>
          );
        })}
      </div>
    );
  };

  return (
    <section
      className="relative bg-cover bg-center overflow-hidden"
    //   style={{
    //     backgroundImage: "url('/startup/Noise & Texture.png')",
    //     backgroundPosition: "top center",
    //   }}
    >
      {/* Animated grid pattern */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ rotate: [0, 1, 0] }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
      >
         <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        // strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        )}
      />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#011010]/50 z-10" />

      {/* Twinkling shining stars */}
      <Stars />

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 text-white z-30">
        {/* Heading */}
        <h1 className="text-6xl md:text-5xl lg:text-6xl font-semibold mb-4 text-center">
          AI Product Engineering for{' '}
          <span className="bg-gradient-to-r from-[#00AEFF] to-[#00FF52] bg-clip-text text-transparent">
            Startups
          </span>
        </h1>

        {/* Subheading */}
        <p className="max-w-3xl text-base md:text-lg mb-12 m-auto leading-relaxed text-center">
          We help founders bring AI ideas to life. From focused MVPs to complete,
          scalable platforms, we deliver intelligent systems built for
          performance, speed and long-term growth.
        </p>

       
      </div>
  
    </section>
  );
}
