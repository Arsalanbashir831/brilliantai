"use client";

import React from "react";
import BrilliantButton from "../widgets/BrilliantButtons";

export default function HeroSection() {
	return (
		<section className="bg-[url('/contact-us/mobile-hero.svg')] md:bg-[url('/contact-us/hero.svg')] bg-center bg-no-repeat w-full bg-cover px-9 md:px-20">
			{/* Hero overlay */}
			<div className="">
				<div className="pt-[52px] md:pt-40 pb-2 text-white">
					<h1 className="text-[32px] sm:text-5xl lg:text-6xl font-normal md:font-medium">
						Get In Touch With Us
					</h1>
				</div>
			</div>

			{/* Content + Stats */}
			<div className="flex flex-col md:flex-row gap-12 pb-20">
				<div className="text-[#E0E0E0EE] md:w-[70%] line-spacing-8 text-sm md:text-xl">
					<div className="py-2">
						If you are planning to build an AI product, implement machine
						learning, automate business processes or explore strategic AI
						consulting, we are ready to support you.
					</div>
					<div className="py-2">
						We work with startups, enterprise teams and public sector
						organisations to deliver intelligent systems that are designed for
						scale, stability and real-world impact.
					</div>
					<div className="py-2">
						Share your goals with us and we will show you how we can help you
						move forward with clarity and confidence.
					</div>
					<BrilliantButton
						className="mt-10 text-xs rounded-xl py-3 px-3.5"
						containerClassName="!flex items-center justify-center md:justify-start"
						variant="gradient">
						Get in Touch
					</BrilliantButton>
				</div>
			</div>
		</section>
	);
}
