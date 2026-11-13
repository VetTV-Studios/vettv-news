---
title: "SteamOS 3.9.6 Beta Improves Frame Timing With the Framerate Limiter"
description: "The November 12 update for the Beta and Preview channels also addresses missed frames from deep-idle CPU wakeups, 240 Hz displays, and several Game Mode and Desktop Mode bugs."
summary: "The November 12 update for the Beta and Preview channels also addresses missed frames from deep-idle CPU wakeups, 240 Hz displays, and several Game Mode and Desktop Mode bugs."
pubDate: 2026-11-13
publishedAt: 2026-11-13T14:55:26-06:00
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["steamos", "steam-deck", "valve"]
offTopic: true
trending: false
draft: false
cover: "covers/steamos-3-9-6-beta-framerate-limiter.png"
sources:
  - title: "Valve: SteamOS 3.9.6 Beta, Nov. 12, 2026"
    url: "https://store.steampowered.com/news/app/1675200/view/687522235410285093"
source: "Article Desk: steamos-3-9-6-beta-framerate-limiter.md"
---
Valve [posted SteamOS 3.9.6](https://store.steampowered.com/news/app/1675200/view/687522235410285093) to the SteamOS Beta and Preview channels on November 12 at 8:05 p.m. CT. The notes say the update "includes new features that are still being tested," and that players can opt in under Settings > System > System Update Channel.

The notes also say they "contain all changes since the current stable SteamOS 3.8 release, with the changes added since the previous 3.9 preview releases noted below." What follows is the list marked **New in SteamOS 3.9.6**.

## Frame timing and the framerate limiter

Under General, Valve says it "Improved frame timing when using the framerate limiter with VRR." A separate item covers the limiter without VRR: "A capped game whose framerate is a multiple of the limit no longer drops below it, e.g. a 30 FPS game with a 60 FPS limit at 120 Hz running at 24 FPS."

The same section says Valve "Reduced missed frames on fixed refresh caused by slow wakeups from deep CPU idle states," and "Fixed games running below the refresh rate on 240 Hz and higher displays."

## Other fixes new in 3.9.6

The 3.9.6 list also includes:

- "Fixed Steam Remote Play showing a green screen on NVIDIA GPUs."
- "Fixed SDR content looking oversaturated on HDR10 output on displays that are not wide gamut."
- "Fixed a black screen in RPG Maker games using Fullscreen++, such as Waste Walkers."
- "Fixed gamemode and other LD_PRELOAD libraries breaking when launched through gamescope."
- "Fixed left click getting stuck after a two-finger tap on the touchscreen."
- "Fixed several rare crashes and memory errors on shutdown and when clients exit."
- Security and stability updates

In Desktop Mode, Valve "Fixed a regression where scripts couldn't be added using 'Add to Steam.'"

The 3.9.6 section does not present a separate supported-device list. Several of those fixes are written around display types, NVIDIA GPUs, the touchscreen, gamescope, and Desktop Mode. Items that name Steam Deck, Steam Machine, Legion Go 2, or Steam Frame appear later in the notes, in the recap of changes since SteamOS 3.8, not in the list marked new in 3.9.6.
