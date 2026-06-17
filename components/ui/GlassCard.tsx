import { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  accent?: boolean;
}

export default function GlassCard({
  accent = false,
  className = "",
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={`glass-card ${accent ? "glass-card--accent" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
