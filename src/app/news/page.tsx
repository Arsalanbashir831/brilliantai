'use client';

import React from 'react';
import { motion } from 'framer-motion';

import BlogList from '@/components/news/BlogList';
import FutureTechSection from '@/components/news/FutureTechSection';
import Hero from '@/components/news/hero';
import NewsItem from '@/components/news/NewsItem';
import Newsletter from '@/components/news/Newsletter';
import { Welcome } from '@/components/news/welcome';

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
      <AnimatedSection><Hero /></AnimatedSection>
      <AnimatedSection><NewsItem /></AnimatedSection>
      <AnimatedSection><Welcome /></AnimatedSection>
      <AnimatedSection><BlogList /></AnimatedSection>
      <AnimatedSection><FutureTechSection /></AnimatedSection>
      <AnimatedSection><Newsletter /></AnimatedSection>
    </div>
  );
};

export default Page;
