---
title: "Discord Details a Year of Linux Upgrades, With Per-App Audio Still Coming"
description: "In a November 12 post, Discord describes a sudo-free updater, Wayland screenshare with hardware encoding, Steam Deck Go Live, and global push-to-talk. Per-app audio sharing is still being built with Igalia."
summary: "In a November 12 post, Discord describes a sudo-free updater, Wayland screenshare with hardware encoding, Steam Deck Go Live, and global push-to-talk. Per-app audio sharing is still being built with Igalia."
pubDate: 2026-11-13
publishedAt: 2026-11-13T14:55:26-06:00
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["discord", "linux", "steam-deck"]
offTopic: true
trending: false
draft: false
cover: "covers/discord-linux-a-year-of-upgrades.png"
sources:
  - title: "Discord blog: Discord <3 Linux: A Year of Upgrades, Nov. 12, 2026"
    url: "https://discord.com/blog/discord-linux-a-year-of-upgrades"
  - title: "GamingOnLinux, Nov. 13, 2026"
    url: "https://www.gamingonlinux.com/2026/11/discord-go-into-more-detail-on-their-linux-upgrades-with-more-to-come/"
source: "Article Desk: discord-linux-a-year-of-upgrades.md"
---
Discord published ["Discord <3 Linux: A Year of Upgrades"](https://discord.com/blog/discord-linux-a-year-of-upgrades) on November 12, under Josh Stratton's byline. The post walks through a new Linux updater, Wayland screenshare and hardware encoding, Steam Deck Go Live, and global push-to-talk, and it says per-app audio sharing is still being built. [GamingOnLinux covered](https://www.gamingonlinux.com/2026/11/discord-go-into-more-detail-on-their-linux-upgrades-with-more-to-come/) the post on November 13 at 1:20 p.m. UTC (7:20 a.m. CT).

## Updates without sudo

Stratton writes that Linux users used to download and install a fresh package whenever Discord wanted an update, including into paths like `/usr/bin` that need root, and that immutable systems such as SteamOS and Bazzite further complicate that model. Discord's answer, the post says, is "a new Rust-based updater that installs like a normal package, but installs the updates in a writable location."

"The .deb, .rpm, Arch package, and tarball are now a small bootstrapper that installs Discord into your home directory. After that, Discord updates itself, no sudo required," the post says. Updates "arrive as binary diffs (using bsdiff)," decompression is "multithreaded," and Discord "measured that delta updates on Linux are, on average, about 23% faster." The download page now also offers `.rpm` and `.pkg.tar.zst` alongside `.deb` and `.tar.gz`. Those speed and packaging claims are Discord's.

## Wayland, hardware encoding, and Steam Deck

Discord says it worked with [Igalia](https://www.igalia.com/) on screenshare. Once the user grants permission through the system dialog, "Discord receives access to a PipeWire stream," then "submits the captured frames for hardware encoding through VA-API on supported Intel and AMD GPUs, or NVENC on supported Nvidia GPUs." The post says Wayland screenshare "is enabled for GNOME, KDE, gamescope, and other compositors," and that "Go Live works in both Game Mode (gamescope) and Desktop Mode" on Steam Deck.

It also says global keybinds now work on Wayland through the GlobalShortcuts API, with Discord adapting to desktop-specific shortcut dialects, "so features like push-to-talk work on Linux, even when Discord isn't focused."

## What's still missing

"We've covered a lot of Linux improvements, but there's more to do before we reach parity with the other desktop platforms," the post says. Discord uses xdg-desktop-portal for screenshare, "but that doesn't provide a handle to capture app audio," so users "have to choose between sharing audio for their whole desktop or sharing no audio at all." Discord says it has "once again teamed up with Igalia to implement per-app audio sharing in xdg-desktop-portal" and is implementing it on GNOME and KDE "to get it to users faster." It does not give a release date.
