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
    <div className="mx-auto max-w-7xl">
      <div className="w-full bg-background px-4 py-8">
        <h2 className="mb-8 text-center font-heading text-3xl">Guides by Class</h2>
        <NavigationMenu className="mx-auto max-w-4xl">
          <NavigationMenuList className="flex flex-wrap justify-center gap-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-card hover:bg-accent">
                Barbarian
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-card">
                <div className="w-48 p-2">
                  <NavigationMenuLink asChild>
                    <a href="/ww-barb" className="block rounded-md p-2 hover:bg-accent">
                      Whirlwind Barbarian
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/frenzy-barb" className="block rounded-md p-2 hover:bg-accent">
                      Frenzy Barbarian
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/hork-barb" className="block rounded-md p-2 hover:bg-accent">
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
                    <a href="/bow-amazon" className="block rounded-md p-2 hover:bg-accent">
                      Bow Amazon
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/javazon" className="block rounded-md p-2 hover:bg-accent">
                      Javazon
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/icemalden-amazon" className="block rounded-md p-2 hover:bg-accent">
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
                    <a href="/trap-sin" className="block rounded-md p-2 hover:bg-accent">
                      Trap Assassin
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/mosaic-sin" className="block rounded-md p-2 hover:bg-accent">
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
                    <a href="/foh-paladin" className="block rounded-md p-2 hover:bg-accent">
                      FoH Paladin
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/smiter-paladin" className="block rounded-md p-2 hover:bg-accent">
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
                    <a href="/blizzard-sorc" className="block rounded-md p-2 hover:bg-accent">
                      Blizzard Sorceress
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/nova-sorc" className="block rounded-md p-2 hover:bg-accent">
                      Nova Sorceress
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/lightning-sorc" className="block rounded-md p-2 hover:bg-accent">
                      Lightning Sorceress
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/fireball-sorc" className="block rounded-md p-2 hover:bg-accent">
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
                    <a href="/ele-druid" className="block rounded-md p-2 hover:bg-accent">
                      Elemental Druid
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/fissure-druid" className="block rounded-md p-2 hover:bg-accent">
                      Fissure Druid
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/fury-druid" className="block rounded-md p-2 hover:bg-accent">
                      Fury Druid
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/summon-druid" className="block rounded-md p-2 hover:bg-accent">
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
                    <a href="/bone-necro" className="block rounded-md p-2 hover:bg-accent">
                      Bone Necromancer
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/summon-necro" className="block rounded-md p-2 hover:bg-accent">
                      Summon Necromancer
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/poison-necro" className="block rounded-md p-2 hover:bg-accent">
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
