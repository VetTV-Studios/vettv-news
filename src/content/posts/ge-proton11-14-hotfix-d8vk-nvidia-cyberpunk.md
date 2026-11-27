---
title: "GE-Proton11-14 Hotfix Makes D8VK the Default and Warns of an NVIDIA Cyberpunk 2077 Crash"
description: "GloriousEggroll released GE-Proton11-14 on GitHub on November 23 at 4:19 a.m. CT. The hotfix makes DXVK's D8VK the default for Direct3D 8 games, fixes 32-bit Vulkan games on Wine-Wayland, and warns that Cyberpunk 2077 can exit shortly after launch on NVIDIA GPUs until NVIDIA ships a driver fix."
summary: "GloriousEggroll released GE-Proton11-14 on GitHub on November 23 at 4:19 a.m. CT. The hotfix makes DXVK's D8VK the default for Direct3D 8 games, fixes 32-bit Vulkan games on Wine-Wayland, and warns that Cyberpunk 2077 can exit shortly after launch on NVIDIA GPUs until NVIDIA ships a driver fix."
pubDate: 2026-11-27
publishedAt: 2026-11-27T16:31:00-06:00
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["ge-proton", "proton", "linux-gaming"]
offTopic: true
trending: false
draft: false
cover: "covers/ge-proton11-14-hotfix-d8vk-nvidia-cyberpunk.png"
sources:
  - title: "GloriousEggroll/proton-ge-custom: GE-Proton11-14, Nov. 23, 2026, 4:19 a.m. CT"
    url: "https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton11-14"
  - title: "ublue-os/bazzite: 45.20261125"
    url: "https://github.com/ublue-os/bazzite/releases/tag/45.20261125"
  - title: "Cover photo: Break Arcade Games Out running on Arch Linux using Proton, by Peter Placzek, CC0 1.0, Wikimedia Commons"
    url: "https://commons.wikimedia.org/wiki/File:Break_Arcade_Games_Out_running_on_Arch_Linux_using_Proton.png"
---
GloriousEggroll released [GE-Proton11-14](https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton11-14) on GitHub on **November 23 at 4:19 a.m. CT**. GE-Proton is a community build of Valve's Proton, installed by hand or through tools like ProtonPlus. The release notes label it a "HOTFIX RELEASE." It follows [GE-Proton11-13](/posts/ge-proton11-13-release/). We missed it when it came out, so we're catching up now. For Valve's own Proton news this week, see our [Proton Experimental and DXVK 3.2 roundup](/posts/proton-experimental-nov-27-dxvk-3-2-linux-mint-27-beta/).

## What changed

- **Older Direct3D games:** D7VK is updated to v2.5. "D3D8 games now use DXVK's d8vk by default instead of wined3d." Setting `PROTON_NO_D8VK=1` switches back. 32-bit Direct3D 7, 6, 5 and 3 games now default to D7VK, and `PROTON_NO_D7VK=1` reverts that.
- **Wine-Wayland and HDR:** 32-bit Vulkan games no longer fail to start on Wine-Wayland, because the HDR colorspace layer is now built for 32-bit too (issues #996 and #997). The `DISABLE_WINE_HDR_COLORSPACE_LAYER=1` workaround is no longer needed.
- **Windowing:** older GDI games in low-resolution full screen are now centered between black bars on both Wine-Wayland and X11. The GTA III intro video no longer starts shifted left, and a RuneScape black screen in full-screen and maximized windows is fixed (#995).

## Known issue for NVIDIA users

The notes warn: "Cyberpunk 2077 on NVIDIA: the game can exit shortly after launch." They explain that "A shader added in a recent game patch crashes NVIDIA's shader compiler." According to the notes, the bug is in NVIDIA's driver, it affects other Proton builds too, and it needs a driver update to fix. NVIDIA is tracking it as bug 7014466 (GE-Proton issue #998).

## What it means for Vet's MSI laptop

This is a Bazzite (Linux) item, not a Windows 11 one. On the RTX 3050, Cyberpunk 2077 may exit shortly after launch under Proton until NVIDIA ships a fixed Linux driver. Bazzite's current stable build, [45.20261125](https://github.com/ublue-os/bazzite/releases/tag/45.20261125), lists NVIDIA Open driver 620.73.04.

*Sources:* [GloriousEggroll/proton-ge-custom: GE-Proton11-14](https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton11-14), [ublue-os/bazzite: 45.20261125](https://github.com/ublue-os/bazzite/releases/tag/45.20261125)

*Cover photo: "Break Arcade Games Out running on Arch Linux using Proton" by Peter Placzek, [CC0 1.0, Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Break_Arcade_Games_Out_running_on_Arch_Linux_using_Proton.png).*
