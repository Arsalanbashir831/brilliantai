"use client";

const stats = [
	{
	  value: "75K+",
	  label: "	Load-Tested Concurrent Users",
	},
	{
	  value: "30%",
	  label: "Latency Improvement faster than average",
	},
	{
	  value: "98%",
	  label: " Integration Success Rate",
	},
	{
	  value: "< 0.5%",
	  label: "Post-Launch Error Rate",
	},
  ];
  
export default function StorySection() {
	return (
		<section className="pb-20">
			<div className="max-w-7xl mx-auto md:px-10">
				<div className="flex flex-col md:flex-row gap-12">
					{/* — Left text */}
					<div className="md:w-3/5 space-y-6 text-white">
						<h2 className="text-2xl md:text-[64px] font-bold leading-tight text-white text-center md:text-left">
						Numbers are telling our story
						</h2>
						<p className="text-white font-normal text-sm text-center px-10 md:pl-0 md:text-left md:text-lg">
						Brilliant AI is not an experimental lab or a prototype vendor. We
							are a delivery-first AI partner, committed to building reliable,
							measurable and scalable systems that perform in real operational
							environments.
						</p>
					</div>

					{/* — Right stats panel */}
					<div className="md:w-2/5 flex justify-center relative">
						<div
							className="
																				
																				w-full md:max-w-[425px]       
																				flex flex-col
																				rounded-[10px]
																				
																		">
							{/* SVG gradient behind the panel */}
							<div className="absolute right-0 -top-28 md:right-10 md:top-10 bg-gradient-to-r from-[#23D5D5] to-[#1EB2B2] blur-[100px] w-76 h-76 md:w-96 md:h-96 rounded-full z-[-10]" />
							{/* <Image
								src="/about/story.svg"
								alt=""
								width={1200}
								height={1200}
								className="absolute -right-10 top-0"
							/> */}

							{/* semi-opaque overlay for contrast */}
							<div className="absolute inset-0 bg-black/70" />
							<div className="relative z-10 flex flex-col w-full">
								{stats.map((stat, idx) => (
									<div key={stat.value} className="w-full">
										<div className="px-10 py-5 flex flex-col">
											<span className="text-5xl font-normal text-white">
												{stat.value}
											</span>
											<span className="mt-1 text-md leading-[28px] font-normal text-[#E0E0E0]">
												{stat.label}
											</span>
										</div>
										{idx < stats.length - 1 && (
											<div className="h-px bg-gradient-to-r from-[#00AEFF] via-[#00DE94] to-[#00FF52] w-full" />
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
