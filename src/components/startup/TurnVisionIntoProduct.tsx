// components/TurnVisionIntoProduct.tsx
'use client';

import React from 'react';
import { ShineBorder } from '../magicui/shine-border';
import BrilliantButton from '../widgets/BrilliantButtons';

export default function TurnVisionIntoProduct() {
    return (
        <section
            className="
               
                py-16 px-32 
            "
        >
            <div
                className="
                    max-w-[70%] mx-auto px-12
                    rounded-[16px]
                    bg-[url('/startup/vision.svg')] 
                    relative
                    "
            >
                   <ShineBorder shineColor={["#23D5D5", "#00FFFF"]} />
                
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

                      <BrilliantButton>Get Started</BrilliantButton>
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
