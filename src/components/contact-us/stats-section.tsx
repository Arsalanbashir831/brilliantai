import Image from "next/image";

const stats = [
	{ value: "130+", label: "AI solutions built" },
	{ value: "40%", label: "Year-over-year team growth" },
	{ value: "5", label: "Successful product exits" },
];

export function StatsSection() {
	return (
		<section className="px-6 py-16">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<div>
						<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
							Empowering Innovation
						</h2>
						<p className="text-gray-300 text-lg leading-relaxed">
							From MVPs to enterprise AI systems, we help founders, product
							teams, and public sector organisations bring their AI visions to
							life with clarity and execution.
						</p>
					</div>
					<div className="md:w-3/5 flex justify-center justify-self-end">
						<div
							className="
																				relative
																				w-full md:max-w-sm       
																				flex flex-col
																				rounded-[10px]
																				
																		">
							{/* SVG gradient behind the panel */}
							<Image
								src="/about/story.svg"
								alt=""
								width={1200}
								height={1200}
								className="absolute inset-0 object-cover"
							/>

							{/* semi-opaque overlay for contrast */}
							<div className="absolute inset-0 bg-black/70" />
							<div className="relative z-10 flex flex-col">
								{stats.map((stat, idx) => (
									<div key={stat.value}>
										<div className="px-10 py-5 flex flex-col">
											<span className="text-5xl font-normal text-white">
												{stat.value}
											</span>
											<span className="mt-1 text-md leading-[28px] font-normal text-[#E0E0E0]">
												{stat.label}
											</span>
										</div>
										{idx < stats.length - 1 && (
											<div className="h-px bg-gradient-to-r from-[#00AEFF] via-[#00DE94] to-[#00FF52]" />
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
