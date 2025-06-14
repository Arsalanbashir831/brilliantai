// app/page.tsx  (or wherever your Home lives)
"use client";

import { motion } from "framer-motion";
import Hero from "@/components/home/Hero";
import Offer from "@/components/home/Offer";
import IdeaToImpact from "@/components/home/IdeaToImpact";
import EndToEndTeam from "@/components/home/EndToEndTeam";
import GradientCTA from "@/components/home/GradientCTA";
import AIMeasurableOutcomes from "@/components/home/AIMeasurableOutcomes";
import CallToAction from "@/components/home/CallToAction";
import { fadeUp } from "@/effects/Effects";
import FAQ from "@/components/home/Faq";



export default function Home() {
  const sections = [
    { Component: Hero,    key: "hero" },
    { Component: Offer,   key: "offer" },
    { Component: IdeaToImpact, key: "idea" },
    { Component: EndToEndTeam, key: "team" },
    { Component: GradientCTA,   key: "gradient" },
    { Component: AIMeasurableOutcomes, key: "outcomes" },
    { Component: FAQ,    key: "faqs" },
    { Component: CallToAction,    key: "cta" },
    ];
    



    return (
   
    <div>
      {sections.map(({ Component, key }, idx) => (
        <motion.div
          key={key}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
        >
          <Component />
        </motion.div>
      ))}
    </div>

    
  );
}
