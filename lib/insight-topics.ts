import { insights, type Insight } from "@/lib/insights"
import { siteConfig } from "@/lib/seo"

export interface InsightTopic {
  slug: string
  title: string
  seoTitle: string
  description: string
  seoDescription: string
  eyebrow: string
  targetQuery: string
  keywords?: string[]
  updatedAt: string
  category: "Topic Hub"
  primaryCta: string
  intro: string[]
  fit: string[]
  decisionQuestions: string[]
  articleSlugs: string[]
  nextSteps: Array<{
    label: string
    detail: string
    href: string
  }>
}

export const insightTopics: InsightTopic[] = [
  {
    slug: "ai-enablement",
    title: "AI Enablement",
    seoTitle: "AI Enablement: Adoption, Governance and Delivery",
    description:
      "Practical guidance for moving from scattered AI experiments to prioritised use cases, proportionate governance, adoption, and measurable delivery.",
    seoDescription:
      "Explore AI enablement, readiness assessment, adoption strategy, governance frameworks, operating models, and delivery controls for US and UK organisations.",
    eyebrow: "Topic hub",
    targetQuery: "AI enablement",
    keywords: [
      "AI readiness assessment",
      "AI adoption strategy",
      "AI governance framework",
      "AI implementation consulting",
      "AI operating model",
      "enterprise AI adoption",
    ],
    updatedAt: "2026-08-19",
    category: "Topic Hub",
    primaryCta: "Discuss an Enablement Programme",
    intro: [
      "AI enablement is the operating capability that turns AI interest into repeatable business outcomes. It connects strategy, use-case selection, governance, delivery, adoption, and measurement rather than treating each pilot as an isolated technology project.",
      "Use this hub to assess readiness, create practical guardrails, choose a first portfolio of use cases, and decide what the organisation should own after an initial enablement programme.",
    ],
    fit: [
      "Organisations with several AI experiments but no shared intake, prioritisation, governance, or measurement model.",
      "Business and operations leaders who need usable workflows, not a research-heavy machine-learning programme.",
      "Teams that need an interim enablement lead plus access to automation, product, data, and change-delivery capability.",
    ],
    decisionQuestions: [
      "Which business problems are valuable, feasible, and safe enough to address first?",
      "What minimum guardrails let teams move quickly without creating unmanaged data, legal, or operational risk?",
      "Who owns use-case intake, delivery, adoption, measurement, and continuous improvement after the first programme?",
    ],
    articleSlugs: [
      "what-is-ai-enablement",
      "fractional-ai-officer-vs-interim-head-of-ai",
      "ai-readiness-assessment",
      "ai-governance-framework-for-adoption",
      "customer-service-automation-with-ai",
      "ai-workflow-automation-examples",
      "how-to-know-if-a-workflow-is-worth-automating",
      "ai-automation-consulting-tool-or-custom-workflow",
    ],
    nextSteps: [
      {
        label: "Choose the engagement model",
        detail: "Compare fractional leadership, an interim appointment, a permanent hire, and a defined consultancy mandate.",
        href: "/insights/fractional-ai-officer-vs-interim-head-of-ai",
      },
      {
        label: "Understand the operating model",
        detail: "Separate AI enablement from training, strategy-only consulting, and standalone implementation.",
        href: "/insights/what-is-ai-enablement",
      },
      {
        label: "Assess readiness",
        detail: "Score business value, data, workflow, risk, ownership, skills, and adoption before funding pilots.",
        href: "/insights/ai-readiness-assessment",
      },
      {
        label: "Design practical guardrails",
        detail: "Create tiered governance that matches controls to the consequence of each use case.",
        href: "/insights/ai-governance-framework-for-adoption",
      },
      {
        label: "Choose the first workflow",
        detail: "Turn the programme into a bounded delivery plan with evidence, review, and measurable outcomes.",
        href: "/insights/how-to-know-if-a-workflow-is-worth-automating",
      },
    ],
  },
  {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation",
    seoTitle: "AI Workflow Automation Hub",
    description:
      "Guides, examples, buying questions, and implementation controls for teams evaluating AI workflow automation.",
    seoDescription:
      "Explore AI automation services, workflow automation tools, examples, consulting options, assessment checklists, and implementation controls for operations teams.",
    eyebrow: "Topic hub",
    targetQuery: "AI workflow automation",
    updatedAt: "2026-08-11",
    category: "Topic Hub",
    primaryCta: "Assess One Workflow",
    intro: [
      "AI workflow automation is strongest when a team starts with one recurring operational loop, not a broad AI transformation idea.",
      "Use this hub to compare AI automation services, workflow automation tools, consultants, custom workflows, review controls, and first-pilot criteria before choosing a build path.",
    ],
    fit: [
      "Operations teams with repeated document, data, reporting, feedback, or monitoring work.",
      "Leaders comparing AI automation tools, agencies, consultants, and internal delivery.",
      "Teams that need evidence, confidence labels, review queues, and workflow ownership before production.",
    ],
    decisionQuestions: [
      "Which workflow should be automated first?",
      "Is this a tool configuration, custom workflow, or consulting problem?",
      "Where should human review, evidence, and monitoring sit in the operating loop?",
    ],
    articleSlugs: [
      "ai-workflow-automation-examples",
      "customer-service-automation-with-ai",
      "what-is-ai-workflow-automation",
      "how-to-know-if-a-workflow-is-worth-automating",
      "ai-workflow-automation-tools",
      "zapier-make-n8n-vs-custom-ai-automation",
      "ai-workflow-automation-services",
      "ai-automation-consulting-tool-or-custom-workflow",
      "ai-automation-agency-vs-consultant",
      "ai-automation-consultant-us-uk-operations-teams",
    ],
    nextSteps: [
      {
        label: "Start with examples",
        detail: "Scan repeatable workflow patterns before picking a tool or vendor.",
        href: "/insights/ai-workflow-automation-examples",
      },
      {
        label: "Score one candidate",
        detail: "Use the checklist to decide whether a workflow is ready for AI automation.",
        href: "/insights/how-to-know-if-a-workflow-is-worth-automating",
      },
      {
        label: "Compare build paths",
        detail: "Separate tool fit, consulting fit, custom workflow fit, and internal ownership.",
        href: "/insights/ai-automation-consulting-tool-or-custom-workflow",
      },
      {
        label: "Choose the stack",
        detail: "Compare Zapier, Make, n8n, Power Automate, and custom workflow control.",
        href: "/insights/zapier-make-n8n-vs-custom-ai-automation",
      },
    ],
  },
  {
    slug: "document-processing-automation",
    title: "Document Processing Automation",
    seoTitle: "Document Processing Automation Hub",
    description:
      "A practical hub for invoice processing, document extraction, validation controls, exception queues, and reviewable structured data.",
    seoDescription:
      "Compare document processing automation, invoice extraction, validation workflows, review queues, and production controls for operations teams.",
    eyebrow: "Topic hub",
    targetQuery: "intelligent document processing",
    updatedAt: "2026-08-11",
    category: "Topic Hub",
    primaryCta: "Assess One Document Workflow",
    intro: [
      "Document automation becomes useful when extraction, validation, exceptions, and downstream export are designed as one workflow.",
      "This hub helps teams move from generic OCR or document AI demos to reviewable document-processing systems that preserve source evidence.",
    ],
    fit: [
      "Finance, operations, logistics, supplier, or admin teams handling repeated document families.",
      "Teams extracting fields from invoices, forms, PDFs, tables, emails, scans, or supplier files.",
      "Workflows where reviewers need confidence, page references, correction history, and audit trails.",
    ],
    decisionQuestions: [
      "Which document family is frequent and structured enough to test first?",
      "What fields need extraction, validation, review, and export?",
      "Which exceptions should block automation before downstream systems are updated?",
    ],
    articleSlugs: [
      "invoice-processing-automation",
      "document-processing-data-extraction-automation",
      "how-to-know-if-a-workflow-is-worth-automating",
      "ai-workflow-automation-tools",
      "ai-automation-consulting-tool-or-custom-workflow",
    ],
    nextSteps: [
      {
        label: "Start with invoice controls",
        detail: "Map capture, extraction, validation, exception routing, and approval.",
        href: "/insights/invoice-processing-automation",
      },
      {
        label: "Design extraction review",
        detail: "Define field-level confidence, source evidence, and reviewer actions.",
        href: "/insights/document-processing-data-extraction-automation",
      },
      {
        label: "Choose the delivery path",
        detail: "Decide whether a tool, custom workflow, or consultant should lead.",
        href: "/insights/ai-automation-consulting-tool-or-custom-workflow",
      },
    ],
  },
  {
    slug: "product-data-enrichment",
    title: "Product Data Enrichment",
    seoTitle: "Product Data Enrichment Automation Hub",
    description:
      "Guides for product data cleanup, enrichment, PIM workflows, catalogue image QA, attributes, validation, and reviewable imports.",
    seoDescription:
      "Explore product data enrichment, PIM cleanup, catalogue image QA, attribute validation, and review workflows for ecommerce teams.",
    eyebrow: "Topic hub",
    targetQuery: "product data enrichment",
    updatedAt: "2026-08-11",
    category: "Topic Hub",
    primaryCta: "Assess One Product Data Workflow",
    intro: [
      "Product data enrichment is not just filling missing fields. It is an operating loop for source priority, accepted values, validation, review, and import control.",
      "Use this hub to connect product attributes, image QA, catalogue compliance, ecommerce search quality, and PIM operations into a controlled workflow.",
    ],
    fit: [
      "Ecommerce, merchandising, catalogue, and PIM teams with repeated product-data maintenance work.",
      "Teams cleaning supplier feeds, attributes, taxonomy values, image issues, compatibility notes, or compliance fields.",
      "Workflows where AI suggestions need source evidence and reviewer approval before publishing.",
    ],
    decisionQuestions: [
      "Which attribute family or catalogue segment should be enriched first?",
      "Which sources are allowed, trusted, and easy for reviewers to verify?",
      "How will corrections become validation rules rather than one-off fixes?",
    ],
    articleSlugs: [
      "product-data-cleanup-automation",
      "image-qa-compliance-automation",
      "ai-workflow-automation-examples",
      "how-to-know-if-a-workflow-is-worth-automating",
      "ai-automation-consulting-tool-or-custom-workflow",
    ],
    nextSteps: [
      {
        label: "Start with enrichment",
        detail: "Map missing, stale, duplicate, inconsistent, and source-backed fields.",
        href: "/insights/product-data-cleanup-automation",
      },
      {
        label: "Add visual QA",
        detail: "Route catalogue image issues into reviewable exception queues.",
        href: "/insights/image-qa-compliance-automation",
      },
      {
        label: "Score workflow fit",
        detail: "Check frequency, source readiness, reviewability, and import risk.",
        href: "/insights/how-to-know-if-a-workflow-is-worth-automating",
      },
    ],
  },
  {
    slug: "market-intelligence-automation",
    title: "Market Intelligence Automation",
    seoTitle: "Market Intelligence Automation Hub",
    description:
      "A hub for review monitoring, competitor monitoring tools, public market signals, anomaly checks, and decision-ready intelligence briefs.",
    seoDescription:
      "Learn how review monitoring, competitor monitoring, price tracking, and public signal workflows become reliable market intelligence automation.",
    eyebrow: "Topic hub",
    targetQuery: "market intelligence automation",
    updatedAt: "2026-08-11",
    category: "Topic Hub",
    primaryCta: "Assess One Monitoring Workflow",
    intro: [
      "Market intelligence automation is useful when source monitoring, classification, confidence, anomaly review, and decision briefs are designed together.",
      "This hub connects review monitoring, competitor monitoring, price monitoring, public signal tracking, and LLM evaluation into one controlled intelligence workflow.",
    ],
    fit: [
      "Product, CX, marketing, ecommerce, operations, and leadership teams tracking public signals.",
      "Teams monitoring reviews, competitor pages, price changes, content movement, product claims, or category shifts.",
      "Workflows where a summary must preserve evidence, sample confidence, and source checks before decisions are made.",
    ],
    decisionQuestions: [
      "Which public sources are approved and worth monitoring?",
      "Which signals should trigger review before being treated as market truth?",
      "How should review data, competitor changes, and decision briefs stay traceable?",
    ],
    articleSlugs: [
      "review-intelligence-automation",
      "market-competitor-monitoring-automation",
      "content-fact-checking-automation",
      "reporting-coordination-automation",
      "ai-workflow-automation-examples",
      "how-to-know-if-a-workflow-is-worth-automating",
    ],
    nextSteps: [
      {
        label: "Review the production case",
        detail: "See how review monitoring became market-signal intelligence with hand-labeled evaluation.",
        href: "/insights/review-intelligence-automation",
      },
      {
        label: "Compare monitoring tools",
        detail: "Separate competitor monitoring tools from custom decision workflows.",
        href: "/insights/market-competitor-monitoring-automation",
      },
      {
        label: "Define evidence controls",
        detail: "Preserve source links, confidence labels, anomaly checks, and reviewer decisions.",
        href: "/insights/content-fact-checking-automation",
      },
    ],
  },
]

export function getInsightTopic(slug: string) {
  return insightTopics.find((topic) => topic.slug === slug)
}

export function getInsightTopicUrl(slug: string) {
  return `${siteConfig.url}/insights/${slug}`
}

export function getTopicInsights(topic: InsightTopic): Insight[] {
  return topic.articleSlugs
    .map((slug) => insights.find((insight) => insight.slug === slug))
    .filter((insight): insight is Insight => Boolean(insight))
}

export function getTopicsForInsight(insightSlug: string) {
  return insightTopics.filter((topic) => topic.articleSlugs.includes(insightSlug))
}
