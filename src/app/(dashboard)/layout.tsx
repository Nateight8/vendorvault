"use client";
import { AppNavbar } from "@/components/navigation/app-navbar";
import { AppSidebar } from "@/components/navigation/app-sidebar";
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

  const pathname = usePathname();

  const currentPathname = pathname.startsWith("/") ? "home" : pathname.slice(1);

  if (layout === "navbar") {
    return (
      <>
        <AppNavbar />
        <main className="h-screen w-full">{children}</main>
      </>
    );
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="h-screen w-full ">
        <div className="h-16 border-b bg-background sticky top-0 z-50">
          {currentPathname}
        </div>
        <ScrollArea className=" h-full ">{children}</ScrollArea>
      </main>
    </SidebarProvider>
  );
}
