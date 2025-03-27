"use client";

import { motion } from "framer-motion";
import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";

import { Logo2 } from "@/components/logo2";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";
import { MobileNavItem2 } from "@/components/mobile-nav-item2";

export function Header27() {
  return (
    <motion.header
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="container flex items-center justify-between gap-10 py-4 mt-0 md:mt-4"
    >
      <Logo2 className="text-[#FFFFFF]" />
      <div className="flex items-center gap-10">
        <nav className="hidden items-center gap-10 md:flex justify-end">
          <nav className="flex items-center justify-between px-6 py-4 w-full">
            <div className="flex items-center space-x-8" />
            <nav className="w-full bg-background border-b border-blue-500/20">
              <div className="container mx-auto px-4">
                <div className="h-16 flex items-center justify-center gap-8">
                  <a href="/shop" className="text-foreground hover:text-primary transition-colors">
                    Shop
                  </a>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors">
                      Resources
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <a href="/builder" className="w-full">
                          Character Builder
                        </a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <a
                    href="/guides"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Guides
                  </a>
                  <Popover>
                    <PopoverTrigger>
                      <div className="relative">
                        <ShoppingCart className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
                        <Badge className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center">
                          2
                        </Badge>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-64">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="h-12 w-12 rounded bg-muted" />
                          <div>
                            <p className="text-sm font-medium">Item 1</p>
                            <p className="text-sm text-muted-foreground">$29.99</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-12 w-12 rounded bg-muted" />
                          <div>
                            <p className="text-sm font-medium">Item 2</p>
                            <p className="text-sm text-muted-foreground">$19.99</p>
                          </div>
                        </div>
                        <Separator />
                        <Button asChild variant="outline" className="w-full">
                          <a href="/checkout">View Cart</a>
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                  <a
                    href="/experience"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <User className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </nav>
          </nav>
        </nav>
        <div className="hidden items-center gap-2 md:flex" />
      </div>
      <MobileNavbar>
        <div className="rounded-b-lg bg-background py-4 container text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <MobileNavItem2 href="/about" label="About" />
            <MobileNavItem2 href="/docs" label="Docs" />
            <MobileNavItem2 href="/blog" label="Blog" />
            <MobileNavItem2 href="/pricing" label="Pricing" />
            <Button size="lg" asChild className="mt-2 w-full">
              <Link href="#" className="cursor-pointer">
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </motion.header>
  );
}
