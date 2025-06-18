// /app/api/blogs/route.ts

import { NextRequest, NextResponse } from "next/server";
import { listBlogs, createBlog } from "@/services/blog-services";

// For parsing multipart/form-data, we use the Web FormData API.
export async function GET() {
	try {
		const blogs = await listBlogs();
		return NextResponse.json(blogs, { status: 200 });
	} catch (err) {
		console.error("GET /api/blogs error:", err);
		return NextResponse.json(
			{ error: "Failed to fetch blogs" },
			{ status: 500 }
		);
	}
}

export async function POST(req: NextRequest) {
	try {
		// Parse multipart form data
		const formData = await req.formData();
		const title = formData.get("title") as string;
		const description = formData.get("description") as string;
		const file = formData.get("thumbnail") as File;

		if (!title || !description || !file) {
			return NextResponse.json(
				{ error: "Missing title, description, or thumbnail" },
				{ status: 400 }
			);
		}

		// Convert File to Buffer
		const arrayBuffer = await file.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		// Create blog with upload and slug generation
		const newBlog = await createBlog(
			title,
			description,
			file.name,
			buffer,
			file.type
		);

		return NextResponse.json(newBlog, { status: 201 });
	} catch (err) {
		console.error("POST /api/blogs error:", err);
		return NextResponse.json(
			{ error: "Failed to create blog" },
			{ status: 500 }
		);
	}
}
