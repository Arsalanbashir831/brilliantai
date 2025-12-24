// /app/api/blogs/route.ts

import { NextRequest, NextResponse } from "next/server";
import { listBlogs, createBlog } from "@/services/blog-services";

// For parsing JSON data from the request body
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
		// Parse JSON body
		const body = await req.json();
		const { title, description } = body;

		if (!title || !description) {
			return NextResponse.json(
				{ error: "Missing title or description" },
				{ status: 400 }
			);
		}

		// Create blog without thumbnail
		const newBlog = await createBlog(title, description);

		return NextResponse.json(newBlog, { status: 201 });
	} catch (err) {
		console.error("POST /api/blogs error:", err);
		return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
	}
}