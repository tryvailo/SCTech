# SmartCore Insights SEO Review

Date: 2026-07-23
Scope: `/insights` and all `/insights/[slug]` articles in `landing-smart-core-new`

## Serpstat Note

Serpstat is not available as a callable connector in this Codex environment. Tool discovery did not expose a Serpstat API, so this review uses local content analysis, live SERP spot checks, and SEO/GEO best-practice review. If a Serpstat export becomes available, validate the keyword map below against actual UK/US volume, keyword difficulty, SERP features, and competitor overlap.

## Summary

The blog is now positioned as a long-tail SEO and AI-citation layer for SmartCore. The broad term "AI workflow automation" is competitive and often dominated by tool/software pages, so the content strategy should avoid fighting only for that head term. The stronger opportunity is controlled, consulting-led operational workflows with specific use cases.

## Keyword Map

| URL | Primary keyword | Intent | Secondary keyword cluster |
| --- | --- | --- | --- |
| `/insights/what-is-ai-workflow-automation` | what is AI workflow automation | Informational | AI workflow automation examples, controlled AI workflows, operational workflow automation |
| `/insights/how-to-know-if-a-workflow-is-worth-automating` | AI workflow automation candidates | Implementation | workflow automation checklist, AI automation assessment, workflow audit |
| `/insights/image-qa-compliance-automation` | AI image QA automation | Commercial Investigation | product catalogue image QA, catalog image compliance, ecommerce image quality automation |
| `/insights/product-data-cleanup-automation` | AI product data cleanup | Commercial Investigation | PIM data automation, product attribute extraction, catalogue data enrichment |
| `/insights/review-intelligence-automation` | review intelligence automation | Commercial Investigation | AI customer feedback analysis, customer review analytics automation, voice of customer automation |
| `/insights/content-fact-checking-automation` | AI content fact checking | Implementation | claim verification workflow, AI publishing workflow, AI-generated content review |
| `/insights/reporting-coordination-automation` | AI reporting automation | Commercial Investigation | release notes automation, Jira release notes AI, internal reporting automation |
| `/insights/market-competitor-monitoring-automation` | AI competitor monitoring | Commercial Investigation | market monitoring automation, competitive intelligence automation, AI market research workflow |

## Improvements Made

- Added dedicated `seoTitle` and `seoDescription` fields for every article instead of relying on H1 copy.
- Added keyword clusters and search intent for every article.
- Updated article metadata to use article-specific SEO titles, descriptions, and keywords.
- Added `keywords` and `wordCount` to Article JSON-LD.
- Added BreadcrumbList JSON-LD to article pages.
- Reworked H2 headings into search-style headings such as "How ... Works", "When ... Is a Good Fit", and "What Is ...".
- Changed visible card metadata from "Target query" to intent labels, keeping keyword data in structured fields.
- Kept all content free from public cost or fee language.

## Review Findings

Strengths:

- Good topical focus around operational AI automation rather than generic AI tools.
- Strong AEO structure: summary, takeaways, tables, FAQ, Article schema, FAQ schema, visible update date.
- Good trust posture: source references are present and content avoids unsupported client claims.
- Internal linking exists through related articles.

Weaknesses to Monitor:

- Articles are still short for competitive head terms. They are better suited to long-tail queries unless expanded to 1,500-2,500 words each.
- Authority signals are limited because there are no named human author bios, case-study proof pages, or third-party references to SmartCore yet.
- No Serpstat volume/KD data is available in this environment, so keyword priority is based on intent and SERP pattern rather than paid keyword metrics.
- The current public examples are intentionally generic. More concrete screenshots or anonymised workflow diagrams would improve trust and conversion.

## Serpstat Validation Checklist

When Serpstat access/export is available, check:

- Volume and KD for each primary keyword.
- Related questions and People Also Ask terms for every article.
- UK vs US volume split for "catalogue" and "catalog" variants.
- Competitors ranking for "AI workflow automation consulting" and "AI automation consulting".
- SERP feature presence: AI Overview, featured snippets, PAA, video, image pack.
- Pages ranking for use-case terms such as "AI customer feedback analysis", "AI reporting automation", and "AI product data cleanup".

## Source Signals Reviewed

- Google search results for "AI workflow automation" show strong definition/tool/list intent, with tool pages and broad guides competing for the head term.
- Google Cloud materials support catalogue/search/data-quality relevance for product data and commerce workflows.
- Shopify documentation reinforces the need to review AI-generated product content before publishing.
- Atlassian materials support release-note and reporting workflow patterns around tickets, summaries, tone, and human review.
- Fact-checking research reinforces the importance of evidence retrieval, explainability, and review paths.
