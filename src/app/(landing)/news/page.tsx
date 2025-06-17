'use client';

import React from 'react';
import { motion } from 'framer-motion';

import BlogList from '@/components/news/BlogList';
import FutureTechSection from '@/components/news/FutureTechSection';
import Hero from '@/components/news/hero';
import NewsItem from '@/components/news/NewsItem';
import Newsletter from '@/components/news/Newsletter';
import { Welcome } from '@/components/news/welcome';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 40,      // softer spring
      damping: 14,        // gentle settle
      mass: 0.6,          // a bit more “weight”
      ease: [0.42, 0, 0.58, 1], // smooth fallback
    },
  },
};

const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
  <motion.section
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.section>
);

export default function Page() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <AnimatedSection><Hero /></AnimatedSection>
      <AnimatedSection><NewsItem /></AnimatedSection>
      <AnimatedSection><Welcome /></AnimatedSection>
      <AnimatedSection><BlogList /></AnimatedSection>
      <AnimatedSection><FutureTechSection /></AnimatedSection>
      <AnimatedSection><Newsletter /></AnimatedSection>
    </motion.div>
  );
}
