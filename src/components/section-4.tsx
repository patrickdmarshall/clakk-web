import Image from "next/image";
import { Settings, Sword, Shield, Backpack, Sparkles, Star, Gauge, Gamepad2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function Section4() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-5xl">
        <div className="container mx-auto block px-4 py-16 text-center">
          <h2 className="mb-8 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Smiter Paladin Guide
          </h2>
          <Image alt="Image" src="/images/pally.jpg" width={500} height={500} />
          <div className="mx-auto max-w-4xl" />
          <div className="flex flex-row items-start justify-center gap-4 p-[20px]">
            <Button className="bg-[#3A6A3A] hover:bg-[#2A5A2A]">Add Build to Cart</Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Settings className="size-4" />
              Customize Build
            </Button>
          </div>
          <Tabs defaultValue="gear" className="w-full">
            <TabsList className="grid h-14 w-full grid-cols-7 gap-4 bg-card/50 p-1">
              <TabsTrigger
                value="gear"
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <Sword className="size-4" />
                <span>Gear</span>
              </TabsTrigger>
              <TabsTrigger
                value="mercenary"
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <Shield className="size-4" />
                <span>Mercenary</span>
              </TabsTrigger>
              <TabsTrigger
                value="inventory"
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <Backpack className="size-4" />
                <span>Inventory</span>
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <Sparkles className="size-4" />
                <span>Skills</span>
              </TabsTrigger>
              <TabsTrigger
                value="attributes"
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <Star className="size-4" />
                <span>Attributes</span>
              </TabsTrigger>
              <TabsTrigger
                value="breakpoints"
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <Gauge className="size-4" />
                <span>Breakpoints</span>
              </TabsTrigger>
              <TabsTrigger
                value="playstyle"
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <Gamepad2 className="size-4" />
                <span>Playstyle</span>
              </TabsTrigger>
            </TabsList>
            <div className="mt-4 rounded-lg border border-border/50 bg-card/50 p-6">
              <TabsContent value="gear">
                <div className="space-y-4">
                  <h2 className="font-heading text-2xl text-primary">Gear</h2>
                  <div className="space-y-2">
                    <p className="border-primary-foreground">Weapon: Grief Phase Blade</p>
                    <p className="text-muted-foreground">
                      Alternative Weapons: Last Wish (Life Tap)
                    </p>
                    <p>Shield: Herald of Zakarum (HoZ) + Um Rune</p>
                    <p className="text-muted-foreground">
                      Alternative: Exile (For Life Tap and Defiance Aura)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Helmet: Guillaume’s Face</p>
                    <p className="text-muted-foreground">
                      Alternative: Shako (For PvM &amp; Survivability)
                    </p>
                    <p>Armor: Enigma</p>
                    <p className="text-muted-foreground">
                      Alternative: Chains of Honor (More Resists)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Gloves: Dracul’s Grasp</p>
                    <p className="text-muted-foreground">Alternative: None</p>
                    <p>Belt: Verdungo’s Hearty Cord</p>
                    <p className="text-muted-foreground">
                      Alternative: Thundergod’s Vigor (Lightning Resist for Ubers)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Boots: Gore Rider</p>
                    <p className="text-muted-foreground">Alternative: None</p>
                    <p>Rings: Ravenfrost + Bul-Kathos</p>
                    <p className="text-muted-foreground">
                      Alternative: Dwarf Star (For Specific Situations – Life, Fire Absorb, etc.)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Amulet: Highlord&apos;s Wrath</p>
                    <p className="text-muted-foreground">
                      Alternative: Mara’s Kaleidoscope (More Resistances &amp; +2 Skills)
                    </p>
                    <p>&lt;b&gt;Secondary Weapon (Swap): Call to Arms (CTA)&lt;/b&gt;</p>
                    <p className="text-muted-foreground">
                      +Battle Orders, +Battle Command, +Life Boost
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="mercenary">
                <h2 className="font-heading text-2xl text-primary">Mercenary</h2>
                <div className="mt-4 space-y-2">
                  <h3 className="font-semibold">Type: Act 2 Defensive (Holy Freeze)</h3>
                  <p className="text-foreground">Helmet: Andariel&apos;s Visage</p>
                  <p className="text-muted-foreground">
                    Alternative: Kira’s Guardian (Mass Resistances for Ubers)
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">&lt;b&gt;Weapon: Infinity &lt;/b&gt;</p>
                  <p className="text-muted-foreground">Alternative: The Reaper&apos;s Toll</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">&lt;b&gt;Armor: Fortitude&lt;/b&gt;</p>
                  <p className="text-muted-foreground">Alternative: Treachery</p>
                </div>
              </TabsContent>
              <TabsContent value="inventory">
                <h2 className="font-heading text-2xl text-primary">Inventory</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Grand Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">Paladin Combat Skillers</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Unique Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">Paladin Torch + Annihilus</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Small Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">Life, Resistances, Faster Hit Recovery</p>
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <h2 className="font-heading text-2xl text-primary">Skill Distribution</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    &lt;b&gt;Primary Skills (Max These First in Order):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Smite - Max</p>
                  <p className="text-foreground">Holy Shield - Max</p>
                  <p className="text-foreground">Fanaticism - Max</p>
                  <p className="text-foreground">Defiance - Max</p>
                  <p className="text-foreground">
                    &lt;div&gt;Resist Lightning - 10-20
                    Points&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;
                  </p>
                  <p className="text-foreground">
                    &lt;b&gt;Support Skills (Put 1 Point Each):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Charge - 1 Point</p>
                  <p className="text-foreground">Zeal - 1 Point</p>
                  <p className="text-foreground">Redemption - 1 Point</p>
                  <p className="text-foreground">Salvation - 1 Point</p>
                  <p className="text-foreground">Vigor - 1 Point</p>
                </div>
              </TabsContent>
              <TabsContent value="attributes">
                <h2 className="font-heading text-2xl text-primary">Attribute Points</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">
                    This build focuses on survivability, max block, and high vitality.
                  </p>
                  <p className="text-muted-foreground">Strength: Enough for gear</p>
                  <p className="text-muted-foreground">
                    Dexterity: Enough to reach 75% Chance to Block (with Holy Shield)
                  </p>
                  <p className="text-muted-foreground">Vitality: Put all remaining points here</p>
                  <p className="text-muted-foreground">
                    Energy: None (Unless Using Energy Shield Build)
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="breakpoints">
                <h2 className="font-heading text-2xl text-primary">Breakpoints</h2>
                <div className="mt-4 space-y-2">
                  <p className="border-foreground text-foreground">
                    &lt;b&gt;Increased Attack Speed (IAS):&lt;/b&gt;
                  </p>
                  <p className="border-foreground text-muted-foreground">
                    50% IAS (Optimal – 6 Frame Smite)
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="border-foreground text-foreground">
                    &lt;b&gt;Faster Hit Recovery (FHR):&lt;/b&gt;
                  </p>
                  <p className="border-foreground text-muted-foreground">
                    0 | 7 | 15 | 27 |&nbsp;48&nbsp;|&nbsp;86&nbsp;| 200 (48% is a solid breakpoint
                    for survivability)
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="playstyle">
                <h2 className="font-heading text-2xl text-primary">Playstyle</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    💡 Pro Tip: Stack resistances for Uber Tristram! Use Salvation Aura if needed.
                  </p>
                  <p className="text-foreground">
                    ⚡ Engage with Smite – Boss Melter with Crushing Blow
                  </p>
                  <p className="text-foreground">
                    🩸 Dracul’s Grasp Triggers Life Tap – Keeps You Alive in Ubers
                  </p>
                  <p className="text-foreground">
                    🚀 Use Teleport (Enigma) for Positioning – Uber Bosses, Baal, etc.
                  </p>
                  <p className="text-foreground">
                    💀 Crushing Blow + Smite = Fast Boss Kills (Perfect for Uber Tristram, DClone,
                    and D2R Bosses)
                  </p>
                  <p className="text-foreground">🔥 Zeal for Clearing Trash Mobs – If Needed</p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
