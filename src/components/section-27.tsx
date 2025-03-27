import Image from "next/image";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function Section27() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background bg-opacity-95 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="font-heading text-3xl">Welcome to Clakk</CardTitle>
          <CardDescription className="text-muted-foreground">
            Sign in to your account or create a new one
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="mb-6 flex justify-center space-x-2">
              <Button variant="outline" className="w-24">
                Login
              </Button>
              <Button variant="ghost" className="w-24">
                Sign Up
              </Button>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" />
              </div>
              <div className="flex items-center justify-between text-sm">
                <Button variant="link" className="h-auto p-0 text-muted-foreground">
                  Forgot Password?
                </Button>
              </div>
              <Button className="w-full">Login</Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline">
                  <Image
                    alt="Google"
                    src="/images/placeholder.png"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Google
                </Button>
                <Button variant="outline">
                  <Image
                    alt="Discord"
                    src="/images/placeholder.png"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Discord
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
