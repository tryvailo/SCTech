"use client"

import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-full w-screen shrink-0 snap-start items-start overflow-y-auto px-4 py-6 md:items-center md:px-12 md:py-14 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Practical Outcomes
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">
            / Clear outputs, controlled workflows, and less repetitive work
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
          {[
            { value: "Clarity", label: "Know what is worth automating before building anything", direction: "top" },
            { value: "Control", label: "Keep AI output bounded by rules, sources, review points, and audit trails", direction: "right" },
            { value: "Coverage", label: "Process more reviews, records, images, documents, and reports without relying on small samples", direction: "left" },
            { value: "Scale", label: "Grow operational capacity without adding another manual layer", direction: "bottom" },
          ].map((stat, i) => {
              const getRevealClass = () => {
                if (!isVisible) return "translate-y-6 opacity-0"
                return "translate-y-0 opacity-100"
              }

            return (
              <div
                key={i}
                className={`flex flex-col items-start border-l border-foreground/30 pl-6 transition-all duration-700 md:pl-8 ${getRevealClass()}`}
                style={{
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                    <div className="mb-2 text-2xl font-light text-foreground md:mb-3 md:text-4xl lg:text-5xl">
                      {stat.value}
                    </div>
                    <div className="font-sans text-sm leading-relaxed text-foreground/80 md:text-lg">{stat.label}</div>
              </div>
            )
          })}
        </div>

        <div
          className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 md:mt-16 md:gap-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(5)}>
            Assess One Workflow
          </MagneticButton>
          <MagneticButton size="lg" variant="secondary" className="hidden sm:inline-flex" onClick={() => scrollToSection?.(1)}>
            View Approach
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
