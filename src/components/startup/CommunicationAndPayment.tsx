// components/CommunicationAndPayment.tsx
'use client';

import React from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';

export default function CommunicationAndPayment() {
    return (
        <div className="px-40 py-20">
            {/* Row 1 */}
            <div className="flex items-center justify-between">
                {/* Text side */}
                <div className="flex flex-col space-y-6 w-1/2">
                    <p className="text-md uppercase text-white font-normal">
                        COMMUNICATION AND COLLABORATION
                    </p>
                    <h3 className="text-4xl font-semibold text-white">
                        Built on clarity, speed and access
                    </h3>
                    <ul className="flex flex-col space-y-4">
                        <li className="flex items-start gap-4">
                            <Check className="w-5 h-5 flex-shrink-0 text-[#E0E0E0]" />
                            <span className="text-md leading-[24px] font-medium text-[#E0E0E0]">
                                You will have direct access to your project lead
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <Check className="w-5 h-5 flex-shrink-0 text-[#E0E0E0]" />
                            <span className="text-md leading-[24px] font-medium text-[#E0E0E0]">
                                Regular video calls are scheduled throughout the build
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <Check className="w-5 h-5 flex-shrink-0 text-[#E0E0E0]" />
                            <span className="text-md leading-[24px] font-medium text-[#E0E0E0]">
                                We are available on short notice to resolve blockers or answer urgent questions
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <Check className="w-5 h-5 flex-shrink-0 text-[#E0E0E0]" />
                            <span className="text-md font-medium text-[#E0E0E0]">
                                All communication is structured, responsive and aligned with your timeline
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Icon side */}
                <div className="flex justify-end w-1/2">
                    <Image
                        src="/startup/lightning.svg"
                        alt="Lightning"
                        width={300}
                        height={300}
                        className="w-[250px] h-auto"
                    />
                </div>
            </div>

            {/* Gap between rows */}
            <div className="my-[80px]" />

            {/* Row 2 */}
            <div className="flex items-center justify-between gap-10">
                {/* Icon side */}
                <div className="flex justify-start w-1/2">
                    <Image
                        src="/startup/Coins.svg"
                        alt="Lightning"
                        width={350}
                        height={350}
                        className="w-[350px] h-auto"
                    />
                </div>
                
                {/* Text side */}
                <div className="flex flex-col space-y-6 w-1/2">
                    <p className="text-md uppercase text-white font-normal">
                        FLEXIBLE PAYMENT FOR STARTUPS
                    </p>
                    <h3 className="text-4xl font-semibold text-white">
                        We understand early-stage realities
                    </h3>
                    <ul className="flex flex-col space-y-4">
                        <li className="flex items-start gap-4">
                            <Check className="w-5 h-5 flex-shrink-0 text-[#E0E0E0]" />
                            <span className="text-md leading-[24px] font-medium text-[#E0E0E0]">
                                We offer staged or milestone-based payment options where appropriate
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <Check className="w-5 h-5 flex-shrink-0 text-[#E0E0E0]" />
                            <span className="text-md leading-[24px] font-medium text-[#E0E0E0]">
                                Flexible terms may be available for startup teams, depending on the project scope
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <Check className="w-5 h-5 flex-shrink-0 text-[#E0E0E0]" />
                            <span className="text-md leading-[24px] font-medium text-[#E0E0E0]">
                                All proposals are transparent, with no hidden costs or surprise fees
                            </span>
                        </li>
                       
                    </ul>
                </div>

                
            </div>
            
           
        </div>
    );
}
