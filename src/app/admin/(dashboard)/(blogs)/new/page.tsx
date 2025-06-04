// File: src/app/dashboard/blogs/new/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Editor from '@/components/admin/Editor';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type EJOutputData = EditorJS.OutputData;

const NewBlogPage: React.FC = () => {
    const router = useRouter();

    // Form state
    const [title, setTitle] = useState('');
    const [publishedDate, setPublishedDate] = useState(
        new Date().toISOString().substring(0, 10)
    );

    // Instead of a URL‐string, we store either a File or a base64 string
    const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
    const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

    // Editor content
    const [contentData, setContentData] = useState<EJOutputData | null>(null);
    const [submitting, setSubmitting] = useState(false);

    // Called by our <Editor> component
    const handleEditorChange = (data: EJOutputData) => {
        setContentData(data);
    };

    // When user chooses a file from <input type="file">
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null;
        setThumbnailFile(file);

        if (file) {
            // Optional: create a base64 preview (so we can display it before upload)
            const reader = new FileReader();
            reader.onload = () => {
                setThumbnailPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setThumbnailPreview(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !contentData) {
            alert('Title and body are required.');
            return;
        }

        setSubmitting(true);

        // Build payload. If you want to send the image file to your own API,
        // you could create a FormData. For simplicity, we'll inline base64 here.
        let thumbnailDataUrl: string | null = null;
        if (thumbnailFile) {
            // Convert the File to a base64 string (you could also upload to a server)
            thumbnailDataUrl = await new Promise<string>((resolve) => {
                const reader = new FileReader();
                reader.onload = () => {
                    resolve(reader.result as string);
                };
                reader.readAsDataURL(thumbnailFile);
            });
        }

        // Send everything as JSON. 
        // If you plan to store thumbnails in a CDN, replace thumbnailDataUrl
        // with the URL returned by your upload API instead.
        const payload = {
            title,
            publishedDate,
            thumbnail: thumbnailDataUrl, // base64 or null
            content: contentData,
        };

        try {
            const res = await fetch('/api/blogs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error('Failed to create blog');
            router.push('/admin'); // adjust path to your blog list
        } catch (err) {
            console.error(err);
            alert('Error saving blog.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-semibold mb-4 text-gray-800">
                Create New Blog
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div>
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter blog title"
                        required
                    />
                </div>

                {/* Published Date */}
                <div>
                    <label
                        htmlFor="publishedDate"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Published Date
                    </label>
                    <input
                        id="publishedDate"
                        type="date"
                        value={publishedDate}
                        onChange={(e) => setPublishedDate(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {/* Thumbnail File */}
                <div>
                    <label
                        htmlFor="thumbnailFile"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Thumbnail
                    </label>
                    <input
                        id="thumbnailFile"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="mt-1 block w-full text-gray-700"
                    />
                    {thumbnailPreview && (
                        <Image
                            src={thumbnailPreview}
                            alt="Thumbnail preview"
                            fill
                            className="mt-2 h-24 w-auto rounded border"
                        />
                    )}
                </div>

                {/* Editor.js for Body */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Content
                    </label>
                    <div className="border rounded bg-white p-2">
                        <Editor onChange={handleEditorChange} />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <Button className='text-black border' type="submit" disabled={submitting}>
                        {submitting ? 'Saving...' : 'Create Blog'}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default NewBlogPage;
