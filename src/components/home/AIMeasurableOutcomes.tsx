// components/AIMeasurableOutcomes.tsx
import Image from "next/image";

export default function AIMeasurableOutcomes() {
  return (
    <section className="bg-[#011010] text-white py-20 px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          AI That Drive Measurable Outcomes
        </h2>
        <p className="text-white/80 text-base sm:text-lg max-w-3xl mx-auto">
          We craft AI solutions that tackle key operational challenges, enhance efficiency, and
          unlock new opportunities. Here’s how our clients leverage AI in their organisations.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-10 max-w-7xl mx-auto">
        {/* Sidebar List */}
        <ul className="space-y-10 text-left text-white/80 w-full lg:w-1/3 text-lg pl-10">
          <li className="relative text-white font-medium">
            <span className="absolute left-0 top-1 h-full w-[2px] bg-teal-400 rounded-full" />
            &nbsp;&nbsp;Internal AI Assistants
          </li>
          <li>| Conversational AI for Support</li>
          <li>| AI-Driven Process Automation</li>
          <li>| Document Intelligence</li>
        </ul>

        {/* Image Card */}
        <div className="w-full lg:w-2/3 rounded-xl overflow-hidden shadow-lg">
                  <Image
                      src="/home/assistant.svg"
                      alt="Internal AI Assistants"
                      width={800}
                      height={600}
                      className="rounded-xl object-cover w-full"
                  />
        </div>
      </div>
    </section>
  );
}
