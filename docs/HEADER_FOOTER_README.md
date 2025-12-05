Hybrid header/footer handling (CSS-first + progressive JS)

What I changed

- Implemented CSS variables in `app/globals.css`:
  - `--header-height` and `--footer-height` have sensible defaults (mobile-first).
- A client component `components/header-footer-observer.tsx` contains a `ResizeObserver` which updates `--header-height` and `--footer-height` (if a `footer` exists) on the `document.documentElement`.
- The content scroll container (`[data-scroll-container]`) now uses these variables to apply top/bottom padding:
  - `padding-top: calc(var(--header-height, 0px) + env(safe-area-inset-top))`
  - `padding-bottom: calc(var(--footer-height, 0px) + env(safe-area-inset-bottom))`

Why this approach

- CSS-first provides immediate, deterministic layout with safe defaults for browsers without JS or if JS fails.
- `ResizeObserver` progressively enhances the layout by measuring the actual header/footer sizes and updating CSS variables — this handles dynamic content, localization, font changes, and different densities reliably.
- `env(safe-area-inset-*)` ensures correct spacing for notched devices.

How to test locally

1. Install and run dev server:

```bash
pnpm install
pnpm dev
```

2. Open the app in the browser and enable device emulation in DevTools.
3. Verify that on mobile/tablet sizes:
   - Page content doesn't overlap with the fixed header.
   - When header or footer changes height (e.g., alter nav content or change font size), padding updates to compensate.
4. Test in a browser without `ResizeObserver` (older browser or simulate by disabling JS) — fallback CSS vars keep content visible.

- Optional follow-ups

- Move the ResizeObserver logic to `app/layout.tsx` if you prefer to render the observer differently (it's currently mounted from `app/layout.tsx` and observes `nav`/`footer` via selectors).
- Make nav `position: static` or `sticky` at small breakpoints for a pure-CSS solution (we currently keep `fixed` and compensate via padding).
- Add a small visual debug helper (temporary) that draws the header/footer height as an overlay while QA'ing.

Suggested commit message

"feat(layout): prevent content overlap with fixed header/footer — CSS defaults + ResizeObserver to update --header-height/--footer-height; include safe-area insets"
