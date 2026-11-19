---
title: "Steam's November 18 Beta Could Break Your UI Mods"
description: "Valve says nearly all of the client's CSS class names changed in the November 18 beta, so third-party UI mods will need updates. The same build speeds up startup and Remote Play and reworks controller detection."
summary: "Valve says nearly all of the client's CSS class names changed in the November 18 beta, so third-party UI mods will need updates. The same build speeds up startup and Remote Play and reworks controller detection."
pubDate: 2026-11-19
publishedAt: 2026-11-19T08:20:35-06:00
author: "Vet, VetTV Studios"
category: gaming
type: news
tags: ["steam", "steam-client", "steam-input"]
offTopic: true
trending: false
draft: false
cover: "covers/steam-client-beta-november-18-2026-ui-mods.png"
sources:
  - title: "Steam Client Beta group: Steam Client Beta - November 18th, Nov. 18, 2026, 6:57 p.m. CT"
    url: "https://steamcommunity.com/groups/SteamClientBeta/announcements/detail/712292033362921463"
  - title: "Steam Support: Steam Client Beta FAQ"
    url: "https://help.steampowered.com/en/faqs/view/276C-85A0-C531-AFA3"
  - title: "GamingOnLinux, Nov. 19, 2026, 2:44 a.m. CT"
    url: "https://www.gamingonlinux.com/2026/11/steam-client-beta-november-18-gets-even-more-startup-improvements-may-break-some-ui-mods/"
  - title: "Decky Loader on GitHub"
    url: "https://github.com/SteamDeckHomebrew/decky-loader"
source: "Article Desk: steam-client-beta-november-18-2026-ui-mods.md"
---
Valve posted [Steam Client Beta - November 18th](https://steamcommunity.com/groups/SteamClientBeta/announcements/detail/712292033362921463) at 6:57 p.m. CT on November 18, and the last line of the notes is the one to read first if you customize Steam. Because of "an internal build tool change," Valve says, the client "includes a rare change to nearly all CSS class names."

Valve is clear that it does not officially support third-party UI modifications. It says it included the note "so that both authors and users can be aware that updates are needed." [GamingOnLinux](https://www.gamingonlinux.com/2026/11/steam-client-beta-november-18-gets-even-more-startup-improvements-may-break-some-ui-mods/) flagged the same warning in its write-up.

This only applies to people who have opted into the Steam Client Beta. If you are on the stable client, nothing changes for you today.

## What the CSS warning means for mods

Valve does not name any specific mods. **Our inference:** tools that restyle the Steam interface or inject into it, such as Steam skins and plugin loaders like [Decky Loader](https://github.com/SteamDeckHomebrew/decky-loader) on Steam Deck, often target the client's class names, so they are the kind of software this note is aimed at. When we checked the [Decky Loader issue tracker](https://github.com/SteamDeckHomebrew/decky-loader/issues) on the morning of November 19, we did not see a report tied to this beta. That does not mean nothing broke; it means we could not confirm a specific break.

If you depend on a UI mod, the safe move is to stay on, or return to, the stable client until that mod's author ships an update. [Valve's Steam Client Beta FAQ](https://help.steampowered.com/en/faqs/view/276C-85A0-C531-AFA3) shows where the setting lives:

- **Desktop Steam:** Steam → Settings (Preferences on Mac) → Interface → Client Beta Participation.
- **SteamOS (Steam Deck):** Steam button → Settings → System → Beta Participation → System Update Channel.
- **Big Picture Mode:** Settings → System → Beta Participation → Steam Client Update Channel.

Valve's FAQ walks through opting in from those menus. Leaving the beta uses the same drop-down: choose the non-beta option and restart when prompted.

## Faster startup

Valve says the beta gets the UI on screen quickly during startup "so it doesn't feel like 'nothing happened' for a few seconds after launch," and lists further startup performance improvements for some scenarios.

## Remote Play

The [Remote Play changes](https://steamcommunity.com/groups/SteamClientBeta/announcements/detail/712292033362921463) are the biggest list in this build:

- Shorter initial connection time, for both local and remote streams.
- Better resolution matching when "Match Client" is selected in the host's advanced Remote Play settings. Valve says 16:9 clients will generally get 16:9 resolutions, and other modes are chosen to avoid downscaling and fill as much of the screen as possible.
- Hardware H.264 and HEVC encoding on newer Intel GPUs, plus a fix for frame-rate issues when using hardware encoding on Intel GPUs. Valve does not list which Intel GPUs count as "newer."
- A fix for mouse cursor position in some games when streaming from a Steam Deck or Steam Machine.

## Steam Input

Valve says it "completely revamped how controllers are detected" and asks users to report problems. Among the listed fixes and additions:

- Some Xbox controllers no longer show up twice.
- Better detection of Nintendo Switch Pro controllers, and gyro support for third-party Switch Pro controllers. Valve notes that many of those pads don't have gyro hardware and will get no motion controls.
- Support for the Flydigi Vader 5S Pro in Bluetooth mode and the 8BitDo M30 2.4G Gamepad.
- Trigger rumble for the Vader 4 Pro and Vader 5 Pro, and a hot-plug detection fix for the 8BitDo Ultimate 2 Wireless over Bluetooth.
- Rumble for wired Xbox controllers on macOS and improved GameCube adapter support on all platforms.

## Offline mode and Big Picture

Achievement icons and friend, family member and group avatars are now saved to disk so they can appear when you are offline. Big Picture Mode gains a button in chat to reconnect to friends, and Valve says you can now switch to offline mode in Big Picture when you have no internet connection. The notes say this "was previously disabled for Steam Deck/BPM." The build also adds clearer failed-to-load graphics in the Store and Community sections.

## Linux fixes

- Games no longer fail to launch when `~/.steam` symlinks were manually edited by an external tool.
- Library filters such as "VR Games" now find all games.
- Steam notification pop-ups should no longer be clipped in-game.

## Everything else

The beta also adds sorting by achievement rarity, fixes achievement totals after losing access to a game (for example, after a free weekend), fixes spatial-audio game recording on Windows, fixes two on-screen keyboard bugs in Big Picture, and fixes a case where Steam asked you to install SteamVR when it was already installed. The [full notes](https://steamcommunity.com/groups/SteamClientBeta/announcements/detail/712292033362921463) list every change.


*Sources:* [Steam Client Beta group: Steam Client Beta - November 18th, Nov. 18, 2026, 6:57 p.m. CT](https://steamcommunity.com/groups/SteamClientBeta/announcements/detail/712292033362921463), [Steam Support: Steam Client Beta FAQ](https://help.steampowered.com/en/faqs/view/276C-85A0-C531-AFA3), [GamingOnLinux, Nov. 19, 2026, 2:44 a.m. CT](https://www.gamingonlinux.com/2026/11/steam-client-beta-november-18-gets-even-more-startup-improvements-may-break-some-ui-mods/), [Decky Loader on GitHub](https://github.com/SteamDeckHomebrew/decky-loader)

*Cover:* Original typographic artwork by VetTV News. No third-party photos, screenshots, or leaked images were used.
