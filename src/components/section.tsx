import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function Section() {
  return (
    <div className="flex flex-col container gap-20 pt-6 pb-10 lg:flex-row">
      <aside className="w-full space-y-6 w-52 hidden lg:block">
        <aside className="w-64 p-4 bg-background border-r border-border">
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-lg mb-2">Search</h3>
              <Input type="text" placeholder="Search..." className="w-full bg-input" />
            </div>
            <div>
              <h3 className="font-heading text-lg mb-2">Class</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="amazon" />
                  <Label htmlFor="amazon" className="text-muted-foreground">
                    Amazon
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="assassin" />
                  <Label htmlFor="assassin" className="text-muted-foreground">
                    Assassin
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="barbarian" />
                  <Label htmlFor="barbarian" className="text-muted-foreground">
                    Barbarian
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="druid" />
                  <Label htmlFor="druid" className="text-muted-foreground">
                    Druid
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="necromancer" />
                  <Label htmlFor="necromancer" className="text-muted-foreground">
                    Necromancer
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="sorceress" />
                  <Label htmlFor="sorceress" className="text-muted-foreground">
                    Sorceress
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="paladin" />
                  <Label htmlFor="paladin" className="text-muted-foreground">
                    Paladin
                  </Label>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-lg mb-2">Categories</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="amulets" />
                  <Label htmlFor="amulets" className="text-muted-foreground">
                    Amulets
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="runes" />
                  <Label htmlFor="runes" className="text-muted-foreground">
                    Runes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="runewords" />
                  <Label htmlFor="runewords" className="text-muted-foreground">
                    Runewords
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="socketedBases" />
                  <Label htmlFor="socketedBases" className="text-muted-foreground">
                    Socketed Bases
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="uniqueItems" />
                  <Label htmlFor="uniqueItems" className="text-muted-foreground">
                    Unique Items
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="craftedItems" />
                  <Label htmlFor="craftedItems" className="text-muted-foreground">
                    Crafted Items
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="magicItems" />
                  <Label htmlFor="magicItems" className="text-muted-foreground">
                    Magic Items
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="charms" />
                  <Label htmlFor="charms" className="text-muted-foreground">
                    Charms
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="tokens" />
                  <Label htmlFor="tokens" className="text-muted-foreground">
                    Tokens & Essences
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="gems" />
                  <Label htmlFor="gems" className="text-muted-foreground">
                    Gems
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </aside>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-heading font-bold">Best Sellers</h1>
            <Select defaultValue="softcore-ladder">
              <SelectTrigger className="w-[240px]">
                <SelectValue placeholder="Select core type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="softcore-ladder">Softcore Ladder</SelectItem>
                <SelectItem value="softcore-nonladder">Softcore Non-Ladder</SelectItem>
                <SelectItem value="hardcore-ladder">Hardcore Ladder</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card">
              <CardHeader className="relative">
                <Image
                  src="/images/placeholder.png"
                  alt="Jah Rune"
                  width={300}
                  height={300}
                  className="w-full object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">10x Jah Rune</h3>
                    <p className="text-sm text-muted-foreground">Softcore Non-Ladder</p>
                  </div>
                  <p className="text-lg font-bold">$100</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader className="relative">
                <Image
                  src="/images/placeholder.png"
                  alt="Jah Rune"
                  width={300}
                  height={300}
                  className="w-full object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">10x Jah Rune</h3>
                    <p className="text-sm text-muted-foreground">Softcore Non-Ladder</p>
                  </div>
                  <p className="text-lg font-bold">$100</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader className="relative">
                <Image
                  src="/images/placeholder.png"
                  alt="Jah Rune"
                  width={300}
                  height={300}
                  className="w-full object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">10x Jah Rune</h3>
                    <p className="text-sm text-muted-foreground">Softcore Non-Ladder</p>
                  </div>
                  <p className="text-lg font-bold">$100</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
