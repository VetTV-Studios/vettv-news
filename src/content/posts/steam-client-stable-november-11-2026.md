---
title: "Valve's November 11 Steam Client Update Ships a 64-Bit Linux Client"
description: "The post, published at 3:57 p.m. CT on November 11, also adds Achievement Sets, Deck average framerate in Hardware Compatibility, a Remote Play HDR rework, and GameInput v4."
summary: "The post, published at 3:57 p.m. CT on November 11, also adds Achievement Sets, Deck average framerate in Hardware Compatibility, a Remote Play HDR rework, and GameInput v4."
pubDate: 2026-11-12
publishedAt: 2026-11-12T09:10:57-06:00
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["steam", "linux", "steamos"]
offTopic: true
trending: false
draft: false
cover: "covers/steam-client-stable-november-11-2026.png"
sources:
  - title: "Steam Client Update: November 11th"
    url: "https://store.steampowered.com/news/app/1675200/view/687522235410284741"
  - title: "GamingOnLinux"
    url: "https://www.gamingonlinux.com/2026/11/steam-update-for-november-11-brings-a-64bit-linux-client-steam-achievement-sets-and-more/"
  - title: "Steam Deck HQ"
    url: "https://steamdeckhq.com/news/steam-deck-client-update-steam-achievement-sets/"
source: "Article Desk: steam-client-stable-november-11-2026.md"
---
Valve published [Steam Client Update: November 11th](https://store.steampowered.com/news/app/1675200/view/687522235410284741) on the Steam client news channel at **3:57 p.m. CT on November 11**. The notes cover Windows, macOS, and Linux, with a dedicated Linux section for the new client package.

## Linux client

Valve writes that **the Steam client is now a 64-bit application** and that **the Steam client now runs inside a Steam Runtime container**. "This will help the Steam client provide a more consistent experience across multiple distributions," the post says. "This is the same technology used by Steam games."

The same Linux list restyles the Steam updater UI, fixes a case where the updater UI failed to show for some users, fixes a crash when resuming from suspend, and fixes a crash when creating a lobby in games that use the ISteamNetworking interface, citing Sons of the Forest as an example.

Valve's November 11 notes are silent on whether 32-bit host libraries are still required. [GamingOnLinux](https://www.gamingonlinux.com/2026/11/steam-update-for-november-11-brings-a-64bit-linux-client-steam-achievement-sets-and-more/) writes that users will still need 32-bit dependencies.

## Achievement Sets and Hardware Compatibility

**Steam Achievement Sets** are described as a new way to organize, track, and complete a game's achievements. According to Valve:

- Games can now organize and group achievements for base game and DLC content.
- DLC achievements can be added via sets without breaking game completion.
- Completed achievement sets remain completed when new sets are added.
- Achievements and sets can be archived if they are seasonal or can no longer be achieved.
- The Achievements page and achievement summary displays are updated.

The **Hardware Compatibility** dialog now includes the average framerate players get in games on Steam Deck. The prompt to opt in to providing anonymized framerate data is now also shown in the Steam desktop client.

## Remote Play

Valve added a **Display Style** setting "to allow stretching and zooming when the stream is a different aspect ratio than the client display."

The post also describes a "big revamp of HDR support":

- An advanced client setting for HDR, with **Automatic** (enabled when HDR content is enabled), **On** (always on, allowing increased brightness for SDR content), and **Off**.
- A brightness slider in the streaming overlay.
- In addition to HDR in games and on Windows desktop, HDR capture is now supported when using **pipewire** on desktop Linux and when streaming from macOS.
- HDR is enabled again on **Steam Deck OLED**.
- HDR is enabled on Android phones running **Android 15 and newer**, when using the [beta Steam Link app](https://play.google.com/apps/testing/com.valvesoftware.steamlink).

The notes also say streaming starts faster when connecting to a local computer, and they fix the "..." button on the Steam Controller not being passed through to the remote side.

## Steam Input, Frame, firmware, and other fixes

Steam Input **adds support for GameInput v4**. Valve also fixed the **Joystick Power Curve** setting in Gyro to Joystick Camera and Gyro to Joystick Deflection modes. "This setting was not being applied," the post says. "If you have changed this setting in the past, you may notice a change in the response - reset this setting if necessary, before tuning further." Other Input fixes cover NCAA Football 27 configuration at startup and a bug that could bind multiple things on D-pad input in "listen for binding" mode.

Under general fixes, Valve **fixed Steam Frame native-only content showing as installable on Windows**.

**Steam Controller firmware** notes: a fix for an issue where shutting down a controller while docked to the puck could cause it to turn back on, and reduced thumbstick touch sensitivity "to reduce likelihood of early detection of touch."

The rest of the notes include a redesigned notifications settings layout, friends voice-chat volume that now persists between sessions, Big Picture Mode game invites in a dedicated chat widget, startup performance work, and a list of stability and crash fixes. [GamingOnLinux](https://www.gamingonlinux.com/2026/11/steam-update-for-november-11-brings-a-64bit-linux-client-steam-achievement-sets-and-more/) and [Steam Deck HQ](https://steamdeckhq.com/news/steam-deck-client-update-steam-achievement-sets/) also covered the stable update.

*Opinion:* moving the Linux client to 64-bit inside the Steam Runtime is the change that will matter day to day on desktop distros; Achievement Sets and the Remote Play HDR work are the features most people will actually notice.
