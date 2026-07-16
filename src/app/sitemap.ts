import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bimacompany.com'

  const routes = [
    '',
    '/about',
    '/auto-insurance',
    '/crop-insurance',
    '/cyber-insurance',
    '/doctors-indemnity',
    '/dog-insurance',
    '/pet-insurance',
    '/travel-insurance',
    '/wedding-insurance',
    '/home-insurance',
    '/get-a-quote',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return [...routes]
}
