# VetTV News

Gaming, tech and news from VetTV Studios. Astro static site.

- Live: https://news.vettvstudios.com (Vercel project `vettv-news`, auto-deploys on push to `main`)
- Old URL https://vettv-studios.github.io/vettv-handheld-news/ redirects to the new domain (GitHub Actions builds redirect pages via `scripts/pages-redirect.mjs`).
- The repo is still named `vettv-handheld-news`; the site name is VetTV News.

```
npm ci && npm run build   # output in dist/
npm run dev               # http://localhost:4321/
```

Internal links in posts should be root-relative, e.g. `/posts/<slug>/`.
