import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "signal" | "tech" | "raised" | "flat";
type Size = "sm" | "default" | "lg";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  size?: Size;
  shimmer?: boolean;
  pill?: boolean;
}

export default function GlassCard({
  variant = "default",
  size = "default",
  shimmer = false,
  pill = false,
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "lg",
        variant === "signal" && "lg--signal",
        variant === "tech" && "lg--tech",
        variant === "raised" && "lg--raised",
        variant === "flat" && "lg--flat",
        size === "sm" && "lg--sm",
        size === "lg" && "lg--lg",
        shimmer && "lg--shimmer",
        pill && "lg--pill",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
