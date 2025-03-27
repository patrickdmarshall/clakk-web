import Link from "next/link";
import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  price: number;
  isNew: boolean;
  className?: string;
}

export function ProductCard({
  name,
  image,
  description,
  price,
  isNew,
  className,
}: ProductCardProps) {
  return (
    <Link href="/product" className={cn("rounded-lg", className)}>
      <div className="relative mb-4">
        <img
          src={image}
          style={{ objectFit: "cover", aspectRatio: "200/200" }}
          width="200"
          height="200"
          className="aspect-square w-full rounded-xl bg-primary/10 object-cover p-14"
        />
        <Button
          size="icon"
          variant="outline"
          className="absolute right-2 top-2 rounded-full hover:bg-accent"
        >
          <Heart size={16} />
        </Button>
        <Badge className="absolute left-2 top-2">New Arrival</Badge>
      </div>
      <div className="flex w-full items-center justify-between">
        <h3 className="font-semibold">{name}</h3>
        <div className="font-bold">
          <span>$</span>
          <span>{price}</span>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </Link>
  );
}
