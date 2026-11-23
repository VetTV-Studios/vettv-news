---
title: "GE-Proton11-13 Adds Bluetooth DualSense Haptics, PipeWire Audio and a Built-In MIDI Synth"
description: "The new community Proton build presents Bluetooth Sony pads as wired controllers with haptics and audio, adds opt-in PipeWire audio and a FluidSynth MIDI synth, and fixes Wayland, HDR and video playback across a long list of games"
summary: "The new community Proton build presents Bluetooth Sony pads as wired controllers with haptics and audio, adds opt-in PipeWire audio and a FluidSynth MIDI synth, and fixes Wayland, HDR and video playback across a long list of games"
pubDate: 2026-11-22
publishedAt: 2026-11-22T21:32:39-06:00
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["ge-proton", "proton", "linux-gaming"]
offTopic: true
trending: false
draft: false
cover: "covers/ge-proton11-13-release.png"
sources:
  - title: "GitHub: GE-Proton11-13 release notes"
    url: "https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton11-13"
source: "Article Desk: ge-proton11-13-release.md"
---
GloriousEggroll published GE-Proton11-13 on November 23 UTC (the evening of November 22 in the US). GE-Proton is the community build of Valve's Proton compatibility layer, with extra patches and fixes for running Windows games on Linux. This is our summary of the official GitHub release notes; the full changelog is longer. It follows [GE-Proton11-12](/posts/ge-proton11-12-release/) from November 3.

## Component updates

- **Wine:** moved to a Proton Experimental bleeding-edge snapshot dated November 21, which also brings upstream work such as Steam networking signaling wrappers, VR texture and mailbox handling, and built-in game settings for MONOMOON, Warhammer 40,000: Darktide and One Piece Pirate Warriors 3.
- **Graphics stack:** newer DXVK, VKD3D-Proton, DXVK-NVAPI and upstream vkd3d builds.
- **Around the edges:** FEX (for running x86 games on ARM), the OpenXR SDK at 1.1.63 and Xalia at 0.5.1 all move up. Two new submodules land for Bluetooth audio codecs and Piper text-to-speech, and Piper now uses Valve's hosted onnxruntime, so an older workaround could be dropped.

## Controllers: Bluetooth Sony pads act wired

The headline change for gamepad users is on Sony controllers over Bluetooth:

- **DualSense and DualSense Edge** can now be presented to games as wired USB controllers by default when Steam Input is off for that game (`PROTON_DUALSENSE_BT_AS_USB`). HD haptics and the controller speaker work over Bluetooth (`PROTON_DUALSENSE_BT_HAPTICS`), with output reports batched to stay within Bluetooth limits. The notes say haptics and speaker audio were confirmed working in several games.
- **DualShock 4** gets the same treatment (`PROTON_DUALSHOCK4_BT_AS_USB`), including its speaker and headset microphone (`PROTON_DUALSHOCK4_BT_AUDIO`).
- **Game-specific fixes:** Punishing: Gray Raven now shows Sony button prompts with correct mappings when Steam Input is off, FlatOut 2 no longer freezes on startup, and Le Mans Ultimate finds racing wheels again after a reconnect.

## Wayland, windowing and HDR

- **Battle.net and other Chromium-based launchers** on Wine-Wayland should no longer trip NVIDIA Xid GPU faults, and the classic GTA III, Vice City and San Andreas no longer look minimized during their intro videos.
- **Battlefield 4** stops crashing on alt-tab or when applying graphics settings with server-side decorations, which now also work with xdg-decoration v1.
- Smaller annoyances fixed include Balatro's pointer jumping to the corner, Enemy Territory: Quake Wars crashing at startup, and `PROTON_NO_XIM=1` working again so games receive every key press.
- **HDR on Wayland** changes default: the native HDR colorspace is now opt-in with `WINE_WAYLAND_HDR_NATIVE=1`, with the Windows image descriptions restored as the default to avoid KWin crashes on some drivers. A new `VK_LAYER_GE_hdr_colorspace` layer corrects Steam overlay and MangoHud colors in Windows HDR mode.
- **Rendering extras:** Arc Raiders gets a crash fix for unfocused windows during level loads, Assetto Corsa Rally's triple-screen mode works, `PROTON_STREAMLINE_UPGRADE` can now load Streamline plugins a game doesn't ship (the notes cite STAR WARS Jedi: Survivor frame generation), and `PROTON_ENABLE_NGX_UPDATER` lets newer NVIDIA drivers supply updated DLSS versions.

## Video playback

Cutscene fixes are a big chunk of this release. Daemonica's corrupted WMV intros are fixed, Angel Wish no longer hangs at the logos, Metro Awakening no longer hangs after its intro movies, and games using NAudio for MP3 playback stop failing on the first sample. The notes also list movie-playback fixes for Veggie Blast, Big Foot Crush, Burning Striker, Gunslinger Stratos 2, Hatsune Miku Project DIVA Arcade, KanColle Arcade and Pokken Tournament, among others. One caution straight from the notes: the Phantom Blade Zero cutscene workaround has not yet been run-tested on GE's decoder.

## New options worth knowing

- **PipeWire audio (opt-in):** `PROTON_USE_PIPEWIRE=1` or `PROTON_ENABLE_PIPEWIRE=1` enables a new winepipewire driver (by M0n7y5, from CachyOS) with audio-device hotplug and routing for USB and Bluetooth Sony controller audio.
- **Built-in MIDI synth:** games that expect a MIDI synth, such as RPG Maker titles, get FluidSynth with a bundled GeneralUser GS sound font. Turn it off with `PROTON_NO_MIDI_SYNTH` or point `PROTON_MIDI_SOUNDFONT` at your own font.
- **Ubisoft Connect** now closes when the game exits, so Steam stops showing the game as running. Set `PROTON_KEEP_UBISOFT_LAUNCHER` if you want it to stay open.
- **Stutter fixes:** Battlefield 4's PunkBuster scans no longer stall the game every few seconds, and The Witcher 3 gets a stutter fix via cached connectivity checks.
- **Protonfixes:** new entries for Wolfenstein: The New Order and The Old Blood, Cry of Fear, Kabounce and ElonaPlus, plus umu database and Steam VDF parsing improvements.

## Getting it

Downloads are on the release page as `GE-Proton11-13-x86_64.tar.gz` and an `aarch64` build, each with a `.sha512sum` file. As usual, extract the tarball into Steam's `compatibilitytools.d` folder, restart Steam, and pick GE-Proton11-13 per game or as the global default under Compatibility settings. GE-Proton is a community project, not an official Valve release, so keep the previous build around if a favorite game regresses.
