import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description:
		"Brilliant AI Ltd. (“we”, “us”, or “our”) is committed to safeguarding the privacy of individuals who interact with us. This Privacy Policy outlines how we collect, use, disclose and protect your personal...",
	openGraph: {
		title: "Privacy Policy - Brilliant AI",
		description:
			"Brilliant AI Ltd. (“we”, “us”, or “our”) is committed to safeguarding the privacy of individuals who interact with us. This Privacy Policy outlines how we collect, use, disclose and protect your personal...",
		url: process.env.NEXT_PUBLIC_FRONTEND_URL + "/privacy",
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
		title: "Privacy Policy - Brilliant AI",
		description:
			"Brilliant AI Ltd. (“we”, “us”, or “our”) is committed to safeguarding the privacy of individuals who interact with us. This Privacy Policy outlines how we collect, use, disclose and protect your personal...",
	},
};

export default function PrivacyPolicyPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
