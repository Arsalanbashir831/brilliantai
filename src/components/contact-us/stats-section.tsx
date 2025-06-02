const stats = [
	{ value: "130+", label: "AI solutions built" },
	{ value: "40%", label: "Year-over-year team growth" },
	{ value: "5", label: "Successful product exits" },
];

export function StatsSection() {
	return (
		<section className="md:px-20 py-20">
			<div className="">
				<div className="flex flex-col md:flex-row justify-center gap-12 md:gap-4">
					<div className="px-4 md:px-0">
						<h2 className="text-3xl md:text-[64px] mb-1 text-white font-normal md:font-medium">
							Empowering Innovation
						</h2>
						<p className="text-white text-sm md:text-xl font-normal pr-12 md:pr-0">
							From MVPs to enterprise AI systems, we help founders, product
							teams, and public sector organisations bring their AI visions to
							life with clarity and execution.
						</p>
					</div>
					<div className="md:w-3/5 flex justify-center justify-self-end relative">
						<div
							className="
																				
																				w-full md:max-w-[425px]       
																				flex flex-col
																				rounded-[10px]
																				
																		">
							{/* SVG gradient behind the panel */}
							<div className="absolute right-0 md:right-24 top-10 bg-gradient-to-r from-[#23D5D5] to-[#1EB2B2] blur-[60px] w-72 h-72 rounded-full" />
							{/* <Image
								src="/about/story.svg"
								alt=""
								width={1200}
								height={1200}
								className="absolute -right-10 top-0"
							/> */}

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
