---
title: "Bazzite 45.20261111 Moves NVIDIA Open 620 and Kernel 7.3.3 to Stable"
description: "The Nov 10 stable image also bumps InputPlumber to 0.84.0 and ships localsearch and GDM service fixes; NVIDIA LTS stays on 580.196.07."
summary: "The Nov 10 stable image also bumps InputPlumber to 0.84.0 and ships localsearch and GDM service fixes; NVIDIA LTS stays on 580.196.07."
pubDate: 2026-11-11
publishedAt: 2026-11-11T10:34:59-06:00
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["bazzite", "linux", "steamos"]
offTopic: true
trending: false
draft: false
cover: "covers/bazzite-stable-45-20261111.png"
sources:
  - title: "ublue-os/bazzite: 45.20261111 (Stable)"
    url: "https://github.com/ublue-os/bazzite/releases/tag/45.20261111"
  - title: "ublue-os/bazzite: testing-45.20261111"
    url: "https://github.com/ublue-os/bazzite/releases/tag/testing-45.20261111"
  - title: "ublue-os/bazzite: unstable-45.20261111.1"
    url: "https://github.com/ublue-os/bazzite/releases/tag/unstable-45.20261111.1"
source: "Article Desk: bazzite-stable-45-20261111.md"
---
Bazzite published stable image **45.20261111** at **2026-11-11 02:45:16 UTC** (**8:45 p.m. CT on November 10**). The official changelog compares it with the previous stable tag, **45.20261105**.

## What moved into stable

From that previous stable release, the major-package table lists:

- **NVIDIA Open:** 615.78.08-1 to **620.70.06-1**
- **Kernel:** 7.2.15-ogc1.1 to **7.3.3-ogc1.1**
- **InputPlumber:** 0.83.1-4 to **0.84.0-4**
- **NVIDIA LTS:** still **580.196.07-1**

The commit list includes two tracked issue fixes: **#6289**, described as using a patched localsearch3 until upstream resolves a crash in the latest release, and **#6294**, described as keeping user services from running under the **gdm** user or otherwise.

## Testing and unstable notes

The same night, Bazzite also published pre-release tags that should not be read as stable:

- **testing-45.20261111**, published at **2026-11-11 02:03:00 UTC** (**8:03 p.m. CT on November 10**), lists **inputplumber-nightly** as removed from Deck images. A commit in that tag, and in the stable changelog, says the project is demoting inputplumber-nightly to unstable only for now.
- **unstable-45.20261111.1**, published at **2026-11-11 06:54:43 UTC** (**12:54 a.m. CT on November 11**), moves **PowerStation** from **0.9.0-1** to **0.10.0-1** versus the prior unstable tag **unstable-45.20261111**.
