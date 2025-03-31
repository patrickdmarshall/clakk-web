import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, ShoppingCart, Heart, Package, RefreshCcw } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function Section2() {
  return (
    <div className="container mx-auto pt-8 pb-12">
      <nav className="mb-8">
        <ol className="flex space-x-2 text-sm text-muted-foreground">
          <li className="flex items-center">
            <Link href="/" className="hover:text-primary">
              Diablo II Resurrected
            </Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2">›</span>
            <Link href="/" className="hover:text-primary">
              Runes
            </Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2">›</span>
            <Link href="/" className="hover:text-primary">
              Jah Pack
            </Link>
          </li>
        </ol>
      </nav>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg">
            <Image
              src="/images/jah.png"
              width={600}
              height={600}
              className="h-full w-full object-cover bg-primary/10 p-20"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="font-heading font-bold text-4xl">10x Jah Rune</h1>
            <p className="text-sm text-muted-foreground max-w-md">Softcore Ladder</p>
          </div>
          <div className="font-bold font-heading text-3xl">$100.00</div>
          <div className="space-y-4">
            <div />
            <div />
          </div>
          <Separator orientation="horizontal" className="my-4" />
          <div className="flex items-center space-x-4">
            <div className="flex items-center rounded-full px-4 py-2 bg-input">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Minus className="h-4 w-4" />
              </button>
              <span className="mx-4 font-medium">1</span>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">Only </span>
              <span className="font-medium text-orange-500">12 items</span>
              <span className="text-muted-foreground"> Left! Don&apos;t miss it</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button className="flex-1">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to cart
            </Button>
            <Button size="icon" variant="outline">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
          <div>
            <div className="space-y-4 p-4 border bg-card rounded-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-medium">Fast Delivery</h4>
                  <p className="text-sm text-muted-foreground">
                    Most orders delivered in under 10 minutes*
                  </p>
                </div>
              </div>
              <Separator className="bg-accent" />
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <RefreshCcw className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-medium">Free Platform Selection</h4>
                  <p className="text-sm text-muted-foreground">
                    Select between Consoles and PC free of charge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
