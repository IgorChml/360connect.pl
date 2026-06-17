import { createClient, EntrySkeletonType, EntryFieldTypes } from "contentful";
import type { Document } from "@contentful/rich-text-types";

function getClient() {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
  if (!space || !accessToken) return null;
  return createClient({ space, accessToken });
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  body: Document;
  coverImage?: { url: string; title: string };
  author: string;
  category: string;
  tags: string[];
  publishedDate: string;
  readingTime: number;
}

export interface CaseStudy {
  title: string;
  slug: string;
  client: string;
  industry: string;
  challenge: Document;
  solution: Document;
  results: Document;
  metrics: Record<string, string>;
  coverImage: { url: string; title: string };
  tags: string[];
  publishedDate: string;
}

interface BlogPostSkeleton extends EntrySkeletonType {
  contentTypeId: "blogPost";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    excerpt: EntryFieldTypes.Text;
    body: Document;
    coverImage: EntryFieldTypes.AssetLink;
    author: EntryFieldTypes.Text;
    category: EntryFieldTypes.Text;
    tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    publishedDate: EntryFieldTypes.Date;
    readingTime: EntryFieldTypes.Integer;
  };
}

interface CaseStudySkeleton extends EntrySkeletonType {
  contentTypeId: "caseStudy";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    client: EntryFieldTypes.Text;
    industry: EntryFieldTypes.Text;
    challenge: EntryFieldTypes.RichText;
    solution: EntryFieldTypes.RichText;
    results: EntryFieldTypes.RichText;
    metrics: EntryFieldTypes.Object;
    coverImage: EntryFieldTypes.AssetLink;
    tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    publishedDate: EntryFieldTypes.Date;
  };
}

function parseAsset(asset: unknown): { url: string; title: string } | undefined {
  const a = asset as { fields?: { file?: { url?: string }; title?: string } } | undefined;
  if (!a?.fields?.file?.url) return undefined;
  return { url: `https:${a.fields.file.url}`, title: a.fields.title ?? "" };
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const client = getClient();
    if (!client) return [];
    const entries = await client.getEntries<BlogPostSkeleton>({
      content_type: "blogPost",
      order: ["-fields.publishedDate"],
    });
    return entries.items.map((item) => ({
      title: item.fields.title as string,
      slug: item.fields.slug as string,
      excerpt: (item.fields.excerpt as string) ?? "",
      body: item.fields.body,
      coverImage: parseAsset(item.fields.coverImage),
      author: (item.fields.author as string) ?? "",
      category: (item.fields.category as string) ?? "",
      tags: (item.fields.tags as string[]) ?? [],
      publishedDate: (item.fields.publishedDate as string) ?? "",
      readingTime: (item.fields.readingTime as number) ?? 5,
    }));
  } catch {
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const client = getClient();
    if (!client) return null;
    const entries = await client.getEntries<BlogPostSkeleton>({
      content_type: "blogPost",
      "fields.slug": slug,
      limit: 1,
    });
    if (!entries.items.length) return null;
    const item = entries.items[0];
    return {
      title: item.fields.title as string,
      slug: item.fields.slug as string,
      excerpt: (item.fields.excerpt as string) ?? "",
      body: item.fields.body,
      coverImage: parseAsset(item.fields.coverImage),
      author: (item.fields.author as string) ?? "",
      category: (item.fields.category as string) ?? "",
      tags: (item.fields.tags as string[]) ?? [],
      publishedDate: (item.fields.publishedDate as string) ?? "",
      readingTime: (item.fields.readingTime as number) ?? 5,
    };
  } catch {
    return null;
  }
}

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  try {
    const client = getClient();
    if (!client) return [];
    const entries = await client.getEntries<CaseStudySkeleton>({
      content_type: "caseStudy",
      order: ["-fields.publishedDate"],
    });
    return entries.items.map((item) => ({
      title: item.fields.title as string,
      slug: item.fields.slug as string,
      client: (item.fields.client as string) ?? "",
      industry: (item.fields.industry as string) ?? "",
      challenge: item.fields.challenge,
      solution: item.fields.solution,
      results: item.fields.results,
      metrics: (item.fields.metrics as Record<string, string>) ?? {},
      coverImage: parseAsset(item.fields.coverImage) ?? { url: "", title: "" },
      tags: (item.fields.tags as string[]) ?? [],
      publishedDate: (item.fields.publishedDate as string) ?? "",
    }));
  } catch {
    return [];
  }
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  try {
    const client = getClient();
    if (!client) return null;
    const entries = await client.getEntries<CaseStudySkeleton>({
      content_type: "caseStudy",
      "fields.slug": slug,
      limit: 1,
    });
    if (!entries.items.length) return null;
    const item = entries.items[0];
    return {
      title: item.fields.title as string,
      slug: item.fields.slug as string,
      client: (item.fields.client as string) ?? "",
      industry: (item.fields.industry as string) ?? "",
      challenge: item.fields.challenge,
      solution: item.fields.solution,
      results: item.fields.results,
      metrics: (item.fields.metrics as Record<string, string>) ?? {},
      coverImage: parseAsset(item.fields.coverImage) ?? { url: "", title: "" },
      tags: (item.fields.tags as string[]) ?? [],
      publishedDate: (item.fields.publishedDate as string) ?? "",
    };
  } catch {
    return null;
  }
}

export async function getRelatedPosts(category: string, excludeSlug: string): Promise<BlogPost[]> {
  try {
    const client = getClient();
    if (!client) return [];
    const entries = await client.getEntries<BlogPostSkeleton>({
      content_type: "blogPost",
      "fields.category": category,
      "fields.slug[ne]": excludeSlug,
      limit: 3,
    });
    return entries.items.map((item) => ({
      title: item.fields.title as string,
      slug: item.fields.slug as string,
      excerpt: (item.fields.excerpt as string) ?? "",
      body: item.fields.body,
      coverImage: parseAsset(item.fields.coverImage),
      author: (item.fields.author as string) ?? "",
      category: (item.fields.category as string) ?? "",
      tags: (item.fields.tags as string[]) ?? [],
      publishedDate: (item.fields.publishedDate as string) ?? "",
      readingTime: (item.fields.readingTime as number) ?? 5,
    }));
  } catch {
    return [];
  }
}
