// components/BlogList.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogWithContent {
	id: string;
	title: string;
	publishedDate: string; // e.g. "2025-06-05"
	thumbnailUrl: string; // if you have one; otherwise can be empty
	content: {
		blocks: { type: string; data: { text?: string } }[];
		time: number;
		version: string;
	};
	category: string;
	author: string;
}

const BlogList: React.FC = () => {
	const [blogs, setBlogs] = useState<BlogWithContent[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchBlogs() {
			try {
				const res = await fetch("/api/blogs");
				if (!res.ok) throw new Error("Failed to fetch blogs");
				const data: BlogWithContent[] = await res.json();

				// Sort by publishedDate descending (newest first) and take first 3
				const sorted = data
					.slice() // shallow copy
					.sort((a, b) => (a.publishedDate < b.publishedDate ? 1 : -1))
					.slice(0, 3);

				setBlogs(sorted);
			} catch (err) {
				console.error(err);
				// Optionally show a toast or message
			} finally {
				setLoading(false);
			}
		}
		fetchBlogs();
	}, []);
	// Helper to format date (e.g. "2025-06-05" → "June 5, 2025")
	function formatDate(isoDate: string) {
		const d = new Date(isoDate);
		return d.toLocaleDateString(undefined, {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	}

	// If you want a short excerpt from the first block of content:
	function getExcerpt(blocks: BlogWithContent["content"]["blocks"]) {
		if (!blocks || blocks.length === 0) return "";
		// If the first block is a paragraph, return its text (first 100 chars)
		if (blocks[0].type === "paragraph") {
			const txt = blocks[0].data.text as string;
			return txt.length > 100 ? txt.slice(0, 100) + "…" : txt;
		}
		// Otherwise, join all text blocks:
		const combined = blocks
			.filter((b) => b.type === "paragraph")
			.map((b) => (b.data.text as string).slice(0, 100))
			.join(" ");
		return combined.length > 100 ? combined.slice(0, 100) + "…" : combined;
	}

	// Generate initials from author name
	function getInitials(name: string) {
		return name
			.split(" ")
			.map((w) => w[0]?.toUpperCase())
			.slice(0, 2)
			.join("");
	}

	if (loading) {
		return (
			<section className="py-16 text-center text-gray-500">Loading…</section>
		);
	}

	return (
		<section className="py-16">
			<div className="divide-y divide-gray-700 text-white">
				{blogs.map((post) => (
					<div
						key={post.id}
						className="
              flex flex-col 
              px-4 py-6 space-y-4
              md:flex-row md:px-32 md:py-8 md:items-start md:justify-between md:space-y-0
            ">
						{/*** 1) AVATAR + AUTHOR BLOCK ***/}
						<div
							className="
                flex items-center space-x-4 justify-center
                md:justify-start
              ">
							{post.thumbnailUrl ? (
								<Image
									src={post.thumbnailUrl}
									alt={post.author}
									width={48}
									height={48}
									className="rounded-full object-cover"
								/>
							) : (
								<div className="h-12 w-12 rounded-full bg-gray-600 flex items-center justify-center">
									<span className="text-lg font-bold text-white">
										{getInitials(post.author)}
									</span>
								</div>
							)}
							<div className="flex flex-col leading-tight">
								<p className="font-medium">{post.author}</p>
								<p className="text-sm text-gray-400">{post.category}</p>
							</div>
						</div>

						{/*** 2) DATE / TITLE / DESCRIPTION BLOCK ***/}
						<div
							className="
                w-full text-left
                md:flex-1 md:px-6 md:w-auto
              ">
							<p className="text-sm text-gray-400">
								{formatDate(post.publishedDate)}
							</p>
							<h3 className="mt-1 text-xl font-semibold text-white">
								{post.title}
							</h3>
							<p className="mt-2 text-gray-300">
								{getExcerpt(post.content.blocks)}
							</p>
						</div>

						{/*** 3) READ MORE BUTTON BLOCK ***/}
						<div
							className="
                flex justify-start
                md:justify-end md:w-auto
              ">
							<Link
								href={`/posts/${post.id}`}
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
