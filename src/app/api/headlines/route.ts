// /app/api/headlines/route.ts

import { NextRequest, NextResponse } from "next/server";
import { listHeadlines, createHeadline } from "@/services/headline-services";

export async function GET() {
	try {
		const headlines = await listHeadlines();
		return NextResponse.json(headlines, { status: 200 });
	} catch (err) {
		console.error("GET /api/headlines error:", err);
		return NextResponse.json(
			{ error: "Failed to fetch headlines" },
			{ status: 500 }
		);
	}
}

export async function POST(req: NextRequest) {
	try {
		const { title, description } = (await req.json()) as {
			title?: string;
			description?: string;
		};

		if (!title || !description) {
			return NextResponse.json(
				{ error: "Missing title or description" },
				{ status: 400 }
			);
		}

		const newHeadline = await createHeadline(title, description);
		return NextResponse.json(newHeadline, { status: 201 });
	} catch (err) {
		console.error("POST /api/headlines error:", err);
		return NextResponse.json(
			{ error: "Failed to create headline" },
			{ status: 500 }
		);
	}
}
