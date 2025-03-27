import Image from "next/image";
import { Settings, Sword, Shield, Backpack, Sparkles, Star, Gauge, Gamepad2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function Section22() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <div className="container mx-auto px-4 py-16 text-center block">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Poison Nova Guide
          </h2>
          <Image alt="Image" src="/images/nec.jpg" width={500} height={500} />
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
                    <p className="border-primary-foreground">Weapon: Death’s Web</p>
                    <p className="text-muted-foreground">
                      Alternative: White Runeword (+3 PnB Wand) or Hoto
                    </p>
                    <p>Shield: Spirit Monarch</p>
                    <p className="text-muted-foreground">
                      Alternative: Trang-Oul’s Wing (+Poison Damage &amp; -Resists)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Helmet: Shako</p>
                    <p className="text-muted-foreground">
                      Alternative: Rare Circlet (+2 Necro Skills, 20% FCR)
                    </p>
                    <p>Armor: Enigma</p>
                    <p className="text-muted-foreground">Alternative: Bramble (+Poison Damage)</p>
                  </div>
                  <div className="space-y-2">
                    <p>Gloves: Trang-Oul&apos;s</p>
                    <p className="text-muted-foreground">
                      Alternative: Magefist (FCR &amp; Mana Regen)
                    </p>
                    <p>Belt: Arachnid Mesh</p>
                    <p className="text-muted-foreground">
                      Alternative: Trang-Oul’s Belt (+Mana &amp; Resist)&lt;br&gt;
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Boots: Marrowwalk</p>
                    <p className="text-muted-foreground">
                      Alternative: Sandstorm Trek (For Poison Resist &amp; Strength)
                    </p>
                    <p>Rings: Stone of Jordan (SoJ) &amp; Ravenfrost</p>
                    <p className="text-muted-foreground">Alternative: 2x Stone of Jordan (SoJ)</p>
                  </div>
                  <div className="space-y-2">
                    <p>Amulet: Mara’s Kaleidoscope</p>
                    <p className="text-muted-foreground">
                      Alternative: Rare Necromancer Amulet (FCR, Life, Resists)
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
                  <p className="text-muted-foreground">Alternative: Insight</p>
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
                  <p className="text-muted-foreground">Poison &amp; Bone Skillers</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Unique Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">Hellfire Torch (Necromancer), Annihilus</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Small Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">Life, Resists, Faster Hit Recovery</p>
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <h2 className="text-2xl font-heading text-primary">Skill Distribution</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    &lt;b&gt;Primary Skills (Max These First in Order):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Poison Nova – Max&lt;br&gt;</p>
                  <p className="text-foreground">Poison Explosion – Max</p>
                  <p className="text-foreground">Poison Dagger – Max</p>
                  <p className="text-foreground">Bone Prison - Max</p>
                  <p className="text-foreground">Teeth - Max</p>
                  <p className="text-foreground" />
                  <p className="text-foreground">&lt;div&gt;&lt;br&gt;&lt;/div&gt;</p>
                  <p className="text-foreground">
                    &lt;b&gt;Support Skills (Put 1 Point Each):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Bone Armor - 1 Point</p>
                  <p className="text-foreground">Corpse Explosion – 1 Point&lt;br&gt;</p>
                  <p className="text-foreground">Lower Resist – 1 Point&lt;br&gt;</p>
                  <p className="text-foreground">Clay Golem – 1 Point</p>
                  <p className="text-foreground">Golem Mastery – 1 Point</p>
                  <p className="text-foreground">Summon Resist – 1 Point</p>
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
                  <p className="border-foreground text-foreground">Faster Cast Rate (FCR):</p>
                  <p className="text-muted-foreground border-foreground">48% (Basic)</p>
                  <p className="text-muted-foreground border-foreground">75% (Optimal)</p>
                  <p className="text-muted-foreground border-foreground">125% (Suggested)</p>
                  <p className="border-foreground text-foreground">
                    &lt;b&gt;Faster Hit Recovery (FHR):&lt;/b&gt;
                  </p>
                  <p className="text-muted-foreground border-foreground">29% (Basic)</p>
                  <p className="text-muted-foreground border-foreground">56% (Suggested)</p>
                </div>
              </TabsContent>
              <TabsContent value="playstyle">
                <h2 className="text-2xl font-heading text-primary">Playstyle</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">Cast Lower Resist First&lt;br&gt;</p>
                  <p className="text-foreground">
                    Spam Poison Nova for Massive AoE Poison Damage&lt;br&gt;
                  </p>
                  <p className="text-foreground">Corpse Explosion for Chain Reaction</p>
                  <p className="text-foreground">Teleport with Enigma for Faster Farming</p>
                </div>
                <div className="mt-4 space-y-2" />
                <div className="mt-4 space-y-2">
                  <p className="text-foreground font-bold">Pro Tip:</p>
                  <p className="text-foreground">
                    Since Poison Nova doesn’t stack, recast every second instead of spamming!
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
