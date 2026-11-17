---
title: "SteamOS 3.10.0 Preview Brings Plasma 6.8.2, Linux 7.3, and VRR Frame-Timing Fixes"
description: "The November 13 Preview-channel build also adds ROG Xbox Ally X20 HDR and brightness support, HDMI 2.1 VRR, FRL and ALLM on AMD, and mesh shaders on Turing-or-newer NVIDIA GPUs. Valve says it may still have bugs."
summary: "The November 13 Preview-channel build also adds ROG Xbox Ally X20 HDR and brightness support, HDMI 2.1 VRR, FRL and ALLM on AMD, and mesh shaders on Turing-or-newer NVIDIA GPUs. Valve says it may still have bugs."
pubDate: 2026-11-16
publishedAt: 2026-11-16T18:01:18-06:00
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["steamos", "steam-deck", "valve"]
offTopic: true
trending: false
draft: false
cover: "covers/steamos-3-10-0-preview-plasma-6-8-kernel-7-3.png"
sources:
  - title: "Valve: SteamOS 3.10.0 Preview, Nov. 13, 2026"
    url: "https://store.steampowered.com/news/app/1675200/view/687522235410285333"
source: "Article Desk: steamos-3-10-0-preview-plasma-6-8-kernel-7-3.md"
---
Valve [posted SteamOS 3.10.0 Preview](https://store.steampowered.com/news/app/1675200/view/687522235410285333) on November 13 at 8:04 p.m. CT. The notes say the update "is for the Steam Deck Preview channel, and includes new features that are still being tested." Players can opt in under Settings > System > System Update Channel.

"This is an early Preview build of SteamOS 3.10, and may contain unexpected bugs or stability issues," Valve writes. If problems show up, it asks people to file a bug on the [SteamOS issue tracker](https://github.com/ValveSoftware/SteamOS/issues). The notes "are an overview, and may not include all changes since the previous SteamOS 3.9 Stable Release."

## Desktop, kernel, and general fixes

Under General, Valve says it "Updated Arch Linux base" and "Updated Desktop Mode from Plasma 6.7.3 to Plasma 6.8.2." For the Plasma change, the notes point to [KDE's Plasma 6.8.0 announcement](https://kde.org/announcements/plasma/6/6.8.0/). The Developer section says the "Linux kernel [was] rebased on Linux 7.3." The notes do not give a kernel patch version.

The same General list includes "many security and stability improvements," a fix for a false "Slow Charger" alert, a fix for "Bluetooth audio disconnection when switching between desktop and game modes," and updated timezone data "for Cuba, and Canada's Northwest Territories and Manitoba."

## Game Mode, VRR, and handheld support

In Game Mode, Valve says it added support for VK_EXT_present_timing, and "Added support for ASUS ROG Xbox Ally X20 HDR and brightness adjustment." Those are the only handheld named in the notes.

On VRR, the notes say Valve "Improved frame timing when using the framerate limiter with VRR," "Improved screen flickering when VRR is enabled while navigating the Steam UI or leaving it idle," and "Improved cursor movement under VRR. It should now match the game's framerate over 30FPS, and stop spiking the panel's refresh rate up to the maximum refresh rate."

Game Mode fixes also include "Fixed scaling causing overexposure in certain HDR titles, such as Control," and "Fixed an issue with certain games, such as UBOAT and The Fruit of Grisaia, where the image would flicker and present stale frames in Game Mode."

## AMD and NVIDIA graphics

On AMD, Valve "Added support for HDMI 2.1 VRR, FRL, and ALLM," with a known issue: "display may remain blank with the Dell G3223Q."

On NVIDIA, the notes list "general stability and performance improvements," "Added support for Mesh Shaders on Turing and newer," and "Fixes rendering corruption in Shadow of the Tomb Raider and The Surge 2."

*Sources:* [Valve: SteamOS 3.10.0 Preview, Nov. 13, 2026](https://store.steampowered.com/news/app/1675200/view/687522235410285333)
