"use client";

import { useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "@/firebase/client";
import { Sidebar } from "@/components/admin/Sidebar";

interface DashboardLayoutProps {
	children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	const router = useRouter();
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (fbUser) => {
			if (fbUser) {
				setUser(fbUser);
				setLoading(false);
			} else {
				router.replace("/admin/auth");
			}
		});
		return () => unsubscribe();
	}, [router]);

	if (loading) {
		return null;
	}

	return (
		<div className="flex min-h-screen w-full bg-white">
			<Sidebar />
			<div className="flex flex-col flex-1">
				<main className="flex-1 p-4 sm:px-6 sm:py-0 md:gap-8 md:p-8">
					{children}
				</main>
			</div>
		</div>
	);
}
