# Danylo Vasiur — Portfolio

A hand-written Next.js rebuild of [danylovasiur.framer.website](https://danylovasiur.framer.website),
converted from the Framer static export in `../_source/framer-site`.

- **Framework** Next.js 15 (App Router), React 19, TypeScript
- **Motion** Framer Motion, with all timing declared in `src/lib/motion.ts`
- **Styling** CSS Modules over a single token file — no utility framework
- **Deploy** Vercel, zero config (every route is statically prerendered)

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also typechecks and lints)
```

---

## Structure

```
src/
  app/
    layout.tsx            header + footer shell, fonts, metadata
    page.tsx              home: bookshelf, about teaser, experience
    [slug]/page.tsx       the seven case studies, statically generated
    about-me/             /about-me
    contact-us/           /contact-us
    sitemap.ts robots.ts
  components/
    layout/               SiteHeader, SiteFooter
    bookshelf/            the homepage stack + its fall animation
    home/                 AboutTeaser, Experience
    project/              ProjectHero, ProjectIntro, ProjectBody, RelatedProjects
    ui/                   Media, Reveal, Marks (inline SVG)
  data/
    types.ts              the content model
    projects.ts           all seven case studies
    site.ts               nav, socials, contact, experience
  lib/
    motion.ts             every easing, variant and stagger value
  styles/
    tokens.css            colour, type ramp, spacing, layout, motion tokens
    globals.css           reset, fonts, layout primitives, type utilities
public/
  media/                  images and video, filenames preserved from the export
  fonts/                  Amiamie 300 / 400
```

Content is data, not markup. Adding a project means adding an object to
`src/data/projects.ts`; nothing else needs to change — the shelf, the case-study
page, the sitemap and the "more projects" strips all read from it.

---

## Key changes from the Framer export

### 1. Typography and spacing

The export hardcoded pixel values per element and set nearly every line-height
to 1.2. That is fine for a single line and cramped for a paragraph. The rebuild
replaces it with one system in `src/styles/tokens.css`:

**A fluid type ramp named by role.** Every size is a `clamp()` whose middle term
is in `vw`, so type scales continuously between 360px and 1440px instead of
jumping at breakpoints. The desktop end of each ramp matches the original
measurements (nav 21px, spine 24px, overview 24px, section titles 68px), so
nothing looks different at full width — it just degrades properly below it.

**Line height by function, not by habit.**

| Token | Value | Used for |
| --- | --- | --- |
| `--lh-display` | 0.92 | the oversized wordmark and section titles |
| `--lh-heading` | 1.08 | case-study hero titles |
| `--lh-snug` | 1.2 | labels, single-line values, nav |
| `--lh-lead` | 1.32 | project overviews |
| `--lh-body` | 1.5 | running text (was 1.2) |

**Optical letter-spacing.** Tracking now tightens as type grows
(`--ls-display` −0.035em through `--ls-label` +0.012em) instead of sitting at
`normal` everywhere. Large type stops looking loose and small grey labels stop
looking tight.

**One spacing scale.** A 4px-based ramp (`--space-1` … `--space-14`) plus three
rhythm tokens — `--section-y` between major sections, `--block-y` between blocks
inside one, `--stack-gap` between adjacent images. Sections no longer carry
one-off margins, so vertical rhythm is consistent down every page.

**One horizontal grid.** `--gutter` is the only page inset, and the case-study
grid is `minmax(0, 1fr) var(--rail-w)` with `--grid-gap` between. The gallery
column and the sticky narrative rail land on the same measurements the original
used (≈1029px / 302px at 1440px) but now derive from tokens rather than fixed
widths.

**Measure limits.** Running text is capped in `ch` units (overview 44ch, about
notes 42ch, about lead 68ch, home copy 34ch) so no paragraph runs past a
comfortable line length on a wide screen.

**Case-study titles step down.** Titles over 38 characters drop to a smaller
ramp instead of wrapping, so every hero band stays the same height.

### 2. The bookshelf fall

`src/components/bookshelf/Bookshelf.tsx` renders the stack; all timing lives in
`bookVariants` in `src/lib/motion.ts`.

On load each book drops in from above, top to bottom, `85ms` apart after a
`180ms` lead-in. Three properties are animated independently so the landing
feels like weight rather than a slide:

- **`y`** — a spring (`stiffness 340, damping 21, mass 1.05`) damped just under
  critical, so a book lands hard and settles with one small rebound. Books
  further down start higher (`-(140 + index * 26)`), which makes the sequence
  read as one object falling apart rather than seven separate slides.
- **`scaleY`** — a squash-and-recover keyframe on impact,
  `1.05 → 0.93 → 1.02 → 1`, pivoted on the book's bottom edge
  (`transform-origin: 50% 100%` in `Bookshelf.module.css`).
- **`rotate`** — ±0.9° resolving to 0, alternating per book, so the stack never
  looks machined.

The plinth ("projects / bookshelf") slides up to meet the last book once the
stack has landed.

`useReducedMotion()` swaps every variant for a `static` state: the books arrive
with a short fade and no travel.

The fall lives on the `<li>` and the hover lives on the `<a>`, so the two
transforms never compete for the same element. Hovering slides a book out of the
stack the way you would pull one off a shelf.

### 3. Layout and structure

- **Ragged stack preserved responsively.** Each book's inset is a percentage of
  the content width, and its thickness is a unitless number scaled by `vw` with
  a floor. The uneven edge survives down to phone widths; thin books stay a
  46px tap target.
- **Sticky narrative rail.** On a case study the Problem / Solution / Result
  column sticks beside the gallery on desktop and moves *above* it on mobile —
  read the argument, then see the work.
- **Related-project cards share one crop.** The source files mix portrait video
  and landscape stills; a single 3:4 crop keeps the row optically level.
- **Reveals on scroll.** `<Reveal>` wraps sections in a once-only fade-and-lift,
  also disabled under reduced motion.

### 4. Performance and SEO

- All 15 routes are statically prerendered; ~103 kB shared JS.
- Both Amiamie cuts are preloaded and self-hosted; no Inter, no
  `framerusercontent.com`, no Framer runtime, no editor bar or badge.
- Every image and video declares its aspect ratio, so nothing reflows on load.
- Per-page `<title>` / description / Open Graph, plus `sitemap.xml` and
  `robots.txt` generated from the project data.
- Semantic markup throughout: one `<h1>` per page, `<nav>`/`<footer>`/`<article>`
  landmarks, real alt text, visible focus rings, `<dl>` for project metadata.

---

## Notes and known differences

**Four videos in the export were corrupt.** `pmrVVXBKjVwuqmxJx9S36N57A.mp4`,
`K4lqmGfqKdZDyEHxwgMJ5YUydA.mp4`, `X3c0HWS2gZqpGPBVnKT88Mu0o.mp4` and
`WFDgKrhEQYxr1vB3i6jE4rvANPU.mp4` had scrambled bytes in both supplied archives.
Working copies were re-fetched from `framerusercontent.com` (the live site's own
CDN) and are the files in `public/media` now.

**Media weight.** `public/media` is ~117 MB because Framer stores the uploads at
their original bitrate — several clips run 12–49 Mbit/s for two to four seconds.
Nothing re-encodes them automatically, since that is lossy and your call. When
you want it:

```bash
npm run optimize:media
```

That re-encodes to H.264 CRF 24, caps the long edge at 1920, strips audio and
moves the MOOV atom to the front. Originals are kept in
`public/media/_original` so it is reversible.

**Route changes.** All original paths are preserved except `/re:move`, which is
now `/re-move` — a colon in a path segment is legal but awkward to link, cache
and express in routing tables. `next.config.ts` permanently redirects the
percent-encoded old URL.

**Copy fix.** The Akta № gallery caption read "Scetches" in the original; it is
"Sketches" here. This is the only wording change — everything else is verbatim
from the export.

**Two decorative videos in `-aktan/assets/videos/` were left out.** They are not
referenced by the live page and appear to be unused source material.

**`site.url`** in `src/data/site.ts` is a placeholder
(`https://danylovasiur.com`). Set it to the real domain before launch —
`sitemap.xml`, `robots.txt` and the canonical Open Graph URLs read from it.

---

## Deploying to Vercel

Import the repo; Vercel detects Next.js and needs no settings. No environment
variables, no server runtime — every page is static HTML.
