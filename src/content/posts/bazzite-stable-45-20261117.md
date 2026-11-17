---
title: "Bazzite 45.20261117 Moves Stable to Kernel 7.3.4-ogc8.1 and KDE 6.8.3"
description: "The November 16 stable release, compared with 45.20261115, leaves Mesa at 26.2.7 and NVIDIA Open at 620.70.06. It also restores Deck steam-hardware-control and moves the zenergy and nct6687d modules to all images."
summary: "The November 16 stable release, compared with 45.20261115, leaves Mesa at 26.2.7 and NVIDIA Open at 620.70.06. It also restores Deck steam-hardware-control and moves the zenergy and nct6687d modules to all images."
pubDate: 2026-11-17
publishedAt: 2026-11-17T08:15:22-06:00
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["bazzite", "linux", "steamos"]
offTopic: true
trending: false
draft: false
cover: "covers/bazzite-stable-45-20261117.png"
sources:
  - title: "ublue-os/bazzite: 45.20261117, Nov. 16, 2026"
    url: "https://github.com/ublue-os/bazzite/releases/tag/45.20261117"
  - title: "ublue-os/bazzite issue #6347"
    url: "https://github.com/ublue-os/bazzite/issues/6347"
source: "Article Desk: bazzite-stable-45-20261117.md"
---
ublue-os [released Bazzite 45.20261117](https://github.com/ublue-os/bazzite/releases/tag/45.20261117) on November 16 at 11:21 p.m. CT, labeled "Stable (F45.20261117)." GitHub shows the release at 05:21 UTC on November 17. The page says this is "an automatically generated changelog" and that "from previous stable version 45.20261115 there have been the following changes."

Under major packages, the kernel moves from 7.3.4-ogc6.1 to 7.3.4-ogc8.1, and KDE moves from 6.8.2-1 to 6.8.3-1. Mesa is listed at 26.2.7-1, NVIDIA Open at 620.70.06-1, NVIDIA LTS at 580.196.07-1, and PowerStation at 0.10.2-1, with no version arrows next to those packages. The release does not describe a new NVIDIA driver or a Mesa bump. The NVIDIA LTS kernel stays at 6.18.60-ogc1.2.

## Other changes in the changelog

The commit list includes "feat(HDR): HTPC Auto HDR Content Detection" ([#6351](https://github.com/ublue-os/bazzite/pull/6351)), a Deck-image change that "Restore[s] steam-hardware-control for steamos-priv-write" ([#6352](https://github.com/ublue-os/bazzite/pull/6352)), and "feat(deck): Drop patched upower, adopt upstream change to use config." It also includes "Added new streaming app to Portal and Ujust" ([#6349](https://github.com/ublue-os/bazzite/pull/6349)), whose pull-request title is "Add Punktfunk to Ujust and Portal."

A commit titled "fix: Move zenergy and nct6687d to common Fixes #6347" addresses [issue #6347](https://github.com/ublue-os/bazzite/issues/6347), "nct6687d and zenergy kmods missing from bazzite-deck 45.20261115 (kernel 7.3.4-ogc6.1) although the changelog lists a kmod-nct6687d update." The issue, now closed, reported that those out-of-tree modules were missing after the previous stable image, which broke fan control for at least one reporter using CoolerControl with a Nuvoton NCT6686D. Maintainer Kyle Gospodnetich wrote that the fix was coming in the next release and that both akmods "have been moved from extra to common for OGC, meaning their inability to build is fatal." This article does not independently test the modules on the new image.

Current users can rebase with `bazzite-rollback-helper rebase stable`, or pin this image with `bazzite-rollback-helper rebase 45.20261117`.

*Sources:* [ublue-os/bazzite: 45.20261117, Nov. 16, 2026](https://github.com/ublue-os/bazzite/releases/tag/45.20261117), [ublue-os/bazzite issue #6347](https://github.com/ublue-os/bazzite/issues/6347)
