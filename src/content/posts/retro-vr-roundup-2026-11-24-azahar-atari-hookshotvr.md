---
title: "Azahar 2127.0 Comes to iPhone, With HookshotVR, VR Forever, and Atari News"
description: "Azahar 2127.0, published November 23, is the 3DS emulator's largest update yet and adds a new interpreter the project says enables full-speed play on iPhone XS and newer. Also in this roundup: HookshotVR, a first-person VR fork of Ocarina of Time; the VR Forever Awards and Steam festival, December 3 to 9; the death of Namco's Koichi Tashiro; the cancellation of the Atari Homebrew Awards after a flood of AI-made entries; and a Costco-exclusive gold GameStation Go."
summary: "Azahar 2127.0, published November 23, is the 3DS emulator's largest update yet and adds a new interpreter the project says enables full-speed play on iPhone XS and newer. Also in this roundup: HookshotVR, a first-person VR fork of Ocarina of Time; the VR Forever Awards and Steam festival, December 3 to 9; the death of Namco's Koichi Tashiro; the cancellation of the Atari Homebrew Awards after a flood of AI-made entries; and a Costco-exclusive gold GameStation Go."
pubDate: 2026-11-24
publishedAt: 2026-11-24T09:03:09-06:00
author: "Vet, VetTV Studios"
category: gaming
type: news
tags: ["azahar", "atari", "vr"]
offTopic: true
trending: false
draft: false
cover: "covers/retro-vr-roundup-2026-11-24-azahar-atari-hookshotvr.png"
sources:
  - title: "azahar-emu/azahar: 2127.0, Nov. 23, 2026, 12:58 p.m. CT"
    url: "https://github.com/azahar-emu/azahar/releases/tag/2127.0"
  - title: "Road to VR, Nov. 24, 2026: This New Mod Turns 'Zelda: Ocarina of Time' Into a First-Person VR Adventure"
    url: "https://roadtovr.com/zelda-ocarina-of-time-remake-vr-hack/"
  - title: "Road to VR, Nov. 23, 2026: VR Forever Awards Return in December Alongside SteamVR Festival"
    url: "https://roadtovr.com/vr-forever-awards-steam-discounts-dec-2026/"
  - title: "Time Extension, Nov. 24, 2026: Namco Arcade Pioneer and Ridge Racer Developer Koichi Tashiro Has Passed Away"
    url: "https://www.timeextension.com/news/2026/11/namco-arcade-pioneer-and-ridge-racer-developer-koichi-tashiro-has-passed-away"
  - title: "Time Extension, Nov. 24, 2026: Atari Homebrew Awards Cancelled Following Flood of AI-Made Games"
    url: "https://www.timeextension.com/news/2026/11/i-saw-no-path-forward-atari-homebrew-awards-cancelled-following-flood-of-ai-made-games"
  - title: "ZeroPage Homebrew (James) on Atari Age: Atari Homebrew Awards Cancelled"
    url: "https://forums.atariage.com/topic/394894-atari-homebrew-awards-cancelled/"
  - title: "Time Extension, Nov. 24, 2026: Atari Celebrates 55th Anniversary with Costco-Exclusive Gold GameStation Go"
    url: "https://www.timeextension.com/news/2026/11/atari-celebrates-55th-anniversary-with-costco-exclusive-gold-gamestation-go"
source: "Article Desk: retro-vr-roundup-2026-11-24-azahar-atari-hookshotvr.md"
---
A busy day for retro and VR: a major 3DS emulator release with iOS support, a VR fork of *The Legend of Zelda: Ocarina of Time*, a SteamVR festival next month, and several Atari-related stories, including an obituary.

## Azahar 2127.0

The 3DS emulator team published [Azahar 2127.0](https://github.com/azahar-emu/azahar/releases/tag/2127.0) on **November 23 at 12:58 p.m. CT** (18:58 UTC). The project calls it "arguably the single largest update we have ever published."

The headline change is a new JIT-less interpreter, **FastInterp**, which replaces DynCom. The project says this "allows greatly improved performance on iOS and tvOS devices, allowing devices as old as the iPhone XS to use the emulator, even with playback speeds of over 200%." **That full-speed and "over 200%" language is the project's own claim**; we have not benchmarked it. macOS (arm64, x86_64, and universal) and libretro iOS, tvOS, and macOS builds are also in the release assets.

Other changes listed in the notes:

- **ROM Bundles** (`.bcxi`, `.bcci`, `.bcia`) that can store a base game plus updates, DLC, or needed system files in one file, including for RetroArch/libretro.
- **Android:** per-game settings (long-press a game in the list), ADPF performance hints (the project reports about a 15% gain on a Mali device), and custom GPU drivers allowed on non-Adreno devices.
- A fix for a long-standing death-animation glitch in Shin Megami Tensei IV.
- A **license change from GPLv2+ to GPLv3+**. The project says downstream projects exposed to its source must follow the new terms.

The release invalidates existing shader caches, so the notes warn that performance may be slower for a while after updating from 2126.2 or earlier.

## HookshotVR: Ocarina of Time in VR

[Road to VR](https://roadtovr.com/zelda-ocarina-of-time-remake-vr-hack/), writing November 24, reports on **HookshotVR**, a VR fork by SqueezyLemonade of Hookshot, an open-source static recompilation of *The Legend of Zelda: Ocarina of Time*. The fork adds first-person play, tracked motion controls, item interaction, and a wrist HUD. It is **OpenXR**-based, so Road to VR says it works with SteamVR, Quest, and other PC VR headsets.

Version **1.0.2** is still described as alpha. The author tested it on Linux with an RTX 4070 and a Quest 3 over WiVRn; Road to VR says the Windows build has so far only been run under Wine. You need your own legally obtained copy of the game.

## VR Forever, December 3 to 9

[Road to VR](https://roadtovr.com/vr-forever-awards-steam-discounts-dec-2026/), writing November 23, says the **VR Forever Awards** return for a second year alongside a Steam festival from **December 3 to December 9**. The festival is hosting "over 220 games from nearly 150 developers," with demos and discounts that the story says include Half-Life: Alyx, Gorilla Tag, and Walkabout Mini Golf.

Winners are to be announced on **December 3**. Nominees cited by Road to VR include Forefront (Game of the Year), Thief VR: Legacy of Shadow (Single Player), and Teenage Mutant Ninja Turtles: Empire City (Multiplayer). The awards are run by **Creature** and **Future Friends Games**, not Valve.

## Koichi Tashiro

[Time Extension](https://www.timeextension.com/news/2026/11/namco-arcade-pioneer-and-ridge-racer-developer-koichi-tashiro-has-passed-away), writing November 24, reports that **Koichi Tashiro**, a Namco engineer and the development lead on **Ridge Racer (1993)**, has died. The site says the news was communicated to VGDensetsu by a former Namco colleague, and that Tashiro was born in Tokyo in **1954** and joined Namco in **1978**.

Time Extension's account of his work includes Galaxian, Rally-X, Pole Position and Pole Position II, Final Lap, and leading the Ridge Racer team. We are relying on that report and have not independently confirmed the date or circumstances of his death. Our condolences to his family, friends, and colleagues.

## Atari Homebrew Awards cancelled

[Time Extension](https://www.timeextension.com/news/2026/11/i-saw-no-path-forward-atari-homebrew-awards-cancelled-following-flood-of-ai-made-games) also reports that the **9th Annual Atari Homebrew Awards** will not take place. Organizer James, known as ZeroPage Homebrew, wrote on the [Atari Age forum](https://forums.atariage.com/topic/394894-atari-homebrew-awards-cancelled/) that a flood of AI-coded and AI-assisted entries left no workable way to judge the contest. Time Extension quotes him: "I saw no path forward and made the difficult decision to suspend the Atari Homebrew Awards this year." He said a full AI ban, full inclusion, or a cutoff all looked unworkable, and that he hopes to continue the tradition in coming years.

## Atari's gold GameStation Go

Separately, [Time Extension](https://www.timeextension.com/news/2026/11/atari-celebrates-55th-anniversary-with-costco-exclusive-gold-gamestation-go) reports a limited gold edition of Atari's **GameStation Go** for the company's **55th anniversary**. It is described as a Costco exclusive in the United States, sold online to members only, bundled with a matching gold gamepad and carrying case, and pre-loaded with more than 200 games. Costco hides the price behind a member login. **Time Extension says it was "reliably informed that it retails for $199.99 USD."** We have not independently confirmed that price.

*Sources:* [azahar-emu/azahar: 2127.0, Nov. 23, 2026, 12:58 p.m. CT](https://github.com/azahar-emu/azahar/releases/tag/2127.0), [Road to VR, Nov. 24, 2026: This New Mod Turns 'Zelda: Ocarina of Time' Into a First-Person VR Adventure](https://roadtovr.com/zelda-ocarina-of-time-remake-vr-hack/), [Road to VR, Nov. 23, 2026: VR Forever Awards Return in December Alongside SteamVR Festival](https://roadtovr.com/vr-forever-awards-steam-discounts-dec-2026/), [Time Extension, Nov. 24, 2026: Namco Arcade Pioneer and Ridge Racer Developer Koichi Tashiro Has Passed Away](https://www.timeextension.com/news/2026/11/namco-arcade-pioneer-and-ridge-racer-developer-koichi-tashiro-has-passed-away), [Time Extension, Nov. 24, 2026: Atari Homebrew Awards Cancelled Following Flood of AI-Made Games](https://www.timeextension.com/news/2026/11/i-saw-no-path-forward-atari-homebrew-awards-cancelled-following-flood-of-ai-made-games), [ZeroPage Homebrew (James) on Atari Age: Atari Homebrew Awards Cancelled](https://forums.atariage.com/topic/394894-atari-homebrew-awards-cancelled/), [Time Extension, Nov. 24, 2026: Atari Celebrates 55th Anniversary with Costco-Exclusive Gold GameStation Go](https://www.timeextension.com/news/2026/11/atari-celebrates-55th-anniversary-with-costco-exclusive-gold-gamestation-go)

*Cover:* Original typographic artwork by VetTV News. No third-party photos, screenshots, or leaked images were used.
