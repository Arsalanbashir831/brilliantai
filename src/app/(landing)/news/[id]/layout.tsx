import type { Metadata } from "next";
import { getBlogBySlug } from "@/services/blog-services";

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

// Function to get blog data directly from the service (avoids HTTP fetch issues)
async function getBlogData(id: string) {
	try {
		const blog = await getBlogBySlug(id);
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
