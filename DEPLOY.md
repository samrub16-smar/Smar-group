# Smar Group v3 — Deployment Bundle

Photo-forward redesign with real hotel photography and SmarCEO owner platform feature.

## What changed from v2

- Full photo-forward design — real Smar Group hotel photos replace all SVG illustrations
- Darker, more editorial palette (deep forest + cream + warmer bronze)
- Pitbauchlie House → **Spark by Hilton Dunfermline** (brand transition reflected)
- All hotel language reframed from "we own" → "we operate"
- NEW: **SmarCEO Owner Platform** feature section on homepage with dashboard preview
- Partner strip tagline updated: "we provide FM, recruitment, management and finance support to leading UK hospitality brands"
- "Our Hotels" nav label (was "Portfolio")
- Spark by Hilton interior gallery on Our Hotels page (3 thumbnails per hotel)
- Balgeddie gallery with whisky bar + pool + terrace

## Contents

- 6 HTML pages: index, about, management, lease, hotels, contact
- assets/styles.css — full design system v3
- assets/main.js — nav, reveal animations, dashboard sparkline
- assets/photos/ — 36 real hotel photos (hero/card/thumb variants of 12 source photos)
- assets/logos/ — 13 partner logos (unchanged from v2)

## To swap in a real SmarCEO dashboard screenshot

The dashboard mockup on the homepage is a hand-built placeholder. To swap for a real screenshot:
1. Save your dashboard screenshot as `assets/photos/smarceo-dashboard.jpg`
2. In index.html, replace the entire `<div class="smarceo__dash">` block with a single `<div class="smarceo__dash"><img src="assets/photos/smarceo-dashboard.jpg" alt="SmarCEO dashboard"></div>`
3. Or keep the mockup — it already looks production-quality.
