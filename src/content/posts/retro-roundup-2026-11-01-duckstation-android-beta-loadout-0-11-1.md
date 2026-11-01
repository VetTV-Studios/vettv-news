---
title: "Retro Roundup: DuckStation's Rewritten Android App Hits Beta, Loadout 0.11.1 Drops RecompHub"
description: "The PS1 emulator's Jetpack Compose rewrite brings desktop-style features to Android 7 and up, while the Linux handheld overlay removes its recompiled-games plugin"
summary: "The PS1 emulator's Jetpack Compose rewrite brings desktop-style features to Android 7 and up, while the Linux handheld overlay removes its recompiled-games plugin"
pubDate: 2026-10-30
publishedAt: 2026-11-01T14:04:24.000Z
author: "Vet, VetTV Studios"
category: handhelds
type: news
tags: ["emulation", "android", "linux-handhelds"]
offTopic: true
draft: false
cover: "covers/retro-roundup-2026-11-01-duckstation-android-beta-loadout-0-11-1.png"
sources:
  - title: "DuckStation: Android beta downloads page"
    url: "https://downloads.duckstation.org/android-testing/"
  - title: "Overclocked: DuckStation Android rewrite beta"
    url: "https://overclockedhq.com/news/duckstation-android-rewrite-beta"
  - title: "GitHub: Loadout v0.11.1 release"
    url: "https://github.com/srsholmes/loadout/releases/tag/v0.11.1"
  - title: "PlayingTux: Loadout v0.11.1 released"
    url: "https://playingtux.com/en/articles/2026/10/loadout-v0111-released/"
source: "Article Desk: retro-roundup-2026-11-01-duckstation-android-beta-loadout-0-11-1.md"
---
## DuckStation's Android app is rewritten and in beta

DuckStation developer Stenzek has rewritten the PS1 emulator's Android app in Jetpack Compose to match the desktop versions, and it's now in public beta. The official beta page lists a friendlier interface, the ability to move data directories, a more flexible touchscreen controller, better performance, offline achievement tracking in casual mode, and translations into 19 languages. Overclocked reports that the builds also add settings search, a rewind timeline, a touch layout editor and slang shaders.

The latest build, dated October 31, updates the emulation core with performance and compatibility fixes and new cheat formats. It also delays cheats and achievements while a game boots, improves disc swapping and memory card safety checks, and adds post-processing, custom border overlays and an SFX volume control. Big Picture Mode is aimed at TVs, and the developer warns against using it on phones for now because it doesn't fully turn off when you switch apps and wastes battery.

Before installing:

- **Backups:** the developer calls it beta-quality and recommends backing up with the app's data transfer tool first.
- **Upgrading:** it uses the same signing key as the Play Store build, so it installs over it without uninstalling.
- **What carries over:** saves, memory cards and BIOS files carry over, but settings don't, so you'll need to set those up again.
- **Requirements:** it now needs Android 7 or newer, up from Android 6.
- **Downloading:** the APK may not be redistributed, so download it only from the official beta page. You'll need your own BIOS and games.

## Loadout v0.11.1 removes RecompHub

Loadout, an overlay and plugin toolkit for Linux handhelds like the Steam Deck, released v0.11.1 on October 30. Its release notes say the RecompHub plugin, for browsing, installing and playing recompiled and decompiled retro games, is no longer part of Loadout because the developers don't want to maintain it. Games you already installed and their Steam shortcuts aren't touched. The change only affects what ships in new releases.
