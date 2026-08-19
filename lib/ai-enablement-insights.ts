import type { Insight } from "@/lib/insights"

const sources = {
  nistRmf: {
    title: "NIST: AI Risk Management Framework",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
  },
  nistCore: {
    title: "NIST AI RMF Core: Govern, Map, Measure and Manage",
    url: "https://airc.nist.gov/airmf-resources/airmf/5-sec-core/",
  },
  ukAdoptionPlan: {
    title: "UK Government: AI Adoption Plan for Digital and Technologies",
    url: "https://www.gov.uk/government/publications/ai-champions-ai-adoption-plans/ai-adoption-plan-digital-and-technologies",
  },
  ukPeopleFactor: {
    title: "UK Government: The People Factor for scaling AI tools",
    url: "https://www.gov.uk/government/publications/a-human-centred-approach-to-scaling-and-de-risking-ai-tools/the-people-factor-a-human-centred-approach-to-scaling-ai-tools-html",
  },
  microsoftStrategy: {
    title: "Microsoft: AI strategy guidance",
    url: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/ai/strategy",
  },
  microsoftPlan: {
    title: "Microsoft: Plan for AI adoption",
    url: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/ai/plan",
  },
  microsoftCoe: {
    title: "Microsoft: Establish an AI Center of Excellence",
    url: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/center-of-excellence",
  },
  icoAi: {
    title: "ICO: Artificial intelligence and data protection guidance",
    url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/",
  },
}

export const aiEnablementInsights: Insight[] = [
  {
    slug: "what-is-ai-enablement",
    title: "What Is AI Enablement? From Experiments to an Operating Capability",
    seoTitle: "What Is AI Enablement? A Practical Operating Model",
    description:
      "A practical definition of AI enablement, the capabilities it includes, and how to turn disconnected pilots into governed, adopted workflows.",
    seoDescription:
      "Learn what AI enablement means, how it differs from AI strategy, training, and implementation, and what a practical 12-20 week enablement programme delivers.",
    category: "Operating Model",
    readingTime: "10 min read",
    publishedAt: "2026-08-19",
    updatedAt: "2026-08-19",
    targetQuery: "AI enablement",
    searchIntent: "Informational",
    keywords: [
      "AI enablement",
      "AI enablement strategy",
      "AI enablement programme",
      "AI adoption",
      "enterprise AI adoption",
      "AI operating model",
      "AI center of excellence",
    ],
    summary:
      "AI enablement is the organisational capability that connects business priorities, safe technology use, delivery, adoption, and measurable outcomes. It is what turns isolated AI experiments into repeatable ways of working that teams can own.",
    answerBox: {
      heading: "AI enablement in one sentence",
      paragraphs: [
        "AI enablement is a cross-functional operating model for identifying valuable AI use cases, applying proportionate guardrails, delivering working solutions, helping people adopt them, and measuring whether they improve the business.",
      ],
      bullets: [
        "Strategy decides where AI should create value.",
        "Governance defines what is allowed and how risk is controlled.",
        "Delivery turns prioritised use cases into working workflows.",
        "Adoption changes behaviour, ownership, and day-to-day operations.",
        "Measurement decides what to scale, improve, or stop.",
      ],
    },
    takeaways: [
      "AI enablement is broader than tool training and more delivery-oriented than a strategy deck.",
      "The first programme should create both working use cases and reusable organisational capability.",
      "A small enablement team can combine interim leadership with product, automation, data, and change expertise.",
      "Success is measured in adopted business outcomes, not the number of pilots launched.",
    ],
    sections: [
      {
        heading: "Why organisations need AI enablement",
        paragraphs: [
          "Most organisations do not lack AI ideas. They lack a reliable way to decide which ideas deserve investment, what evidence is required, who approves risk, who owns the workflow after launch, and how value will be measured.",
          "This creates a familiar pattern: employees use tools informally, several teams run overlapping pilots, security and legal teams intervene late, and leadership sees activity without a credible portfolio of outcomes. AI enablement replaces that pattern with an operating loop.",
          "The UK Government's 2026 AI adoption guidance describes the practical challenge in similar terms: firms need to integrate AI into workflows, systems, and products while establishing clear guardrails, vendor expectations, and data controls.",
        ],
      },
      {
        heading: "AI enablement versus adjacent services",
        paragraphs: [
          "The labels overlap, but the scope and expected output are different. Buyers should define the capability gap before selecting a provider or hiring a role.",
        ],
        table: {
          columns: ["Approach", "Primary output", "Common limitation"],
          rows: [
            ["AI strategy", "Priorities, principles, investment direction", "May stop before implementation and adoption"],
            ["AI training", "Improved individual knowledge and tool confidence", "Does not create owned production workflows"],
            ["AI implementation", "A deployed system or integration", "Can solve one use case without building a repeatable operating model"],
            ["AI governance", "Policies, controls, accountability, and oversight", "Can become detached from delivery if treated as compliance only"],
            ["AI enablement", "A portfolio mechanism connecting strategy, controls, delivery, adoption, and measurement", "Requires active business ownership, not only an external supplier"],
          ],
        },
      },
      {
        heading: "The six capabilities in a practical AI enablement model",
        paragraphs: [
          "A useful enablement function does not need to begin as a permanent department. It needs six capabilities with named owners and simple artefacts that can mature over time.",
        ],
        bullets: [
          "Use-case intake: capture the business problem, users, current process, constraints, expected value, and accountable sponsor.",
          "Prioritisation: score value, feasibility, data readiness, adoption effort, time to evidence, and downside risk.",
          "Proportionate governance: classify use cases by consequence and attach the minimum controls required for each tier.",
          "Product and workflow delivery: redesign the operating process around the AI task, human review, exceptions, and downstream ownership.",
          "Adoption and capability: provide role-based guidance, champions, office hours, feedback routes, and manager reinforcement.",
          "Measurement and portfolio review: track usage, quality, cycle time, cost, business outcome, incidents, and learning.",
        ],
      },
      {
        heading: "What a 12-20 week programme should deliver",
        paragraphs: [
          "A bounded programme should leave the organisation with evidence and assets, not dependence on a consultant. Exact timing depends on access, risk, and workflow complexity, but the sequence should remain visible.",
        ],
        table: {
          columns: ["Stage", "Typical work", "Evidence of progress"],
          rows: [
            ["Diagnose", "Interviews, workflow mapping, readiness baseline, shadow-AI discovery", "Agreed problem inventory and decision criteria"],
            ["Prioritise", "Use-case scoring, sponsor alignment, risk tiering, delivery choices", "Funded portfolio with owners and stop conditions"],
            ["Enable", "Guardrails, approved-tool guidance, intake, champions, measurement design", "Teams know how to propose and use AI safely"],
            ["Deliver", "One or two bounded workflow pilots with human review and evidence", "Working outputs measured against a baseline"],
            ["Transfer", "Runbooks, ownership, backlog, governance cadence, capability plan", "Internal team can operate and improve the model"],
          ],
        },
      },
      {
        heading: "How to measure AI enablement",
        paragraphs: [
          "Adoption alone can reward usage without value; ROI alone can hide quality or risk. Use a balanced scorecard and compare results with a documented baseline.",
        ],
        bullets: [
          "Portfolio: percentage of ideas with a sponsor, baseline, risk tier, and explicit decision.",
          "Delivery: time from intake to evidence, pilot completion rate, and percentage stopped for valid reasons.",
          "Adoption: eligible users active, repeat usage, task completion, and user-reported friction.",
          "Quality and risk: review acceptance, exception rate, unsupported outputs, incidents, and control compliance.",
          "Business outcome: cycle time, cost per case, conversion, response time, capacity released, or revenue protected.",
          "Capability: named owners, reusable patterns, champion participation, and reduced reliance on external delivery.",
        ],
      },
      {
        heading: "When an interim enablement model fits",
        paragraphs: [
          "An interim model fits when leadership needs one accountable lead but the work spans strategy, product, automation, data, governance, and adoption. A coordinated team can provide those capabilities for the cost envelope of a senior hire while keeping one commercial and delivery owner.",
          "It is a poor fit when the real requirement is frontier-model research, a permanent platform engineering function, or an undefined request to 'do AI'. In those cases, a specialist hire or a narrower technical supplier is more honest.",
        ],
      },
    ],
    faq: [
      {
        question: "What is the difference between AI enablement and AI adoption?",
        answer:
          "AI adoption is the sustained use of AI by people and teams. AI enablement creates the conditions for that adoption: prioritised use cases, approved tools, governance, delivery support, skills, ownership, and measurement.",
      },
      {
        question: "Does AI enablement require an AI Center of Excellence?",
        answer:
          "No. An organisation can begin with a small virtual enablement team and named owners. A formal Center of Excellence becomes useful when the portfolio, risk, and demand justify a persistent coordinating function.",
      },
      {
        question: "How long does an AI enablement programme take?",
        answer:
          "A focused first programme often fits within 12-20 weeks. That is enough time to establish a baseline, prioritise use cases, create minimum guardrails, deliver bounded pilots, measure results, and transfer ownership.",
      },
      {
        question: "Who should own AI enablement?",
        answer:
          "Executive sponsorship should sit with a leader who owns business outcomes. Day-to-day enablement is cross-functional and normally includes business operations, product or transformation, technology, security, legal or privacy, and change leadership.",
      },
    ],
    sources: [
      sources.ukAdoptionPlan,
      sources.ukPeopleFactor,
      sources.microsoftStrategy,
      sources.microsoftPlan,
      sources.microsoftCoe,
      sources.nistRmf,
    ],
    related: [
      "ai-readiness-assessment",
      "ai-governance-framework-for-adoption",
      "ai-workflow-automation-examples",
      "ai-automation-consulting-tool-or-custom-workflow",
    ],
  },
  {
    slug: "ai-readiness-assessment",
    title: "AI Readiness Assessment: A Practical Scorecard Before You Invest",
    seoTitle: "AI Readiness Assessment: Practical Business Scorecard",
    description:
      "A seven-dimension AI readiness assessment for finding viable use cases, exposing blockers, and defining the next 90 days of work.",
    seoDescription:
      "Use this practical AI readiness assessment to score strategy, use cases, workflows, data, risk, skills, adoption, and ownership before investing in AI pilots.",
    category: "Guide",
    readingTime: "11 min read",
    publishedAt: "2026-08-19",
    updatedAt: "2026-08-19",
    targetQuery: "AI readiness assessment",
    searchIntent: "Commercial Investigation",
    keywords: [
      "AI readiness assessment",
      "AI maturity assessment",
      "AI adoption readiness",
      "AI readiness checklist",
      "AI implementation consulting",
      "AI use case prioritisation",
    ],
    summary:
      "An AI readiness assessment should produce a prioritised action plan, not a maturity label. Score the organisation and individual use cases across value, workflow clarity, data, risk, technology, people, and ownership, then fund only the work that can reach credible evidence.",
    answerBox: {
      heading: "What should an AI readiness assessment include?",
      paragraphs: [
        "A useful assessment tests whether the organisation can select, deliver, govern, adopt, and measure AI use cases. It combines an organisation-level baseline with use-case-level evidence because a company can be generally immature yet ready for one valuable, low-risk workflow.",
      ],
      bullets: [
        "Business outcome and executive sponsorship",
        "Workflow clarity and exception volume",
        "Data access, quality, permissions, and provenance",
        "Risk, privacy, security, and human oversight",
        "Technology fit and integration effort",
        "User capability, trust, and change conditions",
        "Ownership, measurement, and operational support",
      ],
    },
    takeaways: [
      "Assess the organisation and each proposed use case separately.",
      "A low overall maturity score does not prevent a tightly bounded, low-risk pilot.",
      "Every recommended use case needs a baseline, sponsor, owner, risk tier, and stop condition.",
      "The output should be a 90-day roadmap with decisions, not a decorative heatmap.",
    ],
    sections: [
      {
        heading: "Start with business readiness, not model readiness",
        paragraphs: [
          "AI readiness is often reduced to data platforms and technical skills. Those matter, but they do not prove that a workflow should change or that anyone will own the result. Begin with the business problem, current baseline, decision rights, users, and acceptable failure modes.",
          "Microsoft's AI adoption planning guidance similarly connects skills, resources, use-case prioritisation, proof of concept, and responsible AI. The assessment should therefore test the whole delivery system rather than one technology layer.",
        ],
      },
      {
        heading: "The seven-dimension scorecard",
        paragraphs: [
          "Score each dimension from 0 to 3 and record evidence. Zero means unknown or absent; one means informal; two means defined for the use case; three means operational and measured. Do not average away a critical blocker such as unlawful data use or missing ownership.",
        ],
        table: {
          columns: ["Dimension", "Questions to test", "Minimum evidence"],
          rows: [
            ["Value", "What changes, for whom, and by how much?", "Baseline, metric, sponsor, decision date"],
            ["Workflow", "Is the current process observable and stable enough?", "Process map, volume, exceptions, hand-offs"],
            ["Data", "Can permitted data be accessed and traced?", "Sources, owner, quality sample, access route"],
            ["Risk", "What happens when the system is wrong or misused?", "Risk tier, review point, escalation path"],
            ["Technology", "Can the use case be bought, configured, or built sensibly?", "Options, integrations, cost range, constraints"],
            ["People", "Will users trust and adopt the changed workflow?", "User group, training need, feedback route, champion"],
            ["Ownership", "Who runs, measures, and improves it?", "Product owner, operational owner, support model"],
          ],
        },
      },
      {
        heading: "How to score individual use cases",
        paragraphs: [
          "Use-case selection needs a second score because organisational readiness is not evenly distributed. A customer-support summarisation workflow and an automated credit decision can exist in the same company but require very different evidence and controls.",
        ],
        bullets: [
          "Value: frequency, labour or delay removed, customer impact, strategic relevance, and measurability.",
          "Feasibility: accessible inputs, output testability, integration effort, and availability of a manual fallback.",
          "Risk: consequence of error, personal or sensitive data, external impact, explainability, and reversibility.",
          "Adoption: user pain, process change, management support, incentives, and training burden.",
          "Time to evidence: whether a representative sample can be tested within four to eight weeks.",
        ],
      },
      {
        heading: "Readiness bands and the correct next move",
        paragraphs: [
          "Readiness should determine the next smallest credible action. It should not become a pass-fail gate for the entire AI agenda.",
        ],
        table: {
          columns: ["Band", "Meaning", "Next move"],
          rows: [
            ["0-7: Explore", "Problems, ownership, or evidence are unclear", "Run discovery; establish baselines; do not buy a platform"],
            ["8-13: Prepare", "One or more use cases are promising but blocked", "Resolve access, ownership, policy, or workflow gaps"],
            ["14-17: Pilot", "A bounded use case has sufficient value and controls", "Test on a representative sample with human review"],
            ["18-21: Scale carefully", "Evidence, ownership, controls, and adoption are working", "Expand volume or adjacent use cases with monitoring"],
          ],
        },
      },
      {
        heading: "What the final assessment must contain",
        paragraphs: [
          "A readiness report is actionable only when it reduces uncertainty for a funding or delivery decision. Keep it short enough that sponsors and owners will use it.",
        ],
        bullets: [
          "Current-state summary with evidence and unresolved assumptions.",
          "Prioritised use-case portfolio: start, prepare, park, or reject.",
          "Risk tiers and minimum controls for the first candidates.",
          "A 90-day roadmap with owners, dependencies, decision points, and stop conditions.",
          "One pilot brief containing baseline, target metric, sample, workflow, review process, and handover owner.",
          "Capability gaps to hire, train, borrow, or source through a partner.",
        ],
      },
      {
        heading: "Common assessment failures",
        paragraphs: [
          "Avoid questionnaires that reward the purchase of technology, produce one company-wide maturity number, or assume every business process needs generative AI. Readiness is contextual and evidence must be tied to decisions.",
        ],
        bullets: [
          "Scoring aspiration instead of current evidence.",
          "Treating data quantity as a substitute for lawful access and usable quality.",
          "Ignoring the current process, exception paths, and human workarounds.",
          "Recommending pilots without sponsors, baselines, or operational owners.",
          "Creating a long transformation roadmap before testing one representative workflow.",
        ],
      },
    ],
    faq: [
      {
        question: "How long should an AI readiness assessment take?",
        answer:
          "A focused assessment for a mid-sized organisation can usually be completed in two to four weeks when stakeholders and workflow evidence are available. Larger or regulated portfolios may require a staged assessment by business unit.",
      },
      {
        question: "What is the difference between AI readiness and AI maturity?",
        answer:
          "Maturity describes the organisation's current capability. Readiness asks whether the organisation and a specific use case have enough evidence, ownership, controls, and capacity to take the next step now.",
      },
      {
        question: "Can a company with low AI maturity run a useful pilot?",
        answer:
          "Yes. A low-risk, measurable workflow with accessible data, a manual fallback, and a committed owner can be a good pilot even when the wider organisation is early in its AI journey.",
      },
      {
        question: "What comes after an AI readiness assessment?",
        answer:
          "The next step should be one of four explicit decisions for each use case: start a bounded pilot, prepare a missing dependency, park the idea for later, or reject it. The assessment should identify owners and dates for those decisions.",
      },
    ],
    sources: [sources.microsoftPlan, sources.microsoftStrategy, sources.ukAdoptionPlan, sources.nistRmf, sources.icoAi],
    related: [
      "what-is-ai-enablement",
      "ai-governance-framework-for-adoption",
      "how-to-know-if-a-workflow-is-worth-automating",
      "ai-workflow-automation-examples",
    ],
  },
  {
    slug: "ai-governance-framework-for-adoption",
    title: "An AI Governance Framework That Helps Adoption Instead of Blocking It",
    seoTitle: "AI Governance Framework for Practical Adoption",
    description:
      "A proportionate AI governance framework for classifying use cases, assigning controls, enabling delivery, and monitoring real operational risk.",
    seoDescription:
      "Build a practical AI governance framework with risk tiers, approved pathways, human oversight, evidence, ownership, and monitoring that supports adoption.",
    category: "Guide",
    readingTime: "12 min read",
    publishedAt: "2026-08-19",
    updatedAt: "2026-08-19",
    targetQuery: "AI governance framework",
    searchIntent: "Implementation",
    keywords: [
      "AI governance framework",
      "responsible AI framework",
      "AI governance operating model",
      "AI adoption governance",
      "generative AI governance",
      "enterprise AI governance",
    ],
    summary:
      "A practical AI governance framework makes the safe path faster than informal experimentation. It classifies use cases by consequence, assigns proportionate controls, names decision owners, preserves evidence, and monitors systems after launch.",
    answerBox: {
      heading: "The minimum viable AI governance framework",
      paragraphs: [
        "Start with six connected elements: an inventory, risk tiers, approved-use guidance, a decision workflow, evidence requirements, and ongoing monitoring. Governance should be embedded in use-case intake and delivery rather than added as a policy review at the end.",
      ],
      bullets: [
        "Inventory every material AI use case and accountable owner.",
        "Classify consequence before choosing controls.",
        "Publish an approved path for common low-risk work.",
        "Require stronger evidence and review as impact increases.",
        "Monitor quality, usage, incidents, vendors, and material changes.",
      ],
    },
    takeaways: [
      "Governance should reduce uncertainty for delivery teams, not only describe prohibitions.",
      "Risk tiers prevent low-risk productivity use cases from receiving the same process as consequential decisions.",
      "Human review is a designed control with authority and evidence, not a person casually checking outputs.",
      "Policies become operational only when connected to intake, procurement, delivery, monitoring, and incident response.",
    ],
    sections: [
      {
        heading: "What an AI governance framework is",
        paragraphs: [
          "An AI governance framework is the set of decision rights, processes, controls, and evidence used to direct and oversee AI across its lifecycle. NIST organises AI risk management around four connected functions: Govern, Map, Measure, and Manage. The framework is voluntary and designed for organisations that build, deploy, or use AI systems.",
          "For an operating team, the important translation is simple: know what AI is being used, understand the context and consequence, test what matters, assign ownership, and respond when performance or conditions change.",
        ],
      },
      {
        heading: "Use risk tiers, not one approval process",
        paragraphs: [
          "A single heavyweight review path encourages teams either to avoid useful AI or to use it outside the approved process. Tiering allows governance effort to follow consequence.",
        ],
        table: {
          columns: ["Tier", "Example", "Minimum control pattern"],
          rows: [
            ["Tier 1: Assisted productivity", "Drafting, summarisation, internal ideation", "Approved tools, prohibited-data rules, user responsibility, basic logging"],
            ["Tier 2: Operational support", "Classification, routing, internal recommendations", "Named owner, sample testing, confidence or exception rules, human review, monitoring"],
            ["Tier 3: External or consequential", "Customer outputs, eligibility support, regulated or sensitive decisions", "Formal risk assessment, legal/privacy/security review, robust evaluation, explanations, incident process, senior approval"],
            ["Prohibited or pause", "Use with unacceptable legal, rights, safety, or control gaps", "Do not deploy until the blocking condition is removed"],
          ],
        },
      },
      {
        heading: "The six operating components",
        paragraphs: [
          "A policy is only one component. The framework needs a path from idea to monitored operation.",
        ],
        bullets: [
          "Inventory: use case, purpose, users, owner, vendor or model, data, status, risk tier, and review date.",
          "Acceptable-use guidance: approved tools, permitted data, prohibited actions, disclosure expectations, and escalation routes.",
          "Intake and triage: a short business-led request that captures value, context, people affected, and consequence of error.",
          "Assessment and evidence: privacy, security, legal, data, evaluation, accessibility, operational resilience, and vendor evidence proportionate to the tier.",
          "Decision rights: who can approve, reject, request changes, accept residual risk, and stop a live use case.",
          "Monitoring and response: quality, drift, usage, incidents, complaints, cost, model or vendor changes, and scheduled reassessment.",
        ],
      },
      {
        heading: "Design human oversight as a real control",
        paragraphs: [
          "Saying 'a human is in the loop' is not enough. The reviewer must have sufficient context, time, authority, and evidence to challenge the output. Otherwise human review becomes ceremonial and error simply moves faster.",
        ],
        bullets: [
          "Define which outputs require review and which can proceed automatically.",
          "Show the source evidence, confidence, rules, and relevant context to the reviewer.",
          "Give reviewers explicit actions: accept, edit, reject, escalate, or request more information.",
          "Record the decision and correction so the workflow can be evaluated and improved.",
          "Measure acceptance, override, error, and escalation rates by use case and segment.",
        ],
      },
      {
        heading: "Connect governance to adoption",
        paragraphs: [
          "Governance supports adoption when employees can understand the approved path and receive a timely answer. Publish examples, decision trees, tool guidance, short templates, office hours, and a service-level expectation for reviews.",
          "The UK Government's human-centred framework separates adoption into Adopt, Sustain, and Optimise. That is a useful reminder that launch approval is not the end: people need continued support, feedback, and improvement after the first rollout.",
        ],
      },
      {
        heading: "A 30-day implementation sequence",
        paragraphs: [
          "Do not wait for a perfect enterprise framework. Build minimum viable governance around real use cases, then improve it with evidence.",
        ],
        table: {
          columns: ["Week", "Action", "Output"],
          rows: [
            ["1", "Map current use, stakeholders, existing policies, and material risks", "Initial inventory and ownership map"],
            ["2", "Agree risk tiers, approved-use guidance, and escalation criteria", "A usable decision path for employees"],
            ["3", "Apply the framework to two or three real use cases", "Tested controls, evidence gaps, and decisions"],
            ["4", "Publish, train owners, set review cadence, and track measures", "Live governance loop with an improvement backlog"],
          ],
        },
      },
      {
        heading: "Evidence to retain",
        paragraphs: [
          "Evidence makes decisions reviewable and protects continuity when people, vendors, or models change. The required depth should follow the risk tier.",
        ],
        bullets: [
          "Business purpose, scope, intended users, people affected, and accountable owner.",
          "Data sources, permissions, retention, transfers, and vendor processing terms.",
          "Evaluation set, quality thresholds, known limitations, and failure examples.",
          "Human oversight design, reviewer instructions, escalation, and fallback process.",
          "Approval decision, residual risks, monitoring measures, incidents, and material changes.",
        ],
      },
    ],
    faq: [
      {
        question: "What are the main elements of an AI governance framework?",
        answer:
          "The core elements are an AI inventory, risk classification, acceptable-use guidance, intake and assessment, decision rights, evidence requirements, human oversight, monitoring, and incident response.",
      },
      {
        question: "Is the NIST AI Risk Management Framework mandatory?",
        answer:
          "NIST describes the AI RMF as voluntary. Organisations can use its Govern, Map, Measure, and Manage functions as a structure, then map them to applicable laws, sector rules, contracts, and internal policies.",
      },
      {
        question: "How can AI governance avoid slowing adoption?",
        answer:
          "Use risk tiers, pre-approved low-risk patterns, short intake forms, clear decision owners, reusable evidence templates, and response times. The safe route should be easier to understand than informal experimentation.",
      },
      {
        question: "Who should own AI governance?",
        answer:
          "Governance is cross-functional. A senior sponsor sets risk appetite, business owners remain accountable for outcomes, and technology, security, privacy, legal, data, and operational leaders provide controls and evidence within their remit.",
      },
    ],
    sources: [sources.nistRmf, sources.nistCore, sources.icoAi, sources.ukAdoptionPlan, sources.ukPeopleFactor],
    related: [
      "what-is-ai-enablement",
      "ai-readiness-assessment",
      "content-fact-checking-automation",
      "how-to-know-if-a-workflow-is-worth-automating",
    ],
  },
]
