"use client"

import { useReveal } from "@/hooks/use-reveal"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-full w-screen shrink-0 snap-start justify-center overflow-y-auto px-6 py-6 md:px-12 md:py-14 lg:items-center lg:px-16"
    >
      <div className="mx-auto flex min-h-full w-full max-w-7xl flex-col justify-center">
        <div
          className={`mb-4 transition-all duration-700 md:mb-5 lg:mb-8 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-xl font-light tracking-tight text-foreground md:text-2xl lg:text-4xl">
            Workflow Areas
          </h2>
          <p className="mb-1 text-sm text-foreground/90 md:text-base lg:text-xl">
            From scattered inputs to usable operational output
          </p>
          <p className="max-w-3xl text-xs leading-relaxed text-foreground/80 md:text-sm lg:text-base">
            SmartCore works where teams repeatedly collect, classify, check, route, and report information by hand.
            The work may look different across organisations; the operating pattern is often the same.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-x-8 md:gap-y-4 lg:gap-x-16 lg:gap-y-6">
          {[
            {
              title: "Customer & Market Intelligence",
              description:
                "Turn reviews, market signals, customer feedback, and approved exports into recurring insight for product, CX, and leadership teams.",
              metric: "Feedback -> Findings",
              direction: "top",
            },
            {
              title: "Product & Data Operations",
              description:
                "Structure product data, catalog checks, image QA, supplier inputs, and exception lists into reviewable outputs.",
              metric: "Records -> Queues",
              direction: "right",
            },
            {
              title: "Content & Reporting Automation",
              description:
                "Generate evidence-linked drafts, recurring reports, summaries, and updates from defined sources and templates.",
              metric: "Sources -> Reports",
              direction: "left",
            },
            {
              title: "Decision & Process Support",
              description:
                "Clarify ambiguous workflows, define quality gates, and create systems that make the next operational step easier to see.",
              metric: "Ambiguity -> Action",
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
            A useful workflow does not just automate a task. It makes the output easier to trust.
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
