"use client";
import AppNavbar from "@/components/navigation/app-navbar";
import { AppSidebar } from "@/components/navigation/app-sidebar";
import AppBar from "@/components/navigation/appbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [layout, setLayout] = useState<"sidebar" | "navbar">("sidebar");

  if (layout === "navbar") {
    return (
      <div className="p-2">
        <AppNavbar />
        <main className="h-screen w-full ">{children}</main>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="h-screen w-full">
        <div className="px-4 pt-2">
          <AppBar />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
