"use client";

import { useRef, useEffect, useState } from "react";
import { ShineBorder } from "../magicui/shine-border";

const features = [
  {
    title: "We Build AI That Performs",
    text: `Brilliant AI is a specialist artificial intelligence engineering company
    dedicated to designing, building, and deploying custom AI systems
    with real-world impact. We collaborate with organizations and
    entrepreneurs to create production-grade solutions that automate
    processes, enhance decision-making, and scale with business growth.`,
  },
  {
    title: "Full-Cycle AI Engineering",
    text: `Our primary focus is end-to-end AI development. We manage every stage
    of the AI lifecycle—from technical scoping and architecture to model
    development, application engineering, integration, and deployment. Our
    expertise includes intelligent web applications, machine learning
    systems, and AI-powered automation across diverse industries.`,
  },
  {
    title: "AI Consulting & Product",
    text: `Beyond engineering, we offer AI consulting services to help businesses
    with early-stage planning, solution design, and technical
    decision-making. Unlike experimental labs or prototype vendors,
    Brilliant AI is a delivery-first AI partner, committed to building
    reliable, measurable, and scalable AI systems that excel in
    real-world operations.`,
  },
];

export default function AiFeaturesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Align to the first card on mount
    if (sliderRef.current) sliderRef.current.scrollLeft = 0;
  }, []);

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    const gap = 16; // Tailwind gap-4
    const cardWidth = slider.clientWidth * 0.9 + gap;
    const index = Math.round(slider.scrollLeft / cardWidth);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 md:mb-15">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[64px] font-bold leading-tight text-white pl-12 mb-12">
          Transforming Ideas into
          <br />
          AI-Powered Realities
        </h2>

        {/* MOBILE SLIDER */}
        <div className="md:hidden">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="
              flex gap-4 pl-4
              overflow-x-auto
              scroll-smooth
              snap-x snap-mandatory
              hide-scrollbar
            "
          >
            {features.map(({ title, text }, idx) => (
              <div
                key={idx}
                style={{ boxShadow: "inset -20px 4px 120px -80px #1FBBBB" }}
                className="
                  feature-card
                  relative
                  flex-shrink-0
                  w-[90%]
                  snap-center
                  rounded-2xl
                  bg-[radial-gradient(circle,#4d4d4d00,#9797971A)]
                  p-6
                  shadow-lg
                "
              >
                <ShineBorder shineColor={["#808080", "#23D5D5", "#23D5D51A", "#808080D9"]} />
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                <h3 className="relative z-10 text-xl font-normal text-white mb-4">
                  {title}
                </h3>
                <p className="relative z-10 text-[#96CDCD] text-sm">{text}</p>
              </div>
            ))}
          </div>
          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {features.map((_, idx) => (
              <span
                key={idx}
                className={`h-3 transition-all rounded-full ${
                  idx === currentIndex ? "w-6 bg-cyan-400" : "w-3 bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-6 px-12">
          {features.map(({ title, text }, idx) => (
            <div
              key={idx}
              style={{ boxShadow: "inset -20px 4px 120px -80px #1FBBBB" }}
              className="
                relative
                rounded-2xl
                bg-[radial-gradient(circle,#4d4d4d00,#9797971A)]
                p-6
                shadow-lg
              "
            >
              <ShineBorder shineColor={["#808080", "#23D5D5", "#23D5D51A", "#808080D9"]} />
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />

              <h3 className="relative z-10 text-2xl font-normal text-white mb-4">
                {title}
              </h3>
              <p className="relative z-10 text-[#96CDCD] text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}