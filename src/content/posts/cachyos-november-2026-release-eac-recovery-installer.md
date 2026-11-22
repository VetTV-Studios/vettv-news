---
title: "CachyOS November 2026 Release Adds Easy Anti-Cheat Support and a Recovery Environment"
description: "CachyOS posted its sixth release of 2026 on November 22, with a dedicated linux-cachyos-eac kernel for Easy Anti-Cheat Linux v2, a revamped Package Installer 2.0.0, and cachyos-recovery, a roughly 70 MB image that can roll back Btrfs snapshots without a live USB."
summary: "CachyOS posted its sixth release of 2026 on November 22, with a dedicated linux-cachyos-eac kernel for Easy Anti-Cheat Linux v2, a revamped Package Installer 2.0.0, and cachyos-recovery, a roughly 70 MB image that can roll back Btrfs snapshots without a live USB."
pubDate: 2026-11-22
publishedAt: 2026-11-22T11:53:26-06:00
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["cachyos", "linux", "anti-cheat"]
offTopic: true
trending: false
draft: false
cover: "covers/cachyos-november-2026-release-eac-recovery-installer.png"
sources:
  - title: "CachyOS, Nov. 22, 2026: November 2026 Release"
    url: "https://cachyos.org/blog/2611-november-release/"
  - title: "CachyOS on X, Nov. 22, 2026, 6:37 a.m. CT: November 2026 Release is out"
    url: "https://x.com/CachyOS/status/2124482287421063342"
  - title: "CachyOS wiki: Easy Anti-Cheat (Linux v2)"
    url: "https://wiki.cachyos.org/configuration/easy_anti_cheat/"
  - title: "CachyOS wiki: CachyOS on WSL"
    url: "https://wiki.cachyos.org/virtualization/wsl/"
  - title: "CachyOS CDN: cachyos-desktop-linux-261122.iso"
    url: "https://iso.cachyos.org/desktop/261122/cachyos-desktop-linux-261122.iso"
  - title: "CachyOS on SourceForge: ISO files"
    url: "https://sourceforge.net/projects/cachyos-arch/files"
  - title: "VetTV News, Oct. 29, 2026: CachyOS Starts Building a Dedicated Kernel for Easy Anti-Cheat v2"
    url: "https://news.vettvstudios.com/posts/cachyos-eac-v2-kernel-linux/"
source: "Article Desk: cachyos-november-2026-release-eac-recovery-installer.md"
---
CachyOS published its [November 2026 release](https://cachyos.org/blog/2611-november-release/) on November 22, describing it as the project's sixth release of the year. The official [@CachyOS account](https://x.com/CachyOS/status/2124482287421063342) posted at 6:37 a.m. CT the same day: "CachyOS November 2026 Release is out!" The post highlighted Easy Anti-Cheat support through a signed EAC kernel, Package Installer 2.0 with AUR, Flatpak and AppImage, and cachyos-recovery for rolling back Btrfs snapshots without a live USB.

The desktop ISO is named `cachyos-desktop-linux-261122.iso`. CachyOS posted it on its mirrors, including the project's [CDN](https://iso.cachyos.org/desktop/261122/cachyos-desktop-linux-261122.iso) and [SourceForge](https://sourceforge.net/projects/cachyos-arch/files).

## Easy Anti-Cheat Linux v2

The headline feature is support for Easy Anti-Cheat Linux v2. We [covered](/posts/cachyos-eac-v2-kernel-linux/) CachyOS's draft `linux-cachyos-eac` kernel in October; this release is the first time the project is shipping that work in a monthly ISO.

CachyOS says EAC only lets games start when it can verify how the system was booted: Secure Boot with a kernel signed by a key that Epic trusts, a TPM 2.0, an enabled IOMMU, and a kernel running in lockdown mode that only loads signed modules. The project provides a dedicated kernel, `linux-cachyos-eac`, together with a systemd-boot binary signed with the same key. The EAC kernel gets its own boot entry, and normal boot entries are kept, so users only boot into it when they want to play a game that uses EAC.

A new `eac-setup` script handles setup for systemd-boot, Limine and rEFInd, with experimental support for GRUB. `eac-status` verifies the result. DKMS modules do not work with the EAC kernel, so the NVIDIA (open and 580xx), ZFS and r8125 modules are shipped as `linux-cachyos-eac-*` packages instead. The notes also list `cachyos-eac-signing-key`, `systemd-boot-cachyos-signed` and `cachyos-eac-grub-hook`.

CachyOS asks users to read the [Easy Anti-Cheat guide](https://wiki.cachyos.org/configuration/easy_anti_cheat/) in its wiki before starting, especially if they use BitLocker or unlock the disk with the TPM. The notes do not name specific games that now launch under this setup, and we are not treating the kernel's arrival as confirmation that any particular title is playable.

## Package Installer 2.0.0

The CachyOS Package Installer has a new UI for its 2.0.0 release. Besides the CachyOS and Arch repositories, it can now build packages from the AUR and install Flatpak apps and AppImages, each of them opt-in. Before an AUR package is built, the PKGBUILD and its install scripts are shown for review, and a static analysis marks lines that should be looked at. When reviewing an update, the app shows what changed since the installed version. AppImages can be added from a local file or from a GitHub project, which also offers newer releases as updates, and AppImages added with Shelly or Gear Lever can be taken over. A new settings page offers several colour themes and a button to rank the mirrors.

## Recovery without a live USB

cachyos-recovery is a new self-contained recovery environment that can be booted from the bootloader or directly from UEFI, so rolling back a broken system no longer needs a live USB. From its menu, users can boot any Btrfs snapshot with a writable root (via overlayfs, the notes say) to try it first, then roll back to it permanently, either from a desktop notification or from the recovery menu. The rollback regenerates the kernel and initramfs files and the bootloader configuration for the restored snapshot, and signs them if Secure Boot is set up with sbctl. CachyOS says it works independently of Snapper, supports LUKS-encrypted installations, and takes about 70 MB on the ESP. It can be installed with `sudo pacman -S cachyos-recovery`, or `cachyos-recovery-legacy` on BIOS systems.

## Drivers, the ISO, and a required step for existing users

The release ships Linux **7.3.5**, LTS **6.18.64**, NVIDIA **620.73.04** and Mesa **26.3.1**. Other package notes include Limine 12.10.0 and proton-cachyos 11.0-20261015, with proton-cachyos-native now wow64-only. The `nvidia-580xx` modules are now prebuilt for CachyOS kernels.

A new package, cachyos-drm-awaiter, replaces early KMS and `nvidia-module-loader`. It waits for GPU drivers to load before the display manager starts, for any driver and not only NVIDIA, and shows a QR code if the driver failed to load. The `kms` hook is no longer added to the initramfs by default. Because of that change, CachyOS tells existing users to update and then reinstall their driver profiles:

```
sudo pacman -Syu
sudo chwd -a -f
```

The installer is moving onto shared CachyOS installer libraries (gucc). Plymouth is now optional, and the rEFInd + AI SDK bootloader option has been removed; the AI SDK can still be installed afterward with `sudo chwd -a --ai_sdk`. CachyOS also now provides a [WSL image](https://wiki.cachyos.org/virtualization/wsl/). On handheld builds, steamos-gamemode now uses `steamosctl` to switch to game mode. New mirrors were added in South Korea, India, Switzerland (init7), and two in the U.S. East.

*Sources:* [CachyOS, Nov. 22, 2026: November 2026 Release](https://cachyos.org/blog/2611-november-release/), [CachyOS on X, Nov. 22, 2026, 6:37 a.m. CT: November 2026 Release is out](https://x.com/CachyOS/status/2124482287421063342), [CachyOS wiki: Easy Anti-Cheat (Linux v2)](https://wiki.cachyos.org/configuration/easy_anti_cheat/), [CachyOS wiki: CachyOS on WSL](https://wiki.cachyos.org/virtualization/wsl/), [CachyOS CDN: cachyos-desktop-linux-261122.iso](https://iso.cachyos.org/desktop/261122/cachyos-desktop-linux-261122.iso), [CachyOS on SourceForge: ISO files](https://sourceforge.net/projects/cachyos-arch/files), [VetTV News, Oct. 29, 2026: CachyOS Starts Building a Dedicated Kernel for Easy Anti-Cheat v2](https://news.vettvstudios.com/posts/cachyos-eac-v2-kernel-linux/)

*Cover:* Original typographic artwork by VetTV News. No third-party photos, screenshots, or leaked images were used.
