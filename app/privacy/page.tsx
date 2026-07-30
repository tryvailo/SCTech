import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How SmartCore Technologies handles website enquiries, contact form data, and operational workflow assessment requests.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Notice | SmartCore Technologies",
    description:
      "How SmartCore Technologies handles website enquiries, contact form data, and operational workflow assessment requests.",
    url: "/privacy",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteConfig.url}/privacy#webpage`,
  url: `${siteConfig.url}/privacy`,
  name: "Privacy Notice",
  description:
    "How SmartCore Technologies handles website enquiries, contact form data, and operational workflow assessment requests.",
  isPartOf: {
    "@id": `${siteConfig.url}/#website`,
  },
  about: {
    "@id": `${siteConfig.url}/#organization`,
  },
  dateModified: siteConfig.privacyUpdatedAt,
  inLanguage: "en-GB",
}

const sections = [
  {
    title: "Who we are",
    body: [
      "SmartCore Technologies Ltd is a UK-based consultancy working with US and UK teams on workflow diagnostics, AI automation, operational intelligence, and related integration work.",
      `For privacy questions, contact us at ${siteConfig.email}.`,
    ],
  },
  {
    title: "What we collect",
    body: [
      "When you use the contact form, we collect the name, email address, and message you provide.",
      "The form may also send basic enquiry context such as the page URL, referrer, and UTM campaign parameters so we can understand which outreach or content led to the enquiry.",
      "If you email us directly, we process the information included in your message and any follow-up correspondence.",
    ],
  },
  {
    title: "Why we use it",
    body: [
      "We use enquiry data to respond to your request, assess whether we can help with a workflow, prepare relevant follow-up, and maintain a record of business conversations.",
      "Our usual legal basis is legitimate interests in responding to B2B enquiries and developing business relationships. If a conversation becomes contractual, some processing may be necessary to take steps before entering into a contract or to perform a contract.",
    ],
  },
  {
    title: "How the form is processed",
    body: [
      "Website form submissions are routed through our website backend and automation tooling so the enquiry can be delivered to the SmartCore team.",
      "We use service providers for website hosting, form delivery, automation, email, and related business operations. These providers process data only as needed to provide their services.",
    ],
  },
  {
    title: "International processing",
    body: [
      "Because we work with US and UK teams and use modern cloud providers, data may be processed outside the UK or EEA.",
      "Where required, we rely on appropriate safeguards such as provider data processing terms, contractual protections, and transfer mechanisms offered by our service providers.",
    ],
  },
  {
    title: "Retention",
    body: [
      "We keep enquiry and correspondence data only as long as needed for the conversation, business follow-up, record keeping, and legitimate operational needs.",
      "As a practical baseline, routine website enquiries are reviewed for deletion or archiving within 24 months after the last meaningful interaction unless we need to keep them longer for legal, contractual, or business record reasons.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "Depending on where you are located, you may have rights to request access, correction, deletion, restriction, portability, or objection to certain processing.",
      `To make a request, email ${siteConfig.email}. We may need to verify your identity before acting on a request.`,
    ],
  },
  {
    title: "Cookies and analytics",
    body: [
      "We do not use the contact form to collect sensitive personal data, payment data, or account credentials.",
      "The site may generate standard hosting logs for security, debugging, and reliability. If we add optional analytics or advertising cookies, we will update this notice and add the appropriate consent controls where required.",
    ],
  },
  {
    title: "Updates",
    body: [
      "We may update this notice as the website, contact flow, or service providers change.",
      `Last updated: ${siteConfig.privacyUpdatedAt}.`,
    ],
  },
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto flex w-full max-w-5xl flex-col px-5 py-6 sm:px-8 md:px-12 md:py-10">
        <header className="mb-12 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/10 text-lg font-semibold">
              S
            </span>
            <span>
              <span className="block text-sm font-semibold leading-none">SmartCore</span>
              <span className="block text-xs text-foreground/60">Technologies Ltd</span>
            </span>
          </Link>
          <Link href="/#contact" className="text-sm text-foreground/70 underline underline-offset-4 hover:text-foreground">
            Contact
          </Link>
        </header>

        <section className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase text-foreground/50">Privacy Notice</p>
          <h1 className="mb-5 text-4xl font-light leading-tight tracking-tight md:text-6xl">How we handle enquiry data</h1>
          <p className="text-base leading-7 text-foreground/75 md:text-lg">
            This notice explains how SmartCore Technologies handles personal data submitted through this website, email
            enquiries, and workflow assessment conversations.
          </p>
        </section>

        <div className="grid gap-10 md:grid-cols-[220px_1fr]">
          <aside className="hidden text-sm text-foreground/50 md:block">
            <p>{siteConfig.name}</p>
            <p>{siteConfig.address.streetAddress}</p>
            <p>
              {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} {siteConfig.address.postalCode}
            </p>
            <p className="mt-4">{siteConfig.email}</p>
          </aside>

          <div className="space-y-9">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-3 text-xl font-medium tracking-tight">{section.title}</h2>
                <div className="space-y-3 text-sm leading-7 text-foreground/75 md:text-base">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
