import Image from "next/image";
import { Settings, Sword, Shield, Backpack, Sparkles, Star, Gauge, Gamepad2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function Section12() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <div className="container mx-auto px-4 py-16 text-center block">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Mosaic Guide
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
                    <p className="border-primary-foreground">Weapon: Mosaic Runeword Claw (2x)</p>
                    <p className="text-muted-foreground">Alternative Weapons: None</p>
                    <p>Shield: None</p>
                    <p className="text-muted-foreground">Alternative: None</p>
                  </div>
                  <div className="space-y-2">
                    <p>Helmet: Griffon&apos;s Eye</p>
                    <p className="text-muted-foreground">Alternative: Kira&apos;s or Shako</p>
                    <p>Armor: Enigma</p>
                    <p className="text-muted-foreground">
                      Alternative: Chains of Honor – Resists &amp; +2 Skills
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Gloves: +3 Martial Arts &amp; +20% Increased Attack Speed Gloves</p>
                    <p className="text-muted-foreground">
                      Alternative: Magefirst or Trang-Oul&apos;s
                    </p>
                    <p>Belt: Arachnid Mesh Belt</p>
                    <p className="text-muted-foreground">Alternative: Razortail</p>
                  </div>
                  <div className="space-y-2">
                    <p>Boots: Gore Riders</p>
                    <p className="text-muted-foreground">Alternative: War Traveler&apos;s</p>
                    <p>Rings: Ravenfrost (1x) &amp; Bul-Kathos&apos; Wedding Band (1x)</p>
                    <p className="text-muted-foreground">Alternative: 1x SOJ or 2x Ravenfrost</p>
                  </div>
                  <div className="space-y-2">
                    <p>Amulet: Highlord&apos;s Wrath</p>
                    <p className="text-muted-foreground">
                      Alternative: Mara&apos;s Kaleidoscope – +2 Skills, Resistances&lt;br&gt;
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
                  <p className="text-muted-foreground">Alternative: Insight&nbsp;</p>
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
                  <p className="text-muted-foreground">Martial Arts Skillers</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Unique Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">
                    Hellfire Torch (Assassin), Annihilus, Light Sunder*
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Small Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">Life, Resistances, FHR, Max Damage</p>
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <h2 className="text-2xl font-heading text-primary">Skill Distribution</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    &lt;b&gt;Primary Skills (Max These First in Order):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Phoenix Strike - Max</p>
                  <p className="text-foreground">Dragon Talon - Max</p>
                  <p className="text-foreground">Claw Mastery - Max</p>
                  <p className="text-foreground">Weapon Block - 10+ Points</p>
                  <p className="text-foreground" />
                  <p className="text-foreground">&lt;div&gt;&lt;br&gt;&lt;/div&gt;</p>
                  <p className="text-foreground">
                    &lt;b&gt;Support Skills (Put 1 Point Each):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Dragon Flight - 1 Point</p>
                  <p className="text-foreground">Burst of Speed - 1 Point</p>
                  <p className="text-foreground">Fade - 1 Point</p>
                  <p className="text-foreground">Cloak of Shadows - 1 Point</p>
                  <p className="text-foreground">Mind Blast - 1 Point</p>
                  <p className="text-foreground">Shadow Master - 1 Point</p>
                  <p className="text-foreground">&lt;br&gt;</p>
                </div>
              </TabsContent>
              <TabsContent value="attributes">
                <h2 className="text-2xl font-heading text-primary">Attribute Points</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground" />
                  <p className="text-muted-foreground">Strength: Enough for gear (~100-120)</p>
                  <p className="text-muted-foreground">
                    Dexterity: High (150-180 for Attack Rating &amp; Weapon Block)&lt;br&gt;
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
                    Increased Attack Speed (IAS) (Javelin Throwing Speed)
                  </p>
                  <p className="text-muted-foreground border-foreground">55% IAS (Optimal)</p>
                  <p className="text-muted-foreground border-foreground">
                    85% IAS (Most Efficient)
                  </p>
                  <p className="border-foreground text-foreground">
                    &lt;b&gt;Faster Hit Recovery (FHR):&lt;/b&gt;
                  </p>
                  <p className="text-muted-foreground border-foreground">42% (Basc)</p>
                  <p className="text-muted-foreground border-foreground">86% (Optimal)</p>
                </div>
              </TabsContent>
              <TabsContent value="playstyle">
                <h2 className="text-2xl font-heading text-primary">Playstyle</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground font-semibold">
                    Pro Tip: With dual Mosaic claws, you get 100% uptime on your charges! Just make
                    sure to hit an enemy with a finisher every 15 seconds to keep your charges
                    active. Dragon Talon hits multiple times per kick, releasing multiple charges in
                    rapid succession - making you look like a deadly Christmas tree of elemental
                    effects
                  </p>
                  <p className="text-foreground">&lt;br&gt;</p>
                  <p className="text-foreground font-bold">
                    Each Charge Level Has Different Effects:
                  </p>
                  <p className="text-foreground">Level 1: Meteor-like Fire Damage 🔥</p>
                  <p className="text-foreground">Level 2: Chain Lightning Damage ⚡</p>
                  <p className="text-foreground">Level 3: Cold Nova &amp; Freeze ❄️</p>
                  <p className="text-foreground">Level 3: Cold Nova &amp; Freeze ❄️</p>
                  <p className="text-foreground">Level 3: Cold Nova &amp; Freeze ❄️</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">&lt;br&gt;</p>
                  <p className="text-foreground font-bold">
                    Each Charge Level Has Different Effects:
                  </p>
                  <p className="text-foreground">Use Dragon Flight to teleport to enemies</p>
                  <p className="text-foreground">Keep Shadow Master up for additional support </p>
                  <p className="text-foreground">
                    Use Mind Blast on dangerous packs for crowd control
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">&lt;br&gt;</p>
                  <p className="text-foreground font-bold">Uber Guide Adjustment:</p>
                  <p className="text-foreground">
                    For Ubers, get Life Tap sources (Dracul&apos;s Grasp or wand on switch), max
                    Fade instead of Burst of Speed, and focus on Crushing Blow gear. Your Dragon
                    Talon with multiple hits will apply massive Crushing Blow, melting bosses faster
                    than most other builds!
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
