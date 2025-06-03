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
		<section className="py-20 bg-[#011010] text-white ">
			<div className="max-w-6xl mx-auto text-center mb-12">
				<h2 className="text-4xl md:text-6xl font-semibold mb-4">
					A Trusted End-To-End Team
				</h2>
				<div className="text-white/80 text-center text-base sm:text-lg mb-28">
					<p className="w-[85%] md:w-full md:max-w-2xl mx-auto">
						Our team is committed to building your AI solution with end-to-end
						precision, clear communication and zero compromise.
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:px-[200px] px-[20px] mx-auto">
				{services.map((service, idx) => (
					<motion.div
						key={idx}
						initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{
							delay: idx * 0.2,
							duration: 0.5,
							ease: "easeOut",
						}}
						whileHover="hover"
						variants={zoomVariants}
						className="
              flex
                flex-col
                md:flex-row
              gap-4
              rounded-2xl
              p-6
              relative
              overflow-hidden
              cursor-pointer
              bg-[linear-gradient(110.72deg,_rgba(77,77,77,0.24)_1.21%,_rgba(151,151,151,0.04)_100%)]
              shadow-[inset_-20px_4px_120px_-80px_rgba(31,187,187,0.14)]
              backdrop-blur-[30px]
              border-t border-teal-400/20
              transition-colors duration-300
            ">
						<div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border border-white/10 bg-[linear-gradient(151.06deg,_rgba(217,217,217,0.09)_10.77%,_rgba(255,255,255,0)_85.22%)]">
							<Image
								src={service.icon}
								alt={service.title}
								width={24}
								height={24}
								loading="lazy"
								decoding="async"
								priority={false}
							/>
						</div>

						<div className="flex-1 flex flex-col">
							<h3 className="text-[18px] font-semibold text-white leading-[28px] mb-[8px]">
								{service.title}
							</h3>
							<p className="text-[17px] text-[#96CDCD] leading-[22px] mb-auto">
								{service.description}
							</p>
							<div className="self-end mt-4 flex items-center gap-1 text-white/80 text-sm cursor-pointer">
								Show more
								<ChevronDown className="w-4 h-4" />
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
