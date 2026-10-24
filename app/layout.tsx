import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import HeaderFooterObserver from "@/components/header-footer-observer"
import { siteConfig } from "@/lib/seo"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.experts.alexTryvailo.name, url: siteConfig.experts.alexTryvailo.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: "en_GB",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SmartCore Technologies - AI workflow automation consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
  ...(googleVerification || bingVerification
    ? {
        verification: {
          ...(googleVerification ? { google: googleVerification } : {}),
          ...(bingVerification ? { other: { "msvalidate.01": bingVerification } } : {}),
        },
      }
    : {}),
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0b0b0b",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      legalName: siteConfig.name,
      alternateName: siteConfig.shortName,
      url: siteConfig.url,
      email: siteConfig.email,
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        ...siteConfig.address,
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: siteConfig.email,
        contactType: "business enquiries",
        areaServed: ["US", "GB"],
        availableLanguage: ["en"],
      },
      areaServed: [
        {
          "@type": "Country",
          name: "United States",
        },
        {
          "@type": "Country",
          name: "United Kingdom",
        },
      ],
      knowsAbout: siteConfig.keywords,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI workflow automation and fractional AI leadership",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Workflow automation audit",
              serviceType: "AI workflow automation",
              description: "A 1–2 week assessment of one operational workflow: volumes, systems, success metric and expected return.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Workflow automation pilot",
              serviceType: "AI workflow automation",
              description: "A 3–6 week build on real data with human review, measured against the baseline.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Automation run and improve plan",
              serviceType: "AI automation support",
              description: "Monthly monitoring, fixes and improvements for automations in production, or a full handover to the client team.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Fractional AI lead",
              serviceType: "Fractional AI leadership",
              description: "A senior AI lead 1–3 days a week who ranks profitable use cases and owns AI priorities, the automation and AI product roadmap, governance and delivery cadence.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Interim head of AI cover",
              serviceType: "Interim AI leadership",
              description: "Full-time cover for 3–12 months while a company hires, restructures or launches an AI programme.",
            },
          }
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
      inLanguage: "en-GB",
    },
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/#webpage`,
      url: siteConfig.url,
      name: siteConfig.title,
      description: siteConfig.description,
      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },
      about: {
        "@id": `${siteConfig.url}/#organization`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/opengraph-image`,
      },
      inLanguage: "en-GB",
    },
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/#ai-enablement-workflow-delivery-service`,
      name: "AI workflow automation and fractional AI leadership",
      serviceType: "AI use-case discovery, workflow automation and fractional or interim AI leadership",
      description: siteConfig.description,
      provider: {
        "@id": `${siteConfig.url}/#organization`,
      },
      areaServed: ["US", "GB"],
      audience: {
        "@type": "BusinessAudience",
        audienceType: "US and UK mid-market leadership, operations, customer support, product, and transformation teams",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <HeaderFooterObserver />
        {children}
      </body>
    </html>
  )
}
