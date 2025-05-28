"use client";

import Image from "next/image";
import { FC } from "react";

const CtaSection: FC = () => {
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
                <p className="text-gray-300 text-base md:text-lg">
                    Discover how our AI solutions can optimise your operations, boost
                    efficiency, and accelerate growth. Stay ahead of the competition with
                    our cutting-edge solutions.
                </p>

                <button
                    type="button"
                    className="
            w-[229px] h-[52px]
            flex items-center justify-center gap-[10px]
            rounded-[16px]
            bg-[linear-gradient(180deg,_#23D5D5_0%,_#1EB2B2_100%)]
            shadow-[inset_0px_2px_1px_0px_rgba(255,255,255,0.25),_inset_0px_-4px_2px_0px_rgba(0,0,0,0.25),_0px_0px_1px_4px_rgba(255,255,255,0.1),_0px_0px_180px_0px_rgba(35,213,213,1)]
            text-white font-medium
            hover:opacity-90 transition
          "
                >
                    Get in touch today →
                </button>
            </div>
        </section>
    );
};

export default CtaSection;
