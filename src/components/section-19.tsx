import Image from "next/image";
import { Settings, Sword, Shield, Backpack, Sparkles, Star, Gauge, Gamepad2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function Section19() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-5xl">
        <div className="container mx-auto block px-4 py-16 text-center">
          <h2 className="mb-8 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Fury Guide
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
                    <p className="border-primary-foreground">
                      Weapon: Grief (Phase Blade) – Best Fury DPS
                    </p>
                    <p className="text-muted-foreground">
                      Alternative: Ethereal Death Cleaver, Ribcracker (Upgraded), or Tomb Reaver
                      (3os)
                    </p>
                    <p>Shield: Spirit Monarch</p>
                    <p className="text-muted-foreground">
                      Alternative: Phoenix (Redemption Aura for Mana/Life Recovery)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Helmet: Ravenlore</p>
                    <p className="text-muted-foreground">
                      Alternative: Guillaume’s Face (For Deadly Strike)
                    </p>
                    <p>Armor: Fortitude</p>
                    <p className="text-muted-foreground">
                      Alternative: Chains of Honor (For More Resistances)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Gloves: Dracul&apos;s Grasp</p>
                    <p className="text-muted-foreground">
                      Alternative: Bloodfist (For FHR &amp; Life)
                    </p>
                    <p>Belt: Verdungo&apos;s Hearty Cord</p>
                    <p className="text-muted-foreground">
                      Alternative: String of Ears (More Life Leech &amp; DR)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Boots: Gore Rider</p>
                    <p className="text-muted-foreground">
                      Alternative: Aldur’s Advance (For Fire Res &amp; Life Boost)
                    </p>
                    <p>Rings: Ravenfrost + Bul-Kathos&apos;</p>
                    <p className="text-muted-foreground">
                      Alternative: 2x Ravenfrost or 2x Angelic Rings
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Amulet: Highlord&apos;s Wrath</p>
                    <p className="text-muted-foreground">
                      Alternative: Angelic Amulet (Pair only with rings for AR Boost)
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
                  <p className="text-muted-foreground">Shape-Shifting Skillers</p>
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
                  <p className="text-foreground">Fury - Max</p>
                  <p className="text-foreground">Lycanthropy - Max</p>
                  <p className="text-foreground">Werewolf - Max</p>
                  <p className="text-foreground">Heart of Wolverine - Max</p>
                  <p className="text-foreground">Oak Sage - Max</p>
                  <p className="text-foreground" />
                  <p className="text-foreground">&lt;div&gt;&lt;br&gt;&lt;/div&gt;</p>
                  <p className="text-foreground">
                    &lt;b&gt;Support Skills (Put 1 Point Each):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Feral Rage - 1 Point</p>
                  <p className="text-foreground">Rabies - 1 Point</p>
                  <p className="text-foreground">Carrion Vine - 1 Point</p>
                  <p className="text-foreground">&lt;br&gt;</p>
                </div>
              </TabsContent>
              <TabsContent value="attributes">
                <h2 className="font-heading text-2xl text-primary">Attribute Points</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground" />
                  <p className="text-muted-foreground">Strength: Enough for gear</p>
                  <p className="text-muted-foreground">Dexterity: Enough for gear and max block</p>
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
                    Increased Attack Speed (IAS) for Fury Attacks:
                  </p>
                  <p className="border-foreground text-muted-foreground">
                    42% (4-Frame Attack with Grief PB)
                  </p>
                  <p className="border-foreground text-muted-foreground">
                    68% (Optimal for Faster Fury Swings, Depending on Weapon)&lt;br&gt;&lt;br&gt;
                  </p>
                  <p className="border-foreground text-foreground">
                    &lt;b&gt;Faster Hit Recovery (FHR):&lt;/b&gt;
                  </p>
                  <p className="border-foreground text-muted-foreground">20% (Basic)</p>
                  <p className="border-foreground text-muted-foreground">42% (Suggested)</p>
                  <p className="border-foreground text-muted-foreground">86% (Optimal)</p>
                </div>
              </TabsContent>
              <TabsContent value="playstyle">
                <h2 className="font-heading text-2xl text-primary">Playstyle</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    Transform into Werewolf Immediately – Stay in form for max DPS&lt;br&gt;
                  </p>
                  <p className="text-foreground">
                    Activate Feral Rage Before Engaging – Gives Extra Life Leech &amp;
                    Speed&lt;br&gt;
                  </p>
                  <p className="text-foreground">
                    Use Fury to Shred Enemies – High Single-Target &amp; Cleave Damage&lt;br&gt;
                  </p>
                  <p className="text-foreground">
                    Cyclone Armor Up at All Times – Absorbs Elemental Damage
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    Teleport with Enigma (If Used) or Run Fast with Feral Rage&lt;br&gt;
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="font-bold text-foreground">Pro Tip:</p>
                  <p className="text-foreground">
                    Fury attack speed depends on your weapon choice—Grief PB is ideal for smooth
                    attacks!This build is perfect for dealing high single-target and AoE damage,
                    making it ideal for Ubers, Chaos Sanctuary, and boss fights. With a balance of
                    survivability and damage, it&apos;s a great pick for melee combat!
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
