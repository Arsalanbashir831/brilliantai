// app/components/ApproachSection.tsx
"use client";

import React from "react";
import { ShineBorder } from "../magicui/shine-border";

const steps = [
    {
        step: "STEP 1",
        title: "We Start with You",
        text: `Every project begins with structured conversations designed to understand your objectives, challenges and goals. This allows us to align early and ensure every decision is tailored to your business needs.`,
    },
    {
        step: "STEP 2",
        title: "We Design and Build Together",
        text: `We transform your vision into intelligent systems through collaboration, building custom applications, models, and workflows with full transparency—keeping you informed and involved throughout.`,
    },
    {
        step: "STEP 3",
        title: "We Validate Every Detail",
        text: `Before anything is launched, we test thoroughly for accuracy, performance and reliability. From data flow to real-world usage, we make sure the solution performs under real conditions and delivers as expected.`,
    },
    {
        step: "STEP 4",
        title: "We Stay Close",
        text: `We remain available and engaged beyond delivery. Whether you need refinements, scaling support or technical guidance, our team is always on hand and ready to respond. You will never be left waiting.`,
    },
];

export default function ApproachSection() {
    return (
        <section className="py-20 ">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <h2 className="text-4xl md:text-5xl font-semibold text-white text-center">
                    Our Approach
                </h2>
                <p className="mt-2 text-lg text-gray-400 text-center">
                    Collaborative, responsive and focused on outcomes that matter to you
                </p>
                <p className="mt-4 text-center text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    We act as a true partner throughout every stage of your project. From the first
                    conversation to long-term optimisation, we remain engaged, transparent and
                    committed to building AI systems that deliver real results.
                </p>

                {/* Steps Grid */}
                <div className="mt-12 px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                    {steps.map(({ step, title, text }) => (
                        <div
                            key={step}
                            className="
                                relative
                                rounded-2xl
                                p-6
                                border border-white/10
                                bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(0,0,0,0.1))]
                            "
                        >
                              <ShineBorder shineColor={["#23D5D5", "#00FFFF"]} />
                            <span className="text-sm font-medium text-gray-300">{step}</span>
                            <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
                            <p className="mt-3 text-sm text-gray-400 leading-relaxed">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
