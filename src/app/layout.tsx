import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from "next";

import FaviconSwitcher from "@/components/FaviconSwitcher";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});
const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_URL!),
	title: {
		default: "Brilliant AI",
		template: "%s | Brilliant AI",
	},
	description:
		"We take you from idea to execution by building AI web apps, developing machine learning solutions and implementing AI-driven processes that power scalable products and smarter operations.",

	// Open Graph metadata
	openGraph: {
		title: "Brilliant AI - From Idea to AI Execution",
		description:
			"We take you from idea to execution by building AI web apps, developing machine learning solutions and implementing AI-driven processes that power scalable products and smarter operations.",
		url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/`,
		siteName: "Brilliant AI",
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
		locale: "en_US",
		type: "website",
	},

	// Twitter Card metadata
	twitter: {
		card: "summary_large_image",
		title: "Brilliant AI - From Idea to AI Execution",
		description:
			"We take you from idea to execution by building AI web apps, developing machine learning solutions and implementing AI-driven processes that power scalable products and smarter operations.",
		site: "@BrilliantAI", // Replace with your company's Twitter handle if you have one
		creator: "@YourCreatorHandle", // Replace with a specific creator's Twitter handle if relevant
		images: [
			process.env.NEXT_PUBLIC_FRONTEND_URL +
				`${process.env.NEXT_PUBLIC_FRONTEND_URL}/opengraph-image.png`,
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
			<body className="antialiased">
				<FaviconSwitcher />
				{children}
			</body>
		</html>
	);
}
