// components/EndToEndTeam.tsx
import { zoomVariants } from "@/effects/Effects";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";


const services = [
    {
        title: "Machine Learning Engineering",
        description:
            "We design, fine-tune and deploy advanced models tailored to your use case, whether working with foundational LLMs or building custom algorithms from scratch.",
        icon: "/home/trust1.svg",
    },
    {
        title: "Software Engineering",
        description:
            "Our full stack developers build scalable, production-ready applications. From robust backend architecture to modern responsive frontends, we engineer systems built for long term success.",
        icon: "/home/trust2.svg",
    },
    {
        title: "AI Architecture & Systems Design",
        description:
            "Our AI architects lead system design to ensure every solution is technically sound, scalable and aligned with your strategic and operational goals.",
        icon: "/home/trust3.svg",
    },
    {
        title: "Integration Engineering",
        description:
            "We ensure seamless integration of AI within your existing technology stack. Our engineers prioritise interoperability, clean handoffs and future-proof design.",
        icon: "/home/trust4.svg",
    },
    {
        title: "Data Science and Analytics",
        description:
            "High-performing AI systems begin with well prepared data. Our data team ensures your models are trained on clean, structured and high value information.",
        icon: "/home/trust5.svg",
    },
    {
        title: "UX and Product Design",
        description:
            "We combine technical capability with product thinking, translating complex AI functionality into clean, intuitive user experiences.",
        icon: "/home/trust6.svg",
    },
];

export default function EndToEndTeam() {
    return (
        <section className="py-20 bg-[#011010] text-white px-4">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-6xl  font-semibold mb-4">
                    A Trusted End-To-End Team
                </h2>
                <div className="text-white/80  text-center text-base sm:text-lg mb-28">
                    <p className="max-w-2xl mx-auto">
                        Our team is committed to building your AI solution with end-to-end precision,
                        clear communication and zero compromise.

                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl m-auto ">
                {services.map((service, idx) => (
                    <motion.div
                    whileHover={'hover'}
                    variants={zoomVariants}
                        key={idx}
                        className="rounded-2xl p-6 relative overflow-hidden cursor-pointer
                       bg-[linear-gradient(110.72deg,_rgba(77,77,77,0.24)_1.21%,_rgba(151,151,151,0.04)_100%)]
        shadow-[inset_-20px_4px_120px_-80px_rgba(31,187,187,0.14)]
        backdrop-blur-[30px] border-t border-teal-400/20  transition-colors duration-300
             "
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10 bg-[linear-gradient(151.06deg,_rgba(217,217,217,0.09)_10.77%,_rgba(255,255,255,0)_85.22%)]">
                                <Image src={service.icon} alt={service.title} width={24} height={24} />
                            </div>
                            <h3 className="text-[16px] font-semibold">{service.title}</h3>
                        </div>
                        <p className="text-sm text-[#96CDCD]">{service.description}</p>
                        <div className="mt-4 text-sm text-teal-400 font-medium flex items-center justify-end">
                            Show more <ChevronDown className="ml-1 h-4 w-4" />
                        </div>
                        {/* <BorderBeam colorFrom={'#23D5D5'} colorTo={'#00FFFF'} duration={8} size={100} /> */}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
