"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import MarkdownEditor from "@/components/admin/MdEditor";
import { Button } from "@/components/ui/button";
import type { Headline } from "@/types/headline";

export default function EditHeadlinePage() {
	const { id } = useParams() as { id: string };
	const router = useRouter();

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		async function fetchHeadline() {
			try {
				const res = await fetch(`/api/headlines/${id}`);
				if (!res.ok) throw new Error("Failed to fetch headline");
				const data: Headline = await res.json();
				setTitle(data.title);
				setDescription(data.description);
			} catch (err) {
				console.error(err);
				alert("Error loading headline. Returning to list.");
				router.push("/admin/headlines");
			} finally {
				setIsLoading(false);
			}
		}
		fetchHeadline();
	}, [id, router]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!title || !description) return;

		setIsSubmitting(true);
		try {
			const res = await fetch(`/api/headlines/${id}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ title, description }),
			});
			if (!res.ok) {
				const { error } = await res.json();
				throw new Error(error || "Failed to update headline");
			}
			router.push("/admin/headlines");
		} catch (err) {
			console.error(err);
			alert("Error updating headline");
		} finally {
			setIsSubmitting(false);
		}
	};

	if (isLoading) {
		return <div className="p-6">Loading…</div>;
	}

	return (
		<div className="p-6 max-w-3xl mx-auto">
			<h1 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-2">
				✏️ Edit Headline
			</h1>

			<form onSubmit={handleSubmit} className="space-y-6">
				{/* Title */}
				<div>
					<label className="block font-semibold text-gray-700 mb-1">
						Title
					</label>
					<input
						type="text"
						className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Enter headline title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</div>

				{/* Description */}
				<div>
					<label className="block font-semibold text-gray-700 mb-1">
						Content (Markdown)
					</label>
					<div className="bg-white border rounded-md shadow-sm">
						<MarkdownEditor
							value={description}
							onChange={(val) => setDescription(val || "")}
						/>
					</div>
				</div>

				{/* Submit */}
				<div className="pt-4">
					<Button
						type="submit"
						className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
						disabled={isSubmitting}>
						{isSubmitting ? "Updating…" : "Update Headline"}
					</Button>
				</div>
			</form>
		</div>
	);
}
