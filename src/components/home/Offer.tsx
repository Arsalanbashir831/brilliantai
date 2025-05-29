import Card from "../Card";

export default function WhatWeOffer() {
	const services = [
		{
			imageSrc: "/home/conversational-ai1.svg",
			title: "Conversational AI",
			description:
				"Advanced chatbots and virtual agents designed to handle customer support, internal queries and dynamic interactions.",
		},
		{
			imageSrc: "/home/workflow-icons.svg",
			title: "Workflow Automations",
			description:
				"We automate your workflows to streamline repetitive tasks, enhance efficiency, save time, and eliminate errors.",
		},
		{
			imageSrc: "/home/Analytics Filter Data.svg",
			title: "Data Preparation",
			description:
				"Curation, cleaning and structuring of data to ensure high-quality inputs for effective AI and machine learning outcomes.",
		},
		{
			imageSrc: "/home/Code editor.svg",
			title: "AI Web Apps",
			description:
				"Custom-built applications powered by AI to deliver smarter user experiences and fast go-to-market.",
		},
		{
			imageSrc: "/home/Chart.svg",
			title: "AI Consulting",
			description:
				"Our experts provide strategic guidance, enabling your business to implement AI solutions that drive transformative growth.",
		},
	];

	return (
		<section id="services" className="py-20 px-4 text-center">
			<h2 className="text-6xl text-white font-semibold mb-4">What We Offer</h2>
			<p className="text-gray-100 max-w-xl text-xl mx-auto mb-20">
				We build AI solutions from idea to launch, ensuring speed, scalability,
				and real-world impact.
			</p>

			<div className="max-w-5xl mx-auto space-y-6">
				{/* Row 1: cards 1 & 2 */}
				<div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
					{services.slice(0, 2).map((svc, i) => (
						<Card
							key={i}
							{...svc}
							/* only card #2 (i===1) is full-bleed */
							imagePadding={i === 1 ? "p-0" : undefined}
						/>
					))}
				</div>

				{/* Row 2: cards 3, 4 & 5 */}
				<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
					{services.slice(2).map((svc, j) => {
						const idx = j + 2;
						return (
							<Card
								key={idx}
								{...svc}
								/* only card #5 (idx===4) is full-bleed */
								imagePadding={idx === 4 ? "p-0" : undefined}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}
