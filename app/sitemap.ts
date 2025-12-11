import { MetadataRoute } from 'next'
import { projects } from './lib/data'

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function sitemap(): MetadataRoute.Sitemap {
  const site = 'https://portfolio-gustavo-omega.vercel.app'
  const projectUrls = projects.map((p) => ({
    url: `${site}/projects/${slugify(p.title)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: site,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ...projectUrls,
  ]
}
