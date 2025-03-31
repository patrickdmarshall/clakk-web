import Image from "next/image";
import { Settings, Sword, Shield, Backpack, Sparkles, Star, Gauge, Gamepad2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function Section25() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <div className="container mx-auto px-4 py-16 text-center block">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Fist of the Heavens (FoH) Paladin Guide
          </h2>
          <Image alt="Image" src="/images/pally.jpg" width={500} height={500} />
          <div className="max-w-4xl mx-auto" />
          <div className="flex justify-center gap-4 flex-row items-start p-[20px]">
            <Button className="bg-[#3A6A3A] hover:bg-[#2A5A2A]">Add Build to Cart</Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Customize Build
            </Button>
          </div>
          <Tabs defaultValue="gear" className="w-full">
            <TabsList className="h-14 w-full bg-card/50 grid grid-cols-7 gap-4 p-1">
              <TabsTrigger
                value="gear"
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <Sword className="h-4 w-4" />
                <span>Gear</span>
              </TabsTrigger>
              <TabsTrigger
                value="mercenary"
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <Shield className="h-4 w-4" />
                <span>Mercenary</span>
              </TabsTrigger>
              <TabsTrigger
                value="inventory"
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <Backpack className="h-4 w-4" />
                <span>Inventory</span>
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <Sparkles className="h-4 w-4" />
                <span>Skills</span>
              </TabsTrigger>
              <TabsTrigger
                value="attributes"
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <Star className="h-4 w-4" />
                <span>Attributes</span>
              </TabsTrigger>
              <TabsTrigger
                value="breakpoints"
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <Gauge className="h-4 w-4" />
                <span>Breakpoints</span>
              </TabsTrigger>
              <TabsTrigger
                value="playstyle"
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <Gamepad2 className="h-4 w-4" />
                <span>Playstyle</span>
              </TabsTrigger>
            </TabsList>
            <div className="mt-4 p-6 rounded-lg bg-card/50 border border-border/50">
              <TabsContent value="gear">
                <div className="space-y-4">
                  <h2 className="text-2xl font-heading text-primary">Gear</h2>
                  <div className="space-y-2">
                    <p className="border-primary-foreground">Weapon: Heart of the Oak</p>
                    <p className="text-muted-foreground">
                      Alternative Weapons: Famine, Hand of Blessed Light (Holy Bolt Build)
                    </p>
                    <p>Shield: Spirit Sacred Targe (2x)</p>
                    <p className="text-muted-foreground">
                      Alternative: Herald of Zakarum (More Defensive)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Helmet: Shako</p>
                    <p className="text-muted-foreground">
                      Alternative: Rare Circlet (+2 Paladin Skills, 20% FCR)
                    </p>
                    <p>Armor: Enigma</p>
                    <p className="text-muted-foreground">
                      Alternative: Chains of Honor (More Resists)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Gloves: Trang-Oul&apos;s</p>
                    <p className="text-muted-foreground">
                      Alternative: Magefist (FCR &amp; Mana Regen)
                    </p>
                    <p>Belt: Arachnid Mesh</p>
                    <p className="text-muted-foreground">
                      Alternative: Verdungo’s (For Life &amp; DR)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Boots: War Traveler&apos;s</p>
                    <p className="text-muted-foreground">
                      Alternative: Aldur’s Advance (For Fire Res &amp; Life Boost)
                    </p>
                    <p>Rings: Stone of Jordan (SoJ) &amp; Ravenfrost</p>
                    <p className="text-muted-foreground">Alternative: 2x Stone of Jordan (SoJ)</p>
                  </div>
                  <div className="space-y-2">
                    <p>Amulet: Mara’s Kaleidoscope</p>
                    <p className="text-muted-foreground">Alternative: +2 Paladin FCR Amulet</p>
                    <p>&lt;b&gt;Secondary Weapon (Swap): Call to Arms (CTA) + Hoto&lt;/b&gt;</p>
                    <p className="text-muted-foreground">
                      +Battle Orders, +Battle Command, +Life Boost
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="mercenary">
                <h2 className="text-2xl font-heading text-primary">Mercenary</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground font-bold">Type: Act 2 Holy Freeze</p>
                  <p className="text-foreground font-bold">Helmet: Andariel&apos;s Visage </p>
                  <p className="text-muted-foreground">Alternative: Guillaume&apos;s Face</p>
                  <p className="text-foreground font-bold">Weapon: Infinity</p>
                  <p className="text-muted-foreground">Alternative: None</p>
                  <p className="text-foreground font-bold">Armor: Fortitude</p>
                  <p className="text-muted-foreground">Alternative: Treachery</p>
                </div>
                <div className="mt-4 space-y-2" />
                <div className="mt-4 space-y-2" />
              </TabsContent>
              <TabsContent value="inventory">
                <h2 className="text-2xl font-heading text-primary">Inventory</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Grand Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground"> Paladin Combat Skillers</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Unique Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">Paladin Torch + Annihilus, Light Sunder*</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Small Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">Life and Resistance</p>
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <h2 className="text-2xl font-heading text-primary">Skill Distribution</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    &lt;b&gt;Primary Skills (Max These First in Order):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Fist of Heavens - Max</p>
                  <p className="text-foreground">Holy Bolt - Max</p>
                  <p className="text-foreground">Holy Shock - Max</p>
                  <p className="text-foreground">Conviction - Max</p>
                  <p className="text-foreground">Holy Shield - Max</p>
                  <p className="text-foreground" />
                  <p className="text-foreground">&lt;div&gt;&lt;br&gt;&lt;/div&gt;</p>
                  <p className="text-foreground">
                    &lt;b&gt;Support Skills (Put 1 Point Each):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Charge - 1 Point</p>
                  <p className="text-foreground">Smite - 1 Point</p>
                  <p className="text-foreground">Cleansing – 1 Point</p>
                  <p className="text-foreground">Redemption – 1 Point</p>
                  <p className="text-foreground">Salvation – 1 Point</p>
                  <p className="text-foreground">&lt;br&gt;</p>
                </div>
              </TabsContent>
              <TabsContent value="attributes">
                <h2 className="text-2xl font-heading text-primary">Attribute Points</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground" />
                  <p className="text-muted-foreground">Strength: Enough for gear</p>
                  <p className="text-muted-foreground">
                    Dexterity: Enough to reach 75% Chance to Block (with Holy Shield)
                  </p>
                  <p className="text-muted-foreground">
                    Vitality: Dump the rest here (Main Focus)&lt;br&gt;
                  </p>
                  <p className="text-muted-foreground">Energy: None</p>
                </div>
              </TabsContent>
              <TabsContent value="breakpoints">
                <h2 className="text-2xl font-heading text-primary">Breakpoints</h2>
                <div className="mt-4 space-y-2">
                  <p className="border-foreground text-foreground">Faster Cast Rate (FCR):</p>
                  <p className="text-muted-foreground border-foreground">
                    0 | 9 | 18 | 30 | 48 | 75 | 125 (Aim for 125% for max efficiency)&lt;br&gt;
                  </p>
                  <p className="border-foreground text-foreground">
                    &lt;b&gt;Faster Hit Recovery (FHR):&lt;/b&gt;
                  </p>
                  <p className="text-muted-foreground border-foreground">
                    0 | 7 | 15 | 27 | 48 | 86 | 200 (48% is a solid breakpoint for
                    survivability)&lt;br&gt;
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="playstyle">
                <h2 className="text-2xl font-heading text-primary">Playstyle</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">Conviction Aura On – Lowers enemy resistances</p>
                  <p className="text-foreground">
                    Use Fist of the Heavens – Lightning bolts hit multiple enemies
                  </p>
                  <p className="text-foreground">
                    Holy Bolt Targets Undead/Demons – Shreds Chaos Sanctuary
                  </p>
                  <p className="text-foreground">
                    Keep Holy Shield Active – Increased defense/blocking
                  </p>
                </div>
                <div className="mt-4 space-y-2" />
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    Use Teleport (Enigma) – Reposition for maximum FoH impact&lt;br&gt;
                  </p>
                  <p className="text-foreground">
                    {" "}
                    Use Redemption Aura between fights to restore life/mana.
                  </p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
        <Tabs defaultValue="gear" className="mb-8 w-full">
          <TabsContent value="gear">
            <div className="gap-8 block" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
