---
title: "Dolphin 2609b Hotfix Lands With Adreno and Savestate Hardening"
description: "GitHub tag 2609b is a signed second hotfix for 2609; the changes below come from the 2609a to 2609b commit range, not a third-party changelog."
summary: "GitHub tag 2609b is a signed second hotfix for 2609; the changes below come from the 2609a to 2609b commit range, not a third-party changelog."
pubDate: 2026-11-09
publishedAt: 2026-11-09T11:44:54-06:00
author: "Vet, VetTV Studios"
category: gaming
type: news
tags: ["dolphin", "emulation", "gamecube"]
offTopic: true
trending: false
draft: false
cover: "covers/dolphin-emulator-2609b-hotfix.png"
sources:
  - title: "GitHub tag ref: dolphin-emu/dolphin 2609b"
    url: "https://github.com/dolphin-emu/dolphin/releases/tag/2609b"
  - title: "GitHub compare: 2609a...2609b"
    url: "https://github.com/dolphin-emu/dolphin/compare/2609a...2609b"
source: "Article Desk: dolphin-emulator-2609b-hotfix.md"
---
The Dolphin Emulator project published annotated Git tag **2609b** with the message **"Second hotfix for 2609."** The tag points at commit `3a5b3743` (`ScmRevGen: Bump version to 2609b`). This article uses the GitHub compare range **2609a…2609b** as the primary change list.

## Fixes in the 2609a→2609b commit range

- **Time-zone crash workaround:** revert of an MSVC local-time change (`24f04c3b`), addressing Windows crashes tied to certain Alberta / British Columbia zone labels discussed alongside this hotfix.
- **Vulkan:** fetch `driverVersion` (`7093031c`).
- **Adreno graphics:** work around a TEV zero-input miscompilation that could corrupt colors (`ba77539b`).
- **Desktop UI:** fix a DolphinQt crash from a stale timer event in ToolTipWidget (`5eaaba5a`).
- **Driver: San Francisco:** revert the GameINI patches that limited the game's internal framerate (`254ae341`).
- **Robustness:** bound legacy savestate LZO decompression (`0b8f943a`) and bound FIFO memory updates (`879d19e9`).
- **Graphics mods:** error if the same asset id is reused with a different type (`3c838814`).
- **macOS translations:** store translation files under `CMAKE_CURRENT_BINARY_DIR` during the build (`39e7f11c`).

Those commit subjects are the authoritative notes for this article. Third-party rewrite sites are not used as sources.

## Scope

2609b is a hotfix on the 2609 line, not a new major feature release. The compare range does not, by itself, establish measured FPS gains or a claim that every Adreno device is fixed.
