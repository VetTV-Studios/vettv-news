---
title: "Bazzite 45.20261115 Moves Kernel 7.3.4 and Mesa 26.2.7 to Stable"
description: "The November 15 stable release, compared with 45.20261112, also updates PowerStation to 0.10.2 and Bazaar to 0.10.0. NVIDIA Open stays at 620.70.06."
summary: "The November 15 stable release, compared with 45.20261112, also updates PowerStation to 0.10.2 and Bazaar to 0.10.0. NVIDIA Open stays at 620.70.06."
pubDate: 2026-11-16
publishedAt: 2026-11-16T18:01:18-06:00
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["bazzite", "linux", "steamos"]
offTopic: true
trending: false
draft: false
cover: "covers/bazzite-stable-45-20261115.png"
sources:
  - title: "ublue-os/bazzite: 45.20261115, Nov. 15, 2026"
    url: "https://github.com/ublue-os/bazzite/releases/tag/45.20261115"
source: "Article Desk: bazzite-stable-45-20261115.md"
---
ublue-os [released Bazzite 45.20261115](https://github.com/ublue-os/bazzite/releases/tag/45.20261115) on November 15 at 2:14 p.m. CT, labeled "Stable (F45.20261115)." The page says this is "an automatically generated changelog" and that "from previous stable version 45.20261112 there have been the following changes."

Under major packages, the kernel moves from 7.3.3-ogc1.1 to 7.3.4-ogc6.1, and the NVIDIA LTS kernel moves from 6.18.60-ogc1.1 to 6.18.60-ogc1.2. Mesa goes from 26.2.6-2 to 26.2.7-1. PowerStation goes from 0.10.0-1 to 0.10.2-1, and Bazaar goes from 0.9.4-5 to 0.10.0-6.

NVIDIA Open is listed at 620.70.06-1, and NVIDIA LTS at 580.196.07-1, with no version arrows next to either driver. The release does not describe a new NVIDIA driver.

## Other changes in the changelog

The commit list includes "Add Epic Games Launcher to Bazaar curated list" (b64e27a), a Deck-image change that "update[s] the Steam bootstrap and run[s] Steam's first-run setup" (#6326), a fix to "speed up AYANEO 3 controller reconnect after module refit" (#6313), a CEC fix "so a stuck run cannot disable CEC on resume" (#6324), "enable btrfs dynamic reclaims" (#6298), and an installer fix that "make[s] /mnt a real directory on the ISO" (#6325).

The changelog also includes Framework panel-replay commits, among them "Disable panel replay due to regression in 7.3/7.4" and a later revert of "Remove panel replay workaround with new kernel." This article does not treat the net Framework state as a settled, user-facing headline.

Current users can rebase with `bazzite-rollback-helper rebase stable`, or pin this image with `bazzite-rollback-helper rebase 45.20261115`.

*Sources:* [ublue-os/bazzite: 45.20261115, Nov. 15, 2026](https://github.com/ublue-os/bazzite/releases/tag/45.20261115)
