import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jerrison-portfolio.vercel.app'
  const lastModified = new Date()

  const routes = [
    { url: '/', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/experience', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/skills', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/projects', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/dashboard', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/resume', priority: 0.9, changeFrequency: 'monthly' as const },
  ]

  return routes.map(route => ({
    url: `${baseUrl}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
