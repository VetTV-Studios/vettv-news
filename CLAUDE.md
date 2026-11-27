# VetTV News: agent guide

Astro static site for https://news.vettvstudios.com. Vercel project `vettv-news` deploys `main` automatically on every push. A GitHub Action (`daily-rebuild.yml`) also rebuilds once a day so time-based homepage slots expire. Leave it alone.

## Build (must pass before any commit or PR)

```bash
npm ci
npm run build   # check-placeholders -> make-thumbs -> astro build (validates frontmatter) -> pagefind
```

Node >= 22.12. `npm run dev` serves http://localhost:4321/. A frontmatter mistake fails `astro build`, so fix the post and rerun the build. Don't skip the check.

## Editorial rules (Vet, Nov 25, 2026)

- Official and primary sources first. Verify every name, date, number and quote against a primary or official source, and link them all.
- Never state a rumor as fact. Label rumors, leaks and unverified reports as such, and label any opinion.
- Political stories must be fair, sourced and non-defamatory: what happened, what each side has said, what happens next.
- If a key fact can't be verified, hold the story. Don't publish around the gap.
- Correct mistakes quickly with an update (see Updates below).
- Spending money (paid images, paid APIs, subscriptions) needs Vet's OK first.
- Never force-push.

## Posts

One story per file: `src/content/posts/<slug>.md`. The slug is the kebab-case headline, trimmed to the key words, for example `steamos-3-9-7-beta-backlight-white-rectangles`. Before writing, search `src/content/posts` for the source URL and the topic so the same story isn't published twice. For a follow-up, update the existing post.

Frontmatter (schema: `src/content.config.ts`):

```yaml
---
title: "Headline in Title Case"
description: "2-3 sentence lede: what happened, who said it, and when (with a CT time if the source gives one)."
summary: "Same text as description."
pubDate: 2026-11-27
publishedAt: 2026-11-27T08:40:00-06:00   # CT: -06:00 Nov-Mar (CST), -05:00 Mar-Nov (CDT)
author: "Vet, VetTV Studios"
category: gaming        # news | national | handhelds | gaming | tech | windows | linux-steamos | macos | open-nt | deals | projects
type: news              # news | opinion | guide | review | deal
tags: ["steamos", "steam-deck"]   # up to 3
offTopic: true          # existing posts all set this; keep it
trending: false         # homepage shows up to 3 trending posts; only Vet turns this on
draft: false
cover: "covers/<slug>.png"
sources:
  - title: "Valve: SteamOS 3.9.7 Beta, Nov. 25, 2026, 11:59 a.m. CT"
    url: "https://store.steampowered.com/news/..."
  - title: "Cover photo: <what>, by <author>, <license>, <where>"
    url: "https://commons.wikimedia.org/wiki/File:..."
---
```

Optional fields: `featured`, `featuredUntil` (homepage featured slot; defaults to 48 hours for news), `updatedNotice`, `supersededBy`, `platforms`, `seoTitle`, `order` (tie-break for posts with the same date).

## House style

- Open with what happened, who said it, and when. Give the date and the CT time when the source shows one.
- Link the primary source first: release notes, the project's GitHub release, the court filing, the agency's press release, or the person's own post. Put secondary coverage after it.
- Quote release notes and officials exactly, keep quotes short, and attribute every claim.
- Say plainly when something is a beta, release candidate, rumor, leak or unverified report.
- Internal links are root-relative: `/posts/<slug>/`.
- Use `## ` sections when one post covers several items.
- End every post with an italic `*Sources:*` line that links every source, then an italic `*Cover photo:*` credit line.

## Covers

Use the VetTV News cover tool in the private repo `VetTV-Studios/vettv-grokbot-export` (folder `covers/`). Scheduled tasks clone it alongside this repo.

1. Find a source image you can credit: an official press or product image, the game's Steam store art, or a Creative Commons image from Wikimedia Commons. Don't pay for images.
2. Download it, then run:

```bash
python3 -m pip install --quiet Pillow || python3 -m pip install --quiet --break-system-packages Pillow
python3 <path-to>/vettv-grokbot-export/covers/photo_cover.py \
  --slug <slug> --image /tmp/<source-image> \
  --headline "<short headline>" --tag "<section name, e.g. Gaming>" \
  --credit "Image: <source>" [--badge LEAK | --badge UNVERIFIED] [--focus 0.5,0.4] \
  --out-dir /tmp/covers
cp /tmp/covers/<slug>-cover-pickax-1920x1080.png public/covers/<slug>.png
```

3. Commit only `public/covers/<slug>.png`. The tool's X-size outputs stay out of the repo.
4. Credit the image in `sources` and in the closing `*Cover photo:*` line.
5. Use `--badge LEAK` for leaks and `--badge UNVERIFIED` for unconfirmed reports.
6. If no usable image exists, leave `cover` out and say so in the pull request.

Thumbnails are generated at build time, so don't add them. Brand assets in this repo: `public/brand/vettv-studios-logo-transparent.svg`, `public/art/watermark_150x150.png`.

## Updates

Edit the existing post. Add `updatedNotice: "Updated Nov. 27, 2026, 2:10 p.m. CT: <what changed>"` and list any new sources. If a new post replaces an old one, set `supersededBy: "/posts/<new-slug>/"` on the old post.

## Commits, pull requests and X posts

- New posts: `Publish: <headline>`. For a batch: `Publish: Nov 27 brief - <item>, <item>, <item>`.
- Changes: `Update: <what changed>`.
- Open a pull request against `main`. Don't push to `main` directly. Vet merges, and Vercel deploys.
- In the PR body, include a ready-to-paste X post for each story: 256 characters or fewer including hashtags, ending with `https://news.vettvstudios.com/posts/<slug>/`.

## Never

- Add placeholder tracker rows in `src/data/*.json` or pages containing `PUBLISH_BLOCKER:DRAFT`. The production build blocks them.
- Commit secrets. `.env*` is gitignored; keep it that way.
- Change site code, layouts or config as part of a news run. Content and covers only.
