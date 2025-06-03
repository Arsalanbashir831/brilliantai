"use client";

import useMobile from "@/hook/useMobile";
import Image from "next/image";
import { FC } from "react";

const FutureTechSection: FC = () => {
    const isMobile = useMobile()
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-0">
                {/* — Hero Block — */}
                <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
                    <div className="flex-shrink-0 flex justify-start items-center w-[100%] md:w-auto px-4">
                        <Image
                            src="/news/logo.svg"
                            alt="Company Logo"
                            width={50}
                            height={50}
                            className="md:w-40 md:h-40 w-10 h-10"
                        />
                       {isMobile && (<>
                        <p className="text-[#23D5D5] uppercase text-sm md:text-base font-medium">
                            Learn, Connect, and Innovate
                        </p>
                       </>)}
                   
                    </div>
                    <div className="mt-6 md:mt-0 md:ml-6 text-left px-4">
                      {!isMobile &&(<>
                        <p className="text-[#23D5D5] uppercase text-sm md:text-base font-medium">
                            Learn, Connect, and Innovate
                        </p>
                      </>)}
                      
                        <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white leading-tight">
                            Be Part of the Future Tech Revolution
                        </h2>
                        <p className="mt-4 text-gray-400 text-md md:text-sm max-w-2xl">
                            Immerse yourself in the world of future technology. Explore our comprehensive resources,
                            connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic
                            community of forward-thinkers.
                        </p>
                    </div>
                </div>

                {/* — Resources Panel — */}
                <div className="border border-[#262626] rounded-xl p-6 mx-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 m-4">
                        {/* Card 1 */}
                        <div
                            className="
                             relative overflow-hidden
    p-6 rounded-lg
    bg-teal-950/40
    backdrop-blur-xl
    border border-teal-200/10
                            "
                        >
                            {/* Black overlay */}
                            <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                            {/* Card content */}
                            <div className="relative z-10">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-white font-medium text-normal">
                                        Access the Latest Company Reports
                                    </h3>
                                    <button
                                        type="button"
                                        className="
                                          inline-block px-4 py-1
                                          bg-[linear-gradient(180deg,_#23D5D5_0%,_#1EB2B2_100%)]
                                          text-white text-sm font-medium rounded-full
                                          hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#23D5D5]
                                          transition
                                        "
                                    >
                                        Download
                                    </button>
                                </div>
                                <p className="mt-2 text-gray-300 text-sm">
                                    Download the most recent company reports, including annual summaries and performance insights.
                                    Stay informed with up-to-date data on business operations and growth.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div
                            className="
                              relative overflow-hidden
                              p-6 rounded-lg
                               bg-teal-950/40
                            "
                        >
                            {/* Black overlay */}
                            <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                            {/* Card content */}
                            <div className="relative z-10">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-white font-medium text-lg">
                                        Stay Connected on LinkedIn
                                    </h3>
                                    <button
                                        type="button"
                                        className="
                                          inline-block px-4 py-1
                                          bg-[linear-gradient(180deg,_#23D5D5_0%,_#1EB2B2_100%)]
                                          text-white text-sm font-medium rounded-full
                                          hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#23D5D5]
                                          transition
                                        "
                                    >
                                        Follow
                                    </button>
                                </div>
                                <p className="mt-2 text-gray-300 text-sm">
                                    Discover the latest company updates, exciting job opportunities, and in-depth industry insights.
                                    Stay connected and informed with all the key developments shaping our future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FutureTechSection;
