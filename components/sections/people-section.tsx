"use client"

import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

const formats = [
  {
    label: "Fractional",
    title: "AI & Automation Lead",
    description:
      "1–3 days a week. Owns AI priorities, governance, vendor choices and delivery cadence, and reports to your leadership.",
  },
  {
    label: "Interim",
    title: "Head of AI cover",
    description:
      "Full-time for 3–12 months while you hire, restructure or launch a programme. Hands over to your permanent lead.",
  },
  {
    label: "Contract",
    title: "AI & Automation Engineers",
    description:
      "From 2 days a week. LLM applications, agents, integrations and workflow automation, working in your sprints and tools.",
  },
]

const terms = [
  "Remote",
  "Start in 1–2 weeks",
  "Day rate or statement of work",
  "Contracted through a UK limited company",
  "UK & US time zones",
]

export function PeopleSection({ scrollToSection }: { scrollToSection: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      id="ai-leads-engineers"
      ref={ref}
      className="flex h-full w-screen shrink-0 snap-start items-start overflow-y-auto px-4 py-6 md:items-center md:px-12 md:py-14 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/70 md:mb-5 md:text-xs">
            02 · AI Leads &amp; Engineers
          </p>
          <h2 className="max-w-4xl font-sans text-3xl font-light leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Senior AI and automation people, without a permanent hire
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/85 md:mt-6 md:text-base lg:text-lg">
            When you need ownership or capacity rather than a project, we embed people in your team on a B2B contract
            through our UK limited company.
          </p>
        </div>

        <div className="mt-8 grid gap-6 border-t border-foreground/20 pt-6 md:mt-10 md:grid-cols-3 md:gap-10 lg:gap-14">
          {formats.map((format, index) => (
            <article
              key={format.title}
              className={`group transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${150 + index * 120}ms` }}
            >
              <div className="mb-2 flex items-center gap-3">
                <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
                <span className="font-mono text-xs text-foreground/60">{format.label}</span>
              </div>
              <h3 className="mb-2 font-sans text-xl font-light text-foreground md:text-2xl lg:text-3xl">{format.title}</h3>
              <p className="max-w-sm text-xs leading-relaxed text-foreground/80 md:text-sm lg:text-base">
                {format.description}
              </p>
            </article>
          ))}
        </div>

        <div
          className={`mt-8 flex flex-col gap-5 border-t border-foreground/20 pt-5 transition-all duration-700 md:mt-10 lg:flex-row lg:items-center lg:justify-between ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "520ms" }}
        >
          <p className="font-mono text-[10px] leading-relaxed text-foreground/60 md:text-xs">{terms.join(" · ")}</p>
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection(4)}>
            Discuss a Role
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
