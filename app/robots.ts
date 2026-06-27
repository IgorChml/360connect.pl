import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // AI search crawlers — explicitly allowed for citability.
      {
        userAgent: ["GPTBot", "ClaudeBot", "Claude-Web", "Google-Extended", "PerplexityBot", "CCBot"],
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
