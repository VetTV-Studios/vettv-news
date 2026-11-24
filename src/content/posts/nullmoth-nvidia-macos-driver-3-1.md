---
title: "NullMoth's NVIDIA macOS Driver 3.1 Fixes the Login and Lock-Screen Crash Loop"
description: "NullMoth published version 3.1 of its third-party NVIDIA Metal driver for macOS on November 23 at 10:36 p.m. CT. The release notes say it stops a login-window and lock-screen crash loop, builds all 312 VFX compute kernels, up from 249 in 3.0, and adds offline-installer and compiler fixes."
summary: "NullMoth published version 3.1 of its third-party NVIDIA Metal driver for macOS on November 23 at 10:36 p.m. CT. The release notes say it stops a login-window and lock-screen crash loop, builds all 312 VFX compute kernels, up from 249 in 3.0, and adds offline-installer and compiler fixes."
pubDate: 2026-11-24
publishedAt: 2026-11-24T09:09:48-06:00
author: "Vet, VetTV Studios"
category: macos
type: news
tags: ["nullmoth", "nvidia", "hackintosh"]
offTopic: true
trending: false
draft: false
cover: "covers/nullmoth-nvidia-macos-driver-3-1.png"
sources:
  - title: "nullmoth/nvidia-macos-driver: v3.1 GitHub release, Nov. 23, 2026, 10:36 p.m. CT"
    url: "https://github.com/nullmoth/nvidia-macos-driver/releases/tag/v3.1"
  - title: "nullmoth/nvidia-macos-driver: CHANGELOG.md, 3.1"
    url: "https://github.com/nullmoth/nvidia-macos-driver/blob/main/CHANGELOG.md"
  - title: "nullmoth/nvidia-macos-driver README"
    url: "https://github.com/nullmoth/nvidia-macos-driver"
  - title: "nullmoth/nvidia-macos-driver: docs/CARD-SUPPORT.md"
    url: "https://github.com/nullmoth/nvidia-macos-driver/blob/main/docs/CARD-SUPPORT.md"
  - title: "VetTV News, Oct. 28, 2026: NVIDIA on macOS Again? NullMoth's Experimental Metal Driver"
    url: "https://news.vettvstudios.com/posts/nvidia-on-macos-nullmoth-driver/"
source: "Article Desk: nullmoth-nvidia-macos-driver-3-1.md"
---
[NullMoth](https://github.com/nullmoth/nvidia-macos-driver) published **version 3.1** of its NVIDIA Metal driver for macOS, and of the 1401 Mac installer, on **November 23 at 10:36 p.m. CT** (November 24, 04:36 UTC on [the GitHub release](https://github.com/nullmoth/nvidia-macos-driver/releases/tag/v3.1)). The [changelog](https://github.com/nullmoth/nvidia-macos-driver/blob/main/CHANGELOG.md) is titled "3.1" and matches the release notes.

This is a **third-party** driver for Intel Macs and OpenCore PCs. It is **not** an official NVIDIA macOS driver. We [first wrote about the project in October](/posts/nvidia-on-macos-nullmoth-driver/).

## The login and lock-screen crash loop

The 3.1 notes lead with a fix for "the lock screen and login window crashing in a loop (SecurityAgent or loginwindow, 'Floating point exception' in VFX," issues #624 and #569). NullMoth's explanation is specific: "the user picture is drawn by VFX, and nine of its ray-tracing kernels could not be built, so VFX divided by the thread count of a pipeline that did not exist."

The shader translator, the notes say, now follows a value a shader keeps in a local structure and reads back in a helper — "VFX keeps its acceleration structure that way" — and handles returns of textures and pointers from helpers. The result claimed in the notes: "**Every compute kernel in VFX now builds (312 of 312; 3.0 built 249 and refused 27)**, and eight VFX fragment shaders that were refused build too."

## Other 3.1 fixes

The same release lists five more fixes:

- **A shader compiler crash.** "The shader compiler stopped with 'Internal compiler error in NAK' on some large kernels: a memory read wider than its alignment reached the last compiler stage. It is split into reads the hardware accepts."
- **A silent failure to start after a failed start.** "The accelerator and the display driver refused to start, without a word, on the second start after a failed one, while the GPU itself was up" (issue #633). "Every driver now gets the same answer from the boot guard for the whole start."
- **Installing with no internet.** The installer "finds NVIDIA's driver package (the GPU firmware's source) in Downloads, on the Desktop, in /Users/Shared, or on a USB stick such as the 1401 stick, and a download that stops is continued instead of restarted" (issues #644 and #639).
- **Installer progress.** The 1401 Mac app "sitting on 'installing' with nothing moving" (issue #598): "the 550 MB NVIDIA package download now prints its progress."
- **A Ryzen laptop power-profile bug.** The profile "never applied" (issues #590 and #631) because "its helper was linked without the identifier macOS 26 requires and was refused at every start."

## What 3.1 does not change

The driver's basic scope is unchanged. The README still describes "a Metal driver for NVIDIA GeForce cards on macOS 15 Sequoia (Intel Macs and OpenCore PCs)," for **macOS 15.5 or later** (tested on 15.7.x and 15.8.1) or **macOS 26 Tahoe**, **x86_64 only**. Supported NVIDIA families remain Turing and newer. The project's [card support page](https://github.com/nullmoth/nvidia-macos-driver/blob/main/docs/CARD-SUPPORT.md) still marks only the **RTX 5060** as validated by automated testing, with the RTX 5070 and 5080 "reported working," and Turing, Ampere, and Ada validation still "Pending."

On laptops whose built-in screen is wired to an Intel or AMD integrated GPU, the picture is more nuanced than a simple "unsupported." In **2.9**, NullMoth added hybrid-laptop support as an **experimental, off-by-default** feature: "render on NVIDIA and present on the integrated GPU's panel (Intel and AMD panel drivers, `nmhybrid`), per-app GPU policy." Version 3.0 notes that the uninstaller "also removes the hybrid laptop panel drivers," which confirms those drivers still ship. The current card-support page, though, still warns that "a laptop also needs a display/output route the NVIDIA card can drive; accepting its PCI ID does not implement an Optimus display mux." We are not treating Intel-wired laptop panels as fully supported, and we are not repeating older "not accelerated" language from early 2.x notes as if it were still the whole story.

The same security tradeoffs we described in October still apply: the README says the driver will not start unless System Integrity Protection is partly relaxed, Apple Secure Boot is disabled, and AMFI checks are bypassed so WindowServer can load the unsigned bundle. We are not republishing install steps.

Those are NullMoth's own release notes and documentation. We have not independently tested 3.1.

*Sources:* [nullmoth/nvidia-macos-driver: v3.1 GitHub release, Nov. 23, 2026, 10:36 p.m. CT](https://github.com/nullmoth/nvidia-macos-driver/releases/tag/v3.1), [nullmoth/nvidia-macos-driver: CHANGELOG.md, 3.1](https://github.com/nullmoth/nvidia-macos-driver/blob/main/CHANGELOG.md), [nullmoth/nvidia-macos-driver README](https://github.com/nullmoth/nvidia-macos-driver), [nullmoth/nvidia-macos-driver: docs/CARD-SUPPORT.md](https://github.com/nullmoth/nvidia-macos-driver/blob/main/docs/CARD-SUPPORT.md), [VetTV News, Oct. 28, 2026: NVIDIA on macOS Again? NullMoth's Experimental Metal Driver](/posts/nvidia-on-macos-nullmoth-driver/)

*Cover image: NullMoth, https://nullmothsystems.com/nvidia*
