// components/ComparisonCards.tsx
'use client';

import React from 'react';
import { Check, X } from 'lucide-react';

export default function ComparisonCards() {
    return (
        <div className="px-40 pb-32">
            <div className="text-center mb-10">
                <h2 className="text-5xl leading-normal text-white font-semibold">
                    What Makes Us Different
                </h2>
                <p className="text-[18px] leading-[28px] text-[#E0E0E0] mt-2">
                    Why founders choose Brilliant AI over freelancers, agencies or building in-house
                </p>
            </div>

            <div className="flex justify-center items-start gap-4 pt-16 px-40">
                {/* Freelancers */}
                <div className="flex flex-col items-center mt-8">
                    {/* Title */}
                    <div className="flex flex-col justify-center items-center gap-2 w-80 h-16 p-8 rounded-tl-lg rounded-tr-lg bg-[linear-gradient(111deg,_rgba(77,77,77,0.24)_1.21%,_rgba(151,151,151,0.04)_100%)] shadow-[inset_-20px_4px_120px_-80px_rgba(31,187,187,0.14)] backdrop-blur-[15px]">
                        <span className="text-white font-medium text-xl leading-6">Freelancers</span>
                    </div>
                    {/* Body */}
                    <div className="flex flex-col items-center gap-10 w-80 pt-px pb-12 rounded-b-lg   bg-[linear-gradient(111deg,_rgba(77,77,77,0.12)_1.21%,_rgba(151,151,151,0.02)_100%)] shadow-[inset_-20px_4px_120px_-80px_rgba(31,187,187,0.14)] backdrop-blur-[15px]">
                        <ul className="flex flex-col space-y-3 py-14">
                            {[
                                'Unreliable timelines',
                                'Limited and inconsistent',
                                'Rare to find',
                                'No long-term accountability',
                                'Disjointed and informal',
                                'Hard to scale with confidence',
                                'Inconsistent quality',
                            ].map((text) => (
                                <li key={text} className="flex items-center gap-[10px]">
                                    <X className="w-5 h-5 text-[#E0E0E0]" />
                                    <span className="text-[#E0E0E0] font-medium text-md leading-[24px] ">
                                        {text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Brilliant AI */}
                <div className="flex flex-col items-center mt-4">
                    {/* Title */}
                    <div className="flex flex-col justify-center items-center gap-[10px] w-96 h-16 p-[32px] rounded-tl-[16px] rounded-tr-[16px] bg-[linear-gradient(111deg,_rgba(77,77,77,0.24)_1.21%,_rgba(151,151,151,0.04)_100%)] shadow-[inset_-20px_4px_120px_0px_rgba(31,187,187,0.14)] backdrop-blur-[15px]">
                        <span className="text-white font-medium text-[30px] leading-[24px]">Brilliant AI</span>
                    </div>
                    {/* Body */}
                    <div className="flex flex-col items-center gap-[49px] w-96 pb-[60px] rounded-b-[16px]   bg-[linear-gradient(111deg,_rgba(77,77,77,0.24)_1.21%,_rgba(151,151,151,0.04)_100%)] shadow-[inset_-20px_4px_120px_0px_rgba(31,187,187,0.14)] backdrop-blur-[15px]">
                        <ul className="flex flex-col space-y-3 py-16">
                            {[
                                'Fast execution with technical precision',
                                'AI specialists with deep engineering',
                                'Proven experience in real AI systems',
                                'Long-term thinking with full transparency',
                                'Direct, responsive and founder-friendly',
                                'Built to scale your product & infrastructure',
                                'Lean, structured and built for efficiency',
                            ].map((text) => (
                                <li key={text} className="flex items-center gap-[10px]">
                                    <Check className="w-5 h-5 text-[#E0E0E0]" />
                                    <span className="text-[#E0E0E0] font-medium text-md leading-[24px] ">
                                        {text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Agencies */}
                <div className="flex flex-col items-center mt-8">
                    {/* Title */}
                    <div className="flex flex-col justify-center items-center gap-2 w-80 h-16 p-8 rounded-tl-lg rounded-tr-lg bg-[linear-gradient(111deg,_rgba(77,77,77,0.24)_1.21%,_rgba(151,151,151,0.04)_100%)] shadow-[inset_-20px_4px_120px_-80px_rgba(31,187,187,0.14)] backdrop-blur-[15px]">
                        <span className="text-white font-medium text-xl leading-6">Agencies</span>
                    </div>
                    {/* Body */}
                    <div className="flex flex-col items-center gap-10 w-80 pt-px pb-12 rounded-b-lg  bg-[linear-gradient(111deg,_rgba(77,77,77,0.12)_1.21%,_rgba(151,151,151,0.02)_100%)] shadow-[inset_-20px_4px_120px_-80px_rgba(31,187,187,0.14)] backdrop-blur-[15px]">
                        <ul className="flex flex-col space-y-3 py-14">
                            {[
                                'Slow, process-heavy',
                                'Generalist teams',
                                'Surface-level or outsourced',
                                'Vendor mindset',
                                'Layered and slow',
                                'High cost as needs grow',
                                'Expensive for early stage',
                            ].map((text) => (
                                <li key={text} className="flex items-center gap-[10px]">
                                    <X className="w-5 h-5 text-[#E0E0E0]" />
                                    <span className="text-[#E0E0E0] font-medium text-md leading-[24px] ">
                                        {text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
