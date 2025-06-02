"use client";

import React, { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_ITEMS = [
	{
		question: "Do you work with non-technical founders?",
		answer:
			"Yes. Many of our clients come from business, legal, operations or industry backgrounds. We manage the technical delivery and keep everything clear, structured and easy to follow.",
	},
	{
		question: "What types of businesses do you work with?",
		answer:
			"No, a detailed plan isn’t required. We’re happy to explore your idea with you, help define the scope, and guide you through shaping it into a clear development roadmap.",
	},
	{
		question: "Do you work with international clients?",
		answer:
			"That’s completely fine. Many of our clients come from business, legal, or operations backgrounds. We handle the technical side and communicate everything in a clear and structured way.",
	},
	{
		question: "Can you help refine or improve an existing product?",
		answer:
			"Yes. We’ve helped many founders build investor-ready products. We can provide pitch support, product demos, and technical documentation that help you present your MVP to investors with confidence.",
	},
	{
		question: "How do I change my account email?",
		answer:
			"Yes, absolutely. Once the project is completed, you will have full ownership of the product and its source code. We believe in giving founders full control of their product.",
	},
];

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<section className="bg-[#000E0F] py-20">
			<div className="max-w-3xl mx-auto px-6">
				<h2 className="text-3xl md:text-[64px] mb-4 text-white font-normal md:font-medium text-center">
					Frequently asked questions
				</h2>
				<p className="text-white text-center text-sm md:text-lg px-8">
					Everything you need to know about the Brilliant Ai
				</p>

				<div className="mt-12">
					{FAQ_ITEMS.map((item, idx) => {
						const isOpen = idx === openIndex;
						return (
							<div key={idx}>
								<button
									type="button"
									onClick={() => setOpenIndex(isOpen ? null : idx)}
									className="flex items-start justify-between w-full py-4">
									<span className="!text-sm text-left leading-[28px] font-medium text-white block mr-20">
										{item.question}
									</span>
									{isOpen ? (
										<MinusCircle size={24} className="text-[#23D5D5]" />
									) : (
										<PlusCircle size={24} className="text-[#23D5D5]" />
									)}
								</button>

								<AnimatePresence initial={false}>
									{isOpen && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											exit={{ opacity: 0, height: 0 }}
											transition={{ duration: 0.3, ease: "easeInOut" }}>
											<p className="px-1 pb-4 text-xs leading-[28px] text-[#E0E0E0] mr-20">
												{item.answer}
											</p>
										</motion.div>
									)}
								</AnimatePresence>

								{idx < FAQ_ITEMS.length - 1 && (
									<hr className="border-t border-2 border-[#404040]" />
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
