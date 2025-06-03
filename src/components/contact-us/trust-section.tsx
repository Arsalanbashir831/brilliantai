// components/TrustSection.tsx
"use client";

import Image from "next/image";

const trustItems = [
  {
    src: "/contact-us/real-delivery.svg",
    alt: "Real Delivery",
    title: "Built for real delivery",
    description: "We design, build and deploy intelligent systems that scale",
  },
  {
    src: "/contact-us/team.svg",
    alt: "Product Teams",
    title: "Trusted by product teams",
    description: "Startups and organisations rely on us to deliver what matters",
  },
  {
    src: "/contact-us/ri_speak-ai-fill.svg",
    alt: "Deep AI Capability",
    title: "Deep AI capability",
    description:
      "From LLMs to automation, we turn complex technology into working solutions",
  },
];

export function TrustSection() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-white mb-4">
            Why Clients Trust Us
          </h2>
          <p className="text-gray-400 text-lg">Discover What Makes Us Different</p>
        </div>

        {/* 
          3-column, 2-row grid on md+
          - Left (idx=0) → occupies row 1, col 1 
          - Center (idx=1) → row-span-2, col 2 
          - Right (idx=2) → occupies row 1, col 3 
          The second row, col 1 and col 3 remain empty.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8">
          {trustItems.map((item, idx) => {
            // On medium screens, let the center (idx === 1) span 2 rows:
            const rowSpanClass = idx === 1 ? "md:row-span-2 pt-20" : "";

            return (
              <div key={idx} className={`p-[2px] rounded-2xl transition-shadow ${rowSpanClass}`}>
                <div
                  className={`
                    bg-transparent backdrop-blur-md 
                    rounded-[inherit] flex flex-col items-center text-center space-y-4 p-3 
                    border border-teal-900
                  `}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={100}
                    height={100}
                    className="mx-auto pb-10"
                  />

                  <div
                    style={{
                      backgroundImage: "radial-gradient(circle at center, #004D53, #000E0E)",
                    }}
                    className="p-8 rounded-2xl backdrop-blur-lg space-y-2 w-full"
                  >
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
