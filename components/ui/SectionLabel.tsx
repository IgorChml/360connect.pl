interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`text-caption text-accent-primary font-medium tracking-widest ${className}`}
    >
      {children}
    </span>
  );
}
