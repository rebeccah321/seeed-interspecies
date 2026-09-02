import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rebeccah321.github.io',
  base: '/seeed-interspecies',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
