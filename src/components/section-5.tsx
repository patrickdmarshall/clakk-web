import Image from "next/image";
import Link from "next/link";
import { Settings, Sword, Shield, Backpack, Sparkles, Star, Gauge, Gamepad2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function Section5() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-5xl">
        <div className="container mx-auto block px-4 py-16 text-center">
          <h2 className="mb-8 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Blizzard Guide
          </h2>
          <Image alt="Image" src="/images/sorc.jpg" width={500} height={500} />
          <div className="mx-auto max-w-4xl" />
          <div className="flex flex-row items-start justify-center gap-4 p-[20px]">
            <Button className="bg-[#3A6A3A] hover:bg-[#2A5A2A]">Add Build to Cart</Button>
            <Link href="/builder">
              <Button variant="outline" className="flex items-center gap-2">
                <Settings className="size-4" />
                Customize Build
              </Button>
            </Link>
          </div>
          <div className="mx-auto w-full max-w-4xl p-4">
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
                      <p className="border-primary-foreground">
                        &lt;b&gt;Weapon: Death’s Fathom&lt;/b&gt;
                      </p>
                      <p className="text-muted-foreground">
                        Alternative: Eschuta’s Temper (If Using Energy Shield)
                      </p>
                      <p>&lt;b&gt;Shield: Spirit Monarch&lt;/b&gt;</p>
                      <p className="text-muted-foreground">
                        Alternative: Stormshield (For Max Block Build)
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p>&lt;b&gt;Helmet: Nightwing’s Veil&lt;/b&gt;</p>
                      <p className="text-muted-foreground">Alternative: Shako (Survivability)</p>
                      <p>&lt;b&gt;Armor: Chains of Honor&lt;/b&gt;</p>
                      <p className="text-muted-foreground">
                        Alternative: Ormus’ Robes (+Cold Skill Dmg)
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p>&lt;b&gt;Gloves: Trang-Oul&apos;s&lt;/b&gt;</p>
                      <p className="text-muted-foreground">
                        Alternative: Eschuta’s Temper (If Using Energy Shield)
                      </p>
                      <p>&lt;b&gt;Belt: Arachnid Mesh&lt;/b&gt;</p>
                      <p className="text-muted-foreground">Alternative: Snowclash</p>
                    </div>
                    <div className="space-y-2">
                      <p>&lt;b&gt;Boots: Sandstorm Trek&lt;/b&gt;</p>
                      <p className="text-muted-foreground">Alternative: War Traveler</p>
                      <p>&lt;b&gt;Rings: Stone of Jordan (SoJ) (2x)&lt;/b&gt;</p>
                      <p className="text-muted-foreground">
                        Alternative: FCR Rings for 105% Breakpoint
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
                  <h2 className="font-heading text-2xl text-primary">Mercenary</h2>
                  <div className="mt-4 space-y-2">
                    <p className="text-foreground">
                      &lt;b&gt;Helmet: Andariel&apos;s Visage&lt;/b&gt;
                    </p>
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
                  <h2 className="font-heading text-2xl text-primary">Inventory</h2>
                  <div className="mt-4 space-y-2">
                    <p className="text-primary-foreground">&lt;b&gt;Grand Charms&lt;/b&gt;</p>
                    <p className="text-muted-foreground">Cold Skillers</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-primary-foreground">&lt;b&gt;Unique Charms&lt;/b&gt;</p>
                    <p className="text-muted-foreground">
                      Hellfire Torch (Sorc), Annihilus, Cold Sunder*
                    </p>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-primary-foreground">&lt;b&gt;Small Charms&lt;/b&gt;</p>
                    <p className="text-muted-foreground">Life, Faster Hit Recovery, Resistances</p>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <h2 className="font-heading text-2xl text-primary">Skill Distribution</h2>
                  <div className="mt-4 space-y-2">
                    <p className="text-foreground">
                      &lt;b&gt;Primary Skills (Max These First in Order):&lt;/b&gt;
                    </p>
                    <p className="text-foreground">Blizzard – Max</p>
                    <p className="text-foreground">Glacial Spike – Max</p>
                    <p className="text-foreground">Ice Blast – Max</p>
                    <p className="text-foreground">Ice Bolt – Max</p>
                    <p className="text-foreground">
                      Cold Mastery – 5-15 Points &lt;div&gt;&lt;br&gt;&lt;/div&gt;
                    </p>
                    <p className="text-foreground">
                      &lt;b&gt;Support Skills (Put 1 Point Each):&lt;/b&gt;
                    </p>
                    <p className="text-foreground">Static Field – 1 Point</p>
                    <p className="text-foreground">Teleport – 1 Point</p>
                    <p className="text-foreground">Warmth – 1 Point</p>
                    <p className="text-foreground">Energy Shield – 1 Point (Optional)</p>
                  </div>
                </TabsContent>
                <TabsContent value="attributes">
                  <h2 className="font-heading text-2xl text-primary">Attribute Points</h2>
                  <div className="mt-4 space-y-2">
                    <p className="text-primary-foreground">
                      &lt;b&gt;This build focuses on survivability, max block, and high vitality.
                      &lt;/b&gt;
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
                  <h2 className="font-heading text-2xl text-primary">Breakpoints</h2>
                  <div className="mt-4 space-y-2">
                    <p className="border-foreground text-foreground">
                      &lt;b&gt;Faster Cast Rate (FCR):&lt;/b&gt;
                    </p>
                    <p className="border-foreground text-muted-foreground">63%</p>
                    <p className="border-foreground text-muted-foreground">105%</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="border-foreground text-foreground">
                      &lt;b&gt;Faster Hit Recovery (FHR):&lt;/b&gt;
                    </p>
                    <p className="border-foreground text-muted-foreground">60%</p>
                    <p className="border-foreground text-muted-foreground">86%</p>
                  </div>
                </TabsContent>
                <TabsContent value="playstyle">
                  <h2 className="font-heading text-2xl text-primary">Playstyle</h2>
                  <div className="mt-4 space-y-2">
                    <p className="text-foreground">
                      &lt;b&gt;Pro Tip: &lt;/b&gt;Run Ancient Tunnels for Magic Immunes – No
                      Cold-Immune mobs there!
                    </p>
                    <p className="text-foreground">
                      Cast Blizzard from a distance – AoE Cold Damage
                    </p>
                    <p className="text-foreground">
                      Use Static Field on Bosses – Cuts their HP quickly
                    </p>
                    <p className="text-foreground">
                      Spam Glacial Spike for Crowd Control – Freezes enemies
                    </p>
                    <p className="text-foreground">
                      Teleport to reposition – Keep enemies in Blizzard’s AoE
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
        <Tabs defaultValue="gear" className="mb-8 w-full">
          <TabsContent value="gear">
            <div className="block gap-8" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
