import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://duijvelshoff.com/',
  publicDir: './static',
  integrations: [],
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
