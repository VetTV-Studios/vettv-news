---
title: "Proton Experimental Gets a Nov. 27 Update, DXVK 3.2 Adds Present Timing, and Linux Mint 27 Enters Beta"
description: "Valve updated Proton Experimental on November 27 with six newly playable titles and Streamline OTA support for NVIDIA. DXVK 3.2 shipped November 26 with a rewritten Reflex implementation, and Linux Mint 27 \"Adrien\" entered beta on November 27."
summary: "Valve updated Proton Experimental on November 27 with six newly playable titles and Streamline OTA support for NVIDIA. DXVK 3.2 shipped November 26 with a rewritten Reflex implementation, and Linux Mint 27 \"Adrien\" entered beta on November 27."
pubDate: 2026-11-27
publishedAt: 2026-11-27T16:30:00-06:00
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["proton", "dxvk", "linux-mint"]
offTopic: true
trending: false
draft: false
cover: "covers/proton-experimental-nov-27-dxvk-3-2-linux-mint-27-beta.png"
sources:
  - title: "Valve: Proton changelog, Available in Proton Experimental (as of 2026-11-27)"
    url: "https://github.com/ValveSoftware/Proton/wiki/Changelog"
  - title: "DXVK: v3.2 release, Nov. 26, 2026"
    url: "https://github.com/doitsujin/dxvk/releases"
  - title: "Linux Mint blog: Linux Mint 27 \"Adrien\" BETA Release, Nov. 27, 2026"
    url: "https://blog.linuxmint.com/?p=5120"
  - title: "Linux Mint: New features in Linux Mint 27 \"Adrien\""
    url: "https://www.linuxmint.com/rel_adrien_whatsnew.php"
  - title: "Bazzite: GitHub releases (stable 45.20261125)"
    url: "https://github.com/ublue-os/bazzite/releases"
  - title: "GamingOnLinux, Nov. 27, 2026, 11:23 a.m. CT: Proton Experimental updated with fixes for Strange Brigade, FBC: Firebreak, Terminator: Dark Fate - Defiance and more"
    url: "https://www.gamingonlinux.com/2026/11/proton-experimental-updated-with-fixes-for-strange-brigade-fbc-firebreak-terminator-dark-fate-defiance-and-more/"
  - title: "GamingOnLinux: DXVK 3.2 brings improvements for frame pacing, NVIDIA Reflex, VRAM eviction logic and more"
    url: "https://www.gamingonlinux.com/2026/11/dxvk-3-2-brings-improvements-for-frame-pacing-nvidia-reflex-vram-eviction-logic-and-more/"
  - title: "GamingOnLinux: Linux Mint 27 Beta brings full Wayland support to Cinnamon"
    url: "https://www.gamingonlinux.com/2026/11/linux-mint-27-beta-brings-full-wayland-support-to-cinnamon/"
  - title: "Cover photo: Linux Mint 27 Cinnamon screenshot, by the Linux Mint team, official release page"
    url: "https://www.linuxmint.com/rel_adrien_whatsnew.php"
---

Three Linux gaming and desktop releases landed over Thanksgiving: a new **Proton Experimental** build from Valve on November 27, **DXVK 3.2** on November 26, and the **Linux Mint 27 "Adrien" beta** on November 27.

## Proton Experimental, November 27

Valve's [Proton changelog](https://github.com/ValveSoftware/Proton/wiki/Changelog) has a new entry, "Available in Proton Experimental (as of 2026-11-27)". It includes everything in [Proton 11.0-3](/posts/proton-11-0-3-stable/), plus the following:

- **Newly playable:** Breadbox, Gray Raven, Crown Trick, Danganronpa V3, ArcheAge Chronicles and EVERYONE'S TIER LIST!
- **Game fixes** quoted from the changelog include "Fixed FBC: Firebreak crashing when anyone joins a party," "Fixed main menu and HUD rendering in VR mode in F1 22 and F1 23," "Fixed missing audio in the cutscenes of Terminator: Dark Fate - Defiance," and "Fixed memory leak of the Strange Brigade launcher."
- **Input:** fixes for controller hotplug, for peripherals that crashed the input stack, and for a prefix corruption that stopped controllers from being detected.
- **Regressions:** fixes for Proton 11 regressions in several games, plus a Proton Experimental regression that affected CEG-protected games.
- **NVIDIA:** support for Streamline over-the-air (OTA) updates.
- **Components:** vkd3d-proton, DXVK, vkd3d, dxvk-nvapi and FEX move to their latest development versions.

Proton Experimental is Valve's testing branch, not the stable Proton release. To use it, select "Proton Experimental" in a game's Compatibility settings in Steam.

## DXVK 3.2

[DXVK v3.2](https://github.com/doitsujin/dxvk/releases) was released November 26. DXVK translates Direct3D 8 to 11 to Vulkan, and Proton uses it.

- **Present timing:** DXVK can now use `VK_EXT_present_timing` for steadier frame pacing when a game runs full screen at a non-native refresh rate, or with DXVK's built-in frame limiter. It needs either a recent Gamescope build, or a Wayland-enabled Proton build on a compositor that supports `commit-timing-v1`. The notes say "Vertical synchronization **must** be enabled for this to work in all cases."
- **NVIDIA Reflex:** the Reflex implementation was rewritten, which fixes some games that were locked to 10 FPS. DXVK recommends NVIDIA driver **620.70.06 or newer**.
- **Memory and display:** VRAM eviction is better on systems with limited VRAM. An updated `libdisplay-info` fixes HDR detection on some devices, and the notes name the **ROG Ally**. Long-standing VR issues that could show stale images are also fixed.
- **AMD on Windows:** `VK_EXT_descriptor_heap` is now disabled on AMD's Windows driver. The notes say this will noticeably reduce CPU-bound performance on RDNA3 and RDNA4 GPUs. You can turn it back on in `dxvk.conf`.
- **Game fixes:** 7 Days to Die, Aniimo, Deadlock, Fallout: New Vegas, Quantum Break, Ridiculous Space Battles, Sid Meier's Pirates! and Supreme Commander: Forged Alliance.

**For Vet's MSI laptop (RTX 3050, Bazzite):** the current Bazzite stable image, [45.20261125](https://github.com/ublue-os/bazzite/releases), ships NVIDIA's open driver **620.73.04**, which is newer than the 620.70.06 that DXVK recommends for the Reflex rewrite. DXVK 3.2 reaches Proton users through Proton builds that bundle it, not through a standalone install.

## Linux Mint 27 "Adrien" beta

The Linux Mint team [announced](https://blog.linuxmint.com/?p=5120) the **Linux Mint 27 "Adrien" beta** on November 27, in Cinnamon, Xfce and MATE editions. Mint 27 is a long-term support release "which will be supported until 2031." The team warns that the beta "might contain critical bugs, please only use it for testing purposes."

According to the [What's new page](https://www.linuxmint.com/rel_adrien_whatsnew.php):

- **Base:** an Ubuntu "Resolute" (26.04 LTS) package base and Linux kernel **7.0**.
- **Cinnamon 6.8:** "Wayland is now fully supported," including 3D acceleration, HiDPI and fractional scaling. The page doesn't say which session is the default, though [GamingOnLinux](https://www.gamingonlinux.com/2026/11/linux-mint-27-beta-brings-full-wayland-support-to-cinnamon/) reports that the beta still defaults to X11.
- **Installer:** the "Live Installer, which is already used in LMDE, replaces Ubiquity."
- **Power:** hibernation is back ("We brought it back"), and a new Sleep Modes page adds hybrid sleep and suspend-then-hibernate.
- **New apps:** Superlight, a system monitor; Clockenstein, a calendar; Velocitty, a terminal; Unfold, an archive manager; and Xepub, an EPUB reader.

The team says upgrades will be supported from the beta to the stable release, and from Linux Mint 22.3. It hasn't given a date for the stable release.

*Sources:* [Valve: Proton changelog](https://github.com/ValveSoftware/Proton/wiki/Changelog), [DXVK v3.2 release](https://github.com/doitsujin/dxvk/releases), [Linux Mint blog: Linux Mint 27 "Adrien" BETA Release](https://blog.linuxmint.com/?p=5120), [Linux Mint: New features in Linux Mint 27](https://www.linuxmint.com/rel_adrien_whatsnew.php), [Bazzite releases](https://github.com/ublue-os/bazzite/releases), [GamingOnLinux: Proton Experimental update](https://www.gamingonlinux.com/2026/11/proton-experimental-updated-with-fixes-for-strange-brigade-fbc-firebreak-terminator-dark-fate-defiance-and-more/), [GamingOnLinux: DXVK 3.2](https://www.gamingonlinux.com/2026/11/dxvk-3-2-brings-improvements-for-frame-pacing-nvidia-reflex-vram-eviction-logic-and-more/), [GamingOnLinux: Linux Mint 27 Beta](https://www.gamingonlinux.com/2026/11/linux-mint-27-beta-brings-full-wayland-support-to-cinnamon/)

*Cover photo: Linux Mint 27 Cinnamon screenshot, by the Linux Mint team, from [linuxmint.com](https://www.linuxmint.com/rel_adrien_whatsnew.php).*
