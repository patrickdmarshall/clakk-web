import Link from "next/link";

export function Footer18() {
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
          className="text-sm text-[#888888] transition-colors hover:text-[#AAAAAA]"
        >
          Character Builder
        </a>
        <a href="/guides" className="text-sm text-[#888888] transition-colors hover:text-[#AAAAAA]">
          Guides
        </a>
        <a href="/guides" className="text-sm text-[#888888] transition-colors hover:text-[#AAAAAA]">
          Shop
        </a>
      </div>
      <div className="mt-10 flex basis-1/2 flex-col gap-5 md:mt-0 md:basis-auto">
        <h3 className="font-semibold">Resources</h3>
        <a
          href="/discord"
          className="text-sm text-[#888888] transition-colors hover:text-[#AAAAAA]"
        >
          Discord
        </a>
        <a
          href="/discord"
          className="text-sm text-[#888888] transition-colors hover:text-[#AAAAAA]"
        >
          Facebook
        </a>
        <a
          href="/discord"
          className="text-sm text-[#888888] transition-colors hover:text-[#AAAAAA]"
        >
          Trustpilot
        </a>
      </div>
    </footer>
  );
}
