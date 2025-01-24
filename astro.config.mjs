// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: true,
      fallbackType: 'rewrite',
    },
    fallback: {
      en: "fr"
    }
  }
});