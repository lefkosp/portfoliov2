import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { getDecisions } from "@/lib/decisions";

const BASE_URL = "https://lefkos.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();
  const decisions = await getDecisions();

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...decisions.map((decision) => ({
      url: `${BASE_URL}/decisions/${decision.slug}`,
      lastModified: new Date(decision.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
