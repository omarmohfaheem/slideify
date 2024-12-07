import type { Metadata } from "next";
import Sidebar from "@/components/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Dashboard | Slideify",
} satisfies Metadata;

export default function Page({ children }: LayoutProps) {
  return (
    <div className="flex flex-auto w-screen h-screen relative">
      <Sidebar />
      <main className="flex flex-auto flex-col px-12 py-6 bg-gray-50">
        {children}
      </main>
    </div>
  );
}
