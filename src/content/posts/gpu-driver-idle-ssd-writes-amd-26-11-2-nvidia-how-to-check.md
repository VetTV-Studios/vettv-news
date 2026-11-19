---
title: "AMD Extends Its Idle SSD-Write Fix to Older Radeons as NVIDIA Users Report Similar Writes"
description: "AMD's Adrenalin 26.11.2 driver fixes excessive idle writes to the system drive on Radeon RX 5000 and RX 6000 cards under Windows 10. Separately, some GeForce 621.14 and 621.24 users report heavy idle writes from an NVIDIA logging process, which NVIDIA hasn't publicly addressed. Here's how to check your own PC with tools built into Windows."
summary: "AMD's Adrenalin 26.11.2 driver fixes excessive idle writes to the system drive on Radeon RX 5000 and RX 6000 cards under Windows 10. Separately, some GeForce 621.14 and 621.24 users report heavy idle writes from an NVIDIA logging process, which NVIDIA hasn't publicly addressed. Here's how to check your own PC with tools built into Windows."
pubDate: 2026-11-19
publishedAt: 2026-11-19T09:24:04-06:00
author: "Vet, VetTV Studios"
category: tech
type: news
tags: ["amd", "nvidia", "gpu-drivers"]
offTopic: true
trending: false
draft: false
cover: "covers/gpu-driver-idle-ssd-writes-amd-26-11-2-nvidia-how-to-check.png"
sources:
  - title: "AMD: Adrenalin Edition 26.11.2 Driver Release Notes, Nov. 18, 2026"
    url: "https://www.amd.com/en/resources/support-articles/release-notes/RN-RAD-WIN-26-11-2.html"
  - title: "AMD: Adrenalin Edition 26.11.1 Driver Release Notes, Nov. 12, 2026"
    url: "https://www.amd.com/en/resources/support-articles/release-notes/RN-RAD-WIN-26-11-1.html"
  - title: "Neowin, Nov. 18, 2026, 4:30 p.m. CT"
    url: "https://www.neowin.net/news/amd-adrenalin-26112-extends-ssd-write-bug-fix-to-rx-5000-and-6000-gpus/"
  - title: "NVIDIA GeForce Forums: GeForce GRD 621.14 Feedback Thread"
    url: "https://www.nvidia.com/en-us/geforce/forums/game-ready-drivers/13/592433/geforce-grd-62114-feedback-thread-released-11426/"
  - title: "NVIDIA GeForce Forums: Continuous writing of gigabytes to SSD to nvtopps"
    url: "https://www.nvidia.com/en-us/geforce/forums/geforce-experience/13/592907/continuous-writing-of-gigabytes-to-ssd-to-nvtopps-/"
  - title: "NVIDIA: GeForce 621.24 release notes, Nov. 12, 2026 (PDF)"
    url: "https://us.download.nvidia.com/Windows/621.24/621.24-geforce-win11-x64-release-notes.pdf"
  - title: "Neowin, Nov. 18, 2026, 12:50 p.m. CT"
    url: "https://www.neowin.net/news/after-amd-nvidia-users-confirm-windows-driver-bug-quietly-degrades-your-ssd-over-time/"
  - title: "Tom's Hardware, Nov. 18, 2026"
    url: "https://www.tomshardware.com/pc-components/gpu-drivers/nvidia-geforce-driver-bug-reportedly-hammers-ssds-with-up-to-30gb-of-writes-per-hour-users-trace-massive-idle-wear-to-background-service-newer-driver-reportedly-still-affected"
  - title: "Microsoft Support: System configuration tools in Windows"
    url: "https://support.microsoft.com/en-us/windows/experience/system-configuration-tools-in-windows"
  - title: "Microsoft Support: Use a screen reader to navigate Windows support tools"
    url: "https://support.microsoft.com/en-us/accessibility/windows/use-a-screen-reader-to-navigate-windows-support-tools"
  - title: "Microsoft Learn (archived blog): Resource Monitor tabs"
    url: "https://learn.microsoft.com/en-us/archive/blogs/yongrhee/how-to-pull-the-information-that-resource-monitor-resmon-exe-provides"
source: "Article Desk: gpu-driver-idle-ssd-writes-amd-26-11-2-nvidia-how-to-check.md"
---
Graphics drivers aren't supposed to write to your SSD much while your PC sits idle. This month, AMD confirmed that some of its drivers were doing exactly that and fixed it, and a group of GeForce owners say NVIDIA's drivers are doing something similar. Here's what each company has and hasn't said, and how to check your own PC with tools already in Windows.

## AMD: fixed, now including RX 5000 and RX 6000

AMD's [Adrenalin Edition 26.11.2 release notes](https://www.amd.com/en/resources/support-articles/release-notes/RN-RAD-WIN-26-11-2.html), last updated November 18, list this among the fixed issues: "Excessive writes to the system drive may be observed while the system is idle on Radeon™ RX 5000 and RX 6000 series graphics products when using Windows® 10."

That extends an earlier fix. AMD's [26.11.1 notes](https://www.amd.com/en/resources/support-articles/release-notes/RN-RAD-WIN-26-11-1.html), dated November 12, fixed idle writes to the system drive "on Radeon™ RX 7000 series graphics products and above," plus excessive writes "while moving or resizing application windows." [Neowin](https://www.neowin.net/news/amd-adrenalin-26112-extends-ssd-write-bug-fix-to-rx-5000-and-6000-gpus/) ties the bug to the AMD External Events Utility service (atieclxx.exe); AMD's notes don't name the process.

The 26.11.2 driver also adds:

- **ROCm 10.2** support.
- Game support for **Phantom Blade Zero** and the **Crimson Desert Enhanced: Charting the Unknown** DLC.
- Fixes including Smart Access Memory turning off after installing on Windows 10, a memory leak that slowed app launches over time on RX 5000 and newer, and OBS Studio streaming crashes on RX 9000.

If you have a Radeon RX 5000 or RX 6000 card on Windows 10, 26.11.2 is the version with the fix. AMD's notes list one known issue to know about first: Crimson Desert may fail to launch on RX 6000 cards, and AMD recommends 26.11.1 for anyone hit by that.

## NVIDIA: user-reported, no comment from NVIDIA

**This part is user-reported.** NVIDIA hasn't confirmed it.

In NVIDIA's own [GeForce Game Ready 621.14 feedback thread](https://www.nvidia.com/en-us/geforce/forums/game-ready-drivers/13/592433/geforce-grd-62114-feedback-thread-released-11426/), a user with an RTX 4070 SUPER on Windows 11 posted measurements showing NVDisplay.Container.exe, the process behind the "NVIDIA Display Container LS" service, repeatedly rewriting a log file named nvlog.nvlgstg in C:\ProgramData\NVIDIA Corporation\nvtopps\nct\ while the PC was idle. In a five-minute idle test, the user measured about **515 MB** of writes from that process on 621.14, compared with under 2 MB on the older 621.01. The user said the SSD's own SMART "Data Units Written" counter matched what Windows reported. [Neowin](https://www.neowin.net/news/after-amd-nvidia-users-confirm-windows-driver-bug-quietly-degrades-your-ssd-over-time/) and [Tom's Hardware](https://www.tomshardware.com/pc-components/gpu-drivers/nvidia-geforce-driver-bug-reportedly-hammers-ssds-with-up-to-30gb-of-writes-per-hour-users-trace-massive-idle-wear-to-background-service-newer-driver-reportedly-still-affected) reported the thread on November 18.

Other users in a [separate NVIDIA forum thread](https://www.nvidia.com/en-us/geforce/forums/geforce-experience/13/592907/continuous-writing-of-gigabytes-to-ssd-to-nvtopps-/) report the same file and process on driver 621.24, with much higher numbers on some systems. Tom's Hardware cites one estimate of up to 30 GB an hour on 621.24. Those are individual users' measurements on different hardware, not lab results.

The issue also doesn't show up everywhere. At least one user in the 621.14 thread posted that they couldn't reproduce it on an RTX 5070 Ti with either 621.14 or 621.24.

NVIDIA's [621.24 release notes](https://us.download.nvidia.com/Windows/621.24/621.24-geforce-win11-x64-release-notes.pdf), dated November 12, don't list it as an open issue. As of the morning of November 19, we found no public statement from NVIDIA, so as far as we can tell, NVIDIA hasn't commented. We'll update this story if that changes.

Users in the thread describe two workarounds: rolling back to 621.01, or stopping the service and deleting the log file, which they say only helps until the file grows again. Neither comes from NVIDIA, and we haven't tested them.

**Does this damage your SSD?** It's not proven. Heavy writes do use up an SSD's rated write endurance faster, but how much depends on the drive, how long the PC sits idle and how big the log grows. Nobody in these reports has shown a drive failing because of it.

## How to check your own PC

You don't need extra software. Microsoft describes [Task Manager](https://support.microsoft.com/en-us/windows/experience/system-configuration-tools-in-windows) as a way to monitor "disk activity," and its [Processes and Performance tabs](https://support.microsoft.com/en-us/accessibility/windows/use-a-screen-reader-to-navigate-windows-support-tools) show disk use per process and overall.

**Quick look with Task Manager:**

1. Press **Ctrl + Shift + Esc** to open Task Manager.
2. On **Processes**, select the **Disk** column header to sort by disk use. Leave the PC alone for a few minutes and see what stays at the top.
3. On **Performance**, select your system drive to watch its live read and write speed.

**Closer look with Resource Monitor:**

1. Press **Windows + R**, type **resmon**, and press **Enter**.
2. Open the **Disk** tab. Microsoft's own [description of Resource Monitor](https://learn.microsoft.com/en-us/archive/blogs/yongrhee/how-to-pull-the-information-that-resource-monitor-resmon-exe-provides) lists its sections: Processes with Disk Activity, Disk Activity and Storage.
3. In **Processes with Disk Activity**, sort by **Write (B/sec)**. With nothing open, look for NVDisplay.Container.exe or atieclxx.exe near the top.
4. Tick the box next to a process to filter **Disk Activity** and see which files it's writing to.

A few MB per second that never stops while the PC is idle is the pattern these reports describe. Short bursts are normal: Windows Update, antivirus scans, browsers and game launchers all write in the background.

## Opinion: check before you panic

*This section is opinion.* The AMD side is settled. AMD named the problem, fixed it in two steps and said which cards are covered, so updating is the obvious move. The NVIDIA side is a real lead, but it's still a set of user reports that NVIDIA hasn't addressed, and some people can't reproduce it. Five minutes in Resource Monitor will tell you more about your own PC than any headline. If you do see constant writes from NVDisplay.Container.exe, add your measurements to NVIDIA's forum thread so the company has the data it needs.


*Sources:* [AMD: Adrenalin Edition 26.11.2 Driver Release Notes, Nov. 18, 2026](https://www.amd.com/en/resources/support-articles/release-notes/RN-RAD-WIN-26-11-2.html), [AMD: Adrenalin Edition 26.11.1 Driver Release Notes, Nov. 12, 2026](https://www.amd.com/en/resources/support-articles/release-notes/RN-RAD-WIN-26-11-1.html), [Neowin, Nov. 18, 2026, 4:30 p.m. CT](https://www.neowin.net/news/amd-adrenalin-26112-extends-ssd-write-bug-fix-to-rx-5000-and-6000-gpus/), [NVIDIA GeForce Forums: GeForce GRD 621.14 Feedback Thread](https://www.nvidia.com/en-us/geforce/forums/game-ready-drivers/13/592433/geforce-grd-62114-feedback-thread-released-11426/), [NVIDIA GeForce Forums: Continuous writing of gigabytes to SSD to nvtopps](https://www.nvidia.com/en-us/geforce/forums/geforce-experience/13/592907/continuous-writing-of-gigabytes-to-ssd-to-nvtopps-/), [NVIDIA: GeForce 621.24 release notes, Nov. 12, 2026 (PDF)](https://us.download.nvidia.com/Windows/621.24/621.24-geforce-win11-x64-release-notes.pdf), [Neowin, Nov. 18, 2026, 12:50 p.m. CT](https://www.neowin.net/news/after-amd-nvidia-users-confirm-windows-driver-bug-quietly-degrades-your-ssd-over-time/), [Tom's Hardware, Nov. 18, 2026](https://www.tomshardware.com/pc-components/gpu-drivers/nvidia-geforce-driver-bug-reportedly-hammers-ssds-with-up-to-30gb-of-writes-per-hour-users-trace-massive-idle-wear-to-background-service-newer-driver-reportedly-still-affected), [Microsoft Support: System configuration tools in Windows](https://support.microsoft.com/en-us/windows/experience/system-configuration-tools-in-windows), [Microsoft Support: Use a screen reader to navigate Windows support tools](https://support.microsoft.com/en-us/accessibility/windows/use-a-screen-reader-to-navigate-windows-support-tools), [Microsoft Learn (archived blog): Resource Monitor tabs](https://learn.microsoft.com/en-us/archive/blogs/yongrhee/how-to-pull-the-information-that-resource-monitor-resmon-exe-provides)

*Cover:* Original typographic artwork by VetTV News. No third-party photos, screenshots, or leaked images were used.
