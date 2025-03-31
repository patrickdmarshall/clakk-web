import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <span className="font-heading text-xl text-2xl font-extrabold">CLAKK</span>
    </Link>
  );
}
