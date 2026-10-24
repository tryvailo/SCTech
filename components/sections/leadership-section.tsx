"use client"

import { CheckCircle2 } from "lucide-react"
import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

const formats = [
  {
    label: "Fractional",
    title: "AI Lead, 1–3 days a week",
    description:
      "Ongoing ownership of AI priorities, governance, build and vendor decisions, and delivery cadence, reporting to your leadership.",
  },
  {
    label: "Interim",
    title: "Head of AI cover, 3–12 months",
    description:
      "Full-time leadership while you hire, restructure or launch an AI programme, with a clean handover to your permanent lead.",
  },
]

const responsibilities = [
  "Profitable use cases, ranked by value and feasibility",
  "Automation and AI product roadmap",
  "Build, buy and vendor decisions",
  "Governance, adoption and handover",
]

export function LeadershipSection({ scrollToSection }: { scrollToSection: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      id="ai-leadership"
      ref={ref}
      className="flex h-full w-screen shrink-0 snap-start items-start overflow-y-auto px-4 py-6 md:items-center md:px-12 md:py-14 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
            }`}
          >
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/70 md:mb-5 md:text-xs">
              02 · Fractional &amp; Interim AI Leadership
            </p>
            <h2 className="max-w-3xl font-sans text-3xl font-light leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Senior AI leadership, without a permanent hire
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/85 md:mt-6 md:text-base lg:text-lg">
              When you need someone to own AI, we step in as your fractional or interim AI lead. We decide where it pays
              off, steer automation and AI products, and get them into production.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:mt-8">
              {responsibilities.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-start gap-2 text-xs text-foreground/85 transition-all duration-700 md:text-sm ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${150 + index * 80}ms` }}
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground/60" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="border-y border-foreground/20">
              {formats.map((format, index) => (
                <article
                  key={format.title}
                  className={`border-b border-foreground/20 py-5 transition-all duration-700 last:border-b-0 lg:py-7 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${250 + index * 120}ms` }}
                >
                  <span className="font-mono text-[10px] text-foreground/60 md:text-xs">{format.label}</span>
                  <h3 className="mt-1 text-xl font-light text-foreground md:text-2xl lg:text-3xl">{format.title}</h3>
                  <p className="mt-2 max-w-xl text-xs leading-relaxed text-foreground/75 md:text-sm lg:text-base">
                    {format.description}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-5 font-mono text-[10px] leading-relaxed text-foreground/60 md:text-xs">
              Start in 1–2 weeks · Monthly retainer or fixed term · UK &amp; US time zones
            </p>
            <div className="mt-5">
              <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection(4)}>
                Discuss Leadership
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
