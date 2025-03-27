import Image from "next/image";
import { Settings, Sword, Shield, Backpack, Sparkles, Star, Gauge, Gamepad2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function Section14() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <div className="container mx-auto px-4 py-16 text-center block">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Trapsin Guide
          </h2>
          <Image alt="Image" src="/images/sin.jpg" width={500} height={500} />
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
                    <p className="border-primary-foreground">
                      Main Weapon: Heart of the Oak (Hoto){" "}
                    </p>
                    <p className="text-muted-foreground">
                      Alternate Switch: Infinity– Breaks Lightning Immunities
                    </p>
                    <p>Shield: Spirit Monarch</p>
                    <p className="text-muted-foreground">
                      Alternative: Lidless Wall – +1 Skills, Mana, FCR
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Helmet: Griffon&apos;s Eye</p>
                    <p className="text-muted-foreground">Helmet: Shako</p>
                    <p>Armor: Enigma</p>
                    <p className="text-muted-foreground">
                      Alternative: Chains of Honor – Resists &amp; +2 Skills
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Gloves: Trang-Oul&apos;s</p>
                    <p className="text-muted-foreground">
                      Alternative: Magefist (FCR &amp; Mana) or Rare +2 Assassin Gloves
                    </p>
                    <p>Belt: Arachnid Mesh Belt</p>
                    <p className="text-muted-foreground">
                      Alternative: Verdungo&apos;s (Vitality, Damage Reduction)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Boots: War Travelers</p>
                    <p className="text-muted-foreground">
                      Alternative: Sandstorm Trek (FHR, Strength, Vitality)
                    </p>
                    <p>Rings: Stone of Jordan + Ravenfrost</p>
                    <p className="text-muted-foreground">
                      Alternative: Rare/Crafted Ring with FCR, Life, Resistances&nbsp;
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Amulet: Mara&apos;s Kaleidoscope</p>
                    <p className="text-muted-foreground">
                      Alternative: +2 Assassin Skills Amulet with FCR
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
                  <p className="text-foreground">
                    Type: Act 2 Nightmare Defensive (Holy Freeze)&lt;br&gt;
                  </p>
                  <p className="text-foreground">
                    &lt;b&gt;Helmet: Andariel&apos;s Visage&lt;/b&gt;
                  </p>
                  <p className="text-muted-foreground">Alternative: Guillaume’s Face </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">Weapon: Ethereal Infinity</p>
                  <p className="text-muted-foreground">Alternative: None&nbsp;</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">Armor: Fortitude</p>
                  <p className="text-muted-foreground">Alternative: Treachery</p>
                </div>
              </TabsContent>
              <TabsContent value="inventory">
                <h2 className="text-2xl font-heading text-primary">Inventory</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Grand Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">Trap Skiller +1 (7-8)</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Unique Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">
                    Hellfire Torch (Assassin), Annihilus, Light Sunder*
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Small Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">Life, Resistances, Magic Find</p>
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <h2 className="text-2xl font-heading text-primary">Skill Distribution</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    &lt;b&gt;Primary Skills (Max These First in Order):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Lightning Sentry - Max</p>
                  <p className="text-foreground">Death Sentry - Max</p>
                  <p className="text-foreground">Charged Bolt Sentry - Max</p>
                  <p className="text-foreground">Fire Blast - Max</p>
                  <p className="text-foreground" />
                  <p className="text-foreground">&lt;div&gt;&lt;br&gt;&lt;/div&gt;</p>
                  <p className="text-foreground">
                    &lt;b&gt;Support Skills (Put 1 Point Each):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Shadow Master - 1 Point</p>
                  <p className="text-foreground">Mind Blast - 1 Point</p>
                  <p className="text-foreground">Fade - 1 Point</p>
                  <p className="text-foreground">Cloak of Shadows - 1 Point</p>
                  <p className="text-foreground">Mind Blast - 1 Point</p>
                  <p className="text-foreground">Weapon Block - 1 Point</p>
                  <p className="text-foreground">&lt;br&gt;</p>
                </div>
              </TabsContent>
              <TabsContent value="attributes">
                <h2 className="text-2xl font-heading text-primary">Attribute Points</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground" />
                  <p className="text-muted-foreground">
                    Strength: Enough for gear (~156 for Monarch)
                  </p>
                  <p className="text-muted-foreground">
                    Dexterity: Enough for max block if desired (~100-130) or minimal&lt;br&gt;
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
                  <p className="border-foreground text-foreground">
                    Faster Cast Rate (FCR) (For Mind Blast &amp; Throwing Traps)
                  </p>
                  <p className="text-muted-foreground border-foreground">48% FCR (Basic)</p>
                  <p className="text-muted-foreground border-foreground">65% FCR (Recommended)</p>
                  <p className="border-foreground text-foreground">
                    &lt;b&gt;Faster Hit Recovery (FHR):&lt;/b&gt;
                  </p>
                  <p className="text-muted-foreground border-foreground">42% (Basc)</p>
                  <p className="text-muted-foreground border-foreground">86% (Optimal)</p>
                  <p className="border-foreground text-foreground">
                    Increased Attack Speed (IAS) (With Burst of Speed)
                  </p>
                  <p className="text-muted-foreground border-foreground">75% IAS (Recommended)</p>
                </div>
              </TabsContent>
              <TabsContent value="playstyle">
                <h2 className="text-2xl font-heading text-primary">Playstyle</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    {" "}
                    Cast 5 Lightning Sentries at enemy packs – Main damage
                  </p>
                  <p className="text-foreground">
                    Follow up with Death Sentries for corpse explosions{" "}
                  </p>
                  <p className="text-foreground">Cast Mind Blast to crowd control tough enemies</p>
                  <p className="text-foreground">
                    Use Cloak of Shadows to disable ranged attackers{" "}
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">Teleport to reposition or escape danger ⚡</p>
                  <p className="text-foreground">Keep Shadow Master up for additional support </p>
                  <p className="text-foreground"> Keep Burst of Speed up for mobility</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">&lt;br&gt;</p>
                  <p className="text-foreground font-bold">Pro Tip:</p>
                  <p className="text-foreground">
                    Place your traps strategically to maximize Lightning Sentry coverage, then add
                    Death Sentries once enemies start dying for devastating chain explosions!
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
