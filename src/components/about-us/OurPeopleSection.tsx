"use client";

import Image from "next/image";

export default function OurPeopleSection() {
	return (
		<section className="py-20">
			<div className="max-w-7xl mx-auto px-9 flex flex-col md:flex-row items-center gap-12">
				{/* Text */}
				<div className="md:w-1/2 space-y-6 text-white">
					<h2 className="text-3xl md:text-6xl font-bold">Our People</h2>
					<p className="text-white text-sm md:text-xl font-normal leading-relaxed">
						Brilliant AI is built by a global team of engineers, data
						scientists, designers and product experts who care about doing
						things right. We value technical excellence, clear thinking,
						collaboration and precision.
					</p>
					<p className="text-white text-sm md:text-xl font-normal leading-relaxed">
						Our people stay close to the latest in artificial intelligence, take
						full ownership of delivery and focus on outcomes that matter. We
						work as one team with shared goals and strong accountability.
					</p>
					<p className="text-white text-sm md:text-xl font-normal leading-relaxed">
						Brilliant AI is defined by the people behind the work — and they are
						among the best in the field.
					</p>
				</div>

				{/* SVG Graphic */}
				<div className="md:w-1/2 justify-center hidden md:flex">
					<div className="relative w-full h-[280px] md:h-[360px]">
						<Image
							src="/about/ourPeople.svg"
							alt="Stylized bar chart with avatar icons representing our people"
							fill
							className="object-contain"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
