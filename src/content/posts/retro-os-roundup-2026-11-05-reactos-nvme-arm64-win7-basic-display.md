---
title: "Retro OS Roundup: ReactOS on NVMe and ARM64, and Windows 7 Aero Without a GPU Driver"
description: "Three works-in-progress from the community, each shared on X. None of them is a finished release"
summary: "Three works-in-progress from the community, each shared on X. None of them is a finished release"
pubDate: 2026-11-05
publishedAt: 2026-11-05T10:56:14-06:00
author: "Vet, VetTV Studios"
category: open-nt
type: news
tags: ["reactos", "retro-os", "community-projects"]
offTopic: true
trending: false
draft: false
cover: "covers/retro-os-roundup-2026-11-05-reactos-nvme-arm64-win7-basic-display.png"
sources:
  - title: "@The_DarkFire__ on X"
    url: "https://x.com/The_DarkFire__/status/2117934548579463595"
  - title: "GitHub: reactos/reactos PR #9646"
    url: "https://github.com/reactos/reactos/pull/9646"
  - title: "@puredarwin on X"
    url: "https://x.com/puredarwin/status/2117824935754355096"
  - title: "GitHub: ReactOS 0.4.16 release"
    url: "https://github.com/reactos/reactos/releases/tag/0.4.16-release"
  - title: "GitHub: ReactOS version.cmake (master)"
    url: "https://github.com/reactos/reactos/blob/master/sdk/include/reactos/version.cmake"
  - title: "@TheBobPony on X"
    url: "https://x.com/TheBobPony/status/2117745323976388831"
source: "Article Desk: retro-os-roundup-2026-11-05-reactos-nvme-arm64-win7-basic-display.md"
---
Three community projects caught our eye this week. All of them are works in progress shared by their developers on X, and none is an official release. We describe them only as far as the posts and public repositories show.

## ReactOS ARM64 installed to an NVMe drive

[@The_DarkFire__](https://x.com/The_DarkFire__/status/2117934548579463595) posted a full ARM64 ReactOS install on an NVMe drive. The post credits a "foundational WIP NVMe driver" and a USB3/USB4 stack that is "in review." That matches a public ReactOS pull request from the same developer (GitHub user DarkFire01): [#9646](https://github.com/reactos/reactos/pull/9646), "Import USB3 drivers from modern-driver-replacements," which was still open when we checked. The PR description says a follow-up PR covering USB4 depends on it. We couldn't find a separate public NVMe driver PR, so the NVMe driver stands as the developer's description of work in progress.

## ReactOS "0.4.17" on an Orange Pi Zero 3

[@puredarwin](https://x.com/puredarwin/status/2117824935754355096) shared ReactOS 0.4.17 running on ARM64 on an Orange Pi Zero 3. The post says it uses PureDarwin's efi-emulation plus the poster's own work for Clang 21 and sun50i support. **0.4.17 isn't a released version.** ReactOS's latest release is [0.4.16](https://github.com/reactos/reactos/releases/tag/0.4.16-release). The [main development branch](https://github.com/reactos/reactos/blob/master/sdk/include/reactos/version.cmake) is versioned 0.4.17, so this is a development build.

## Windows 10's Basic Display Adapter driving Aero on Windows 7

[@TheBobPony](https://x.com/TheBobPony/status/2117745323976388831) posted that Microsoft's Basic Display Adapter from Windows 10 is working on Windows 7 with Aero Glass. The post says everything is rendered on the CPU with no WDDM GPU driver installed, and that it boots on UEFI Class 3 systems with Secure Boot enabled. The poster calls it a work in progress and asks people not to ask for release dates. There's no public code to check yet, so treat this as the poster's own report.

*Opinion:* it's a good week for anyone hoping to run ReactOS on modern storage and ARM boards. The USB3 PR is the piece most worth watching, since it's public and under review.
