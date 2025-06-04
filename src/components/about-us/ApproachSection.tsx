// app/components/ApproachSection.tsx
"use client";

import React from "react";
import { ShineBorder } from "../magicui/shine-border";

const steps = [
	{
		step: "STEP 1",
		title: "We Start with You",
		text: `Every project begins with structured conversations designed to understand your objectives, challenges and goals. This allows us to align early and ensure every decision is tailored to your business needs.`,
	},
	{
		step: "STEP 2",
		title: "We Design and Build Together",
		text: `We transform your vision into intelligent systems through collaboration, building custom applications, models, and workflows with full transparency—keeping you informed and involved throughout.`,
	},
	{
		step: "STEP 3",
		title: "We Validate Every Detail",
		text: `Before anything is launched, we test thoroughly for accuracy, performance and reliability. From data flow to real-world usage, we make sure the solution performs under real conditions and delivers as expected.`,
	},
	{
		step: "STEP 4",
		title: "We Stay Close",
		text: `We remain available and engaged beyond delivery. Whether you need refinements, scaling support or technical guidance, our team is always on hand and ready to respond. You will never be left waiting.`,
	},
];

export default function ApproachSection() {
	return (
		<section className="py-20 ">
			<div className="max-w-7xl mx-auto px-9">
				{/* Header */}
				<h2 className="text-4xl md:text-5xl font-semibold text-white text-center">
					Our Approach
				</h2>
				<p className="mt-2 text-lg text-white text-center">
					Collaborative, responsive and focused on outcomes that matter to you
				</p>
				<p className="mt-4 text-center text-gray-300 max-w-2xl mx-auto leading-relaxed">
					We act as a true partner throughout every stage of your project. From
					the first conversation to long-term optimisation, we remain engaged,
					transparent and committed to building AI systems that deliver real
					results.
				</p>

				{/* Steps Grid */}
				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{steps.map(({ step, title, text }) => (
						<div
							key={step}
							style={{
								boxShadow: "inset -20px 4px 120px -80px #1FBBBB",
							}}
							className="
                                relative
                                rounded-2xl
                                p-6
                                border border-white/10
                                bg-[radial-gradient(circle,#4d4d4d00,#9797971A)]
                            ">
							<ShineBorder shineColor={["#23D5D5", "#00FFFF"]} />
							<span className="text-base md:text-xl font-normal text-white text-shadow-[0_0px_10px_#ffffff]">
								{step}
							</span>
							<h3 className="mt-2 text-xl md:text-2xl font-bold text-white">
								{title}
							</h3>
							<p className="mt-3 font-normal text-sm md:text-[15px] text-[#BABABA] leading-relaxed">
								{text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
