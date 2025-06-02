"use client";

import React from "react";
import BrilliantButton from "../widgets/BrilliantButtons";

export default function HeroSection() {
	return (
		<section className="bg-[url('/contact-us/hero.svg')] bg-center bg-no-repeat w-full bg-cover px-20">
			{/* Hero overlay */}
			<div className="">
				<div className="pt-40 pb-10 text-white">
					<h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium">
						Get In Touch With Us
					</h1>
				</div>
			</div>

			{/* Content + Stats */}
			<div className="flex flex-col md:flex-row gap-12 pb-20">
				<div className="text-white w-[70%] line-spacing-8">
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
					<BrilliantButton className="mt-10" variant="gradient">
						Get in Touch
					</BrilliantButton>
				</div>
			</div>
		</section>
	);
}
