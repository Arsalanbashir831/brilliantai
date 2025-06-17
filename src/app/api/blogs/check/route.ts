import { NextRequest, NextResponse } from "next/server";
import { db } from "@/firebase/admin";

function slugifyTitle(title: string) {
    return title.trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-]/g, "");
}

export async function GET(req: NextRequest) {
    const title = new URL(req.url).searchParams.get("title")?.trim();
    if (!title) {
        return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const slug = slugifyTitle(title);
    const snap = await db.ref(`blogTitles/${slug}`).once("value");
    return NextResponse.json({ exists: snap.exists() });
}
