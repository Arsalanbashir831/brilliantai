// components/AiFeaturesSection.tsx
"use client";

import { useRef, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
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

  useEffect(() => {
    // On mount (mobile only), scroll so the 3rd card sits half-visible
    const slider = sliderRef.current;
    if (!slider) return;
    const card = slider.querySelector<HTMLDivElement>(".feature-card");
    if (!card) return;

    const cardWidth = card.clientWidth + 16; // including 16px gap
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    // center the last card
    slider.scrollLeft = Math.max(0, maxScroll - cardWidth / 2);
  }, []);

//   function scrollByCard(dir: "left" | "right") {
//     const slider = sliderRef.current;
//     if (!slider) return;
//     const card = slider.querySelector<HTMLDivElement>(".feature-card");
//     if (!card) return;

//     const gap = 16; // Tailwind’s gap-4 = 16px
//     const step = card.clientWidth + gap;
//     const maxScroll = slider.scrollWidth - slider.clientWidth;

//     let next = slider.scrollLeft + (dir === "left" ? -step : step);
//     next = Math.max(0, Math.min(maxScroll, next));
//     slider.scrollTo({ left: next, behavior: "smooth" });
//   }

  return (
    <section className="py-20 md:mb-15">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[64px] font-bold leading-tight text-white pl-12 mb-12">
          Transforming Ideas into
          <br />
          AI-Powered Realities
        </h2>

        {/* ─────────────── MOBILE SLIDER (shown below md) ─────────────── */}
        <div className="md:hidden">
          <div
            ref={sliderRef}
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
                style={{
                  boxShadow: "inset -20px 4px 120px -80px #1FBBBB",
                }}
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
                <ShineBorder
                  shineColor={["#808080", "#23D5D5", "#23D5D51A", "#808080D9"]}
                />
                {/* subtle overlay */}
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                <h3 className="relative z-10 text-xl font-normal text-white mb-4">
                  {title}
                </h3>
                <p className="relative z-10 text-[#96CDCD] text-sm">{text}</p>
              </div>
            ))}
          </div>

          {/* Only show arrows on mobile if desired (optional) */}
          {/* 
          <div className="flex justify-end gap-4 p-4">
            <button
              onClick={() => scrollByCard("left")}
              className="
                w-10 h-10 flex items-center justify-center
                rounded-full bg-[rgba(35,213,213,0.15)]
              "
            >
              <ChevronLeft className="w-5 h-5 text-[#23D5D5]" />
            </button>
            <button
              onClick={() => scrollByCard("right")}
              className="
                w-10 h-10 flex items-center justify-center
                rounded-full bg-[rgba(35,213,213,0.15)]
              "
            >
              <ChevronRight className="w-5 h-5 text-[#23D5D5]" />
            </button>
          </div>
          */}
        </div>

        {/* ─────────────── DESKTOP GRID (shown at md and up) ─────────────── */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-6 px-12">
          {features.map(({ title, text }, idx) => (
            <div
              key={idx}
              style={{
                boxShadow: "inset -20px 4px 120px -80px #1FBBBB",
              }}
              className="
                relative
                rounded-2xl
                bg-[radial-gradient(circle,#4d4d4d00,#9797971A)]
                p-6
                shadow-lg
              "
            >
              <ShineBorder
                shineColor={["#808080", "#23D5D5", "#23D5D51A", "#808080D9"]}
              />
              {/* subtle overlay */}
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
