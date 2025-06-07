"use client";

import React from "react";
import BrilliantButton from "../widgets/BrilliantButtons";
import useMobile from "@/hook/useMobile";
import { useRouter } from "next/navigation";

export default function HeroSection() {
	const isMobile = useMobile()
	const router =useRouter()
	return (
		<section style={
			isMobile
			  ? {
				  backgroundPositionX: "-745px",
				  backgroundPositionY: "0px",
				}
			  : {}
		  }className="bg-[url('/contact-us/hero.svg')] bg-center bg-no-repeat w-full bg-cover  ">
			{/* Hero overlay */}
			<div className="md:px-20 px-7">
				<div className=" pt-10 md:pt-40 pb-10 text-white">
					<h1 className=" text-4xl md:text-4xl  text-center md:text-left lg:text-7xl md:font-bold font-light ">
						Get In Touch With Us
					</h1>
				</div>
			</div>

			{/* Content + Stats */}
			<div className="flex flex-col md:flex-row gap-12 pb-20 md:px-10">
				<div className="text-white md:w-[60%] px-10 md:text-xl text-md line-spacing-8">
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
					<BrilliantButton onClick={()=>router.push('/contact-us')} className="mt-10" variant="gradient">
						Get in Touch
					</BrilliantButton>
				</div>
			</div>
		</section>
	);
}
