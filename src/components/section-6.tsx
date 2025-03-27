import Image from "next/image";
import { Settings, Sword, Shield, Backpack, Sparkles, Star, Gauge, Gamepad2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function Section6() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <div className="container mx-auto px-4 py-16 text-center block">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Bowazon Guide
          </h2>
          <Image alt="Image" src="/images/zon.jpeg" width={500} height={500} />
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
                    <p className="border-primary-foreground">Weapon: Faith or Windforce</p>
                    <p className="text-muted-foreground">
                      Alternative: Ice (Runeword, Ideal for Freezing Arrow Hybrid Build)
                    </p>
                    <p>Shield: None</p>
                    <p className="text-muted-foreground">
                      Alternative: None - this build does not use a shield.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Helmet: Giant Skull</p>
                    <p className="text-muted-foreground">
                      Alternative: Andariel’s Visage (Extra IAS, Life Leech, +2 Skills with IAS
                      Jewel)
                    </p>
                    <p>Armor: Fortitude</p>
                    <p className="text-muted-foreground">
                      Alternative: Chains of Honor (+Skills, Resistances, Life Sustain)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Gloves: Laying of Hands</p>
                    <p className="text-muted-foreground">
                      Alternative: Rare Gloves (+2 Bow Skills, IAS, Leech, Resistances)
                    </p>
                    <p>Belt: Razortail</p>
                    <p className="text-muted-foreground">
                      Alternative: Nosferatu’s Coil (IAS, Life Leech, Slow Target)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Boots: War Traveler</p>
                    <p className="text-muted-foreground">
                      Alternative: Gore Rider (Deadly Strike, Crushing Blow for Extra Damage Output)
                    </p>
                    <p>Rings: Ravenfrost (2x)</p>
                    <p className="text-muted-foreground">
                      Alternative: 1x Rare Ring (Life Leech, Mana Leech, Resistances, Attack Rating)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Amulet: Highlord&apos;s Wrath</p>
                    <p className="text-muted-foreground">
                      Alternative: Cat’s Eye (+20% IAS, Faster Run/Walk for Kiting &amp; Mobility)
                    </p>
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
                  <p className="text-foreground">Type: Act 2 Nightmare Defensive (Holy Freeze)</p>
                  <p className="text-foreground">
                    &lt;b&gt;Helmet: Andariel&apos;s Visage&lt;/b&gt;
                  </p>
                  <p className="text-muted-foreground">Alternative: Guillaume&apos;s Face</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">Weapon: The Reaper&apos;s Toll</p>
                  <p className="text-muted-foreground">
                    Alternative: Infinity (Runeword, Lowers Enemy Resistances for Elemental
                    Variants)
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">Armor: Treachery</p>
                  <p className="text-muted-foreground">
                    Alternative: Fortitude (Enhanced Damage, Life, Resistances for Tankiness)
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="inventory">
                <h2 className="text-2xl font-heading text-primary">Inventory</h2>
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
                    Fortune
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
                <h2 className="text-2xl font-heading text-primary">Skill Distribution</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    &lt;b&gt;Primary Skills (Max These First in Order):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Strafe - Max</p>
                  <p className="text-foreground">Guided Arrow - Max</p>
                  <p className="text-foreground">Criticial Strike - Max</p>
                  <p className="text-foreground">Penetrate - Max</p>
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
                  <p className="text-foreground">Slow Missiles - 1 Point</p>
                  <p className="text-foreground">Decoy - 1 Point</p>
                  <p className="text-foreground">&lt;br&gt;</p>
                </div>
              </TabsContent>
              <TabsContent value="attributes">
                <h2 className="text-2xl font-heading text-primary">Attribute Points</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground" />
                  <p className="text-muted-foreground">Strength: Enough for gear (~60-90)</p>
                  <p className="text-muted-foreground">
                    Dexterity: Very High (Main Damage Stat – 250+ for Damage Scaling &amp; Accuracy)
                  </p>
                  <p className="text-muted-foreground">
                    Vitality: Enough for Comfortable Life Pool (100-150 for Survivability)
                  </p>
                  <p className="text-muted-foreground">
                    Energy: None (Unless Using Energy Shield Build)
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="breakpoints">
                <h2 className="text-2xl font-heading text-primary">Breakpoints</h2>
                <div className="mt-4 space-y-2">
                  <p className="border-foreground text-foreground">
                    ⚡ Increased Attack Speed (IAS)
                  </p>
                  <p className="text-muted-foreground border-foreground">
                    70% IAS (Minimum Recommended for Efficient Attack Speed)
                  </p>
                  <p className="text-muted-foreground border-foreground">
                    95% IAS (For Multi Shot / Strafe Breakpoint, Ensures Fast Clear Speed)
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="border-foreground text-foreground">
                    &lt;b&gt;Faster Hit Recovery (FHR):&lt;/b&gt;
                  </p>
                  <p className="text-muted-foreground border-foreground">
                    52% (Recommended for Basic Survivability)
                  </p>
                  <p className="text-muted-foreground border-foreground">
                    52% (Recommended for Basic Survivability)
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="playstyle">
                <h2 className="text-2xl font-heading text-primary">Playstyle</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    Pro Tip: Pierce is crucial for Multi Shot and Strafe! Aim for 100% Pierce with
                    Razortail (33%) + Amazon Passive Skills + Gear to maximize AoE effectiveness.
                  </p>
                  <p className="text-foreground">
                    Use Guided Arrow for Bosses &amp; Tough Single Targets – Never Misses{" "}
                  </p>
                  <p className="text-foreground">
                    Multiple Shot for Very Large Packs – Covers a Wide Area Efficiently
                  </p>
                  <p className="text-foreground">
                    Summon Valkyrie as a Tank – Keeps Aggro Away from You
                  </p>
                  <p className="text-foreground">
                    Position Carefully – Stay at Maximum Range to Avoid Melee Hits
                  </p>
                  <p className="text-foreground">
                    Maintain ‘Cannot Be Frozen’ From Raven Frost – Essential for Smooth Gameplay
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
