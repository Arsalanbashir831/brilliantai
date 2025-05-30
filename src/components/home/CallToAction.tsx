// components/CallToAction.tsx
import Image from "next/image";
import BrilliantButton from "../widgets/BrilliantButtons";

export default function CallToAction() {
    return (
        <section className="relative w-full h-auto flex items-center justify-center overflow-hidden bg-[#011010] px-4 py-24 md:h-[600px] md:py-0">
            {/* Background SVG (Grid Border) */}
            <Image
                src="/home/border.svg"
                alt="Grid Background"
                fill
                className="object-contain pointer-events-none"
            />

            {/* Content */}
            <div className="relative z-10 text-center">
                <h2 className="text-xl sm:text-2xl md:text-5xl font-semibold text-white leading-snug">
                    Ready to build what’s next?
                    <br />
                    We’re here to make it happen.
                </h2>
                <BrilliantButton className="mt-5 px-6 py-3 text-sm md:text-base">
                    Get In Touch
                </BrilliantButton>
            </div>
        </section>
    );
}
