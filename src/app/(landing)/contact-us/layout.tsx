import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Get In Touch",
	description:
		"If you are planning to build an AI product, implement machine learning, automate business processes or explore strategic AI consulting, we are ready to support you. We work with startups, enterprise teams and public sector organisations to deliver intelligent systems that are designed for scale, stability and real-world impact. Share your goals with us and we will show you how we can help you move forward with clarity and confidence.",
	openGraph: {
		title: "Get In Touch With Us - Brilliant AI",
		description:
			"If you are planning to build an AI product, implement machine learning, automate business processes or explore strategic AI consulting, we are ready to support you. We work with startups, enterprise teams and public sector organisations to deliver intelligent systems that are designed for scale, stability and real-world impact. Share your goals with us and we will show you how we can help you move forward with clarity and confidence.",
		url: process.env.NEXT_PUBLIC_FRONTEND_URL + "/contact-us",
	},
	twitter: {
		title: "Get In Touch With Us - Brilliant AI",
		description:
			"If you are planning to build an AI product, implement machine learning, automate business processes or explore strategic AI consulting, we are ready to support you. We work with startups, enterprise teams and public sector organisations to deliver intelligent systems that are designed for scale, stability and real-world impact. Share your goals with us and we will show you how we can help you move forward with clarity and confidence.",
	},
};

export default function ContactUsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
