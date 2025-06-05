// /app/api/headlines/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import {
	getHeadlineById,
	updateHeadline,
	deleteHeadline,
} from "@/services/headline-services";

export async function GET(
	_req: NextRequest,
	{ params }: { params: { id: string } }
) {
	const { id } = params;
	try {
		const headline = await getHeadlineById(id);
		if (!headline) {
			return NextResponse.json(
				{ error: "Headline not found" },
				{ status: 404 }
			);
		}
		return NextResponse.json(headline, { status: 200 });
	} catch (err) {
		console.error(`GET /api/headlines/${id} error:`, err);
		return NextResponse.json(
			{ error: "Failed to fetch headline" },
			{ status: 500 }
		);
	}
}

export async function PATCH(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	const { id } = params;
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

		const updated = await updateHeadline(id, title, description);
		if (!updated) {
			return NextResponse.json(
				{ error: "Headline not found" },
				{ status: 404 }
			);
		}
		return NextResponse.json(updated, { status: 200 });
	} catch (err) {
		console.error(`PATCH /api/headlines/${id} error:`, err);
		return NextResponse.json(
			{ error: "Failed to update headline" },
			{ status: 500 }
		);
	}
}

export async function DELETE(
	_req: NextRequest,
	{ params }: { params: { id: string } }
) {
	const { id } = params;
	try {
		const success = await deleteHeadline(id);
		if (!success) {
			return NextResponse.json(
				{ error: "Headline not found" },
				{ status: 404 }
			);
		}
		return NextResponse.json(
			{ message: "Deleted successfully" },
			{ status: 200 }
		);
	} catch (err) {
		console.error(`DELETE /api/headlines/${id} error:`, err);
		return NextResponse.json(
			{ error: "Failed to delete headline" },
			{ status: 500 }
		);
	}
}
