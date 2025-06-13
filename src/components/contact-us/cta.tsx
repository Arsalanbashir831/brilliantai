'use client';

import React from "react";
import { motion } from "framer-motion";
import BrilliantButton from "../widgets/BrilliantButtons";
import { ShineBorder } from "../magicui/shine-border";
import useMobile from "@/hook/useMobile";
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

export default function CTA() {
  const isMobile = useMobile();
  const router = useRouter();

  return (
    <motion.section
      variants={fadeUpBlur}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-20 md:px-32"
    >
      <div
        className="
          relative
          max-w-7xl
          mx-auto
          md:rounded-[16px]
          overflow-hidden
          bg-[linear-gradient(111deg,_rgba(77,77,77,0.24)_1.21%,_rgba(151,151,151,0.04)_100%)]
          shadow-[inset_-20px_4px_100px_-60px_rgba(31,187,187,0.14)]
          backdrop-blur-lg
          will-change-transform
          will-change-backdrop-filter
        "
      >
        {!isMobile && <ShineBorder shineColor={["#23D5D5", "#00FFFF"]} />}

        {/* static CSS background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          aria-hidden="true"
        />

        <div className="relative flex flex-col items-center md:px-[120px] py-10">
          <h2 className="text-[28px] leading-[48px] font-semibold text-white">
            Still have questions?
          </h2>
          <p className="mt-4 text-[18px] leading-[28px] text-[#E0E0E0] px-[49px] md:px-0 text-center">
            Can’t find the answer you’re looking for? Please chat to our friendly team
          </p>
          <BrilliantButton
           onClick={()=>router.push('/contact-us#contact-form')}
            variant="white"
            className="mt-8"
          >
            Get in touch
          </BrilliantButton>
        </div>
      </div>
    </motion.section>
  );
}
