"use client";

import React from "react";
import DataTable from "@/components/admin/Datatable";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Edit, Trash2 } from "lucide-react";

interface Blog {
  id: string;
  thumbnail: string;
  title: string;
  publishedDate: string;
  [key: string]: unknown;
}

const BlogsPage = () => {
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

  const columns = [
    {
      accessor: "thumbnail",
      header: "Thumbnail",
      cell: ({  getValue }: { row: Blog; getValue: () => unknown }) => (
        <div className="w-24 h-14 relative">
          <Image
            src={getValue() as string}
            alt="Blog thumbnail"
            fill
            style={{ objectFit: "cover" }}
            className="rounded"
            // onError={(e) => {
            //   const target = e.target as HTMLImageElement;
            //   target.src =
            //     "https://placehold.co/96x56/E0E0E0/B0B0B0?text=No+Image";
            //   target.alt = "Placeholder image";
            // }}
          />
        </div>
      ),
    },
    {
      accessor: "title",
      header: "Title",
      cell: ({  getValue }: { row: Blog; getValue: () => unknown }) => (
        <span className="font-medium text-gray-800">{getValue() as string}</span>
      ),
    },
    {
      accessor: "publishedDate",
      header: "Published Date",
      cell: ({  getValue }: { row: Blog; getValue: () => unknown }) => (
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
      thumbnail: "https://plus.unsplash.com/premium_photo-1748936421969-218bf51428f8?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "How to Build a React App",
      publishedDate: "2025-05-20",
    },
    {
      id: "2",
      thumbnail: "https://plus.unsplash.com/premium_photo-1748936421969-218bf51428f8?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Understanding Next.js Routing",
      publishedDate: "2025-05-28",
    },
    
  ];

  return (
    <div className="p-4 md:p-8 min-h-screen ">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        Blogs
      </h1>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <DataTable<Blog> columns={columns} data={data} />
      </div>
    </div>
  );
};

export default BlogsPage;
