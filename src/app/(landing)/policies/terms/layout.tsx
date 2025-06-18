import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms of Service",
	description:
		"Welcome to the website of Brilliant AI Ltd. (“we”, “us”, or “our”). These Terms and Conditions govern your use of our website located at www.brilliant-ai.co.uk (“the Website”). By accessing or using the Website...",
	openGraph: {
		title: "Terms of Service - Brilliant AI",
		description:
			"Welcome to the website of Brilliant AI Ltd. (“we”, “us”, or “our”). These Terms and Conditions govern your use of our website located at www.brilliant-ai.co.uk (“the Website”). By accessing or using the Website...",
		url: process.env.NEXT_PUBLIC_FRONTEND_URL + "/terms",
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
		title: "Terms of Service - Brilliant AI",
		description:
			"Welcome to the website of Brilliant AI Ltd. (“we”, “us”, or “our”). These Terms and Conditions govern your use of our website located at www.brilliant-ai.co.uk (“the Website”). By accessing or using the Website...",
	},
};

export default function TermsPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
