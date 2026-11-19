---
title: "Windows 11 26H2 Now Installs Automatically on More Personal PCs"
description: "Since November 18, Microsoft has been gradually delivering version 26H2 automatically to personal and non-managed business PCs on 24H2 and 25H2. Until now you had to check for it yourself. Here is what it changes, the open known issue, and how to pause it for up to 35 days."
summary: "Since November 18, Microsoft has been gradually delivering version 26H2 automatically to personal and non-managed business PCs on 24H2 and 25H2. Until now you had to check for it yourself. Here is what it changes, the open known issue, and how to pause it for up to 35 days."
pubDate: 2026-11-19
publishedAt: 2026-11-19T09:23:59-06:00
author: "Vet, VetTV Studios"
category: windows
type: news
tags: ["windows-11", "26h2", "windows-update"]
offTopic: true
trending: false
draft: false
cover: "covers/windows-11-26h2-automatic-rollout-nov-18.png"
sources:
  - title: "Microsoft Windows release health: Windows 11, version 26H2 known issues and notifications, status as of Nov. 18, 2026"
    url: "https://learn.microsoft.com/en-us/windows/release-health/status-windows-11-26H2"
  - title: "Microsoft Support: Pause updates in Windows"
    url: "https://support.microsoft.com/en-us/windows/deployment/updates-lifecycle/pause-updates-in-windows"
  - title: "Microsoft Support: Windows Update FAQ"
    url: "https://support.microsoft.com/en-us/windows/deployment/updates-lifecycle/windows-update-faq"
  - title: "Microsoft Lifecycle: Windows 11 Home and Pro"
    url: "https://learn.microsoft.com/en-us/lifecycle/products/windows-11-home-and-pro"
  - title: "Windows Report, Nov. 19, 2026"
    url: "https://windowsreport.com/microsoft-expands-windows-11-26h2-rollout-no-manual-update-check-needed/"
source: "Article Desk: windows-11-26h2-automatic-rollout-nov-18.md"
---
Windows 11 version 26H2, the Windows 11 2026 Update, is starting to install itself. Microsoft's [release health page for 26H2](https://learn.microsoft.com/en-us/windows/release-health/status-windows-11-26H2), current as of **November 18, 2026**, says the company is "gradually expanding automatic delivery, beginning with devices running Windows 11, versions 24H2 and 25H2, that are not managed by IT departments."

Until this week, 26H2 only showed up if you went looking for it. Microsoft says that "since late October 2026," every eligible device could get it "by manually checking for updates." We covered that stage when the [rollout reached full availability](/posts/windows-11-26h2-full-availability/) in October. [Windows Report](https://windowsreport.com/microsoft-expands-windows-11-26h2-rollout-no-manual-update-check-needed/) spotted the change to automatic delivery on November 19.

## Who gets it automatically

Microsoft says the automatic rollout covers "personal devices and non-managed business devices" and that it "depends on Windows Update settings." It is gradual, so not every eligible PC will get it right away. PCs managed by an IT department aren't part of this step.

If you'd rather not wait, Microsoft's instructions haven't changed: go to **Settings > Windows Update**, select **Check for Windows updates**, and if 26H2 is offered, select **Download & install**. Microsoft adds that if you want updates installed as soon as they're available, you can turn on **Get the latest updates as soon as they're available**.

## What actually changes

Not much you can see. Microsoft says 26H2 "contains all the recently announced features in Windows 11, versions 25H2 and 24H2" and is "delivered using servicing technology, providing a fast installation experience." Our read: like other recent Windows 11 version updates, it's a small package that switches on code already on up-to-date 24H2 and 25H2 PCs, rather than a full reinstall.

The bigger change is the support clock. Microsoft's [lifecycle page](https://learn.microsoft.com/en-us/lifecycle/products/windows-11-home-and-pro) lists the end date for 26H2 Home and Pro as **October 10, 2028**, compared with October 13, 2027 for 25H2. Version 24H2 Home and Pro already passed its listed end date in October 2026, so PCs still on it have the most to gain.

## Known issues to check first

The 26H2 release health page lists three issues. Only one is still open, and it's unlikely to affect a home PC:

- **SQL Server linked server connections might stay open (confirmed, open).** After updates from October 13 (KB5127648) and later are installed on server devices, connections that SQL Server linked server queries open to external databases such as Oracle and PostgreSQL can pile up instead of closing. Microsoft says it will fix this with an out-of-band update "in the next few days." Last updated November 12 at 12:50 p.m. CT.
- **Some USB Audio Class 1.0 devices failed to start or play sound (resolved).** Affected devices could show "This device cannot start (Code 10)" after installing 26H2. Microsoft says the November 10 security update (KB5132061) and later fix it.
- **Remote Desktop failures with error 0xC000000D for non-admin users (resolved).** This mainly hit enterprise PCs with Administrator protection enabled, and Microsoft says the October 28 update (KB5127936) and later resolve it.

Microsoft can also hold the update back from PCs with a known compatibility problem, which it calls a safeguard hold, and the page lists those when they apply.

## How to delay it

Microsoft doesn't offer a switch to skip 26H2 on a personal PC, but it does let you pause updates. According to Microsoft's [Pause updates support page](https://support.microsoft.com/en-us/windows/deployment/updates-lifecycle/pause-updates-in-windows):

1. Go to **Start > Settings > Windows Update**.
2. Next to **Pause updates**, select **Pick a date** and choose when updates should resume.

You can pause for up to **35 days** from the current date and extend the pause later, but each new end date also has to fall within 35 days of the day you extend it. While updates are paused, Windows won't download or install updates that need a restart, and any update already in progress is canceled. Pausing also holds back security fixes, and Microsoft's [Windows Update FAQ](https://support.microsoft.com/en-us/windows/deployment/updates-lifecycle/windows-update-faq) says that once you hit the pause limit, you need to install the latest updates before you can pause again.

## Opinion: let it come

*This section is opinion.* For most people, this is an update to let through. It's small, it installs quickly, it adds about a year of support compared with 25H2, and the only open issue on Microsoft's list is a server problem. Pausing makes sense if you're in the middle of a deadline or a trip, or if you rely on something Microsoft lists as affected. Just don't treat a pause as a way to stay off 26H2 for good, because it also delays security fixes.


*Sources:* [Microsoft Windows release health: Windows 11, version 26H2 known issues and notifications, status as of Nov. 18, 2026](https://learn.microsoft.com/en-us/windows/release-health/status-windows-11-26H2), [Microsoft Support: Pause updates in Windows](https://support.microsoft.com/en-us/windows/deployment/updates-lifecycle/pause-updates-in-windows), [Microsoft Support: Windows Update FAQ](https://support.microsoft.com/en-us/windows/deployment/updates-lifecycle/windows-update-faq), [Microsoft Lifecycle: Windows 11 Home and Pro](https://learn.microsoft.com/en-us/lifecycle/products/windows-11-home-and-pro), [Windows Report, Nov. 19, 2026](https://windowsreport.com/microsoft-expands-windows-11-26h2-rollout-no-manual-update-check-needed/)

*Cover:* Original typographic artwork by VetTV News. No third-party photos, screenshots, or leaked images were used.
