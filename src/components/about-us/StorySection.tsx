"use client";
import Image from "next/image";

const stats = [
    { value: "130+", label: "AI solutions delivered" },
    { value: "21+", label: "Founders and teams supported" },
    { value: "6+", label: "Industries served" },
    { value: "100%", label: "Projects delivered on time" },
];

export default function StorySection() {
    return (
        <section className="pb-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12">

                    {/* — Left text */}
                    <div className="md:w-3/5 space-y-6 pl-20 text-white">
                        <h2 className="text-4xl md:text-5xl font-semibold">
                            Numbers are telling our story
                        </h2>
                        <p className="text-gray-300 w-4/5">
                            Brilliant AI is not an experimental lab or a prototype vendor. We are a
                            delivery-first AI partner, committed to building reliable, measurable and
                            scalable systems that perform in real operational environments.
                        </p>
                    </div>

                    {/* — Right stats panel */}
                    <div className="md:w-3/5 flex justify-center">
                        <div
                            className="
                            relative
                            w-full md:max-w-sm       
                            flex flex-col
                            rounded-[10px]
                            overflow-hidden
                        "
                        >
                            {/* SVG gradient behind the panel */}
                            <Image
                                src="/about/story.svg"
                                alt=""
                                fill
                                className="absolute inset-0 object-cover"
                            />

                            {/* semi-opaque overlay for contrast */}
                            <div className="absolute inset-0 bg-black/70" />

                            {/* stats content */}
                            <div className="relative z-10 flex flex-col">
                                {stats.map((stat, idx) => (
                                    <div key={stat.value}>
                                        <div className="px-6 py-3 flex flex-col">
                                            <span className="text-5xl font-normal text-white">
                                                {stat.value}
                                            </span>
                                            <span className="mt-1 text-md leading-[28px] font-normal text-[#E0E0E0]">
                                                {stat.label}
                                            </span>
                                        </div>
                                        {idx < stats.length - 1 && (
                                            <div className="mx-6 h-px bg-gradient-to-r from-[#00AEFF] via-[#00DE94] to-[#00FF52]" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
