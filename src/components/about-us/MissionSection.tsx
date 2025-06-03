"use client";

import Image from "next/image";
import BrilliantButton from "../widgets/BrilliantButtons";
// import { ShineBorder } from "../magicui/shine-border";

export default function MissionSection() {
	return (
		<section className="py-20 ">
			<div className="max-w-full mx-auto px-0  flex flex-col  items-center gap-4">
				<h2 className="text-4xl md:text-[64px] text-center font-bold text-white">
					Our Mission
				</h2>
				<p style={{
					fontFamily:'Lufga Regular'
				}} className="text-white text-center text-[20px] text-normal px-5 md:px-0 ">
					To turn ambitious ideas into high performing AI systems
				</p>

				<div  className="flex md:pl-32 px-5 flex-col md:flex-row items-center gap-12 mt-4 w-full text-center md:text-left text-[16px] text-normal pt-10">
					{/* — Left text block */}
					<div className="md:w-1/2 space-y-6 text-white">
						<div  className="space-y-4">
							<p  style={{
					fontFamily:'Lufga Regular'
				}}>
								We help businesses turn concepts into reality with confidence,
								solving meaningful problems through intelligent and engineered
								solutions.
							</p>
							<p style={{
					fontFamily:'Lufga Regular'
				}}>
								Beyond building AI products, we build trust through deep
								expertise, consistent delivery, and clear communication. Our
								work drives growth, improves efficiency, and keeps clients ahead
								in an increasingly intelligent world.
							</p>
							<p style={{
					fontFamily:'Lufga Regular'
				}}>
								We are the most cost-effective AI development partner in the UK,
								delivering enterprise-level solutions with speed, precision, and
								focus without the unnecessary overhead.
							</p>
							<p style={{
					fontFamily:'Lufga Regular'
				}}>
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
