import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CalendarDays, Clock, ExternalLink } from "lucide-react"
import {
  getArticlePlainText,
  getInsight,
  getInsightUrl,
  getRelatedInsights,
  insights,
  type Insight,
  type InsightSection,
} from "@/lib/insights"
import { siteConfig } from "@/lib/seo"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const insight = getInsight(slug)

  if (!insight) {
    return {}
  }

  return {
    title: insight.seoTitle,
    description: insight.seoDescription,
    keywords: insight.keywords,
    alternates: {
      canonical: `/insights/${insight.slug}`,
    },
    openGraph: {
      type: "article",
      url: `/insights/${insight.slug}`,
      title: `${insight.seoTitle} | SmartCore`,
      description: insight.seoDescription,
      siteName: siteConfig.name,
      locale: "en_GB",
      publishedTime: insight.publishedAt,
      modifiedTime: insight.updatedAt,
      authors: [siteConfig.name],
    },
    twitter: {
      card: "summary_large_image",
      title: `${insight.seoTitle} | SmartCore`,
      description: insight.seoDescription,
      images: ["/twitter-image"],
    },
  }
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params
  const insight = getInsight(slug)

  if (!insight) {
    notFound()
  }

  const relatedInsights = getRelatedInsights(insight)
  const articleUrl = getInsightUrl(insight.slug)
  const articleJsonLd = buildArticleJsonLd(insight, articleUrl)
  const faqJsonLd = buildFaqJsonLd(insight, articleUrl)
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(insight, articleUrl)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/insights" className="inline-flex items-center gap-2 text-sm text-foreground/75 hover:text-foreground">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Insights
          </Link>
          <Link
            href="/#contact"
            className="whitespace-nowrap rounded-full bg-foreground px-3 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.02] sm:px-4 sm:text-sm"
          >
            Assess One Workflow
          </Link>
        </div>
      </header>

      <article>
        <section className="border-b border-foreground/10 px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-foreground/55">
              <span className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1">{insight.category}</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {insight.readingTime}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                Updated {formatDate(insight.updatedAt)}
              </span>
              <span>SmartCore Technologies</span>
            </div>

            <h1 className="max-w-4xl text-4xl font-light leading-tight tracking-normal md:text-6xl">
              {insight.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/72 md:text-xl md:leading-9">
              {insight.summary}
            </p>

            {insight.outcome && (
              <div className="mt-8 max-w-3xl border border-foreground/10 bg-foreground/[0.035] p-5">
                <p className="font-mono text-[11px] uppercase tracking-normal text-foreground/45">
                  Representative outcome
                </p>
                <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-4">
                  <strong className="font-sans text-3xl font-light leading-none tracking-normal text-foreground md:text-5xl">
                    {insight.outcome.value}
                  </strong>
                  <p className="max-w-xl text-sm leading-6 text-foreground/72">{insight.outcome.label}</p>
                </div>
                <p className="mt-4 text-xs leading-5 text-foreground/55">{insight.outcome.detail}</p>
              </div>
            )}

            <div className="mt-10 grid gap-4 border border-foreground/10 bg-foreground/[0.025] p-5 md:grid-cols-2">
              {insight.takeaways.map((takeaway) => (
                <div key={takeaway} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e19136]" />
                  <p className="text-sm leading-6 text-foreground/72">{takeaway}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,1fr)_260px]">
            <div className="space-y-14">
              {insight.sections.map((section) => (
                <ArticleSection key={section.heading} section={section} />
              ))}

              <section className="border-t border-foreground/10 pt-10">
                <h2 className="text-3xl font-light tracking-normal">Common Questions</h2>
                <div className="mt-6 divide-y divide-foreground/10 border-y border-foreground/10">
                  {insight.faq.map((item) => (
                    <div key={item.question} className="py-5">
                      <h3 className="text-lg font-medium">{item.question}</h3>
                      <p className="mt-2 text-sm leading-6 text-foreground/68">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="border-t border-foreground/10 pt-10">
                <h2 className="text-3xl font-light tracking-normal">Research References</h2>
                <div className="mt-5 space-y-3">
                  {insight.sources.map((source) => (
                    <a
                      key={source.url}
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-start justify-between gap-4 border border-foreground/10 bg-foreground/[0.025] p-4 text-sm text-foreground/75 transition-colors hover:border-foreground/25 hover:text-foreground"
                    >
                      <span>{source.title}</span>
                      <ExternalLink className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </section>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="border border-foreground/10 bg-foreground/[0.025] p-5">
                <p className="font-mono text-[11px] uppercase tracking-normal text-foreground/45">Primary topic</p>
                <p className="mt-2 text-sm leading-6 text-foreground/78">{insight.targetQuery}</p>
                <div className="my-5 h-px bg-foreground/10" />
                <p className="font-mono text-[11px] uppercase tracking-normal text-foreground/45">Search intent</p>
                <p className="mt-2 text-sm leading-6 text-foreground/70">{insight.searchIntent}</p>
                {insight.outcome && (
                  <>
                    <div className="my-5 h-px bg-foreground/10" />
                    <p className="font-mono text-[11px] uppercase tracking-normal text-foreground/45">Outcome signal</p>
                    <p className="mt-2 text-sm leading-6 text-foreground/70">
                      {insight.outcome.value} {insight.outcome.label}
                    </p>
                  </>
                )}
                <div className="my-5 h-px bg-foreground/10" />
                <p className="font-mono text-[11px] uppercase tracking-normal text-foreground/45">SmartCore angle</p>
                <p className="mt-2 text-sm leading-6 text-foreground/70">
                  Map one recurring workflow, test it with real inputs, then build the control layer around AI output.
                </p>
                <Link
                  href="/#contact"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
                >
                  Assess One Workflow
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {relatedInsights.length > 0 && (
        <section className="border-t border-foreground/10 px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-light tracking-normal">Related Insights</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {relatedInsights.map((related) => (
                <Link
                  key={related.slug}
                  href={`/insights/${related.slug}`}
                  className="group flex min-h-52 flex-col justify-between border border-foreground/10 bg-foreground/[0.025] p-5 transition-colors hover:border-foreground/25"
                >
                  <div>
                    <p className="font-mono text-[11px] text-foreground/45">{related.category}</p>
                    <h3 className="mt-3 text-xl font-light leading-tight tracking-normal">{related.title}</h3>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/75">
                    Read next
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

function ArticleSection({ section }: { section: InsightSection }) {
  return (
    <section>
      <h2 className="text-3xl font-light leading-tight tracking-normal md:text-4xl">{section.heading}</h2>
      <div className="mt-5 space-y-5">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-base leading-8 text-foreground/72">
            {paragraph}
          </p>
        ))}
      </div>

      {section.bullets && (
        <div className="mt-6 grid gap-3">
          {section.bullets.map((bullet) => (
            <div key={bullet} className="flex gap-3 border-l border-foreground/15 pl-4">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1275d8]" />
              <p className="text-sm leading-6 text-foreground/70">{bullet}</p>
            </div>
          ))}
        </div>
      )}

      {section.table && (
        <div className="mt-7 overflow-x-auto border border-foreground/10">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-foreground/10 bg-foreground/[0.04]">
                {section.table.columns.map((column) => (
                  <th key={column} className="px-4 py-3 font-mono text-[11px] uppercase tracking-normal text-foreground/55">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-foreground/10">
              {section.table.rows.map((row) => (
                <tr key={row.join("|")} className="align-top">
                  {row.map((cell) => (
                    <td key={cell} className="px-4 py-4 leading-6 text-foreground/72">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

function buildArticleJsonLd(insight: Insight, articleUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}#article`,
    headline: insight.title,
    description: insight.seoDescription,
    articleBody: getArticlePlainText(insight),
    wordCount: getArticlePlainText(insight).split(/\s+/).filter(Boolean).length,
    keywords: insight.keywords,
    datePublished: insight.publishedAt,
    dateModified: insight.updatedAt,
    mainEntityOfPage: articleUrl,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    about: insight.targetQuery,
    inLanguage: "en-GB",
  }
}

function buildFaqJsonLd(insight: Insight, articleUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${articleUrl}#faq`,
    mainEntity: insight.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

function buildBreadcrumbJsonLd(insight: Insight, articleUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${articleUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Insights",
        item: `${siteConfig.url}/insights`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: insight.title,
        item: articleUrl,
      },
    ],
  }
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00Z`))
}
