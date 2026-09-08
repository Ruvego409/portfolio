/** Media is described declaratively so the renderer never guesses at layout. */
export type MediaItem =
  | {
      kind: 'image'
      src: string
      alt: string
      /** width / height — reserves the box before the file arrives. */
      ratio: number
      /** Optional portrait crop swapped in below 700px. */
      mobileSrc?: string
      mobileRatio?: number
      /** Renders inside a coloured plate rather than edge to edge. */
      plate?: string
      /** Narrower than the content column, centred. */
      inset?: boolean
    }
  | {
      kind: 'video'
      src: string
      alt: string
      ratio: number
    }

/** A captioned run of media inside a case study. */
export type GalleryBlock = {
  caption?: string
  items: MediaItem[]
}

/** Problem / Solution / Result, rendered in the sticky rail. */
export type Outcome = {
  label: string
  body: string
}

export type MetaField = {
  label: string
  values: string[]
}

/** Decoration painted onto the spine of a book on the shelf. */
export type SpineMark = 'stripes' | 'sheetsolved' | 'mtrw' | 'lasowiak'

export type Project = {
  slug: string
  /** Title on the case-study page and in the browser tab. */
  title: string
  /** Longer title used on the bookshelf spine. */
  spineTitle: string
  /** Short title used on "more projects" cards. */
  cardTitle: string
  /** Discipline shown under the card title. */
  discipline: string
  year: string

  /** Spine + hero band colour. */
  color: string
  /** Hero band colour, when it differs from the spine. */
  bandColor?: string
  mark?: SpineMark
  markColor?: string
  /** Spine geometry, measured from the original shelf at 1425px. */
  spine: { height: number; left: number; right: number }

  hero?: MediaItem
  card: MediaItem
  meta: MetaField[]
  /** May contain <em>; rendered as trusted authored HTML. */
  overview: string
  outcomes: Outcome[]
  cta?: { label: string; href: string }
  gallery: GalleryBlock[]
  related: string[]
}
