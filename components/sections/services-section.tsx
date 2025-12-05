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
            Intelligence at Scale
          </h2>
          <p className="mb-1 text-sm text-foreground/90 md:text-base lg:text-xl">
            Turning data complexity into decision clarity
          </p>
          <p className="max-w-3xl text-xs leading-relaxed text-foreground/80 md:text-sm lg:text-base">
            Complex decisions demand more than data — they require intelligence. Our platform synthesises disparate 
            information sources, applies domain-specific reasoning, and delivers insights that cut through noise.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-x-8 md:gap-y-4 lg:gap-x-16 lg:gap-y-6">
          {[
            {
              title: "Predictive Modeling",
              description:
                "Anticipate outcomes by analysing patterns across millions of historical data points with precision.",
              metric: "89% forecast accuracy",
              direction: "top",
            },
            {
              title: "Decision Intelligence",
              description:
                "Transform multi-variable complexity into ranked, explainable recommendations you can act on.",
              metric: "4x faster decision cycles",
              direction: "right",
            },
            {
              title: "Data Synthesis",
              description:
                "Unify fragmented sources into coherent, queryable intelligence layers that reveal hidden connections.",
              metric: "50+ integration connectors",
              direction: "left",
            },
            {
              title: "Outcome Analytics",
              description:
                "Measure, learn, and optimise — continuous feedback loops that improve predictions every cycle.",
              metric: "2.3x ROI improvement",
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
            Where others see noise, we find signal.
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
