# Seeed × Interspecies

Open-hardware landing page for the **Interspecies** initiative — Seeed Studio's platform for animal behavior research, environmental sensing, and human–non-human interaction.

**Live:** https://rebeccah321.github.io/seeed-interspecies/

---

## Development

Node ≥ 22.12.0 (even-numbered versions only).

```bash
npm install       # install dependencies
npm run dev       # dev server → http://localhost:4321/seeed-interspecies/
npm run build     # build to dist/
npm run preview   # preview build locally
```

## Project Structure

```
src/
  pages/index.astro       # page root — assembles all section components
  layouts/BaseLayout.astro
  components/             # one .astro file per page section
    Nav.astro  Hero.astro  Why.astro  What.astro
    Cases.astro            # Leaflet map + modal + carousel
    People.astro  Join.astro  Footer.astro
  data/projects.js        # map pins & carousel card data (edit content here)
  styles/global.css       # Tailwind @theme tokens + all custom CSS

public/
  images/                 # case / hero photos
  partner-logos/
  sdg-icons/

docs/                     # content planning documents
.github/workflows/
  deploy.yml              # GitHub Actions → GitHub Pages (auto on push to main)
```

## Deployment

Push to `main` triggers automatic deployment via GitHub Actions (`withastro/action@v6 → actions/deploy-pages@v5`).

First-time setup: **Settings → Pages → Source → GitHub Actions** (repo owner `rebeccah321` must enable this once).

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Brand | `#8FC31F` | Seeed lime green — primary accent |
| Brand Deep | `#00936d` | Teal-green — secondary accent, headings |
| Surface | `#f8f8f8` | Cool gray background |
| Surface Card | `#ffffff` | Card backgrounds |
| Ink | `#32373c` | Primary text |
| Muted | `#6d6f70` | Secondary text |

Typography: Space Grotesk (display) + Inter (body). Built with Astro 7 + Tailwind CSS 4 + Leaflet 1.

## Key People

- **Becca** — solution marketing, landing page, cases, contact routing
- **Allen** — GitHub / Open Datalogger, demos, Fab Lab

## Links

- [Seeed SDG Page](https://www.seeedstudio.com/blog/sdg/)
- [Interspecies Internet](https://interspecies.io)
- [Content docs](docs/)
