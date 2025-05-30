"use client";

import React from "react";
import BrilliantButton from "../widgets/BrilliantButtons";
import { ShineBorder } from "../magicui/shine-border";

export default function CTA() {
  return (
    <section className="relative py-20 px-32">
      <div
        className="
          relative
          max-w-7xl
          mx-auto
          rounded-[16px]
          overflow-hidden
          bg-[linear-gradient(111deg,_rgba(77,77,77,0.24)_1.21%,_rgba(151,151,151,0.04)_100%)]
          shadow-[inset_-20px_4px_100px_-60px_rgba(31,187,187,0.14)]
          backdrop-blur-lg
          will-change-transform
          will-change-backdrop-filter
        "
      >
        <ShineBorder shineColor={["#23D5D5", "#00FFFF"]} />

        {/* static CSS background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
        //   style={{ backgroundImage: "url('/startup/Content.svg')" }}
          aria-hidden="true"
        />

        <div className="relative flex flex-col items-center px-[120px] py-10">
          <h2 className="text-[28px] leading-[48px] font-semibold text-white">
            Still have questions?
          </h2>
          <p className="mt-4 text-[18px] leading-[28px] text-[#E0E0E0] text-center">
            Can’t find the answer you’re looking for? Please chat to our friendly team
          </p>
          <BrilliantButton variant="white" className="mt-8">
            Get in touch
          </BrilliantButton>
        </div>
      </div>
    </section>
  );
}
