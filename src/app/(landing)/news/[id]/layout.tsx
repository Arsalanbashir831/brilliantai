import type { Metadata } from "next";
import { Blog } from "@/types/blog";

// Helper function to clean Markdown and truncate text for descriptions
function cleanAndTruncateDescription(
	text: string,
	maxLength: number = 160
): string {
	let cleanedText = text.replace(/#{1,6}\s/g, "");

	cleanedText = cleanedText.replace(/(\*\*|__)(.*?)\1/g, "$2");

	cleanedText = cleanedText.replace(/(\*|_)(.*?)\1/g, "$2");

	cleanedText = cleanedText.replace(/\n/g, " ");

	cleanedText = cleanedText.trim();

	if (cleanedText.length > maxLength) {
		const truncated = cleanedText.substring(0, maxLength);
		const lastSpace = truncated.lastIndexOf(" ");
		if (lastSpace !== -1) {
			return truncated.substring(0, lastSpace) + "...";
		}
		return truncated + "...";
	}

	return cleanedText;
}

// Function to fetch blog data (this runs on the server during build/request)
async function getBlogData(id: string): Promise<Blog | null> {
	try {
		const baseUrl =
			process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";
		const res = await fetch(`${baseUrl}/api/blogs/${id}`, {
			// Consider caching strategy for dynamic data
			// For revalidation, use: next: { revalidate: 60 } (revalidate every 60 seconds)
			// Or no-store for completely dynamic: cache: 'no-store'
		});

		if (!res.ok) {
			console.error(
				`Failed to fetch blog with ID ${id}: ${res.status} ${res.statusText}`
			);
			return null;
		}
		const blog: Blog = await res.json();
		return blog;
	} catch (error) {
		console.error(`Error fetching blog data for metadata (${id}):`, error);
		return null;
	}
}

// Dynamic Metadata Generation
type Props = {
	params: Promise<{ id: string }>;
	children: React.ReactNode;
};

export async function generateMetadata(
	{ params: paramsPromise }: Props
	// parent: ResolvingMetadata
): Promise<Metadata> {
	const params = await paramsPromise;
	const blog = await getBlogData(params.id);

	// Default/Fallback metadata if blog not found or error
	if (!blog) {
		return {
			title: "Article Not Found | Brilliant AI",
			description:
				"The news article you are looking for does not exist or could not be loaded.",
			openGraph: {
				title: "Article Not Found | Brilliant AI",
				description:
					"The news article you are looking for does not exist or could not be loaded.",
				url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/news/${params.id}`,
				siteName: "Brilliant AI",
				images: [`${process.env.NEXT_PUBLIC_FRONTEND_URL}/opengraph-image.png`],
				type: "article",
			},
			twitter: {
				card: "summary_large_image",
				title: "Article Not Found | Brilliant AI",
				description:
					"The news article you are looking for does not exist or could not be loaded.",
				images: [`${process.env.NEXT_PUBLIC_FRONTEND_URL}/opengraph-image.png`],
			},
		};
	}

	// Generate cleaned and truncated description
	const cleanDescription = cleanAndTruncateDescription(blog.description);

	// Blog-specific metadata
	return {
		title: blog.title,
		description: cleanDescription,
		alternates: {
			canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/news/${blog.id}`,
		},
		openGraph: {
			title: blog.title,
			description: cleanDescription,
			url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/news/${blog.id}`,
			siteName: "Brilliant AI",
			images: [
				{
					url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/opengraph-image.png`,
					width: 1200,
					height: 630,
					alt: blog.title,
				},
			],
			type: "article",
			publishedTime: blog.publishedDate,
			section: "News",
		},
		twitter: {
			card: "summary_large_image",
			title: blog.title,
			description: cleanDescription,
			site: "@BrilliantAI",
			creator: "@YourCreatorHandle",
			images: [`${process.env.NEXT_PUBLIC_FRONTEND_URL}/opengraph-image.png`],
		},
	};
}

export default function NewsArticleLayout({ children }: Props) {
	return <>{children}</>;
}
