import AdminNav from "@/components/admin/AdminNav";
import { ModeToggle } from "@/components/theme-toggle";
import "./admin.css";
import SearchHotel from "@/components/ui/SearchHotel";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TooltipProvider } from "@/components/ui/tooltip";
import { UserButton } from "@clerk/nextjs";
import {
  Bell,
  Menu,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "StaySavvy || Admin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark:bg-muted">
      <TooltipProvider>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r dark:bg-background md:block">
            <div className="flex h-full max-h-screen sticky z-50 top-0 flex-col gap-2">
              <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <div className="flex items-center gap-1 cursor-pointer">
                    <Image src="/logo.svg" alt="logo" width="30" height="30" />
                    <div className="font-bold sm:text-xl">StaySavvy</div>
                  </div>
                </Link>
                <Button
                  variant="outline"
                  size="icon"
                  className="ml-auto h-8 w-8"
                >
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Toggle notifications</span>
                </Button>
              </div>
              <div className="flex-1">
               <AdminNav/>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 items-center sticky z-50 top-0 gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                <div className="flex justify-between border-b pb-3">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                    
                  <div className="flex items-center bg-black gap-1 cursor-pointer">
                    <Image src="/logo.svg" alt="logo" width="30" height="30" />
                    <div className="font-bold sm:text-xl">StaySavvy</div>
                  </div>
                </Link>
                    </div>
                <AdminNav/>
             
                </SheetContent>
              </Sheet>
              <div className="hidden">
            <SearchHotel />
          </div>
              <ModeToggle/>
              <UserButton afterSignOutUrl="/" />
            </header>
            <main className="flex flex-1 flex-col gap-4 p-2 ">
              {children}
            </main>
          </div>
        </div>
      </TooltipProvider>
    </div>
  );
}
