// components/AIMeasurableOutcomes.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import BrilliantButton from "../widgets/BrilliantButtons";
import { ShineBorder } from "../magicui/shine-border";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUpVariants } from "@/effects/Effects";
import useMobile from "@/hook/useMobile";

interface AICardProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  imageClass: string;
  footerText: string;
}

function AICard({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  imageClass,
  footerText,
}: AICardProps) {
  const isMobile = useMobile();
  return (
    <div
      className="
        relative
        transform transition-transform duration-200 ease-out hover:scale-102 rounded-2xl
        bg-[linear-gradient(111deg,rgba(77,77,77,0.24)_1.21%,rgba(151,151,151,0.04)_100%)]
        shadow-[inset_-20px_4px_120px_-80px_rgba(31,187,187,0.14)]
        backdrop-blur-[15px]
        p-8
        flex flex-col md:justify-between justify-between 
        w-auto md:w-full h-[100%] md:h-96 overflow-hidden flex-wrap
      "
    >
      <ShineBorder shineColor={["#23D5D5", "#00FFFF"]} />

      <div>
        <h3 className="text-lg font-light md:text-2xl md:font-semibold">{title}</h3>
        <p className="mt-2 mb-1 text-[#A3BABF] leading-relaxed max-w-90 md:max-w-80 text-sm md:text-lg">
          {description}
        </p>
        <BrilliantButton
          variant="white"
          className="text-[#052E2B] px-3 py-2 mt-4 rounded-lg font-medium"
        >
          {buttonText}
        </BrilliantButton>
      </div>

      {!isMobile && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={400}
          className={`absolute ${imageClass} pointer-events-none`}
        />
      )}

      <div className="flex gap-1 items-start md:items-center mt-6 text-xs md:text-lg text-white">
        <Image
          src="/home/checkmark.svg"
          alt="Checkmark"
          width={24}
          height={24}
          className=""
        />
        {footerText}
      </div>
    </div>
  );
}

const tabs = [
  {
    key: "internal",
    label: "Internal AI Assistants",
    cardProps: {
      title: "Internal AI Assistants",
      description:
        "Equip teams with AI-powered tools that enable fast information retrieval, content generation and task execution.",
      buttonText: "Get in touch",
      imageSrc: "/home/aiAssistant.svg",
      imageAlt: "Internal AI Assistants",
      imageClass: "top-34 right-14 w-96",
      footerText: "Boosts productivity across departments from marketing to operations.",
    },
  },
  {
    key: "support",
    label: "Conversational AI for Support",
    cardProps: {
      title: "Conversational AI for Support",
      description:
        "Deploy advanced AI chatbots and virtual agents to handle enquiries, triage issues and improve response times.",
      buttonText: "Get in touch",
      imageSrc: "/home/support.svg",
      imageAlt: "Conversational AI for Support",
      imageClass: "top-2 right-10 w-48",
      footerText: "Supports customer service, IT helpdesks and internal requests.",
    },
  },
  {
    key: "automation",
    label: "AI-Driven Process Automation",
    cardProps: {
      title: "AI-Driven Process Automation",
      description:
        "Streamline repetitive workflows and manual operations with intelligent automation systems that scale with your business.",
      buttonText: "Get in touch",
      imageSrc: "/home/automation.svg",
      imageAlt: "AI-Driven Process Automation",
      imageClass: "top-2 right-10 w-96",
      footerText: "Used across operations, finance, HR and logistics.",
    },
  },
  {
    key: "document",
    label: "Document Intelligence",
    cardProps: {
      title: "Document Intelligence",
      description:
        "Automate the extraction, analysis and processing of information from complex documents such as contracts, forms and reports.",
      buttonText: "Get in touch",
      imageSrc: "/home/intelligence.svg",
      imageAlt: "Document Intelligence",
      imageClass: "top-44 right-10 w-96",
      footerText: "Ideal for teams handling high volumes of unstructured data.",
    },
  },
];

export default function AIMeasurableOutcomes() {
  const [activeKey, setActiveKey] = useState(tabs[0].key);
  const isMobile = useMobile();

  return (
    <section className="bg-[#011010] text-white py-20 px-6 md:px-0 lg:px-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 style={{ fontSize: !isMobile ? "70px" : "30px" }} className="font-bold">
          AI That Drive Measurable Outcomes
        </h2>
        <p className="mt-4 text-white/80 text-base sm:text-lg max-w-3xl mx-auto">
          We craft AI solutions that tackle key operational challenges, enhance
          efficiency, and unlock new opportunities. Here’s how our clients
          leverage AI in their organisations.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-5 md:justify-center">
        {/* Sidebar */}
        {!isMobile && (
          <ul className="space-y-6 pt-8 pl-8 relative w-[33%]">
            {tabs.map(({ key, label }) => (
              <li
                key={key}
                onClick={() => setActiveKey(key)}
                className="relative cursor-pointer pl-4 text-xl transition-colors"
              >
                {/* Gray or teal left border */}
                <span
                  className={`absolute left-0 top-0 h-full w-1 ${
                    key === activeKey ? "bg-teal-400" : "bg-gray-600"
                  } rounded`}
                />

                {/* Blurred gradient only for active */}
                {key === activeKey && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[10px] bg-[linear-gradient(180deg,#23D5D5_0%,#1EB2B2_100%)] filter blur-[30px] rounded" />
                )}

                <span
                  className={`relative text-[24px] font-light ${
                    key === activeKey
                      ? "text-white font-medium"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Active Card with animation */}
        <div
          className={`w-full ${
            isMobile ? "overflow-x-scroll flex space-x-6" : "lg:w-2/3"
          }`}
        >
          {isMobile ? (
            tabs.map(({ key, cardProps }) => (
              <motion.div
                key={key}
                className="md:min-w-[80%] w-[85%] flex-shrink-0"
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.5 }}
              >
                <AICard {...cardProps} />
              </motion.div>
            ))
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeKey}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.5 }}
              >
                <AICard
                  {...tabs.find((tab) => tab.key === activeKey)!.cardProps}
                />
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}
