# 🖌️ Indian Paintbrush — House Painting Website Template

A stylized, responsive one-page website template for **Indian Paintbrush**, a
small house-painting business. The design takes its cue from the scarlet
*Castilleja* wildflower (the "indian paintbrush") — warm cream, paintbrush red,
terracotta, ochre, and sage — a flower whose tips look like they were dipped
straight into a paint can.

### 🌐 Live site

**https://johannsteinhoff.github.io/indian-paintbrush/**

---

## What's inside

| Section | Purpose |
| --- | --- |
| **Hero** | Brand intro with an animated paintbrush-flower illustration |
| **About** | The story behind the name + a color-swatch motif |
| **Services** | Interior, exterior, color consulting, cabinets & trim |
| **Our Work** | A gallery grid ready for real project photos |
| **Process** | A simple 4-step "how we work" |
| **Testimonials** | Placeholder customer quotes |
| **Contact** | A styled quote-request form (demo handler) |

Everything is hand-built — **no frameworks, no build step**. Just open it.

## Structure

```
.
├── index.html          # all page markup
├── css/styles.css      # theme + layout (CSS variables at the top)
├── js/script.js        # nav toggle, scroll reveal, form demo
├── assets/
│   ├── logo.svg        # SVG symbol library (logo, flower, icons)
│   └── favicon.svg
└── README.md
```

## Customizing it

Because this is a **template**, the copy, colors, and photos are meant to be
swapped:

- **Colors** — edit the CSS variables at the top of `css/styles.css` (`--scarlet`,
  `--terracotta`, `--ochre`, `--sage`, …).
- **Text** — all content lives in `index.html`; search for the section you want.
- **Photos** — the About and Gallery blocks use styled placeholders with a
  `data-label` describing what photo goes there. Replace the placeholder `div`s /
  `figure`s with real `<img>` tags.
- **Contact form** — `js/script.js` currently shows a friendly demo message.
  Wire it to a real service (e.g. [Formspree](https://formspree.io) or Netlify
  Forms) by adding an `action`/`method` to the `<form>` in `index.html`.
- **Contact details** — phone, email, and address are placeholders in the
  Contact and Footer sections.

## Running locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

This repo is published with **GitHub Pages** from the `main` branch. Any push to
`main` updates the live site automatically.

---

*Built as a starting point — bold, natural color for the place you call home.* 🌾
