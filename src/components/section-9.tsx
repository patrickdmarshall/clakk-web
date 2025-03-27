import Image from "next/image";
import { Settings, Sword, Shield, Backpack, Sparkles, Star, Gauge, Gamepad2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function Section9() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <div className="container mx-auto px-4 py-16 text-center block">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Javazon Guide
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
                    <p className="border-primary-foreground">Weapon: Titan&apos;s Revenge</p>
                    <p className="text-muted-foreground">
                      Alternative: Thunderstroke – More -Enemy Lightning Resist for Bosses
                    </p>
                    <p>Shield: Spirit Monarch</p>
                    <p className="text-muted-foreground">
                      Alternative: Phoenix Monarch – More Damage via Redemption Aura
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Helmet: Nightwing&apos;s Veil</p>
                    <p className="text-muted-foreground">
                      Alternative: Andariel’s Visage – IAS &amp; Life Leech
                    </p>
                    <p>Armor: Enigma</p>
                    <p className="text-muted-foreground">
                      Alternative: Chains of Honor – Resists &amp; +2 Skills
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Gloves: Rare/Crafted 2 Java Skills + 20% IAS Gloves</p>
                    <p className="text-muted-foreground">
                      Alternative: Laying of Hands – Fire Resist &amp; 20% IAS
                    </p>
                    <p>Belt: Razortail</p>
                    <p className="text-muted-foreground">
                      Alternative: Thundergod’s Vigor – Extra Lightning Res &amp; Absorb
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Boots: Sandstorm Trek</p>
                    <p className="text-muted-foreground">
                      Alternative: War Traveler – Magic Find &amp; Extra Damage
                    </p>
                    <p>Rings: Ravenfrost &amp; Stone of Jordan (SOJ)</p>
                    <p className="text-muted-foreground">Alternative: 2x Ravenfrost</p>
                  </div>
                  <div className="space-y-2">
                    <p>Amulet: Mara&apos;s Kaleidoscope</p>
                    <p className="text-muted-foreground">
                      Alternative: Highlord’s Wrath – IAS &amp; Lightning Damage
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
                  <p className="text-foreground">Type: Act 2 Might Mercenary (Best Damage Boost)</p>
                  <p className="text-foreground">
                    &lt;b&gt;Helmet: Andariel&apos;s Visage&lt;/b&gt;
                  </p>
                  <p className="text-muted-foreground">Alternative: Crown of Thieves</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    Weapon: Infinity – Lowers Enemy Lightning Resist, Boosts Damage
                  </p>
                  <p className="text-muted-foreground">Alternative: Insight&nbsp;</p>
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
                  <p className="text-muted-foreground">Javelin &amp; Spear Skillers</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Unique Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">
                    Hellfire Torch (Amazon Bonus), Annihilus (Stats &amp; Resists), Gheed&apos;s
                    Fortune, Light Sunder
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Small Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">Faster Hit Recovery, Resists, Magic Find</p>
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <h2 className="text-2xl font-heading text-primary">Skill Distribution</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    &lt;b&gt;Primary Skills (Max These First in Order):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Lightning Fury - Max</p>
                  <p className="text-foreground">Charged Strike - Max</p>
                  <p className="text-foreground">Lightning Bolt - Max</p>
                  <p className="text-foreground">Power Strike - Max</p>
                  <p className="text-foreground" />
                  <p className="text-foreground">&lt;div&gt;&lt;br&gt;&lt;/div&gt;</p>
                  <p className="text-foreground">
                    &lt;b&gt;Support Skills (Put 1 Point Each):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Pierce - 1 Point</p>
                  <p className="text-foreground">Valkyrie - 1 Point</p>
                  <p className="text-foreground">Dodge - 1 Point</p>
                  <p className="text-foreground">Evade - 1 Point</p>
                  <p className="text-foreground">Avoid - 1 Point</p>
                  <p className="text-foreground">Decoy - 1 Point</p>
                  <p className="text-foreground">&lt;br&gt;</p>
                </div>
              </TabsContent>
              <TabsContent value="attributes">
                <h2 className="text-2xl font-heading text-primary">Attribute Points</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground" />
                  <p className="text-muted-foreground">Strength: Enough for gear</p>
                  <p className="text-muted-foreground">
                    Dexterity: Enough for gear (or max block if using a block setup)
                  </p>
                  <p className="text-muted-foreground">
                    Vitality: Dump the rest here (Main Focus)&lt;br&gt;
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
                    Faster Cast Rate (FCR) (For Enigma)
                  </p>
                  <p className="text-muted-foreground border-foreground">32% FCR (Basic)</p>
                  <p className="text-muted-foreground border-foreground">52% FCR (Recommended)</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="border-foreground text-foreground">
                    &lt;b&gt;Faster Hit Recovery (FHR):&lt;/b&gt;
                  </p>
                  <p className="text-muted-foreground border-foreground">20% (Basic)</p>
                  <p className="text-muted-foreground border-foreground">32% (Optimal)</p>
                  <p className="border-foreground text-foreground">
                    Increased Attack Speed (IAS) (Javelin Throwing Speed)
                  </p>
                  <p className="text-muted-foreground border-foreground">55% IAS (Optimal)</p>
                  <p className="text-muted-foreground border-foreground">
                    95% IAS (Most Efficient)
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="playstyle">
                <h2 className="text-2xl font-heading text-primary">Playstyle</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    Pro Tip: Always have Mana Potions – Lightning Fury can drain mana
                    fast!&lt;br&gt;
                  </p>
                  <p className="text-foreground">
                    Use Charged Strike on Bosses – Melts Baal, Diablo, and Ubers
                  </p>
                  <p className="text-foreground">
                    Stay Mobile with Enigma – Teleport to Position Minions &amp; Avoid Damage
                  </p>
                  <p className="text-foreground">
                    Use Decoy &amp; Valkyrie for Extra Defense – Helps You Stay Safe
                  </p>
                  <p className="text-foreground">
                    Stack Pierce (Razortail + Pierce Skill) – More Lightning Chains = More Damage
                  </p>
                  <p className="text-foreground">Maintain Cannot Be Frozen effect at all times </p>
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
