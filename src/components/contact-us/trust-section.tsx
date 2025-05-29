import Image from "next/image";

export function TrustSection() {
	return (
		<section className="px-6 py-16">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Why Clients Trust Us
					</h2>
					<p className="text-gray-300 text-lg">
						Discover What Makes Us Different
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Built for real delivery */}
					<div className="bg-slate-800/40 border border-slate-700/50 rounded-lg overflow-hidden">
						<div className="p-8 flex justify-center">
							<Image
								src="/contact-us/real-delivery.svg"
								alt="Real Delivery"
								width={100}
								height={100}
								className="text-teal-700"
							/>
						</div>
						<div className="bg-teal-900/30 p-6">
							<h3 className="text-xl font-semibold text-white mb-3">
								Built for real delivery
							</h3>
							<p className="text-gray-300 text-sm">
								We design, build and deploy intelligent systems that scale
							</p>
						</div>
					</div>

					{/* Trusted by product teams */}
					<div className="bg-slate-800/40 border border-slate-700/50 rounded-lg overflow-hidden">
						<div className="p-8 flex justify-center">
							<Image
								src="/contact-us/team.svg"
								alt="Real Delivery"
								width={100}
								height={100}
								className="text-teal-700"
							/>
						</div>
						<div className="bg-teal-900/30 p-6">
							<h3 className="text-xl font-semibold text-white mb-3">
								Trusted by product teams
							</h3>
							<p className="text-gray-300 text-sm">
								Startups and organisations rely on us to deliver what matters
							</p>
						</div>
					</div>

					{/* Deep AI capability */}
					<div className="bg-slate-800/40 border border-slate-700/50 rounded-lg overflow-hidden">
						<div className="p-8 flex justify-center">
							<Image
								src="/contact-us/real-delivery.svg"
								alt="Real Delivery"
								width={100}
								height={100}
								className="text-teal-700"
							/>
						</div>
						<div className="bg-teal-900/30 p-6">
							<h3 className="text-xl font-semibold text-white mb-3">
								Deep AI capability
							</h3>
							<p className="text-gray-300 text-sm">
								From LLMs to automation, we turn complex technology into working
								solutions
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
