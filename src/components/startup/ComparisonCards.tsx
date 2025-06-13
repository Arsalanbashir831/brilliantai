"use client";

import React from "react";
import { Check, X } from "lucide-react";
import clsx from "clsx";

const comparisonData = [
	{
		title: "Freelancers",
		highlight: false,
		points: [
			"Unreliable timelines",
			"Limited and inconsistent",
			"Rare to find",
			"No long-term accountability",
			"Disjointed and informal",
			"Hard to scale with confidence",
			"Inconsistent quality",
		],
		icon: <X className="w-5 h-5 text-red-400" />,
	},
	{
		title: "Brilliant AI",
		highlight: true,
		points: [
			"Fast execution with technical precision",
			"AI specialists with deep engineering",
			"Proven experience in real AI systems",
			"Long-term thinking with full transparency",
			"Direct, responsive and founder-friendly",
			"Built to scale your product & infrastructure",
			"Lean, structured and built for efficiency",
		],
		icon: <Check className="w-5 h-5 text-emerald-400" />,
	},
	{
		title: "Agencies",
		highlight: false,
		points: [
			"Slow, process-heavy",
			"Generalist teams",
			"Surface-level or outsourced",
			"Vendor mindset",
			"Layered and slow",
			"High cost as needs grow",
			"Expensive for early stage",
		],
		icon: <X className="w-5 h-5 text-red-400" />,
	},
];

export default function ComparisonCards() {
	return (
		<div className="px-4 sm:px-6 md:px-40 pb-32">
			<div className="text-center mb-10">
				<h2 className="md:text-5xl text-4xl leading-normal text-white font-semibold">
					What Makes Us Different
				</h2>
				<p className="text-[18px] leading-[28px] text-[#E0E0E0] mt-2">
					Why founders choose Brilliant AI over freelancers, agencies or
					building in-house
				</p>
			</div>

			<div className="flex flex-col md:flex-row justify-center items-start gap-6 pt-16">
				{comparisonData.map(({ title, points, icon, highlight }) => (
					<div
						key={title}
						className={clsx(
							"relative flex flex-col items-stretch w-full md:w-80 transition-all duration-300 shadow-[inset_-20px_4px_120px_0px_rgba(31,187,187,0.14)] backdrop-blur-[15px]",
							highlight && "md:w-96 scale-105 shadow-lg border border-teal-400/40 rounded-2xl bg-gradient-to-br from-[#00F0FF1A] to-[#0BFFFF0A]",
							!highlight && "bg-[#1a1a1a]/10 rounded-xl"
						)}
					>
						{/* Title */}
						<div
							className={clsx(
								"flex flex-col justify-center items-center gap-2 w-full h-16 px-8 rounded-t-xl",
								highlight
									? "bg-gradient-to-r from-cyan-800 to-teal-700 text-white font-bold text-xl shadow-inner"
									: "bg-[rgba(77,77,77,0.24)] text-white font-medium"
							)}
						>
							<span>{title}</span>
						</div>

						{/* Body */}
						<div
							className={clsx(
								"flex flex-col items-center w-full py-10 px-4 rounded-b-xl",
								highlight
									? "bg-transparent"
									: "bg-[rgba(52,52,52,0.12)] backdrop-blur-md"
							)}
						>
							<ul className="flex flex-col space-y-4">
								{points.map((text) => (
									<li key={text} className="flex items-start gap-3">
										{icon}
										<span className="text-[#E0E0E0] font-medium text-md leading-[24px]">
											{text}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
