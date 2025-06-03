// components/BlogList.tsx
'use client';

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
    <section className="py-16">
        <div className="divide-y divide-gray-700 text-white">
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="
            /* MOBILE (default): stack everything in one column, small horizontal padding */
            flex flex-col 
            px-4 py-6 
            space-y-4

            /* DESKTOP (≥md): switch to your original 3-column layout */
            md:flex-row md:px-32 md:py-8 md:items-start md:justify-between md:space-y-0
          "
                >
                    {/*** 1) AVATAR + AUTHOR BLOCK ***/}
                    <div
                        className="
              /* On mobile: horizontally center the avatar+name/category */
              flex items-center space-x-4 justify-center 
              /* On desktop: keep it left-aligned (and do not stretch) */
              md:justify-start
            "
                    >
                        <Image
                            src={post.author.avatarUrl}
                            alt={post.author.name}
                            width={48}
                            height={48}
                            className="rounded-full object-cover"
                        />
                        <div className="flex flex-col leading-tight">
                            <p className="font-medium">{post.author.name}</p>
                            <p className="text-sm text-gray-400">{post.author.category}</p>
                        </div>
                    </div>

                    {/*** 2) DATE / TITLE / DESCRIPTION BLOCK ***/}
                    <div
                        className="
              /* On mobile: full width, left-aligned text, add some top margin if you want separation */
              w-full text-left 
              /* On desktop: flex-1 so it grows to fill center column, with its own px */
              md:flex-1 md:px-6 md:w-auto
            "
                    >
                        <p className="text-sm text-gray-400">{post.date}</p>
                        <h3 className="mt-1 text-xl font-semibold">{post.title}</h3>
                        <p className="mt-2 text-gray-300">{post.description}</p>
                    </div>

                    {/*** 3) READ MORE BUTTON BLOCK ***/}
                    <div
                        className="
              /* On mobile: center the button under everything else */
              flex justify-start 
              /* On desktop: shrink-to-fit and align right */
              md:justify-end md:w-auto
            "
                    >
                        <a
                            href={post.href}
                            className="
                inline-flex items-center 
                px-4 py-2 
                border border-gray-700 rounded-lg 
                text-sm font-medium text-white 
                hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 
                transition
              "
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
            ))}
        </div>
    </section>
);

export default BlogList;
