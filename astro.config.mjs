import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// Hosted on Vercel at https://news.vettvstudios.com (old GitHub Pages URL redirects here).
export default defineConfig({
  site: 'https://news.vettvstudios.com',
  base: '/',
  trailingSlash: 'always',
  // Renamed/merged section slugs keep working (Oct 2026 redesign). /guides/ and /reviews/ are real type pages.
  redirects: {
    '/retro-emulation-cloud': '/gaming/',
    '/steamos-news': '/linux-steamos/',
    '/decky-plugins': '/tags/decky-loader/',
    '/reactos-open-nt': '/open-nt/',
    '/cloud-gaming': '/gaming/',
    '/retro-emulation': '/gaming/',
    '/steam-deals': '/deals/',
    '/project-updates': '/projects/',
  },
  integrations: [sitemap({ filter: (page) => !/\/(retro-emulation-cloud|steamos-news|decky-plugins|reactos-open-nt|cloud-gaming|retro-emulation|steam-deals|project-updates)\/$/.test(page) })],
});
