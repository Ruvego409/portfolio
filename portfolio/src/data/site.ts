export const site = {
  name: 'Danylo Vasiur',
  role: 'Graphic designer',
  title: 'Danylo Vasiur — Portfolio',
  description: 'Portfolio of graphic designer Danylo Vasiur',
  url: 'https://danylovasiur.com',
  email: 'vasurdana@gmail.com',
  location: 'Krakow, Poland',
  availability: 'Freelance Projects & Full-Time',
} as const

export const nav = [
  { label: 'about', href: '/about-me' },
  { label: 'contacts', href: '/contact-us' },
] as const

export const footerPages = [
  { label: 'home', href: '/' },
  { label: 'about', href: '/about-me' },
] as const

/** `label` is used in running copy, `short` in the lowercase footer list. */
export const socials = [
  { label: 'Instagram', short: 'instagram', href: 'https://www.instagram.com/koty_koty_myszi/' },
  { label: 'Behance', short: 'behance', href: 'https://www.behance.net/daniavasur' },
  {
    label: 'Linked In',
    short: 'linkedin',
    href: 'https://www.linkedin.com/in/danylo-vasiur-7a9604324/',
  },
] as const

export const experience = [
  {
    company: 'Honored agency',
    roles: ['Presentation design', 'no-code web development'],
    note: "Working mostly with film directors and developing pitch-decks, director's treatments and framer based web sites",
    period: '2026 - now',
  },
  {
    company: 'DoGood inc.',
    roles: ['UX/UI'],
    note: 'collaborated with project manager and team lead designing a web site for charity start up',
    period: '2024-2026',
  },
] as const
