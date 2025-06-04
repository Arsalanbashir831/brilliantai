// app/dashboard/layout.tsx
 // Adjust path if needed
import { Sidebar } from "@/components/admin/Sidebar";
import type { Metadata } from "next";

// Metadata for the dashboard can be specific to this layout
export const metadata: Metadata = {
  title: "Dashboard - Brilliant AI",
  description: "Manage your AI projects and operations.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full bg-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
        {/* Mobile header is part of the Sidebar component for this example */}
        {/* Or you could have a separate Header component here for mobile */}
        <main className="flex-1 p-4 sm:px-6 sm:py-0 md:gap-8 md:p-8">
          {children}
        </main>
        {/* Optional: Footer can go here */}
      </div>
    </div>
  );
}