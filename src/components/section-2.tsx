import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, ShoppingCart, Heart, Package, RefreshCcw } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function Section2() {
  return (
    <div className="container mx-auto pb-12 pt-8">
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
              alt="A description of the image" // Add this line
              className="object-cover"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="font-heading text-4xl font-bold">10x Jah Rune</h1>
            <p className="max-w-md text-sm text-muted-foreground">Softcore Ladder</p>
          </div>
          <div className="font-heading text-3xl font-bold">$100.00</div>
          <div className="space-y-4">
            <div />
            <div />
          </div>
          <Separator orientation="horizontal" className="my-4" />
          <div className="flex items-center space-x-4">
            <div className="flex items-center rounded-full bg-input px-4 py-2">
              <button className="text-muted-foreground transition-colors hover:text-foreground">
                <Minus className="size-4" />
              </button>
              <span className="mx-4 font-medium">1</span>
              <button className="text-muted-foreground transition-colors hover:text-foreground">
                <Plus className="size-4" />
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
              <ShoppingCart className="mr-2 size-5" />
              Add to cart
            </Button>
            <Button size="icon" variant="outline">
              <Heart className="size-5" />
            </Button>
          </div>
          <div>
            <div className="space-y-4 rounded-sm border bg-card p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Package className="size-5 text-primary" />
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
                <div className="rounded-full bg-primary/10 p-2">
                  <RefreshCcw className="size-5 text-primary" />
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
