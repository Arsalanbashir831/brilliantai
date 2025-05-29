// components/BuildWithConfidence.tsx
'use client';

import Image from 'next/image';
import BrilliantButton from '../widgets/BrilliantButtons';
import { ShineBorder } from '../magicui/shine-border';

export default function BuildWithConfidence() {
    return (
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 pb-20">
            <div
                className="
          
          bg-[linear-gradient(111deg,rgba(77,77,77,0.24)_1.21%,rgba(151,151,151,0.04)_100%)]
         
          rounded-3xl
          shadow-[inset_-20px_4px_120px_-80px_rgba(31,187,187,0.14)]
          backdrop-blur-[15px]
          overflow-hidden relative
        "
            >
                 <ShineBorder shineColor={["#23D5D5", "#00FFFF"]} />
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-12 px-6 md:px-16">
                    {/* Text + button */}
                    <div className="space-y-6 md:max-w-md">
                        <h2 className="text-3xl font-semibold text-white">
                            Build with Confidence
                        </h2>
                        <p className="text-lg text-[#E0E0E0]">
                            You have the vision. We have the team, the expertise and the structure to deliver it. Let’s create an AI product that is reliable, scalable and built to perform.
                        </p>

                        <BrilliantButton variant='white'
                            className=" "
                        >
                            Talk to Our Team
                        </BrilliantButton>
                    </div>

                    {/* SVG */}
                    <div className="relative flex justify-center md:justify-end">
                        <Image
                            src="/startup/rainbow.svg"
                            alt="Technology stack rainbow"
                            width={1200}
                            height={900}
                            // On small screens it'll just sit inline.
                            // On md+ we absolutely position it within this cell,
                            // but it's constrained by the parent grid column.
                            className="
                w-full max-w-lg h-auto
                md:absolute -bottom-30 md:right-10
              "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
