---
title: "Bazzite 45 Goes Stable on Fedora 45 With an Anti-Cheat Readiness Check and ROG Xbox Ally X20 Support"
description: "The first stable Fedora 45 images bring kernel 7.2.15, Mesa 26.2.6, GNOME 51.1 and KDE 6.8.2, plus initial Acer Predator Atlas 8 support"
summary: "The first stable Fedora 45 images bring kernel 7.2.15, Mesa 26.2.6, GNOME 51.1 and KDE 6.8.2, plus initial Acer Predator Atlas 8 support"
pubDate: 2026-11-04
publishedAt: 2026-11-04T08:35:51-06:00
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["bazzite", "fedora", "linux-gaming"]
offTopic: true
trending: false
draft: false
cover: "covers/bazzite-45-fedora-45-stable-release.png"
sources:
  - title: "GitHub: Bazzite 45.20261103"
    url: "https://github.com/ublue-os/bazzite/releases/tag/45.20261103"
  - title: "GitHub: Bazzite 45.20261104"
    url: "https://github.com/ublue-os/bazzite/releases/tag/45.20261104"
  - title: "GitHub: Secure Boot warning commit e1e1f97"
    url: "https://github.com/ublue-os/bazzite/commit/e1e1f97053a8332cdefae12e5f61d4696b0d940a"
  - title: "GamingOnLinux (secondary): Bazzite 45 arrives"
    url: "https://www.gamingonlinux.com/2026/11/bazzite-45-arrives-powered-by-fedora-linux-45-for-gamers/"
  - title: "VideoCardz (secondary): Bazzite 45, Atlas 8 and Ally X20"
    url: "https://videocardz.com/newz/bazzite-45-released-with-improved-acer-predator-atlas-8-support-rog-xbox-ally-x20-moves-to-stable"
  - title: "XDA (secondary): Bazzite 45 and EAC Linux v2"
    url: "https://www.xda-developers.com/bazzite-45-is-here-and-it-brings-support-for-meeting-epics-new-linux-anti-cheat-system-requirements/"
source: "Article Desk: bazzite-45-fedora-45-stable-release.md"
---
Bazzite has moved its stable branch to Fedora 45. The first stable Fedora 45 images, 45.20261103 and 45.20261104, went up on GitHub on November 3 (US time). Version numbers below come from the official GitHub changelogs.

## What's in the images

- **Base:** Fedora 45, up from the previous stable 44.20261026.
- **Kernel:** 7.2.15, with the NVIDIA LTS images moving to 6.18.60.
- **Mesa:** 26.2.6, up from 26.2.4.
- **Desktops:** GNOME 51.1 (from 50.4) and KDE Plasma 6.8.2 (from 6.7.5).
- **NVIDIA drivers:** Nvidia Open 615.78.08 and Nvidia LTS 580.196.07.
- **Other components:** InputPlumber 0.83.1 and PowerStation 0.9.0, plus new bpftune and bpfrag packages for the optional gaming network tuning.

## Easy Anti-Cheat Linux v2 readiness

Bazzite's announcement, as quoted by GamingOnLinux and XDA, adds a `ujust check-anticheat` command. It checks a system against Epic's published Easy Anti-Cheat Linux v2 requirements and gives pass/fail results with tips. According to XDA's quote of the announcement, Epic made Bazzite "one of the accepted well-known signing keys." Fortnite isn't enabled by this update.

**A caution worth heeding:** the 45.20261104 build includes a commit titled "warn about secure boot on steam deck/machine." XDA and Linuxiac report that the announcement tells Steam Deck owners not to enable Secure Boot, and tells handheld users not to enable kernel lockdown yet, until Bazzite gives further guidance.

## Handhelds

- **ASUS ROG Xbox Ally X20:** support moves from testing to stable. Bazzite says a fix for a reported custom TDP issue is still on the testing branch and will reach stable soon. VideoCardz (secondary) lists RGB lighting and dedicated fan controls as still needing work.
- **Acer Predator Atlas 8:** initial support through InputPlumber, including M1/M2 rear-button mappings and a Quick Access Menu tap action. VideoCardz (secondary) reports that tapping the Guide button still doesn't work, so you have to hold it instead, and that the gyroscope isn't supported yet.

## Other changes

The announcement also lists:

- ROCm OpenCL replacing Mesa OpenCL on non-NVIDIA images.
- XWaylandVideoBridge removed from the KDE images.
- Logitech TrueForce racing wheel support.
- BTRFS maintenance from the BTRFS Assistant GUI.
- `extest` support for the 64-bit beta Steam client.

Existing users can update normally. The release notes also give `bazzite-rollback-helper rebase stable` for anyone who wants to rebase.
