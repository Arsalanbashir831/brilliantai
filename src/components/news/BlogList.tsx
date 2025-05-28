"use client";

import { FC } from "react";
import Image from 'next/image';

interface Post {
    id: string;
    author: {
        name: string;
        avatarUrl: string;   // e.g. "/news/Image1.svg"
        category: string;    // e.g. "Technology"
    };
    date: string;          // e.g. "October 15, 2023"
    title: string;
    description: string;
    href: string;
}

const posts: Post[] = [
    {
        id: "1",
        author: {
            name: "John Techson",
            avatarUrl: "/news/User1.svg",
            category: "Technology",
        },
        date: "October 15, 2023",
        title: "Tech Giants Announce New Product Line",
        description:
            "Explore the latest innovations from tech industry leaders, unveiling new products that promise to transform the digital landscape.",
        href: "/posts/tech-giants-new-product",
    },
    {
        id: "2",
        author: {
            name: "Sarah Ethicist",
            avatarUrl: "/news/Image3.svg",
            category: "Technology",
        },
        date: "October 11, 2023",
        title: "The Future of Autonomous Vehicles",
        description:
            "An in-depth analysis of the rapid advancements in autonomous vehicle technology and their impact on transportation.",
        href: "/posts/future-autonomous-vehicles",
    },
    {
        id: "3",
        author: {
            name: "Astronomer X",
            avatarUrl: "/news/User2.svg",
            category: "Technology",
        },
        date: "December 10, 2023",
        title: "Tech Startups Secure Record Funding",
        description:
            "An overview of the recent surge in funding for tech startups, shaping the entrepreneurial landscape.",
        href: "/posts/startups-record-funding",
    },
];

const BlogList: FC = () => (
    <section className=" py-16">
        <div className="max-w-4xl mx-auto divide-y divide-gray-700 text-white">
            {posts.map((post) => (
                <div key={post.id} className="py-8 flex items-start justify-between gap-4">

                    {/* ← Left column: avatar + name/category */}
                        <Image
                            src={post.author.avatarUrl}
                            alt={post.author.name}
                            width={48}
                            height={48}
                            className="rounded-full object-cover"
                        />
                    <div className="flex items-center space-x-4">
                        <div>
                            <p className="font-medium">{post.author.name}</p>
                            <p className="text-sm text-gray-400">{post.author.category}</p>
                        </div>
                    </div>

                    {/* ← Center column: date / title / description */}
                    <div className="flex-1 px-6">
                        <p className="text-sm text-gray-400">{post.date}</p>
                        <h3 className="mt-1 text-xl font-semibold">{post.title}</h3>
                        <p className="mt-2 text-gray-300">{post.description}</p>
                    </div>

                    {/* ← Right column: Read More button */}
                    <div className="flex items-center justify-end  h-40">
                        <div className="flex-shrink-0 flex justify-center items-center">
                            <a
                                href={post.href}
                                className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-lg text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                            >
                                Read More
                                <svg
                                    className="w-4 h-4 ml-2 text-[#23D5D5] -rotate-45"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default BlogList;
