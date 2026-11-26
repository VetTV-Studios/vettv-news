---
title: "Lutris 0.5.23, ProtonPlus 0.6.9, and MangoHud 0.8.5-rc1 Land on the Same Day"
description: "Three Linux gaming tools posted new releases on November 25. Lutris 0.5.23 defaults new installers to GE-Proton through umu and expands GOG support. ProtonPlus 0.6.9 adds a Games view for Lutris, Heroic, Bottles, and Faugus. MangoHud 0.8.5-rc1 is the first public test build of MangoHud-next, including Steam Frame metrics; it is a release candidate, not a stable release."
summary: "Three Linux gaming tools posted new releases on November 25. Lutris 0.5.23 defaults new installers to GE-Proton through umu and expands GOG support. ProtonPlus 0.6.9 adds a Games view for Lutris, Heroic, Bottles, and Faugus. MangoHud 0.8.5-rc1 is the first public test build of MangoHud-next, including Steam Frame metrics; it is a release candidate, not a stable release."
pubDate: 2026-11-26
publishedAt: 2026-11-26T08:43:00-06:00
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["lutris", "protonplus", "mangohud", "linux"]
offTopic: true
trending: false
draft: false
cover: "covers/lutris-0-5-23-protonplus-0-6-9-mangohud-0-8-5-rc1.png"
sources:
  - title: "Lutris: v0.5.23 release notes, published Nov. 25, 2026, 7:45 p.m. CT"
    url: "https://github.com/lutris/lutris/releases/tag/v0.5.23"
  - title: "ProtonPlus: v0.6.9 release notes, published Nov. 25, 2026, 4:50 p.m. CT"
    url: "https://github.com/Vysp3r/ProtonPlus/releases/tag/v0.6.9"
  - title: "MangoHud: v0.8.5-rc1 release notes, published Nov. 25, 2026, 10:32 a.m. CT"
    url: "https://github.com/flightlessmango/MangoHud/releases/tag/v0.8.5-rc1"
  - title: "GamingOnLinux: Lutris v0.5.23, Nov. 26, 2026"
    url: "https://www.gamingonlinux.com/2026/11/game-manager-lutris-v0-5-23-is-out-with-lots-improvements-for-gog-humble-store-epic-games-and-more/"
  - title: "GamingOnLinux: ProtonPlus adds game support, Nov. 26, 2026"
    url: "https://www.gamingonlinux.com/2026/11/compatibility-tool-manager-protonplus-adds-game-support-to-lutris-faugus-heroic-games-and-bottles/"
  - title: "GamingOnLinux: MangoHud v0.8.5-rc1 first test build, Nov. 25, 2026"
    url: "https://www.gamingonlinux.com/2026/11/the-next-generation-linux-gaming-display-mangohud-v0-8-5-rc1-first-test-build-is-out/"
  - title: "Cover: official ProtonPlus screenshot from the project's GitHub repository"
    url: "https://github.com/Vysp3r/ProtonPlus"
source: "Article Desk: lutris-0-5-23-protonplus-0-6-9-mangohud-0-8-5-rc1.md"
---
Three widely used Linux gaming tools shipped new versions on November 25: [Lutris 0.5.23](https://github.com/lutris/lutris/releases/tag/v0.5.23) at 7:45 p.m. CT, [ProtonPlus 0.6.9](https://github.com/Vysp3r/ProtonPlus/releases/tag/v0.6.9) at 4:50 p.m. CT, and [MangoHud 0.8.5-rc1](https://github.com/flightlessmango/MangoHud/releases/tag/v0.8.5-rc1) at 10:32 a.m. CT. The timestamps are the published times on each project's GitHub release. MangoHud's build is marked as a pre-release.

## Lutris 0.5.23

The Lutris notes say the app will "Use GE-Proton through umu as the default for installers instead of downloading a Wine build," and can "Download GE-Proton releases pinned by an installer script from GitHub."

GOG support is a large part of the list: "Add GOG depot-based downloads, DLC installs, and incremental updates via gogdl integration," plus a repair option for depot installs, "Add GOG cloud save synchronization," and "Add parallel GOG download connections with resume support."

New sources include "Add GameJolt as a game source," "Add DLsite as a game source," and "Add Playtron import." The notes also "Refresh expired Epic Games Store tokens automatically instead of forcing a re-login." Fixes include "Fix $RESOLUTION on KDE/Wayland with fractional scaling" and "Fix GPU detection in Flatpak." An experimental AppImage is included among the release assets.

## ProtonPlus 0.6.9

ProtonPlus, a compatibility-tool manager, "Added Games support for Lutris, Faugus Launcher, Heroic Games Launcher, and Bottles. You can launch games or programs, open their folders, and change runners for eligible Lutris and Faugus games."

The notes also "Added Proton-Autogen as a launcher for managing Proton builds and game profiles," and "Added TinkerGame installation and updates, with an option to copy settings from SteamTinkerLaunch." They warn that "TinkerGame requires native ProtonPlus and native Steam outside SteamOS." "Added Rosemary for macOS Steam games on x86-64 native and Flatpak Steam."

Other additions include "automatic download retries, resume across ProtonPlus restarts," CLI `search`, `outdated`, `sync`, and `cleanup` commands, and "native packages for Debian, Ubuntu, Fedora, and Arch Linux." Under changes, ProtonPlus "Removed the built-in MangoHud configuration editor. Existing MangoHud configurations and overlay launch options continue to work."

## MangoHud 0.8.5-rc1, a first look at MangoHud-next

The MangoHud tag is a **pre-release**. The notes introduce **MangoHud-next**, "a server/client rewrite of MangoHud," and say it "is still in beta and will coexist with the existing implementation for now." The current implementation is referred to as MangoHud-classic. "Classic will continue to be invoked as `mangohud`, and existing configurations and usage remain unchanged." The new binary is launched with `mangohud-next %command%`.

Among the next-generation features, the notes list a separate HUD server, "YAML configuration with automatic reload," multiple HUD windows, and "Gamescope support: run `mangohud-next gamescope ...` directly, without mangoapp." The general changelog also "Added Steam Frame support for CPU, GPU, memory, battery, power and thermal metrics," and, for NVIDIA, "reduced polling frequency for slow metrics."

Missing features and known issues are tracked in the project's GitHub issue #2227. This is a release candidate for testers, not a stable replacement for classic MangoHud.

*Sources:* [Lutris v0.5.23](https://github.com/lutris/lutris/releases/tag/v0.5.23), [ProtonPlus v0.6.9](https://github.com/Vysp3r/ProtonPlus/releases/tag/v0.6.9), [MangoHud v0.8.5-rc1](https://github.com/flightlessmango/MangoHud/releases/tag/v0.8.5-rc1), [GamingOnLinux: Lutris v0.5.23](https://www.gamingonlinux.com/2026/11/game-manager-lutris-v0-5-23-is-out-with-lots-improvements-for-gog-humble-store-epic-games-and-more/), [GamingOnLinux: ProtonPlus](https://www.gamingonlinux.com/2026/11/compatibility-tool-manager-protonplus-adds-game-support-to-lutris-faugus-heroic-games-and-bottles/), [GamingOnLinux: MangoHud v0.8.5-rc1](https://www.gamingonlinux.com/2026/11/the-next-generation-linux-gaming-display-mangohud-v0-8-5-rc1-first-test-build-is-out/)

*Cover:* Official ProtonPlus screenshot from the [ProtonPlus GitHub repository](https://github.com/Vysp3r/ProtonPlus), licensed GPL-3.0-or-later. Cropped and overlaid with the VetTV News logo and headline.
