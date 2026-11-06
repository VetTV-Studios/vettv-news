---
title: "Vercel Schedules Hits Public Beta: Static and Runtime Cron Without Redeploying"
description: "Agents and apps can create one-time and recurring jobs at runtime, including on Preview. Schedules succeeds Cron Jobs; existing cron keeps working"
summary: "Agents and apps can create one-time and recurring jobs at runtime, including on Preview. Schedules succeeds Cron Jobs; existing cron keeps working"
pubDate: 2026-11-05
publishedAt: 2026-11-05T21:11:33-06:00
author: "Vet, VetTV Studios"
category: tech
type: news
tags: ["vercel", "schedules", "developer-tools"]
offTopic: true
trending: false
draft: false
cover: "covers/vercel-schedules-public-beta.png"
sources:
  - title: "Vercel on X"
    url: "https://x.com/vercel/status/2118438184594149784"
  - title: "Vercel Blog: Introducing Vercel Schedules"
    url: "https://vercel.com/blog/introducing-vercel-schedules"
  - title: "Vercel Changelog: Schedules public beta"
    url: "https://vercel.com/changelog/vercel-schedules-is-now-in-public-beta"
  - title: "Vercel Docs: Schedules"
    url: "https://vercel.com/docs/schedules"
source: "Article Desk: vercel-schedules-public-beta.md"
---
[Vercel](https://x.com/vercel/status/2118438184594149784) says **Vercel Schedules** is now in **public beta**. The company's [blog post](https://vercel.com/blog/introducing-vercel-schedules) (dated November 4) and [changelog](https://vercel.com/changelog/vercel-schedules-is-now-in-public-beta) (November 5) describe a successor to Cron Jobs that can create, change, or cancel one-time and recurring work without redeploying.

## What it does

Per the changelog, Schedules runs tasks on a recurring cadence or at a single point in time in **production, preview, or custom environments**. You can enable, disable, or run any schedule on demand without redeploying.

- **Static schedules** live in `vercel.json` (or Build Output API config) and sync on deploy. They can target a private Vercel Function, an HTTP path, or a Vercel Queue topic.
- **Dynamic schedules** are created at runtime via the JS SDK, CLI, or API and target a Queue topic. They support one-time and recurring work.
- Adding a `schedule/v1beta` trigger makes the function **private**—no public URL; only Vercel's schedule infrastructure can invoke it.

The blog stresses agent use cases: an agent can schedule follow-up work while the app is running, without a separate database and polling job.

## Cron Jobs migration

The changelog calls Schedules "**the successor to Cron Jobs**." Existing Cron Jobs continue to work; Vercel points to a migration guide. Schedules also powers dynamic schedules in **Eve** and experimental scheduled tasks in **Nitro** projects.

## Pricing (from the changelog)

- **Pro and Enterprise:** starting at **$5 per 1M runs** and **$10 per 1M creations**
- **Hobby:** **500** schedule creations and **5,000** runs per month

The blog itself does not repeat those numbers; they come from the changelog entry.

## Dates

Vercel's X post went out November 5 (about 2:19 PM CST). The blog is dated November 4; the changelog November 5. Treat **November 5** as the public-beta announcement day on X and in the changelog.

Docs: [vercel.com/docs/schedules](https://vercel.com/docs/schedules).

*Opinion:* runtime schedules on Preview are the real unlock for agent workflows—static `vercel.json` cron was never going to keep up with users who decide *when* after deploy.
