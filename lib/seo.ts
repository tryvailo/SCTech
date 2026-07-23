const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.smartcoretech.co.uk").replace(/\/$/, "")

export const siteConfig = {
  name: "SmartCore Technologies Ltd",
  shortName: "SmartCore Technologies",
  url: siteUrl,
  title: "SmartCore Technologies Ltd - AI Workflow Automation Consulting",
  description:
    "SmartCore Technologies helps organisations diagnose repetitive workflows and build controlled AI-enabled systems for feedback, product data, content, reporting, and complex operations.",
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
