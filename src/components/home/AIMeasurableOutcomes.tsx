// components/AIMeasurableOutcomes.tsx
import Image from "next/image";

export default function AIMeasurableOutcomes() {
    return (
        <section className="bg-[#011010] text-white py-20 px-20">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    AI That Drive Measurable Outcomes
                </h2>
                <p className="text-white/80 text-base sm:text-lg max-w-3xl mx-auto">
                    We craft AI solutions that tackle key operational challenges, enhance efficiency, and
                    unlock new opportunities. Here’s how our clients leverage AI in their organisations.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-10 ">
                {/* Sidebar List */}
                <ul className="space-y-10 text-left text-white/80 w-full lg:w-1/3 text-lg pl-10">
                    <li className="relative text-white font-medium">
                        <span className="absolute left-0 top-1 h-full w-[2px] bg-teal-400 rounded-full" />
                        &nbsp;&nbsp;Internal AI Assistants
                    </li>
                    <li>| Conversational AI for Support</li>
                    <li>| AI-Driven Process Automation</li>
                    <li>| Document Intelligence</li>
                </ul>

                {/* Image Card */}
                <div className="relative bg-[#052E2B] rounded-2xl p-8 flex flex-col justify-between gap-5  w-full lg:w-2/3 h-96  text-white font-sans overflow-hidden">
                    <div>
                        {/* 1. Heading */}
                        <h2 className="text-2xl font-semibold">Internal AI Assistants</h2>

                        {/* 2. Subtitle */}
                        <p className="mt-2 mb-1 text-[#A3BABF] leading-relaxed max-w-lg">
                            Equip teams with AI-powered tools that <br /> enable fast information retrieval,
                            content <br /> generation and task execution.
                        </p>
                        
                        {/* 4. CTA */}
                        <button className=" bg-white text-[#052E2B] px-3 py-2 mt-4 rounded-lg font-small">
                            Get in touch →
                        </button>

                    </div>

                    {/* 3. Your single SVG */}
                    <Image
                        height={400}
                        width={400}
                        src="/home/aiassistant.svg"
                        alt="Marketing AI Assistant"
                        className="absolute top-35 right-14 w-96"
                    />


                    {/* 5. Footer line */}
                    <div className="flex items-center mt-6 text-sm text-[#A3BABF]">
                        {/* checkmark icon */}
                        <Image src="/home/checkmark.svg" alt="Checkmark" width={26} height={26} className="mr-2" />
                        Boosts productivity across departments from marketing to operations.
                    </div>
                </div>
            </div>
        </section>
    );
}


