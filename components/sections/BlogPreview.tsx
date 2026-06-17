"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import Badge from "@/components/ui/Badge";

const mockPosts = [
  {
    slug: "jak-zwiekszyc-roas",
    title: "Jak zwiększyć ROAS o 300% w kampaniach Meta Ads",
    excerpt: "Praktyczne strategie optymalizacji kampanii reklamowych na Facebooku i Instagramie.",
    category: "Meta Ads",
    date: "2026-06-10",
    readingTime: 5,
  },
  {
    slug: "seo-trendy-2026",
    title: "SEO w 2026: trendy, które musisz znać",
    excerpt: "AI, Core Web Vitals i nowe sygnały rankingowe — co zmieni się w pozycjonowaniu.",
    category: "SEO",
    date: "2026-06-05",
    readingTime: 7,
  },
  {
    slug: "content-marketing-roi",
    title: "Content marketing: jak mierzyć ROI?",
    excerpt: "Metryki i narzędzia, które pomogą Ci udowodnić wartość treści w strategii marketingowej.",
    category: "Content",
    date: "2026-05-28",
    readingTime: 4,
  },
];

export default function BlogPreview() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: "var(--bg-surface)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-16">
          <div>
            <SectionLabel>Blog</SectionLabel>
            <h2 className="text-h2 text-text-primary mt-4">Ostatnie artykuły</h2>
          </div>
          <Link
            href="/blog"
            className="text-sm text-signal hover:underline hidden sm:block"
          >
            Zobacz wszystkie →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockPosts.map((post, i) => (
            <motion.article
              key={i}
              className="lg lg--flat overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div
                className="h-40 w-full"
                style={{
                  background: `linear-gradient(135deg, var(--bg-elevated), var(--bg-surface))`,
                }}
              />
              <div className="p-6">
                <Badge className="mb-3">{post.category}</Badge>
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-signal transition-colors" style={{ fontFamily: "var(--font-tight)" }}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-text-muted">
                  <span>{post.date}</span>
                  <span>{post.readingTime} min czytania</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/blog" className="text-sm text-signal hover:underline">
            Zobacz wszystkie →
          </Link>
        </div>
      </div>
    </section>
  );
}
