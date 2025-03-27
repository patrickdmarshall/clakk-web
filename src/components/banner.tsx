import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface BannerProps {
  className?: string;
}

export function Banner({ className }: BannerProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between bg-primary px-4 py-1 text-primary-foreground",
        className,
      )}
    >
      <div className="container flex">
        <div className="hidden flex-1 items-center gap-2 text-xs md:flex" />
        <div className="flex flex-1 items-center justify-center gap-2">
          <span className="text-xs">Current Terror Zone: Flayer Jungle&nbsp;</span>
        </div>
        <div className="hidden flex-1 items-center justify-end gap-2 text-xs md:flex">
          <Globe className="size-4" />
          <span className="text-sm">Trustpilot Rating</span>
        </div>
      </div>
    </div>
  );
}
