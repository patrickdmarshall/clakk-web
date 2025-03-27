import Link from "next/link";

export function Footer11() {
  return (
    <footer className="container mt-10 flex flex-wrap justify-between pb-16 pt-10">
      <div className="flex basis-full justify-between gap-8 md:basis-auto md:flex-col md:justify-start">
        <Link href="#" className="flex items-center gap-3">
          <span className="font-heading text-xl font-bold">CLAKK</span>
        </Link>
        <p className="text-xs text-[#888888]">© 2025 Clakk. All rights reserved.</p>
      </div>
      <div className="mt-10 flex basis-1/2 flex-col gap-5 md:mt-0 md:basis-auto">
        <h3 className="font-semibold">Product</h3>
        <a
          href="/character-builder"
          className="text-[#888888] text-sm hover:text-[#AAAAAA] transition-colors"
        >
          Character Builder
        </a>
        <a href="/guides" className="text-[#888888] text-sm hover:text-[#AAAAAA] transition-colors">
          Guides
        </a>
        <a href="/guides" className="text-[#888888] text-sm hover:text-[#AAAAAA] transition-colors">
          Shop
        </a>
      </div>
      <div className="mt-10 flex basis-1/2 flex-col gap-5 md:mt-0 md:basis-auto">
        <h3 className="font-semibold">Resources</h3>
        <a
          href="/discord"
          className="text-[#888888] text-sm hover:text-[#AAAAAA] transition-colors"
        >
          Discord
        </a>
        <a
          href="/discord"
          className="text-[#888888] text-sm hover:text-[#AAAAAA] transition-colors"
        >
          Facebook
        </a>
        <a
          href="/discord"
          className="text-[#888888] text-sm hover:text-[#AAAAAA] transition-colors"
        >
          Trustpilot
        </a>
      </div>
    </footer>
  );
}
