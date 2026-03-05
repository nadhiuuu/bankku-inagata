"use client";

import { useState } from "react";
import Navbar from "@/components/layouts/app-navbar";
import Sidebar from "@/components/layouts/app-sidebar";
import Footer from "@/components/layouts/app-footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Bankku - Banking Made Easy</title>
        <link rel="icon" href="/image/favicon.png" />
      </head>
      <body className="bg-[#F5F7FA]">
        <div className="flex h-screen overflow-hidden bg-[#F5F7FA]">
          <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
          
          <div className="flex flex-col flex-1 min-w-0">
            <Navbar onMenuClick={() => setSidebarOpen(true)} />
            <main className="flex-1 overflow-y-auto p-4 md:p-5">
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}