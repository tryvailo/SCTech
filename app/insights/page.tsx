import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Search } from "lucide-react"
import { insights } from "@/lib/insights"
import { siteConfig } from "@/lib/seo"

const pageDescription =
  "Practical guides and automation examples for AI workflows in operations, product data, content, reporting, and market intelligence."

export const metadata: Metadata = {
  title: "Insights on AI Workflow Automation",
  description: pageDescription,
  keywords: [
    "AI workflow automation",
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
    title: "Insights on AI Workflow Automation | SmartCore",
    description: pageDescription,
    siteName: siteConfig.name,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights on AI Workflow Automation | SmartCore",
    description: pageDescription,
    images: ["/twitter-image"],
  },
}

const categoryOrder = ["Guide", "Operating Model", "Automation Example"]

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

export default function InsightsPage() {
  const featured = insights[0]
  const groupedInsights = categoryOrder.map((category) => ({
    category,
    items: insights.filter((insight) => insight.category === category),
  }))

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
    mainEntity: insights.map((insight, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteConfig.url}/insights/${insight.slug}`,
      name: insight.title,
    })),
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
              className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
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
              AI workflow automation research
            </div>
            <h1 className="max-w-4xl font-sans text-4xl font-light leading-tight tracking-normal md:text-6xl">
              Practical insights for turning repetitive work into controlled AI workflows.
            </h1>
          </div>
          <div className="max-w-2xl text-base leading-7 text-foreground/72 md:text-lg md:leading-8">
            <p>
              Guides, operating models, and automation examples for teams working with product data, customer feedback,
              content, reporting, market intelligence, and internal decision support.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl space-y-6">
          <Link
            href={`/insights/${featured.slug}`}
            className="group grid gap-8 border border-foreground/12 bg-foreground/[0.035] p-6 transition-colors hover:border-foreground/28 md:grid-cols-[0.9fr_1.1fr] md:p-8"
          >
            <div className="flex min-h-64 flex-col justify-between border border-foreground/10 bg-background/70 p-5">
              <div className="grid grid-cols-3 gap-3">
                {["Inputs", "AI task", "Review", "Output", "Monitor", "Improve"].map((item) => (
                  <div key={item} className="border border-foreground/10 bg-foreground/5 px-3 py-4">
                    <span className="font-mono text-[11px] text-foreground/65">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 h-px w-full bg-gradient-to-r from-[#1275d8] via-foreground/30 to-[#e19136]" />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-foreground/55">
                  <span>{featured.category}</span>
                  <span className="h-1 w-1 rounded-full bg-foreground/30" />
                  <span>{featured.readingTime}</span>
                  <span className="h-1 w-1 rounded-full bg-foreground/30" />
                  <span>Updated {formatDate(featured.updatedAt)}</span>
                </div>
                <h2 className="max-w-3xl text-3xl font-light leading-tight tracking-normal md:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-foreground/70">{featured.seoDescription}</p>
              </div>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                Read the guide
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </div>
            </div>
          </Link>

          <div className="grid gap-3 md:grid-cols-4">
            {representativeOutcomes.map((outcome) => (
              <div key={outcome.label} className="border border-foreground/10 bg-foreground/[0.025] p-4">
                <p className="font-mono text-[11px] uppercase tracking-normal text-foreground/45">
                  Representative outcome
                </p>
                <strong className="mt-3 block text-2xl font-light leading-none tracking-normal text-foreground">
                  {outcome.value}
                </strong>
                <p className="mt-2 text-sm leading-5 text-foreground/72">{outcome.label}</p>
                <p className="mt-3 text-xs leading-5 text-foreground/48">{outcome.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl space-y-12">
          {groupedInsights.map(({ category, items }) => (
            <div key={category}>
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-foreground/10 pb-3">
                <h2 className="font-mono text-xs uppercase tracking-normal text-foreground/55">{category}</h2>
                <span className="text-xs text-foreground/45">{items.length} articles</span>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {items.map((insight) => (
                  <Link
                    key={insight.slug}
                    href={`/insights/${insight.slug}`}
                    className="group flex min-h-72 flex-col justify-between border border-foreground/10 bg-foreground/[0.025] p-5 transition-colors hover:border-foreground/25"
                  >
                    <div>
                      <div className="mb-4 flex items-center gap-2 text-xs text-foreground/50">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{insight.readingTime}</span>
                      </div>
                      <h3 className="text-2xl font-light leading-tight tracking-normal">{insight.title}</h3>
                      <p className="mt-4 text-sm leading-6 text-foreground/65">{insight.seoDescription}</p>
                      {insight.outcome && (
                        <p className="mt-5 border-l border-foreground/15 pl-3 font-mono text-[11px] leading-5 text-foreground/55">
                          {insight.outcome.value} {insight.outcome.label}
                        </p>
                      )}
                    </div>
                    <div className="mt-8 flex items-center justify-between gap-4">
                      <span className="font-mono text-[11px] text-foreground/45">{insight.searchIntent}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00Z`))
}
