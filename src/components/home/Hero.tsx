// components/Hero.tsx
'use client'

import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "framer-motion";
import BrilliantButton from "../widgets/BrilliantButtons";

export default function Hero() {
   
  return (
    <main className="relative   flex flex-col items-center py-20 justify-start md:justify-center h-auto md:min-h-[calc(105vh-120px)] px-2 md:px-4 text-center">
      <div
        className="
                            
                "
        style={{
          background:
            "radial-gradient(circle at center, #00FFFF 0%, transparent 100%)",
        }}
      />
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl z-20 relative  w-full md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight mb-8">
          <TextAnimate animation="blurIn" as="span" by="character" delay={0.1} duration={1} once>
            Unlock Your Vision With
          </TextAnimate>{" "}

          <div className="flex justify-center items-center gap-5">

            <span
              className="bg-gradient-to-r from-[#00AEFF] via-[#00DE94] to-[#00FF52] bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(90deg, #00AEFF 16.33%, #00DE94 45.1%, #00FF52 73.68%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {/* <WordRotate words={["Transformative", "Unstoppable","Limitless"]} /> */}
              


              Transformative

            </span>{" "}
            <TextAnimate animation="blurIn" as="h1" by="character" delay={1.3} duration={1} once>

              AI
            </TextAnimate>
          </div>

        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1, duration: 0.4 }}
          className="text-gray-300 text-sm md:text-md lg:text-xl  mx-auto mb-12 ">
          We take you from idea to execution by building AI web apps, developing machine learning solutions and
          implementing AI-driven processes that power scalable products and smarter operations.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex  sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.4 }}
          // transition={{ delay: 2.0, duration: 1 }}
          //    variants={containerVariants}
        
        >
          <BrilliantButton className="" variant="gradient">
                Get in Touch
          </BrilliantButton>

          <BrilliantButton
            variant="transparent"
            
          >
            Learn More
          
          
          </BrilliantButton>
        </motion.div>

      </div>
    </main>
  )
}
