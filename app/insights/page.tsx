import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Search } from "lucide-react"
import { insights } from "@/lib/insights"
import { insightTopics } from "@/lib/insight-topics"
import { siteConfig } from "@/lib/seo"

const pageDescription =
  "Practical guides on AI enablement, adoption, governance, and workflow automation for US and UK operations teams."

export const metadata: Metadata = {
  title: "AI Enablement and Workflow Automation Insights",
  description: pageDescription,
  keywords: [
    "AI workflow automation",
    "AI enablement",
    "AI readiness assessment",
    "AI governance framework",
    "AI adoption strategy",
    "AI automation services",
    "workflow automation tools",
    "workflow automation services",
    "AI automation consulting",
    "operational workflow automation",
    "product data automation",
    "review intelligence automation",
    "content fact checking automation",
    "AI reporting automation",
  ],
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    type: "website",
    url: "/insights",
    title: "AI Enablement and Workflow Automation Insights | SmartCore",
    description: pageDescription,
    siteName: siteConfig.name,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Enablement and Workflow Automation Insights | SmartCore",
    description: pageDescription,
    images: ["/twitter-image"],
  },
}

const representativeOutcomes = [
  {
    value: "95%",
    label: "shorter review cycle time",
    detail: "3.5 days to 4 hours in a prior review-intelligence workflow",
  },
  {
    value: "2.1M+",
    label: "images processed",
    detail: "catalogue image QA converted into reviewable exception queues",
  },
  {
    value: "100+",
    label: "articles/day",
    detail: "source-grounded verification capacity with editorial review",
  },
  {
    value: "Up to 96%",
    label: "lower image-production overhead",
    detail: "per-item visual workflow optimisation without exposing commercial terms",
  },
]

const readerPaths = [
  {
    eyebrow: "Set direction",
    title: "Build an AI programme worth funding",
    description: "Clarify readiness, priorities, controls, and ownership before expanding disconnected experiments.",
    slugs: ["what-is-ai-enablement", "ai-readiness-assessment", "ai-governance-framework-for-adoption"],
  },
  {
    eyebrow: "Choose a delivery path",
    title: "Decide how the work should be delivered",
    description: "Compare leadership models, service providers, tools, and custom delivery against the mandate you have.",
    slugs: [
      "fractional-ai-officer-vs-interim-head-of-ai",
      "ai-workflow-automation-services",
      "ai-automation-consulting-tool-or-custom-workflow",
    ],
  },
  {
    eyebrow: "Improve a workflow",
    title: "Start with a measurable operating problem",
    description: "Find repeatable work where speed, quality, capacity, or decision-making can improve within weeks.",
    slugs: [
      "customer-service-automation-with-ai",
      "how-to-know-if-a-workflow-is-worth-automating",
      "ai-workflow-automation-examples",
    ],
  },
]

const implementationExampleSlugs = [
  "review-intelligence-automation",
  "invoice-processing-automation",
  "document-processing-data-extraction-automation",
  "product-data-cleanup-automation",
  "market-competitor-monitoring-automation",
  "content-fact-checking-automation",
]

export default function InsightsPage() {
  const paths = readerPaths.map((path) => ({
    ...path,
    resources: path.slugs
      .map((slug) => insights.find((insight) => insight.slug === slug))
      .filter((insight): insight is (typeof insights)[number] => Boolean(insight)),
  }))
  const implementationExamples = implementationExampleSlugs
    .map((slug) => insights.find((insight) => insight.slug === slug))
    .filter((insight): insight is (typeof insights)[number] => Boolean(insight))

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteConfig.url}/insights#collection`,
    url: `${siteConfig.url}/insights`,
    name: "SmartCore Insights",
    description: pageDescription,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-GB",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        ...insightTopics.map((topic, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteConfig.url}/insights/${topic.slug}`,
          name: topic.title,
          description: topic.seoDescription,
        })),
        ...insights.map((insight, index) => ({
          "@type": "ListItem",
          position: insightTopics.length + index + 1,
          url: `${siteConfig.url}/insights/${insight.slug}`,
          name: insight.title,
          description: insight.seoDescription,
        })),
      ],
    },
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="flex items-center gap-3 text-foreground transition-opacity hover:opacity-80">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/10">
              <span className="font-sans text-lg font-bold">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-semibold leading-none md:text-base">SmartCore</span>
              <span className="font-sans text-[10px] leading-none text-foreground/60 md:text-xs">Insights</span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden items-center gap-2 rounded-full border border-foreground/10 px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-foreground/30 hover:text-foreground sm:inline-flex"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Home
            </Link>
            <Link
              href="/#contact"
              className="whitespace-nowrap rounded-full bg-foreground px-3 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.02] sm:px-4 sm:text-sm"
            >
              Assess One Workflow
            </Link>
          </div>
        </div>
      </header>

      <section className="border-b border-foreground/10 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs text-foreground/70">
              <Search className="h-3.5 w-3.5" aria-hidden="true" />
              AI enablement and workflow automation
            </div>
            <h1 className="max-w-4xl font-sans text-4xl font-light leading-tight tracking-normal md:text-6xl">
              Find the right path from AI interest to business value.
            </h1>
          </div>
          <div className="max-w-2xl text-base leading-7 text-foreground/72 md:text-lg md:leading-8">
            <p>
              Start with the decision you need to make. Build an AI programme, choose a delivery model, or improve one
              measurable workflow. Each path leads to a focused set of practical guides.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-end justify-between gap-4 border-b border-foreground/10 pb-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-normal text-foreground/45">Choose your starting point</p>
              <h2 className="mt-2 text-3xl font-light tracking-normal md:text-4xl">What decision are you making?</h2>
            </div>
            <span className="hidden text-sm text-foreground/45 md:block">Three curated paths</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {paths.map((path, pathIndex) => (
              <article key={path.title} className="border border-foreground/12 bg-foreground/[0.025] p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-normal text-foreground/45">
                  0{pathIndex + 1} / {path.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-light leading-tight tracking-normal">{path.title}</h3>
                <p className="mt-3 text-sm leading-6 text-foreground/65">{path.description}</p>
                <div className="mt-6 border-t border-foreground/10">
                  {path.resources.map((insight) => (
                    <Link
                      key={insight.slug}
                      href={`/insights/${insight.slug}`}
                      className="group flex items-start justify-between gap-4 border-b border-foreground/10 py-4 text-sm leading-5 text-foreground/78 transition-colors last:border-b-0 hover:text-foreground"
                    >
                      <span>{insight.title}</span>
                      <ArrowRight
                        className="mt-0.5 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-end justify-between gap-4 border-b border-foreground/10 pb-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-normal text-foreground/45">Go deeper</p>
              <h2 className="mt-2 text-3xl font-light tracking-normal md:text-4xl">Explore by topic</h2>
            </div>
            <span className="text-xs text-foreground/45">{insightTopics.length} topic hubs</span>
          </div>
          <div className="grid border-t border-foreground/10 md:grid-cols-2 xl:grid-cols-5">
            {insightTopics.map((topic, index) => (
              <Link
                key={topic.slug}
                href={`/insights/${topic.slug}`}
                className={`group flex min-h-52 flex-col justify-between border-b border-foreground/10 p-5 transition-colors hover:bg-foreground/[0.035] md:border-r ${
                  index % 2 === 1 ? "md:border-r-0 xl:border-r" : ""
                } ${index === insightTopics.length - 1 ? "xl:border-r-0" : ""}`}
              >
                <div>
                  <p className="font-mono text-[11px] text-foreground/40">0{index + 1}</p>
                  <h3 className="mt-4 text-xl font-light leading-tight tracking-normal">{topic.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-foreground/62">{topic.description}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/72">
                  View guides
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-end justify-between gap-4 border-b border-foreground/10 pb-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-normal text-foreground/45">See how it works</p>
              <h2 className="mt-2 text-3xl font-light tracking-normal md:text-4xl">Implementation examples</h2>
            </div>
            <span className="text-xs text-foreground/45">{implementationExamples.length} examples</span>
          </div>
          <div className="grid border-t border-foreground/10 md:grid-cols-2">
            {implementationExamples.map((insight, index) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className={`group flex items-start justify-between gap-5 border-b border-foreground/10 p-5 transition-colors hover:bg-foreground/[0.035] md:min-h-40 md:p-6 ${
                  index % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <div>
                  <p className="font-mono text-[11px] text-foreground/40">0{index + 1} / {insight.readingTime}</p>
                  <h3 className="mt-3 text-xl font-light leading-tight tracking-normal">{insight.title}</h3>
                  {insight.outcome ? (
                    <p className="mt-3 text-sm leading-6 text-foreground/62">
                      <span className="text-foreground">{insight.outcome.value}</span> {insight.outcome.label}
                    </p>
                  ) : (
                    <p className="mt-3 text-sm leading-6 text-foreground/62">{insight.description}</p>
                  )}
                </div>
                <ArrowRight
                  className="mt-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-foreground/10 px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-4">
            {representativeOutcomes.map((outcome) => (
              <div key={outcome.label} className="border-l border-foreground/15 py-2 pl-4">
                <strong className="block text-2xl font-light leading-none tracking-normal text-foreground">
                  {outcome.value}
                </strong>
                <p className="mt-2 text-sm leading-5 text-foreground/72">{outcome.label}</p>
                <p className="mt-2 text-xs leading-5 text-foreground/48">{outcome.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-foreground/10 pt-8 md:flex-row md:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-normal text-foreground/45">Have a workflow in mind?</p>
              <h2 className="mt-2 text-2xl font-light tracking-normal md:text-3xl">Start with the operating problem.</h2>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
            >
              Assess One Workflow
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
