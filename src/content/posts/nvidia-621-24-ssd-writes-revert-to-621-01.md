---
title: "Users Say NVIDIA's 621.24 Driver Writes Tens of GB an Hour to SSDs"
description: "PC Gamer and users on NVIDIA's forums say GeForce Game Ready 621.24, which is still available to download, keeps rewriting a log file and can write tens of gigabytes an hour. NVIDIA hasn't confirmed the issue. Users say rolling back to 621.01, released October 21, stops it."
summary: "PC Gamer and users on NVIDIA's forums say GeForce Game Ready 621.24, which is still available to download, keeps rewriting a log file and can write tens of gigabytes an hour. NVIDIA hasn't confirmed the issue. Users say rolling back to 621.01, released October 21, stops it."
pubDate: 2026-11-20
publishedAt: 2026-11-20T08:19:36-06:00
author: "Vet, VetTV Studios"
category: tech
type: news
tags: ["nvidia", "geforce", "gpu-drivers"]
offTopic: true
trending: false
draft: false
cover: "covers/nvidia-621-24-ssd-writes-revert-to-621-01.png"
sources:
  - title: "PC Gamer, Nov. 20, 2026"
    url: "https://www.pcgamer.com/hardware/graphics-cards/pc-gamers-notice-nvidias-drivers-hammering-their-ssds-with-tens-of-gb-hr-of-unnecessary-writes-revert-to-621-01-asap/"
  - title: "NVIDIA: GeForce Game Ready Driver 621.24, released Nov. 12, 2026"
    url: "https://www.nvidia.com/en-us/geforce/drivers/details/285320/"
  - title: "NVIDIA: GeForce Game Ready Driver 621.01, released Oct. 21, 2026"
    url: "https://www.nvidia.com/en-us/geforce/drivers/details/282413/"
  - title: "NVIDIA: GeForce 621.24 release notes, Nov. 12, 2026 (PDF)"
    url: "https://us.download.nvidia.com/Windows/621.24/621.24-geforce-win11-x64-release-notes.pdf"
  - title: "NVIDIA GeForce Forums: GeForce GRD 621.14 Feedback Thread"
    url: "https://www.nvidia.com/en-us/geforce/forums/game-ready-drivers/13/592433/geforce-grd-62114-feedback-thread-released-11426/"
  - title: "NVIDIA GeForce Forums: GeForce GRD 621.24 Feedback Thread"
    url: "https://www.nvidia.com/en-us/geforce/forums/game-ready-drivers/13/592767/geforce-grd-62124-feedback-thread-released-111226/"
  - title: "NVIDIA GeForce Forums: Continuous writing of gigabytes to SSD to nvtopps"
    url: "https://www.nvidia.com/en-us/geforce/forums/geforce-experience/13/592907/continuous-writing-of-gigabytes-to-ssd-to-nvtopps-/"
  - title: "Tom's Hardware, Nov. 18, 2026"
    url: "https://www.tomshardware.com/pc-components/gpu-drivers/nvidia-geforce-driver-bug-reportedly-hammers-ssds-with-up-to-30gb-of-writes-per-hour-users-trace-massive-idle-wear-to-background-service-newer-driver-reportedly-still-affected"
  - title: "VetTV News, Nov. 19, 2026: AMD Extends Its Idle SSD-Write Fix to Older Radeons as NVIDIA Users Report Similar Writes"
    url: "https://news.vettvstudios.com/posts/gpu-driver-idle-ssd-writes-amd-26-11-2-nvidia-how-to-check/"
  - title: "Microsoft Support: System configuration tools in Windows"
    url: "https://support.microsoft.com/en-us/windows/experience/system-configuration-tools-in-windows"
source: "Article Desk: nvidia-621-24-ssd-writes-revert-to-621-01.md"
---
**This is user-reported. NVIDIA hasn't confirmed it.**

[PC Gamer](https://www.pcgamer.com/hardware/graphics-cards/pc-gamers-notice-nvidias-drivers-hammering-their-ssds-with-tens-of-gb-hr-of-unnecessary-writes-revert-to-621-01-asap/) reported on November 20 that NVIDIA's latest Game Ready driver package, [621.24](https://www.nvidia.com/en-us/geforce/drivers/details/285320/), is "needlessly writing to users' SSDs, in some cases by 30 GB every hour." The writes are tied to NVDisplay.Container.exe, the process behind the NVIDIA Display Container LS service, repeatedly rewriting a log file at C:\ProgramData\NVIDIA Corporation\nvtopps\nct\nvlog.nvlgstg. That is the same process and file path users described on NVIDIA's own forums, which we [covered on November 19](/posts/gpu-driver-idle-ssd-writes-amd-26-11-2-nvidia-how-to-check/).

NVIDIA's official [621.24 driver page](https://www.nvidia.com/en-us/geforce/drivers/details/285320/) lists a release date of November 12, 2026. We checked that page again on the morning of November 20, and the package was still available to download. The [621.24 release notes](https://us.download.nvidia.com/Windows/621.24/621.24-geforce-win11-x64-release-notes.pdf), dated November 12, do not mention excessive SSD writes. The "Open Issues in Version 621.24 WHQL" list is "N/A." As of the morning of November 20, we found no public statement from NVIDIA on its driver pages or in those notes.

## What users and PC Gamer say they're seeing

PC Gamer says reports have been appearing since November 15 on NVIDIA's GeForce forum and on other sites, including the Dell forum, Super User, and Reddit. We independently reviewed the NVIDIA forum threads on November 19; we did not re-read every third-party thread PC Gamer cites. The issue also does not show up on every PC, which we noted yesterday and which PC Gamer's coverage is consistent with.

The amounts vary, and they are individual measurements, not lab results:

- [Tom's Hardware](https://www.tomshardware.com/pc-components/gpu-drivers/nvidia-geforce-driver-bug-reportedly-hammers-ssds-with-up-to-30gb-of-writes-per-hour-users-trace-massive-idle-wear-to-background-service-newer-driver-reportedly-still-affected), on November 18, cited one estimate of up to 30 GB an hour on 621.24, and a five-minute idle test on 621.14 that measured about 515 MB of writes from that process.
- PC Gamer repeats the 30 GB an hour figure for some cases, and says that if the writes stay around 1–2 MB a second, that works out to roughly 5–7 GB an hour, "though some users suggest it gets much worse."
- On an older 621.01 install, PC Gamer's Jacob Ridley measured 63 MB of writes from NVDisplay.Container.exe in an hour of uptime.

## The rollback people are using is 621.01

NVIDIA's official [621.01 driver page](https://www.nvidia.com/en-us/geforce/drivers/details/282413/) lists a release date of October 21, 2026. Users in the forum threads, and PC Gamer, say reverting to 621.01 with a clean install stops the unnecessary writes. PC Gamer also mentions using Display Driver Uninstaller first. Neither the rollback nor any third-party uninstall tool is an NVIDIA recommendation, and we have not tested them.

Some users have also posted unofficial registry workarounds so they can stay on 621.24. Those do not come from NVIDIA, at least one was described as generated by an AI chatbot, and we are not publishing steps for them.

**Does this damage your SSD?** It's not proven. Heavy writes do use up an SSD's rated write endurance faster, but how much depends on the drive, how long the PC sits idle, and how large the log grows. Nobody in these reports has shown a drive failing because of it.

## How to check your own PC

You can do this with tools already in Windows. Microsoft describes [Task Manager](https://support.microsoft.com/en-us/windows/experience/system-configuration-tools-in-windows) as a way to monitor disk activity.

1. Press **Ctrl + Shift + Esc** to open Task Manager.
2. On **Processes**, enable the **Disk** column if it isn't visible and sort by it. Leave the PC idle for a few minutes and see whether NVDisplay.Container.exe stays near the top.
3. For a closer look, press **Windows + R**, type **resmon**, and open the **Disk** tab. Sort **Processes with Disk Activity** by **Write (B/sec)** and tick NVDisplay.Container.exe to see whether it is rewriting nvlog.nvlgstg.

A few MB per second that never stops while the PC is idle is the pattern these reports describe. Short bursts from Windows Update, antivirus, browsers, or game launchers are normal. Our [November 19 explainer](/posts/gpu-driver-idle-ssd-writes-amd-26-11-2-nvidia-how-to-check/) has a longer walkthrough, including the separate AMD fix in Adrenalin 26.11.2.

**Our take (opinion):** the reports are consistent enough to take seriously, especially if you're already on 621.24, but they are still user reports that NVIDIA hasn't addressed, and they don't reproduce on every machine. Five minutes in Resource Monitor will tell you more about your own PC than a headline will. If you don't see constant writes, there's no reason to roll back just because of this story.


*Cover:* Original typographic artwork by VetTV News. No third-party photos, screenshots, or leaked images were used.

*Sources:* [PC Gamer, Nov. 20, 2026](https://www.pcgamer.com/hardware/graphics-cards/pc-gamers-notice-nvidias-drivers-hammering-their-ssds-with-tens-of-gb-hr-of-unnecessary-writes-revert-to-621-01-asap/), [NVIDIA: GeForce Game Ready Driver 621.24, released Nov. 12, 2026](https://www.nvidia.com/en-us/geforce/drivers/details/285320/), [NVIDIA: GeForce Game Ready Driver 621.01, released Oct. 21, 2026](https://www.nvidia.com/en-us/geforce/drivers/details/282413/), [NVIDIA: GeForce 621.24 release notes, Nov. 12, 2026 (PDF)](https://us.download.nvidia.com/Windows/621.24/621.24-geforce-win11-x64-release-notes.pdf), [NVIDIA GeForce Forums: GeForce GRD 621.14 Feedback Thread](https://www.nvidia.com/en-us/geforce/forums/game-ready-drivers/13/592433/geforce-grd-62114-feedback-thread-released-11426/), [NVIDIA GeForce Forums: GeForce GRD 621.24 Feedback Thread](https://www.nvidia.com/en-us/geforce/forums/game-ready-drivers/13/592767/geforce-grd-62124-feedback-thread-released-111226/), [NVIDIA GeForce Forums: Continuous writing of gigabytes to SSD to nvtopps](https://www.nvidia.com/en-us/geforce/forums/geforce-experience/13/592907/continuous-writing-of-gigabytes-to-ssd-to-nvtopps-/), [Tom's Hardware, Nov. 18, 2026](https://www.tomshardware.com/pc-components/gpu-drivers/nvidia-geforce-driver-bug-reportedly-hammers-ssds-with-up-to-30gb-of-writes-per-hour-users-trace-massive-idle-wear-to-background-service-newer-driver-reportedly-still-affected), [VetTV News, Nov. 19, 2026: AMD Extends Its Idle SSD-Write Fix to Older Radeons as NVIDIA Users Report Similar Writes](/posts/gpu-driver-idle-ssd-writes-amd-26-11-2-nvidia-how-to-check/), [Microsoft Support: System configuration tools in Windows](https://support.microsoft.com/en-us/windows/experience/system-configuration-tools-in-windows)

*Cover:* Original typographic artwork by VetTV News. No third-party photos, screenshots, or leaked images were used.
