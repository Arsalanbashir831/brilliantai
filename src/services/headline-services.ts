import type { Headline } from "@/types/headline";
import { db } from "@/firebase/admin";

// We’ll prepend each record with a generated key under "headlines/"

// Create a new headline:
export async function createHeadline(
	title: string,
	description: string
): Promise<Headline> {
	const publishedDate = new Date().toISOString();
	const headlineRef = db.ref("headlines").push();
	const id = headlineRef.key!;

	const payload: Omit<Headline, "id"> = {
		title,
		description,
		publishedDate,
	};

	await headlineRef.set(payload);
	return { id, ...payload };
}

// List all headlines (returns array of Headline)
export async function listHeadlines(): Promise<Headline[]> {
	const snapshot = await db.ref("headlines").once("value");
	const raw: Record<string, Omit<Headline, "id">> = snapshot.val() || {};
	return Object.entries(raw).map(([id, data]) => ({
		id,
		...data,
	}));
}

// Get a single headline by ID
export async function getHeadlineById(id: string): Promise<Headline | null> {
	const snapshot = await db.ref(`headlines/${id}`).once("value");
	const data = snapshot.val();
	if (!data) return null;
	return { id, ...(data as Omit<Headline, "id">) };
}

// Update an existing headline:
export async function updateHeadline(
	id: string,
	title: string,
	description: string
): Promise<Headline | null> {
	const headlineRef = db.ref(`headlines/${id}`);
	const snapshot = await headlineRef.once("value");
	if (!snapshot.exists()) return null;

	const publishedDate = (snapshot.val() as Omit<Headline, "id">).publishedDate;
	const updatedData: Partial<Omit<Headline, "id">> = { title, description };
	await headlineRef.update(updatedData);

	return { id, title, description, publishedDate };
}

// Delete a headline:
export async function deleteHeadline(id: string): Promise<boolean> {
	const headlineRef = db.ref(`headlines/${id}`);
	const snapshot = await headlineRef.once("value");
	if (!snapshot.exists()) return false;

	await headlineRef.remove();
	return true;
}
