import Image from "next/image";
import { Clock, Cpu, Gamepad, Users, MessageSquare, Star, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

export function Hero2() {
  return (
    <section className="bg-gradient-to-b from-background via-secondary/20 via-70% pb-28 pt-20">
      <div className="container flex flex-col items-center gap-8 text-[#FFFFFF] sm:gap-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center font-heading text-3xl font-bold md:text-4xl">
            Choose Your Adventure
          </h2>
          <p className="mb-12 text-center text-muted-foreground">
            Select from our collection of legendary games
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="group relative overflow-hidden rounded-lg border bg-card transition-colors hover:border-primary">
              <div className="absolute inset-0" />
              <Image
                alt="Diablo II: Resurrected"
                src="/images/d2r.jpg"
                width={400}
                height={500}
                className="h-[300px] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="mb-2 font-heading text-xl font-bold text-white">
                  Diablo II: Resurrected
                </h3>
                <Button asChild variant="secondary" className="w-full">
                  <a href="/shop">Enter Shop</a>
                </Button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-card/50 opacity-75">
              <div className="absolute inset-0 bg-black/70" />
              <Image
                alt="Project Diablo II"
                src="/images/pd2.jpg"
                width={400}
                height={500}
                className="h-[300px] w-full object-cover grayscale"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="mb-2 font-heading text-xl font-bold text-white">
                  Project Diablo II
                </h3>
                <Button variant="secondary" disabled className="w-full">
                  Coming Soon 🔒
                </Button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-card/50 opacity-75">
              <div className="absolute inset-0 bg-black/70" />
              <Image
                alt="Path of Exile 2"
                src="/images/poe2.avif"
                width={400}
                height={500}
                className="h-[300px] w-full object-cover grayscale"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="mb-2 font-heading text-xl font-bold text-white">Path of Exile 2</h3>
                <Button variant="secondary" disabled className="w-full">
                  Coming Soon 🔒
                </Button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-card/50 opacity-75">
              <div className="absolute inset-0 bg-black/70" />
              <Image
                alt="Runescape"
                src="/images/runescape.jpg"
                width={400}
                height={500}
                className="h-[300px] w-full object-cover grayscale"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="mb-2 font-heading text-xl font-bold text-white">Runescape</h3>
                <Button variant="secondary" disabled className="w-full">
                  Coming Soon 🔒
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-14 max-w-5xl" />
      <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
        <div className="flex flex-col gap-3">
          <span className="text-center font-bold uppercase text-primary">Features</span>
          <h2 className="text-balance text-center font-heading text-[16px] font-semibold tracking-tight text-[#FFFFFF] sm:text-4xl">
            Why choose us?
          </h2>
        </div>
        <section className="w-full py-16">
          <div className="container border-accent px-4 md:px-6">
            <Carousel className="mx-auto w-full max-w-5xl">
              <CarouselContent>
                <CarouselItem className="md:basis-1/1">
                  <Card className="border-none shadow-none">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <Clock className="mb-4 size-12 text-primary" />
                      <h3 className="mb-2 font-heading text-2xl font-bold">
                        20+ Years of Gaming Experience
                      </h3>
                      <p className="text-muted-foreground">
                        We&apos;ve been part of the gaming world for over two decades—you&apos;re in
                        good hands.
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/1">
                  <Card className="border-none shadow-none">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <Cpu className="mb-4 size-12 text-primary" />
                      <h3 className="mb-2 font-heading text-2xl font-bold">
                        Modern Software & Solutions
                      </h3>
                      <p className="text-muted-foreground">
                        We use the latest tech to ensure fast, secure, and reliable service.
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/1">
                  <Card className="border-none shadow-none">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <Gamepad className="mb-4 size-12 text-primary" />
                      <h3 className="mb-2 font-heading text-2xl font-bold">
                        Built by Gamers, for Gamers
                      </h3>
                      <p className="text-muted-foreground">
                        We understand what players really want—because we are players too.
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/1">
                  <Card className="border-none shadow-none">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <Users className="mb-4 size-12 text-primary" />
                      <h3 className="mb-2 font-heading text-2xl font-bold">
                        Community-First Approach
                      </h3>
                      <p className="text-muted-foreground">
                        Our players come first. Everything we build is for the benefit of the
                        community.
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/1">
                  <Card className="border-none shadow-none">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <MessageSquare className="mb-4 size-12 text-primary" />
                      <h3 className="mb-2 font-heading text-2xl font-bold">Active Discord</h3>
                      <p className="text-muted-foreground">
                        Join our growing Discord server to chat, get updates, and connect with other
                        gamers.
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/1">
                  <Card className="border-none shadow-none">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <Star className="mb-4 size-12 text-primary" />
                      <h3 className="mb-2 font-heading text-2xl font-bold">
                        400+ Trustpilot Reviews
                      </h3>
                      <p className="text-muted-foreground">
                        Don&apos;t just take our word for it—hundreds of real players have rated us
                        5 stars.
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <div className="flex w-full items-center justify-center gap-2 pt-4">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </section>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-[16px] font-bold text-[#FFFFFF] md:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#FFFFFF]">
            Discover our simple three-step process to transform your experience
          </p>
        </div>
        <div className="space-y-24">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="w-full md:w-1/2">
              <Image
                alt="Step 1"
                src="/images/necromancy-wallpapers-v0-z3a8p7qji09b1.png"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="space-y-4">
                <Badge variant="secondary">Step 1</Badge>
                <h3 className="font-heading text-2xl font-semibold text-[#FFFFFF]">
                  Select a Title
                </h3>
                <p className="text-[#FFFFFF]">
                  Begin your journey by selecting from one our titles above, each title has
                  it&apos;s own categories, inventory, and feautures to elevate your experience.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-12 md:flex-row-reverse">
            <div className="w-full md:w-1/2">
              <Image
                alt="Step 2"
                src="/images/dd'.jpeg"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="space-y-4">
                <Badge variant="secondary">Step 2</Badge>
                <h3 className="font-heading text-2xl font-semibold text-[#FFFFFF]">
                  Customize Your Experience
                </h3>
                <p className="text-[#FFFFFF]">
                  Tailor the platform to your specific needs with our intuitive customization tools.
                  Set your preferences and watch as the system adapts to your unique requirements
                  once you create an account.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="w-full md:w-1/2">
              <Image
                alt="Step 3"
                src="/images/poe-2-wallpapers-v0-xbc2fy2flb3e1.jpg"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="space-y-4">
                <Badge variant="secondary">Step 3</Badge>
                <h3 className="font-heading text-2xl font-semibold text-[#FFFFFF]">
                  Shop with Ease
                </h3>
                <p className="text-[#FFFFFF]">
                  With everything set up, you&apos;re ready to begin. Our powerful tools and
                  features work seamlessly together to help you reach your goals faster and more
                  efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
        <div className="flex flex-col gap-3">
          <span className="text-center font-bold uppercase text-primary">Faq</span>
          <h2 className="text-balance text-center font-heading text-3xl font-semibold tracking-tight text-[#FFFFFF] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <section className="w-full py-12">
                <section className="container px-4 md:px-6">
                  <div className="mx-auto max-w-3xl space-y-8">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="delivery">
                        <AccordionTrigger className="text-lg font-semibold">
                          How is my order delivered?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          <p>You&apos;ll get two emails:</p>
                          <ul className="mt-2 list-disc pl-6">
                            <li>A processing email</li>
                            <li>An item delivery form – please fill this out!</li>
                          </ul>
                          <p className="mt-2">
                            Submitting the form notifies us that you&apos;re ready, and helps us
                            deliver faster.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="platforms">
                        <AccordionTrigger className="text-lg font-semibold">
                          Do you deliver to any console or PC?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          Yes! We deliver to all consoles (Xbox, Nintendo Switch, PlayStation) and
                          PC. Just choose the correct delivery platform at checkout and in the Item
                          Delivery Form.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="24-7-delivery">
                        <AccordionTrigger className="text-lg font-semibold">
                          Is 24/7 delivery available?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          Delivery depends on realm, time, and queue. During offline hours (11 PM–8
                          AM CST), orders are queued and delivered once we reopen. Resurrected
                          orders are usually delivered in 1–3 hours.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="order-time">
                        <AccordionTrigger className="text-lg font-semibold">
                          Can I place an order at any time?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          Yes, orders can be placed 24/7. Just note: during offline hours, we
                          process them when we reopen. Live chat is disabled during this time.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="price-match">
                        <AccordionTrigger className="text-lg font-semibold">
                          Do you price match?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          No, we don&apos;t price match. We work hard to stay competitive, but every
                          vendor has different perks.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="payment">
                        <AccordionTrigger className="text-lg font-semibold">
                          What payment methods are accepted?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          We accept credit and debit cards. All payments are SSL encrypted and 100%
                          secure. Minimum order is $2.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="verification">
                        <AccordionTrigger className="text-lg font-semibold">
                          What is verification, and when is it needed?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          <p>
                            Verification confirms your identity. You&apos;ll need to submit a photo
                            of your driver&apos;s license + payment method for:
                          </p>
                          <ul className="mt-2 list-disc pl-6">
                            <li>Orders over $500</li>
                            <li>Multiple orders totaling $500+ within 24 hrs</li>
                            <li>Use of multiple payment methods</li>
                            <li>VPN usage</li>
                          </ul>
                          <p className="mt-2">This protects against fraud and keeps you safe!</p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="account">
                        <AccordionTrigger className="text-lg font-semibold">
                          Do I need an account to order?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          <p>
                            Yes—with perks! You can checkout as a guest, but having an account gives
                            you:
                          </p>
                          <ul className="mt-2 list-disc pl-6">
                            <li>Order history</li>
                            <li>Sale & news updates</li>
                            <li>Access to Honor Tokens, our exclusive rewards program</li>
                          </ul>
                          <p className="mt-2">Highly recommended!</p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="refunds">
                        <AccordionTrigger className="text-lg font-semibold">
                          Do you give refunds?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          We offer refunds only if you notify us within 5 minutes of placing a
                          mistaken order. Once items are delivered, refunds aren&apos;t possible.
                          Chat is live 16 hrs/day; email is monitored 24/7.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="cart">
                        <AccordionTrigger className="text-lg font-semibold">
                          Why is my cart deleting items?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          <p>Try the following:</p>
                          <ul className="mt-2 list-disc pl-6">
                            <li>Clear your browser cache</li>
                            <li>Log into your account</li>
                            <li>
                              Avoid mixing item types (e.g., Ladder + Non-Ladder) — this clears your
                              cart automatically.
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </section>
              </section>
              <AccordionContent>
                You will receive an email when the order is ready for pickup. A total of two emails
                will be sent out: 1) the processing email, and 2) the item delivery form. Please
                fill out 2) Item Delivery Form. This will be the fastest way for us to get notified
                that you are ready for the service.&lt;br&gt;&lt;br&gt;
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" />
            <AccordionItem value="item-3" />
          </Accordion>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="font-heading text-3xl font-bold tracking-tighter text-[#FFFFFF] sm:text-4xl md:text-5xl">
                Never miss an Expansion
              </h2>
              <p className="mx-auto max-w-[700px] text-[#FFFFFF]">
                Subscribe for new items, restocks, guides, games, and more!
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full"
                  />
                </div>
                <Button className="w-full">
                  Subscribe
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our terms and privacy policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
