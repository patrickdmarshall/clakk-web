import Image from "next/image";
import { Settings, Sword, Shield, Backpack, Sparkles, Star, Gauge, Gamepad2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function Section10() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-5xl">
        <div className="container mx-auto block px-4 py-16 text-center">
          <h2 className="mb-8 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Ice Maiden Guide
          </h2>
          <Image alt="Image" src="/images/zon.jpeg" width={500} height={500} />
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
                    <p className="border-primary-foreground">Weapon: Ice Bow</p>
                    <p className="text-muted-foreground">
                      Alternative: Witchwild String with Cold Damage Jewels
                    </p>
                    <p>Shield: None</p>
                    <p className="text-muted-foreground">
                      Alternative: None - this build does not use a shield.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Helmet: Nightwing&apos;s Veil</p>
                    <p className="text-muted-foreground">Alternative: Harlequin Crest (Shako)</p>
                    <p>Armor: Fortitude</p>
                    <p className="text-muted-foreground">
                      Alternative: Chains of Honor (+Skills, Resistances, Life Sustain)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Gloves: Frostbn</p>
                    <p className="text-muted-foreground">
                      Alternative: Laying of Hands – Damage to Demons, Fire Resist
                    </p>
                    <p>Belt: Razortail</p>
                    <p className="text-muted-foreground">
                      Alternative: Snowclash – Cold Damage, Cold Resist
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Boots: War Traveler</p>
                    <p className="text-muted-foreground">
                      Alternative: Waterwalk – Life, Dexterity, FRW
                    </p>
                    <p>Rings: Ravenfrost (2x)</p>
                    <p className="text-muted-foreground">
                      Alternative: 1x Rare Ring (Life Leech, Mana Leech, Resistances, Attack Rating)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Amulet: Highlord&apos;s Wrath</p>
                    <p className="text-muted-foreground">
                      Alternative: Mara&apos;s Kaleidoscope – +2 Skills, Resistances
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
                  <p className="text-foreground">Type: Act 1 Rogue (Cold Arrow)</p>
                  <p className="text-foreground">
                    &lt;b&gt;Helmet: Andariel&apos;s Visage&lt;/b&gt;
                  </p>
                  <p className="text-muted-foreground">Alternative: Crown of Thieves</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">Weapon: Faith</p>
                  <p className="text-muted-foreground">Alternative: None</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">Armor: Treachery</p>
                  <p className="text-muted-foreground">
                    Alternative: Fortitude (Enhanced Damage, Life, Resistances for Tankiness)
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="inventory">
                <h2 className="font-heading text-2xl text-primary">Inventory</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Grand Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">
                    &nbsp;Bow &amp; Crossbow Skillers (+1 Skills Each)
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Unique Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">
                    Hellfire Torch (Amazon Bonus), Annihilus (Stats &amp; Resists), Gheed&apos;s
                    Fortune, Cold Sunder
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Small Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">
                    Max Damage, Attack Rating, Life, Resistances
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <h2 className="font-heading text-2xl text-primary">Skill Distribution</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    &lt;b&gt;Primary Skills (Max These First in Order):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Freezing Arrow - Max</p>
                  <p className="text-foreground">Cold Arrow - Max</p>
                  <p className="text-foreground">Ice Arrow - Max</p>
                  <p className="text-foreground">Strafe - 10+</p>
                  <p className="text-foreground" />
                  <p className="text-foreground">&lt;div&gt;&lt;br&gt;&lt;/div&gt;</p>
                  <p className="text-foreground">
                    &lt;b&gt;Support Skills (Put 1 Point Each):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Multiple Shot - 1 Point</p>
                  <p className="text-foreground">Valkyrie - 1 Point</p>
                  <p className="text-foreground">Dodge - 1 Point</p>
                  <p className="text-foreground">Evade - 1 Point</p>
                  <p className="text-foreground">Avoid - 1 Point</p>
                  <p className="text-foreground">Penetrate - 1 Point</p>
                  <p className="text-foreground">Critical Strike - 1 Point</p>
                  <p className="text-foreground">&lt;br&gt;</p>
                </div>
              </TabsContent>
              <TabsContent value="attributes">
                <h2 className="font-heading text-2xl text-primary">Attribute Points</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground" />
                  <p className="text-muted-foreground">Strength: Enough for gear (~60-80)</p>
                  <p className="text-muted-foreground">
                    Dexterity: Very High (Main Damage Stat – 250+ for Damage Scaling &amp; Accuracy)
                  </p>
                  <p className="text-muted-foreground">
                    Vitality: Enough for Comfortable Life Pool (120-160 for Survivability)
                  </p>
                  <p className="text-muted-foreground">
                    Energy: None (Unless Using Energy Shield Build)
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="breakpoints">
                <h2 className="font-heading text-2xl text-primary">Breakpoints</h2>
                <div className="mt-4 space-y-2">
                  <p className="border-foreground text-foreground">
                    ⚡ Increased Attack Speed (IAS)
                  </p>
                  <p className="border-foreground text-muted-foreground">65% IAS (Basic)</p>
                  <p className="border-foreground text-muted-foreground">92% IAS (Optimal)</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="border-foreground text-foreground">
                    &lt;b&gt;Faster Hit Recovery (FHR):&lt;/b&gt;
                  </p>
                  <p className="border-foreground text-muted-foreground">52% (Basic)</p>
                  <p className="border-foreground text-muted-foreground">86% (Optimal)</p>
                  <p className="border-foreground text-foreground">
                    &lt;b&gt;Faster Run/Walk (FRW)&lt;/b&gt;
                  </p>
                  <p className="border-foreground text-muted-foreground">
                    30%+ FRW (Helps with Positioning)
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="playstyle">
                <h2 className="font-heading text-2xl text-primary">Playstyle</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    Pro Tip: Stack -% Enemy Cold Resistance from Cold Facets in your gear to break
                    through high cold resistance enemies! Your Ice Runeword + Holy Freeze + Freezing
                    Arrow will create a massive freeze field that locks down entire screens of
                    monsters!
                  </p>
                  <p className="text-foreground">
                    Use Guided Arrow for Bosses &amp; Tough Single Targets – Never Misses{" "}
                  </p>
                  <p className="text-foreground">
                    {" "}
                    Use Strafe against Cold Immune monsters – Physical Alternative
                  </p>
                  <p className="text-foreground">
                    Position strategically – Freezing Arrow has splash damage{" "}
                  </p>
                  <p className="text-foreground">
                    Summon Valkyrie to tank damage in dangerous areas
                  </p>
                  <p className="text-foreground">Maintain Cannot Be Frozen effect at all times </p>
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
