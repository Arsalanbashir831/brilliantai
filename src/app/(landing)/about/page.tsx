'use client';

import React from 'react';
import { motion } from 'framer-motion';

import AiFeaturesCarousel from '@/components/about-us/AiFeaturesCarousel';
import ApproachSection from '@/components/about-us/ApproachSection';
import ContactCta from '@/components/about-us/ContactCta';
import Hero from '@/components/about-us/Hero';
import MissionSection from '@/components/about-us/MissionSection';
import OurPeopleSection from '@/components/about-us/OurPeopleSection';
import StorySection from '@/components/about-us/StorySection';
import TrustedSection from '@/components/about-us/TrustedSection';

// 1. Define a parent container to stagger the water-like wave:
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// 2. Use a spring for the “liquid” feel:
const sectionVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 40,    // softer spring
      damping: 14,      // gentle settle
      mass: 0.6,        // a bit more “weight”
      // fallback ease on non-spring props
      ease: [0.42, 0, 0.58, 1],
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

const Page = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <AnimatedSection><Hero /></AnimatedSection>
      <AnimatedSection><AiFeaturesCarousel /></AnimatedSection>
      <AnimatedSection><StorySection /></AnimatedSection>
      <AnimatedSection><MissionSection /></AnimatedSection>
      <AnimatedSection><TrustedSection /></AnimatedSection>
      <AnimatedSection><ApproachSection /></AnimatedSection>
      <AnimatedSection><OurPeopleSection /></AnimatedSection>
      <AnimatedSection><ContactCta /></AnimatedSection>
    </motion.div>
  );
};

export default Page;
