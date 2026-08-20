"use client"

import { BrainCircuit, CheckCircle2 } from "lucide-react"
import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

const phases = [
  {
    number: "01",
    timing: "Weeks 1-3",
    title: "Assess and prioritise",
    description:
      "Map current AI usage, workflow friction, risks, and sponsors. Rank opportunities by business value, feasibility, and adoption readiness.",
  },
  {
    number: "02",
    timing: "Weeks 4-10",
    title: "Enable and pilot",
    description:
      "Create practical guardrails, develop internal champions, run role-based workshops, and validate one or two representative workflows on real operating data.",
  },
  {
    number: "03",
    timing: "Weeks 11-20",
    title: "Scale and hand over",
    description:
      "Measure adoption and value, establish a repeatable delivery cadence, document ownership, and transfer the capability to your internal team.",
  },
]

const outcomes = [
  "Clear investment priorities",
  "Faster, safer delivery",
  "Measured operational value",
  "Internal ownership after handover",
]

export function AiEnablementSection({ scrollToSection }: { scrollToSection: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      id="ai-enablement"
      ref={ref}
      className="flex h-full w-screen shrink-0 snap-start items-start overflow-y-auto px-4 py-6 md:items-center md:px-12 md:py-14 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-3 flex items-center gap-2 md:mb-5">
              <BrainCircuit className="h-4 w-4 text-foreground/70" />
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/70 md:text-xs">
                From Pilot to Scale
              </p>
            </div>
            <h2 className="max-w-2xl font-sans text-3xl font-light leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Move from isolated pilots to repeatable business value.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/85 md:mt-6 md:text-base lg:text-lg">
              A structured delivery programme connects business priorities, practical controls, implementation, and
              adoption. The result is a smaller portfolio of worthwhile initiatives, working workflows with clear
              owners, and an operating model your team can continue after handover.
            </p>
            <div className="mt-6 md:mt-8">
              <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection(5)}>
                Discuss Your AI Priorities
              </MagneticButton>
            </div>
            <p className="mt-3 max-w-xl font-mono text-[10px] leading-relaxed text-foreground/60 md:text-xs">
              Best for organisations with active AI experiments but no shared priorities, delivery path, or ownership
              model.
            </p>
          </div>

          <div className="border-y border-foreground/20">
            {phases.map((phase, index) => (
              <article
                key={phase.number}
                className={`grid gap-2 border-b border-foreground/20 py-4 transition-all duration-700 last:border-b-0 md:grid-cols-[48px_1fr_auto] md:gap-5 md:py-5 lg:py-6 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: `${150 + index * 120}ms` }}
              >
                <span className="font-mono text-[10px] text-foreground/60 md:text-xs">{phase.number}</span>
                <div>
                  <h3 className="text-lg font-light text-foreground md:text-xl lg:text-2xl">{phase.title}</h3>
                  <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-foreground/75 md:text-sm lg:text-base">
                    {phase.description}
                  </p>
                </div>
                <span className="font-mono text-[10px] whitespace-nowrap text-foreground/60 md:text-xs">
                  {phase.timing}
                </span>
              </article>
            ))}
          </div>
        </div>

        <div
          className={`mt-7 grid gap-3 border-t border-foreground/20 pt-5 transition-all duration-700 sm:grid-cols-2 lg:grid-cols-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "520ms" }}
        >
          {outcomes.map((outcome) => (
            <div key={outcome} className="flex items-center gap-2 text-xs text-foreground/80 md:text-sm">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-foreground/60" />
              <span>{outcome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
