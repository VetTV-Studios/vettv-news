---
title: "X Says Its Rebuilt Web App Shows Profile Posts in 2.7 Seconds on Slow Connections"
description: "Signed-in users are moving country by country; logged-out x.com and search crawlers already use the rewrite, according to X engineering"
summary: "Signed-in users are moving country by country; logged-out x.com and search crawlers already use the rewrite, according to X engineering"
pubDate: 2026-11-05
publishedAt: 2026-11-05T19:17:48-06:00
author: "Vet, VetTV Studios"
category: tech
type: news
tags: ["x", "web", "social-media"]
offTopic: true
trending: false
draft: false
cover: "covers/x-web-app-rewrite-faster-country-by-country-rollout.png"
sources:
  - title: "X Engineering: Rebuilding the global town square from scratch"
    url: "https://blog.x.com/en/engineering/rebuilding-the-global-town-square-from-scratch"
  - title: "Yagiz Nizipli on X"
    url: "https://x.com/yagiznizipli/status/2118048136270672058"
  - title: "The Verge: X says its updated web app is way faster (Jay Peters)"
    url: "https://www.theverge.com/tech/1027113/x-says-its-updated-web-app-is-way-faster"
  - title: "The Verge on X"
    url: "https://x.com/verge/status/2118137792358502741"
  - title: "Jane Manchun Wong on X (Indonesia rollout)"
    url: "https://x.com/wongmjane/status/2118068529312501928"
  - title: "Jane Manchun Wong on X (snappy quote)"
    url: "https://x.com/wongmjane/status/2118069935922680054"
  - title: "Joho no Todai (secondary summary of engineering post)"
    url: "https://joho-todai.com/en/x-web-app-rebuild-23-seconds-to-2-seconds/"
  - title: "Eastern Herald (secondary)"
    url: "https://easternherald.com/2026/11/05/x-web-app-faster-posts-rollout/"
source: "Article Desk: x-web-app-rewrite-faster-country-by-country-rollout.md"
---
X is rolling out a rebuilt x.com web app that its engineers say loads much faster on slow connections, moving signed-in users over **one country at a time**.

[The Verge](https://www.theverge.com/tech/1027113/x-says-its-updated-web-app-is-way-faster) reported the news on November 5, quoting principal engineer **Yagiz Nizipli**. In a [November 4 post](https://x.com/yagiznizipli/status/2118048136270672058) linking X's engineering write-up, [Rebuilding the global town square from scratch](https://blog.x.com/en/engineering/rebuilding-the-global-town-square-from-scratch), Nizipli wrote: "On a slow connection, the old X web took more than 22 seconds to show the first post on a profile. The new X web does it in 2.7 seconds." The Verge's [X post](https://x.com/verge/status/2118137792358502741) summarized the country-by-country signed-in rollout and said the rewrite already powers the logged-out web experience.

## What X says changed

According to Nizipli and The Verge's summary of the engineering post, the new app "replaces the three servers we used to run for people, search crawlers, and link previews with one." Logged-out visits to x.com and pages crawled by search engines already use the new stack. Signed-in traffic is migrating gradually so X can switch groups back if something breaks.

Security researcher **Jane Manchun Wong** [wrote](https://x.com/wongmjane/status/2118068529312501928) that she got early access through a misconfiguration, contacted the team, and that "Today, X announced they're rolling out the new site, starting in Indonesia." In a [follow-up](https://x.com/wongmjane/status/2118069935922680054), she said the new X Web "feels snappy, loads fast and many parts are polished," with most features matched. **Unconfirmed independently:** VetTV has not re-verified the Indonesia-first claim beyond Wong's post and secondary write-ups of the engineering blog.

## Speed numbers are X's lab tests

Treat the speed claims as **company measurements**, not third-party benchmarks. Nizipli's public figure is **more than 22 seconds** on the old app versus **2.7 seconds** on the new one for the first post on a profile over a slow connection. Secondary summaries of the engineering post (Joho no Todai; Eastern Herald) report a more precise **23.9 → 2.7** second comparison under throttled conditions (about 1.6 Mbps down, 150 ms RTT, empty cache), and say the Home timeline improved less because it still renders in the browser—about **24.6 → 14.1** seconds in those slow tests (~1.7×). We could not re-read the full blog.x.com page in this session (Cloudflare challenge), so those finer numbers are labeled secondary pending a clean primary re-check.

## Caveats

- Gains are largest for profiles and individual posts in X's tests; Home improves less
- Real devices and networks will differ from a lab laptop run
- Most signed-in users may still be on the old app until their country is switched
- X has not published a completion date for the signed-in rollout

*Opinion:* cutting a 20-plus-second splash-screen wait on slow links matters more than another redesign. Until Home is as fast as profiles, many daily sessions will still feel only partly upgraded.
