"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { fadeUpVariants } from "@/effects/Effects"; // your existing fade-up variants

interface Service {
	id: string;
	title: string;
	icon: string;
	detailImage: string;
	detailTitle: string;
	detailText: string;
}

const SERVICES: Service[] = [
	{
		id: "web",
		title: "AI Web Applications",
		icon: "/startup/icon1.svg",
		detailImage: "/startup/img1.svg",
		detailTitle: "Intelligent platforms built for growth",
		detailText:
			"We build AI-powered web applications that combine seamless user experience with robust backend intelligence. Whether it is a customer platform, internal tool or an entirely new product, we create scalable systems with real artificial intelligence built in from the beginning.",
	},
	{
		id: "mvp",
		title: "MVPs That Actually Work",
		icon: "/startup/icon2.svg",
		detailImage: "/startup/img2.svg",
		detailTitle: "Fast to market, ready to scale",
		detailText:
			"Your minimum viable product should do more than just function. It should deliver value to users, prove your concept and set the foundation for scale. We build MVPs that are fast, stable and built with long-term vision in mind.",
	},
	{
		id: "guide",
		title: "Technical Guidance",
		icon: "/startup/icon3.svg",
		detailImage: "/startup/img3.svg",
		detailTitle: "The clarity to move with confidence",
		detailText:
			"You may not need a full-time technical lead, but you do need the right advice at the right time. We support you with early architecture decisions, data strategy, AI implementation and product planning, helping you stay focused while we handle the build.",
	},
	{
		id: "integrate",
		title: "Seamless Integration",
		icon: "/startup/icon4.svg",
		detailImage: "/startup/img4.svg",
		detailTitle: "Connect everything that matters",
		detailText:
			"We connect your product to the tools and services your team and users already rely on. From payment providers and communication platforms to custom APIs and AI models, we make everything work together efficiently and reliably.",
	},
	{
		id: "cloud",
		title: "Cloud Ready Deployment",
		icon: "/startup/icon5.svg",
		detailImage: "/startup/img5.svg",
		detailTitle: "Stable, secure and built to grow",
		detailText:
			"We deploy every product using trusted cloud infrastructure such as AWS, Azure and Hostinger. Your platform will be secure, fast and able to scale as demand increases. No overengineering, no unnecessary complexity.",
	},
	{
		id: "ml",
		title: "Applied Machine Learning",
		icon: "/startup/icon6.svg",
		detailImage: "/startup/img6.svg",
		detailTitle: "Real models delivering real value",
		detailText:
			"We develop and integrate machine learning models that solve specific problems in your business. From language models to predictive analytics, we help you use AI in ways that are practical, accurate and measurable.",
	},
	{
		id: "growth",
		title: "Post Launch Growth Support",
		icon: "/startup/icon7.svg",
		detailImage: "/startup/img7.svg",
		detailTitle: "Ongoing improvement without disruption",
		detailText:
			"We continue working with you beyond launch. From feature rollouts to performance improvements, our team ensures your product evolves as your business grows. You focus on scaling; we ensure your technology keeps up.",
	},
];

export default function ServicesTabs() {
	/*** DESKTOP STATE (unchanged) ***/
	const [selectedId, setSelectedId] = useState<string>(SERVICES[0].id);
	const active = SERVICES.find((svc) => svc.id === selectedId) || SERVICES[0];

	/*** MOBILE STATE: now only an index (no “direction”) ***/
	const [mobileIndex, setMobileIndex] = useState<number>(0);
	const totalCount = SERVICES.length;
	const mobileActive = SERVICES[mobileIndex];

	const goToPrev = () => {
		setMobileIndex((prev) => (prev - 1 + totalCount) % totalCount);
	};
	const goToNext = () => {
		setMobileIndex((prev) => (prev + 1) % totalCount);
	};

	/*** Animation Variants for just the TEXT ***/
	// We will animate each text block with fadeUpVariants
	const textVariants: Variants = fadeUpVariants; // you can also define custom ones

	return (
		<section className="max-w-7xl mx-auto px-6 md:px-20 py-16 rounded-[16px]">
			{/* Header (same for both) */}
			<div className="text-center mb-16 max-w-5xl mx-auto">
				<h2 className="text-4xl md:text-6xl leading-normal text-white font-semibold">
					What We Deliver For Startups
				</h2>
				<p className="mt-2 text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] text-[#E0E0E0]">
					We know what it takes to launch in the early stages—speed without
					compromise, flexibility without confusion, and expert execution.
					Brilliant AI turns ideas into fully functional products with precision
					and structure.
				</p>
			</div>

			{/***
			 * MOBILE CAROUSEL (md:hidden)
			 * – No ‘slide’ animations on the container, just fade‐up for text
			 ***/}
			<div className="md:hidden bg-transparent border-gray-400 rounded-2xl p-5">
				<div className="flex flex-col items-start gap-4 text-left">
					{/* Icon is static (no animation) */}
					<div className="flex items-center justify-left w-full">
						<Image
							src={mobileActive.icon}
							alt={mobileActive.title}
							width={64}
							height={64}
						/>
					</div>

					{/* Animate service.title */}
					<motion.h3
						key={mobileActive.id + "-title"}
						variants={textVariants}
						initial="hidden"
						animate="visible"
						transition={{ duration: 0.4 }}
						className="text-white text-[18px] uppercase tracking-[1px]">
						{mobileActive.title}
					</motion.h3>

					{/* Animate detailTitle */}
					<motion.h4
						key={mobileActive.id + "-detailTitle"}
						variants={textVariants}
						initial="hidden"
						animate="visible"
						transition={{ duration: 0.4, delay: 0.1 }}
						className="text-lg font-semibold text-white mb-2">
						{mobileActive.detailTitle}
					</motion.h4>

					{/* Animate detailText */}
					<motion.p
						key={mobileActive.id + "-detailText"}
						variants={textVariants}
						initial="hidden"
						animate="visible"
						transition={{ duration: 0.4, delay: 0.2 }}
						className="text-[16px] leading-[24px] text-[#E0E0E0]">
						{mobileActive.detailText}
					</motion.p>
				</div>

				{/* Navigation controls (Prev/Next) */}
				<div className="mt-6 flex items-center justify-center gap-4">
					<button
						onClick={goToPrev}
						className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-white hover:bg-gray-700"
						aria-label="Previous">
						<ArrowLeft size={20} />
					</button>

					<span className="text-[14px]">
						<span className="text-white">
							{String(mobileIndex + 1).padStart(2, "0")}
						</span>
						<span className="text-gray-500"> of </span>
						<span className="text-gray-500">
							{String(totalCount).padStart(2, "0")}
						</span>
					</span>

					<button
						onClick={goToNext}
						className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-white hover:bg-gray-700"
						aria-label="Next">
						<ArrowRight size={20} />
					</button>
				</div>
			</div>

			{/***
			 * DESKTOP TABS + DETAIL (hidden on small, shown from md+)
			 * – Only TEXT (title + detailTitle + detailText) get fade‐up.
			 * – The icon/image sits static, only the copy fades in/out.
			 ***/}
			<div className="hidden md:block bg-transparent border border-gray-400 rounded-2xl p-5">
				{/* Tabs Row */}
				<div className="overflow-x-auto rounded-[16px]">
					<div className="flex pb-4">
						{SERVICES.map((svc) => {
							const isActive = svc.id === selectedId;
							return (
								<button
									key={svc.id}
									onClick={() => setSelectedId(svc.id)}
									className={`
                    flex
                    flex-col
                    items-center
                    flex-shrink-0
                    w-36
                    h-40
                    p-[32px]
                    m-1
                    gap-[10px]
                    rounded-[12px]
                    ${
											isActive
												? `
                      bg-[linear-gradient(110.72deg,_rgba(77,77,77,0.24)_1.21%,_rgba(151,151,151,0.04)_100%)]
                      border-[1px]
                      border-transparent rounded-[12px]
                      [border-image-source:linear-gradient(180deg,#23D5D5_0%,#1EB2B2_100%)]
                      [border-image-slice:1]
                      shadow-[0_0_4px_1px_#23D5D5]
                    `
												: `
                      bg-[linear-gradient(110.72deg,_rgba(77,77,77,0.12)_1.21%,_rgba(151,151,151,0.02)_100%)]
                      hover:bg-[rgba(77,77,77,0.16)] rounded-[12px]
                    `
										}
                  `}>
									<Image
										src={svc.icon}
										alt={svc.title}
										width={48}
										height={48}
										className="mb-3"
									/>
									<span className="text-white text-[11px]">{svc.title}</span>
								</button>
							);
						})}
					</div>
				</div>

				{/* Detail Panel */}
				<div className="mt-6 p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 px-16">
					{/* LEFT: static image (no animation on the image itself) */}
					<div className="flex justify-start">
						<Image
							src={active.detailImage}
							alt={active.detailTitle}
							width={350}
							height={350}
							className="rounded-[8px] object-contain"
						/>
					</div>

					{/* RIGHT: animate only the text portion */}
					<AnimatePresence mode="wait">
						<motion.div
							key={active.id + "-textblock"}
							variants={textVariants}
							initial="hidden"
							animate="visible"
							exit="hidden"
							transition={{ duration: 0.4 }}
							className="flex flex-col gap-4">
							<h4 className="text-md uppercase tracking-[1px] text-teal-400 mb-2">
								{active.title}
							</h4>
							<h3 className="text-4xl font-semibold text-white mb-4">
								{active.detailTitle}
							</h3>
							<p className="text-[18px] max-w-2xl leading-[28px] text-[#E0E0E0]">
								{active.detailText}
							</p>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}
