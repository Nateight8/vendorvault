"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  IconChartPie,
  IconCreditCard,
  IconHelpSquareRounded,
  IconLayoutDashboard,
  IconListDetails,
  IconSettings,
  IconShoppingCart,
  IconUserDollar,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Menu items.
const mainlinks = [
  {
    title: "Dashboard",
    url: "/",
    icon: IconLayoutDashboard,
  },
  {
    title: "Products",
    url: "/products",
    icon: IconShoppingCart,
  },
  {
    title: "Orders",
    url: "/orders",
    icon: IconListDetails,
  },
  {
    title: "Payments",
    url: "/payments",
    icon: IconCreditCard,
  },
  {
    title: "Customers",
    url: "/customers",
    icon: IconUserDollar,
  },
  {
    title: "Overview",
    url: "/overview",
    icon: IconChartPie,
  },
];

// Menu items.
const footerlinks = [
  {
    title: "Help & support",
    url: "/help",
    icon: IconHelpSquareRounded,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: IconSettings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  const isLinkActive = (url: string) => {
    if (url === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(url);
  };

  return (
    <Sidebar>
      <SidebarContent>
        <div className="h-16"></div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="px-4">
              {mainlinks.map((item) => {
                const isActive = isLinkActive(item.url);

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={isActive} asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className="px-4">
          {footerlinks.map((item) => {
            const isActive = isLinkActive(item.url);

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton isActive={isActive} asChild>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
