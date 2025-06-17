"use client";

import Image from "next/image";
import { FC } from "react";
import BrilliantButton from "../widgets/BrilliantButtons";
import { useRouter } from "next/navigation";

const CtaSection: FC = () => {
    const router = useRouter()
    return (
        <section className="relative py-16 my-16 bg-teal-950 overflow-hidden">
            {/* full-bleed SVG background as <img> */}
            <Image
                src="/news/div.svg"
                alt=""
                height={900}
                width={900}
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10"
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-center items-center max-w-3xl mx-auto text-center px-4 space-y-6">
                <h2 className="text-3xl md:text-4xl font-semibold text-white">
                    Stay Ahead with Brilliant AI
                </h2>
                <p className="text-gray-300 text-base w-full max-w-5xl md:text-lg">
                    Discover how our AI solutions can optimise your operations, boost
                    efficiency, and accelerate growth. Stay ahead of the competition with
                    our cutting-edge solutions.
                </p>



                <BrilliantButton
               onClick={()=>router.push('/contact-us#contact-form')}
                    className=" w-[229px] h-[52px]
                        flex items-center justify-center gap-[10px]
                        rounded-[16px]
                        text-white font-medium
                    "
                >
                    Get in touch today
                </BrilliantButton>
            </div>
        </section>
    );
};

export default CtaSection;
