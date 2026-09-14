import type { MediaItem, Project } from './types'

const m = (src: string) => `/media/${src}`

const img = (
  src: string,
  ratio: number,
  alt: string,
  extra: Partial<Extract<MediaItem, { kind: 'image' }>> = {},
): MediaItem => ({ kind: 'image', src: m(src), ratio, alt, ...extra })

const video = (src: string, ratio: number, alt: string): MediaItem => ({
  kind: 'video',
  src: m(src),
  ratio,
  alt,
})

/* Cards reused across every "more projects" strip, declared once. */
const cards = {
  ubu: video('SpAQypmAKcjojk1r7A0F5hcye7M.mp4', 0.75, 'Ubu Roi book, animated preview'),
  sheetsolved: video('X7mVWw48oBMDDHbcxH3RhVommQ.mp4', 0.75, 'SheetSolved identity, animated preview'),
  mtrw: video('1SBUPFmivlWB4AcWR8lgsZvk.mp4', 0.8, 'Warsaw dance museum identity, animated preview'),
  aktan: img('aktan-hover-preview.png', 0.75, 'Charcoal illustration from the Akta No. book'),
  're-move': video('zl174ethgs7OB28ATVUU6DpaS0.mp4', 0.8, 'Re:Move key visual, animated preview'),
  lasowiak: img('YeV2lnGiwBSzZ8A9ZGuPgdiBqfo.jpg', 0.667, 'Lasowiak cranberry liqueur bottle'),
  honored: img('PKFwInnTMZlUu00bKRvSP5EI.png', 1.503, 'Honored agency website'),
} satisfies Record<string, MediaItem>

export const projects: Project[] = [
  {
    slug: 'ubu',
    title: 'Ubu Roi ou les Polonais',
    spineTitle: 'Ubu Roi ou les Polonais publication design',
    cardTitle: 'Ubu Roi ou les Polonais',
    discipline: 'Editorial',
    year: '2026',
    color: '#513754',
    mark: 'stripes',
    markColor: '#cae4d0',
    spine: { height: 100, left: 3.36, right: 1.07 },
    hero: video('pmrVVXBKjVwuqmxJx9S36N57A.mp4', 1.778, 'Ubu Roi book cover rotating in space'),
    card: cards.ubu,
    meta: [
      { label: 'Project type:', values: ['Editorial Design'] },
      { label: 'Year:', values: ['2026'] },
      { label: 'Context:', values: ['University project'] },
    ],
    overview:
      'A university editorial project reinterpreting Alfred Jarry&rsquo;s <em>Ubu Roi</em> (1896), an absurdist play about a grotesque king whose greed and incompetence collapse his own kingdom.',
    outcomes: [
      {
        label: 'Problem:',
        body: 'Most Polish editions of <em>Ubu Roi</em> wrap the play in conventional, academic design, flattening the very anarchy and grotesque humor that make the text what it is.',
      },
      {
        label: 'Solution:',
        body: 'I took an existing typeface and reworked it, cutting holes into the letterforms and arranging them as if falling apart across the pages &mdash; just like Ubu&rsquo;s kingdom.',
      },
      {
        label: 'Result:',
        body: 'The result is a book where the reader physically experiences the collapse: turning pages means watching the text and Ubu&rsquo;s rule &mdash; fall apart in real time.',
      },
    ],
    gallery: [
      {
        caption: 'First tries and iterations:',
        items: [img('GKnUirhcaQtzkSaxROH0FkhAhiw.png', 1.869, 'Typographic grid studies for the Ubu Roi typeface')],
      },
      {
        caption: 'Different sketches and other variants:',
        items: [img('BjsAOjLC5f3e9YKMBpst1WHBoI.png', 1.639, 'Alternative letterform sketches')],
      },
      {
        caption: 'Final Result:',
        items: [
          img('YR4es0CQo2MRPbh6QFIpfVnl4.png', 1.639, 'Final typeface specimen'),
          img('SVDtCvJFZ7zudcbjmd1bS6oBIps.png', 1.455, 'Cover artwork on a dark plate', { plate: '#222220' }),
          img('pV7luU9OgybtJ5xv6tot7YiiIVw.png', 1.534, 'Printed book, open spread'),
          img('xPjLZt19Ee5HVdtMiEEwu2twJs.png', 1.778, 'Typography breaking apart across a spread'),
          img('80cIysrfWEtclepRv0MeoWNjo.png', 1.523, 'Stack of printed copies'),
        ],
      },
    ],
    related: ['mtrw', 'lasowiak-cranberry-liqueur', 're-move'],
  },

  {
    slug: 'sheetsolved',
    title: 'SheetSolved branding + UI/UX',
    spineTitle: 'SheetSolved branding + UI/UX',
    cardTitle: 'SheetSolved visual identity',
    discipline: 'Visual Identity',
    year: '2026',
    color: '#228c22',
    mark: 'sheetsolved',
    spine: { height: 79, left: 0, right: 5.43 },
    hero: video('2vdkSvXsuOS9CVeB13a6i1x16Zs.mp4', 1.779, 'SheetSolved logo animation'),
    card: cards.sheetsolved,
    meta: [
      { label: 'Project type:', values: ['Branding + Web design'] },
      { label: 'Year:', values: ['2026'] },
      { label: 'Client:', values: ['Dmytro Shevaga'] },
    ],
    overview:
      'Branding and Framer-built website for SheetSolved, an Excel automation startup, working within corporate constraints, but with a fresh, stylish execution.',
    outcomes: [
      {
        label: 'Problem:',
        body: 'SheetSolved is a new Excel-automation startup for Polish SMEs. It had zero visual identity, no website, and no trust signals to approach corporate clients.',
      },
      {
        label: 'Solution:',
        body: 'A complete brand system built around Saans typeface and a signature green palette. The logo uses two interlocking modules with a central bar, an abstract &ldquo;S&rdquo; that came from a grid of 3 sheets. Clean, technical, and instantly associated with Excel.',
      },
      {
        label: 'Result:',
        body: '0 &rarr; 1. A launch-ready brand and live website. The founder now has a professional presence to pitch SMEs.',
      },
    ],
    cta: { label: 'Visit website', href: 'https://sheetsolved.eu/' },
    gallery: [
      {
        caption: 'First tries and iterations:',
        items: [img('5PRHvh7gtLXMkfH4wjvFzA6igw.png', 1.601, 'Early SheetSolved logo explorations')],
      },
      {
        caption: 'Different sketches:',
        items: [img('cWSLTjF3eK5r1FuHhDBBXho1U.png', 1.851, 'Sketch sheet of mark variations')],
      },
      {
        caption: 'Final Result:',
        items: [img('SIrALj72Z8iMXMoIwOGxuV2Evbc.png', 1.944, 'Final SheetSolved brand mark')],
      },
      {
        caption: 'Logo construction',
        items: [
          img('91zYcJUiXUHS2rjAY3PfKUU.png', 1.946, 'Geometric construction grid behind the mark'),
          img('XqhDP0GvXtsiTRHq49mk51kuWA.png', 1.605, 'Brand colour and type specimen'),
          img('ktl5UH5AFDMm4JWqXWHLbyPbvg.png', 2.25, 'Website landing page design'),
          img('rEyiALezyniYiBPEllpA5pC2g.png', 1.605, 'Interface components'),
          video('TmGqe7kWcaguIbMh4G0jwTbE.mp4', 1.785, 'Website scroll walkthrough'),
          img('8uf2xSdhdT06cPocARGOx0MMEjc.png', 2.058, 'Responsive layouts'),
          img('F9RTTJ0SqTLA3xxJ19hGqjPKY0.png', 1.332, 'Brand collateral'),
          video('X3c0HWS2gZqpGPBVnKT88Mu0o.mp4', 2.0, 'Logo build animation'),
        ],
      },
    ],
    related: ['mtrw', 'honored', 're-move'],
  },

  {
    slug: 'mtrw',
    title: 'Warsaw museum of dance and movement visual identity',
    spineTitle: 'Warsaw museum of dance and movement branding',
    cardTitle: 'Warsaw museum of dance and movement',
    discipline: 'Visual Identity',
    year: '2025',
    color: '#e01f27',
    mark: 'mtrw',
    spine: { height: 86, left: 5.5, right: 1.07 },
    hero: video('Vk3ywMXsR0VyfH7BrTW8C5PW8A.mp4', 2.229, 'Museum identity animation'),
    card: cards.mtrw,
    meta: [
      { label: 'Project type:', values: ['Visual identity'] },
      { label: 'Year:', values: ['2025'] },
      { label: 'Context:', values: ['University project'] },
    ],
    overview:
      'Visual identity for an imaginary museum. The core concept: <em>circle as the essence of dance</em>. Not a pose, not a silhouette, but the circular form that defines movement through centuries.',
    outcomes: [
      {
        label: 'Problem:',
        body: 'Dance-related visual identities rely on literal, clich&eacute;d imagery &mdash; dancers mid-pose, ribbons, silhouettes. For an imaginary Warsaw dance museum, that approach would blend in with every other identity in the category.',
      },
      {
        label: 'Solution:',
        body: 'The solution came from research showing that dance, across centuries, has always been built around the circle. The logo&rsquo;s typography grew from that shape, and the color was chosen to reflect the energy and power of the art form.',
      },
      {
        label: 'Result:',
        body: 'A flexible identity that reads instantly at any scale &mdash; from a building sign to an Instagram story &mdash; built on one repeating motif instead of a literal dance image.',
      },
    ],
    gallery: [
      {
        caption: 'Idea of logo:',
        items: [img('RDmYEmjHL7f4A7eRW80puUiDY48.png', 1.797, 'Circle construction behind the museum logo')],
      },
      {
        caption: 'Different sketches and other variants:',
        items: [img('yf4ayLrFViTJeHmUbc9Sp3XzAtw.png', 1.727, 'Logotype variants')],
      },
      {
        caption: 'Final Result:',
        items: [
          img('s1aYIj6heOAw1Qof49OfrefvFAo.png', 1.682, 'Final museum logotype'),
          img('6WiEs27G55SKeLJncsqSQ6dpBYA.png', 2.229, 'Identity applied to signage'),
          img('Hx3UkmAr0EmvPLOHIHHiZGCIdA.png', 2.229, 'Poster series'),
          img('ymqrXopgmBV7D4h6jiwhgXWC1Y.png', 1.468, 'Printed programme'),
          img('Jx9iqoQQHyCAxwRE6u2QjpSV0.png', 1.936, 'Identity on tickets and passes'),
          img('ldqNRSQyseJ8jNAfOnz2AuYW8U.png', 2.229, 'Wayfinding system'),
          img('x7lOC3nEvfFNHRctSHdeRNFRVE4.png', 3.084, 'Wide banner application'),
          img('cUvL4YuhIciQHNXKYHUySSau5k.png', 3.084, 'Facade signage'),
          img('flYTSczCRfPx0pRLW9nN58diVk.png', 2.317, 'Social media templates'),
          img('UYiub1H0gvNy11B59RCWyQj3X4.png', 3.029, 'Full identity overview'),
        ],
      },
    ],
    related: ['sheetsolved', 're-move', 'ubu'],
  },

  {
    slug: 'aktan',
    title: 'Bruno Jasieński Akta № Illustrated book',
    spineTitle: 'Bruno Jasieński Akta № Illustrated book',
    cardTitle: 'Bruno Jasieński Akta №',
    discipline: 'Editorial',
    year: '2026',
    color: '#242424',
    bandColor: '#000000',
    spine: { height: 70, left: 3.57, right: 3.57 },
    hero: video('K4lqmGfqKdZDyEHxwgMJ5YUydA.mp4', 1.333, 'Akta No. book, animated preview'),
    card: cards.aktan,
    meta: [
      { label: 'Project type:', values: ['Editorial design'] },
      { label: 'Year:', values: ['2026'] },
      { label: 'Context:', values: ['University project'] },
    ],
    overview:
      'An illustrated poetry book of nine poems by Bruno Jasieński &mdash; a Polish-language futurist poet and committed communist who returned to the USSR full of conviction, only to disappear into the Great Purge: first as a rumor of exile to Siberia, then, years later, as a confirmed execution.',
    outcomes: [
      {
        label: 'Problem:',
        body: 'The state didn&rsquo;t just kill Jasieński &mdash; it tried to erase him from the record entirely, leaving behind rumor and silence instead of a documented fact. A conventionally illustrated poetry collection would smooth over that erasure rather than confront it.',
      },
      {
        label: 'Solution:',
        body: 'The illustrations are framed as Jasieński&rsquo;s own &mdash; as if these were sketches he made in secret while imprisoned in Siberia, using whatever materials a prisoner could find. Raw charcoal marks stand in for a smuggled visual diary: a flock of crows over a bruised sky, a figure glimpsed through a watchtower archway, bare trees doubling as camp fencing. Some spreads are even printed inverted, as if the record itself had been tampered with after the fact.',
      },
      {
        label: 'Result:',
        body: 'No drawing could recreate what Jasieński actually went through in Siberia &mdash; the book doesn&rsquo;t try to. Instead, it lets you feel something closer to the act itself: sketching in secret, in haste, not knowing if it would survive. You&rsquo;re not asked to feel his suffering &mdash; just to sit for a moment inside the fear of trying to leave a trace before it&rsquo;s erased.',
      },
    ],
    gallery: [
      {
        caption: 'Mood Board',
        items: [
          img('tcbeOzybtpGmP1sObudWElrsTY.png', 1.807, 'Archive photographs of Bruno Jasienski and Siberian camps'),
        ],
      },
      {
        caption: 'Sketches',
        items: [img('qOqTMNLHv36eeZNSKVsRIpdWKwo.png', 3.109, 'Charcoal sketch studies')],
      },
      {
        caption: 'Final Result:',
        items: [
          img('VocXQQCXA7epkcS8eluPo9Gt8.png', 1.303, 'Cover of the Akta No. book'),
          img('NOavjdW8oiXLl4FIMb1Ne9xF0.png', 1.303, 'Charcoal illustration spread'),
          img('tsAsaIZClXpfnvWg10zYXNlBUR4.jpg', 1.303, 'Printed book photographed on a table'),
          video('WFDgKrhEQYxr1vB3i6jE4rvANPU.mp4', 1.333, 'Pages turning'),
          img('Q7ZqwQYoYCnGTKR9x3wu7GAtRPY.png', 1.779, 'Inverted spread'),
          img('JP5cZqOg6vS1gavC5q2QsMv4.png', 1.746, 'Poem typesetting'),
          img('ZlsLyQin6SuGC3WclY5ikZ8mFM.png', 1.746, 'Closing spread'),
        ],
      },
    ],
    related: ['ubu', 're-move', 'honored'],
  },

  {
    slug: 're-move',
    title: 'Re:Move event visual key',
    spineTitle: 'Re:Move event visual key',
    cardTitle: 'Re:Move event',
    discipline: 'Key Visual',
    year: '2026',
    color: '#e11e27',
    spine: { height: 58, left: 1.71, right: 1.07 },
    hero: video('ycn9r5zuA3n62aFvDjfEagGtsuE.mp4', 1.778, 'Re:Move key visual animation'),
    card: cards['re-move'],
    meta: [
      { label: 'Project type:', values: ['Visual key'] },
      { label: 'Year:', values: ['2026'] },
      { label: 'Context:', values: ['University project'] },
    ],
    overview:
      'A dynamic visual identity for RE:MOVE, dance workshop series at the imaginary Museum of Dance and Movement in Warsaw, exploring human motion, spatial rhythm, and expressive illustration.',
    outcomes: [
      {
        label: 'Problem:',
        body: 'Traditional museum communication feels too static to engage young, modern audiences.',
      },
      {
        label: 'Solution:',
        body: 'An expressive visual key using overlapping, highly saturated figures that capture the fluid energy of dance, paired with bold typography for maximum outdoor visibility.',
      },
      {
        label: 'Result:',
        body: 'A cohesive poster-to-merchandise system from key visuals to apparel and tote bags designed to stay legible and eye-catching in outdoor, high-traffic settings.',
      },
    ],
    gallery: [
      {
        caption: 'First tries:',
        items: [img('buPqqaA8r2njOudcM2we7VdjM.png', 1.091, 'First poster explorations')],
      },
      {
        caption: 'Sketches',
        items: [img('KY1OerOko796069Mdpf9Ise2cPI.jpg', 1.567, 'Hand sketches of dancing figures')],
      },
      {
        caption: 'Final Result:',
        items: [
          img('KgMwddGXEKh6onOlRYFXWNd7Hw.png', 2.089, 'Final poster set'),
          img('2FmdGiRwSnQpAB3PCztTmZKxs.png', 1.876, 'Key visual in detail'),
          img('C5EObPWGWx2hp4ZgIkt3BSh0RkY.png', 2.01, 'Poster series in colour'),
        ],
      },
      {
        caption: 'Merch:',
        items: [
          img('7mGy2yjOIp1dHt9FvviBZPBBxME.png', 1.489, 'Printed apparel'),
          img('OOvfXaSg9AexrDBadza0DecFtso.png', 2.01, 'Tote bags and merchandise'),
        ],
      },
      {
        caption: 'Visualisation:',
        items: [
          img('gvRM3W0eT0MNC12yvyr3Qi2sDIE.png', 1.669, 'Posters mounted in the city'),
          img('hNgU64BfOOfSIuALlbuTXa9oWk.jpg', 1.429, 'Outdoor billboard mockup'),
        ],
      },
    ],
    related: ['mtrw', 'lasowiak-cranberry-liqueur', 'ubu'],
  },

  {
    slug: 'lasowiak-cranberry-liqueur',
    title: 'Lasowiak cranberry liqueur',
    spineTitle: 'Lasowiak cranberry liqueur label + packaging',
    cardTitle: 'Lasowiak cranberry liqueur',
    discipline: 'Label + Packaging',
    year: '2026',
    color: '#cc1d1f',
    mark: 'lasowiak',
    spine: { height: 78, left: 0, right: 3.64 },
    hero: img('2LVl4gPAeX2Z4jsNezslguRIEg.jpg', 1.503, 'Lasowiak bottle photographed on a folk textile', {
      mobileSrc: '/media/8Y6uS4lAom9ZMoK921mTvnPTM.png',
      mobileRatio: 0.75,
    }),
    card: cards.lasowiak,
    meta: [
      { label: 'Project type:', values: ['Label + Packaging'] },
      { label: 'Year:', values: ['2026'] },
      { label: 'Context:', values: ['University project'] },
    ],
    overview:
      'Packaging concept for cranberry liqueur &mdash; the traditional drink of the Lasowiacy ethnic group from the Sandomierz Forest region in Poland reinterpreting folk material culture for a contemporary product language.',
    outcomes: [
      {
        label: 'Problem:',
        body: 'There are no contemporary packaging solutions for traditional regional drinks like this one. The category is stuck in dated folk visual clich&eacute;s that fail to interest a modern buyer.',
      },
      {
        label: 'Solution:',
        body: 'The concept builds a single graphic system from the region&rsquo;s embroidery motif and the apothecary cross &mdash; a nod to the folk belief in the liqueur&rsquo;s medicinal power. The cross-and-flower pattern repeats across the fabric cap wrap, the back label border, and the front label framing, carrying one visual language across every material.',
      },
      {
        label: 'Result:',
        body: 'The project was submitted to Art of Packaging in Poznań, Poland&rsquo;s national packaging design competition, in the Debiuty (student) category judged by an independent jury of packaging industry professionals.',
      },
    ],
    gallery: [
      {
        caption: 'Mood Board',
        items: [img('HtY5PMVP9JDu9L2XiBugugcc.png', 1.778, 'Folk embroidery and apothecary references')],
      },
      {
        caption: 'Different variants:',
        items: [img('NGrkKAiV2ppoSxPYQF68EaCIDU.png', 1.958, 'Label layout variants')],
      },
      {
        caption: 'Final Result:',
        items: [
          img('50HWscz7ysiTMfzWxdgXScNmehM.png', 1.617, 'Final label artwork'),
          img('oydoUodnHgP6O23vOYSBKadtRw.jpg', 1.579, 'Bottle with fabric cap wrap'),
          img('2LVl4gPAeX2Z4jsNezslguRIEg.jpg', 1.503, 'Bottle on folk textile'),
          img('NCH4xGBKo0kzFSzSrEu1K2VFUr0.jpg', 1.5, 'Front and back labels'),
          img('OpaVQoo5wEt2g9JKaBhDVzRiT4w.jpg', 1.5, 'Packaging detail'),
          img('7jMMFO7GzMZIHiGaLslCBgT380A.png', 1.5, 'Full packaging system'),
        ],
      },
    ],
    related: ['ubu', 'honored', 're-move'],
  },

  {
    slug: 'honored',
    title: 'Honored agency web design',
    spineTitle: 'Honored agency web design',
    cardTitle: 'Honored agency',
    discipline: 'Framer-based web design',
    year: '2026',
    color: '#242424',
    spine: { height: 70, left: 1.43, right: 1.5 },
    hero: img('PKFwInnTMZlUu00bKRvSP5EI.png', 1.503, 'Honored agency website home page'),
    card: cards.honored,
    meta: [
      { label: 'Project type:', values: ['Framer-based web development', 'Web design'] },
      { label: 'Year:', values: ['2026'] },
      { label: 'Context:', values: ['Concept: Honored', 'Design & development: Me'] },
    ],
    overview:
      'A Framer rebuild of Honored&rsquo;s website &mdash; an agency creating director&rsquo;s treatments &mdash; replacing their unresponsive ReadyMag site with a version built to match their existing brand concept, executed end-to-end in design and development.',
    outcomes: [
      {
        label: 'Problem:',
        body: 'The studio&rsquo;s existing site, built on ReadyMag, wasn&rsquo;t responsive and didn&rsquo;t reflect their artistic vision.',
      },
      {
        label: 'Solution:',
        body: 'I rebuilt the site in Framer for greater flexibility, redesigned key sections to match the studio&rsquo;s concept, and added sound design to reinforce the artistic feel.',
      },
      {
        label: 'Result:',
        body: 'A fully responsive site that finally reflects the studio&rsquo;s artistic identity.',
      },
    ],
    cta: { label: 'Visit website', href: 'https://honored.agency/' },
    gallery: [
      {
        items: [
          img('slskxOsHm1kSkJW9zUB6ERAi7S4.png', 1.682, 'Honored home page'),
          img('ur1LHJI7R8dyh9D3GCFvbvftsE.png', 1.682, 'Project index'),
          img('fAZqm1FkO2tsY7kQECCjbShIA.png', 1.682, 'Case study layout'),
          img('DPHFK3yRhJ3lviAMamoW2wRdc.png', 1.682, 'Full-bleed film still'),
          img('f1ZfC5XWJF1FZivfGDt4FDenkA.png', 1.682, 'Treatment page'),
          img('VyP6HfBvATZsjdF4ylJG4mIWZss.png', 1.682, 'About page'),
          img('AaWE6VQoImtf4tZhSFCel8IWJM.png', 1.682, 'Contact page'),
          img('HyPjxxxAbMlBArmXQthfOAtOQzQ.png', 1.682, 'Mobile layouts'),
          video('lkFsNXHx6jHzhKt9Lydx3fOoOU.mp4', 1.778, 'Scroll walkthrough of the Honored site'),
        ],
      },
    ],
    related: ['mtrw', 'sheetsolved', 'ubu'],
  },
]

export const projectsBySlug = new Map(projects.map((p) => [p.slug, p]))

export function getProject(slug: string): Project | undefined {
  return projectsBySlug.get(slug)
}

export function getRelated(project: Project): Project[] {
  return project.related
    .map((slug) => projectsBySlug.get(slug))
    .filter((p): p is Project => Boolean(p))
}
