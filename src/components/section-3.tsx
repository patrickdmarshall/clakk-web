import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export function Section3() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full bg-background py-8 px-4">
        <h2 className="text-3xl font-heading text-center mb-8">Guides by Class</h2>
        <NavigationMenu className="max-w-4xl mx-auto">
          <NavigationMenuList className="flex flex-wrap justify-center gap-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-card hover:bg-accent">
                Barbarian
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-card">
                <div className="w-48 p-2">
                  <NavigationMenuLink asChild>
                    <a href="/ww-barb" className="block p-2 hover:bg-accent rounded-md">
                      Whirlwind Barbarian
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/frenzy-barb" className="block p-2 hover:bg-accent rounded-md">
                      Frenzy Barbarian
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/hork-barb" className="block p-2 hover:bg-accent rounded-md">
                      Horking Barbarian
                    </a>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-card hover:bg-accent">
                Amazon
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-card">
                <div className="w-48 p-2">
                  <NavigationMenuLink asChild>
                    <a href="/bow-amazon" className="block p-2 hover:bg-accent rounded-md">
                      Bow Amazon
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/javazon" className="block p-2 hover:bg-accent rounded-md">
                      Javazon
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/icemalden-amazon" className="block p-2 hover:bg-accent rounded-md">
                      Ice Maiden Amazon
                    </a>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-card hover:bg-accent">
                Assassin
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-card">
                <div className="w-48 p-2">
                  <NavigationMenuLink asChild>
                    <a href="/trap-sin" className="block p-2 hover:bg-accent rounded-md">
                      Trap Assassin
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/mosaic-sin" className="block p-2 hover:bg-accent rounded-md">
                      Mosaic Assassin
                    </a>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-card hover:bg-accent">
                Paladin
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-card">
                <div className="w-48 p-2">
                  <NavigationMenuLink asChild>
                    <a href="/foh-paladin" className="block p-2 hover:bg-accent rounded-md">
                      FoH Paladin
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/smiter-paladin" className="block p-2 hover:bg-accent rounded-md">
                      Smiter Paladin
                    </a>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-card hover:bg-accent">
                Sorceress
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-card">
                <div className="w-48 p-2">
                  <NavigationMenuLink asChild>
                    <a href="/blizzard-sorc" className="block p-2 hover:bg-accent rounded-md">
                      Blizzard Sorceress
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/nova-sorc" className="block p-2 hover:bg-accent rounded-md">
                      Nova Sorceress
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/lightning-sorc" className="block p-2 hover:bg-accent rounded-md">
                      Lightning Sorceress
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/fireball-sorc" className="block p-2 hover:bg-accent rounded-md">
                      Fireball Sorceress
                    </a>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-card hover:bg-accent">
                Druid
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-card">
                <div className="w-48 p-2">
                  <NavigationMenuLink asChild>
                    <a href="/ele-druid" className="block p-2 hover:bg-accent rounded-md">
                      Elemental Druid
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/fissure-druid" className="block p-2 hover:bg-accent rounded-md">
                      Fissure Druid
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/fury-druid" className="block p-2 hover:bg-accent rounded-md">
                      Fury Druid
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/summon-druid" className="block p-2 hover:bg-accent rounded-md">
                      Summon Druid
                    </a>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-card hover:bg-accent">
                Necromancer
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-card">
                <div className="w-48 p-2">
                  <NavigationMenuLink asChild>
                    <a href="/bone-necro" className="block p-2 hover:bg-accent rounded-md">
                      Bone Necromancer
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/summon-necro" className="block p-2 hover:bg-accent rounded-md">
                      Summon Necromancer
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/poison-necro" className="block p-2 hover:bg-accent rounded-md">
                      Poison Necromancer
                    </a>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
