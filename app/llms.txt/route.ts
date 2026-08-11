import { NextResponse } from "next/server"
import { insights, getInsightUrl } from "@/lib/insights"
import { insightTopics, getInsightTopicUrl } from "@/lib/insight-topics"
import { siteConfig } from "@/lib/seo"

export const dynamic = "force-static"

export function GET() {
  const topicHubs = insightTopics
    .map((topic) => `- [${topic.title}](${getInsightTopicUrl(topic.slug)}): ${topic.description}`)
    .join("\n")

  const priorityInsights = insights
    .filter((insight) =>
      [
        "ai-workflow-automation-examples",
        "ai-workflow-automation-tools",
        "ai-automation-agency-vs-consultant",
        "ai-automation-consultant-us-uk-operations-teams",
        "invoice-processing-automation",
        "market-competitor-monitoring-automation",
        "product-data-cleanup-automation",
        "document-processing-data-extraction-automation",
        "review-intelligence-automation",
        "how-to-know-if-a-workflow-is-worth-automating",
      ].includes(insight.slug),
    )
    .map((insight) => `- [${insight.title}](${getInsightUrl(insight.slug)}): ${insight.description}`)
    .join("\n")

  const content = `# ${siteConfig.name}

${siteConfig.description}

SmartCore Technologies helps US and UK operations teams diagnose recurring workflows and build controlled AI automation around documents, product data, competitor monitoring, reporting, content operations, and internal decisions.

## Core Pages

- [Home](${siteConfig.url}/): AI workflow automation consulting for US and UK teams.
- [Insights](${siteConfig.url}/insights): Practical guides for workflow automation, AI automation consulting, document processing, product data enrichment, and market monitoring.
- [Contact](${siteConfig.url}/#contact): Request a workflow assessment.
- [Privacy Notice](${siteConfig.url}/privacy): How enquiry data is handled.
- [Alex Tryvailo, PhD](${siteConfig.experts.alexTryvailo.url}): SmartCore reviewer for AI workflow automation, LLM evaluation, data quality, and market intelligence automation.
- [RSS Feed](${siteConfig.url}/feed.xml): Latest SmartCore insights.

## Topic Hubs

${topicHubs}

## Priority Resources

${priorityInsights}

## Technical Discovery

- [Sitemap](${siteConfig.indexing.sitemapUrl})
- [Robots](${siteConfig.indexing.robotsUrl})
`

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
