"use client";

import { usePathname } from "next/navigation";
import { useAnalytics } from "@/hook/useAnalytics";
import { useEffect, type ReactNode } from "react";

interface ClientAnalyticsProps {
	children: ReactNode;
}

export default function ClientAnalytics({ children }: ClientAnalyticsProps) {
	const pathname = usePathname();
	const { trackPageview } = useAnalytics();

	useEffect(() => {
		trackPageview(pathname);
	}, [pathname, trackPageview]);

	return <>{children}</>;
}
