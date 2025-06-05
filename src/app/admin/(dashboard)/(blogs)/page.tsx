"use client";

import React from "react";
import DataTable from "@/components/admin/Datatable";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Edit, Trash2, Plus } from "lucide-react";

import { useRouter } from "next/navigation";

interface Blog {
  id: string;
  thumbnail: string;
  title: string;
  publishedDate: string;
  description: string;
  [key: string]: unknown;
}

const BlogsPage = () => {
  const router = useRouter()
  const handleEdit = (blog: Blog) => {
    console.log("Edit blog:", blog);
    alert(`Edit: ${blog.title}`);
  };

  const handleDelete = (blog: Blog) => {
    if (
      typeof window !== "undefined" &&
      window.confirm(`Are you sure you want to delete "${blog.title}"?`)
    ) {
      console.log(`Deleted blog: ${blog.title}`);
      // TODO: perform deletion logic here
    }
  };

  const handleAddNew = () => {
    console.log("Redirect to Add Blog page");
    router.push("/admin/new")
    // You can replace this with router.push("/admin/blogs/create") or open a modal
  };

  const columns = [
    {
      accessor: "thumbnail",
      header: "Thumbnail",
      cell: ({ getValue }: { getValue: () => unknown }) => (
        <div className="w-24 h-14 relative">
          <Image
            src={getValue() as string}
            alt="Blog thumbnail"
            fill
            style={{ objectFit: "cover" }}
            className="rounded"
          />
        </div>
      ),
    },
    {
      accessor: "title",
      header: "Title",
      cell: ({ getValue }: { getValue: () => unknown }) => (
        <span className="font-medium text-gray-800">{getValue() as string}</span>
      ),
    },
    {
      accessor: "description",
      header: "Content",
      cell: ({ getValue }: { getValue: () => unknown }) => (
        <span
          className="font-medium text-gray-800 truncate max-w-[300px] block"
          title={getValue() as string}
        >
          {getValue() as string}
        </span>
      ),
    },
    {
      accessor: "publishedDate",
      header: "Published Date",
      cell: ({ getValue }: { getValue: () => unknown }) => (
        <span className="text-gray-600">{getValue() as string}</span>
      ),
    },
    {
      accessor: "actions",
      header: "Actions",
      cell: ({ row }: { row: Blog }) => (
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleEdit(row)}
            aria-label="Edit Blog"
          >
            <Edit className="h-4 w-4 text-blue-600" />
          </Button>
          <Button
            variant="destructive"
            size="icon"
            onClick={() => handleDelete(row)}
            aria-label="Delete Blog"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  const data: Blog[] = [
    {
      id: "1",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1748936421969-218bf51428f8?q=80&w=3132&auto=format&fit=crop",
      title: "How to Build a React App",
      publishedDate: "2025-05-20",
      description:
        "This blog post covers the basics of building a React application from scratch, including setting up the development environment, creating components, and managing state.",
    },
    {
      id: "2",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1748936421969-218bf51428f8?q=80&w=3132&auto=format&fit=crop",
      title: "Understanding Next.js Routing",
      publishedDate: "2025-05-28",
      description:
        "This article explains how routing works in Next.js, including dynamic routes, API routes, and how to handle navigation between pages.",
    },
  ];

  return (
    <div className="p-4 md:p-8 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Blogs
        </h1>
        <Button  className="bg-blue-700 hover:bg-blue-900 cursor-pointer" onClick={handleAddNew}>
          <Plus className="w-4 h-4 mr-2" />
          Add New Blog
        </Button>
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <DataTable<Blog> columns={columns} data={data} />
      </div>
    </div>
  );
};

export default BlogsPage;
