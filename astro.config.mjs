// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Required for correct canonical URLs, sitemap and Open Graph tags
  site: 'https://mohsenakbari79.github.io',
  base: '/',
  // Fully static output, perfect for GitHub Pages
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
