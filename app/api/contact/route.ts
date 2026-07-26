import { NextResponse } from "next/server"

interface ContactRequest {
  name?: string
  email?: string
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
    const webhookRequestUrl = new URL(webhookUrl)

    Object.entries(payload).forEach(([key, value]) => {
      webhookRequestUrl.searchParams.set(key, value)
    })

    const webhookResponse = await fetch(webhookRequestUrl, {
      method: "GET",
    })

    if (!webhookResponse.ok) {
      return NextResponse.json({ error: "Webhook delivery failed." }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Webhook delivery failed." }, { status: 502 })
  }
}
