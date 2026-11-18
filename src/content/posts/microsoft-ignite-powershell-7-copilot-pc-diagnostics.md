---
title: "Microsoft Says Next Windows Will Ship PowerShell 7 and Add Copilot PC Diagnostics"
description: "Windows PowerShell 5.1 is deprecated but still supported. Local PC diagnostics are coming soon to Copilot+ PCs, Microsoft said."
summary: "Windows PowerShell 5.1 is deprecated but still supported. Local PC diagnostics are coming soon to Copilot+ PCs, Microsoft said."
pubDate: 2026-11-18
publishedAt: 2026-11-18T08:24:14-06:00
author: "Vet, VetTV Studios"
category: windows
type: news
tags: ["windows", "powershell", "copilot"]
offTopic: true
trending: false
draft: false
cover: "covers/microsoft-ignite-powershell-7-copilot-pc-diagnostics.png"
sources:
  - title: "Microsoft Windows Experience Blog: Building Windows for the next era of work, Nov. 17, 2026"
    url: "https://blogs.windows.com/windowsexperience/2026/11/17/microsoft-ignite-2026-building-windows-for-the-next-era-of-work/"
  - title: "PowerShell Team: PowerShell 7 is coming to Windows, Nov. 17, 2026"
    url: "https://devblogs.microsoft.com/powershell/powershell-7-coming-to-windows/"
  - title: "Microsoft Support KB5137172: Windows PowerShell 5.1 Deprecation, Nov. 17, 2026"
    url: "https://support.microsoft.com/en-us/servicing/os/windows/docs/2026/11/kb5137172-windows-powershell-5-1-deprecation"
source: "Article Desk: microsoft-ignite-powershell-7-copilot-pc-diagnostics.md"
---
Microsoft said on November 17 that the next version of Windows will include PowerShell 7, and that Windows PowerShell 5.1 is now deprecated. The same day, in a [Windows Experience Blog post](https://blogs.windows.com/windowsexperience/2026/11/17/microsoft-ignite-2026-building-windows-for-the-next-era-of-work/) published for Microsoft Ignite 2026, Pavan Davuluri, executive vice president of Windows + Devices, said local PC diagnostics are "coming soon" to Copilot+ PCs.

The PowerShell change is described in a [PowerShell Team post](https://devblogs.microsoft.com/powershell/powershell-7-coming-to-windows/) by Jason Helmick, a senior product manager, and in [Microsoft support article KB5137172](https://support.microsoft.com/en-us/servicing/os/windows/docs/2026/11/kb5137172-windows-powershell-5-1-deprecation), both dated November 17, 2026. The Ignite Windows post does not mention PowerShell 7.

## PowerShell 7 in the next version of Windows

Helmick wrote: "Beginning with the next release of Windows, PowerShell 7 will be included as the upgrade for Windows PowerShell 5.1."

KB5137172 states: "Windows PowerShell 5.1 is deprecated. It's no longer in active development. Windows PowerShell 5.1 is still part of Windows, and it's still supported. It will continue to receive security updates according to the lifecycle of each version of Windows. Scripts and tools that rely on it will continue to run."

The article's timeline says Windows Server 2025 and Windows 11, version 26H2 "are the last versions of Windows to include PowerShell 5.1 enabled by default." In the "Next Version of Windows," it says Windows PowerShell 5.1 "will be available as a Feature on Demand (FOD), enabled by default on new Windows installs." A "Future Version of Windows" is listed as "Not available." The article also says: "Windows PowerShell 5.1 will be removed from a future version of Windows. Timing will be based on usage data and communicated in advance."

Helmick said PowerShell 7 "is designed to be used side by side with Windows PowerShell 5.1" and that "Your existing automation needs no changes." Windows PowerShell 5.1 "continues to run your scripts, scheduled tasks, and services, and you move to PowerShell 7 when you're ready." The support article's FAQ makes the same point: "No change is required right now."

The FAQ also says `powershell.exe` runs Windows PowerShell 5.1 and `pwsh.exe` runs PowerShell 7 or later.

Helmick wrote that PowerShell 7 is delivered as an MSIX package, and that MSIX "still needs work to match some things that worked with the MSI installer." The gaps he lists, which "are in progress now," are:

- Running as the SYSTEM account, "which affects scheduled tasks, services, device-management scripts, and remoting"
- Support for the DISM cmdlets, such as `Add-WindowsCapability`
- Support for machine-wide settings, such as the all-users profile

Microsoft did not name the next Windows release in the PowerShell post or in KB5137172, and it did not give a calendar date for when PowerShell 7 will ship in the box.

## Local PC diagnostics on Copilot+ PCs

Davuluri's Ignite post describes "three local capabilities" that "are coming soon to Copilot+ PCs": local context, local actions, and local models.

On diagnostics, the post says: "Local PC diagnostics brings the same simplicity to troubleshooting. Copilot can run a read-only scan of the system to help find the root cause of errors or performance issues, then explain what's going on in clear terms." The post continues: "Figuring out why your Bluetooth audio isn't working or why your network connection is slow takes a quick question instead of a support call."

The post also says Microsoft is "making it seamless to move into Copilot right from" the "new Windows Search experience," "for people who choose it." Those capabilities are described as coming soon. The post does not say they are generally available.

*Sources:* [Microsoft Windows Experience Blog: Building Windows for the next era of work, Nov. 17, 2026](https://blogs.windows.com/windowsexperience/2026/11/17/microsoft-ignite-2026-building-windows-for-the-next-era-of-work/), [PowerShell Team: PowerShell 7 is coming to Windows, Nov. 17, 2026](https://devblogs.microsoft.com/powershell/powershell-7-coming-to-windows/), [Microsoft Support KB5137172: Windows PowerShell 5.1 Deprecation, Nov. 17, 2026](https://support.microsoft.com/en-us/servicing/os/windows/docs/2026/11/kb5137172-windows-powershell-5-1-deprecation)
