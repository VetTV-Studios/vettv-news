---
title: "Bazzite Stable 45.20261105 Adds Steam Machine Detection and Nvidia CoolerControl Passthrough"
description: "Changelog from 45.20261104: SteamOS-Manager update, Fremont in Valve hardware detection, improved anticheat handling for Valve hardware, Nvidia GPU passthrough for CoolerControl, Atlas 8 sync; stack still Kernel 7.2.15 / Mesa 26.2.6 / Gamescope 3.17.0"
summary: "Changelog from 45.20261104: SteamOS-Manager update, Fremont in Valve hardware detection, improved anticheat handling for Valve hardware, Nvidia GPU passthrough for CoolerControl, Atlas 8 sync; stack still Kernel 7.2.15 / Mesa 26.2.6 / Gamescope 3.17.0"
pubDate: 2026-11-06
publishedAt: 2026-11-06T08:48:31-06:00
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["bazzite", "linux-gaming", "steamos"]
offTopic: true
trending: false
draft: false
cover: "covers/bazzite-stable-45-20261105.png"
sources:
  - title: "GitHub: ublue-os/bazzite 45.20261105"
    url: "https://github.com/ublue-os/bazzite/releases/tag/45.20261105"
source: "Article Desk: bazzite-stable-45-20261105.md"
---
Bazzite's stable images moved to **45.20261105** on November 5 (GitHub release timestamp **2026-11-05T23:49:28Z**, about **5:49 PM CST**). The [automatically generated changelog](https://github.com/ublue-os/bazzite/releases/tag/45.20261105) lists changes since **45.20261104**.

## Notable commits

From the release notes:

- **Steam Machine (Fremont)** added to the Valve hardware detection script and `titanoboa_hook_postrootfs.sh` (#6258).
- **Improved anticheat handling** of Valve hardware (#6257).
- **Nvidia GPU passthrough** for the CoolerControl container (two related commits).
- **Atlas 8** sync with upstream PR (#6229).
- **SteamOS-Manager** package bump: `0~20261018.gitaa85e5b-1` → `0~20261031.git051c074-1`.
- Other fixes include OpenRazer layering, Portuguese (`pt_BR`) Steam first-run messaging, ujust/uupd updates, and a MOK-deletion caution.

## Major package versions (unchanged vs prior stable line)

Per the release table:

- **Kernel:** 7.2.15-ogc1.1 (Nvidia LTS kernel 6.18.60-ogc1.1)
- **Mesa:** 26.2.6-2
- **Gamescope:** 3.17.0^1-1
- **Nvidia Open:** 615.78.08-1 / **Nvidia LTS:** 580.196.07-1
- **GNOME:** 51.1-1 / **KDE:** 6.8.2-1
- **InputPlumber:** 0.83.1-4 / **PowerStation:** 0.9.0-1

## How to rebase

Current users can run `bazzite-rollback-helper rebase stable` for the latest stable, or `bazzite-rollback-helper rebase 45.20261105` for this image specifically.

This build is an incremental stable refresh on the Fedora 45 line, not a new major Bazzite version.

*Opinion:* Fremont detection and anticheat handling are the headlines for Steam Machine / Deck users; CoolerControl Nvidia passthrough is the practical win if you fan-curve an Nvidia Bazzite box.
