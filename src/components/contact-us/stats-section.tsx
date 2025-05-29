import { Card, CardContent } from "@/components/ui/card";

const stats = [
	{ value: "130+", label: "AI solutions built" },
	{ value: "40%", label: "Year-over-year team growth" },
	{ value: "5", label: "Successful product exits" },
];

export function StatsSection() {
	return (
		<section className="px-6 py-16">
			<div className="max-w-6xl mx-auto">
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
					<div>
						<Card className="bg-slate-800/60 border-slate-700/50 backdrop-blur-sm">
							<CardContent className="p-0">
								{stats.map((stat, index) => (
									<div
										key={index}
										className={`p-6 ${
											index < stats.length - 1
												? "border-b border-slate-700/50"
												: ""
										}`}>
										<div className="text-4xl font-bold text-white mb-1">
											{stat.value}
										</div>
										<div className="text-gray-400 text-sm">{stat.label}</div>
									</div>
								))}
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
