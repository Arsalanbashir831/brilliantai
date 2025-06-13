"use client";

import {
  ArrowLeft,
  FacebookIcon,
  LinkedinIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";

interface ShareLink {
  Icon: FC<{ className?: string }>;
  href: string;
  label: string;
}

interface Blog {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedDate: string; // ISO string
}

const defaultShareLinks: ShareLink[] = [
  { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
];

export default function NewsArticle() {
  const { id } = useParams() as { id: string };
  const router = useRouter();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("No ID provided");
      setLoading(false);
      return;
    }

    async function fetchBlog() {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        if (res.status === 404) {
          setError("Article not found");
          setLoading(false);
          return;
        }
        if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
        const data: Blog = await res.json();
        setBlog(data);
      } catch {
        setError("Error loading article");
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [id]);

  if (loading) return <article className="max-w-4xl mx-auto px-4 py-8 text-white">Loading article…</article>;
  if (error || !blog) return (
    <article className="max-w-4xl mx-auto px-4 py-8 text-white">
      <button onClick={() => router.back()} className="inline-flex items-center text-lg hover:text-white">
        <ArrowLeft className="mr-2" /> Go back
      </button>
      <div className="mt-4">{error || "Article not found."}</div>
    </article>
  );

  const { title, description, thumbnailUrl, publishedDate } = blog;

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 text-white">
      <Link href="/news" className="inline-flex items-center text-lg hover:text-white mb-8">
        <ArrowLeft className="mr-2" /> Go back
      </Link>

      <div className="flex justify-between items-center mb-6">
        <div className="text-gray-400 text-sm">
          Posted on {new Date(publishedDate).toLocaleDateString()}
        </div>
        <div className="hidden sm:block w-0" />
      </div>

      <h1 className="text-3xl md:text-5xl font-medium mb-6">{title}</h1>

      <div className="flex flex-col sm:flex-row justify-between mb-8 space-y-4 sm:space-y-0">
        <div className="w-full sm:w-auto" />
        <div className="flex flex-col items-start space-y-2">
          <span className="text-white font-medium">Share this news</span>
          <div className="flex space-x-4">
            {defaultShareLinks.map(({ Icon, href, label }) => (
              <Link key={label} href={href} aria-label={`Share on ${label}`}>
                <Icon className="w-10 h-10 text-gray-400 border rounded-full p-2 hover:text-white transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-64 md:h-96 relative mb-8">
        <Image src={thumbnailUrl} alt={title} fill className="w-full h-full object-cover rounded-lg" />
      </div>

      <div className="prose prose-invert max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ ...props }) => <h1 className="text-4xl font-bold my-6" {...props} />, 
            h2: ({ ...props }) => <h2 className="text-3xl font-semibold my-5" {...props} />, 
            h3: ({ ...props }) => <h3 className="text-2xl font-medium my-4" {...props} />, 
            p: ({ ...props }) => <p className="text-lg leading-relaxed text-gray-300 my-4" {...props} />, 
            a: ({ ...props }) => <a className="text-cyan-400 hover:underline" {...props} />, 
            li: ({ ...props }) => <li className="ml-4 list-disc text-gray-300" {...props} />, 
           
          }}>
          {description}
        </ReactMarkdown>
      </div>
    </article>
  );
}