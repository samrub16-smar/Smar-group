# Smar Group v3.1 — Fix Bundle

Addresses Copilot PR review (5 issues) plus content updates.

## Fixes

1. **Section --green / --green-darker** — added back-compat CSS aliases so leadership (about) and hybrid (lease) sections render correctly
2. **Button contrast WCAG AA** — primary buttons + nav CTA switched to bronze background with ink (dark) text, boosts contrast from 2.85:1 → 5.72:1
3. **Reduced motion** — hero background Ken Burns animation now disabled for users requesting reduced motion
4. **Nav breakpoint** — collapse moved from 768px to 1024px so tablets don't show an overflowing nav row
5. **KPI block styles** — restored .kpi-block, .kpi-card, .kpi-row CSS so the lease hybrid section layout works

## Content updates

- Founder name: Sarju Lakhani → Sam Surani (across homepage quote, about leadership, contact bio)
- Removed "Group entities" info block from contact page (kept in small-print footer)

## New assets

- `assets/logo-mark.svg` — new concentric-circles logo mark with italic 's'
- `assets/photos/*` — heritage property photos upscaled 2–2.5× with Lanczos + unsharp mask pipeline (reduces visible blur vs original low-res sources)

## Known trade-off

Heritage property photos (Manor, Pitbauchlie, Balgeddie, wedding) were upscaled from ~500–800px sources. Software upscaling helps but cannot invent detail the source lacks. For best quality long-term, provide higher-res originals (2000px+ wide) and the next bundle will replace them.
