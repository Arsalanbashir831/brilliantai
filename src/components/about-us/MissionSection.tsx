"use client";

import Image from "next/image";
import BrilliantButton from "../widgets/BrilliantButtons";
// import { ShineBorder } from "../magicui/shine-border";

export default function MissionSection() {
	return (
		<section className="py-20 ">
			<div className="max-w-7xl mx-auto px-9 md:pl-24 flex flex-col  items-center gap-4">
				<h2 className="text-4xl md:text-5xl text-center font-semibold text-white">
					Our Mission
				</h2>
				<p className="text-white text-center text-sm text-normal">
					To turn ambitious ideas into high performing AI systems
				</p>

				<div className="flex flex-col md:flex-row items-center gap-12 mt-4 w-full text-center md:text-left text-sm text-normal">
					{/* — Left text block */}
					<div className="md:w-1/2 space-y-6 text-white">
						<div className="space-y-4">
							<p>
								We help businesses turn concepts into reality with confidence,
								solving meaningful problems through intelligent and engineered
								solutions.
							</p>
							<p>
								Beyond building AI products, we build trust through deep
								expertise, consistent delivery, and clear communication. Our
								work drives growth, improves efficiency, and keeps clients ahead
								in an increasingly intelligent world.
							</p>
							<p>
								We are the most cost-effective AI development partner in the UK,
								delivering enterprise-level solutions with speed, precision, and
								focus without the unnecessary overhead.
							</p>
							<p>
								Great ideas deserve exceptional execution. We make sure every
								project delivers on that promise.
							</p>
						</div>

						<BrilliantButton
							variant="white"
							className="mt-6 inline-block bg-white text-black font-medium px-2.5 md:px-6 py-3 rounded-xl hover:bg-gray-100 transition">
							Let’s build what’s next
						</BrilliantButton>
					</div>

					{/* — Right image block */}
					<div className="md:w-1/2 hidden md:block">
						<div className="relative w-full h-[360px] md:h-[440px] rounded-l-2xl overflow-hidden shadow-xl">
							{/* <ShineBorder shineColor={["#23D5D5", "#00FFFF"]} /> */}
							<Image
								src="/about/mission.svg"
								alt="Workflow of planning, coding, testing, building, monitoring"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
