import { LogOut, Monitor, Gamepad2, Gamepad, Lock, Clock, Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

export function Section26() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-4xl font-bold">Welcome back, Chad!</h1>
          <p className="mt-2 text-muted-foreground">Your Clakk Experience Awaits</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-secondary/20 px-4 py-2">
            <p className="text-sm text-muted-foreground">Reward Points</p>
            <p className="font-bold">2,500 pts</p>
          </div>
          <Button size="sm" variant="outline">
            <LogOut className="mr-2 size-4" />
            Logout
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Select Your Games</CardTitle>
            <CardDescription>
              Choose your preferred games to customize your experience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4 rounded-lg border bg-card p-4 transition-colors hover:bg-accent/5">
              <div className="flex-1">
                <h3 className="font-semibold">Diablo II: Resurrected</h3>
                <p className="text-sm text-muted-foreground">Classic ARPG remastered</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center space-x-4 rounded-lg border bg-card p-4 transition-colors hover:bg-accent/5">
              <div className="flex-1">
                <h3 className="font-semibold">Project Diablo II</h3>
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center space-x-4 rounded-lg border bg-card p-4 transition-colors hover:bg-accent/5">
              <div className="flex-1">
                <h3 className="font-semibold">Path of Exile 2</h3>
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center space-x-4 rounded-lg border bg-card p-4 transition-colors hover:bg-accent/5">
              <div className="flex-1">
                <h3 className="font-semibold">Runescape</h3>
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Game Settings</CardTitle>
            <CardDescription>Configure your D2R preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Platform</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button size="sm" variant="outline">
                    <Monitor className="mr-2 size-4" />
                    PC
                  </Button>
                  <Button size="sm" variant="outline">
                    <Gamepad2 className="mr-2 size-4" />
                    Console
                  </Button>
                  <Button size="sm" variant="outline">
                    <Gamepad className="mr-2 size-4" />
                    Switch
                  </Button>
                  <Button size="sm" variant="outline">
                    <Gamepad className="mr-2 size-4" />
                    Xbox
                  </Button>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Label>Game Mode</Label>
              <RadioGroup defaultValue="softcore-ladder">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="softcore-ladder" value="softcore-ladder" />
                  <Label htmlFor="softcore-ladder">Softcore Ladder</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="softcore-nonladder" value="softcore-nonladder" />
                  <Label htmlFor="softcore-nonladder">Softcore Non-Ladder</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="hardcore-ladder" value="hardcore-ladder" />
                  <Label htmlFor="hardcore-ladder">Hardcore Ladder</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-4">
              <Label>Widget Preferences</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Switch id="terror-zones" />
                  <Label htmlFor="terror-zones">Terror Zones</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="dclone" />
                  <Label htmlFor="dclone">D Clone Tracker</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="ladder" />
                  <Label htmlFor="ladder">Current Ladder Season</Label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Platform Tags</CardTitle>
            <CardDescription>Link your gaming accounts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="battletag">Battle.net Battletag</Label>
              <Input id="battletag" placeholder="Enter your Battletag" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="psn">PSN Gamer Tag</Label>
              <Input id="psn" placeholder="Enter your PSN ID" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="xbox">Xbox Gamer Tag</Label>
              <Input id="xbox" placeholder="Enter your Xbox ID" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="switch">Nintendo Switch Friend Code</Label>
              <Input id="switch" placeholder="Enter your Friend Code" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>Manage your account preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-secondary/20 p-4">
              <div>
                <p className="font-medium">Email Address</p>
                <p className="text-sm text-muted-foreground">user@example.com</p>
              </div>
              <Button size="sm" variant="outline">
                Edit
              </Button>
            </div>
            <Button variant="outline" className="w-full justify-between">
              Change Password
              <Lock className="size-4" />
            </Button>
            <Button variant="outline" className="w-full justify-between">
              Order History
              <Clock className="size-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-end">
        <Button>
          <Save className="mr-2 size-4" />
          Save Changes
        </Button>
      </div>
    </div>
  );
}
