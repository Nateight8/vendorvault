"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart2,
  Home,
  Package,
  ShoppingCart,
  Users,
  Settings,
  Menu,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  IconBell,
  IconChartBar,
  IconCreditCard,
  IconLayoutDashboard,
  IconListDetails,
  IconPackage,
  IconShoppingCart,
  IconUserDollar,
} from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { motion } from "motion/react";

// Menu items.
const navItems = [
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
    icon: IconPackage,
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
  // {
  //   title: "Overview",
  //   url: "/overview",
  //   icon: IconChartBar,
  // },
];

export default function AppNavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background sticky top-3 border rounded-full shadow-sm">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 ">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-primary">
                VendorVault
              </span>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex  items-center sm:space-x-6">
            {navItems.map((item) => {
              const isActive = pathname === item.url;
              return (
                <div
                  className={`h-full  group relative flex items-center justify-center ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  <Link
                    className={buttonVariants({
                      variant: "ghost",
                      className:
                        "inline-flex items-center pl-1 pr-2 pt-1 hover:bg-transparent text-sm  font-medium  ",
                    })}
                    key={item.title}
                    href={item.url}
                    passHref
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.title}
                  </Link>
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="h-1 w-full rounded-full absolute bottom-0 bg-foreground"
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-3 mr-6">
            <div className="relative w-fit ">
              <div className="size-3 bg-green-600 absolute -top-1 -right-1 rounded-full" />
              <Button size="icon">
                <IconBell className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-3  hover:cursor-pointer">
              <Avatar className="rounded-full">
                <AvatarImage src="" />
                <AvatarFallback className="rounded-full">CN</AvatarFallback>
              </Avatar>
              <div className="">
                <div className="max-w-xs md:max-w-[12ch] text-sm truncate">
                  dynamicemail@domain.com
                </div>
                <p className="text-sm text-muted-foreground">sales manager</p>
              </div>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="mt-8">
                  {navItems.map((item) => {
                    const isActive = pathname === item.url;
                    return (
                      <Link key={item.title} href={item.url} passHref>
                        <Button
                          variant="ghost"
                          className={`w-full justify-start mb-2 ${
                            isActive
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <item.icon className="w-5 h-5 mr-4" />
                          {item.title}
                        </Button>
                      </Link>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

{
  /* <button
                    className="border"
                    // variant="ghost"
                    // className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    //   isActive
                    //     ? "border-b-2 border-primary text-primary"
                    //     : "text-muted-foreground hover:text-primary hover:border-primary"
                    // }`}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.title}
                  </button> */
}
