// components/Hero.tsx
'use client'

import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "framer-motion";
import BrilliantButton from "../widgets/BrilliantButtons";

export default function Hero() {
  return (
    <main
      className="relative flex flex-col items-center justify-center py-20 px-4 text-center overflow-hidden"
      style={{
        /*
          1) Base layer: a solid, very‐dark background (#0a0f0f).
          2) On top of that: a more compact, soft cyan radial gradient.
             - circle 400px (radius) so the glow is smaller.
             - positioned at 50% horizontally and –50px vertically, 
               so the brightest spot sits above the heading.
             - fades to transparent by 60% of its radius.
          3) The outer area remains the #0a0f0f background.
        */
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
        {/* Heading */}
        <h1 className="  w-full text-3xl font-light  text-white leading-tight mb-8 md:text-5xl lg:text-6xl xl:text-7xl">
          <TextAnimate
        
            animation="blurIn"
            as="span"
            by="character"
            delay={0.1}
            duration={1}
            once
          >
            Unlock Your Vision With
          </TextAnimate>{" "}
          <div className="flex justify-center items-center gap-5">
            <span
              className="bg-clip-text text-transparent"
              style={{
                background:
                  "linear-gradient(90deg, #00AEFF 16.33%, #00DE94 45.1%, #00FF52 73.68%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Transformative
            </span>{" "}
            <TextAnimate
              animation="blurIn"
              as="h1"
              by="character"
              delay={1.3}
              duration={1}
              once
            >
              AI
            </TextAnimate>
          </div>
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="mx-auto mb-12 text-sm text-gray-300 md:text-md lg:text-xl"
        >
          We take you from idea to execution by building AI web apps, developing
          machine learning solutions and implementing AI-driven processes that power
          scalable products and smarter operations.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col gap-4 sm:flex-row justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.4 }}
        >
          <BrilliantButton variant="gradient">
            Get in Touch
          </BrilliantButton>

          <BrilliantButton variant="transparent">
            Learn More
          </BrilliantButton>
        </motion.div>
      </div>
    </main>
  );
}
