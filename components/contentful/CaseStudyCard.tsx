import Link from "next/link";
import Badge from "@/components/ui/Badge";

interface CaseStudyCardProps {
  slug: string;
  title: string;
  client: string;
  industry: string;
  metrics: Record<string, string>;
  coverUrl?: string;
  tags: string[];
}

export default function CaseStudyCard({
  slug,
  title,
  client,
  industry,
  metrics,
  coverUrl,
  tags,
}: CaseStudyCardProps) {
  return (
    <article className="lg overflow-hidden group">
      <div
        className="h-48 w-full bg-cover bg-center"
        style={{
          background: coverUrl
            ? `url(${coverUrl}) center/cover`
            : "linear-gradient(135deg, var(--bg-elevated), var(--bg-surface))",
        }}
      />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge>{industry}</Badge>
          {tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="signal">{tag}</Badge>
          ))}
        </div>
        <h3
          className="text-lg font-semibold text-text-primary mb-1 group-hover:text-signal transition-colors"
          style={{ fontFamily: "var(--font-tight)" }}
        >
          <Link href={`/case-study/${slug}`}>{title}</Link>
        </h3>
        <p className="text-sm text-text-muted mb-4">{client}</p>

        {Object.keys(metrics).length > 0 && (
          <div className="flex gap-4 flex-wrap">
            {Object.entries(metrics).slice(0, 3).map(([key, value]) => (
              <div key={key}>
                <p className="text-lg font-bold text-signal" style={{ fontFamily: "var(--font-tight)" }}>
                  {value}
                </p>
                <p className="text-xs text-text-muted">{key}</p>
              </div>
            ))}
          </div>
        )}

        <Link
          href={`/case-study/${slug}`}
          className="inline-block mt-4 text-sm text-signal hover:underline"
        >
          Czytaj więcej →
        </Link>
      </div>
    </article>
  );
}
