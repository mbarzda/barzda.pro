import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://barzda.pro',
  integrations: [sitemap({ lastmod: new Date() })],
});
