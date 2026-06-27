import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { services } from "@/lib/services";
import { getAllBlogPosts, getAllCaseStudies } from "@/lib/contentful";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/o-nas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/uslugi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/cennik`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/case-study`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/polityka-prywatnosci`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/polityka-cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${baseUrl}/uslugi/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Pull dynamic content from Contentful when configured (gracefully empty otherwise).
  const [posts, studies] = await Promise.all([
    getAllBlogPosts(),
    getAllCaseStudies(),
  ]);

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedDate ? new Date(post.publishedDate) : now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = studies.map((study) => ({
    url: `${baseUrl}/case-study/${study.slug}`,
    lastModified: study.publishedDate ? new Date(study.publishedDate) : now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...caseStudyRoutes];
}
