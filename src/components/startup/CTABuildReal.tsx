'use client';

import React from "react";
import { motion } from "framer-motion";
import BrilliantButton from "../widgets/BrilliantButtons";
import { ShineBorder } from "../magicui/shine-border";
import useMobile from "@/hook/useMobile";

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

export default function CTABuildReal() {
  const isMobile = useMobile();

  return (
    <motion.section
      variants={fadeUpBlur}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full py-20 px-0 md:px-50 lg:px-50"
    >
      <div
        className="
          relative
          w-full
          sm:max-w-7xl
          mx-auto
          overflow-hidden
          rounded-0
          md:rounded-[16px] lg:rounded-[16px]
          bg-[linear-gradient(111deg,rgba(77,77,77,0.24)_1.21%,rgba(151,151,151,0.04)_100%)]
          shadow-[inset_-20px_4px_120px_-80px_rgb(31,187,187)]
          backdrop-blur-[15px]
        "
      >
        {!isMobile && <ShineBorder shineColor={["#23D5D5", "#00FFFF"]} />}

        <div className="relative flex flex-col items-center px-6 sm:px-[120px] py-10">
          <h2 className="text-[28px] leading-[48px] font-semibold text-white text-center">
            Let’s Build Something Real
          </h2>
          <p className="mt-4 text-[18px] leading-[28px] text-[#E0E0E0] text-center">
            Your idea deserves more than just a plan. Let’s turn it into a working AI product.
          </p>
          <div className="mt-8">
            <BrilliantButton variant="white">
              Talk to Our Team
            </BrilliantButton>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
