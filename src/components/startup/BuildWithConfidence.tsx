// components/BuildWithConfidence.tsx
'use client';

import React from 'react';
import Image from 'next/image';

export default function BuildWithConfidence() {
    return (
        <div className='px-32 pb-20'>
        <div className="relative rounded-4 border-b rounded-3xl border-[#808080] bg-[linear-gradient(111deg,_rgba(77,77,77,0.24)_1.21%,_rgba(151,151,151,0.04)_100%)] shadow-[inset_-20px_4px_120px_-80px_rgba(31,187,187,0.14)] backdrop-blur-[15px] overflow-hidden">
          
            {/* Content */}
            <div className="relative flex flex-col md:flex-row items-center justify-between py-12 px-16">
                {/* Text + button */}
                <div className="max-w-[46%] space-y-6">
                    <h2 className="text-3xl  font-semibold text-white">
                        Build with Confidence
                    </h2>
                    <p className="text-lg  text-[#E0E0E0]">
                        You have the vision. We have the team, the expertise and the structure to deliver it. Let’s create an AI product that is reliable, scalable and built to perform.
                    </p>
                    <button className="inline-flex items-center justify-center h-[48px] px-[24px] text-[16px] font-medium text-black bg-white rounded-[8px]">
                        Talk to Our Team →
                    </button>
                </div>

                {/* Tech-rainbow SVG */}    
                <div className="mt-12 md:mt-0">
                    <Image src="/startup/rainbow.svg" alt="Technology stack rainbow" width={900} height={600} className="w-2/3 h-96  absolute -bottom-16 right-0" />
                </div>
            </div>
            </div>
        </div>
    );
}
