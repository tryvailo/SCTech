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
            AI Workflow Automation Services
          </h2>
          <p className="mb-1 text-sm text-foreground/90 md:text-base lg:text-xl">
            Improve speed, quality, and capacity in high-volume work
          </p>
          <p className="max-w-3xl text-xs leading-relaxed text-foreground/80 md:text-sm lg:text-base">
            We begin with workflows that have visible volume, delay, quality, or capacity constraints. Each pilot keeps
            source evidence, exception handling, human review, and operational ownership explicit.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-x-8 md:gap-y-4 lg:gap-x-16 lg:gap-y-6">
          {[
            {
              title: "Customer Support & Voice of Customer",
              description:
                "Reduce handling time, extend QA coverage, surface recurring issues earlier, and turn tickets, reviews, and surveys into action for support and product teams.",
              metric: "Faster handling · Broader QA",
              direction: "top",
            },
            {
              title: "Document & Back-office Operations",
              description:
                "Shorten processing cycles and reduce rekeying by turning inboxes, PDFs, orders, quotes, invoices, and supplier documents into validated records.",
              metric: "Less rework · Faster decisions",
              direction: "right",
            },
            {
              title: "Product & Catalogue Operations",
              description:
                "Publish cleaner product data faster by enriching attributes, checking catalogue images, flagging issues, and preparing approved updates for PIM or ecommerce systems.",
              metric: "Fewer errors · Faster publishing",
              direction: "left",
            },
            {
              title: "Reporting & Decision Support",
              description:
                "Cut preparation time and improve consistency with evidence-linked reports, market monitoring, operational summaries, and controlled decision support.",
              metric: "Less preparation · Clearer decisions",
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
            The first workflow should prove value within weeks and leave a reusable pattern behind.
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
