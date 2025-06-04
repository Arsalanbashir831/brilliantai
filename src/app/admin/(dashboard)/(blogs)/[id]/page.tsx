// File: src/app/dashboard/blogs/[id]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation';
import EditBlogForm from '@/components/admin/EditBlogForm';
import type { OutputData } from '@editorjs/editorjs';

// Simulate your DB fetch. Replace this with your real data fetching logic.
async function getBlogById(id: string): Promise<{
    id: string;
    title: string;
    publishedDate: string;
    thumbnailUrl: string;
    content: OutputData;
} | null> {
    // In real life: fetch from your database or headless CMS.
    // Here we return dummy data for demonstration.
    if (id === '1') {
        return {
            id: '1',
            title: 'Understanding Next.js Routing',
            publishedDate: '2025-05-28',
            thumbnailUrl:
                'https://plus.unsplash.com/premium_photo-1748936421969-218bf51428f8?q=80&w=3132&auto=format&fit=crop',
            content: {
                time: Date.now(),
                version: '2.27.2',
                blocks: [
                    {
                        type: 'header',
                        data: {
                            text: 'Understanding Next.js Routing',
                            level: 2,
                        },
                    },
                    {
                        type: 'paragraph',
                        data: {
                            text: 'Next.js 13 introduced the App Router, which lets you co-locate your React components, data fetching, and metadata in a single directory. This example shows how that works in practice.',
                        },
                    },
                    {
                        type: 'list',
                        data: {
                            style: 'unordered',
                            items: ['File-based routing', 'Dynamic segments', 'Nested layouts'],
                        },
                    },
                    // …more blocks if you like
                ],
            },
        };
    }
    return null;
}

type PageProps = {
    params: { id: string };
};

export default async function EditPage({ params }: PageProps) {
    const { id } = params;
    const blog = await getBlogById(id);

    if (!blog) {
        notFound();
    }

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-semibold mb-4 text-gray-800">
                Edit Blog: {blog.title}
            </h1>
            {/* 
        EditBlogForm is a client component that takes the existing blog data 
        and lets you modify it (including loading Editor.js with initialData).
      */}
            <EditBlogForm blog={blog} />
        </div>
    );
}
