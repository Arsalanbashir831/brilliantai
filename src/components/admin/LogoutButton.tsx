// src/components/admin/LogoutButton.tsx
"use client";

import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/client";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
	const router = useRouter();

	const handleLogout = async () => {
		try {
			await signOut(auth);
			router.replace("/admin/auth");
		} catch (err) {
			console.error("Logout failed:", err);
		}
	};

	return (
		<button
			onClick={handleLogout}
			className="flex items-center gap-3 w-full rounded-lg px-3 py-2 text-red-500 hover:text-red-600 hover:bg-gray-700 transition-colors">
			<LogOut className="h-5 w-5" />
			<span className="text-sm font-medium">Logout</span>
		</button>
	);
}
