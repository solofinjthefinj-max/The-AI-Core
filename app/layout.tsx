import "./globals.css";
import type { Metadata } from "next";
import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";

export const metadata: Metadata = {
  title: "Auralis AI Workspace",
  description: "Smart personal AI assistant"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className="min-h-screen">
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1">
            <Topbar />
            <main className="p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
