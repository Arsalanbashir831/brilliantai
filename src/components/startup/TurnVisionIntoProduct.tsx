'use client';

import React from "react";
import { motion } from "framer-motion";
import BrilliantButton from "../widgets/BrilliantButtons";
import { useRouter } from "next/navigation";

const fadeUpBlur = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(8px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function TurnVisionIntoProduct() {
  const router = useRouter();

  return (
    <motion.section
      variants={fadeUpBlur}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full py-16 flex flex-col items-center md:px-50 justify-center"
    >
      <div
        className="
          max-w-full
          mx-auto
          px-4 sm:px-12 rounded-0
          md:rounded-[16px] lg:rounded-[16px]
          relative
          bg-center bg-cover
        "
        style={{
          backgroundImage: `
            radial-gradient(
              circle 300px at 100% 0%,
              rgba(35, 213, 213, 0.5),
              transparent 60%
            ),
            radial-gradient(
              circle 300px at 0% 100%,
              rgba(0, 255, 255, 0.4),
              transparent 60%
            ),
            url('/startup/vision.svg')
          `,
        }}
      >
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 py-12">
          <div className="w-full sm:w-auto space-y-6 text-center sm:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white capitalize">
              Turn Vision Into Product.
              <br />
              Start The Journey
            </h2>

            <div className="hidden sm:flex">
              <BrilliantButton onClick={() => router.push('/contact-us')}>
                Get in touch
              </BrilliantButton>
            </div>
          </div>

          <div className="w-full sm:w-2/5 space-y-4 text-center sm:text-left">
            <p className="text-md text-white font-normal">
              We help early stage teams turn ideas into reality by building
              intelligent and scalable AI systems. From MVP to launch and
              beyond, we provide the technical and product expertise to move
              fast, avoid costly mistakes, and scale with confidence.
            </p>
            <p className="text-md text-white font-normal">
              Let’s build something real, and built to last.
            </p>
          </div>

          <div className="flex sm:hidden justify-center w-full">
            <BrilliantButton onClick={() => router.push('/contact-us')}>
              Get in touch →
            </BrilliantButton>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
