import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ChaBot',
    short_name: 'ChatBot',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: 'https://ban12.com/api/og?w=192&h=192&size-fit=cover',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'https://ban12.com/api/og?w=512&h=512&size-fit=cover',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
