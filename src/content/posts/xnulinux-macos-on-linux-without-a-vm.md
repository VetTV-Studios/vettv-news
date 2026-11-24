---
title: "XNULinux Runs macOS 27 on Linux as a Kernel Module, With No Hypervisor"
description: "The open-source XNULinux project builds Apple's published XNU kernel as a loadable Linux module and, on tested arm64 hosts, boots a macOS 27.2.1 system disk to the desktop with no hypervisor between the two kernels. It is early, arm64 only, and cannot boot on its own."
summary: "The open-source XNULinux project builds Apple's published XNU kernel as a loadable Linux module and, on tested arm64 hosts, boots a macOS 27.2.1 system disk to the desktop with no hypervisor between the two kernels. It is early, arm64 only, and cannot boot on its own."
pubDate: 2026-11-24
publishedAt: 2026-11-24T09:09:48-06:00
author: "Vet, VetTV Studios"
category: projects
type: news
tags: ["xnulinux", "linux", "macos"]
offTopic: true
trending: false
draft: false
cover: "covers/xnulinux-macos-on-linux-without-a-vm.png"
sources:
  - title: "AFK-surf/xnulinux README"
    url: "https://github.com/AFK-surf/xnulinux"
  - title: "AFK-surf/xnulinux: docs/production.md"
    url: "https://github.com/AFK-surf/xnulinux/blob/main/docs/production.md"
  - title: "AppleInsider, Nov. 24, 2026, 8:24 a.m. CT: XNULinux can run macOS apps in Linux without a virtual machine"
    url: "https://appleinsider.com/articles/26/11/24/xnulinux-can-run-macos-apps-in-linux-without-a-virtual-machine"
  - title: "Apple Software License Agreements"
    url: "https://www.apple.com/legal/sla/"
  - title: "Apple, Software License Agreement for macOS, July 11, 2026"
    url: "https://www.apple.com/legal/sla/docs/macOS27.pdf"
source: "Article Desk: xnulinux-macos-on-linux-without-a-vm.md"
---
[XNULinux](https://github.com/AFK-surf/xnulinux) is an open-source project that builds **XNU**, the kernel Apple publishes for macOS, from those sources and runs it as a loadable kernel module inside Linux. The goal is to run macOS userspace on an arm64 Linux host **without a hypervisor** sitting between the two kernels.

[AppleInsider](https://appleinsider.com/articles/26/11/24/xnulinux-can-run-macos-apps-in-linux-without-a-virtual-machine), in a November 24 article by Malcolm Owen posted at 8:24 a.m. CT, described the same project as a way to run macOS 27 and macOS apps on Linux "without requiring any virtualization," while noting that "it's still not bootable."

## What the project says it does

The [README](https://github.com/AFK-surf/xnulinux) puts it this way: XNULinux "builds XNU, the open-source kernel of macOS, from Apple's published sources and runs it as a loadable kernel module (`xnu.ko`) inside an unmodified arm64 Linux kernel." The hosted XNU "drives the CPU and MMU directly, so macOS processes run natively next to Linux processes on the same CPUs, with no hypervisor between them." Linux "lends XNU its memory, timers, files, network and GPU through a small interface module (`fki.ko`)."

With a stock Ubuntu kernel, the project says, `insmod xnu.ko` boots "a macOS 27 system disk made by Apple's own installer to the desktop: loginwindow, WindowServer, Dock, Finder, Safari and Chrome."

The hosted kernel in the README's screenshots is **macOS 27.2.1**. AppleInsider, citing the project, also lists Spotlight, Notes, and Calculator among apps that have been run.

This is **not** a claim that macOS apps run on a normal Linux desktop as Linux processes. They run in a hosted macOS userspace, alongside Linux, after the XNU module is loaded.

## What has been tested

The README says the project is working on two arm64 Linux setups:

- **An Apple silicon Mac running an arm64 Linux VM** (`krunkit`, 1 to 6 hosted CPUs). macOS 27.2.1 "boots to the desktop with auto-login in 31–48 s," compared with 49 seconds for "an Apple Virtualization macOS VM on the same Mac." Apps open and quit, and Spotlight and the file system work. The project describes a 30-minute stress run (40 rounds of Safari, Notes, Calculator, TextEdit, System Settings, Spotlight, and a disk walk) that "finishes with no panic and no crash report." When a virtio-gpu render node is present, a GPU bridge is on by default (`GPU=auto`) and presents the host GPU as "Virtio-GPU Venus (Apple M5 Max)"; otherwise it falls back to CPU rendering. It can also run as a systemd service.
- **A bare-metal NVIDIA DGX Spark** running Ubuntu 24.04.5 LTS aarch64 and Linux `7.0.0-1025-nvidia`. The README says this boots to the full macOS desktop, with Screen Sharing and SSH working, using 4 hosted CPUs and 8 GiB of RAM reserved for XNU. Rendering on that machine is currently on the CPU (Mesa lavapipe, `GPU=off`). The project says hardware GPU pass-through on the Spark's GB10 GPU "requires a new DRM bridge backend."

AppleInsider notes that, so far, the project does not appear to have Linux running directly on Mac hardware. That matches the README: the Apple silicon tests are inside an arm64 Linux VM (`krunkit` or `tart`), not a bare-metal Mac install.

## Requirements, and why it can't boot on its own

The project is **arm64 only**. The stated host requirements are an arm64 Linux system with PAC (`FEAT_PAuth`), 4K pages, and at least 16 GB of RAM, with 8 GB reserved for the hosted kernel.

You also need:

- **A Mac with Xcode**, "to make the system disk and build the GPU parts."
- **A macOS 27 installation of your own** (the README specifies an Apple Virtualization VM disk). "No Apple binaries are in this repository or distributed by it": Apple's kexts, the system disk, and its trust cache "come from your own installation."

Apple's current [macOS Software License Agreement](https://www.apple.com/legal/sla/) permits installing and running macOS only on Apple-branded hardware, so running it on non-Apple Linux hosts such as the DGX Spark falls outside those terms, a similar gray area to Hackintosh builds. The project's Apple silicon tests run Linux VMs on Macs. VetTV is not offering legal advice.

XNULinux **cannot boot on its own**. It is a pair of Linux kernel modules (`fki.ko` and `xnu.ko`) loaded on an already-running Linux host. There is no standalone bootloader in the project that starts macOS without Linux. That is the limit AppleInsider is pointing at when it says the project is "still not bootable."

The project is also early. [A production notes file](https://github.com/AFK-surf/xnulinux/blob/main/docs/production.md) lists remaining stopgaps. The README highlights a few: "the OS cryptex is merged into the system volume, AMFI is patched and SIP relaxed, and memory access is slower than a native VM (4K pages vs 16K)."

## How the pieces fit, briefly

The README describes a split kept "apart by license." `fki.ko` is the GPL-licensed "foreign kernel interface" that talks to Linux. `xnu.ko` is APSL-licensed, loads the kernel collection, and is supposed to call Linux only through `fki_*` functions. Linux reports `xnu.ko` as a non-GPL module, which taints the kernel. Upstream code, including Apple's XNU (the build script names `xnu-12377.121.6`), is fetched at pinned revisions at build time and is not committed to the repo.

The project says it is not affiliated with or endorsed by Apple. The README lists copyright as "© 2026 Heyang Zhou and contributors."

Those are the project's own results and limits. We have not independently booted XNULinux.

*Sources:* [AFK-surf/xnulinux README](https://github.com/AFK-surf/xnulinux), [AFK-surf/xnulinux: docs/production.md](https://github.com/AFK-surf/xnulinux/blob/main/docs/production.md), [AppleInsider, Nov. 24, 2026, 8:24 a.m. CT: XNULinux can run macOS apps in Linux without a virtual machine](https://appleinsider.com/articles/26/11/24/xnulinux-can-run-macos-apps-in-linux-without-a-virtual-machine), [Apple Software License Agreements](https://www.apple.com/legal/sla/), [Apple, Software License Agreement for macOS, July 11, 2026](https://www.apple.com/legal/sla/docs/macOS27.pdf)

*Cover image: XNULinux, https://github.com/AFK-surf/xnulinux*
