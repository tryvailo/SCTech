"use client"

import Link from "next/link"
import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

const steps = [
  {
    number: "01",
    title: "Workflow Audit",
    description: "We pick the process, map the systems, and agree the metric and expected return.",
    timing: "1–2 weeks",
  },
  {
    number: "02",
    title: "Pilot",
    description: "We build it ourselves on real data, with human review.",
    timing: "3–6 weeks",
  },
  {
    number: "03",
    title: "Run & improve",
    description: "Monthly support and improvements, or a full handover to your team.",
    timing: "Ongoing",
  },
]

const principles = [
  { title: "Controls before autonomy", description: "Human review first, autonomy as evidence grows." },
  { title: "Your systems, your data", description: "Built inside your tools with n8n, LLMs and APIs." },
  { title: "Handover by default", description: "Documentation and training, so your team can run it." },
]

const metrics = ["Hours saved", "Response time", "Error rate", "Cost per case"]

interface HowWeWorkSectionProps {
  scrollToSection: (index: number) => void
}

export function HowWeWorkSection({ scrollToSection }: HowWeWorkSectionProps) {
  const { ref, isVisible } = useReveal(0.2)
  const reveal = isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="flex h-full w-screen shrink-0 snap-start items-start overflow-y-auto px-4 py-6 md:items-center md:px-12 md:py-14 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className={`flex flex-col justify-center transition-all duration-700 ${reveal}`}>
            <h2 className="font-sans text-3xl font-light leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              How a project runs
            </h2>
            <p className="mt-2 font-mono text-xs text-foreground/60 md:text-sm lg:text-base">
              / One workflow first. Measured, then scaled.
            </p>

            <div className="mt-6 border-y border-foreground/20">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="grid gap-2 border-b border-foreground/20 py-4 last:border-b-0 md:grid-cols-[40px_1fr_auto] md:gap-5"
                >
                  <span className="font-mono text-[10px] text-foreground/60 md:text-xs">{step.number}</span>
                  <div>
                    <h3 className="text-lg font-light text-foreground md:text-xl lg:text-2xl">{step.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-foreground/75 md:text-sm lg:text-base">
                      {step.description}
                    </p>
                  </div>
                  <span className="whitespace-nowrap font-mono text-[10px] text-foreground/60 md:text-xs">
                    {step.timing}
                  </span>
                </article>
              ))}
            </div>
          </div>

          <div className={`flex flex-col justify-center transition-all delay-200 duration-700 ${reveal}`}>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/60 md:text-xs">
              What we measure
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {metrics.map((metric) => (
                <li
                  key={metric}
                  className="rounded-full border border-foreground/30 px-3 py-1 text-xs text-foreground md:text-sm"
                >
                  {metric}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-5">
              {principles.map((principle) => (
                <div key={principle.title} className="border-t border-foreground/20 pt-3">
                  <h3 className="font-sans text-lg font-light text-foreground md:text-xl">{principle.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-foreground/80 md:text-sm">{principle.description}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-foreground/75 md:text-sm">Remote by design, with UK and US teams.</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection(4)}>
                Start with an Audit
              </MagneticButton>
              <Link
                href="/insights/ai-readiness-assessment"
                className="font-mono text-xs text-foreground/70 underline underline-offset-4 transition-colors hover:text-foreground"
              >
                AI readiness checklist →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
