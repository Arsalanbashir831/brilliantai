// components/TurnVisionIntoProduct.tsx
'use client';

import React from 'react';
import { ShineBorder } from '../magicui/shine-border';
import BrilliantButton from '../widgets/BrilliantButtons';

export default function TurnVisionIntoProduct() {
    return (
        <section className="w-full  py-16">
          
            <div className="max-w-screen-xl mx-auto px-0 md:px-40 lg:px-40 ">
                
                <div
                    className="
            relative
            w-full
            rounded-none 
            md:rounded-[16px] 
            bg-[url('/startup/vision.svg')]
           
            bg-right 
            bg-cover
            min-h-[300px]
            overflow-hidden
          "
                >
                   
                    <ShineBorder
                        className="hidden md:block"
                        shineColor={['#23D5D5', '#00FFFF']}
                    />

          
        
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-4 md:px-12 lg:px-8">
                     
                        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl lg:text-4xl font-medium text-white capitalize">
                                Turn Vision Into Product. <br />
                                Start The Journey
                            </h2>

                            <div className="hidden md:inline-block mt-6">
                                <BrilliantButton>Get in touch →</BrilliantButton>
                            </div>
                        </div>

                        
                        <div className="w-full md:w-2/5 space-y-4 text-center md:text-left">
                            <p className="text-md text-white font-normal">
                                We help early stage teams turn ideas into reality by building intelligent and scalable AI systems.
                                From MVP to launch and beyond, we provide the technical and product expertise to move fast, avoid
                                costly mistakes, and scale with confidence.
                            </p>
                            <p className="text-md text-white font-normal">
                                Let’s build something real, and built to last.
                            </p>
                        </div>

                        {/*
              ────────────────────────────────────────
              MOBILE-ONLY BUTTON (only when <md).
              We hide it on md+ because the desktop
              button is already visible.
            ────────────────────────────────────────
            */}
                        <div className="mt-6 w-full flex justify-center md:hidden">
                            <BrilliantButton>Get in touch →</BrilliantButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
