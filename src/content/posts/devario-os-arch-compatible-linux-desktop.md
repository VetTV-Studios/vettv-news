---
title: "Devario OS Is a New Arch-Compatible Linux Desktop From Seafoam Labs"
description: "Seafoam Labs' Devario OS is an independent, Arch-compatible Linux desktop with Aqueous, Pearl, and Shelly. The current ISO is 2026.11.25. Here's how it compares with CachyOS."
summary: "Seafoam Labs' Devario OS is an independent, Arch-compatible Linux desktop with Aqueous, Pearl, and Shelly. The current ISO is 2026.11.25. Here's how it compares with CachyOS."
pubDate: 2026-11-25
publishedAt: 2026-11-25T14:21:51-06:00
author: "Vet, VetTV Studios"
category: tech
type: news
tags: ["linux","devario","cachyos","seafoam-labs"]
offTopic: false
trending: false
draft: false
cover: "covers/devario-os-arch-compatible-linux-desktop.png"
sources:
  - title: "Seafoam Labs: Devario overview"
    url: "https://www.seafoam-labs.org/devario/overview/"
  - title: "Seafoam Labs homepage, current ISO devario-2026.11.25-x86_64.iso"
    url: "https://www.seafoam-labs.org/"
  - title: "Seafoam Labs: Install Devario"
    url: "https://www.seafoam-labs.org/devario/installation/"
  - title: "Seafoam Labs: Hardware and status"
    url: "https://www.seafoam-labs.org/devario/readiness/"
  - title: "Seafoam Labs: How Devario is built"
    url: "https://www.seafoam-labs.org/devario/platform/"
  - title: "Seafoam Labs: Setup and defaults"
    url: "https://www.seafoam-labs.org/devario/setup/"
  - title: "Seafoam Labs: Aqueous layouts"
    url: "https://www.seafoam-labs.org/aqueous/layouts/"
  - title: "Seafoam Labs about page"
    url: "https://www.seafoam-labs.org/about/"
  - title: "Seafoam-Labs/devario-os on GitHub"
    url: "https://github.com/Seafoam-Labs/devario-os"
  - title: "ZDNET: I tried the new Arch-like Devario OS - and quickly became a fan, Jack Wallen, Nov. 25, 2026, 9:49 a.m. CT"
    url: "https://www.zdnet.com/tech/devario-os-hands-on-arch-like/"
  - title: "CachyOS"
    url: "https://cachyos.org/"
  - title: "CachyOS download page"
    url: "https://cachyos.org/download/"
  - title: "CachyOS: Optimized repositories"
    url: "https://wiki.cachyos.org/features/optimized_repos/"
  - title: "CachyOS kernel wiki"
    url: "https://wiki.cachyos.org/features/kernel/"
  - title: "CachyOS: Why CachyOS?"
    url: "https://wiki.cachyos.org/cachyos_basic/why_cachyos/"
  - title: "CachyOS: Preparation steps"
    url: "https://wiki.cachyos.org/installation/installation_prepare/"
  - title: "CachyOS about page"
    url: "https://cachyos.org/about/"
  - title: "VetTV News: Steam Survey October 2026, CachyOS is the most-used Linux distro on Steam"
    url: "https://news.vettvstudios.com/posts/steam-survey-october-2026-cachyos-top-linux-distro/"
  - title: "VetTV News: CachyOS November 2026 release"
    url: "https://news.vettvstudios.com/posts/cachyos-november-2026-release-eac-recovery-installer/"
source: "Article Desk: devario-os-arch-compatible-linux-desktop.md"
---

Seafoam Labs is offering a new Linux desktop called Devario OS. It is not just an Arch install with a new wallpaper. The project describes [Devario Community](https://www.seafoam-labs.org/devario/overview/) as an independent distribution that is compatible with the Arch Linux package ecosystem, built around its own Aqueous Wayland compositor, Pearl desktop shell, and Shelly package manager.

The current download on the [Seafoam Labs homepage](https://www.seafoam-labs.org/) is `devario-2026.11.25-x86_64.iso`, with a matching SHA-256 checksum beside it. The image file's last-modified time was **2:34 a.m. CT on November 25**. An earlier `devario-2026.11.18-x86_64.iso` is still on the same CDN, but the homepage "Get the ISO" button points to the November 25 image.

[Jack Wallen's ZDNET hands-on](https://www.zdnet.com/tech/devario-os-hands-on-arch-like/), published November 25 at 9:49 a.m. CT, is what put Devario back in today's news cycle. Wallen wrote that he "quickly became a fan" after trying it. That is his impression. The facts below come from Seafoam Labs' own documentation, the [devario-os](https://github.com/Seafoam-Labs/devario-os) repository, and the current ISO listing. We have not completed a VetTV hands-on of Devario for this story.

## What Devario actually is

Seafoam Labs' overview says the Community edition "can be built, installed, and used independently, without an organization account or management service." The [project README](https://github.com/Seafoam-Labs/devario-os) is careful about the Arch relationship:

- Devario keeps its own signed package repositories, kernel and boot lifecycle, desktop defaults, installer, and release validation.
- Live and installed systems use Devario repositories by default. Arch repositories and mirrorlists are not included in the default configuration.
- Compatibility is at the package-ecosystem level: Arch-compatible package archives, repository metadata, PKGBUILD recipes, and ALPM hooks.
- The default package manager is Shelly, using Shelly's native RLPM backend. [How Devario is built](https://www.seafoam-labs.org/devario/platform/) says the default image does not ship the `pacman` or `pacman-key` executables.
- Package-format compatibility does not mean every Arch or AUR package will work unchanged. Official docs also say the optional AUR build toolchain is not included in the default desktop.

The [Seafoam Labs about page](https://www.seafoam-labs.org/about/) lists Zoey Erin Bauer, Caroline Snyder, and Anton Ždanov as co-founders. Maintainers include kernel developer Piotr Górski.

## The desktop: Aqueous and Pearl

Aqueous is the Wayland compositor. It handles windows, workspaces, displays, and input. Pearl is the desktop shell around it: the bar, dock, launcher, notifications, control center, and settings. Pearl Greeter, running through greetd, handles sign-in on an installed system. The live image signs in automatically as `liveuser`.

Devario starts in a floating layout. Official docs call that layout `stacking`. Windows open as free-floating windows you can move and resize, rather than tiling automatically. [Aqueous layouts](https://www.seafoam-labs.org/aqueous/layouts/) document ten native engines: tile, monocle, grid, rows, dwindle, reverse-dwindle, scrolling, stacking, game-mode, and composable. You change the default in Settings → Aqueous → Layouts.

The overview's included-app list includes Firefox, the Ghostty terminal, and Pearl's Phyto file manager, Dome resource monitor, and Coral text editor. Fish is the interactive shell. Networking is NetworkManager, audio is PipeWire and WirePlumber, and UFW is enabled by default, denying incoming and forwarded connections and allowing outgoing ones.

X11 apps run through XWayland. Mesa and Vulkan drivers are included, and official docs describe NVIDIA open-kernel-module support for supported GPUs, with a PCI check before the graphical greeter.

## Installer, version, and requirements

Installation uses a Pearl-themed Calamares installer, listed as Calamares 3.4.2 in the README. You boot the live image, then open Install Devario from the launcher. The base system is copied from the prepared live filesystem, so a base install can be done offline. Updates and extra packages need access to Devario's repositories.

The [installation guide](https://www.seafoam-labs.org/devario/installation/) and [hardware and status](https://www.seafoam-labs.org/devario/readiness/) pages say:

- The image targets x86-64-v3 hardware, and installation requires 64-bit UEFI. The live USB can boot in BIOS mode, but you cannot install from a legacy BIOS boot.
- The installed system uses systemd-boot, with a FAT EFI partition at `/boot`.
- This image does not configure Secure Boot. Official docs say to disable Secure Boot for this image if it is on.
- The installer checks for at least 2 GiB of RAM and 12 GiB of storage. Those are installer thresholds, not a tested minimum for everyday use. Seafoam Labs recommends a 4-core CPU, 8 GB of RAM, and a 32 GB SSD or larger.
- For an erase-disk install, Calamares defaults to ext4 with no swap. Btrfs, XFS, and F2FS are also available. The disk-encryption option is separate from your account password.
- Official install-guide screenshots still show the 2026.10.31 image, even though the current homepage download is 2026.11.25.

The kernel package is Seafoam Labs' `linux-devario`, aimed at x86-64-v3 systems, with sched_ext support on the regular kernel.

Devario is still a young project. The devario-os repository was created on August 13, 2026, and GitHub does not currently list formal Releases. Wallen wrote that the first stable iteration came out this month. Seafoam Labs' hardware and status page still says hardware testing and release validation are ongoing, that the ISO you download may not include the latest source changes, and that boot-splash handoff, encrypted-root unlock, and hardware-specific behavior still need image-level acceptance testing. Virtual-machine support is a lower priority than bare metal.

To try it, Seafoam Labs says to use the homepage's Get the ISO and SHA-256 buttons, verify the checksum, and write the image with a disk-image writer such as balenaEtcher. A USB drive of 8 GB or larger is described as a practical choice.

## What ZDNET said, and what we are not repeating as fact

In his [ZDNET piece](https://www.zdnet.com/tech/devario-os-hands-on-arch-like/), Wallen compared Aqueous to Hyprland and wrote that Shelly was "one of the best Arch-like package manager GUIs on the market." He also wrote that Shelly integrated with Flatpak apps and AppImages, and that he found plenty to install that way. Shelly's own documentation does include [Flatpak](https://www.seafoam-labs.org/shelly-alpm/docs/flatpak/) and [AppImage](https://www.seafoam-labs.org/shelly-alpm/docs/appimage/) management. We are treating Wallen's software-availability impressions as his hands-on, not as a claim we independently verified on the 2026.11.25 image.

One official clarification is worth making. Aqueous is the compositor and window manager. Pearl is the shell that provides the bar, dock, launcher, and settings. That is how Seafoam Labs documents the desktop.

## Devario OS vs. CachyOS

VetTV has run CachyOS on desktops, laptops, and handhelds, and we have covered it before, including when [Valve's October 2026 Steam survey listed CachyOS as the most-used Linux distro on Steam](/posts/steam-survey-october-2026-cachyos-top-linux-distro/) and when the [November 2026 CachyOS release](/posts/cachyos-november-2026-release-eac-recovery-installer/) added Easy Anti-Cheat support and a recovery environment. The comparison below is from each project's official site and docs, not from a side-by-side benchmark. We did not run performance tests for this story.

- **Arch base and repositories:** [CachyOS](https://cachyos.org/) describes itself as a performance-focused distribution built on Arch Linux. Its [optimized repositories wiki](https://wiki.cachyos.org/features/optimized_repos/) says it keeps the Arch `[core]`, `[extra]`, and `[multilib]` repositories and adds its own optimized CachyOS repositories above them. Devario is independent: it does not include Arch repositories or mirrorlists in the default configuration, and it uses its own signed Devario repositories.
- **Package management:** CachyOS uses pacman, including a CachyOS-packaged pacman on its own repos, and documents system updates with `sudo pacman -Syu`. It also offers optional offline upgrades through `pacman-offline`. Devario uses Shelly's graphical interface and CLI, with the native RLPM backend, and does not ship pacman in the default image.
- **Kernel and performance tuning:** CachyOS's headline pitch is CPU-optimized packages. The wiki says it recompiles Arch packages for x86-64-v3, x86-64-v4, and Zen4+ machines, and that core packages can also get PGO, LTO, and BOLT. The [CachyOS kernel wiki](https://wiki.cachyos.org/features/kernel/) lists `linux-cachyos` as the default desktop kernel, built with Clang ThinLTO and AutoFDO at a 1000Hz tick rate. [Why CachyOS?](https://wiki.cachyos.org/cachyos_basic/why_cachyos/) says that default kernel uses custom EEVDF tunables, with the BORE scheduler available on the `linux-cachyos-bore` variant, plus other flavors including BMQ, RT, and sched-ext options. Devario ships `linux-devario` for x86-64-v3 systems, with sched_ext support, and does not advertise a separate v4 or Zen4 package rebuild program the way CachyOS does.
- **Installer:** Both use Calamares for a graphical install. CachyOS also offers a CLI installer. CachyOS's [preparation guide](https://wiki.cachyos.org/installation/installation_prepare/) says its installer is an online process and that a stable internet connection is mandatory. Devario's base installation can be completed offline because Calamares unpacks the prepared live filesystem.
- **Default desktops:** CachyOS's installer lets you choose from more than 17 environments, including KDE Plasma, GNOME, COSMIC, Hyprland, Sway, Niri, i3, and XFCE. Devario is a single desktop: Aqueous plus Pearl.
- **Gaming and handheld support:** CachyOS publishes a [Handheld Edition](https://cachyos.org/download/) with a Game Mode-like experience and preinstalled gaming tools. Officially supported devices are the ROG Ally, Steam Deck OLED and LCD, Legion Go, and Lenovo Legion Go S. That edition currently supports only KDE Plasma. The kernel wiki lists `linux-cachyos-deckify`, with handheld-specific patches and the BORE scheduler, as the default kernel for handhelds. CachyOS also includes `chwd` hardware detection for drivers, including NVIDIA and handhelds. Devario documents NVIDIA open-driver support and laptop GPU selection, but Seafoam Labs does not publish a handheld edition or an official supported-handheld list.
- **Hardware requirements:** CachyOS's minimum is 3 GB of RAM and 30 GB of storage, plus a stable internet connection for the installer. It recommends 8 GB of RAM, 50 GB on an SSD or NVMe drive, and an x86-64-v3 capable CPU. Devario's installer checks are lower, at 2 GiB of RAM and 12 GiB of storage, with a recommendation of a 4-core CPU, 8 GB of RAM, and a 32 GB SSD or larger. Both target modern x86-64-v3-class hardware for the optimized experience CachyOS describes and for Devario's kernel and image.
- **Update model:** CachyOS is a rolling-release Arch system: you update with pacman, and you can optionally stage updates with pacman-offline. Devario is updated through Shelly's Update page from the configured Devario repositories. Official Devario docs do not describe a separate offline-upgrade tool, and they do not use CachyOS's "rolling Arch" wording.
- **Project maturity:** CachyOS is the more established of the two. It has a documented Handheld Edition, a wide desktop-environment catalog, and enough existing users to top Valve's October 2026 Steam Linux survey. Devario's public repository dates to August 2026, and Seafoam Labs still describes hardware testing and release validation as ongoing. The two projects are not sealed off from each other: CachyOS's [about page](https://cachyos.org/about/) lists Peter Jung and Vladislav Nepogodin as founders, and it also lists Anton Ždanov and Piotr Górski among contributors, names that also appear on Seafoam Labs' about page.

**Our take (opinion):** if you want a daily-driver Arch-based system, especially for gaming or a handheld, CachyOS is the more mature, documented option today, and it is the one VetTV has actually run on desktops, laptops, and handhelds. Devario is interesting if you specifically want Seafoam Labs' Aqueous, Pearl, and Shelly desktop, and a live USB is the right way to start. Official docs still read like a young distribution, and that is a good reason not to wipe a working machine for it until you have tested the live image on your own hardware.

*Sources:* [Seafoam Labs: Devario overview](https://www.seafoam-labs.org/devario/overview/), [Seafoam Labs homepage, current ISO devario-2026.11.25-x86_64.iso](https://www.seafoam-labs.org/), [Seafoam Labs: Install Devario](https://www.seafoam-labs.org/devario/installation/), [Seafoam Labs: Hardware and status](https://www.seafoam-labs.org/devario/readiness/), [Seafoam Labs: How Devario is built](https://www.seafoam-labs.org/devario/platform/), [Seafoam Labs: Setup and defaults](https://www.seafoam-labs.org/devario/setup/), [Seafoam Labs: Aqueous layouts](https://www.seafoam-labs.org/aqueous/layouts/), [Seafoam Labs about page](https://www.seafoam-labs.org/about/), [Seafoam-Labs/devario-os on GitHub](https://github.com/Seafoam-Labs/devario-os), [ZDNET: I tried the new Arch-like Devario OS - and quickly became a fan, Jack Wallen, Nov. 25, 2026, 9:49 a.m. CT](https://www.zdnet.com/tech/devario-os-hands-on-arch-like/), [CachyOS](https://cachyos.org/), [CachyOS download page](https://cachyos.org/download/), [CachyOS: Optimized repositories](https://wiki.cachyos.org/features/optimized_repos/), [CachyOS kernel wiki](https://wiki.cachyos.org/features/kernel/), [CachyOS: Why CachyOS?](https://wiki.cachyos.org/cachyos_basic/why_cachyos/), [CachyOS: Preparation steps](https://wiki.cachyos.org/installation/installation_prepare/), [CachyOS about page](https://cachyos.org/about/), [VetTV News: Steam Survey October 2026, CachyOS is the most-used Linux distro on Steam](/posts/steam-survey-october-2026-cachyos-top-linux-distro/), [VetTV News: CachyOS November 2026 release](/posts/cachyos-november-2026-release-eac-recovery-installer/)

*Cover image: Seafoam Labs Devario installer screenshot from the official install guide, https://www.seafoam-labs.org/devario/installation/*
