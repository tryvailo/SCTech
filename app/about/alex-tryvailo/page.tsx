import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink, Linkedin } from "lucide-react"
import { insights } from "@/lib/insights"
import { siteConfig } from "@/lib/seo"

const alex = siteConfig.experts.alexTryvailo

export const metadata: Metadata = {
  title: "Alex Tryvailo, PhD",
  description:
    "Alex Tryvailo, PhD writes and reviews SmartCore guidance on AI enablement, adoption, governance, workflow automation, and LLM evaluation.",
  alternates: {
    canonical: "/about/alex-tryvailo",
  },
  openGraph: {
    type: "profile",
    url: "/about/alex-tryvailo",
    title: "Alex Tryvailo, PhD | SmartCore Technologies",
    description:
      "Author and AI Enablement Lead at SmartCore Technologies, covering adoption, governance, workflow automation, and LLM evaluation.",
    siteName: siteConfig.name,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Tryvailo, PhD | SmartCore Technologies",
    description:
      "Author and AI Enablement Lead at SmartCore Technologies, covering adoption, governance, workflow automation, and LLM evaluation.",
    images: ["/twitter-image"],
  },
}

const authoredInsights = insights

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${alex.url}#profile`,
  url: alex.url,
  name: alex.name,
  description:
    alex.bio,
  about: {
    "@type": "Person",
    "@id": `${alex.url}#person`,
    name: alex.name,
    jobTitle: alex.role,
    affiliation: {
      "@id": `${siteConfig.url}/#organization`,
    },
    knowsAbout: alex.expertise,
    sameAs: alex.sameAs,
    url: alex.url,
  },
  mainEntity: {
    "@id": `${alex.url}#person`,
  },
  isPartOf: {
    "@id": `${siteConfig.url}/#website`,
  },
  inLanguage: "en-GB",
}

export default function AlexTryvailoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
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

      <section className="border-b border-foreground/10 px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 font-mono text-xs uppercase tracking-normal text-foreground/50">Author and practitioner</p>
          <h1 className="max-w-4xl text-4xl font-light leading-tight tracking-normal md:text-6xl">{alex.name}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/72 md:text-xl md:leading-9">
            {alex.bio}
          </p>
        </div>
      </section>

      <section className="px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="border border-foreground/10 bg-foreground/[0.025] p-5 lg:self-start">
            <p className="font-mono text-[11px] uppercase tracking-normal text-foreground/45">Expertise</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {alex.expertise.map((item) => (
                <span key={item} className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs text-foreground/70">
                  {item}
                </span>
              ))}
            </div>
            <div className="my-5 h-px bg-foreground/10" />
            <p className="font-mono text-[11px] uppercase tracking-normal text-foreground/45">Affiliation</p>
            <p className="mt-2 text-sm leading-6 text-foreground/72">{siteConfig.shortName}</p>
            <a
              href={alex.linkedin}
              target="_blank"
              rel="me noreferrer"
              className="mt-5 inline-flex items-center gap-2 border border-foreground/12 px-3 py-2 text-sm text-foreground/75 transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn profile
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </aside>

          <div>
            <h2 className="text-3xl font-light tracking-normal">SmartCore articles by Alex</h2>
            <div className="mt-6 grid gap-4">
              {authoredInsights.map((insight) => (
                <Link
                  key={insight.slug}
                  href={`/insights/${insight.slug}`}
                  className="group flex items-start justify-between gap-4 border border-foreground/10 bg-foreground/[0.025] p-5 transition-colors hover:border-foreground/25"
                >
                  <span>
                    <span className="block font-mono text-[11px] text-foreground/45">{insight.category}</span>
                    <span className="mt-2 block text-xl font-light leading-tight tracking-normal">{insight.title}</span>
                    <span className="mt-3 block text-sm leading-6 text-foreground/62">{insight.seoDescription}</span>
                  </span>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
