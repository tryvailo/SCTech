"use client"

import { useReveal } from "@/hooks/use-reveal"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-full w-screen shrink-0 snap-start justify-center overflow-y-auto px-6 py-6 md:px-12 md:py-14 lg:items-center lg:px-16"
    >
      <div className="mx-auto flex min-h-full w-full max-w-7xl flex-col justify-center">
        <div
          className={`mb-4 transition-all duration-700 md:mb-6 lg:mb-12 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl lg:text-6xl">
            Our Approach
          </h2>
          <p className="font-mono text-xs text-foreground/60 md:text-sm lg:text-base">
            / Diagnose one workflow, prove it on real data, build only when it works
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-x-12 md:gap-y-6 lg:gap-x-24 lg:gap-y-10">
          {[
            {
              number: "01",
              title: "Workflow Diagnostic",
              description:
                "Map the inputs, current effort, failure points, required outputs, and quality constraints around one recurring workflow",
              direction: "left",
            },
            {
              number: "02",
              title: "Structured Proof",
              description:
                "Test the workflow on representative data before recommending automation, integration, or a wider operating change",
              direction: "right",
            },
            {
              number: "03",
              title: "Controlled Automation",
              description:
                "Combine rules, AI, source boundaries, review queues, and audit trails so the system reduces effort without hiding accountability",
              direction: "left",
            },
            {
              number: "04",
              title: "Production Support",
              description:
                "Move validated workflows into the tools and routines your team already uses, with documentation and sensible ownership",
              direction: "right",
            },
          ].map((capability, i) => (
            <CapabilityCard key={i} capability={capability} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CapabilityCard({
  capability,
  index,
  isVisible,
}: {
  capability: { number: string; title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) return "translate-y-6 opacity-0"
    return "translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="mb-2 flex items-center gap-3 md:mb-2 lg:mb-4">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-foreground/60">{capability.number}</span>
      </div>
      <h3 className="mb-1 font-sans text-2xl font-light text-foreground md:text-3xl lg:text-4xl">{capability.title}</h3>
      <p className="max-w-md text-xs leading-relaxed text-foreground/80 md:text-sm lg:text-base">
        {capability.description}
      </p>
    </div>
  )
}
