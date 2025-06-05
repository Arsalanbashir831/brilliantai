// components/BlogList.tsx
"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { truncateMarkdown } from "@/lib/markdown-utils";

interface Headline {
	id: string;
	title: string;
	description: string;
	publishedDate: string; // ISO string
}

export const BlogList: FC = () => {
	const [headlines, setHeadlines] = useState<Headline[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchHeadlines() {
			try {
				const res = await fetch("/api/headlines");
				if (!res.ok) throw new Error("Failed to fetch headlines");
				const data: Headline[] = await res.json();
				// Sort by most recent first
				data.sort(
					(a, b) =>
						new Date(b.publishedDate).getTime() -
						new Date(a.publishedDate).getTime()
				);
				setHeadlines(data);
			} catch (err) {
				console.error(err);
			} finally {
				setLoading(false);
			}
		}
		fetchHeadlines();
	}, []);

	if (loading) {
		return (
			<section className="py-16">
				<div className="text-white text-center">Loading headlines…</div>
			</section>
		);
	}

	if (headlines.length === 0) {
		return (
			<section className="py-16">
				<div className="text-white text-center">No headlines found.</div>
			</section>
		);
	}

	return (
		<section className="py-16">
			<div className="divide-y divide-gray-700 text-white">
				{headlines.map((post) => (
					<div
						key={post.id}
						className="
              /* MOBILE: stack vertically with small padding */
              flex flex-col 
              px-4 py-6 
              space-y-4

              /* DESKTOP (≥md): 2-column layout */
              md:flex-row md:px-32 md:py-8 md:items-start md:justify-between md:space-y-0
            ">
						{/*** 1) DATE / TITLE / DESCRIPTION BLOCK ***/}
						<div
							className="
                /* On mobile: full width, left‐aligned */
                w-full text-left 
                /* On desktop: flex‐1 in the center */
                md:flex-1 md:px-6 md:w-auto
              ">
							<p className="text-sm text-gray-400">
								{new Date(post.publishedDate).toLocaleDateString(undefined, {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</p>
							<h3 className="mt-1 text-xl font-semibold">{post.title}</h3>
							<div className="mt-2 text-gray-300">
								<ReactMarkdown>
									{truncateMarkdown(post.description, 120)}
								</ReactMarkdown>
							</div>
						</div>

						{/*** 2) READ MORE BUTTON BLOCK ***/}
						<div
							className="
                /* On mobile: center below text */
                flex justify-start 
                /* On desktop: shrink‐to‐fit and align right */
                md:justify-end md:w-auto
              ">
							<Link
								href={`/news/${post.id}`}
								className="
                  inline-flex items-center 
                  px-4 py-2 
                  border border-gray-700 rounded-lg 
                  text-sm font-medium text-white 
                  hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 
                  transition
                ">
								Read More
								<svg
									className="w-4 h-4 ml-2 text-[#23D5D5] -rotate-45"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default BlogList;
