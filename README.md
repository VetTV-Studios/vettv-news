# VetTV News

Gaming, tech and news from VetTV Studios. Astro static site.

- Live: https://news.vettvstudios.com (Vercel project `vettv-news`, auto-deploys on push to `main`)
- Repo: https://github.com/VetTV-Studios/vettv-news (renamed from vettv-handheld-news on Nov 2, 2026). GitHub Pages (https://vettv-studios.github.io/vettv-news/) redirects every page to the new domain via `scripts/pages-redirect.mjs`.

```
npm ci && npm run build   # output in dist/
npm run dev               # http://localhost:4321/
```

Internal links in posts should be root-relative, e.g. `/posts/<slug>/`.
