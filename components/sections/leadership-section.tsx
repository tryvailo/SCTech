"use client"

import Link from "next/link"
import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

const formats = [
  {
    label: "Fractional",
    title: "AI Lead, 1–3 days a week",
    description: "Owns AI priorities, roadmap, vendors, governance and ICO / EU AI Act readiness.",
  },
  {
    label: "Interim",
    title: "Head of AI cover, 3–12 months",
    description: "Full-time cover while you hire or launch a programme, then a clean handover.",
  },
]

const firstNinetyDays = [
  { timing: "Weeks 1–4", title: "Diagnose", description: "Where AI pays off, what is blocking it, and a ranked plan." },
  { timing: "By day 60", title: "First pilot live", description: "One use case running on real data." },
  {
    timing: "By day 90",
    title: "Measured result and roadmap",
    description: "What worked, what to scale, and who owns it.",
  },
]

const triggers = [
  "After a funding round",
  "In the first 100 days after a PE acquisition",
  "Hiring AI engineers, but nobody sets direction",
  "During a permanent Head of AI search",
]

export function LeadershipSection({ scrollToSection }: { scrollToSection: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.2)
  const reveal = isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"

  return (
    <section
      id="ai-leadership"
      ref={ref}
      className="flex h-full w-screen shrink-0 snap-start items-start overflow-y-auto px-4 py-6 md:px-12 md:py-10 lg:items-center lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div className={`transition-all duration-700 ${reveal}`}>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/70 md:mb-4 md:text-xs">
              02 · Fractional &amp; Interim AI Leadership
            </p>
            <h2 className="max-w-3xl font-sans text-3xl font-light leading-[1.05] tracking-tight text-foreground md:text-4xl xl:text-5xl">
              Senior AI leadership, without a permanent hire
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/85 md:mt-4 md:text-base">
              When you need someone to own AI, we step in as your fractional or interim lead and get it into production.
            </p>

            <h3 className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/60 md:text-xs">
              When companies bring us in
            </h3>
            <ul className="mt-2 grid gap-1.5">
              {triggers.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-foreground/85 md:text-sm">
                  <span className="mt-2 h-px w-3 shrink-0 bg-foreground/50" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`flex flex-col justify-center transition-all delay-200 duration-700 ${reveal}`}>
            <div className="grid gap-4 sm:grid-cols-2">
              {formats.map((format) => (
                <article key={format.title} className="border-t border-foreground/20 pt-3">
                  <span className="font-mono text-[10px] text-foreground/60 md:text-xs">{format.label}</span>
                  <h3 className="mt-1 text-lg font-light text-foreground md:text-xl">{format.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-foreground/75 md:text-sm">{format.description}</p>
                </article>
              ))}
            </div>

            <h3 className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/60 md:text-xs">
              Your first 90 days
            </h3>
            <div className="mt-2 border-y border-foreground/20">
              {firstNinetyDays.map((step) => (
                <div
                  key={step.timing}
                  className="grid gap-1 border-b border-foreground/20 py-3 last:border-b-0 sm:grid-cols-[96px_1fr] sm:gap-4"
                >
                  <span className="font-mono text-[10px] text-foreground/60 md:text-xs">{step.timing}</span>
                  <p className="text-xs leading-relaxed text-foreground/80 md:text-sm">
                    <span className="text-foreground">{step.title}.</span> {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection(4)}>
                Discuss Leadership
              </MagneticButton>
              <Link
                href="/insights/fractional-ai-officer-vs-interim-head-of-ai"
                className="font-mono text-xs text-foreground/75 underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Fractional, interim or full-time hire? Compare the options →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
