import type { MetadataRoute } from 'next';
import { SITE_DESCRIPTION, SITE_TITLE } from '../data/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: SITE_TITLE,
    short_name: 'Imran S.',
    description: SITE_DESCRIPTION,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    lang: 'en',
    categories: ['portfolio', 'technology', 'cloud'],
    background_color: '#fffdf8',
    theme_color: '#e8453c',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
