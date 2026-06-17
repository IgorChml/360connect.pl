import Link from "next/link";
import Badge from "@/components/ui/Badge";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readingTime: number;
  coverUrl?: string;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  category,
  author,
  date,
  readingTime,
  coverUrl,
}: BlogCardProps) {
  return (
    <article className="lg lg--flat overflow-hidden group">
      <div
        className="h-40 w-full bg-cover bg-center"
        style={{
          background: coverUrl
            ? `url(${coverUrl}) center/cover`
            : "linear-gradient(135deg, var(--bg-elevated), var(--bg-surface))",
        }}
      />
      <div className="p-6">
        <Badge className="mb-3">{category}</Badge>
        <h3
          className="text-lg font-semibold text-text-primary mb-2 group-hover:text-signal transition-colors"
          style={{ fontFamily: "var(--font-tight)" }}
        >
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>
        <p className="text-sm text-text-secondary mb-4 leading-relaxed line-clamp-2">
          {excerpt}
        </p>
        <div className="flex items-center gap-3 text-xs text-text-muted">
          <span>{author}</span>
          <span>&middot;</span>
          <span>{date}</span>
          <span>&middot;</span>
          <span>{readingTime} min czytania</span>
        </div>
      </div>
    </article>
  );
}
