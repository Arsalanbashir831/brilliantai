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
      "We work with startups and enterprises across industries, from fintech and healthtech to e-commerce and logistics.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Absolutely. We have experience delivering AI solutions for clients in North America, Europe, Asia, and beyond. Time zones and distance are no barrier.",
  },
  {
    question: "Can you help refine or improve an existing product?",
    answer:
      "Yes. We’ve helped many founders build investor-ready products. We can provide pitch support, product demos, and technical documentation that help you present your MVP to investors with confidence.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "Once the project is completed, you will have full ownership of the product and its source code. We believe in giving founders full control of their product.",
  },
];

export default function FAQ() {
  // State starts at 0 (no FAQ open by default)
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-[#000E0F] py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="md:text-[40px] text-3xl font-semibold text-white text-center">
          Frequently asked questions
        </h2>
        <p className="mt-2 md:text-[18px] text-xl leading-[28px] text-[#E0E0E0] text-center">
          Everything you need to know about Brilliant AI
        </p>

        <div className="mt-12">
          {FAQ_ITEMS.map((item, idx) => {
            // Convert to 1-based index
            const itemIndex = idx + 1;
            const isOpen = itemIndex === openIndex;
            return (
              <div key={itemIndex}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? 0 : itemIndex)}
                  className="flex items-center justify-between w-full py-4"
                >
                  <span className="text-[20px] leading-[28px] font-medium text-white">
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
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-1 pb-4 text-[14px] leading-[28px] text-[#E0E0E0]">
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
