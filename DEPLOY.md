# Smar Group v3.2 — Follow-up fixes

## Addresses Copilot PR #2 review + user requests

### Copilot items (both fixed)
1. **Lease hybrid section mobile overflow** — `.kpi-block` now stacks to single column at 768px and below, with reduced padding, wrapping rows, and non-truncated values
2. **Reduced-motion specificity** — override moved to end of stylesheet with `!important` and higher-specificity selectors so hero animations are reliably disabled

### User requests
- **Logo reverted** to the simple bronze dot (concentric version removed)
- **Manor Hotel Exmouth** — hero/card/thumb replaced with the 2216×2216 source (sharp, bright, elevated-view shot)
- **Balgeddie House rhododendron** — hero/card/thumb replaced with the 1541×1020 source (vibrant pink flowers, stone house with ivy)

### Bonus small fixes while I was there
- `.track__list li` bullets no longer break awkwardly on mobile when text contains `<strong>` tags (changed from flex to position:absolute pseudo-bullet)

## Still outstanding (your call when ready)
- Wire contact form to Resend
- Swap SmarCEO mock dashboard for real screenshot
- Higher-res source photos for Pitbauchlie + wedding shots (still upscaled from ~500px sources)
