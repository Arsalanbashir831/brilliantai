// components/ProcessSection.tsx
"use client";

import { CheckCircle2 } from "lucide-react";

interface StepItemGroup {
  text: string;
  children: string[];
}

type StepItem = string | StepItemGroup;

interface ProcessStep {
  step: string;
  title: string;
  items: StepItem[];
}

const processSteps: ProcessStep[] = [
  {
    step: "Step 1",
    title: "Your Enquiry Is Reviewed",
    items: [
      "Our Business Development Team carefully reviews your enquiry.",
      "We ensure that the right experts are involved from the start.",
      "You'll receive a response within one business day through your preferred contact method.",
    ],
  },
  {
    step: "Step 2",
    title: "Discovery Call – Understanding Your Needs",
    items: [
      "If you choose to proceed, we schedule a discovery call.",
      "This session helps us understand your goals, challenges, and technical requirements in detail.",
      "Whether You Seek AI Consulting, A New Product, Or System Enhancements, This Call Ensures Alignment With Your Vision.",
    ],
  },
  {
    step: "Step 3",
    title: "Proposal Tailored To You",
    items: [
      "Our technical team analyzes your needs to create a custom proposal.",
      {
        text: "The proposal includes:",
        children: [
          "Scope Of Work (What We'll Deliver)",
          "Project Timeline (How Long It Will Take)",
          "Our Approach (The Technology And Methods We'll Use)",
        ],
      },
    ],
  },
  {
    step: "Step 4",
    title: "Execution & Guidance",
    items: [
      "Your initial point of contact remains actively engaged throughout the process.",
      "Once you approve the proposal, we introduce you to your dedicated delivery or consulting lead.",
      "They Will Guide The Entire Engagement, Ensuring Smooth Execution And Regular Updates.",
    ],
  },
  {
    step: "Step 5",
    title: "Moving Forward At Your Pace",
    items: [
      "We move forward only when you are fully ready and confident in the next steps.",
      "Our focus is on structured execution, clear communication, and aligning with your needs.",
    ],
  },
];

export function ProcessSection() {
  return (
    <section className="px-3 py-16">
      <div className="md:max-w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12 px-5 md:px-0 ">
          <h2 className="text-[32px]   md:text-6xl md:font-bold font-light text-white mb-4 md:tracking-[0.07em]">
            What To Expect After You Hit Submit!
          </h2>
          <p className="text-gray-300 text-lg">
            Once you submit the enquiry form, here’s how we move forward
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Continuous vertical dashed line behind the steps */}
          <div className="absolute hidden md:block left-[140px] top-[14px] bottom-[14px] border-l-2 border-dashed border-cyan-500 z-0 h-[700px]" />

          {/* Steps and content */}
          <div className="relative space-y-10 z-10 md:px-25 px-5">
            {processSteps.map((process, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-5">
                {/* Step pill */}
                <div className="w-[150px] md:w-[90px] flex-shrink-0 text-center">
                  <div className="bg-gray-900 border border-cyan-500 p-5 md:px-3 md:py-1 md:rounded-full rounded-xl text-sm font-medium mx-auto ">
                    <span className="text-transparent text-xl font-bold md:font-light bg-clip-text bg-gradient-to-r from-cyan-400 to-green-500 ">
                      {process.step}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:ml-6  flex-1">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {process.title}
                  </h3>

                  <ul className="space-y-3">
                    {process.items.map((item, itemIndex) => {
                      // Case 1: item is a simple string → render a check bullet
                      if (typeof item === "string") {
                        return (
                          <li key={itemIndex} className="flex items-start ml-3">
                            <CheckCircle2 className="w-4 h-4 fill-cyan-400 text-black mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-300 text-md md:text-sm">{item}</span>
                          </li>
                        );
                      }

                      // Case 2: item is an object with text + children []
                      return (
                        <li key={itemIndex} className="ml-3">
                          {/* Main line with a check bullet */}
                          <div className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 fill-cyan-400 text-black mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-300 text-md md:text-sm">{item.text}</span>
                          </div>

                          {/* Nested bullet list */}
                          <ul className="mt-2 space-y-1 ml-6 list-disc list-inside">
                            {item.children.map((child, childIndex) => (
                              <li key={childIndex} className="text-gray-300 text-sm">
                                {child}
                              </li>
                            ))}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
