import Image from "next/image";
import { Settings, Sword, Shield, Backpack, Sparkles, Star, Gauge, Gamepad2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function Section11() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <div className="container mx-auto px-4 py-16 text-center block">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Whirldwind Guide
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
                      Weapons: Dual Grief (Phase Blade) – Best for Damage
                    </p>
                    <p className="text-muted-foreground">
                      Alternative: Grief + Beast (Fanaticism Aura &amp; Faster Hits)&lt;br&gt;
                    </p>
                    <p>Shield: None</p>
                    <p className="text-muted-foreground">Alternative: None</p>
                  </div>
                  <div className="space-y-2">
                    <p>Helmet: Arreat&apos;s Face</p>
                    <p className="text-muted-foreground">
                      Alternative: Guillaume’s Face (For Crushing Blow)
                    </p>
                    <p>Armor: Enigma</p>
                    <p className="text-muted-foreground">Alternative: Fortitude</p>
                  </div>
                  <div className="space-y-2">
                    <p>Gloves: Dracul&apos;s Grasp</p>
                    <p className="text-muted-foreground">
                      Alternative: Steelrend (For More Damage)&lt;br&gt;
                    </p>
                    <p>Belt: Verdungo&apos;s Hearty Cord</p>
                    <p className="text-muted-foreground">Alternative: String of Ears</p>
                  </div>
                  <div className="space-y-2">
                    <p>Boots: Gore Riders</p>
                    <p className="text-muted-foreground">Alternative: None</p>
                    <p>Rings: Bul-Kathos&apos; + Ravenfrost</p>
                    <p className="text-muted-foreground">Alternative: 2x Ravenfrost</p>
                  </div>
                  <div className="space-y-2">
                    <p>Amulet: Highlord&apos;s Wrath</p>
                    <p className="text-muted-foreground">Alternative: None</p>
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
                  <p className="text-muted-foreground">Combat Skillers / Max Damage</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Unique Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">Hellfire Torch (Barbarian), Annihilus</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-primary-foreground">&lt;b&gt;Small Charms&lt;/b&gt;</p>
                  <p className="text-muted-foreground">Life, Attack Rating, Faster Hit Recovery</p>
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <h2 className="text-2xl font-heading text-primary">Skill Distribution</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    &lt;b&gt;Primary Skills (Max These First in Order):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Whirlwind – Max</p>
                  <p className="text-foreground">Battle Orders - Max</p>
                  <p className="text-foreground">Sword Mastery - Max</p>
                  <p className="text-foreground">
                    Sword/Axe/Mace Mastery – Max (Choose Based on Weapon Type)
                  </p>
                  <p className="text-foreground">Shout – Max</p>
                  <p className="text-foreground">Iron Skin / Natural Resistance – Extra Points</p>
                  <p className="text-foreground" />
                  <p className="text-foreground">&lt;div&gt;&lt;br&gt;&lt;/div&gt;</p>
                  <p className="text-foreground">
                    &lt;b&gt;Support Skills (Put 1 Point Each):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Battle Command - 1 Point</p>
                  <p className="text-foreground">Increased Speed - 1 Point</p>
                  <p className="text-foreground">Iron Skin &amp; Natural Resistance - 1 Point</p>
                  <p className="text-foreground">Find Item - 1 Point</p>
                  <p className="text-foreground">Berserk - 1 Point</p>
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
                    &lt;b&gt;Faster Hit Recovery (FHR):&lt;/b&gt;
                  </p>
                  <p className="text-muted-foreground border-foreground">48% FCR (Basic)</p>
                  <p className="text-muted-foreground border-foreground">86% (Optimal)</p>
                  <p className="border-foreground text-foreground">
                    Increased Attack Speed (IAS) (With Burst of Speed)
                  </p>
                  <p className="text-muted-foreground border-foreground">34% for Grief + Beast</p>
                  <p className="text-muted-foreground border-foreground">69% for Dual Grief</p>
                  <p className="border-foreground text-foreground">Whirlwind Mechanics:</p>
                  <p className="text-muted-foreground border-foreground">
                    Frames Per Attack (FPA) Capped at -34% IAS on Weapon&lt;br&gt;
                  </p>
                  <p className="text-muted-foreground border-foreground">
                    Grief + Beast (Best Combo) for Fastest Hits
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="playstyle">
                <h2 className="text-2xl font-heading text-primary">Playstyle</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    Whirlwind through enemies non-stop – Keep moving to avoid damage
                  </p>
                  <p className="text-foreground">
                    {" "}
                    Battle Orders before every fight – Doubles your Life &amp; Mana
                  </p>
                  <p className="text-foreground">
                    Use Berserk for Physical Immunes – Quick magic damage output
                  </p>
                  <p className="text-foreground">
                    Hork corpses with Find Item – Extra loot drops in Travincal &amp; Chaos Runs
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    Use War Cry when needed – Stuns enemies for safety&lt;br&gt;
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground font-bold">Pro Tip:</p>
                  <p className="text-foreground">
                    Don’t click on enemies—just hold Whirlwind and move through them!&lt;br&gt;
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
