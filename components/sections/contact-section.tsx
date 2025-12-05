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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission (replace with actual API call later)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-16 pb-20 md:px-12 md:pt-20 md:pb-24 lg:px-16 lg:pt-0 lg:pb-0"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-4 md:grid-cols-[1.2fr_1fr] md:gap-12 lg:gap-24">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-4 transition-all duration-700 md:mb-8 lg:mb-12 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-1 font-sans text-3xl font-light leading-[1.05] tracking-tight text-foreground md:mb-2 md:text-5xl lg:mb-3 lg:text-8xl">
                Let's
                <br />
                connect
              </h2>
              <p className="font-mono text-[10px] text-foreground/60 md:text-xs lg:text-base">
                / Smart Solutions for Sensitive Moments
              </p>
            </div>

            <div className="space-y-3 md:space-y-4 lg:space-y-8">
              <a
                href="mailto:partnerships@smartcoretech.co.uk"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
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
                  Office 15055, 182-184 High Street North, East Ham, London E6 2JA
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Minimal form */}
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 lg:space-y-6">
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
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
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
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
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
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
                  placeholder="Tell us about your project..."
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "650ms" }}
              >
                <MagneticButton
                  variant="primary"
                  size="lg"
                  className="w-full disabled:opacity-50"
                  onClick={isSubmitting ? undefined : undefined}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </MagneticButton>
                {submitSuccess && (
                  <p className="mt-2 text-center font-mono text-xs text-foreground/80 md:mt-3 md:text-sm">
                    Message sent successfully!
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
