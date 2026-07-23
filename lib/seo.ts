const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.smartcoretech.co.uk").replace(/\/$/, "")

export const siteConfig = {
  name: "SmartCore Technologies Ltd",
  shortName: "SmartCore Technologies",
  url: siteUrl,
  title: "SmartCore Technologies Ltd - AI Workflow Automation for Operational Work",
  description:
    "SmartCore Technologies helps teams map repetitive operational work, test it on real data, and build controlled AI workflows for feedback, product data, content, reporting, and internal decisions.",
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
    "AI workflow automation",
    "operational intelligence",
    "process intelligence",
    "strategic advisory",
    "systems delivery",
    "workflow automation",
    "AI-enabled systems",
    "business process automation",
    "workflow diagnostic",
    "content automation",
    "reporting automation",
  ],
}
