"use client";

import { ArrowLeft, FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";


type ShareLink = { Icon: FC<{ className?: string }>; href: string; label: string };
type ContentBlock =
    | { type: "heading"; text: string }
    | { type: "paragraph"; text: string }
    | { type: "list"; items: string[] };

interface Article {
    date: string;
    readingTime: string;
    title: string;
    author: {
        name: string;
        role: string;
        avatarSrc: string;
    };
    shareLinks: ShareLink[];
    imageSrc: string;
    body: ContentBlock[];
}

const dummyArticle: Article = {
    date: "27th January 2025",
    readingTime: "8 min read",
    title: "Tech Startups Secure Record Funding",
    author: {
        name: "Astronomer X",
        role: "Technology",
        avatarSrc: "/news/User2.svg", // put a dummy avatar in public/news
    },
    shareLinks: [
        { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
        { Icon: FacebookIcon, href: "#", label: "Facebook" },
        { Icon: TwitterIcon, href: "#", label: "Twitter" },
    ],
    imageSrc: "/news/ai.png", // put a dummy image in public/news
    body: [
        {
            type: "heading",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        },
        {
            type: "paragraph",
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non."
        },
        {
            type: "heading",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        },
        {
            type: "paragraph",
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non."
        },
        {
            type: "paragraph",
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non."
        },
        {
            type: "list",
            items: [
                "Lorem ipsum dolor sit amet",
                "Non blandit massa enim nec scelerisque",
                "Neque egestas congue quisque egestas"
            ]
        },
        {
            type: "paragraph",
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non."
        },
        {
            type: "heading",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        },
        {
            type: "paragraph",
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non."
        },
    ],
};

const NewsArticle: FC = () => {
    const {
        date,
        readingTime,
        title,
        author,
        shareLinks,
        imageSrc,
        body,
    } = dummyArticle;

    return (
        <article className="max-w-4xl mx-auto px-4 py-8 text-white">
            {/* ← Go back */}
            <Link
                href="/news"
                className="inline-flex items-center text-gray-400 hover:text-white mb-8"
            >
                <ArrowLeft className="mr-2" /> Go back
            </Link>

            {/* Meta & share buttons */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-2 sm:space-y-0">
                <div className="text-gray-400 text-sm">
                    Posted on {date} • {readingTime}
                </div>
               
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-semibold mb-6">
                {title}
            </h1>

            {/* Author */}
            <div className="flex items-center justify-between mb-8 space-x-4">
                <div className="flex gap-4">
                    <Image
                        src={author.avatarSrc}
                        alt={author.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div>
                        <div className="font-medium">{author.name}</div>
                        <div className="text-gray-400 text-sm">{author.role}</div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 space-x-4">
                    <h1>Share this news </h1>
                    <div className="flex space-x-4">
                        {shareLinks.map(({ Icon, href, label }) => (
                            <Link key={label} href={href} aria-label={`Share on ${label}`}>
                                <Icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                            </Link>
                        ))}
                    </div>
                </div>
                
                
            </div>

            {/* Hero image */}
            <Image
                src={imageSrc}
                alt={title}
                width={800}
                height={450}
                className="w-full rounded-lg mb-8 object-cover"
            />

            {/* Body blocks */}
            <div className="space-y-6 ">
                {body.map((block, idx) => {
                    switch (block.type) {
                        case "heading":
                            return (
                                <h2 key={idx} className="text-3xl font-semibold">
                                    {block.text}
                                </h2>
                            );
                        case "paragraph":
                            return (
                                <p key={idx} className="text-gray-300 text-base">
                                    {block.text}
                                </p>
                            );
                        case "list":
                            return (
                                <ul key={idx} className="list-disc list-inside text-gray-300">
                                    {block.items!.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            );
                        default:
                            return null;
                    }
                })}
            </div>
        </article>
    );
};

export default NewsArticle;
