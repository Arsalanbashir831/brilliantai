'use client';

import React, { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ_ITEMS = [
  {
    question: 'What does your company do?',
    answer:
      'We are an AI engineering company that designs, builds and delivers intelligent software solutions. From early stage prototypes to full scale platforms, we turn complex ideas into working products using cutting edge technologies and practical engineering.'
  },
  {
    question: 'Who do you work with?',
    answer:
      'We work with startups, legal teams and HR service providers, as well as non technical founders looking to build with AI. Our clients come to us for smart, reliable solutions that streamline workflows, reduce manual work and create real business value.'
  },
  {
    question: 'Do you handle the full build process?',
    answer:
      'Yes. We manage everything from product discovery and design to engineering, testing and launch. We also provide ongoing support and iteration so your product evolves with your users and your business.'
  },
  {
    question: '⁠Is your work fully custom?',
    answer:
      'Every solution we build is designed from the ground up to meet your specific goals. We do not use off the shelf templates or one size fits all approaches. Our team delivers robust, scalable systems with clean architecture and clear documentation.'
  },
  {
    question: 'How do we get started?',
    answer:
      'Book a call with us. We will learn more about your goals, assess the technical needs and suggest a path forward. If there is a fit, we will send you a detailed proposal with timelines, pricing and deliverables.'
  }
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
              <div key={idx} className="bg-[#07101165] rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? 0 : itemIndex)}
                  className="flex items-center gap-[3px] justify-between w-full p-4"
                >
                  {/* question text */}
                  <span className="flex-1 text-left text-[18px] md:text-[20px] leading-[28px] font-medium text-white">
                    {item.question}
                  </span>

                  {/* consistent icon size and fixed right alignment */}
                  {isOpen ? (
                    <MinusCircle size={24} className="flex-shrink-0 text-[#23D5D5]" />
                  ) : (
                    <PlusCircle size={24} className="flex-shrink-0 text-[#23D5D5]" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className="px-4 pb-4 text-[14px] leading-[28px] text-[#E0E0E0]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
