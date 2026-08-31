# Seeed × Interspecies — Open Hardware for Animal & Ecological Research

Landing page and content assets for the **Interspecies** initiative — Seeed Studio's flagship open-hardware platform for animal behavior research, environmental sensing, and human–non-human interaction. Embedded within Seeed's ESG/SDG page ecosystem.

## Repository Structure

### Landing Pages (HTML)
- `Interspecies-Landing-Page-v0.3.html` — **Current version** · SDG-aligned palette (Seeed lime green `#8FC31F`, cool gray surfaces, Elementor-style card shadows)
- `Interspecies-Landing-Page-v0.2.html` — v0.2 · chaihuo-inspired design (warm cream + forest green)
- `Interspecies-Landing-Page-v0.1.html` — v0.1 · initial prototype

### Content & Planning (Markdown)
- `Interspecies-Landing-Page-v0.1-Content-Blueprint.md` — Full section-by-section content blueprint
- `Content-Sourcing-Matrix.md` — What content exists, what's missing, where to find it
- `Challenges-Case-Library.md` — Case stories (Clue → Solution → Case) for the Challenges section
- `Interspecies-Challenges-Summary.md` — Case summary by status (in-progress / intent)
- `Open-Datalogger-for-Interspecies-Playbook.md` — Strategic playbook for the Open Datalogger platform
- `Interspecies-Section-for-ESG-Handbook.md` — Interspecies section for the ESG internal handbook
- `Seeed-ESG-SDG-合作内部培训手册.md` / `.html` — ESG/SDG internal training manual (with Interspecies annotations)

### Reference Images
- `ref-style-1.png` / `ref-style-2.png` / `ref-style-3.png` — Minimalist page style references

## Design System (v0.3 — SDG-aligned)

| Token | Value | Usage |
|-------|-------|-------|
| Brand | `#8FC31F` | Seeed lime green — primary accent |
| Brand Deep | `#00936d` | Teal-green — secondary accent, headings |
| Surface | `#f8f8f8` | Cool gray background (matches SDG page) |
| Surface Card | `#ffffff` | Card backgrounds |
| Ink | `#32373c` | Primary text |
| Muted | `#6d6f70` | Secondary text |
| Dark | `#1a231a` | Dark sections (green-tinted) |

Built with Tailwind CSS (Play CDN), Space Grotesk + Inter fonts.

## Page Sections

1. **Hero / Introduction** — positioning statement + trust line + CTAs
2. **How Technology Improves Animal Study?**
   - 01 Research Methodology — comprehensive SVG diagram of 8 research methods
   - 02 Technology Trends — CV, TTS, LLM, VLM, Tracker
   - 03 Cases (in progress) — progress bar + milestone timeline + 5 challenge stories (Clue→Solution→Case) + interactive world map
3. **People** — trust endorsement cards + partner strip
4. **Future Projects** — Facebook follow CTA + 6 project categories
5. **Media Contact** — routed email contacts
6. **Footer**

## v0.3 Changelog (2026-08-31)

- **Real-world interactive map** — replaced the hand-drawn SVG schematic with Leaflet + CARTO dark basemap. 8 projects pinned at real coordinates (HK Deep Bay, Bhutan, Panama, Peru, Yellowstone, Seattle, MIT, India) with enlarged pulsing markers; hovering/tapping a pin shows a right-side preview card (status, location, hardware stack, intro, case link). Pins are color-coded: active (lime) / open lead (amber) / planned (gray); scroll-wheel zoom disabled in-page, markers keyboard-accessible
- Fixed the dead **Introduction** anchor — hero section id renamed `top` → `intro` so nav / mobile-menu / footer links jump correctly
- Added lead-gen **CTAs on open challenge leads** (per content blueprint: every clue carries a proposal CTA): anti-poaching "Propose a deployment →" and BuzzCam "Are you the researcher? Get in touch →" (both route to solution@seeed.cc with prefilled subject)
- Added descriptive `title` to the TNC Phase 1 blog link (*Turning Environmental Monitoring into Conservation Evidence*)
- Milestone timeline shifted to 2026 (ESG/SDG launch NOW), added BuzzCam challenge story, challenge grid responsive on mobile (`lg:grid-cols-3`), OG/meta tags

## Embedding in the ESG/SDG Page

Use the landing page as an isolated module in the Seeed ESG/SDG page:

```html
<iframe
  src="/interspecies/Interspecies-Landing-Page-v0.3.html"
  title="Seeed Interspecies initiative"
  loading="lazy"
  style="width:100%;min-height:720px;border:0"
></iframe>
```

Keep the iframe approach during integration. The current page uses Tailwind utility classes and global `body` styles, so directly injecting its markup into an existing Elementor/WordPress page could conflict with parent-page CSS.

## Key People
- **Becca** (solution marketing) — landing page, scenarios, cases, challenges, contact routing
- **Product line marketing** — tech framework, architecture, product details
- **Allen** — GitHub/Open Datalogger, demos, Fab Lab

## Links
- [Seeed SDG Page](https://www.seeedstudio.com/blog/sdg/)
- [Interspecies Internet](https://interspecies.io)
- [Chaihuo MCV (design reference)](https://mcv.chaihuo.org/)
