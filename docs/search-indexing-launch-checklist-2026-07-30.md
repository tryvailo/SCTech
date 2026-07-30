# Search Indexing Launch Checklist

Last updated: 2026-07-30

## Production URLs

- Primary domain: https://www.smartcoretech.co.uk/
- Redirecting apex domain: https://smartcoretech.co.uk/
- Sitemap: https://www.smartcoretech.co.uk/sitemap.xml
- Robots: https://www.smartcoretech.co.uk/robots.txt
- AI crawler summary: https://www.smartcoretech.co.uk/llms.txt
- Privacy Notice: https://www.smartcoretech.co.uk/privacy

## Google Search Console

1. Add a Domain property for `smartcoretech.co.uk`, or a URL-prefix property for `https://www.smartcoretech.co.uk/`.
2. If using meta-tag verification, set this Vercel environment variable:
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<google-token>`
3. Redeploy production after adding the variable.
4. Submit `https://www.smartcoretech.co.uk/sitemap.xml`.
5. Use URL Inspection and request indexing for:
   - `https://www.smartcoretech.co.uk/`
   - `https://www.smartcoretech.co.uk/insights`
   - `https://www.smartcoretech.co.uk/insights/ai-workflow-automation-tools`
   - `https://www.smartcoretech.co.uk/insights/ai-automation-agency-vs-consultant`
   - `https://www.smartcoretech.co.uk/insights/invoice-processing-automation`
   - `https://www.smartcoretech.co.uk/insights/market-competitor-monitoring-automation`

## Bing Webmaster Tools

1. Add `https://www.smartcoretech.co.uk/`.
2. If using meta-tag verification, set this Vercel environment variable:
   - `NEXT_PUBLIC_BING_SITE_VERIFICATION=<bing-token>`
3. Redeploy production after adding the variable.
4. Submit `https://www.smartcoretech.co.uk/sitemap.xml`.

## First 14 Days

- Check index coverage twice per week.
- Watch for the old homepage snippet and request reindexing if it persists.
- Track impressions for `ai automation consulting`, `ai workflow automation tools`, `invoice processing automation`, `competitor monitoring tools`, and `product data enrichment`.
- Add fresh internal links from new articles to priority commercial pages as pages begin receiving impressions.
