import { serve } from 'bun';
import index from './index.html';

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    '/*': index,
    '/api/images': {
      async GET() {
        const res = await fetch(`${process.env.API_BASE_URL}/photos`);
        if (res.ok) {
          const images = await res.json();
          return Response.json(images, { headers: { 'Cache-control': 'max-age=80000' } });
        }
        return Response.json({ message: 'Error while fetching images', status: res.status });
      },
    },
  },

  development: process.env.NODE_ENV !== 'production' && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
