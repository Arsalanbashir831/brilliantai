// components/CTABuildReal.tsx
'use client';

import React from 'react';
import Image from 'next/image';

export default function CTABuildReal() {
    return (
        <section className="relative  py-20  px-32">
            {/* Frosted‐glass card */}
            <div className="relative max-w-7xl mx-auto rounded-[16px] overflow-hidden bg-[linear-gradient(111deg,_rgba(77,77,77,0.24)_1.21%,_rgba(151,151,151,0.04)_100%)] shadow-[inset_-20px_4px_120px_-80px_rgba(31,187,187,0.14)] backdrop-blur-[15px]">
                {/* Grain-green background image */}
                <Image src="/startup/Content.svg" alt="" fill className="absolute inset-0 object-cover" />

                {/* Content */}
                <div className="relative flex flex-col items-center px-[120px] py-10">
                    <h2 className="text-[28px] leading-[48px] font-semibold text-white">Let’s Build Something Real</h2>
                    <p className="mt-4 text-[18px] leading-[28px] text-[#E0E0E0] text-center">
                        Your idea deserves more than just a plan. Let’s turn it into a working AI product.
                    </p>
                    <button className="mt-8 inline-flex items-center justify-center h-[48px] px-[24px] text-[16px] font-medium text-black bg-white rounded-[8px]">
                        Talk to Our Team →
                    </button>
                </div>
            </div>
        </section>
    );
}
