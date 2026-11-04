"use client"

import Link from "next/link"
import { useReveal } from "@/hooks/use-reveal"

const principles = [
  {
    title: "Start small",
    description: "One workflow or one engagement, with a clear metric.",
  },
  {
    title: "Controls before autonomy",
    description: "Human review first, autonomy as evidence grows.",
  },
  {
    title: "Your systems, your data",
    description: "We work inside your tools.",
  },
  {
    title: "Handover by default",
    description: "Your team can run what we build.",
  },
  {
    title: "Remote by design",
    description: "UK and US, with a fixed weekly rhythm.",
  },
  {
    title: "Easy to combine",
    description: "A lead can steer a project, a project can continue under a lead.",
  },
]

export function HowWeWorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      id="how-we-work"
      ref={ref}
      className="flex h-full w-screen shrink-0 snap-start justify-center overflow-y-auto px-6 py-6 md:px-12 md:py-14 lg:items-center lg:px-16"
    >
      <div className="mx-auto flex min-h-full w-full max-w-7xl flex-col justify-center">
        <div
          className={`mb-6 transition-all duration-700 md:mb-8 lg:mb-12 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl lg:text-6xl">
            How We Work
          </h2>
          <p className="font-mono text-xs text-foreground/60 md:text-sm lg:text-base">
            / Two ways in. The same way of working.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:gap-x-10 md:gap-y-7 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-10">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className={`group transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-2 flex items-center gap-3">
                <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
                <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
              </div>
              <h3 className="mb-1 font-sans text-xl font-light text-foreground md:text-2xl">{principle.title}</h3>
              <p className="max-w-sm text-xs leading-relaxed text-foreground/80 md:text-sm lg:text-base">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-8 transition-all duration-700 lg:mt-12 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "650ms" }}
        >
          <p className="mb-4 text-sm text-foreground/85 md:text-base">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/60 md:text-xs">
              Sectors we know
            </span>
            <span className="mt-1 block">
              E-commerce and marketplaces · B2B SaaS · Retail tech · Document-heavy operations (logistics, insurance,
              professional services)
            </span>
          </p>
          <Link
            href="/insights/ai-readiness-assessment"
            className="font-mono text-xs text-foreground/70 underline underline-offset-4 transition-colors hover:text-foreground md:text-sm"
          >
            Not sure where to start? Use our AI readiness checklist →
          </Link>
        </div>
      </div>
    </section>
  )
}
