import type { MetadataRoute } from "next";
import { getDecisions } from "@/lib/decisions";

const BASE_URL = "https://lefkos-portfoliov2.netlify.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const decisions = await getDecisions();

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...decisions.map((decision) => ({
      url: `${BASE_URL}/decisions/${decision.slug}`,
      lastModified: new Date(decision.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
