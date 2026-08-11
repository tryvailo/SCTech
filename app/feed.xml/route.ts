import { NextResponse } from "next/server"
import { insights, getInsightUrl } from "@/lib/insights"
import { siteConfig } from "@/lib/seo"

export const dynamic = "force-static"

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export function GET() {
  const latestUpdatedAt = insights
    .map((insight) => new Date(`${insight.updatedAt}T00:00:00Z`).getTime())
    .sort((a, b) => b - a)[0]

  const items = insights
    .slice()
    .sort((a, b) => new Date(`${b.updatedAt}T00:00:00Z`).getTime() - new Date(`${a.updatedAt}T00:00:00Z`).getTime())
    .map((insight) => {
      const url = getInsightUrl(insight.slug)

      return `<item>
  <title>${escapeXml(insight.title)}</title>
  <link>${url}</link>
  <guid isPermaLink="true">${url}</guid>
  <description>${escapeXml(insight.seoDescription)}</description>
  <category>${escapeXml(insight.category)}</category>
  <pubDate>${new Date(`${insight.publishedAt}T00:00:00Z`).toUTCString()}</pubDate>
  <lastBuildDate>${new Date(`${insight.updatedAt}T00:00:00Z`).toUTCString()}</lastBuildDate>
</item>`
    })
    .join("\n")

  const content = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${escapeXml(siteConfig.shortName)} Insights</title>
  <link>${siteConfig.url}/insights</link>
  <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml" />
  <description>${escapeXml(siteConfig.description)}</description>
  <language>en-gb</language>
  <lastBuildDate>${new Date(latestUpdatedAt).toUTCString()}</lastBuildDate>
  ${items}
</channel>
</rss>`

  return new NextResponse(content, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
