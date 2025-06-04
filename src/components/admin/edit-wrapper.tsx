"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BlogForm, { BlogFormValues, BlogInitialData } from "./blog-form";
import type { OutputData } from "@editorjs/editorjs";

interface EditWrapperProps {
	blog: {
		id: string;
		title: string;
		publishedDate: string;
		thumbnailUrl: string;
		content: OutputData;
		category: string;
		author: string;
	};
}

export default function EditWrapper({ blog }: EditWrapperProps) {
	const router = useRouter();
	const [submitting, setSubmitting] = useState(false);

	const initialValues: BlogInitialData = {
		title: blog.title,
		publishedDate: blog.publishedDate,
		thumbnailUrl: blog.thumbnailUrl,
		content: blog.content,
		category: blog.category,
		author: blog.author,
	};

	const handleUpdate = async (values: BlogFormValues) => {
		setSubmitting(true);

		let thumbnailDataUrl = initialValues.thumbnailUrl;
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

		const res = await fetch(`/api/blogs/${blog.id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		});

		if (res.ok) {
			router.push("/admin?blogs");
		} else {
			alert("Failed to update blog.");
		}

		setSubmitting(false);
	};

	return (
		<BlogForm
			initialValues={initialValues}
			onSubmit={handleUpdate}
			submitLabel="Update Blog"
			isSubmitting={submitting}
		/>
	);
}
