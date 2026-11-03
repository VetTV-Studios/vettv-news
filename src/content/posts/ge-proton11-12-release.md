---
title: "GE-Proton11-12 Fixes Helldivers 2 Memory Leaks, Hyprland Fullscreen and Plenty More"
description: "The latest community Proton build moves to DXVK-NVAPI 0.9.3 and VKD3D-Proton 3.1, adds new Steam Input and HDR options, and fixes a long list of Wayland, video and controller issues"
summary: "The latest community Proton build moves to DXVK-NVAPI 0.9.3 and VKD3D-Proton 3.1, adds new Steam Input and HDR options, and fixes a long list of Wayland, video and controller issues"
pubDate: 2026-11-03
publishedAt: 2026-11-03T05:15:27-06:00
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["ge-proton", "proton", "linux-gaming"]
offTopic: true
trending: false
draft: false
cover: "covers/ge-proton11-12-release.png"
sources:
  - title: "GitHub: GE-Proton11-12 release notes"
    url: "https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton11-12"
  - title: "GloriousEggroll on Patreon: GE-Proton11-12"
    url: "https://www.patreon.com/gloriouseggroll/posts/ge-proton11-12-174244505"
source: "Article Desk: ge-proton11-12-release.md"
---
GloriousEggroll released GE-Proton11-12 on November 3. GE-Proton is the community build of Valve's Proton compatibility layer, with extra fixes and patches for running Windows games on Linux. Everything below comes from the official GitHub release notes.

## Component updates

- **Wine:** Valve's bleeding-edge branch as of October 31, plus newer commits. XInput now rescans controllers only when a device may have changed, replacing older Far Cry 4 and Witcher 3 hacks. nvapi is disabled for every game when the NVIDIA driver isn't loaded, and Xalia is updated to 0.5.0.1.
- **DXVK:** v3.1.1-174, with reworked command submission throttling and memory eviction, plus present timing fixes.
- **VKD3D-Proton:** v3.1, including an Arc Raiders workaround and a UE4 ray tracing glitch fix on AMD.
- **DXVK-NVAPI:** v0.9.3. Available video memory now matches `nvidia-smi`.
- **D7VK:** a large rework of DirectDraw, Direct3D 7 and older support.
- **FEX:** FEX-2610-116, for running x86 games on ARM.
- **Build labels:** DXVK, D7VK and VKD3D-Proton builds made from GE's patched tree now include `-GE-Proton(dirty)` in their version string, so upstream developers can tell from bug reports that a build is modified.

## Notable game fixes

- **Helldivers 2:** fixed a memory leak of about 34 GiB of address space and 360 MiB of RAM per hour, and threads and file descriptors piling up during a session.
- **Space Marine 2:** fixed crashes after long play sessions.
- **Star Citizen:** DLSS works on NVIDIA again without disabling bottom-up allocation.
- **Arc Raiders:** fixed an NVIDIA crash when the window loses focus while a level loads.
- **Warhammer 40,000: Darktide:** on AMD-only systems, the FSR 4 option on RDNA3 is restored.
- **MSFS 2024:** 4K intro videos no longer play in slow motion.
- **The Last of Us Part II:** daily-run leaderboards work again.
- **EA app:** installs failing with error INST-14-1603 are fixed.
- **Persona 5 Royal:** fixed crashes with Reloaded-II mods.
- **Arcade titles:** movie fixes for several, including Silent Hill: The Arcade and Wangan Midnight Maximum Tune 5.

## Wayland, desktop and HDR

- **Hyprland:** fullscreen games no longer drop to a tiled or maximized window, a regression since GE-Proton11-7.
- **GNOME:** tray icons for Wine-Wayland apps appear again.
- **Cinnamon:** windows keep their title bars and borders.
- **Wine-Wayland:** animated cursors animate, and IME input with Fcitx5 no longer freezes games.
- **KDE Plasma 6.8:** MangoHud and the Steam overlay no longer look oversaturated in HDR10 games on Wine-Wayland. `WINE_WAYLAND_HDR_PASSTHROUGH=1` restores the old behavior.
- **New `PROTON_FORCE_HDR=1` option:** for setups where HDR isn't detected automatically.

## Controllers and new options

- **New `PROTON_STEAM_INPUT_XBOX_PROMPTS` option:** turned on by default for Rune Factory 5.
- **Armored Core VI:** controllers now work through the Steam Input fallback.
- **Where Winds Meet:** now defaults to `PROTON_SONY_AUTO_XINPUT=0`, a fix for DualSense controllers.
- **New `PROTON_STREAMLINE_UPGRADE` option:** downloads a current NVIDIA Streamline for games that ship an old one.
- **32-bit OpenXR:** applications are now supported.

GE-Proton is a community project, not an official Valve release. The full changelog has many more fixes.
