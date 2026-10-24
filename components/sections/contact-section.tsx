"use client"

import { MapPin } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { useState, type FormEvent } from "react"
import { MagneticButton } from "@/components/magnetic-button"

const interests = [
  {
    value: "automation",
    label: "Automate a workflow",
    placeholder: "Which process is slow, manual or hard to scale? Rough volumes help.",
  },
  {
    value: "leadership",
    label: "AI leadership",
    placeholder: "What should the AI lead own, how many days a week, and from when?",
  },
  {
    value: "unsure",
    label: "Not sure yet",
    placeholder: "What are you trying to improve?",
  },
] as const

type Interest = (typeof interests)[number]["value"]

const emptyForm = { name: "", email: "", company: "", message: "", interest: "automation" as Interest }

const fieldClassName =
  "w-full border-b border-foreground/30 bg-transparent py-1 text-xs text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-1.5 md:text-sm lg:py-2 lg:text-base"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [formData, setFormData] = useState(emptyForm)
  const activeInterest = interests.find((interest) => interest.value === formData.interest) ?? interests[0]
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return
    }

    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError("")

    try {
      const currentUrl = typeof window !== "undefined" ? window.location.href : ""
      const referrer = typeof document !== "undefined" ? document.referrer : ""
      const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          pageUrl: currentUrl,
          referrer,
          utmSource: searchParams?.get("utm_source") || "",
          utmMedium: searchParams?.get("utm_medium") || "",
          utmCampaign: searchParams?.get("utm_campaign") || "",
          utmTerm: searchParams?.get("utm_term") || "",
          utmContent: searchParams?.get("utm_content") || "",
        }),
      })

      if (!response.ok) {
        throw new Error("Contact request failed")
      }

      setSubmitSuccess(true)
      setFormData({ ...emptyForm, interest: formData.interest })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch {
      setSubmitError("Something went wrong. Please try again in a few minutes.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="flex h-full w-screen shrink-0 snap-start items-center overflow-y-auto px-4 py-6 md:px-12 md:py-14 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-4 transition-all duration-700 md:mb-8 lg:mb-12 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <h2 className="mb-1 max-w-3xl font-sans text-3xl font-light leading-[1.05] tracking-tight text-foreground md:mb-2 md:text-5xl lg:mb-3 lg:text-6xl xl:text-7xl">
                Tell us what you need
              </h2>
              <p className="font-mono text-[10px] text-foreground/60 md:text-xs lg:text-base">
                / A workflow to automate, AI leadership — or not sure yet
              </p>
              <p className="mt-3 text-sm text-foreground/80 md:text-base">We reply within one working day.</p>
            </div>

            <div className="space-y-3 md:space-y-4 lg:space-y-8">
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <div className="mb-0.5 flex items-center gap-2 md:mb-1">
                  <MapPin className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-[10px] text-foreground/60 md:text-xs">Location</span>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-foreground md:text-base lg:text-lg">
                  London-based, working remotely with US and UK teams. Office 15055, 182-184 High Street North, East Ham,
                  London E6 2JA.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Minimal form */}
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 lg:space-y-6">
              <fieldset
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                <legend className="mb-1.5 block font-mono text-[10px] text-foreground/60 md:mb-2 md:text-xs">
                  What do you need?
                </legend>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => {
                    const isActive = formData.interest === interest.value
                    return (
                      <button
                        key={interest.value}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setFormData({ ...formData, interest: interest.value })}
                        className={`rounded-full border px-3 py-1 text-xs transition-colors md:text-sm ${
                          isActive
                            ? "border-foreground bg-foreground text-background"
                            : "border-foreground/30 text-foreground/80 hover:border-foreground/60 hover:text-foreground"
                        }`}
                      >
                        {interest.label}
                      </button>
                    )
                  })}
                </div>
              </fieldset>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <label className="mb-0.5 block font-mono text-[10px] text-foreground/60 md:mb-1 md:text-xs">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className={fieldClassName}
                  placeholder="Your name"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <label className="mb-0.5 block font-mono text-[10px] text-foreground/60 md:mb-1 md:text-xs">
                  Work email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className={fieldClassName}
                  placeholder="your@email.com"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: "425ms" }}
              >
                <label className="mb-0.5 block font-mono text-[10px] text-foreground/60 md:mb-1 md:text-xs">
                  Company (optional)
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className={fieldClassName}
                  placeholder="Company name"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <label className="mb-0.5 block font-mono text-[10px] text-foreground/60 md:mb-1 md:text-xs">
                  Message
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className={fieldClassName}
                  placeholder={activeInterest.placeholder}
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "650ms" }}
              >
                <MagneticButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Start the Conversation"}
                </MagneticButton>
                <p className="mt-3 text-center text-[11px] leading-relaxed text-foreground/55 md:text-xs">
                  By sending this form, you acknowledge that we process your enquiry data to respond to your request. See{" "}
                  <a href="/privacy" className="underline underline-offset-4 transition-colors hover:text-foreground">
                    Privacy Notice
                  </a>
                  .
                </p>
                {submitSuccess && (
                  <p className="mt-2 text-center font-mono text-xs text-foreground/80 md:mt-3 md:text-sm">
                    Thanks — we&apos;ll be in touch soon.
                  </p>
                )}
                {submitError && (
                  <p className="mt-2 text-center font-mono text-xs text-foreground/70 md:mt-3 md:text-sm">
                    {submitError}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
