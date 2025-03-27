import Image from "next/image";
import { Settings, Sword, Shield, Backpack, Sparkles, Star, Gauge, Gamepad2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function Section16() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <div className="container mx-auto px-4 py-16 text-center block">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Elemental Guide
          </h2>
          <Image alt="Image" src="/images/dru.jpg" width={500} height={500} />
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
                    <p className="border-primary-foreground">Weapon: Heart of the Oak (Hoto) </p>
                    <p className="text-muted-foreground">
                      Alternative: Wizardspike (For Max FCR &amp; Resistances)
                    </p>
                    <p>Shield: Spirit Monarch</p>
                    <p className="text-muted-foreground">
                      Alternative: Stormshield (For Max Block &amp; DR)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Helmet: Jalal&apos;s Mane</p>
                    <p className="text-muted-foreground">
                      Alternative: Ravenlore (Fire Build) or Shako (For Extra Life &amp; Mana)
                    </p>
                    <p>Armor: Enigma</p>
                    <p className="text-muted-foreground">Alternative: Chains of Honor</p>
                  </div>
                  <div className="space-y-2">
                    <p>Gloves: Trang-Oul&apos;s</p>
                    <p className="text-muted-foreground">
                      Alternative: Magefist (For Extra Mana Regen)
                    </p>
                    <p>Belt: Arachnid Mesh</p>
                    <p className="text-muted-foreground">
                      Alternative: Verdungo’s Hearty Cord (For Survivability)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Boots: Sandstorm Trek</p>
                    <p className="text-muted-foreground">
                      Alternative: War Traveler (For Extra MF)
                    </p>
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
                <h2 className="text-2xl font-heading text-primary">Mercenary</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground font-bold">
                    Type: Act 2 Nightmare Offensive Mercenary
                  </p>
                  <p className="text-foreground font-bold">Helmet: Andariel&apos;s Visage </p>
                  <p className="text-muted-foreground">Alternative: Guillaume&apos;s Face</p>
                  <p className="text-foreground font-bold">Weapon: Infinity</p>
                  <p className="text-muted-foreground">
                    Alternative: Insight or Reaper&apos;s Toll
                  </p>
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
                  <p className="text-muted-foreground">Elemental Skillers&lt;br&gt;</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Unique Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">Hellfire Torch (Druid), Annihilus</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Small Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">Life, FHR, Resistances</p>
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <h2 className="text-2xl font-heading text-primary">Skill Distribution</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    &lt;b&gt;Primary Skills (Max These First in Order):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Hurricane - Max</p>
                  <p className="text-foreground">Tornado - Max</p>
                  <p className="text-foreground">Cyclone Armor - Max</p>
                  <p className="text-foreground">Twister - Max</p>
                  <p className="text-foreground">Oak Sage - Max</p>
                  <p className="text-foreground" />
                  <p className="text-foreground">&lt;div&gt;&lt;br&gt;&lt;/div&gt;</p>
                  <p className="text-foreground">
                    &lt;b&gt;Support Skills (Put 1 Point Each):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Raven - 1 Point</p>
                  <p className="text-foreground">Summon Grizzly - 1 Point</p>
                  <p className="text-foreground">Carrion Vine - 1 Point</p>
                  <p className="text-foreground">&lt;br&gt;</p>
                </div>
              </TabsContent>
              <TabsContent value="attributes">
                <h2 className="text-2xl font-heading text-primary">Attribute Points</h2>
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
                <h2 className="text-2xl font-heading text-primary">Breakpoints</h2>
                <div className="mt-4 space-y-2">
                  <p className="border-foreground text-foreground">
                    &lt;b&gt;Faster Caster Rate (FCR):&lt;/b&gt;
                  </p>
                  <p className="text-muted-foreground border-foreground">68% (Basic)</p>
                  <p className="text-muted-foreground border-foreground">99% (Optimal)</p>
                  <p className="text-muted-foreground border-foreground">163% (Max)</p>
                  <p className="border-foreground text-foreground">
                    &lt;b&gt;Faster Hit Recovery (FHR):&lt;/b&gt;
                  </p>
                  <p className="text-muted-foreground border-foreground">29% (Basic)</p>
                  <p className="text-muted-foreground border-foreground">42% (Suggested)</p>
                  <p className="text-muted-foreground border-foreground">86% (Optimal)</p>
                </div>
              </TabsContent>
              <TabsContent value="playstyle">
                <h2 className="text-2xl font-heading text-primary">Playstyle</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    Keep Hurricane active at all times – Constant Cold AoE
                  </p>
                  <p className="text-foreground">
                    Spam Tornado for main damage – High Physical DPS&lt;br&gt;
                  </p>
                  <p className="text-foreground">
                    Cyclone Armor absorbs elemental damage – Keep it up for defense
                  </p>
                  <p className="text-foreground">
                    Summon Grizzly as a tank – Absorbs damage while you attack
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">Use Teleport (Enigma) for quick repositioning</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground font-bold">Pro Tip:</p>
                  <p className="text-foreground">
                    Tornado has a short range—teleport close for max DPS, then
                    reposition!&lt;br&gt;This build offers fantastic AoE damage and survivability,
                    thanks to high mobility, defensive abilities, and tanky summons. It&apos;s ideal
                    for clearing dense areas like Chaos Sanctuary, Baal&apos;s minions, or Cow
                    Level!
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
