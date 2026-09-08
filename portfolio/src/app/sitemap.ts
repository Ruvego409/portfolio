import type { MetadataRoute } from 'next'

import { projects } from '@/data/projects'
import { site } from '@/data/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about-me', '/contact-us']

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    })),
    ...projects.map((project) => ({
      url: `${site.url}/${project.slug}`,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ]
}
