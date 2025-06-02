import { CheckCircle } from "lucide-react";
import { ShineBorder } from "../magicui/shine-border";

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
		title: "Discovery Call – Understanding Your Needs",
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
		],
		subItems: [
			"Scope of work (What we'll deliver)",
			"Project timeline (How long it will take)",
			"Our approach (The technology and methods we'll use)",
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
		<section className="px-3 py-16">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-[64px] mb-4 text-white font-normal md:font-medium">
						What To Expect After You Hit Submit!
					</h2>
					<p className="text-white text-sm md:text-lg px-8">
						Once you submit the enquiry form, here’s how we move forward
					</p>
				</div>

				{/* Desktop View (Timeline) */}
				<div className="relative hidden md:block">
					{/* Continuous vertical dashed line, hidden behind pills */}
					<div className="absolute left-[50px] top-[14px] bottom-[14px] border-l-2 border-dashed border-cyan-500 z-0 h-[800px]" />

					{/* Steps and content */}
					<div className="relative space-y-10 z-10">
						{processSteps.map((process, index) => (
							<div key={index} className="flex items-start">
								{/* Step pill */}
								<div className="max-w-[110px] flex-shrink-0 text-center">
									<div className="relative mb-3 inline-block rounded-2xl px-4 py-1.5 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00AEFF] via-[#00DE94] to-[#00DE94] backdrop-blur-xl">
										<ShineBorder
											shineColor={[
												"#808080",
												"#23D5D5",
												"#23D5D51A",
												"#808080D9",
											]}
										/>
										{process.step}
									</div>
								</div>

								{/* Content */}
								<div className="ml-6 flex-1">
									<h3 className="text-2xl font-medium text-white mb-6">
										{process.title}
									</h3>
									<ul className="space-y-3">
										{process.items.map((item, itemIndex) => (
											<li key={itemIndex} className="flex items-start ml-3">
												<CheckCircle className="w-4 h-4 text-cyan-400 mt-1 mr-2 flex-shrink-0" />
												<span className="text-white !text-base font-normal md:text-sm px-2">
													{item.startsWith("•") ? (
														<div className="ml-5">{item}</div>
													) : (
														item
													)}
												</span>
											</li>
										))}
										{process.subItems && process.subItems.length > 0 && (
											<li className="ml-8 font-normal text-white -mt-3">
												<ul className="list-disc pl-8">
													{process.subItems.map((subItem, subIndex) => (
														<li key={subIndex}>{subItem}</li>
													))}
												</ul>
											</li>
										)}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Mobile View (Cards) */}
				<div className="block md:hidden space-y-6">
					{processSteps.map((step, index) => (
						<div key={index} className="rounded-xl p-5 backdrop-blur-md">
							<div className="relative mb-3 inline-block rounded-2xl px-8 py-4 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00AEFF] via-[#00DE94] to-[#00DE94]">
								<ShineBorder
									shineColor={["#808080", "#23D5D5", "#23D5D51A", "#808080D9"]}
								/>
								{step.step}
							</div>
							<h3 className="text-white font-normal text-sm mb-3">
								{step.title}
							</h3>
							<ul className="space-y-3">
								{step.items.map((item, i) => (
									<li key={i} className="flex items-start">
										<CheckCircle className="w-4 h-4 text-cyan-400 mt-1 mr-2 flex-shrink-0" />
										<span className="text-white text-xs">{item}</span>
									</li>
								))}
								{step.subItems && step.subItems.length > 0 && (
									<li className="ml-8 text-xs text-white -mt-3">
										<ul className="list-disc pl-4">
											{step.subItems.map((subItem, subIndex) => (
												<li key={subIndex}>{subItem}</li>
											))}
										</ul>
									</li>
								)}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
