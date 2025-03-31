import Image from "next/image";
import Link from "next/link";
import { Settings, Sword, Shield, Backpack, Sparkles, Star, Gauge, Gamepad2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function Section6() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <div className="container mx-auto px-4 py-16 text-center block">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Lightning Guide
          </h2>
          <Image alt="Image" src="/images/sorc.jpg" width={500} height={500} />
          <div className="flex justify-center gap-4 flex-row items-start p-[20px]">
            <Button className="bg-[#3A6A3A] hover:bg-[#2A5A2A]">Add Build to Cart</Button>
            <Link href="/builder">
              <Button variant="outline" className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Customize Build
              </Button>
            </Link>
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
                    <p className="border-primary-foreground">
                      &lt;b&gt;Weapon: Eschuta’s Temper&lt;/b&gt;
                    </p>
                    <p className="text-muted-foreground">Alternative: Heart of the Oak (Hoto)</p>
                    <p>&lt;b&gt;Shield: Spirit Monarch&lt;/b&gt;</p>
                    <p className="text-muted-foreground">
                      Alternative: Stormshield (For Max Block Build)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Helmet: Griffon’s Eye (If Using 200% FCR Build)</p>
                    <p className="text-muted-foreground">Alternative: Shako (Survivability)</p>
                    <p>&lt;b&gt;Armor: Chains of Honor&lt;/b&gt;</p>
                    <p className="text-muted-foreground">
                      Alternative: Enigma (For Strength &amp; Mobility)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Gloves: Magefist</p>
                    <p className="text-muted-foreground">Alternative: None</p>
                    <p>&lt;b&gt;Belt: Arachnid Mesh&lt;/b&gt;</p>
                    <p className="text-muted-foreground">Alternative: None</p>
                  </div>
                  <div className="space-y-2">
                    <p>Boots: Aldur&apos;s Advance</p>
                    <p className="text-muted-foreground">Alternative: War Traveler</p>
                    <p>&lt;b&gt;Rings: Stone of Jordan (SoJ) (2x)&lt;/b&gt;</p>
                    <p className="text-muted-foreground">
                      Alternative: 2x FCR Rings (If Needed for 200 FCR Breakpoint)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>&lt;b&gt;Amulet: Mara’s Kaleidoscope&lt;/b&gt;</p>
                    <p className="text-muted-foreground">Alternative: +2 Sorc FCR Amulet</p>
                    <p>&lt;b&gt;Secondary Weapon (Swap): Call to Arms (CTA)&lt;/b&gt;</p>
                    <p className="text-muted-foreground">
                      +Battle Orders, +Battle Command, +Life Boost
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="mercenary">
                <h2 className="text-2xl font-heading text-primary">Mercenary</h2>
                <div className="mt-4 space-y-2">
                  <h3 className="font-semibold">Type: Act 2 Nightmare Offensive Mercenary</h3>
                  <p className="text-foreground">Helmet: Andariel&apos;s Visage</p>
                  <p className="text-muted-foreground">Alternative: Guillaume&apos;s Face</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">&lt;b&gt;Weapon: Infinity &lt;/b&gt;</p>
                  <p className="text-muted-foreground">Alternative: Insight</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">&lt;b&gt;Armor: Fortitude&lt;/b&gt;</p>
                  <p className="text-muted-foreground">Alternative: Treachery</p>
                </div>
              </TabsContent>
              <TabsContent value="inventory">
                <h2 className="text-2xl font-heading text-primary">Inventory</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Grand Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">Lightning Skillers</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Unique Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">
                    Hellfire Torch (Sorc), Annihilus, Lightning Sunder*
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Small Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">Life, Faster Hit Recovery, Resistances</p>
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <h2 className="text-2xl font-heading text-primary">Skill Distribution</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    &lt;b&gt;Primary Skills (Max These First in Order):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Lightning – Max</p>
                  <p className="text-foreground">Chain Lightning – Max</p>
                  <p className="text-foreground">Charged Bolt – Max</p>
                  <p className="text-foreground">Nova – Max</p>
                  <p className="text-foreground">
                    Lightning Mastery – Max&lt;div&gt;&lt;br&gt;&lt;/div&gt;
                  </p>
                  <p className="text-foreground">
                    &lt;b&gt;Support Skills (Put 1 Point Each):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Static Field – 1 Point</p>
                  <p className="text-foreground">Teleport – 1 Point</p>
                  <p className="text-foreground">Warmth – 1 Point</p>
                </div>
              </TabsContent>
              <TabsContent value="attributes">
                <h2 className="text-2xl font-heading text-primary">Attribute Points</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">
                    This build focuses on survivability, max block, and high vitality.
                  </p>
                  <p className="text-muted-foreground">Strength: Enough for gear</p>
                  <p className="text-muted-foreground">
                    Dexterity: Base (Unless Using Stormshield for Block)
                  </p>
                  <p className="text-muted-foreground">Vitality: Rest goes here (Main Focus)</p>
                  <p className="text-muted-foreground">
                    Energy: None (Unless Using Energy Shield Build)
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="breakpoints">
                <h2 className="text-2xl font-heading text-primary">Breakpoints</h2>
                <div className="mt-4 space-y-2">
                  <p className="border-foreground text-foreground">
                    &lt;b&gt;Faster Cast Rate (FCR):&lt;/b&gt;
                  </p>
                  <p className="text-muted-foreground border-foreground">78%</p>
                  <p className="text-muted-foreground border-foreground">117%</p>
                  <p className="text-muted-foreground border-foreground">200%</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="border-foreground text-foreground">
                    &lt;b&gt;Faster Hit Recovery (FHR):&lt;/b&gt;
                  </p>
                  <p className="text-muted-foreground border-foreground">60% (Decent)</p>
                  <p className="text-muted-foreground border-foreground">86% (Optimal)</p>
                </div>
              </TabsContent>
              <TabsContent value="playstyle">
                <h2 className="text-2xl font-heading text-primary">Playstyle</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    Pro Tip: Farm areas with low Lightning Immunes like Cows &amp; Chaos Sanctuary!
                  </p>
                  <p className="text-foreground">
                    Spam Lightning for insane damage – Best vs. Single Targets
                  </p>
                  <p className="text-foreground">
                    Use Chain Lightning for AoE clearing – Great for Cows &amp; Groups
                  </p>
                  <p className="text-foreground">
                    Static Field to weaken bosses fast – Combine with Lightning for quick kills
                  </p>
                  <p className="text-foreground">
                    Energy Shield for survivability (Optional) – Helps against burst damage
                  </p>
                  <p className="text-foreground">
                    Use Cold Mastery to reduce enemy resists – Focus on Cold-Immune Breakers
                  </p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
