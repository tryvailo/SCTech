"use client"

import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

const areas = [
  {
    title: "Customer support & feedback",
    description: "Triage, routing, draft replies, QA, and insight from tickets and reviews.",
  },
  {
    title: "Documents & back office",
    description: "Inboxes, PDFs, orders and invoices turned into validated records.",
  },
  {
    title: "Product data & catalogue",
    description: "Attribute enrichment, image checks and approved updates for PIM or ecommerce.",
  },
  {
    title: "Reporting & decision support",
    description: "Evidence-linked summaries, monitoring and alerts.",
  },
]

const steps = [
  {
    number: "01",
    title: "Audit",
    description: "Map the workflow, volumes and systems. Agree the metric and the expected return.",
    timing: "1–2 weeks",
  },
  {
    number: "02",
    title: "Pilot",
    description: "Build on real data with human review, measured against the baseline.",
    timing: "3–6 weeks",
  },
  {
    number: "03",
    title: "Run & improve",
    description: "Monitoring, fixes and improvements on a monthly plan, or a full handover to your team.",
    timing: "Ongoing",
  },
]

export function AutomationSection({ scrollToSection }: { scrollToSection: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      id="automation"
      ref={ref}
      className="flex h-full w-screen shrink-0 snap-start items-start overflow-y-auto px-4 py-6 md:items-center md:px-12 md:py-14 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
            }`}
          >
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/70 md:mb-5 md:text-xs">
              01 · Workflow Automation
            </p>
            <h2 className="max-w-2xl font-sans text-3xl font-light leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              We automate operational workflows end to end
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/85 md:mt-6 md:text-base lg:text-lg">
              You keep the process and the data. We design, build and run the automation, with human review where it
              matters.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:mt-8 md:gap-x-8 md:gap-y-5">
              {areas.map((area, index) => (
                <div
                  key={area.title}
                  className={`group transition-all duration-700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${150 + index * 100}ms` }}
                >
                  <div className="mb-1 flex items-center gap-3">
                    <div className="h-px w-6 bg-foreground/30 transition-all duration-300 group-hover:w-10 group-hover:bg-foreground/50" />
                    <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
                  </div>
                  <h3 className="mb-1 font-sans text-base font-light text-foreground md:text-lg">{area.title}</h3>
                  <p className="max-w-sm text-xs leading-relaxed text-foreground/80 md:text-sm">{area.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="border-y border-foreground/20">
              {steps.map((step, index) => (
                <article
                  key={step.number}
                  className={`grid gap-2 border-b border-foreground/20 py-4 transition-all duration-700 last:border-b-0 md:grid-cols-[48px_1fr_auto] md:gap-5 md:py-5 lg:py-6 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${250 + index * 120}ms` }}
                >
                  <span className="font-mono text-[10px] text-foreground/60 md:text-xs">{step.number}</span>
                  <div>
                    <h3 className="text-lg font-light text-foreground md:text-xl lg:text-2xl">{step.title}</h3>
                    <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-foreground/75 md:text-sm lg:text-base">
                      {step.description}
                    </p>
                  </div>
                  <span className="whitespace-nowrap font-mono text-[10px] text-foreground/60 md:text-xs">
                    {step.timing}
                  </span>
                </article>
              ))}
            </div>

            <p className="mt-5 max-w-xl font-mono text-[10px] leading-relaxed text-foreground/60 md:text-xs">
              Built with n8n, LLMs and your existing systems via API · can run in your own environment when data needs to
              stay with you
            </p>
            <div className="mt-5">
              <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection(4)}>
                Discuss a Workflow
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
