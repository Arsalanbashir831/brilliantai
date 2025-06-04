'use client';

import React from 'react';
import { motion } from 'framer-motion';

import CtaSection from '@/components/news/CtaSection';
import NewsArticle from '@/components/news/NewsArticle';
import NewsItem from '@/components/news/NewsItem';
import Newsletter from '@/components/news/Newsletter';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const transition = {
  duration: 0.6,
  ease: 'easeOut',
};

const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={sectionVariants}
    transition={transition}
  >
    {children}
  </motion.section>
);

const Page = () => {
  return (
    <div>
      <AnimatedSection><NewsArticle /></AnimatedSection>
      <AnimatedSection><CtaSection /></AnimatedSection>
      <AnimatedSection><NewsItem /></AnimatedSection>
      <AnimatedSection><Newsletter /></AnimatedSection>
    </div>
  );
};

export default Page;
