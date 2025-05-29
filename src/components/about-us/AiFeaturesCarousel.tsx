"use client";

import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

    // On mount: scroll so the 3rd card sits half-visible
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;
        const card = slider.querySelector<HTMLDivElement>(".feature-card");
        if (!card) return;

        const cardWidth = card.clientWidth;
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        slider.scrollLeft = Math.max(0, maxScroll - cardWidth / 2);
    }, []);

    // Move by exactly one card + gap, clamped between 0 and max
    function scrollByCard(dir: "left" | "right") {
        const slider = sliderRef.current;
        if (!slider) return;
        const card = slider.querySelector<HTMLDivElement>(".feature-card");
        if (!card) return;

        const gap = 16; // Tailwind’s gap-4 = 1rem = 16px
        const step = card.clientWidth + gap;
        const maxScroll = slider.scrollWidth - slider.clientWidth;

        let next = slider.scrollLeft + (dir === "left" ? -step : step);
        next = Math.max(0, Math.min(maxScroll, next));
        slider.scrollTo({ left: next, behavior: "smooth" });
    }

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-5xl font-semibold leading-tight text-white pl-12 mb-12">
                    Transforming Ideas into
                    <br />
                    AI-Powered Realities
                </h2>

                <div className="relative">
                    {/* Clipping container */}
                    <div ref={sliderRef} className="overflow-hidden">
                        <div className="flex gap-4 pl-40">
                            {features.map(({ title, text }) => (
                                <div
                                    key={title}
                                    className="
                                        feature-card
                                        relative
                                        flex-shrink-0
                                        w-[80%] sm:w-[400px]
                                        h-64
                                        rounded-2xl
                                        bg-teal-950
                                        p-6
                                        shadow-lg
                                    "
                                >
                                    {/* subtle overlay */}
                                    <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                                    <h3 className="relative z-10 text-2xl font-semibold text-white mb-4">
                                        {title}
                                    </h3>
                                    <p className="relative z-10 text-gray-300 text-sm">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* fixed arrows */}
                    <div className=" flex justify-end gap-4 p-16">
                        <button
                            onClick={() => scrollByCard("left")}
                            className="
                w-12 h-12
                flex items-center justify-center
                rounded-full
                bg-[linear-gradient(0deg,rgba(35,213,213,0.15),rgba(35,213,213,0.15)),radial-gradient(87.24%_82.94%_at_112.61%_5.18%,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_100%)]
              "
                        >
                            <ChevronLeft className="w-6 h-6 text-[#23D5D5]" />
                        </button>
                        <button
                            onClick={() => scrollByCard("right")}
                            className="
                w-12 h-12
                flex items-center justify-center
                rounded-full
                bg-[linear-gradient(0deg,rgba(35,213,213,0.15),rgba(35,213,213,0.15)),radial-gradient(87.24%_82.94%_at_112.61%_5.18%,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_100%)]
              "
                        >
                            <ChevronRight className="w-6 h-6 text-[#23D5D5]" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
