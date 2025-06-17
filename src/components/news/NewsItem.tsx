"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { truncateMarkdown } from "@/lib/markdown-utils";
import ReadMoreButton from "../widgets/ReadMoreButton";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogItem {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedDate: string;
}

export default function NewsItem() {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data: BlogItem[] = await res.json();
        data.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
        setBlogs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-12 text-white">
        {/* Featured skeleton */}
        <div className="border-y border-gray-800 py-16 flex flex-col md:flex-row gap-8 mb-12">
          <Skeleton className="w-full md:w-1/2 h-64 sm:h-80 rounded-lg bg-gray-600/40" />
          <div className="flex-1 flex flex-col justify-center space-y-4">
            <Skeleton className="h-8 w-3/4 bg-gray-600/40" />
            <Skeleton className="h-4 w-full bg-gray-600/40" />
            <Skeleton className="h-4 w-5/6 bg-gray-600/40" />
            <Skeleton className="h-4 w-4/5 bg-gray-600/40" />
            <div className="pt-4">
              <Skeleton className="h-10 w-32 bg-gray-600/40" />
            </div>
          </div>
        </div>
        {/* Grid skeletons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="flex flex-col space-y-4">
              <Skeleton className="w-full h-40 rounded-lg bg-gray-600/40" />
              <Skeleton className="h-6 w-3/4 bg-gray-600/40" />
              <Skeleton className="h-4 w-1/2 bg-gray-600/40" />
              <div className="mt-auto">
                <Skeleton className="h-8 w-24 bg-gray-600/40" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (blogs.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-12 text-white">
        <div>No blogs published yet.</div>
      </section>
    );
  }

  const [featured, ...others] = blogs;

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-white">
      {/* Featured Article */}
      <div className="border-y border-gray-800 py-16 flex flex-col md:flex-row gap-8 mb-12 px-0">
        <div className="relative w-full md:w-1/2 h-64 sm:h-80 rounded-lg overflow-hidden">
          <Image src={featured.thumbnailUrl} alt={featured.title} fill className="object-cover" />
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{featured.title}</h2>
          <div className="mb-6 text-gray-400">
            <ReactMarkdown>{truncateMarkdown(featured.description, 120)}</ReactMarkdown>
          </div>
          <div className="flex flex-wrap gap-4 mb-6 text-white">
            <div>
              <span className="text-sm text-gray-400 font-semibold block">Published</span>
              <span className="text-sm">{new Date(featured.publishedDate).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="md:flex md:justify-end">
            <ReadMoreButton href={`/news/${featured.id}`} />
          </div>
        </div>
      </div>

      {/* Grid of Other Articles */}
      <div className="pt-12 px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {others.map((item) => (
          <div key={item.id} className="flex flex-col rounded-lg overflow-hidden">
            <div className="relative h-62 md:h-40 lg:h-40 w-full">
              <Image src={item.thumbnailUrl} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-4">
                  {new Date(item.publishedDate).toLocaleDateString()}
                </p>
              </div>
              <div className="w-full md:flex md:justify-end">
                <ReadMoreButton href={`/news/${item.id}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}