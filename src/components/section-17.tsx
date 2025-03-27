import Image from "next/image";
import { Settings, Sword, Shield, Backpack, Sparkles, Star, Gauge, Gamepad2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function Section17() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-5xl">
        <div className="container mx-auto block px-4 py-16 text-center">
          <h2 className="mb-8 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Fissure Guide
          </h2>
          <Image alt="Image" src="/images/dru.jpg" width={500} height={500} />
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
                    <p className="border-primary-foreground">Weapon: Heart of the Oak (Hoto) </p>
                    <p className="text-muted-foreground">Alternative: 6X Fire Facet Sword/Axe</p>
                    <p>Shield: Spirit Monarch</p>
                    <p className="text-muted-foreground">
                      Alternative: Phoenix (Redemption Aura for Mana/Life Recovery)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Helmet: Ravenlore</p>
                    <p className="text-muted-foreground">Alternative: Jalal&apos;s Mane or Shako</p>
                    <p>Armor: Enigma</p>
                    <p className="text-muted-foreground">Alternative: None</p>
                  </div>
                  <div className="space-y-2">
                    <p>Gloves: Magefist</p>
                    <p className="text-muted-foreground">Alternative: Trang-Oul&apos;s</p>
                    <p>Belt: Arachnid Mesh</p>
                    <p className="text-muted-foreground">
                      Alternative: Verdungo’s Hearty Cord (For Survivability)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Boots: Aldur&apos;s Advance</p>
                    <p className="text-muted-foreground">Alternative: Sandstorm Trek</p>
                    <p>Rings: Stone of Jordan + Bul-Kathos&apos;</p>
                    <p className="text-muted-foreground">Alternative: 2x SOJ</p>
                  </div>
                  <div className="space-y-2">
                    <p>Amulet: Mara&apos;s Kaleidoscope</p>
                    <p className="text-muted-foreground">
                      Alternative: Crafted Caster Amulet (With +2 Druid Skills &amp; FCR)
                    </p>
                    <p>&lt;b&gt;Secondary Weapon (Swap): Call to Arms (CTA) + Hoto&lt;/b&gt;</p>
                    <p className="text-muted-foreground">
                      +Battle Orders, +Battle Command, +Life Boost
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="mercenary">
                <h2 className="font-heading text-2xl text-primary">Mercenary</h2>
                <div className="mt-4 space-y-2">
                  <p className="font-bold text-foreground">
                    Type: Act 2 Nightmare Offensive Mercenary
                  </p>
                  <p className="font-bold text-foreground">Helmet: Andariel&apos;s Visage </p>
                  <p className="text-muted-foreground">Alternative: Guillaume&apos;s Face</p>
                  <p className="font-bold text-foreground">Weapon: Infinity</p>
                  <p className="text-muted-foreground">
                    Alternative: Insight or Reaper&apos;s Toll
                  </p>
                  <p className="font-bold text-foreground">Armor: Fortitude</p>
                  <p className="text-muted-foreground">Alternative: Treachery</p>
                </div>
                <div className="mt-4 space-y-2" />
                <div className="mt-4 space-y-2" />
              </TabsContent>
              <TabsContent value="inventory">
                <h2 className="font-heading text-2xl text-primary">Inventory</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Grand Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">Elemental Skillers&lt;br&gt;</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Unique Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">
                    Hellfire Torch (Druid), Annihilus, Fire Sunder*
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Small Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">Life, FHR, Resistances</p>
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <h2 className="font-heading text-2xl text-primary">Skill Distribution</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    &lt;b&gt;Primary Skills (Max These First in Order):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Fissure - Max</p>
                  <p className="text-foreground">Firestorm - Max</p>
                  <p className="text-foreground">Volcano - Max</p>
                  <p className="text-foreground">Molten Boulder - Max</p>
                  <p className="text-foreground">Armageddon - Max</p>
                  <p className="text-foreground" />
                  <p className="text-foreground">&lt;div&gt;&lt;br&gt;&lt;/div&gt;</p>
                  <p className="text-foreground">
                    &lt;b&gt;Support Skills (Put 1 Point Each):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Cyclone Armor - 1 Point</p>
                  <p className="text-foreground">Oak Sage - 1 Point</p>
                  <p className="text-foreground">Carrion Vine - 1 Point</p>
                  <p className="text-foreground">Raven - 1 Point</p>
                  <p className="text-foreground">&lt;br&gt;</p>
                </div>
              </TabsContent>
              <TabsContent value="attributes">
                <h2 className="font-heading text-2xl text-primary">Attribute Points</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground" />
                  <p className="text-muted-foreground">Strength: Enough for gear</p>
                  <p className="text-muted-foreground">Dexterity: Enough for gear</p>
                  <p className="text-muted-foreground">
                    Vitality: Dump the rest here (Main Focus)&lt;br&gt;
                  </p>
                  <p className="text-muted-foreground">Energy: None</p>
                </div>
              </TabsContent>
              <TabsContent value="breakpoints">
                <h2 className="font-heading text-2xl text-primary">Breakpoints</h2>
                <div className="mt-4 space-y-2">
                  <p className="border-foreground text-foreground">
                    &lt;b&gt;Faster Caster Rate (FCR):&lt;/b&gt;
                  </p>
                  <p className="border-foreground text-muted-foreground">68% (Basic)</p>
                  <p className="border-foreground text-muted-foreground">99% (Optimal)</p>
                  <p className="border-foreground text-foreground">
                    &lt;b&gt;Faster Hit Recovery (FHR):&lt;/b&gt;
                  </p>
                  <p className="border-foreground text-muted-foreground">29% (Basic)</p>
                  <p className="border-foreground text-muted-foreground">42% (Suggested)</p>
                  <p className="border-foreground text-muted-foreground">86% (Optimal)</p>
                </div>
              </TabsContent>
              <TabsContent value="playstyle">
                <h2 className="font-heading text-2xl text-primary">Playstyle</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">Cast Fissure on Groups – Watch Enemies Burn!</p>
                  <p className="text-foreground">Use Volcano on Single Targets – Great vs Bosses</p>
                  <p className="text-foreground">Firestorm for Close Combat – Good Extra Damage</p>
                  <p className="text-foreground">
                    Cyclone Armor Up at All Times – Absorbs Elemental Damage
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    Use Enigma for Mobility – Teleport to Position &amp; Spam Fissure&lt;br&gt;
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="font-bold text-foreground">Pro Tip:</p>
                  <p className="text-foreground">
                    Cast Fissure near enemies, not directly under them! The delayed eruptions deal
                    more damage as enemies walk into them! This build shines with high AoE damage
                    for farming and great crowd control. With synergized fire skills and solid
                    survivability, it excels in both PvM and farming situations!
                  </p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
        <Tabs defaultValue="gear" className="mb-8 w-full">
          <TabsContent value="gear">
            <div className="block gap-8" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
