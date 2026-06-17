import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "signal" | "tech";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "lg lg--pill lg--flat inline-flex items-center text-xs font-medium",
        variant === "signal" && "lg--signal text-signal",
        variant === "tech" && "lg--tech text-accent-tech",
        variant === "default" && "text-text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
