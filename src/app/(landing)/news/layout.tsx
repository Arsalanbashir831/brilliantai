import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "News",
	description:
		"Dive into our newsletter for expert insights, tips, and industry trends to elevate your project management journey.",
	openGraph: {
		title: "News, insights and more - Brilliant AI",
		description:
			"Dive into our newsletter for expert insights, tips, and industry trends to elevate your project management journey.",
		url: process.env.NEXT_PUBLIC_FRONTEND_URL + "/news",
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/opengraph-image.png`,
				width: 1200,
				height: 630,
				alt: "Brilliant AI Logo",
			},
			{
				url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/opengraph-image.png`,
				width: 600,
				height: 315,
				alt: "Brilliant AI Logo",
			},
		],
	},
	twitter: {
		title: "News, insights and more - Brilliant AI",
		description:
			"Dive into our newsletter for expert insights, tips, and industry trends to elevate your project management journey.",
	},
};

export default function NewsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
