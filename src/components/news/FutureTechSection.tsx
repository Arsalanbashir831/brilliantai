"use client";

import Image from "next/image";
import { FC } from "react";

const FutureTechSection: FC = () => {
    return (
        <section className=" py-16">
            <div className="max-w-5xl mx-auto px-4">
                {/* — Hero Block — */}
                <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
                    <div className="flex-shrink-0">
                        {/* Replace with your actual logo path/size */}
                        <Image
                            src="/icons/triangle-logo.svg"
                            alt="Company Logo"
                            width={80}
                            height={80}
                            className="w-16 h-16 md:w-20 md:h-20"
                        />
                    </div>
                    <div className="mt-6 md:mt-0 md:ml-6 text-center md:text-left">
                        <p className="text-green-400 uppercase text-sm md:text-base font-medium">
                            Learn, Connect, and Innovate
                        </p>
                        <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white leading-tight">
                            Be Part of the Future Tech Revolution
                        </h2>
                        <p className="mt-4 text-gray-300 text-base md:text-lg max-w-lg">
                            Immerse yourself in the world of future technology. Explore our comprehensive resources,
                            connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic
                            community of forward-thinkers.
                        </p>
                    </div>
                </div>

                {/* — Resources Panel — */}
                <div className="bg-gray-800 bg-opacity-30 border border-gray-700 rounded-xl p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <div className="p-6 bg-gray-800 bg-opacity-50 rounded-lg">
                            <h3 className="text-white font-medium text-lg">
                                Access the Latest Company Reports
                            </h3>
                            <p className="mt-2 text-gray-300 text-sm">
                                Download the most recent company reports, including annual summaries and performance
                                insights. Stay informed with up-to-date data on business operations and growth.
                            </p>
                            <button
                                type="button"
                                className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-green-400 via-teal-400 to-green-500
                           text-white text-sm font-medium rounded-md hover:opacity-90 focus:outline-none focus:ring-2
                           focus:ring-green-400 transition"
                            >
                                Download
                            </button>
                        </div>

                        {/* Card 2 */}
                        <div className="p-6 bg-gray-800 bg-opacity-50 rounded-lg">
                            <h3 className="text-white font-medium text-lg">
                                Stay Connected on LinkedIn
                            </h3>
                            <p className="mt-2 text-gray-300 text-sm">
                                Discover the latest company updates, exciting job opportunities, and in-depth industry insights.
                                Stay connected and informed with all the key developments shaping our future.
                            </p>
                            <button
                                type="button"
                                className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-green-400 via-teal-400 to-green-500
                           text-white text-sm font-medium rounded-md hover:opacity-90 focus:outline-none focus:ring-2
                           focus:ring-green-400 transition"
                            >
                                Follow
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FutureTechSection;
