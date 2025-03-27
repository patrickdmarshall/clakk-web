import Link from "next/link";
import { cn } from "@/lib/utils";

interface Logo2Props {
  className?: string;
}

export function Logo2({ className }: Logo2Props) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <span className="font-heading text-2xl text-xl font-extrabold">CLAKK</span>
    </Link>
  );
}
