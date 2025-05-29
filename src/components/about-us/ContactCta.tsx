// app/components/ContactCta.tsx
"use client";

import BrilliantButton from "../widgets/BrilliantButtons";

export default function ContactCta() {
    return (
        <section className="py-20 ">
            <div className="max-w-4xl mx-auto px-6">
                {/* outer wrapper: gradient border + glow */}
                <div
                    className="
            p-px
            rounded-lg
            bg-[linear-gradient(91.67deg,_#23D5D5_0.52%,_#1EB2B2_100%)]
            shadow-[0px_0px_27px_0px_#23D5D57A]
          "
                >
                    {/* inner panel: solid dark */}
                    <div
                        className="
              bg-[linear-gradient(0deg,_#011010,_#011010)]
              rounded-lg
              flex flex-col sm:flex-row
              items-center justify-between
              px-8 py-6
              gap-6
            "
                    >
                        <h3 className="text-white text-2xl font-semibold">
                            Ready to start the conversation?
                        </h3>

                       

                            <BrilliantButton variant="white"
                                className="flex items-center  text-[#23D5D5] bg-clip-text"
                            >
                                Book a call
                            </BrilliantButton>
                      
                    </div>
                </div>
            </div>
        </section>
    );
}
