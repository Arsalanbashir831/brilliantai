// components/IdeaToImpact.tsx
import Image from "next/image";

const steps = [
    {
        title: "Discovery and Planning",
        icon: "/home/impact1.svg",
        description:
            "We begin by aligning on your vision, objectives and business challenges. This phase identifies where AI can deliver the most meaningful impact.",
    },
    {
        title: "Technical Scoping",
        icon: "/home/impact2.svg",
        description:
            "We define system requirements, outline the architecture and select the most effective models, tools and technologies for your use case.",
    },
    {
        title: "Build and Refine",
        icon: "/home/impact3.svg",
        description:
            "Our team executes in structured sprints, building your solution in phases with regular validation, testing and refinement.",
    },
    {
        title: "Launch and Scale",
        icon: "/home/impact4.svg",
        description:
            "We deliver production-ready systems with clean deployment, full documentation and optional support to ensure long-term success.",
    },
];

export default function IdeaToImpact() {
    return (
        <section className="py-20 px-[60] bg-[#011010] text-white ">
            <div className="md:max-w-[1200px] mx-auto text-center">
                <h2 className=" text-3xl md:text-6xl  font-semibold mb-4">From Idea To Impact</h2>
                <div className="text-white  text-center text-base sm:text-lg mb-28">
                    <p className=" w-[82%] md:max-w-xl  mx-auto text-md">
                        We deliver AI solutions fast and safely, from concept to scale, driving
                        real results with full-cycle support and seamless integration.
                    
                    </p>                   
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left px-[40px]    ">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-start">
                            <Image
                                src={step.icon}
                                alt={step.title}
                                width={60}
                                height={60}
                                className="mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-[13px] text-white/80">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
