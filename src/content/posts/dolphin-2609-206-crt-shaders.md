---
title: "Dolphin Dev 2609-206 Adds CRT Shaders; 2609b Ships Linux AppImages"
description: "The official download page lists 2609-206 as adding CRT shaders from Clownacy's PR #12014. The 2609b hotfix also offers official Linux x64 and arm64 AppImages."
summary: "The official download page lists 2609-206 as adding CRT shaders from Clownacy's PR #12014. The 2609b hotfix also offers official Linux x64 and arm64 AppImages."
pubDate: 2026-11-12
publishedAt: 2026-11-12T09:10:57-06:00
author: "Vet, VetTV Studios"
category: gaming
type: news
tags: ["dolphin", "emulation", "gamecube"]
offTopic: true
trending: false
draft: false
cover: "covers/dolphin-2609-206-crt-shaders.png"
sources:
  - title: "Dolphin Emulator downloads"
    url: "https://dolphin-emu.org/download/"
  - title: "GitHub PR #12014: Add CRT shaders"
    url: "https://github.com/dolphin-emu/dolphin/pull/12014"
source: "Article Desk: dolphin-2609-206-crt-shaders.md"
---
The official [Dolphin download page](https://dolphin-emu.org/download/) now lists development build **2609-206** with the note **"Add CRT shaders (PR #12014 from Clownacy)."** The same row offers Windows x64 and arm64, macOS (ARM/Intel Universal), Android, Linux x86_64 and aarch64 Flatpaks, and **Linux x64 and arm64 AppImages**.

[Pull request #12014](https://github.com/dolphin-emu/dolphin/pull/12014), titled "Add CRT shaders" and authored by Clownacy, is marked **merged**. GitHub records the merge at **2026-11-11T20:08:28Z**, which is **2:08 p.m. CT on November 11**. The merge commit is `db2afcbdf8f5175a6b8414d9f5e21c978775f651`.

The pull request describes ports of two RetroArch shaders, **crt-pi** and **crt-lottes-fast**, chosen as single-pass shaders that can run inside Dolphin's current framework. The author writes that various settings are exposed through Dolphin's configuration API, and that both shaders ran with every backend tested: OpenGL, Vulkan, Direct3D 11, and Direct3D 12. Those backend results are the author's testing notes in the pull request, not a separate Dolphin progress report.

## 2609b Linux AppImages

On the same official download page, the **2609b** release ("Second hotfix for 2609") lists **Linux x64 (AppImage)** and **Linux arm64 (AppImage)** alongside the existing Flatpak builds. The 2609 and 2609a release rows on that page list Flatpaks but not AppImages.

*Opinion:* shipping crt-pi and crt-lottes-fast in an official dev build is the convenience win; people who already dropped custom shaders into the user folder will care less than first-time testers.
