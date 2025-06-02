// components/Hero.tsx
"use client";

import React from "react";

export default function Hero() {
	return (
		<section className="bg-[url('/startup/22.svg')] bg-center bg-cover">
			{/* ------------------- HERO TEXT ------------------- */}
			<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-20 py-20 md:py-40">
				<h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium leading-tight text-center md:text-center text-white">
					AI Product Engineering
					<br />
					for{" "}
					<span
						className="bg-gradient-to-r from-[#00AEFF] via-[#00DE94] to-[#00FF52] bg-clip-text text-transparent"
						style={{
							background:
								"linear-gradient(90deg, #00AEFF 16.33%, #00DE94 45.1%, #00FF52 73.68%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							backgroundClip: "text",
						}}>
						Startups
					</span>
				</h1>
				<div className="w-full  flex justify-center items-center mt-4">
					<p className="mt-4 text-md sm:text-lg max-w-3xl mx-auto md:mx-0 text-center md:text-center text-white">
						We help founders bring AI ideas to life. From focused MVPs to
						complete, scalable platforms, we deliver intelligent systems built
						for performance, speed and long-term growth.
					</p>
				</div>
			</div>

			{/* ------------------- STATS / SECOND SECTION ------------------- */}
			<div className="max-w-full mx-auto  sm:px-6 lg:px-20 py-8 md:py-16">
				<div className="flex flex-col md:flex-row justify-center items-start gap-8">
					{/* Left‐side Text (stacked above stats on mobile) */}
					<div className="md:w-1/2 space-y-4 px-4 text-white text-center md:text-left">
						<h2 className="text-3xl md:text-4xl leading-snug font-semibold">
							AI-Powered Solutions for Startup Success
						</h2>
						<p className="text-[#E0E0E0EE] text-lg">
							Brilliant AI is your dedicated technology partner, focused on
							delivering AI-powered product development for startups. Whether
							you’re building an MVP or scaling your core platform, we bring the
							technical expertise to turn ambitious ideas into investor-ready,
							real-world solutions.
						</p>
						<p className="text-[#E0E0E0EE] text-lg">
							We cover the entire delivery pipeline, including machine learning,
							web development, automation, and system integration. Our
							structured, results-driven approach ensures every product is built
							for speed, quality, and long-term growth.
						</p>
						<p className="text-[#E0E0E0EE] text-lg">
							Looking to validate an idea, accelerate development, or launch a
							complete AI product? We’re ready when you are.
						</p>
					</div>

					{/* Right‐side Stats Card */}
					<div className="md:w-1/2 w-full flex justify-center  md:justify-end">
						<div
							className="
                                w-full
                                max-w-[430px]
                                flex flex-col
                                rounded-0
                                md:rounded-[10px]
                                lg:rounded-[10px]
                                bg-[rgba(0,0,0,0.7)]
                                overflow-hidden
                            ">
							{/* Stat #1 */}
							<div className="flex-1 flex flex-col justify-center px-6 py-4">
								<p className="text-5xl font-normal text-white">130+</p>
								<p className="text-md leading-[28px] font-normal text-[#E0E0E0]">
									AI solutions successfully delivered
								</p>
							</div>
							<div
								className="
                                h-[1px]
                                w-full
                                bg-[linear-gradient(90deg,_#00AEFF_16.33%,_#00DE94_45.1%,_#00FF52_73.68%)]
                                "
							/>

							{/* Stat #2 */}
							<div className="flex-1 flex flex-col justify-center px-6 py-4">
								<p className="text-5xl font-normal text-white">98%</p>
								<p className="text-md leading-[28px] font-normal text-[#E0E0E0]">
									Internal quality assurance success rate
								</p>
							</div>
							<div
								className="
                                h-[1px]
                                w-full
                                bg-[linear-gradient(90deg,_#00AEFF_16.33%,_#00DE94_45.1%,_#00FF52_73.68%)]
                                "
							/>

							{/* Stat #3 */}
							<div className="flex-1 flex flex-col justify-center px-6 py-4">
								<p className="text-5xl font-normal text-white">40%</p>
								<p className="text-md leading-[28px] font-normal text-[#E0E0E0]">
									Year over year team growth and capability
								</p>
							</div>
							<div
								className="
                                h-[1px]
                                w-full
                                bg-[linear-gradient(90deg,_#00AEFF_16.33%,_#00DE94_45.1%,_#00FF52_73.68%)]
                                "
							/>

							{/* Stat #4 */}
							<div className="flex-1 flex flex-col justify-center px-6 py-4">
								<p className="text-5xl font-normal text-white">5</p>
								<p className="text-md leading-[28px] font-normal text-[#E0E0E0]">
									Supporting startup teams from idea to launch
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
