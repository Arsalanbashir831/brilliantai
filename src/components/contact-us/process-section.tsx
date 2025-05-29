import { CheckCircle } from "lucide-react";

const processSteps = [
	{
		step: "Step 1",
		title: "Your Enquiry Is Reviewed",
		items: [
			"Our Business Development Team carefully reviews your enquiry.",
			"We ensure that the right experts are involved from the start.",
			"You'll receive a response within one business day through your preferred contact method.",
		],
	},
	{
		step: "Step 2",
		title: "Discovery Call - Understanding Your Needs",
		items: [
			"If you choose to proceed, we schedule a discovery call.",
			"This session helps us understand your goals, challenges, and technical requirements in detail.",
			"Whether You Seek AI Consulting, A New Product, Or System Enhancements, This Call Ensures Alignment With Your Vision.",
		],
	},
	{
		step: "Step 3",
		title: "Proposal Tailored To You",
		items: [
			"Our technical team analyzes your needs to create a custom proposal.",
			"The proposal includes:",
			"• Scope Of Work (What We'll Deliver)",
			"• Project Timeline (How Long It Will Take)",
			"• Our Approach (The Technology And Methods We'll Use)",
		],
	},
	{
		step: "Step 4",
		title: "Execution & Guidance",
		items: [
			"Your initial point of contact remains actively engaged throughout the process.",
			"Once you approve the proposal, we introduce you to your dedicated delivery or consulting lead.",
			"They Will Guide The Entire Engagement, Ensuring Smooth Execution And Regular Updates.",
		],
	},
	{
		step: "Step 5",
		title: "Moving Forward At Your Pace",
		items: [
			"We move forward only when you are fully ready and confident in the next steps.",
			"Our focus is on structured execution, clear communication, and aligning with your needs.",
		],
	},
];

export function ProcessSection() {
	return (
		<section className="px-6 py-16 ">
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						What To Expect After You Hit Submit!
					</h2>
					<p className="text-gray-300 text-lg">
						Once you submit the enquiry form, here&rsquo;s how we move forward
					</p>
				</div>

				<div className="relative">
					{/* Timeline line */}
					<div className="absolute left-[115px] top-8 bottom-0 w-0.5 border-l-2 border-dashed border-cyan-500/40 h-[calc(100%-32px)]" />

					<div className="space-y-10">
						{processSteps.map((process, index) => (
							<div key={index} className="flex items-start">
								<div className="mr-6 flex-shrink-0">
									<div className="bg-transparent border border-cyan-500 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium w-[90px] text-center">
										{process.step}
									</div>
								</div>
								<div className="flex-1">
									<h3 className="text-xl font-semibold text-white mb-4">
										{process.title}
									</h3>
									<ul className="space-y-3">
										{process.items.map((item, itemIndex) => (
											<li key={itemIndex} className="flex items-start ml-3">
												<CheckCircle className="w-4 h-4 text-cyan-400 mt-1 mr-2 flex-shrink-0" />
												<span className="text-gray-300 text-sm">
													{item.startsWith("•") ? (
														<div className="ml-5">{item}</div>
													) : (
														item
													)}
												</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
