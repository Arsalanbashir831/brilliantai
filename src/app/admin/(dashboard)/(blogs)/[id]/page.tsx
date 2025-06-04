// File: src/app/dashboard/blogs/[id]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import EditWrapper from "@/components/admin/edit-wrapper";

type PageProps = {
	params: { id: string };
};

export default async function EditPage({ params }: PageProps) {
	const { id } = params;

	// 1) Fetch the existing blog by ID from your API (or directly from Realtime DB)
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${id}`,
		{
			cache: "no-store",
		}
	);
	if (!res.ok) {
		notFound();
	}
	const existingBlog = await res.json();

	return (
		<div className="p-6 bg-gray-50 min-h-screen">
			<h1 className="text-2xl font-semibold mb-4 text-gray-800">
				Edit Blog: {existingBlog.title}
			</h1>
			<EditWrapper blog={existingBlog} />
		</div>
	);
}
