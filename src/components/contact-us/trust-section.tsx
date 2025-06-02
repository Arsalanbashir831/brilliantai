import Image from "next/image";

const trustItems = [
	{
		src: "/contact-us/real-delivery.png",
		alt: "Real Delivery",
		title: "Built for real delivery",
		description: "We design, build and deploy intelligent systems that scale",
	},
	{
		src: "/contact-us/team.png",
		alt: "Product Teams",
		title: "Trusted by product teams",
		description:
			"Startups and organisations rely on us to deliver what matters",
	},
	{
		src: "/contact-us/ri_speak-ai-fill.png",
		alt: "Deep AI Capability",
		title: "Deep AI capability",
		description:
			"From LLMs to automation, we turn complex technology into working solutions",
	},
];

export function TrustSection() {
	return (
		<section className="px-6 py-16 ">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-[64px] mb-1 text-white font-normal md:font-medium">
						Why Clients Trust Us
					</h2>
					<p className="text-white text-sm md:text-lg px-8">
						Discover What Makes Us Different
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{trustItems.map((item, idx) => (
						<div key={idx} className="p-[2px] rounded-2xl transition-shadow">
							<div
								className={`bg-cyan-900/10 backdrop-blur-md rounded-[inherit] flex flex-col items-center text-center space-y-12 p-4 border-1 border-cyan-900 ${
									idx === 1 ? "md:p-4 md:mt-16" : ""
								}`}>
								<Image
									src={item.src}
									alt={item.alt}
									width={154}
									height={154}
									className="mx-auto"
								/>
								<div
									style={{
										boxShadow: "inset -20px 4px 120px -80px #1FBBBB",
									}}
									className="p-8 rounded-2xl backdrop-blur-lg space-y-2 bg-[linear-gradient(145deg,#4D4D4D99,#9797971A)]">
									<h3 className="text-xl font-semibold text-white">
										{item.title}
									</h3>
									<p className="text-gray-300 text-sm">{item.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
