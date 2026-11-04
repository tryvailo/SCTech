export interface AutomationArea {
  title: string
  description: string
  metric: string
}

export const automationAreas: readonly AutomationArea[] = [
  {
    title: "Customer support & feedback",
    description: "Faster ticket handling, wider QA coverage and recurring issues spotted early.",
    metric: "Faster handling · Broader QA",
  },
  {
    title: "Documents & back office",
    description: "Inboxes, PDFs, orders and invoices turned into validated records.",
    metric: "Less rework · Faster processing",
  },
  {
    title: "Product data & catalogue",
    description: "Attributes enriched, images checked, updates ready for your PIM or store.",
    metric: "Fewer errors · Faster publishing",
  },
  {
    title: "Reporting & decision support",
    description: "Evidence-linked reports and summaries, without the manual preparation.",
    metric: "Less preparation · Clearer decisions",
  },
]
