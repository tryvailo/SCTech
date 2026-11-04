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
        "what-is-ai-enablement",
        "fractional-ai-officer-vs-interim-head-of-ai",
        "ai-readiness-assessment",
        "ai-governance-framework-for-adoption",
        "customer-service-automation-with-ai",
        "ai-workflow-automation-examples",
        "ai-workflow-automation-tools",
        "zapier-make-n8n-vs-custom-ai-automation",
        "ai-workflow-automation-services",
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

SmartCore Technologies automates operational workflows for UK and US teams. Fractional and interim AI leadership is a second service for companies that need someone to own AI.

1. AI workflow automation (main service): workflow audit (1–2 weeks: process, systems, metric and expected return), hands-on pilot on real data with human review (3–6 weeks), then a monthly run-and-improve plan or handover. Areas: customer support and feedback, documents and back office, product data and catalogue, reporting and decision support. Built with n8n, LLMs and the client's systems via API. Measured by hours saved, response time, error rate and cost per case.
2. Fractional and interim AI leadership: a fractional AI lead (1–3 days a week) or interim head of AI cover (3–12 months) who owns AI priorities, the roadmap, vendor decisions, governance and regulation readiness (ICO, EU AI Act). First 90 days: diagnose (weeks 1–4), first pilot live (by day 60), measured result and roadmap (by day 90). Can start with a 2–4 week AI Opportunity Sprint.

Sectors: e-commerce and marketplaces, B2B SaaS, retail tech, and document-heavy operations (logistics, insurance, professional services).

## Core Pages

- [Home](${siteConfig.url}/): AI workflow automation (audit, pilot, run), plus fractional or interim AI leadership.
- [Insights](${siteConfig.url}/insights): Practical guides for AI enablement, readiness, adoption, governance, workflow automation, document processing, product data enrichment, and market monitoring.
- [Contact](${siteConfig.url}/#contact): Discuss a workflow to automate or fractional or interim AI leadership.
- [Privacy Notice](${siteConfig.url}/privacy): How enquiry data is handled.
- [Alex Tryvailo, PhD](${siteConfig.experts.alexTryvailo.url}): SmartCore author and AI Enablement Lead for AI adoption, governance, workflow automation, LLM evaluation, and data quality. LinkedIn: ${siteConfig.experts.alexTryvailo.linkedin}
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
