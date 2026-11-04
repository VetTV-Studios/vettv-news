---
title: "SteamOS 0.5.7 Beta for Steam Frame Brings SteamVR 2.19.1 to the Headset, Plus WebXR and Audio Fixes"
description: "Valve's opt-in beta for Steam Frame packages the latest SteamVR with pose prediction, sleep, foveation and microphone changes"
summary: "Valve's opt-in beta for Steam Frame packages the latest SteamVR with pose prediction, sleep, foveation and microphone changes"
pubDate: 2026-11-04
publishedAt: 2026-11-04T08:35:51-06:00
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["steam-frame", "steamos", "vr"]
offTopic: true
trending: false
draft: false
cover: "covers/steamos-0-5-7-beta-steam-frame.png"
sources:
  - title: "Valve: SteamOS 0.5.7 Beta for Steam Frame"
    url: "https://steamcommunity.com/app/4165890/announcements/detail/527161296156696117"
  - title: "GamingOnLinux (secondary): SteamOS 0.5.7 Beta for Steam Frame"
    url: "https://www.gamingonlinux.com/2026/11/steamos-0-5-7-beta-for-steam-frame-brings-webxr-improved-settings-and-more/"
  - title: "VetTV News: SteamVR Beta 2.19.1"
    url: "https://news.vettvstudios.com/posts/steamvr-beta-2-19-1-steam-link-streaming-linux/"
source: "Article Desk: steamos-0-5-7-beta-steam-frame.md"
---
Valve released SteamOS 0.5.7 for Steam Frame on November 3. It's on the Steam Frame **Beta** channel, which Valve says includes features that are still being tested. You can opt in from Settings > System > System Update Channel on the headset.

This isn't a new SteamVR release. The OS update brings SteamVR 2.19.1, the version Valve put into beta on PC this week, to the headset itself. We covered the PC streaming changes in [our SteamVR 2.19.1 story](https://news.vettvstudios.com/posts/steamvr-beta-2-19-1-steam-link-streaming-linux/). Everything below is from Valve's announcement.

## SteamVR on the headset

- Better vibration filtering for pose prediction, an issue Valve says affected some units.
- The display dims for 30 seconds before the headset sleeps.
- Foveated sharpening no longer depends on eye tracking. It used to turn off with eye tracking off, and now it defaults to centered.
- Advanced Supersampling support has been removed on Steam Frame.
- The guided tour keeps Steam docked front and center.

## Frame controllers

- Battery now shows correctly at 0%.
- New default bindings for Chromalab, Batman Arkham and Doom VFR.

## OS and audio

- WebXR is enabled in Chromium 157 and newer.
- Fixed audio cutting out on USB or Bluetooth speakers when an app tried to use the microphone.
- New controls to turn off microphone echo cancellation and noise suppression separately. These need the current Steam Client Beta, which you can opt into on the headset from Settings > System > Steam Client Update Channel.

GamingOnLinux (secondary) also covered the release. Its article says to opt in via the Steam Client Update Channel, but Valve's post puts the OS beta under System Update Channel.
