"use client"

import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"
import { automationAreas } from "@/lib/automation-areas"

interface AutomationSectionProps {
  scrollToSection: (index: number) => void
}

export function AutomationSection({ scrollToSection }: AutomationSectionProps) {
  const { ref, isVisible } = useReveal(0.2)
  const reveal = isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"

  return (
    <section
      id="automation"
      ref={ref}
      className="flex h-full w-screen shrink-0 snap-start items-start overflow-y-auto px-4 py-6 md:items-center md:px-12 md:py-14 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className={`flex flex-col justify-center transition-all duration-700 ${reveal}`}>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/70 md:mb-5 md:text-xs">
              01 · Workflow Automation
            </p>
            <h2 className="max-w-2xl font-sans text-3xl font-light leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              What we automate
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/85 md:mt-6 md:text-base lg:text-lg">
              For operations, support and finance teams. We start with one workflow that has clear volume, delay or
              rework.
            </p>
            <p className="mt-5 max-w-xl text-sm text-foreground/85 md:text-base">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/60 md:text-xs">
                Sectors we know
              </span>
              <span className="mt-1 block">
                E-commerce and marketplaces · B2B SaaS · Retail tech · Logistics, insurance and professional services
              </span>
            </p>
            <div className="mt-6">
              <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection(4)}>
                Discuss a Workflow
              </MagneticButton>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-x-10 md:gap-y-8">
            {automationAreas.map((area, index) => (
              <article
                key={area.title}
                className={`group border-t border-foreground/20 pt-4 transition-all duration-700 ${reveal}`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
                <h3 className="mt-1 font-sans text-lg font-light text-foreground md:text-2xl">{area.title}</h3>
                <p className="mt-2 max-w-md text-xs leading-relaxed text-foreground/80 md:text-sm lg:text-base">
                  {area.description}
                </p>
                <p className="mt-2 font-mono text-[10px] font-semibold text-foreground/70 md:text-xs">{area.metric}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
