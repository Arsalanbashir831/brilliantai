// components/TurnVisionIntoProduct.tsx
"use client";

import React from "react";
import BrilliantButton from "../widgets/BrilliantButtons";

export default function TurnVisionIntoProduct() {
  return (
    <section className="w-full py-16 flex flex-col items-center md:px-50 justify-center">
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
          /* 
            Layer two small radial gradients (teal top‐right, cyan bottom‐left)
            on top of the 'vision.svg' image. 
          */
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
          {/* ------------------------------------------------
              LEFT SIDE: Title (and Desktop‐only button)
            ------------------------------------------------ */}
          <div className="w-full sm:w-auto space-y-6 text-center sm:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white capitalize">
              Turn Vision Into Product.
              <br />
              Start The Journey
            </h2>

            {/* This button is only visible on desktop (≥ sm) */}
            <div className="hidden sm:flex">
              <BrilliantButton>Get in touch</BrilliantButton>
            </div>
          </div>

          {/* ------------------------------------------------
              RIGHT SIDE: Paragraphs (always visible)
            ------------------------------------------------ */}
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

          {/* ------------------------------------------------
              MOBILE‐ONLY BUTTON: (visible on <sm)
            ------------------------------------------------ */}
          <div className="flex sm:hidden justify-center w-full">
            <BrilliantButton>Get in touch →</BrilliantButton>
          </div>
        </div>
      </div>
    </section>
  );
}
