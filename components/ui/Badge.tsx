interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const styles =
    variant === "accent"
      ? "bg-accent-primary/15 text-accent-primary border-accent-primary/30"
      : "bg-glass-bg text-text-secondary border-border-default";

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border ${styles} ${className}`}
    >
      {children}
    </span>
  );
}
