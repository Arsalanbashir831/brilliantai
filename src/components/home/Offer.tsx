// components/WhatWeOffer.tsx
'use client';

import React from "react";
import { motion } from "framer-motion";
import Card from "../Card";

interface Service {
    title: string;
    description: string;
    imageSrcDesktop: string;
    imageSrcMobile: string;
    imageObjectFit: string;
    /** new: whether to draw the inner border around this card’s image */
    hasInnerBorder?: boolean;
}

export default function WhatWeOffer() {
    const services: Service[] = [
        {
            title: "Conversational AI",
            description:
                "Advanced chatbots and virtual agents designed to handle customer support, internal queries and dynamic interactions.",
            imageSrcDesktop: "/home/conversational-ai1.svg",
            imageSrcMobile: "/others/Bento_Mobile.svg",
            imageObjectFit: "object-contain",
            hasInnerBorder: false,
        },
        {
            title: "Workflow Automations",
            description:
                "We automate your workflows to streamline repetitive tasks, enhance efficiency, save time, and eliminate errors.",
            imageSrcDesktop: "/home/workflow-icons.svg",
            imageSrcMobile: "/home/workflow-icons.svg",
            imageObjectFit: "object-cover",
            hasInnerBorder: true, // ← ONLY this one gets the inner‐border wrapper
        },
        {
            title: "Data Preparation",
            description:
                "Curation, cleaning and structuring of data to ensure high-quality inputs for effective AI and machine learning outcomes.",
            imageSrcDesktop: "/home/Analytics Filter Data.svg",
            imageSrcMobile: "/home/Analytics Filter Data.svg",
            imageObjectFit: "object-contain",
            hasInnerBorder: false,
        },
        {
            title: "AI Web Apps",
            description:
                "Custom-built applications powered by AI to deliver smarter user experiences and fast go-to-market.",
            imageSrcDesktop: "/home/Code editor.svg",
            imageSrcMobile: "/home/Code editor.svg",
            imageObjectFit: "object-contain",
            hasInnerBorder: false,
        },
        {
            title: "AI Consulting",
            description:
                "Our experts provide strategic guidance, enabling your business to implement AI solutions that drive transformative growth.",
            imageSrcDesktop: "/home/Chart.png",
            imageSrcMobile: "/home/Chart.png",
            imageObjectFit: "object-cover",
            hasInnerBorder: false,
        },
    ];

    // Container variant: stagger children
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    // Item animation variant
    const itemVariants = {
        hidden: {
            opacity: 0,
            filter: "blur(8px)",
            y: 20,
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="services" className="pb-10 text-center">
            <h2 className="text-3xl md:text-6xl text-white font-semibold mb-4">
                What We Offer
            </h2>
            <p className="text-gray-100 max-w-[80%] md:max-w-[40%] text-lg md:text-xl mx-auto mb-10">
                We build AI solutions from idea to launch, ensuring speed, scalability,
                and real-world impact.
            </p>

            <div className="mx-auto px-4 sm:px-5 md:px-6 lg:px-28 space-y-6">
                {/* ── ROW 1: 2 cards on sm+, 1 on xs ── */}
                <motion.div
                    className="grid gap-6 grid-cols-1 sm:grid-cols-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.slice(0, 2).map((svc, i) => (
                        <motion.div key={i} variants={itemVariants}>
                            <Card
                                {...svc}
                                imagePadding={i === 1 ? "p-0" : undefined}
                                /** Pass hasInnerBorder down to Card **/
                                hasInnerBorder={svc.hasInnerBorder}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── ROW 2: 3 cards on lg, 2 on sm, 1 on xs ── */}
                <motion.div
                    className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.slice(2).map((svc, j) => {
                        const idx = j + 2;
                        return (
                            <motion.div key={idx} variants={itemVariants}>
                                <Card
                                    {...svc}
                                    imagePadding={idx === 4 ? "p-0" : undefined}
                                    hasInnerBorder={svc.hasInnerBorder}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
