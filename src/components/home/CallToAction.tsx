// components/CallToAction.tsx
import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-[#011010]">
            {/* Background SVG (Grid Border) */}
            <Image
                src="/home/border.svg"
                alt="Grid Background"
                fill
                className="object-contain pointer-events-none"
            />

            {/* Content */}
            <div className="relative z-10 text-center px-4 mb-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white ">
                    Ready to build what’s next?
                    <br />
                    We’re here to make it happen.
                </h2>
                <Link href="/contact">
                    <button className="mt-4 px-6 py-2 text-sm sm:text-base bg-teal-400 hover:bg-teal-500 text-black rounded-full transition-all">
                        Get in touch →
                    </button>
                </Link>
            </div>
        </section>
    );
}
