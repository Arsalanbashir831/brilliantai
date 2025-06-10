"use client";

const stats = [
	{
	  value: "AI SaaS Products",
	  label: "Cloud-native subscription platforms",
	},
	{
	  value: "AI MCP Products",
	  label: "Enterprise-grade multi-cloud solutions",
	},
	{
	  value: "AI Automation Products",
	  label: "End-to-end process automation",
	},
	{
	  value: "AI Chatbot Products",
	  label: "Conversational AI assistants",
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
							What We Create For Our Clients
						</h2>
						<p className="text-white font-normal text-sm text-center px-10 md:pl-0 md:text-left md:text-lg">
						At Brilliant AI, we turn your ideas into real-world AI solutions—from rapid MVP prototypes and custom machine-learning pipelines to end-to-end automation workflows and intuitive analytics dashboards. Every system is built on secure, scalable architecture, rigorously tested and monitored to perform under real operational demands. Through agile delivery and close collaboration, we deliver reliable, measurable outcomes that accelerate your growth and give you a lasting competitive edge.

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
											<span className="text-3xl font-normal text-white">
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
