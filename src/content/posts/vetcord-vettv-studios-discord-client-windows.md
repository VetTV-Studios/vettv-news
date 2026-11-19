---
title: "VetTV Studios Releases VetCord, an Open-Source Discord Client for Windows"
description: "The MIT-licensed v0.3.0 Windows app wraps Discord's official web client in a Rust and Tauri/WebView2 shell, with a local replay-buffer clipper and beta RTMP multistreaming. VetTV News is part of VetTV Studios, which built the app."
summary: "The MIT-licensed v0.3.0 Windows app wraps Discord's official web client in a Rust and Tauri/WebView2 shell, with a local replay-buffer clipper and beta RTMP multistreaming. VetTV News is part of VetTV Studios, which built the app."
pubDate: 2026-11-18
publishedAt: 2026-11-18T20:32:22-06:00
author: "Vet, VetTV Studios"
category: tech
type: news
tags: ["vetcord", "discord", "windows"]
offTopic: true
trending: false
draft: false
cover: "covers/vetcord-vettv-studios-discord-client-windows.png"
sources:
  - title: "VetCord v0.3.0 GitHub release, Nov. 18, 2026"
    url: "https://github.com/VetTV-Studios/VetCord/releases/tag/v0.3.0"
  - title: "VetCord README"
    url: "https://github.com/VetTV-Studios/VetCord/blob/master/README.md"
  - title: "VetCord LICENSE (MIT)"
    url: "https://github.com/VetTV-Studios/VetCord/blob/master/LICENSE"
  - title: "VetTV Studios Projects: VetCord"
    url: "https://www.vettvstudios.com/projects#vetcord"
  - title: "Discord Terms of Service"
    url: "https://discord.com/terms/"
  - title: "Discord Platform Manipulation Policy Explainer, March 15, 2024"
    url: "https://discord.com/safety/platform-manipulation-policy-explainer"
source: "Article Desk: vetcord-vettv-studios-discord-client-windows.md"
---
VetTV Studios [published](https://github.com/VetTV-Studios/VetCord/releases/tag/v0.3.0) VetCord v0.3.0 on November 18, 2026, at 8:07 p.m. CT, a free, MIT-licensed Discord desktop client for Windows. The installer posted with the release is `VetCord_0.3.0_x64-setup.exe`. VetTV News is part of VetTV Studios, which built VetCord. Discord did not endorse the app and is not affiliated with it.

The project's [README](https://github.com/VetTV-Studios/VetCord/blob/master/README.md) describes VetCord as a lightweight, open-source client written in Rust. It works like [Vesktop](https://github.com/Vencord/Vesktop): it loads Discord's official web client (`https://discord.com/app`) inside a native WebView2 window provided by [Tauri](https://tauri.app/). Users "sign in on Discord's own login page, with your official account," the README says, and get their "real servers, DMs, communities, voice and screen share — because it *is* Discord's web client, minus the Electron shell around it."

The README also says VetCord "never sees, stores, or transmits your password or token," and that login cookies "live in WebView2's own profile storage, exactly as in a browser." It says the app has "no VetCord telemetry, analytics, or accounts," "no added AI features," and that navigation is "restricted to Discord domains." Those are the project's descriptions of its own design; this article is not a security audit.

## Discord's terms

Third-party Discord clients and client modifications are against Discord's rules. The README tells people to use VetCord "at your own risk" and says VetCord "cannot guarantee an account will never be flagged."

Discord's [Terms of Service](https://discord.com/terms/), in a list of restrictions under the heading "Don't use the services to do harm to Discord," includes "using any unauthorized software designed to modify the services." Discord's [Platform Manipulation Policy Explainer](https://discord.com/safety/platform-manipulation-policy-explainer), dated March 15, 2024, says: "Making modifications to the Discord client for the purpose of spam or any other reason is not allowed under this policy." In a list titled "How to Avoid Violating These Policies," it also says: "Don't modify the Discord client for any reason — including automating account actions or altering the appearance or layout of Discord."

VetCord can inject a stylesheet that hides Nitro upsells, gift buttons and shop prompts. The README says that hiding is toggleable in Settings. Changing the client's appearance is the kind of modification Discord's policy describes.

## Clipping, streaming and feedback

The README describes a local rolling replay buffer that uses ffmpeg and 5-second segments, kept to a chosen length between 15 and 600 seconds, while clipping is enabled. In automatic mode, it "tries GPU capture first (Desktop Duplication API `ddagrab` + NVENC) and falls back to CPU (`gdigrab` + x264) if the GPU path cannot start." A clip can be saved from Settings, the system tray, or a global hotkey, which defaults to Ctrl+Alt+C and is configurable. Clips are written to `%USERPROFILE%\Videos\VetCord\Clips`. Capture can target the whole desktop, a single window, or a "Fullscreen Display" mode that the README says is the path that can see exclusive-fullscreen games. Nothing is uploaded; the recording stays local. Clipping and streaming require ffmpeg. The README and the v0.3.0 release notes recommend installing it with `winget install -e --id Gyan.FFmpeg`.

The [VetTV Studios Projects page](https://www.vettvstudios.com/projects#vetcord) describes "RTMP multistreaming (beta) to X, Rumble, and custom servers, with stream keys encrypted via Windows DPAPI." The README says one ffmpeg process can push the capture to those destinations at once, and that stream keys "are stored encrypted with Windows DPAPI, never in `settings.json`, and shown only masked." The README is explicit that this path has not been proven on live accounts: "end-to-end ingestion against real X/Rumble accounts has not been tested by the author." The project says the ffmpeg command construction and the tee/`onfail=ignore` behavior "are covered by unit tests and were exercised locally."

For streaming inside Discord itself, the README says Discord "has no RTMP/stream-key ingest for user accounts," so screen sharing in a server uses Discord's own Share Your Screen / Go Live button in a voice channel, "exactly as in the official client."

Settings also includes a suggestion form that is saved locally as `suggestions.jsonl` in the app data folder — "VetCord has no backend server," the README says — plus a link to the repository's [GitHub Issues](https://github.com/VetTV-Studios/VetCord/issues) page.

The v0.3.0 notes describe the installer as a per-user install that does not need administrator rights. The project's [LICENSE](https://github.com/VetTV-Studios/VetCord/blob/master/LICENSE) is the MIT License, copyright 2026 VetCord contributors. VetCord is listed on the [VetTV Studios Projects page](https://www.vettvstudios.com/projects#vetcord). The public repository is [github.com/VetTV-Studios/VetCord](https://github.com/VetTV-Studios/VetCord).

*Sources:* [VetCord v0.3.0 GitHub release, Nov. 18, 2026](https://github.com/VetTV-Studios/VetCord/releases/tag/v0.3.0), [VetCord README](https://github.com/VetTV-Studios/VetCord/blob/master/README.md), [VetCord LICENSE (MIT)](https://github.com/VetTV-Studios/VetCord/blob/master/LICENSE), [VetTV Studios Projects: VetCord](https://www.vettvstudios.com/projects#vetcord), [Discord Terms of Service](https://discord.com/terms/), [Discord Platform Manipulation Policy Explainer, March 15, 2024](https://discord.com/safety/platform-manipulation-policy-explainer)

*Cover:* Photo by Pew Nguyen on [Pexels](https://www.pexels.com/photo/a-computer-setup-on-a-wooden-desk-12786595/), used under the [Pexels License](https://www.pexels.com/license/). Typography overlay by VetTV News. VetCord app icon from the [VetCord repository](https://github.com/VetTV-Studios/VetCord/blob/master/src-tauri/icons/icon.png) (VetTV Studios).
