"use client"

import { Mail, MapPin } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { useState, type FormEvent } from "react"
import { MagneticButton } from "@/components/magnetic-button"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
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
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch {
      setSubmitError("Something went wrong. Please email us directly.")
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
              <h2 className="mb-1 font-sans text-3xl font-light leading-[1.05] tracking-tight text-foreground md:mb-2 md:text-5xl lg:mb-3 lg:text-8xl">
                Bring One Manual
                <br />
                Workflow
              </h2>
              <p className="font-mono text-[10px] text-foreground/60 md:text-xs lg:text-base">
                / Remote workflow assessment for US and UK operations teams
              </p>
            </div>

            <div className="space-y-3 md:space-y-4 lg:space-y-8">
              <a
                href="/insights/how-to-know-if-a-workflow-is-worth-automating"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: "150ms" }}
              >
                <div className="mb-0.5 flex items-center gap-2 md:mb-1">
                  <span className="font-mono text-[10px] text-foreground/60 md:text-xs">Checklist</span>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-foreground transition-colors group-hover:text-foreground/70 md:text-base lg:text-lg">
                  Use the AI automation assessment checklist before choosing a tool, consultant, or custom workflow.
                </p>
              </a>

              <a
                href="mailto:partnerships@smartcoretech.co.uk"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: "250ms" }}
              >
                <div className="mb-0.5 flex items-center gap-2 md:mb-1">
                  <Mail className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-[10px] text-foreground/60 md:text-xs">Email</span>
                </div>
                <p className="text-sm text-foreground transition-colors group-hover:text-foreground/70 md:text-base lg:text-xl">
                  partnerships@smartcoretech.co.uk
                </p>
              </a>

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
                  className="w-full border-b border-foreground/30 bg-transparent py-1 text-xs text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-1.5 md:text-sm lg:py-2 lg:text-base"
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
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1 text-xs text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-1.5 md:text-sm lg:py-2 lg:text-base"
                  placeholder="your@email.com"
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
                  className="w-full border-b border-foreground/30 bg-transparent py-1 text-xs text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-1.5 md:text-sm lg:py-2 lg:text-base"
                  placeholder="What goes in? How often does it happen? Where does it break? What output would be useful?"
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
                  {isSubmitting ? "Sending..." : "Assess One Workflow"}
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
                    Thanks — we'll be in touch soon.
                  </p>
                )}
                {submitError && (
                  <p className="mt-2 text-center font-mono text-xs text-foreground/70 md:mt-3 md:text-sm">
                    {submitError}{" "}
                    <a href="mailto:partnerships@smartcoretech.co.uk" className="underline underline-offset-4">
                      partnerships@smartcoretech.co.uk
                    </a>
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
