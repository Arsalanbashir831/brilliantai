import type { Metadata } from "next";
import { Blog } from "@/types/blog";

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

async function getHeadlineData(id: string): Promise<Blog | null> {
	try {
		const baseUrl =
			process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";
		const res = await fetch(`${baseUrl}/api/blogs/${id}`, {
			// Fetch from your blogs API
			// Add caching strategies if needed, e.g., next: { revalidate: 3600 }
		});

		if (!res.ok) {
			console.error(
				`Failed to fetch headline with ID ${id}: ${res.status} ${res.statusText}`
			);
			return null;
		}
		const headline: Blog = await res.json();
		return headline;
	} catch (error) {
		console.error(`Error fetching headline data for metadata (${id}):`, error);
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
	const headline = await getHeadlineData(params.id);

	// Default/Fallback metadata if headline not found or error
	if (!headline) {
		return {
			title: "Headline Not Found | Brilliant AI",
			description:
				"The headline article you are looking for does not exist or could not be loaded.",
			openGraph: {
				title: "Headline Not Found | Brilliant AI",
				description:
					"The headline article you are looking for does not exist or could not be loaded.",
				url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/headlines/${params.id}`,
				siteName: "Brilliant AI",
				images: [`${process.env.NEXT_PUBLIC_FRONTEND_URL}/opengraph-image.png`], // Fallback to app logo
				type: "article", // Treat as an article
			},
			twitter: {
				card: "summary_large_image",
				title: "Headline Not Found | Brilliant AI",
				description:
					"The headline article you are looking for does not exist or could not be loaded.",
				images: [`${process.env.NEXT_PUBLIC_FRONTEND_URL}/opengraph-image.png`], // Fallback
			},
		};
	}

	const cleanDescription = cleanAndTruncateDescription(headline.description);

	return {
		title: headline.title,
		description: cleanDescription,
		alternates: {
			canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/headlines/${headline.id}`,
		},
		openGraph: {
			title: headline.title,
			description: cleanDescription,
			url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/headlines/${headline.id}`,
			siteName: "Brilliant AI",
			images: [
				{
					url: headline.thumbnailUrl,
					width: 1200,
					height: 630,
					alt: headline.title,
				},
			],
			type: "article",
			publishedTime: headline.publishedDate,
			section: "Headlines",
		},
		twitter: {
			card: "summary_large_image",
			title: headline.title,
			description: cleanDescription,
			site: "@BrilliantAI",
			creator: "@YourCreatorHandle",
			images: [headline.thumbnailUrl],
		},
	};
}

export default function HeadlinesArticleLayout({ children }: Props) {
	return <>{children}</>;
}
