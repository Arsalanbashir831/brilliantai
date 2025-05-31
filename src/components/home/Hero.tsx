// components/Hero.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrilliantButton from "../widgets/BrilliantButtons";

// Array of keywords to loop through
const LOOP_WORDS = ["Transformative", "Unstoppable", "Limitless"];

// Corresponding widths for each keyword
const WIDTHS: Record<string, string> = {
  Transformative: "12ch",
  Unstoppable: "10ch",
  Limitless: "6.5ch",
};

// Base gradient style (we’ll animate its background-position)
const gradientTextStyle: React.CSSProperties = {
  background:
    "linear-gradient(90deg, #00AEFF 16.33%, #00DE94 45.1%, #00FF52 73.68%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  backgroundSize: "200% 200%",
  animation: "gradientShift 3s ease infinite",
};

export default function Hero() {
  // Track which word is currently visible
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle to the next word every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % LOOP_WORDS.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  // Determine the width based on the current word
  const currentWord = LOOP_WORDS[currentIndex];
  const containerWidth = WIDTHS[currentWord];

  return (
    <>
      {/* 1) Define keyframes for gradientShift */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      <main
        className="relative flex flex-col items-center justify-center pt-20 pb-0 md:py-40 px-4 text-center overflow-hidden"
        style={{
          background: `
            radial-gradient(
              circle 750px at 50% -50px,
              rgba(0, 229, 255, 0.35) 0%,
              transparent 60%
            ),
            #011010
          `,
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Static part of the heading */}
          <h1 className="w-full text-3xl font-light text-white leading-tight md:text-5xl lg:text-6xl xl:text-7xl">
            Unlock Your Vision With
          </h1>

          {/* Looping word + fixed "AI" */}
          <div className="flex items-center justify-center w-full m-auto mb-8">
            <h1 className="inline-flex items-center text-3xl font-light text-white leading-tight md:text-5xl lg:text-6xl xl:text-7xl">
              {/* 2) Fixed-width container based on currentWord */}
              <span
                className="inline-block overflow-hidden"
                style={{ width: containerWidth, textAlign: "left" }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWord}
                    style={gradientTextStyle}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="block whitespace-nowrap"
                  >
                    {currentWord}
                  </motion.span>
                </AnimatePresence>
              </span>

              {/* 3) "AI" remains static, always after the gradient word */}
              <span className="ml-3 inline-flex items-center text-3xl font-light text-white leading-tight md:text-5xl lg:text-6xl xl:text-7xl">
                AI
              </span>
            </h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
            
            className="mx-auto mb-12 text-sm text-gray-300 md:text-md lg:text-xl max-w-[90%]"
          >
            We take you from idea to execution by building AI web apps, developing
            machine learning solutions, and implementing AI-driven processes that power
            scalable products and smarter operations.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center items-center pb-20 md:pb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.4, ease: "easeOut" }}
          >
            <BrilliantButton variant="gradient">Get in Touch</BrilliantButton>
            <BrilliantButton variant="transparent">Learn More</BrilliantButton>
          </motion.div>
        </div>
      </main>
    </>
  );
}
