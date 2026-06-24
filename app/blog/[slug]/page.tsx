import { notFound } from "next/navigation";
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/contentful";
import BlogCard from "@/components/contentful/BlogCard";
import GlassCard from "@/components/ui/GlassCard";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/siteConfig";
import type { Metadata } from "next";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Artykuł nie znaleziony" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedDate || undefined,
      authors: post.author ? [post.author] : undefined,
      ...(post.coverImage && { images: [post.coverImage.url] }),
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post.category, post.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `${siteConfig.url}/blog/${post.slug}`,
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
    inLanguage: "pl-PL",
    ...(post.coverImage && { image: post.coverImage.url }),
    ...(post.publishedDate && { datePublished: post.publishedDate }),
    ...(post.author && { author: { "@type": "Person", name: post.author } }),
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/icon.png` },
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <Breadcrumbs
        items={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <article className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <span className="text-caption text-signal">{post.category}</span>
            <h1 className="text-h2 text-text-primary mt-2 mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-text-muted">
              <span>{post.author}</span>
              <span>&middot;</span>
              <span>{post.publishedDate}</span>
              <span>&middot;</span>
              <span>{post.readingTime} min czytania</span>
            </div>
          </div>

          {post.coverImage && (
            <div
              className="w-full h-64 sm:h-80 rounded-2xl mb-12 bg-cover bg-center"
              style={{ backgroundImage: `url(${post.coverImage.url})` }}
              role="img"
              aria-label={post.coverImage.title}
            />
          )}

          <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed">
            <p>{post.excerpt}</p>
          </div>

          <GlassCard className="p-6 mt-12">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg, var(--signal), var(--accent-tech))" }}
              >
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">{post.author}</p>
                <p className="text-xs text-text-muted">Autor</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--bg-surface)" }}>
          <div className="mx-auto max-w-6xl">
            <h2 className="text-h3 text-text-primary mb-8">Powiązane artykuły</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <BlogCard
                  key={r.slug}
                  slug={r.slug}
                  title={r.title}
                  excerpt={r.excerpt}
                  category={r.category}
                  author={r.author}
                  date={r.publishedDate}
                  readingTime={r.readingTime}
                  coverUrl={r.coverImage?.url}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
