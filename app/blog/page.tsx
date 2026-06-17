import { getAllBlogPosts } from "@/lib/contentful";
import BlogCard from "@/components/contentful/BlogCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artykuły o performance marketingu, SEO, Google Ads i content marketingu.",
};

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-h2 text-text-primary">Blog</h1>
          <p className="text-text-secondary mt-4">
            Wiedza, trendy i praktyczne porady z performance marketingu.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-text-secondary">Artykuły pojawią się wkrótce.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                author={post.author}
                date={post.publishedDate}
                readingTime={post.readingTime}
                coverUrl={post.coverImage?.url}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
