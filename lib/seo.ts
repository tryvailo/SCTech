const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.smartcoretech.co.uk").replace(/\/$/, "")

export const siteConfig = {
  name: "SmartCore Technologies Ltd",
  shortName: "SmartCore Technologies",
  url: siteUrl,
  title: "SmartCore Technologies Ltd - AI Automation Consulting",
  description:
    "SmartCore Technologies helps organisations clarify complex operations, identify automation opportunities, and build practical AI-enabled systems.",
  email: "partnerships@smartcoretech.co.uk",
  address: {
    streetAddress: "Office 15055, 182-184 High Street North",
    addressLocality: "East Ham",
    addressRegion: "London",
    postalCode: "E6 2JA",
    addressCountry: "GB",
  },
  keywords: [
    "AI automation consulting",
    "operational intelligence",
    "process intelligence",
    "strategic advisory",
    "systems delivery",
    "workflow automation",
    "AI-enabled systems",
    "business process automation",
  ],
}
