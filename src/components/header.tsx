import { motion } from "framer-motion";
import { Logo2 } from "./logo2";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";
import { MobileNavItem2 } from "@/components/mobile-nav-item2";
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";  // Correct import
import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";

export function Header() {
  const { cartItems, total } = useCart();

  return (
    <motion.header
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="container mt-0 flex items-center justify-between gap-10 py-4 md:mt-4"
    >
      <Logo2 className="text-[#FFFFFF]" />

      <div className="flex items-center gap-10">
        <nav className="hidden items-center justify-end gap-10 md:flex">
          <div className="flex h-16 items-center justify-center gap-8">
            <a href="/shop" className="text-foreground transition-colors hover:text-primary">
              Shop
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground transition-colors hover:text-primary">
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

            <a href="/guides" className="text-foreground transition-colors hover:text-primary">
              Guides
            </a>

            <Popover>
              <PopoverTrigger>
                <div className="relative">
                  <ShoppingCart className="size-5 text-foreground transition-colors hover:text-primary" />
                  <Badge className="absolute -right-2 -top-2 flex size-4 items-center justify-center">
                    {cartItems.length}
                  </Badge>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="space-y-4">
                  {cartItems.length === 0 ? (
                    <p className="text-center text-sm">Your cart is empty</p>
                  ) : (
                    cartItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-2">
                        <div className="size-12 rounded bg-muted" />
                        <div>
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">${item.price}</p>
                        </div>
                      </div>
                    ))
                  )}
                  <Separator />
                  <div className="flex justify-between text-sm">
                    <span>Total:</span>
                    <span>${total}</span>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <a href="/checkout">View Cart</a>
                  </Button>
                </div>
              </PopoverContent>
            </Popover>

            <a href="/experience" className="text-foreground transition-colors hover:text-primary">
              <User className="size-5" />
            </a>
          </div>
        </nav>
      </div>

      <MobileNavbar>
        <div className="container rounded-b-lg bg-background py-4 text-foreground shadow-xl">
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
