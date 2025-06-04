"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BlogForm, { BlogFormValues } from "@/components/admin/blog-form";

const NewBlogPage: React.FC = () => {
	const router = useRouter();
	const [submitting, setSubmitting] = useState(false);

	const handleCreate = async (values: BlogFormValues) => {
		setSubmitting(true);

		let thumbnailDataUrl: string | null = null;
		if (values.thumbnailFile) {
			thumbnailDataUrl = await new Promise((resolve) => {
				const reader = new FileReader();
				reader.onload = () => resolve(reader.result as string);
				reader.readAsDataURL(values.thumbnailFile!);
			});
		}

		const payload = {
			title: values.title,
			publishedDate: values.publishedDate,
			thumbnail: thumbnailDataUrl,
			content: values.content,
			category: values.category,
			author: values.author,
		};

		const res = await fetch("/api/blogs", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		});

		if (res.ok) {
			router.push("/admin?blogs");
		} else {
			alert("Failed to create blog.");
		}

		setSubmitting(false);
	};

	return (
		<div className="p-6">
			<h1 className="text-2xl">Create New Blog</h1>
			<BlogForm
				onSubmit={handleCreate}
				submitLabel="Create Blog"
				isSubmitting={submitting}
			/>
		</div>
	);
};

export default NewBlogPage;
