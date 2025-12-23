"use client";

import React, { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_ITEMS = [
  {
    question: "Do you work with non-technical founders?",
    answer:
      "Yes, absolutely. Many of our clients come from backgrounds in business, legal, operations or other industries. We handle all the technical details and guide you through the process with clear communication, structured milestones and no jargon, making it easy to stay in control of your project.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "We currently specialise in supporting businesses in the legal and HR sectors. Whether it is a law firm, legal department or HR consultancy, we build tailored AI solutions designed to improve productivity, streamline processes and reduce manual work. Our sector focus allows us to bring targeted insights and deliver meaningful results from day one.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we support clients across the United Kingdom, Europe, North America, the Middle East and other regions. Our team is experienced in remote collaboration and we use tools that ensure smooth communication and reliable delivery across time zones.",
  },
  {
    question: "Can you help refine or improve an existing product?",
    answer:
      "Absolutely. If you already have a prototype or live product, we can help you enhance it. Our team can run code reviews, user experience assessments and product strategy workshops to identify improvements, introduce artificial intelligence features or resolve technical challenges.",
  },
  {
    question: "Will I own the product and code?",
    answer:
      "Yes, everything we build for your project is yours. You will own the full intellectual property including the codebase and any supporting documentation. We also provide training and support if you need help managing or scaling the product after delivery.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-[#000E0F] py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-center text-white font-semibold text-3xl md:text-[40px]">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-center text-[#E0E0E0] text-xl md:text-[18px] leading-[28px]">
          Everything you need to know about Brilliant AI
        </p>

        <div className="mt-12 space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const itemIndex = idx + 1;
            const isOpen = itemIndex === openIndex;

            return (
              <React.Fragment key={idx}>
                <div className="bg-[#07101165] rounded-lg overflow-hidden ">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? 0 : itemIndex)}
                    className="flex items-center justify-between gap-[3px] w-full p-4 cursor-pointer">
                    {/* question text */}
                    <span className="flex-1 text-left text-[18px] md:text-[20px] leading-[28px] font-medium text-white">
                      {item.question}
                    </span>

                    {/* consistent icon size and fixed right alignment */}
                    {isOpen ? (
                      <MinusCircle
                        size={24}
                        className="shrink-0 text-[#23D5D5]"
                      />
                    ) : (
                      <PlusCircle
                        size={24}
                        className="shrink-0 text-[#23D5D5]"
                      />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}>
                        <p className="px-4 pb-4 text-[14px] leading-[28px] text-[#E0E0E0]">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {idx < FAQ_ITEMS.length - 1 && (
                  <div className="h-px w-full bg-white rounded-sm" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
