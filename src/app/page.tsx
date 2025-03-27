import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Hero2 } from "@/components/hero-2";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Hero2 />
      <CtaSection />
      <Footer />
    </>
  );
}
