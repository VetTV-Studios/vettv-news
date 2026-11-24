---
title: "Bazzite Stable 45.20261123.1 Moves to Kernel 7.3.5 and Fixes Steam on GNOME"
description: "ublue-os published Bazzite stable 45.20261123.1 on November 23 at 5:05 p.m. CT, a quick respin of 45.20261123. It moves the kernel from 7.3.4-ogc10.1 to 7.3.5-ogc2.1 and adds a GNOME workaround so Steam starts on the desktop. NVIDIA Open 620.73.04 and Mesa 26.3.1 are unchanged. The stable tag already points to the new build."
summary: "ublue-os published Bazzite stable 45.20261123.1 on November 23 at 5:05 p.m. CT, a quick respin of 45.20261123. It moves the kernel from 7.3.4-ogc10.1 to 7.3.5-ogc2.1 and adds a GNOME workaround so Steam starts on the desktop. NVIDIA Open 620.73.04 and Mesa 26.3.1 are unchanged. The stable tag already points to the new build."
pubDate: 2026-11-24
publishedAt: 2026-11-24T09:03:09-06:00
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["bazzite", "linux", "steamos"]
offTopic: true
trending: false
draft: false
cover: "covers/bazzite-stable-45-20261123-1-kernel-7-3-5.png"
sources:
  - title: "ublue-os/bazzite: 45.20261123.1 Stable, Nov. 23, 2026, 5:05 p.m. CT"
    url: "https://github.com/ublue-os/bazzite/releases/tag/45.20261123.1"
  - title: "ublue-os/bazzite: 45.20261123 Stable"
    url: "https://github.com/ublue-os/bazzite/releases/tag/45.20261123"
  - title: "ublue-os/bazzite container images on ghcr.io, stable tag checked Nov. 24, 2026"
    url: "https://github.com/ublue-os/bazzite/pkgs/container/bazzite"
  - title: "VetTV News: Bazzite Stable 45.20261117"
    url: "https://news.vettvstudios.com/posts/bazzite-stable-45-20261117/"
source: "Article Desk: bazzite-stable-45-20261123-1-kernel-7-3-5.md"
---
ublue-os published [Bazzite stable 45.20261123.1](https://github.com/ublue-os/bazzite/releases/tag/45.20261123.1) on **November 23 at 5:05 p.m. CT** (23:05 UTC). It is a short follow-up to [stable 45.20261123](https://github.com/ublue-os/bazzite/releases/tag/45.20261123), which had just moved NVIDIA Open to 620.73.04 and Mesa to 26.3.1.

**Is it actually live?** Yes. When we checked GitHub's [container registry](https://github.com/ublue-os/bazzite/pkgs/container/bazzite) on the morning of November 24, the `stable`, `latest`, and `45.20261123.1` tags on the main bazzite image pointed to the same digest, `sha256:e60b3eb0ce4e7697816a9e6aaf93b075aae36d46bca4de12f78d1749065954c7`. Systems that follow stable should get it on their next update.

## What changed

Compared with the previous stable image, 45.20261123, the changelog's major package move is:

- **Kernel:** 7.3.4-ogc10.1 → **7.3.5-ogc2.1**

Unchanged: NVIDIA Open **620.73.04**, NVIDIA LTS **580.196.07**, the NVIDIA LTS kernel **6.18.64-ogc1.1**, Mesa **26.3.1**, KDE **6.8.3**, GNOME **51.1**, and Gamescope **3.17.0**. Those NVIDIA and Mesa versions first reached stable in 45.20261123; the previous stable before that, which we [covered here](/posts/bazzite-stable-45-20261117/), still had NVIDIA Open 620.70.06 and Mesa 26.2.7.

The listed commits are:

- Kernel bumps to 7.3.5-ogc1 and then **7.3.5-ogc2**
- "fix(gnome): Add a delay to starting steam on the desktop to workaround issue that causes steam to never start"
- A follow-up, "Use sleep, GNOME appears to ignore autostart-delay now."

nvtop moves from 3.3.2 to **3.4.0**, and bpfrag from 0.18.2 to **0.18.3**. There is no NVIDIA-specific change in this respin.

To move to this exact image, the release notes give `bazzite-rollback-helper rebase 45.20261123.1`. To follow the stable branch, use `bazzite-rollback-helper rebase stable`.

**Our take (opinion):** if you are already on 45.20261123, this is a small kernel-and-GNOME follow-up, not another driver jump. GNOME users who saw Steam fail to start on the desktop are the ones who should update first.

*Sources:* [ublue-os/bazzite: 45.20261123.1 Stable, Nov. 23, 2026, 5:05 p.m. CT](https://github.com/ublue-os/bazzite/releases/tag/45.20261123.1), [ublue-os/bazzite: 45.20261123 Stable](https://github.com/ublue-os/bazzite/releases/tag/45.20261123), [ublue-os/bazzite container images on ghcr.io, stable tag checked Nov. 24, 2026](https://github.com/ublue-os/bazzite/pkgs/container/bazzite), [VetTV News: Bazzite Stable 45.20261117](/posts/bazzite-stable-45-20261117/)

*Cover image: Bazzite, https://bazzite.gg/*
