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
        name: "AI enablement and workflow delivery services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Fractional AI enablement leadership",
              serviceType: "Fractional and interim AI enablement",
              description: "A named accountable lead for AI strategy, use-case prioritisation, practical governance, adoption, delivery cadence, and capability transfer.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Workflow diagnostics",
              serviceType: "Workflow diagnostic",
              description: "Mapping repetitive operational work, inputs, failure points, outputs, quality constraints, and automation potential.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Controlled AI workflow automation",
              serviceType: "AI automation services",
              description: "Designing AI-enabled workflows with source boundaries, rules, review points, audit trails, and human approval where needed.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI enablement programme",
              serviceType: "AI enablement and adoption consulting",
              description: "A 12-20 week programme covering AI maturity assessment, use-case prioritisation, practical governance, internal champions, workflow pilots, adoption measurement, and handover.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Operational intelligence systems",
              serviceType: "Operational intelligence",
              description: "Turning feedback, product data, content, reporting, and internal decision flows into clearer operational outputs.",
            },
          },
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
      name: "AI enablement and workflow delivery",
      serviceType: "Fractional AI enablement leadership and controlled workflow delivery",
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
