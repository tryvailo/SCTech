import { NextResponse } from "next/server"

interface ContactRequest {
  name?: string
  email?: string
  message?: string
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

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 })
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 })
  }

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source: "smartcoretech.co.uk",
        form: "contact",
        submittedAt: new Date().toISOString(),
        name,
        email,
        message,
      }),
    })

    if (!webhookResponse.ok) {
      return NextResponse.json({ error: "Webhook delivery failed." }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Webhook delivery failed." }, { status: 502 })
  }
}
