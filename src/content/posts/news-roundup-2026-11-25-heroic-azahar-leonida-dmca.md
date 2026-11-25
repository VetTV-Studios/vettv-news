---
title: "Heroic 3.0.0 Beta Adds Steam and itch.io, Azahar Ships a macOS Fix, and Take-Two Takes Down Leonida"
description: "Heroic's first 3.0 beta, posted November 24 at 5:54 p.m. CT, rebuilds the UI and adds Steam and itch.io beside Epic, GOG, and Amazon. The same day, Azahar 2127.0.1 fixed a universal macOS launch bug on Apple Silicon, and GitHub processed a Take-Two DMCA notice against the Leonida GTA VI recompilation project and a network of 3,007 repositories."
summary: "Heroic's first 3.0 beta, posted November 24 at 5:54 p.m. CT, rebuilds the UI and adds Steam and itch.io beside Epic, GOG, and Amazon. The same day, Azahar 2127.0.1 fixed a universal macOS launch bug on Apple Silicon, and GitHub processed a Take-Two DMCA notice against the Leonida GTA VI recompilation project and a network of 3,007 repositories."
pubDate: 2026-11-25
publishedAt: 2026-11-25T13:48:12-06:00
author: "Vet, VetTV Studios"
category: gaming
type: news
tags: ["heroic","azahar","gta-vi"]
offTopic: true
trending: false
draft: false
cover: "covers/news-roundup-2026-11-25-heroic-azahar-leonida-dmca.png"
sources:
  - title: "Heroic Games Launcher: Heroic 3.0.0 Beta #1, published Nov. 24, 2026, 5:54 p.m. CT"
    url: "https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/tag/v3.0.0-beta.1"
  - title: "GamingOnLinux, Nov. 25, 2026, 2:27 a.m. CT: Heroic 3.0.0 Beta #1 brings Steam and itch.io integration, a new UI and much more"
    url: "https://www.gamingonlinux.com/2026/11/heroic-3-0-0-beta-1-brings-steam-and-itch-io-integration-a-new-ui-and-much-more/"
  - title: "Azahar 2127.0.1, published Nov. 24, 2026, 4:55 p.m. CT"
    url: "https://github.com/azahar-emu/azahar/releases/tag/2127.0.1"
  - title: "VetTV News: Azahar 2127.0 Comes to iPhone, With HookshotVR, VR Forever, and Atari News"
    url: "https://news.vettvstudios.com/posts/retro-vr-roundup-2026-11-24-azahar-atari-hookshotvr/"
  - title: "GitHub DMCA: Take-Two notice processed against a network of 3,007 repositories, Nov. 24, 2026"
    url: "https://github.com/github/dmca/blob/master/2026/11/2026-11-24-take-two.md"
  - title: "The Verge, Nov. 24, 2026, 3:39 p.m. CT: GTA VI PC recompilation project shut down by Take-Two"
    url: "https://www.theverge.com/news/1041690/grand-theft-auto-6-pc-recompilation-project-leonida-takedown-take-two"
  - title: "VetTV News: Unverified Report: A Leaker Says the GTA VI Xbox Executable Has Been Released"
    url: "https://news.vettvstudios.com/posts/gta-vi-xbox-exe-leak-unverified/"
source: "Article Desk: news-roundup-2026-11-25-heroic-azahar-leonida-dmca.md"
---

Three separate items from November 24, each verified against a primary source.

## Heroic 3.0.0 Beta 1

[Heroic Games Launcher](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/tag/v3.0.0-beta.1) published **Heroic 3.0.0 Beta #1** at **5:54 p.m. CT on November 24** (`2026-11-24T23:54:07Z`). The project called it "the first Beta for Heroic 3.0 and for sure the biggest release we ever made," with "a completely new UI, two new stores and a lot of other stuff we wanted to do for a long time."

The new design is from Heroic's original designer, @biliesilva, who the notes say spent months rebuilding the library, game page, settings, modals, and smaller details. The release also adds new themes, a settings search bar, a new download manager, and a new Add Game dialog with auto-detection for executables. Gamepad navigation was updated, with a dedicated Gamepad tab for button mapping and controller battery (Linux-only for now).

**Steam** arrives through Aurelia, a helper by @Drackrath. The Steam client has to be installed, and "some games, including Valve ones like Half-Life 2, will not start yet." **itch.io** uses the official Butler binary; "on Linux we decided to only support Windows games through Wine/Proton for now." Those sit alongside Epic, GOG, and Amazon.

Cloud saves gain path checks, backup on every sync, and a restore option. A new Backup System and Wizard can back up logins, settings, and game settings, check missing paths, and help convert from Flatpak to other installs.

The project is clear that this is a beta: "bugs are expected. Update only if you are fine with that, and create a backup with the Wizard before testing on your main install." Stable is still **2.22.4**. Known issues listed in the notes include Steam games that will not start, anti-cheat games that "probably won't work," no native Linux itch.io games yet, and console mode that "still needs some polish for the new UI."

[GamingOnLinux](https://www.gamingonlinux.com/2026/11/heroic-3-0-0-beta-1-brings-steam-and-itch-io-integration-a-new-ui-and-much-more/) covered the release at 2:27 a.m. CT on November 25.

## Azahar 2127.0.1

Azahar published [2127.0.1](https://github.com/azahar-emu/azahar/releases/tag/2127.0.1) at **4:55 p.m. CT on November 24**, a hotfix for [2127.0](/posts/retro-vr-roundup-2026-11-24-azahar-atari-hookshotvr/), which the project had called its largest update.

The notes say the amendment fixes two issues found after release:

- Desktop: "ROMs with certain file extensions would sometimes not be recognized correctly as valid 3DS ROMs" in certain parts of the user interface (`#2864`)
- macOS: the universal macOS build failed to launch on ARM64 / Apple Silicon "due to missing libraries" (`#2867`)

"Users on desktop platforms (Windows, macOS, Linux) are encouraged to update." The 2127.0 note that shader caches from 2126.2 or earlier are invalidated still applies; the hotfix does not add a new cache-break of its own.

## Take-Two's DMCA against Leonida

On November 24, GitHub published a [DMCA notice](https://github.com/github/dmca/blob/master/2026/11/2026-11-24-take-two.md) from Take-Two Interactive Software, Inc., the parent company of Rockstar Games, targeting the **ItsNotRexed/Leonida** repository. Take-Two's notice said the project and "the 2900+ forks attached to it" infringed its copyright in Grand Theft Auto VI. GitHub's processing note says that because the reported network was larger than 100 repositories, it "processed the takedown notice against the entire network of **3,007** repositories."

[The Verge](https://www.theverge.com/news/1041690/grand-theft-auto-6-pc-recompilation-project-leonida-takedown-take-two), in a November 24 article by Tom Warren posted at 3:39 p.m. CT, reported that Leonida, "a fan project by 15-year-old "NotRexed,"" vanished after that notice. The project was designed to translate a leaked GTA VI Xbox build to run natively on Windows. We [previously covered](/posts/gta-vi-xbox-exe-leak-unverified/) an unverified report of that executable leak; we are not linking leaked game files, and we are not linking the taken-down repository as a source of them.

Take-Two's notice alleged that the repository was "a derivative work of GRAND THEFT AUTO VI" and that it "facilitates copyright infringement of Rockstar Games title, Grand Theft Auto VI." The Verge quoted the same "infringes upon Take-Two's copyrighted works" language.

The Verge also reported that other unofficial efforts were continuing, and that a site called PortWatch VI was tracking them. We are not linking those projects.

*Sources:* [Heroic Games Launcher: Heroic 3.0.0 Beta #1, Nov. 24, 2026, 5:54 p.m. CT](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/tag/v3.0.0-beta.1), [GamingOnLinux, Nov. 25, 2026, 2:27 a.m. CT](https://www.gamingonlinux.com/2026/11/heroic-3-0-0-beta-1-brings-steam-and-itch-io-integration-a-new-ui-and-much-more/), [Azahar 2127.0.1, Nov. 24, 2026, 4:55 p.m. CT](https://github.com/azahar-emu/azahar/releases/tag/2127.0.1), [VetTV News: Azahar 2127.0 Comes to iPhone, With HookshotVR, VR Forever, and Atari News](/posts/retro-vr-roundup-2026-11-24-azahar-atari-hookshotvr/), [GitHub DMCA: Take-Two notice, Nov. 24, 2026](https://github.com/github/dmca/blob/master/2026/11/2026-11-24-take-two.md), [The Verge, Nov. 24, 2026, 3:39 p.m. CT](https://www.theverge.com/news/1041690/grand-theft-auto-6-pc-recompilation-project-leonida-takedown-take-two), [VetTV News: Unverified Report: A Leaker Says the GTA VI Xbox Executable Has Been Released](/posts/gta-vi-xbox-exe-leak-unverified/)

*Cover image: Heroic Games Launcher, https://heroicgameslauncher.com/*
