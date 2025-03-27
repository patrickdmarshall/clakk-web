import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface CheckboxItemProps {
  label: string;
  className?: string;
}

export function CheckboxItem({ label, className }: CheckboxItemProps) {
  return (
    <label className={cn("flex items-center space-x-2", className)}>
      <Checkbox id="men" className="bg-input size-5 border-border" />
      <span>{label}</span>
    </label>
  );
}
