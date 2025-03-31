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
            Hork Guide
          </h2>
          <Image alt="Image" src="/images/barb.jpg" width={500} height={500} />
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
                      Weapons: Grief (Phase Blade) + Beast (Berserker Axe)
                    </p>
                    <p className="text-muted-foreground">
                      Alternative: Dual Oath, Last Wish + Grief, or Heart of the Oak (For Extra FCR
                      on War Cry Build)&lt;br&gt;&lt;br&gt;
                    </p>
                    <p>Shield: None</p>
                    <p className="text-muted-foreground">Alternative: None</p>
                  </div>
                  <div className="space-y-2">
                    <p>Helmet: Crown of Thieves</p>
                    <p className="text-muted-foreground">
                      Alternative: Arreat’s Face (Skills &amp; Resistances)
                    </p>
                    <p>Armor: Enigma</p>
                    <p className="text-muted-foreground">
                      Alternative: Wealth Runeword (For Extra Gold Find)&lt;br&gt;
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Gloves: Chance Guards</p>
                    <p className="text-muted-foreground">
                      Alternative: Dracul’s Grasp (For Life Tap)
                    </p>
                    <p>Belt: Goldwrap</p>
                    <p className="text-muted-foreground">
                      Alternative: Verdungo’s Hearty Cord (For Survivability)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Boots: War Traveler</p>
                    <p className="text-muted-foreground">
                      Alternative: Infernostride (More Gold Find)
                    </p>
                    <p>Rings: 2x Dwarfstar</p>
                    <p className="text-muted-foreground">
                      Alternative: Swap for 1x Ravenfrost (Not suggested)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Amulet: Highlord&apos;s Wrath</p>
                    <p className="text-muted-foreground">
                      Alternative: Metalgrid (For Extra Resistances)
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
                  <p className="text-foreground">Coming Soon</p>
                </div>
                <div className="mt-4 space-y-2" />
                <div className="mt-4 space-y-2" />
              </TabsContent>
              <TabsContent value="inventory">
                <h2 className="text-2xl font-heading text-primary">Inventory</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Grand Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">War Cry Skillers</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Unique Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">
                    Hellfire Torch (Barbarian), Annihilus, Gheed’s Fortune
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Small Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">Gold Find, Magic Find, Resistances</p>
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <h2 className="text-2xl font-heading text-primary">Skill Distribution</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    &lt;b&gt;Primary Skills (Max These First in Order):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Find Item - Max</p>
                  <p className="text-foreground">Battle Orders - Max</p>
                  <p className="text-foreground">Shout - Max</p>
                  <p className="text-foreground">
                    Sword/Axe/Mace Mastery – Max (Choose Based on Weapon Type)
                  </p>
                  <p className="text-foreground">
                    5. Whirlwind or Berserk – Max (Main Damage Option)
                  </p>
                  <p className="text-foreground" />
                  <p className="text-foreground">&lt;div&gt;&lt;br&gt;&lt;/div&gt;</p>
                  <p className="text-foreground">
                    &lt;b&gt;Support Skills (Put 1 Point Each):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Battle Command - 1 Point</p>
                  <p className="text-foreground">Increased Speed - 1 Point</p>
                  <p className="text-foreground">Iron Skin &amp; Natural Resistance - 1 Point</p>
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
                  <p className="text-muted-foreground border-foreground">37% (Basic)</p>
                  <p className="text-muted-foreground border-foreground">63% (Optimal)</p>
                  <p className="border-foreground text-foreground">
                    &lt;b&gt;Faster Hit Recovery (FHR):&lt;/b&gt;
                  </p>
                  <p className="text-muted-foreground border-foreground">48% FCR (Basic)</p>
                  <p className="text-muted-foreground border-foreground">86% (Optimal)</p>
                </div>
              </TabsContent>
              <TabsContent value="playstyle">
                <h2 className="text-2xl font-heading text-primary">Playstyle</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    Teleport to Travincal or Eldritch quickly – Engage enemy packs fast
                  </p>
                  <p className="text-foreground">
                    Kill enemies efficiently (Whirlwind or Berserk preferred)
                  </p>
                  <p className="text-foreground">
                    Use Find Item on corpses – Double your loot and gold drops
                  </p>
                  <p className="text-foreground">Use War Cry to stun enemies before horking</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    {" "}
                    Ideal for Gold Find &amp; Gambling in Hell Difficulty&lt;br&gt;
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground font-bold">Pro Tip:</p>
                  <p className="text-foreground">
                    Horking works best on Council Members in Travincal—they drop tons of gold and
                    items!&lt;br&gt;
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
