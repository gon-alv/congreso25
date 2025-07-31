// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  vite:{
      plugins: [tailwindcss()],
  },

  redirects: {
      '/hoteles/1': '/hoteles'
  },

  adapter: netlify()
});