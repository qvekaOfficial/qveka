import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { workPosts } from "@/data/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/work`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...workPosts.map((post) => ({
      url: `${siteUrl}/work/${post.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
