"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IconBell } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

export default function AppBar() {
  const pathname = usePathname();
  return (
    <header
      role="banner"
      aria-label="Application Header"
      // bg-accent/10 border rounded-md border-border/40 <== incase i like it that way
      className="sticky top-0 h-16 flex items-center justify-between px-4 shadow-md"
    >
      <div className="text-xl font-bold capitalize">
        {pathname === "/" ? "home" : pathname.slice(1)}
      </div>
      <>
        <div className="flex items-center gap-3 mr-6">
          <div className="relative w-fit ">
            <div className="size-3 bg-green-600 absolute -top-1 -right-1 rounded-full" />
            <Button size="icon">
              <IconBell className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-3  hover:cursor-pointer">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="">
              <div className="max-w-xs md:max-w-[12ch] text-sm truncate">
                dynamicemail@domain.com
              </div>
              <p className="text-sm text-muted-foreground">sales manager</p>
            </div>
          </div>
        </div>
      </>
    </header>
  );
}
