import { SlidersHorizontal } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { CheckboxItem } from "@/components/checkbox-item";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";

export function Section() {
  return (
    <div className="container flex flex-col gap-20 pb-10 pt-6 lg:flex-row">
      <aside className="hidden w-52 w-full space-y-6 lg:block">
        <div>
          <h2 className="mb-2 font-heading text-lg font-semibold">Search</h2>
          <div className="flex grid-cols-2 items-center gap-2">
            <Input type="text" placeholder="" className="h-8 border bg-input" />
          </div>
        </div>
        <Separator orientation="horizontal" className="my-4" />
        <div>
          <h2 className="mb-2 font-heading text-lg font-semibold">Class</h2>
          <div className="space-y-2">
            <CheckboxItem label="Amazon" />
            <CheckboxItem label="Assassin" />
            <CheckboxItem label="Barbarian" />
            <CheckboxItem label="Druid" />
            <CheckboxItem label="Necromancer" />
            <CheckboxItem label="Sorceress" />
            <CheckboxItem label="Paladin" />
          </div>
        </div>
        <Separator orientation="horizontal" className="my-4" />
        <div>
          <h2 className="mb-2 font-heading text-lg font-semibold">Categories</h2>
          <div className="space-y-2">
            <CheckboxItem label="Amulets" />
            <CheckboxItem label="Runes" />
            <CheckboxItem label="Runewords" />
            <CheckboxItem label="Socketed Bases" />
            <CheckboxItem label="Unique Items" />
            <CheckboxItem label="Crafted Items" />
            <CheckboxItem label="Magic Items" />
            <CheckboxItem label="Crafted Items" />
            <CheckboxItem label="Charms" />
            <CheckboxItem label="Tokens & Essences" />
            <CheckboxItem label="Gems" />
          </div>
        </div>
      </aside>
      <main className="flex-1">
        <div className="mb-6 flex flex-col items-start items-center justify-between gap-4 md:flex-row md:items-center">
          <h1 className="font-heading text-2xl font-bold">Best Sellers</h1>
          <div className="flex items-center gap-4">
            <Button size="sm" variant="outline">
              <SlidersHorizontal className="mr-2 size-4" />
              All Filters
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard
            name="10x Jah Rune"
            image="/images/jah.png"
            isNew={false}
            price={100}
            description="Softcore Non-Ladder"
          />
          <ProductCard
            name="10x Jah Rune"
            image="/images/jah.png"
            isNew={false}
            price={100}
            description="Softcore Non-Ladder"
          />
          <ProductCard
            name="10x Jah Rune"
            image="/images/jah.png"
            isNew={false}
            price={100}
            description="Softcore Non-Ladder"
          />
          <ProductCard
            name="10x Jah Rune"
            image="/images/jah.png"
            isNew={false}
            price={100}
            description="Softcore Non-Ladder"
          />
          <ProductCard
            name="10x Jah Rune"
            image="/images/jah.png"
            isNew={false}
            price={100}
            description="Softcore Non-Ladder"
          />
          <ProductCard
            name="10x Jah Rune"
            image="/images/jah.png"
            isNew={false}
            price={100}
            description="Softcore Non-Ladder"
          />
        </div>
      </main>
    </div>
  );
}
