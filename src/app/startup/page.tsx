'use client'
import React from 'react';
import { motion, Variants } from 'framer-motion';

import BuildWithConfidence from '@/components/startup/BuildWithConfidence';
import CommunicationAndPayment from '@/components/startup/CommunicationAndPayment';
import ComparisonCards from '@/components/startup/ComparisonCards';
import CTABuildReal from '@/components/startup/CTABuildReal';
import FAQ from '@/components/startup/FAQ';
import Hero from '@/components/startup/Hero';
import ServicesTabs from '@/components/startup/ServicesTabs';
import TurnVisionIntoProduct from '@/components/startup/TurnVisionIntoProduct';

// Define a simple fade-in-up animation
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const transition = { duration: 0.6, ease: 'easeOut' };

const page = () => {
  return (
    <div>
      {[
        { Component: Hero, key: 'hero' },
        { Component: ServicesTabs, key: 'services' },
        { Component: TurnVisionIntoProduct, key: 'vision' },
        { Component: CommunicationAndPayment, key: 'comm' },
        { Component: ComparisonCards, key: 'comparison' },
        { Component: BuildWithConfidence, key: 'confidence' },
        { Component: FAQ, key: 'faq' },
        { Component: CTABuildReal, key: 'cta' }
      ].map(({ Component, key }) => (
        <motion.section
          key={key}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          transition={transition}
        >
          <Component />
        </motion.section>
      ))}
    </div>
  );
};

export default page;
