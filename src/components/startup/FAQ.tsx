'use client';

import React, { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ_ITEMS = [
    {
        question: 'I have an idea but no tech team. Can you help?',
        answer:
            'Yes. We work closely with non technical founders to turn ideas into fully working products. From planning and design to development and launch, we take care of the entire process while keeping you involved and informed at every step.'
    },
    {
        question: 'How long does it take to launch a product?',
        answer:
            'It depends on the scope, but most startups we work with launch an initial version within four to twelve weeks. We focus on building lean, focused MVPs so you can test fast, learn from real users and grow with confidence.'
    },
    {
        question: 'Do I need to raise funding before working with you?',
        answer:
            'Not necessarily. Some of our clients are bootstrapped, others have secured funding. We offer flexible engagement options and can advise on the best approach for your budget and goals. If needed, we can also support your fundraising efforts with pitch materials or technical input.'
    },
    {
        question: 'Can you improve or rebuild an existing product?',
        answer:
            'Yes. If you already have something live but it needs fixing, upgrading or rebuilding, we can step in. Whether it is legacy code, poor UX or missing features, we will help you get back on track and make your product investor and user ready.'
    },
    {
        question: 'Will I own everything you build?',
        answer:
            'Yes, 100 percent. You will own the product, code and all related intellectual property. We build everything under your name and provide full access, handover and documentation once development is complete.'
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
