"use client"

import { useReveal } from "@/hooks/use-reveal"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start justify-center overflow-y-auto px-6 pb-20 pt-20 md:px-12 md:pb-16 md:pt-20 lg:items-center lg:overflow-y-visible lg:px-16 lg:py-16"
    >
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-center">
        <div
          className={`mb-4 transition-all duration-700 md:mb-5 lg:mb-8 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-xl font-light tracking-tight text-foreground md:text-2xl lg:text-4xl">
            Empowering Life's Most Important Decisions
          </h2>
          <p className="mb-1 text-sm text-foreground/90 md:text-base lg:text-xl">
            Technology with purpose. Intelligence with empathy.
          </p>
          <p className="max-w-3xl text-xs leading-relaxed text-foreground/80 md:text-sm lg:text-base">
            Behind every algorithm is a human story. Behind every data point is a family seeking clarity. We don't just
            process information — we transform life's most overwhelming decisions into moments of confidence and peace
            of mind.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-x-8 md:gap-y-4 lg:gap-x-16 lg:gap-y-6">
          {[
            {
              title: "Reducing Stress",
              description:
                "Our AI eliminates the anxiety of not knowing by providing clear, comprehensive answers when you need them most.",
              metric: "87% reduction in decision-related stress",
              direction: "top",
            },
            {
              title: "Saving Time",
              description:
                "What used to take weeks of research and phone calls now takes hours, giving you more time for what truly matters.",
              metric: "Average 40 hours saved per decision",
              direction: "right",
            },
            {
              title: "Providing Clarity",
              description:
                "We cut through jargon, hidden costs, and conflicting advice to deliver straightforward, actionable insights.",
              metric: "95% of families feel confident in decisions",
              direction: "left",
            },
            {
              title: "Supporting Families",
              description:
                "Our platform facilitates difficult conversations by providing objective information that brings loved ones together.",
              metric: "78% improvement in family communication",
              direction: "bottom",
            },
          ].map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>

        <div
          className={`mt-4 text-center transition-all duration-700 md:mt-5 lg:mt-8 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-xs italic text-foreground/90 md:text-sm lg:text-lg">
            Because when life gets complicated, your technology should make it simpler.
          </p>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { title: string; description: string; metric: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
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
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="mb-1 flex items-center gap-3 md:mb-2">
        <div className="h-px w-6 bg-foreground/30 transition-all duration-300 group-hover:w-10 group-hover:bg-foreground/50 md:w-8" />
        <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
      </div>
      <h3 className="mb-1 font-sans text-base font-light text-foreground md:text-lg lg:text-2xl">{service.title}</h3>
      <p className="mb-1 max-w-md text-xs leading-relaxed text-foreground/80 md:text-xs lg:text-base">
        {service.description}
      </p>
      <p className="font-mono text-[10px] font-semibold text-foreground/70 md:text-xs">{service.metric}</p>
    </div>
  )
}
