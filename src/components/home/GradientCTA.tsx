// components/GradientCTA.tsx
import Image from "next/image";

import BrilliantButton from "../widgets/BrilliantButtons";

export default function GradientCTA() {
    return (
        <section className="w-full flex justify-center px-0 md:px-4 py-20">
            <div className=" relative w-full h-[300px] max-w-6xl md:h-[200px] rounded-none md:rounded-xl overflow-hidden flex items-center justify-between px-6 sm:px-10 text-white">
                {/* Background Image */}
                <Image
                    src="/home/grain.svg"
                    alt="Gradient Background"
                    fill
                    className="object-cover"
                />

                {/* Black overlay */}
                <div className="absolute inset-0 md:bg-black/80 bg-[#001112]/80 z-0" />

                {/* Overlay Content */}
                <div className="relative z-10 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between px-5">
                    <div className="mb-4 sm:mb-0">
                        <h3 className="text-2xl text-center md:text-left font-bold mb-1">
                            Want to explore what AI can do for you?
                        </h3>
                        <p className="text-sm text-center md:text-left text-white/80 w-full md:max-w-[73%]">
                            We’re dedicated to delivering impactful solutions that drive value and elevate
                            the experience for every client.
                        </p>
                    </div>
                    <div className="m-auto md:m-0">
                    <BrilliantButton  variant="white">
                   Get in Touch
                   </BrilliantButton>
                    </div>
                  
                </div>
            </div>
        </section>
    );
}
