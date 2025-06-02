'use client';

import React, { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ_ITEMS = [
    {
        question: 'How long does it take to build an MVP?',
        answer:
            'The timeline for building an MVP depends on the project scope, but most MVPs take between 4 to 12 weeks. We work closely with you to define essential features and ensure a fast, efficient build.'
    },
    {
        question: 'Do I need a detailed plan before reaching out?',
        answer:
            'No, a detailed plan isn’t required. We’re happy to explore your idea with you, help define the scope, and guide you through shaping it into a clear development roadmap.'
    },
    {
        question: 'What if I do not have a technical background?',
        answer:
            'That’s completely fine. Many of our clients come from business, legal, or operations backgrounds. We handle the technical side and communicate everything in a clear and structured way.'
    },
    {
        question: 'Can you help me raise investment with the product?',
        answer:
            'Yes. We’ve helped many founders build investor-ready products. We can provide pitch support, product demos, and technical documentation that help you present your MVP to investors with confidence.'
    },
    {
        question: 'Will I own the product and code?',
        answer:
            'Yes, absolutely. Once the project is completed, you will have full ownership of the product and its source code. We believe in giving founders full control of their product.'
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-[#000E0F] py-20">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-[50px] font-semibold text-white text-center">Founder FAQ</h2>
                <p className="mt-2 text-[18px] leading-[28px] text-[#E0E0E0] text-center">
                    Clarity before commitment. Everything you need to know before you build.
                </p>

                <div className="mt-12">
                    {FAQ_ITEMS.map((item, idx) => {
                        const isOpen = idx === openIndex;
                        return (
                            <div key={idx}>
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    className="flex items-center justify-between w-full py-4"
                                >
                                    <span className="text-[20px] leading-[28px] font-medium text-left text-white">
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
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
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
