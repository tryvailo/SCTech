import { NextResponse } from "next/server"

interface ContactRequest {
  name?: string
  email?: string
  company?: string
  interest?: string
  message?: string
  pageUrl?: string
  referrer?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmTerm?: string
  utmContent?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const allowedInterests = new Set(["automation", "leadership", "unsure"])

function cleanValue(value: unknown) {
  return typeof value === "string" ? value.trim() : ""
}

export async function POST(request: Request) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL

  if (!webhookUrl) {
    return NextResponse.json({ error: "Contact webhook is not configured." }, { status: 503 })
  }

  let body: ContactRequest

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const name = cleanValue(body.name)
  const email = cleanValue(body.email)
  const company = cleanValue(body.company)
  const rawInterest = cleanValue(body.interest)
  const interest = allowedInterests.has(rawInterest) ? rawInterest : "unsure"
  const message = cleanValue(body.message)
  const pageUrl = cleanValue(body.pageUrl)
  const referrer = cleanValue(body.referrer)
  const utmSource = cleanValue(body.utmSource)
  const utmMedium = cleanValue(body.utmMedium)
  const utmCampaign = cleanValue(body.utmCampaign)
  const utmTerm = cleanValue(body.utmTerm)
  const utmContent = cleanValue(body.utmContent)

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 })
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 })
  }

  const payload = {
    source: "smartcoretech.co.uk",
    form: "contact",
    submittedAt: new Date().toISOString(),
    name,
    email,
    company,
    interest,
    message,
    pageUrl,
    referrer,
    utmSource,
    utmMedium,
    utmCampaign,
    utmTerm,
    utmContent,
  }

  try {
    // POST the enquiry as JSON so personal data stays out of URLs and request logs.
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    })

    if (!webhookResponse.ok) {
      console.error(`Contact webhook responded with HTTP ${webhookResponse.status}`)
      return NextResponse.json({ error: "Webhook delivery failed." }, { status: 502 })
    }

    // Apps Script web apps always answer 200, so also honour an explicit { ok: false } body.
    const result = (await webhookResponse.json().catch(() => null)) as { ok?: boolean; error?: string } | null
    if (result?.ok === false) {
      console.error(`Contact webhook rejected the enquiry: ${result.error ?? "no reason given"}`)
      return NextResponse.json({ error: "Webhook delivery failed." }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact webhook request failed:", error instanceof Error ? error.message : "unknown error")
    return NextResponse.json({ error: "Webhook delivery failed." }, { status: 502 })
  }
}
