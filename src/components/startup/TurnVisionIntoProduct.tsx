// components/TurnVisionIntoProduct.tsx
'use client';

import React from 'react';

export default function TurnVisionIntoProduct() {
    return (
        <section
            className="
               
                py-16 px-32 
            "
        >
            <div
                className="
                    max-w-7xl mx-auto px-12
                    rounded-[16px]
                    bg-[url('/startup/vision.svg')] border
                    
                    "
            >
                <div className="flex justify-center  items-center gap-16 py-12">
                    {/* Left: Heading + Button */}
                    <div className=" space-y-10">
                        <h2
                            className="
                        text-4xl font-medium text-white 
                        capitalize 
                        
              "
                        >
                            Turn Vision Into Product.<br />
                            Start The Journey
                        </h2>

                        <button
                            className="
                inline-flex items-center justify-center gap-[10px]
                h-12 px-6 py-4
                rounded-[16px]
                bg-[linear-gradient(180deg,_#23D5D5_0%,_#1EB2B2_100%)]
                shadow-[0_0_180px_0_#23D5D5,0_0_1px_4px_rgba(255,255,255,0.1),
                        0_-4px_2px_0px_rgba(0,0,0,0.25)_inset,
                        0_2px_1px_0px_rgba(255,255,255,0.25)_inset]
                text-white font-medium text-[18px] leading-[28px]
                transition-shadow shadow-[0_0_200px_0_#23D5D5]
              "
                        >
                            Get in touch →
                        </button>
                    </div>

                    {/* Right: Description */}
                    <div className="w-2/5 space-y-6">
                        <p
                            className="
                text-md  text-white font-normal
                
              "
                        >
                            We help early stage teams turn ideas into reality by building
                            intelligent and scalable AI systems. From MVP to launch and
                            beyond, we provide the technical and product expertise to move
                            fast, avoid costly mistakes, and scale with confidence.
                        </p>
                        <p
                            className="
                text-md  text-white font-normal
               
              "
                        >
                            Let’s build something real, and built to last.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
