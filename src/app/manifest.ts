import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Imran Setiadi | Cloud Engineer',
    short_name: 'Imran S.',
    description: 'Portfolio of Imran Setiadi, a Cloud Engineer focused on resilient cloud infrastructure.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fffdf8',
    theme_color: '#e8453c',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
