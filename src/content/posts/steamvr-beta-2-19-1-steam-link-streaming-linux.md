---
title: "SteamVR Beta 2.19.1 Sharpens Steam Link Streaming and Upgrades the Linux Runtime"
description: "Valve raises default streaming resolution, improves color and text clarity, adds new OpenXR extensions, and moves SteamVR on Linux to the Sniper runtime with sandbox support"
summary: "Valve raises default streaming resolution, improves color and text clarity, adds new OpenXR extensions, and moves SteamVR on Linux to the Sniper runtime with sandbox support"
pubDate: 2026-11-03
publishedAt: 2026-11-03T08:05:21-06:00
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["steamvr", "steam-frame", "linux"]
offTopic: true
trending: false
draft: false
cover: "covers/steamvr-beta-2-19-1-steam-link-streaming-linux.png"
sources:
  - title: "Valve: SteamVR Beta Updated - 2.19.1"
    url: "https://steamcommunity.com/games/250820/announcements/detail/683017363938871519"
  - title: "GamingOnLinux (secondary): SteamVR Beta 2.19.1"
    url: "https://www.gamingonlinux.com/2026/11/steamvr-beta-2-19-1-is-a-big-upgrade-for-streaming-steam-link-and-linux/"
  - title: "VR.org (analysis): Steam Frame October survey"
    url: "https://vr.org/articles/steam-frame-october-survey-1-in-24-vr-headsets-language-swing-2026"
  - title: "VetTV News: Steam Survey October 2026"
    url: "https://news.vettvstudios.com/posts/steam-survey-october-2026-cachyos-top-linux-distro/"
source: "Article Desk: steamvr-beta-2-19-1-steam-link-streaming-linux.md"
---
Valve released SteamVR Beta 2.19.1 on November 2. Valve says the focus is streamed image quality: "sharper text, clearer colors, and better detail," across streamed VR apps, the SteamVR interface, desktop streaming, third-party overlays and the theater screen. Everything below is from Valve's official announcement.

## Streaming (Steam Link)

- **Higher default resolution:** the recommended render resolution for streamed PC VR apps goes up to render scale 1.5, targeting 1.4 times the headset's panel resolution. Steam Link no longer runs a GPU performance test to pick it.
- **Steam Frame encoding:** the default encoded video size on Steam Frame goes from 1152 to 1216.
- **Sharper colors and detail:** better color downsampling before encoding, better brightness at edges between saturated colors, sharper peripheral image outside the foveated region, and crisper text and UI throughout SteamVR.
- **Before-and-after comparison:** on the host PC, go to Steam Link > Advanced > Stream Quality and choose Default or Legacy. Legacy reproduces the old image quality. If you manually changed encoded video size or render resolution, those settings are kept; set them back to Auto to try the new defaults.
- **Other streaming changes:**
  - Per-app refresh rate overrides.
  - A Preferred Foveated Sharpness setting for the SteamVR interface.
  - Better head motion prediction.
  - A prompt asking whether to share eye-tracking data with PC apps.
  - A fix for a possible cause of Error 17.

## OpenXR

- XR_KHR_composition_layer_cylinder support on PC and Steam Frame.
- XR_FB_composition_layer_image_layout support on Steam Frame.
- XR_EXT_stationary_reference_space support.

## Linux

- SteamVR now runs under the Sniper runtime, supporting Steam Runtime 3 clients.
- Non-Proton OpenXR games can launch without SteamVR already running.
- OpenVR and OpenXR runtimes can run inside Flatpak, bubblewrap and other sandboxes.
- A symlink for the 32-bit OpenXR runtime has been added, which Proton can also use.
- All Render Quality options are supported, where high-quality samplers were previously disabled.

## Context: the Steam Frame's audience

Valve's October hardware survey put the Steam Frame at 4.13% of VR headsets on Steam, which we covered in our [October survey story](https://news.vettvstudios.com/posts/steam-survey-october-2026-cachyos-top-linux-distro/). *Analysis (VR.org):* VR.org calculates that this works out to roughly 1 in 24 headsets, and argues that most of October's rise in Steam users with VR headsets, from 1.35% to 1.75%, lines up with a drop in Simplified Chinese-language respondents rather than Frame sales. That's VR.org's interpretation, not a Valve statement.

Anyone can opt into the SteamVR beta through Steam.
