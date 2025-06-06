// components/BlogList.tsx
"use client";

import { FC, useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";
import { truncateMarkdown } from "@/lib/markdown-utils";
import ReadMoreButton from "../widgets/ReadMoreButton";

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
				<ReadMoreButton href={`/news/${post.id}`}>
					Read More
				</ReadMoreButton>
							
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default BlogList;
