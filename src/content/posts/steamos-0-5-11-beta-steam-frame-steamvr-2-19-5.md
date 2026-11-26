---
title: "SteamVR Beta 2.19.5 and SteamOS 0.5.11 Beta for Steam Frame Are Release Candidates"
description: "Valve posted both updates on November 25 and called each a candidate for a full release, not a stable build. SteamVR Beta 2.19.5 adds Steam Link support for Intel Arc, Iris and UHD 700-series GPUs, steadies foveation on eye-tracked headsets, and fixes a Linux bug that ran some games at half rate. SteamOS 0.5.11 Beta for Steam Frame ships that SteamVR build, speeds up streaming decode, and fixes charging in low-power states."
summary: "Valve posted both updates on November 25 and called each a candidate for a full release, not a stable build. SteamVR Beta 2.19.5 adds Steam Link support for Intel Arc, Iris and UHD 700-series GPUs, steadies foveation on eye-tracked headsets, and fixes a Linux bug that ran some games at half rate. SteamOS 0.5.11 Beta for Steam Frame ships that SteamVR build, speeds up streaming decode, and fixes charging in low-power states."
pubDate: 2026-11-26
publishedAt: 2026-11-26T08:40:00-06:00
author: "Vet, VetTV Studios"
category: gaming
type: news
tags: ["steam-frame", "steamvr", "steamos"]
offTopic: true
trending: false
draft: false
cover: "covers/steamos-0-5-11-beta-steam-frame-steamvr-2-19-5.png"
sources:
  - title: "Valve: SteamVR Beta Updated - 2.19.5, Nov. 25, 2026, 11:53 a.m. CT"
    url: "https://store.steampowered.com/news/app/250820/view/683019270749160482"
  - title: "Valve: SteamOS 0.5.11 Beta for Steam Frame, Nov. 25, 2026, 11:59 a.m. CT"
    url: "https://store.steampowered.com/news/app/4165890/view/694278269818635351"
  - title: "Steam Support: SteamVR beta instructions"
    url: "https://help.steampowered.com/en/faqs/view/4F5E-AD22-7402-2EAD"
  - title: "GamingOnLinux: SteamVR Beta 2.19.5, Nov. 26, 2026"
    url: "https://www.gamingonlinux.com/2026/11/steamvr-beta-v2-19-5-brings-more-steam-link-streaming-improvements/"
  - title: "GamingOnLinux: SteamOS 3.9.7 Beta and SteamOS 0.5.11 Beta for Steam Frame, Nov. 26, 2026"
    url: "https://www.gamingonlinux.com/2026/11/steamos-3-9-7-beta-and-steamos-0-5-11-beta-for-steam-frame-released/"
  - title: "VetTV News: SteamOS 0.5.10 Beta and SteamVR 2.19.4"
    url: "https://news.vettvstudios.com/posts/steamos-0-5-10-beta-steam-frame-steamvr-2-19-4/"
  - title: "Cover photo: Steam Frame headset, by Davepape, CC BY 4.0, Wikimedia Commons"
    url: "https://commons.wikimedia.org/wiki/File:Steam_Frame_front_4.jpg"
source: "Article Desk: steamos-0-5-11-beta-steam-frame-steamvr-2-19-5.md"
---
Valve [posted SteamVR Beta 2.19.5](https://store.steampowered.com/news/app/250820/view/683019270749160482) on November 25 at 11:53 a.m. CT, and [SteamOS 0.5.11 Beta for Steam Frame](https://store.steampowered.com/news/app/4165890/view/694278269818635351) six minutes later, at 11:59 a.m. CT. In both notes, Valve writes that the build "is a candidate for a full release." These are still beta updates, not a move to the default or stable channels.

This follows last week's [SteamOS 0.5.10 Beta and SteamVR 2.19.4](/posts/steamos-0-5-10-beta-steam-frame-steamvr-2-19-4/). On Steam Frame, you can opt into 0.5.11 under Settings > System > System Update Channel. Anyone can opt into the SteamVR beta; Valve points to its [SteamVR beta instructions](https://help.steampowered.com/en/faqs/view/4F5E-AD22-7402-2EAD). Valve says to report problems in the SteamVR or Steam Frame bug-report forums, not in replies to the announcements.

## SteamVR 2.19.5 on the PC

The Steam Link list leads with new GPU support: Valve "Added support for Intel Arc, Intel Iris and Intel UHD Graphics 700-series & up." On eye-tracked headsets, "Eye-Tracked HMDs (Steam Frame, Quest Pro) have improved consistency for the size of the foveated region, even when strongly off-center."

Chroma-key and Room View settings moved. Valve "Moved host PC settings for chroma key from **Camera** section to **Play Area** (below Environment), and made these settings only apply when no VR game is running." **Key Content** mode with no game running "no longer requires enabling Room View." The notes also "Added host-side per-app settings for chroma key, so you can select the best key color, mode, and threshold given the game's content," and "Added a warning when using **Key Content** that it forces the camera on, which will increase power consumption."

The same list "Fixed an issue with flickering in the right eye in some situations" and "Fixed an issue with reprojection failures for some games." Under General, Valve "Added a workaround to prevent loss of inputs in F1 '25."

The Linux line is specific: "Fixed performance regression that was causing some games to run at half rate."

## SteamOS 0.5.11 on Steam Frame

The Frame notes say "SteamVR has been updated to version 2.19.5," and they repeat the chroma-key and Room View changes above. On the headset itself, Valve "Enabled SGSR Sharpening (Foveated) while chroma key streaming (was previously getting disabled)," "fixed occasional single flash of key color when toggling room view," "Fixed dashboard sometimes not drawing until after toggling Room View," and "Fixed situations where room view was causing glare."

It also "Improved streaming decode performance, allowing for higher default streaming resolutions." Under General, Valve "Improved headset tracking robustness when the user is almost motionless," "Further reduced power usage while headset is idle when a VR game is left running," and says "Streaming a VR game from PC will now prompt to setup playspace if needed."

OS fixes include "Fixed charging issues in low power states," "Fixed some cases where changing refresh rates could result in showing a black display," and "RDP sessions now display window borders properly." For developers, "Turning off the performance assessment overlay also turns off the general performance overlay in the headset."

These remain betas and release candidates. Valve has not said when, or whether, they will move to a full release. If you want the most stable build, stay on the default channels until that happens.

*Sources:* [Valve: SteamVR Beta Updated - 2.19.5, Nov. 25, 2026, 11:53 a.m. CT](https://store.steampowered.com/news/app/250820/view/683019270749160482), [Valve: SteamOS 0.5.11 Beta for Steam Frame, Nov. 25, 2026, 11:59 a.m. CT](https://store.steampowered.com/news/app/4165890/view/694278269818635351), [Steam Support: SteamVR beta instructions](https://help.steampowered.com/en/faqs/view/4F5E-AD22-7402-2EAD), [GamingOnLinux: SteamVR Beta 2.19.5, Nov. 26, 2026](https://www.gamingonlinux.com/2026/11/steamvr-beta-v2-19-5-brings-more-steam-link-streaming-improvements/), [GamingOnLinux: SteamOS 3.9.7 Beta and SteamOS 0.5.11 Beta for Steam Frame, Nov. 26, 2026](https://www.gamingonlinux.com/2026/11/steamos-3-9-7-beta-and-steamos-0-5-11-beta-for-steam-frame-released/), [VetTV News: SteamOS 0.5.10 Beta and SteamVR 2.19.4](/posts/steamos-0-5-10-beta-steam-frame-steamvr-2-19-4/)

*Cover photo:* A Steam Frame headset photographed by Davepape, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Steam_Frame_front_4.jpg). Cropped and overlaid with the VetTV News logo and headline.
