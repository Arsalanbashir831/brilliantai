import { db, bucket } from "@/firebase/admin";
import type { OutputData } from "@editorjs/editorjs";
import { v4 as uuidv4 } from "uuid";

export interface BlogWithContent {
	id: string;
	title: string;
	publishedDate: string;
	thumbnailUrl: string;
	thumbnailPath: string;
	content: OutputData;
	category: string;
	author: string;
}

/**
 * Uploads a base64‐encoded image to Cloud Storage.
 */
export async function uploadImage(
	base64Data: string,
	destinationPath: string
): Promise<{ url: string; path: string }> {
	const matches = base64Data.match(/^data:(image\/[a-zA-Z]+);base64,(.+)$/);
	let buffer: Buffer;
	let contentType: string = "image/jpeg";

	if (matches) {
		contentType = matches[1];
		buffer = Buffer.from(matches[2], "base64");
	} else {
		buffer = Buffer.from(base64Data, "base64");
	}

	const file = bucket.file(destinationPath);
	await file.save(buffer, {
		metadata: { contentType },
		public: false,
		validation: "md5",
	});

	const [url] = await file.getSignedUrl({
		action: "read",
		expires: "2500-01-01",
	});
	return { url, path: destinationPath };
}

/**
 * Deletes a file from Storage by its path.
 */
export async function deleteImage(path: string): Promise<void> {
	if (!path) return;
	const file = bucket.file(path);
	try {
		await file.delete();
	} catch (err: unknown) {
		const errorCode = (err as { code?: number })?.code;
		if (errorCode !== 404) throw err;
	}
}

/**
 * Creates a new blog entry in Realtime DB, including category & author.
 * Returns the new blog ID.
 */
export async function createBlog(data: {
	title: string;
	publishedDate: string;
	thumbnail: string | null;
	content: OutputData;
	category: string;
	author: string;
}): Promise<string> {
	const blogsRef = db.ref("blogs");
	const newRef = blogsRef.push();
	const id = newRef.key!;

	let thumbnailUrl = "";
	let thumbnailPath = "";

	if (data.thumbnail) {
		const filename = `thumbnails/${id}-${uuidv4()}.jpg`;
		const uploaded = await uploadImage(data.thumbnail, filename);
		thumbnailUrl = uploaded.url;
		thumbnailPath = uploaded.path;
	}

	const payload = {
		id,
		title: data.title,
		publishedDate: data.publishedDate,
		thumbnailUrl,
		thumbnailPath,
		content: data.content,
		category: data.category,
		author: data.author,
	};

	await newRef.set(payload);
	return id;
}

/**
 * Updates an existing blog. If a new thumbnail is base64, replaces old image.
 * Also updates category & author.
 */
export async function updateBlog(
	id: string,
	data: {
		title: string;
		publishedDate: string;
		thumbnail: string | null;
		content: OutputData;
		category: string;
		author: string;
	}
): Promise<void> {
	const blogRef = db.ref(`blogs/${id}`);
	const snapshot = await blogRef.once("value");
	const existing = snapshot.val() as BlogWithContent | null;
	if (!existing) throw new Error("Blog not found");

	let thumbnailUrl = existing.thumbnailUrl;
	let thumbnailPath = existing.thumbnailPath;

	if (data.thumbnail && data.thumbnail.startsWith("data:image")) {
		if (thumbnailPath) {
			await deleteImage(thumbnailPath);
		}
		const filename = `thumbnails/${id}-${uuidv4()}.jpg`;
		const uploaded = await uploadImage(data.thumbnail, filename);
		thumbnailUrl = uploaded.url;
		thumbnailPath = uploaded.path;
	}

	await blogRef.update({
		title: data.title,
		publishedDate: data.publishedDate,
		thumbnailUrl,
		thumbnailPath,
		content: data.content,
		category: data.category,
		author: data.author,
	});
}

/**
 * Fetches a single blog by ID.
 */
export async function getBlogById(id: string): Promise<BlogWithContent | null> {
	const snapshot = await db.ref(`blogs/${id}`).once("value");
	return snapshot.exists() ? (snapshot.val() as BlogWithContent) : null;
}

/**
 * Lists all blogs.
 */
export async function getAllBlogs(): Promise<BlogWithContent[]> {
	const snapshot = await db.ref("blogs").once("value");
	const val = snapshot.val() as Record<string, BlogWithContent> | null;
	return val ? Object.values(val) : [];
}

/**
 * Deletes a blog and its image.
 */
export async function deleteBlog(id: string): Promise<void> {
	const blogRef = db.ref(`blogs/${id}`);
	const snapshot = await blogRef.once("value");
	const existing = snapshot.val() as BlogWithContent | null;
	if (!existing) throw new Error("Blog not found");

	if (existing.thumbnailPath) {
		await deleteImage(existing.thumbnailPath);
	}
	await blogRef.remove();
}
