import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Cookies Policy",
	description:
		"This Cookies Policy explains how Brilliant AI Ltd. (“we”, “us” or “our”) uses cookies and similar technologies on our website www.brilliant-ai.co.uk. This policy should be read alongside our Privacy Policy, which explains how we collect and use personal data.",
	openGraph: {
		title: "Cookies Policy - Brilliant AI",
		description:
			"This Cookies Policy explains how Brilliant AI Ltd. (“we”, “us” or “our”) uses cookies and similar technologies on our website www.brilliant-ai.co.uk. This policy should be read alongside our Privacy Policy, which explains how we collect and use personal data.",
		url: process.env.NEXT_PUBLIC_FRONTEND_URL + "/cookies",
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
		title: "Cookies Policy - Brilliant AI",
		description:
			"This Cookies Policy explains how Brilliant AI Ltd. (“we”, “us” or “our”) uses cookies and similar technologies on our website www.brilliant-ai.co.uk. This policy should be read alongside our Privacy Policy, which explains how we collect and use personal data.",
	},
};

export default function CookiesPolicyPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
