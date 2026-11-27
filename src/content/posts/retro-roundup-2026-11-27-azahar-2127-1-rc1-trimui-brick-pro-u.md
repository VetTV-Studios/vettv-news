---
title: "Azahar 2127.1 Release Candidate Fixes Performance Regressions, and TrimUI's Brick Pro U Sells Out"
description: "The Azahar 3DS emulator team published 2127.1 Release Candidate 1 on GitHub on November 27 at 3:19 p.m. CT, fixing an OpenGL performance regression, Anime4K under Vulkan, and several Android crashes. TrimUI's Snapdragon-powered Brick Hammer Pro U Android handheld went on sale at $249.89 and now shows every model as sold out."
summary: "The Azahar 3DS emulator team published 2127.1 Release Candidate 1 on GitHub on November 27 at 3:19 p.m. CT, fixing an OpenGL performance regression, Anime4K under Vulkan, and several Android crashes. TrimUI's Snapdragon-powered Brick Hammer Pro U Android handheld went on sale at $249.89 and now shows every model as sold out."
pubDate: 2026-11-27
publishedAt: 2026-11-27T16:33:00-06:00
author: "Vet, VetTV Studios"
category: gaming
type: news
tags: ["azahar", "emulation", "handhelds"]
offTopic: true
trending: false
draft: false
cover: "covers/retro-roundup-2026-11-27-azahar-2127-1-rc1-trimui-brick-pro-u.png"
sources:
  - title: "azahar-emu/azahar: Azahar 2127.1 Release Candidate 1, Nov. 27, 2026, 3:19 p.m. CT"
    url: "https://github.com/azahar-emu/azahar/releases/tag/2127.1-rc1"
  - title: "TrimUI Store: TRIMUI Brick Hammer Pro U Handheld Game Console"
    url: "https://www.trimuistore.com/products/trimui-brick-hammer-pro-u-handheld-console"
  - title: "Time Extension, Nov. 27, 2026: The TrimUI Brick Pro U Android Gaming Handheld Is Now Available for Purchase"
    url: "https://www.timeextension.com/news/2026/11/the-trimui-brick-pro-u-android-gaming-handheld-is-now-available-for-purchase"
  - title: "Cover photo: TrimUI Brick Hammer Pro U product image, TrimUI"
    url: "https://www.trimuistore.com/products/trimui-brick-hammer-pro-u-handheld-console"
---
Two retro items from Thanksgiving week: a release candidate for the Azahar 3DS emulator, and TrimUI's new Android handheld going on sale and selling out.

## Azahar 2127.1 Release Candidate 1

The Azahar team published [Azahar 2127.1 Release Candidate 1](https://github.com/azahar-emu/azahar/releases/tag/2127.1-rc1) on GitHub on **November 27 at 3:19 p.m. CT**. It is marked as a pre-release, and the notes say "this build is not yet considered a stable release." The notes also advise backing up your user data folder before trying it. It follows Azahar 2127.0, the release that [brought full-speed play to newer iPhones](/posts/retro-vr-roundup-2026-11-24-azahar-atari-hookshotvr/).

Fixes for all platforms, quoted from the notes:

- "Previous issues present when using the Anime4K texture filter with the Vulkan renderer have now been fixed"
- "Addressed a performance regression caused by broken surface recycling first introduced in 2126.1"
- "Addressed a performance issue in the Vulkan renderer when Skip Duplicate Frames is enabled."
- DLC now works correctly when used with a ROM bundle in the emulated cartridge slot, and a couple of debug settings load properly from the settings file again.

On desktop, several command-line options that broke in 2126.0 work again. On Android, a fresh install no longer builds a touch-overlay layout that can place buttons off-screen, and the release fixes "an app crash which could sometimes occur after putting Azahar in the background and then re-opening it." For the libretro core, the notes fix "an issue which could prevent certain libretro frontends from correctly unloading Azahar's core," and stop the core from using Vulkan features that weren't enabled.

## TrimUI Brick Hammer Pro U sells out

TrimUI's [Brick Hammer Pro U](https://www.trimuistore.com/products/trimui-brick-hammer-pro-u-handheld-console), which [Time Extension](https://www.timeextension.com/news/2026/11/the-trimui-brick-pro-u-android-gaming-handheld-is-now-available-for-purchase) calls the Brick Pro U, is now listed on TrimUI's store. Time Extension reported on November 27 that it is available to buy, and that the "First run [is] limited to 3000 units." Neither TrimUI's store nor Time Extension says exactly when orders opened. When we checked on Friday afternoon, TrimUI's store listed every color and storage option as "sold out or unavailable," with no restock date.

From TrimUI's listing:

- **Prices:** $249.89 for the console alone, $280.49 with a 128GB card, $297.49 with a 256GB card, in black, silver or gray
- **Chip:** Snapdragon G2 Gen 1 with an Adreno A21 GPU
- **Memory and storage:** 6GB LPDDR4 RAM, 128GB eMMC, microSD up to 1TB
- **Screen:** 3.95-inch 1024×768 IPS at 60Hz
- **Software:** Android 15
- **Battery:** 5,000mAh, rated at 5 to 10 hours
- **Controls and output:** Hall-effect sticks, and USB-C DisplayPort output up to 1080p at 60Hz

*Sources:* [azahar-emu/azahar: 2127.1-rc1](https://github.com/azahar-emu/azahar/releases/tag/2127.1-rc1), [TrimUI Store: Brick Hammer Pro U](https://www.trimuistore.com/products/trimui-brick-hammer-pro-u-handheld-console), [Time Extension, Nov. 27, 2026](https://www.timeextension.com/news/2026/11/the-trimui-brick-pro-u-android-gaming-handheld-is-now-available-for-purchase)

*Cover photo: TrimUI Brick Hammer Pro U product image by TrimUI, from the [TrimUI Store](https://www.trimuistore.com/products/trimui-brick-hammer-pro-u-handheld-console).*
