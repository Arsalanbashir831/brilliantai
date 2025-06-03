// components/BuildWithConfidence.tsx
'use client';

import Image from 'next/image';
import BrilliantButton from '../widgets/BrilliantButtons';

export default function BuildWithConfidence() {
    return (
        <section className="w-full flex justify-center pb-20  sm:px-16 overflow-hidden">
            {/* ========== MOBILE LAYOUT (below 'sm') ========== */}
            <div
                className="
          sm:hidden
          w-full
          
          
          bg-[url('/startup/rings.png')]
          bg-no-repeat
          bg-bottom
          bg-contain rounded-0
          md:rounded-[16px] lg:rounded-[16px]
          pt-12
          pb-8
          px-6 bg-teal-950
          flex 
          flex-col 
          items-center 
          text-center 
          relative
        "
            >
                {/* Heading */}
                <h2 className="text-2xl font-semibold text-white leading-snug">
                    Build with Confidence
                </h2>

                <div className='w-full max-w-[360px]  '>
                    {/* Paragraph */}
                    <p className="mt-3 text-base text-[#E0E0E0] leading-relaxed">
                        You have the vision. We have the team, the expertise and the structure to deliver it.
                        Let’s create an AI product that is reliable, scalable and built to perform.
                    </p>

                </div>
                

                {/* Button */}
                <div className="mt-6">
                    <BrilliantButton variant="white">Talk to Our Team →</BrilliantButton>
                </div>

                {/* Teal divider line at bottom */}
                <span className="absolute bottom-0 left-1/2 w-full max-w-[360px] -translate-x-1/2  border-teal-400" />
            </div>

            {/* ========== DESKTOP LAYOUT (sm and above) ========== */}
            <div
                className="
          hidden sm:block
          relative
          w-[1200px]
          h-[400px]
          bg-[linear-gradient(110.72deg,rgba(77,77,77,0.24)_1.21%,rgba(151,151,151,0.04)_100%)]
          rounded-[16px]
          border-transparent
          [border-image-source:linear-gradient(110.21deg,rgba(128,128,128,0.7)_2.78%,rgba(35,213,213,0.7)_58.48%,rgba(35,213,213,0.07)_72.66%,rgba(128,128,128,0.595)_100%)]
          [border-image-slice:1]
          backdrop-blur-[30px]
          shadow-[inset_-20px_4px_120px_-80px_rgba(31,187,187,0.14)]
        "
            >
                {/* Text + Button container */}
                <div
                    className="
            absolute
            top-[87px]
            left-[60px]
            w-[538px]
            h-[226px]
            flex
            flex-col
            justify-between
            gap-[32px]
            overflow-hidden
          "
                >
                    <div className="space-y-4">
                        <h2 className="text-3xl font-semibold text-white leading-tight">
                            Build with Confidence
                        </h2>
                        <p className="text-lg text-[#E0E0E0] leading-relaxed">
                            You have the vision. We have the team, the expertise and the structure to deliver it.
                            Let’s create an AI product that is reliable, scalable and built to perform.
                        </p>
                    </div>

                    <BrilliantButton variant="white">Talk to Our Team →</BrilliantButton>
                </div>

                {/* Rainbow graphic (desktop) */}
                <Image
                    src="/startup/rainbow.svg"
                    alt="Technology stack rainbow"
                    width={700.8}
                    height={300}
                    className="absolute top-[100px] left-[441.2px]"
                    style={{ width: '700.8px', height: '300px' }}
                />
            </div>
        </section>
    );
}
