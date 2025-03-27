import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface BannerProps {
  className?: string;
}

export function Banner({ className }: BannerProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 bg-primary text-primary-foreground py-1",
        className,
      )}
    >
      <div className="flex container">
        <div className="items-center gap-2 flex-1 text-xs hidden md:flex" />
        <div className="flex items-center gap-2 justify-center flex-1">
          <span className="text-xs">Current Terror Zone: Flayer Jungle&nbsp;</span>
        </div>
        <div className="items-center gap-2 flex-1 text-xs justify-end hidden md:flex">
          <Globe className="h-4 w-4" />
          <span className="text-sm">Trustpilot Rating</span>
        </div>
      </div>
    </div>
  );
}
