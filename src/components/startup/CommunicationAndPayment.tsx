// components/CommunicationAndPayment.tsx
'use client'

import { Check } from 'lucide-react'
import Image from 'next/image'

export default function CommunicationAndPayment() {
    return (
        <section
            className="
        max-w-screen-xl    /* cap the total width */
        mx-auto             /* center it */
        px-4 sm:px-6 lg:px-40 /* responsive horizontal padding */
        py-20
      "
        >
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Text */}
                <div className="space-y-6">
                    <p className="text-md uppercase text-white font-normal">
                        COMMUNICATION AND COLLABORATION
                    </p>
                    <h3 className="text-4xl font-semibold text-white">
                        Built on clarity, speed and access
                    </h3>
                    <ul className="space-y-4">
                        {[
                            'You will have direct access to your project lead',
                            'Regular video calls are scheduled throughout the build',
                            'We are available on short notice to resolve blockers or answer urgent questions',
                            'All communication is structured, responsive and aligned with your timeline',
                        ].map((txt) => (
                            <li key={txt} className="flex items-start gap-4">
                                <Check className="w-5 h-5 flex-shrink-0 text-[#E0E0E0]" />
                                <span className="text-md leading-[24px] font-medium text-[#E0E0E0]">
                                    {txt}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Icon */}
                <div className="flex justify-center md:justify-end">
                    <Image
                        src="/startup/lightning.svg"
                        alt="Lightning"
                        width={300}
                        height={300}
                        className="max-w-xs w-full h-auto"
                    />
                </div>
            </div>

            {/* Row 2 */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Icon */}
                <div className="flex justify-center md:justify-start">
                    <Image
                        src="/startup/Coins.svg"
                        alt="Coins"
                        width={350}
                        height={350}
                        className="max-w-xs w-full h-auto"
                    />
                </div>

                {/* Text */}
                <div className="space-y-6">
                    <p className="text-md uppercase text-white font-normal">
                        FLEXIBLE PAYMENT FOR STARTUPS
                    </p>
                    <h3 className="text-4xl font-semibold text-white">
                        We understand early-stage realities
                    </h3>
                    <ul className="space-y-4">
                        {[
                            'We offer staged or milestone-based payment options where appropriate',
                            'Flexible terms may be available for startup teams, depending on the project scope',
                            'All proposals are transparent, with no hidden costs or surprise fees',
                        ].map((txt) => (
                            <li key={txt} className="flex items-start gap-4">
                                <Check className="w-5 h-5 flex-shrink-0 text-[#E0E0E0]" />
                                <span className="text-md leading-[24px] font-medium text-[#E0E0E0]">
                                    {txt}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
