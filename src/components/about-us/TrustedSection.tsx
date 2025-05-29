// app/components/TrustedSection.tsx
"use client";

import Image from "next/image";
import BrilliantButton from "../widgets/BrilliantButtons";
import { ShineBorder } from "../magicui/shine-border";

export default function TrustedSection() {
    return (
        <section className="py-20 ">
            <div className="max-w-7xl mx-auto px-6">

                {/* Relative wrapper to clip/position the background SVG */}
                <div className="relative overflow-hidden rounded-2xl  bg-teal-950   ">
                      <ShineBorder shineColor={["#23D5D5", "#00FFFF"]} />

                    {/* Background SVG */}
                    <Image
                        src="/about/trusted.svg"
                        alt=""
                        fill
                        className="absolute inset-0 object-cover"
                        priority
                    />

                    {/* Semi-opaque overlay to darken for contrast */}
                    <div className="absolute inset-0 bg-black/60" />

                    {/* Content on top */}
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
                        {/* Left */}
                        <div className="flex flex-col justify-start items-start">
                            <h2 className="text-4xl md:text-5xl font-semibold text-white">
                                Your Trusted AI<br />Delivery Partner
                            </h2>
                        </div>

                        {/* Right */}
                        <div className="space-y-6 text-gray-300">
                            <p>
                                We build intelligent, scalable AI systems that transform complex ideas into
                                real-world products. From web applications to machine learning models and
                                automation, we help entrepreneurs and organisations deliver high-impact
                                solutions.
                            </p>
                            <p>
                                Our team accelerates product vision for funded startups and integrates AI
                                into key operations for established businesses, ensuring speed, reliability,
                                and measurable outcomes.
                            </p>


                            <BrilliantButton variant="white"
                                className="
                                px-6 py-3
                                rounded-full
                                bg-[linear-gradient(180deg,_#23D5D5_0%,_#1EB2B2_100%)]
                                shadow-[inset_0px_2px_1px_0px_#FFFFFF40,_inset_0px_-4px_2px_0px_#0000001F,_0px_0px_1px_4px_#FFFFFF1A,_0px_0px_180px_0px_#23D5D5]
                                text-white font-medium
                                transition
                                "
                            >
                                Work with us
                            </BrilliantButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
