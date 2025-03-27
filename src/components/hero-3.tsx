"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Trash2, ShoppingCart } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero3() {
  return (
    <section className="bg-gradient-to-b from-background via-secondary/20 via-70% pb-28 pt-20">
      <div className="container flex flex-col items-center gap-8 sm:gap-10">
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="text-balance text-center font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          <span className="bg-gradient-to-br from-secondary to-primary bg-clip-text text-primary text-transparent">
            Character Builder
          </span>
        </motion.h1>
        <div className="w-full max-w-sm text-[#FFFFFF]" />
      </div>
      <div className="min-h-screen p-6">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="space-y-4">
            <p className="text-center">
              Craft your perfect build using our advanced character customization tools
            </p>
          </div>
          <div className="container mx-auto">
            <div className="flex flex-col items-center gap-6">
              <Image
                alt="Character Build"
                src="/images/d2.png"
                width={500}
                height={300}
                className="size-auto"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 rounded-lg p-6">
          <div className="space-y-4">
            <div className="w-full">
              <Label htmlFor="class">Class</Label>
              <Select defaultValue="amazon">
                <SelectTrigger>
                  <SelectContent>
                    <SelectItem value="amazon">Amazon</SelectItem>
                    <SelectItem value="assassin">Assassin</SelectItem>
                    <SelectItem value="barbarian">Barbarian</SelectItem>
                    <SelectItem value="druid">Druid</SelectItem>
                    <SelectItem value="necromancer">Necromancer</SelectItem>
                    <SelectItem value="paladin">Paladin</SelectItem>
                    <SelectItem value="sorceress">Sorceress</SelectItem>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Character Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label>Main Weapon</Label>
                    <Input placeholder="Select weapon..." />
                  </div>
                  <div className="space-y-2">
                    <Label>Main Shield</Label>
                    <Input placeholder="Select shield..." />
                  </div>
                  <div className="space-y-2">
                    <Label>Second Weapon</Label>
                    <Input placeholder="Select weapon..." />
                  </div>
                  <div className="space-y-2">
                    <Label>Second Shield</Label>
                    <Input placeholder="Select shield..." />
                  </div>
                  <div className="space-y-2">
                    <Label>Helmet</Label>
                    <Input placeholder="Select helmet..." />
                  </div>
                  <div className="space-y-2">
                    <Label>Armor</Label>
                    <Input placeholder="Select armor..." />
                  </div>
                  <div className="space-y-2">
                    <Label>Gloves</Label>
                    <Input placeholder="Select gloves..." />
                  </div>
                  <div className="space-y-2">
                    <Label>Belt</Label>
                    <Input placeholder="Select belt..." />
                  </div>
                  <div className="space-y-2">
                    <Label>Boots</Label>
                    <Input placeholder="Select boots..." />
                  </div>
                  <div className="space-y-2">
                    <Label>Ring 1</Label>
                    <Input placeholder="Select ring..." />
                  </div>
                  <div className="space-y-2">
                    <Label>Ring 2</Label>
                    <Input placeholder="Select ring..." />
                  </div>
                  <div className="space-y-2">
                    <Label>Amulet</Label>
                    <Input placeholder="Select amulet..." />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Character Inventory</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label>Grand Charms</Label>
                    <Input placeholder="Add grand charms..." />
                  </div>
                  <div className="space-y-2">
                    <Label>Small Charms</Label>
                    <Input placeholder="Add small charms..." />
                  </div>
                  <div className="space-y-2">
                    <Label>Unique Charms</Label>
                    <Input placeholder="Add unique charms..." />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex items-center justify-center gap-4 p-4">
            <Button size="lg" variant="outline" className="flex items-center gap-2">
              <Trash2 className="size-5" />
              Clear Build
            </Button>
            <Button size="lg" className="flex items-center gap-2">
              <ShoppingCart className="size-5" />
              Add to Cart
              <Badge variant="secondary" className="ml-2">
                $99.99
              </Badge>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
