import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";

// Visual breadcrumb navigation + matching BreadcrumbList structured data.
// Always include "Strona główna" as the first crumb; pass the trail after it.
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const crumbs: Crumb[] = [{ name: "Strona główna", path: "/" }, ...items];

  return (
    <nav
      aria-label="Ścieżka nawigacji"
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8"
    >
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <ol className="flex flex-wrap items-center gap-2 text-xs text-text-muted">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {isLast ? (
                <span className="text-text-secondary" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={crumb.path}
                  className="hover:text-signal transition-colors"
                >
                  {crumb.name}
                </Link>
              )}
              {!isLast && <ChevronRight size={14} className="text-text-muted" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
