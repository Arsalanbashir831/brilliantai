// components/AIMeasurableOutcomes.tsx

import { useState } from "react";
import Image from "next/image";
import BrilliantButton from "../widgets/BrilliantButtons";
import { ShineBorder } from "../magicui/shine-border";

//
// ── CARD COMPONENTS ───────────────────────────────────────────────────────────
//
function InternalAIAssistantsCard() {
    return (
        <div
            className="
        relative
         transform transition-transform  duration-200 ease-out hover:scale-102 rounded-2xl
        
        bg-[linear-gradient(111deg,rgba(77,77,77,0.24)_1.21%,rgba(151,151,151,0.04)_100%)]
        shadow-[inset_-20px_4px_120px_-80px_rgba(31,187,187,0.14)]
        backdrop-blur-[15px]
        p-8
        flex flex-col justify-between gap-5
        w-full h-96 overflow-hidden
      "
        >
            {/* shiny animated border */}
            <ShineBorder shineColor={["#23D5D5", "#00FFFF"]} />

            <div>
                <h3 className="text-2xl font-semibold">Internal AI Assistants</h3>
                <p className="mt-2 mb-1 text-[#A3BABF] leading-relaxed max-w-80">
                    Equip teams with AI-powered tools that
                    enable fast information retrieval,
                    content generation and task execution.
                </p>
                <BrilliantButton
                    variant="white"
                    className="text-[#052E2B] px-3 py-2 mt-4 rounded-lg font-medium"
                >
                    Get in touch
                </BrilliantButton>
            </div>

            <Image
                src="/home/aiassistant.svg"
                alt="Internal AI Assistants"
                width={400}
                height={400}
                className="absolute top-34 right-14 w-96 pointer-events-none"
            />

            <div className="flex items-center mt-6 text-sm text-[#A3BABF]">
                <Image
                    src="/home/checkmark.svg"
                    alt="Checkmark"
                    width={24}
                    height={24}
                    className="mr-2"
                />
                Boosts productivity across departments from marketing to operations.
            </div>
        </div>
    );
}

function ConversationalAISupportCard() {
    return (
        <div
            className="
        relative
        transform transition-transform  duration-200 ease-out hover:scale-102 rounded-2xl
       
        bg-[linear-gradient(111deg,rgba(77,77,77,0.24)_1.21%,rgba(151,151,151,0.04)_100%)]
        shadow-[inset_-20px_4px_120px_-80px_rgba(31,187,187,0.14)]
        backdrop-blur-[15px]
        p-8
        flex flex-col justify-between gap-5
        w-full h-96 overflow-hidden
      "
        >
            <ShineBorder shineColor={["#23D5D5", "#00FFFF"]} />

            <div>
                <h3 className="text-2xl font-semibold">
                    Conversational AI for Support
                </h3>
                <p className="mt-2 mb-1 text-[#A3BABF] leading-relaxed max-w-96">
                    Deploy advanced AI chatbots and virtual agents to handle enquiries,
                    triage issues and improve response times.
                </p>
                <BrilliantButton
                    variant="white"
                    className="text-[#052E2B] px-3 py-2 mt-4 rounded-lg font-medium"
                >
                    Get in touch
                </BrilliantButton>
            </div>

            <Image
                src="/home/support.svg"
                alt="Conversational AI for Support"
                width={400}
                height={400}
                className="absolute top-2 right-10 w-48 pointer-events-none"
            />

            <div className="flex items-center mt-6 text-sm text-[#A3BABF]">
                <Image
                    src="/home/checkmark.svg"
                    alt="Checkmark"
                    width={24}
                    height={24}
                    className="mr-2"
                />
                Supports customer service, IT helpdesks and internal requests.
            </div>
        </div>
    );
}

function ProcessAutomationCard() {
    return (
        <div
            className="
        relative
        transform transition-transform  duration-200 ease-out hover:scale-102 rounded-2xl
        bg-[linear-gradient(111deg,rgba(77,77,77,0.24)_1.21%,rgba(151,151,151,0.04)_100%)]
        shadow-[inset_-20px_4px_120px_-80px_rgba(31,187,187,0.14)]
        backdrop-blur-[15px]
        p-8
        flex flex-col justify-between gap-5
        w-full h-96 overflow-hidden
      "
        >
            <ShineBorder shineColor={["#23D5D5", "#00FFFF"]} />

            <div>
                <h3 className="text-2xl font-semibold">
                    AI-Driven Process Automation
                </h3>
                <p className="mt-2 mb-1 text-[#A3BABF] leading-relaxed max-w-80">
                    Streamline repetitive workflows and manual operations with
                    intelligent automation systems that scale with your business.
                </p>
                <BrilliantButton
                    variant="white"
                    className="text-[#052E2B] px-3 py-2 mt-4 rounded-lg font-medium"
                >
                    Get in touch
                </BrilliantButton>
            </div>

            <Image
                src="/home/automation.svg"
                alt="AI-Driven Process Automation"
                width={400}
                height={400}
                className="absolute top-2 right-10 w-96 pointer-events-none"
            />

            <div className="flex items-center mt-6 text-sm text-[#A3BABF]">
                <Image
                    src="/home/checkmark.svg"
                    alt="Checkmark"
                    width={24}
                    height={24}
                    className="mr-2"
                />
                Used across operations, finance, HR and logistics.
            </div>
        </div>
    );
}

function DocumentIntelligenceCard() {
    return (
        <div
            className="
        relative
         transform transition-transform  duration-200 ease-out hover:scale-102 rounded-2xl
    
        bg-[linear-gradient(111deg,rgba(77,77,77,0.24)_1.21%,rgba(151,151,151,0.04)_100%)]
        shadow-[inset_-20px_4px_120px_-80px_rgba(31,187,187,0.14)]
        backdrop-blur-[15px]
        p-8
        flex flex-col justify-between gap-5
        w-full h-96 overflow-hidden
      "
        >
            <ShineBorder shineColor={["#23D5D5", "#00FFFF"]} />

            <div>
                <h3 className="text-2xl font-semibold">Document Intelligence</h3>
                <p className="mt-2 mb-1 text-[#A3BABF] leading-relaxed max-w-80">
                    Automate the extraction, analysis and processing of information from
                    complex documents such as contracts, forms and reports.
                </p>
                <BrilliantButton
                    variant="white"
                    className="text-[#052E2B] px-3 py-2 mt-4 rounded-lg font-medium"
                >
                    Get in touch
                </BrilliantButton>
            </div>

            <Image
                src="/home/intelligence.svg"
                alt="Document Intelligence"
                width={400}
                height={400}
                className="absolute top-44 right-10 w-96 pointer-events-none"
            />

            <div className="flex items-center mt-6 text-sm text-[#A3BABF]">
                <Image
                    src="/home/checkmark.svg"
                    alt="Checkmark"
                    width={24}
                    height={24}
                    className="mr-2"
                />
                Ideal for teams handling high volumes of unstructured data.
            </div>
        </div>
    );
}

//
// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
//
const tabs = [
    { key: "internal", label: "Internal AI Assistants" },
    { key: "support", label: "Conversational AI for Support" },
    { key: "automation", label: "AI-Driven Process Automation" },
    { key: "document", label: "Document Intelligence" },
];

const CARD_COMPONENTS: Record<string, React.FC> = {
    internal: InternalAIAssistantsCard,
    support: ConversationalAISupportCard,
    automation: ProcessAutomationCard,
    document: DocumentIntelligenceCard,
};

export default function AIMeasurableOutcomes() {
    const [activeKey, setActiveKey] = useState(tabs[0].key);
    const ActiveCard = CARD_COMPONENTS[activeKey];

    return (
        <section className="bg-[#011010] text-white py-20 px-6 lg:px-20">
            {/* Header */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold">
                    AI That Drive Measurable Outcomes
                </h2>
                <p className="mt-4 text-white/80 text-base sm:text-lg max-w-3xl mx-auto">
                    We craft AI solutions that tackle key operational challenges, enhance
                    efficiency, and unlock new opportunities. Here’s how our clients
                    leverage AI in their organisations.
                </p>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
                {/* Sidebar */}
                <ul className="w-full lg:w-1/3 space-y-6 pt-8 pl-8 relative">
                    {tabs.map(({ key, label }) => (
                        <li
                            key={key}
                            onClick={() => setActiveKey(key)}
                            className="relative cursor-pointer pl-4  text-xl transition-colors"
                        >
                            {key === activeKey && (
                                <>
                                    {/* blurred gradient behind text */}
                                    <span
                                        className="
                                        absolute
                                        left-0
                                        top-1/2
                                        -translate-y-1/2
                                        w-[300px]
                                        h-[10px]
                                        bg-[linear-gradient(180deg,#23D5D5_0%,#1EB2B2_100%)]
                                        filter
                                        blur-[30px]
                                        rounded
                                        "
                                    />
                                    {/* teal left border */}
                                    <span className="absolute left-0 top-0 h-full w-1 bg-teal-400 rounded" />
                                </>
                            )}

                            <span
                                className={`relative ${key === activeKey ? "text-white font-medium" : "text-white/80 hover:text-white"
                                    }`}
                            >
                                {label}
                            </span>
                        </li>
                    ))}
                </ul>


                {/* Active Card */}
                <div className="w-full lg:w-2/3">
                    <ActiveCard />
                </div>
            </div>
        </section>
    );
}
