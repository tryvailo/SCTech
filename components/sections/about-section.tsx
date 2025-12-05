"use client"

import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Performance
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">
            / Real-world impact and measurable results
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-12">
          {[
            { value: "85%", label: "Reduction in decision uncertainty", direction: "top" },
            { value: "10,000+", label: "Data points processed in real-time", direction: "right" },
            { value: "24-48hrs", label: "Personalised insights delivery", direction: "left" },
            { value: "Weeks → Hours", label: "Research time transformation", direction: "bottom" },
          ].map((stat, i) => {
            const getRevealClass = () => {
              if (!isVisible) {
                switch (stat.direction) {
                  case "left":
                    return "-translate-x-16 opacity-0"
                  case "right":
                    return "translate-x-16 opacity-0"
                  case "top":
                    return "-translate-y-16 opacity-0"
                  case "bottom":
                    return "translate-y-16 opacity-0"
                  default:
                    return "translate-y-12 opacity-0"
                }
              }
              return "translate-x-0 translate-y-0 opacity-100"
            }

            return (
              <div
                key={i}
                className={`flex flex-col items-start border-l border-foreground/30 pl-6 transition-all duration-700 md:pl-8 ${getRevealClass()}`}
                style={{
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                <div className="mb-3 text-4xl font-light text-foreground md:text-5xl lg:text-6xl">{stat.value}</div>
                <div className="font-sans text-base leading-relaxed text-foreground/80 md:text-lg">{stat.label}</div>
              </div>
            )
          })}
        </div>

        <div
          className={`mt-12 flex flex-wrap gap-3 transition-all duration-700 md:mt-16 md:gap-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(4)}>
            Get in Touch
          </MagneticButton>
          <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection?.(1)}>
            View Capabilities
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
