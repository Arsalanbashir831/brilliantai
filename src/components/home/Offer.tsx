import { motion } from "framer-motion";
import Card from "../Card";

export default function WhatWeOffer() {
  const services = [
    {
      imageSrc: "/home/conversational-ai1.svg",
      title: "Conversational AI",
      description:
        "Advanced chatbots and virtual agents designed to handle customer support, internal queries and dynamic interactions.",
    },
    {
      imageSrc: "/home/workflow-icons.svg",
      title: "Workflow Automations",
      description:
        "We automate your workflows to streamline repetitive tasks, enhance efficiency, save time, and eliminate errors.",
    },
    {
      imageSrc: "/home/Analytics Filter Data.svg",
      title: "Data Preparation",
      description:
        "Curation, cleaning and structuring of data to ensure high-quality inputs for effective AI and machine learning outcomes.",
    },
    {
      imageSrc: "/home/Code editor.svg",
      title: "AI Web Apps",
      description:
        "Custom-built applications powered by AI to deliver smarter user experiences and fast go-to-market.",
    },
    {
      imageSrc: "/home/Chart.svg",
      title: "AI Consulting",
      description:
        "Our experts provide strategic guidance, enabling your business to implement AI solutions that drive transformative growth.",
    },
  ];

  // 1. Container variant: staggerChildren controls delay between items
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        // 0.2s gap between each child's animation
        staggerChildren: 0.2,
      },
    },
  };

  // 2. Item variant: defines how each card animates in
  const itemVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="py-20 text-center">
      <h2 className="text-3xl md:text-6xl text-white font-semibold mb-4">
        What We Offer
      </h2>
      <p className="text-gray-100 max-w-[80%] md:max-w-[40%] text-lg md:text-xl mx-auto mb-10">
        We build AI solutions from idea to launch, ensuring speed, scalability,
        and real-world impact.
      </p>

      <div className="px-5 md:px-60 m-auto space-y-6">
        {/* Wrap Row 1 in a motion.div using containerVariants */}
        <motion.div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.slice(0, 2).map((svc, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card {...svc} imagePadding={i === 1 ? "p-0" : undefined} />
            </motion.div>
          ))}
        </motion.div>

        {/* Wrap Row 2 in another motion.div using the same containerVariants */}
        <motion.div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.slice(2).map((svc, j) => {
            const idx = j + 2; // for clarity, though idx isn't used directly for delay now
            return (
              <motion.div key={idx} variants={itemVariants}>
                <Card
                  {...svc}
                  imagePadding={idx === 4 ? "p-0" : undefined}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
