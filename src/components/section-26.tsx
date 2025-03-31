import Image from "next/image";
import { Settings, Sword, Shield, Backpack, Sparkles, Star, Gauge, Gamepad2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function Section26() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <div className="container mx-auto px-4 py-16 text-center block">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Summon Druid
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
                    <p className="border-primary-foreground">
                      Weapon: Beast (Rune Word in a Scepter or Axe)
                    </p>
                    <p className="text-muted-foreground">
                      Alternative: Hoto (If Teleporting More), Earthshaker (For Extra Summon
                      Skills)&lt;br&gt;
                    </p>
                    <p>Shield: Spirit Monarch</p>
                    <p className="text-muted-foreground">
                      Alternative: Phoenix (For Redemption Aura &amp; Firestorm Damage)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Helmet: Jalal&apos;s Mane</p>
                    <p className="text-muted-foreground">
                      Alternative: Ravenlore (For Fire Resist &amp; Skills)
                    </p>
                    <p>Armor: Enigma</p>
                    <p className="text-muted-foreground">
                      Alternative: Chains of Honor (For More Resistances)&lt;br&gt;
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Gloves: Trang-Oul&apos;s</p>
                    <p className="text-muted-foreground">
                      Alternative: Magefist (More Mana &amp; FCR)
                    </p>
                    <p>Belt: Arachnid Mesh</p>
                    <p className="text-muted-foreground">
                      Alternative: Verdungo’s (For Life &amp; DR)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>Boots: Aldur&apos;s Advance</p>
                    <p className="text-muted-foreground">
                      Alternative: Sandstorm Trek (For Poison Resist &amp; Strength)
                    </p>
                    <p>Rings: Ravenfrost + Bul-Kathos&apos;</p>
                    <p className="text-muted-foreground">Alternative: 1x SOJ + Ravenfrost</p>
                  </div>
                  <div className="space-y-2">
                    <p>Amulet: Mara’s Kaleidoscope</p>
                    <p className="text-muted-foreground">
                      Alternative: Highlord’s Wrath (More Attack Speed for Minions)
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
                  <p className="text-muted-foreground">Druid Summoning Skillers</p>
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
                <h2 className="text-2xl font-heading text-primary">Skill Distribution</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    &lt;b&gt;Primary Skills (Max These First in Order):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Summon Grizzly - Max</p>
                  <p className="text-foreground">Dire Wolves - Max</p>
                  <p className="text-foreground">Heart of Wolverines - Max</p>
                  <p className="text-foreground" />
                  <p className="text-foreground">&lt;div&gt;&lt;br&gt;&lt;/div&gt;</p>
                  <p className="text-foreground">
                    &lt;b&gt;Support Skills (Put 1 Point Each):&lt;/b&gt;
                  </p>
                  <p className="text-foreground">Feral Rage - 1 Point</p>
                  <p className="text-foreground">Rabies - 1 Point</p>
                  <p className="text-foreground">Carrion Vine - 1 Point</p>
                  <p className="text-foreground">Cyclone Armor - 1 Point</p>
                  <p className="text-foreground">
                    Werewolf / Werebear - 1 Point (Suggested, not Required)
                  </p>
                  <p className="text-foreground">&lt;br&gt;</p>
                </div>
              </TabsContent>
              <TabsContent value="attributes">
                <h2 className="text-2xl font-heading text-primary">Attribute Points</h2>
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
                <h2 className="text-2xl font-heading text-primary">Breakpoints</h2>
                <div className="mt-4 space-y-2">
                  <p className="border-foreground text-foreground">
                    Faster Cast Rate (FCR) (For Teleporting with Enigma Setup):
                  </p>
                  <p className="text-muted-foreground border-foreground">
                    68% (Good for Teleporting)
                  </p>
                  <p className="text-muted-foreground border-foreground">
                    99% (Ideal for Speedy Teleporting in Chaos/Baal Runs)
                  </p>
                  <p className="border-foreground text-foreground">
                    &lt;b&gt;Faster Hit Recovery (FHR):&lt;/b&gt;
                  </p>
                  <p className="text-muted-foreground border-foreground">20% (Basic)</p>
                  <p className="text-muted-foreground border-foreground">42% (Suggested)</p>
                  <p className="border-foreground text-foreground font-bold">
                    Summon Minions Do Not Have Breakpoints, but Faster Summoning Helps!&lt;br&gt;
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="playstyle">
                <h2 className="text-2xl font-heading text-primary">Playstyle</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    Summon Your Army First – Keep Your Grizzly &amp; Wolves Active&lt;br&gt;
                  </p>
                  <p className="text-foreground">
                    Cast Heart of Wolverine (or Oak Sage) – Extra Damage or Life Boost
                  </p>
                  <p className="text-foreground">
                    Teleport (If Using Enigma) to Keep Minions with You&lt;br&gt;
                  </p>
                  <p className="text-foreground">
                    Use Ravens to Blind Enemies – Helps Against Dangerous Mobs
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground">
                    Let Minions Do the Fighting – Stay Behind &amp; Cast Cyclone Armor for Defense
                  </p>
                  <p className="text-foreground">
                    Recast Minions As Needed – They Tank and Keep You Safe
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground font-bold">Pro Tip:</p>
                  <p className="text-foreground">
                    Teleporting with Enigma keeps your summons grouped and aggressive!&lt;br&gt;This
                    build is perfect for safe, steady damage, with your minions doing the work while
                    you support them. It&apos;s great for Chaos Sanctuary, Baal Runs, and solo play
                    where staying safe while dealing consistent damage is key.
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
