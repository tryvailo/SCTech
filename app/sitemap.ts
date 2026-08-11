import type { MetadataRoute } from "next"
import { insights, getInsightUrl } from "@/lib/insights"
import { insightTopics, getInsightTopicUrl } from "@/lib/insight-topics"
import { siteConfig } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified: new Date(`${siteConfig.privacyUpdatedAt}T00:00:00Z`),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: siteConfig.experts.alexTryvailo.url,
      lastModified: new Date("2026-08-11T00:00:00Z"),
      changeFrequency: "monthly",
      priority: 0.55,
    },
    ...insightTopics.map((topic) => ({
      url: getInsightTopicUrl(topic.slug),
      lastModified: new Date(`${topic.updatedAt}T00:00:00Z`),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...insights.map((insight) => ({
      url: getInsightUrl(insight.slug),
      lastModified: new Date(`${insight.updatedAt}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: insight.category === "Guide" ? 0.75 : 0.7,
    })),
  ]
}
