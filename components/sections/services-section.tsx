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
            Priority workflows where value can be measured
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
                "Classify tickets, review conversations, identify recurring issues and knowledge gaps, route risk, and combine support data with reviews and surveys.",
              metric: "Tickets + Reviews -> Action",
              direction: "top",
            },
            {
              title: "Document & Back-office Operations",
              description:
                "Turn inboxes, PDFs, orders, quotes, invoices, and supplier documents into validated records and reviewable exception queues.",
              metric: "Documents -> Decisions",
              direction: "right",
            },
            {
              title: "Product & Catalogue Operations",
              description:
                "Clean supplier feeds, enrich attributes, check catalogue images, flag compliance issues, and prepare approved updates for PIM or ecommerce systems.",
              metric: "Inputs -> Approved Data",
              direction: "left",
            },
            {
              title: "Reporting & Decision Support",
              description:
                "Create evidence-linked recurring reports, market monitoring, operational summaries, and controlled internal decision support.",
              metric: "Sources -> Decisions",
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
