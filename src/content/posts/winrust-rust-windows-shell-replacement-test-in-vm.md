---
title: "WinRust Replaces the Windows Taskbar and Explorer. The Author Says Try It in a VM First"
description: "The project was created November 17 and already has a fast-growing GitHub star count. Its installer is unsigned, needs administrator rights, and changes core Windows components. A user reported a Wi-Fi problem today. Here's what the repo itself says, and why this is one to test in a virtual machine."
summary: "The project was created November 17 and already has a fast-growing GitHub star count. Its installer is unsigned, needs administrator rights, and changes core Windows components. A user reported a Wi-Fi problem today. Here's what the repo itself says, and why this is one to test in a virtual machine."
pubDate: 2026-11-19
publishedAt: 2026-11-19T16:05:47-06:00
author: "Vet, VetTV Studios"
category: windows
type: news
tags: ["winrust", "windows-11", "windows-10"]
offTopic: true
trending: false
draft: false
cover: "covers/winrust-rust-windows-shell-replacement-test-in-vm.png"
sources:
  - title: "GitHub repository: Lemxy/WinRust"
    url: "https://github.com/Lemxy/WinRust"
  - title: "GitHub API for Lemxy/WinRust, checked for created date, star count and license field"
    url: "https://api.github.com/repos/Lemxy/WinRust"
  - title: "WinRust README on the main branch, checked Nov. 19, 2026"
    url: "https://github.com/Lemxy/WinRust/blob/main/README.md"
  - title: "WinRust v0.4.1 release notes, published Nov. 19, 2026, 8:24 a.m. CT"
    url: "https://github.com/Lemxy/WinRust/releases/tag/v0.4.1"
  - title: "WinRust issue #22, 'Wifi issue,' filed Nov. 19, 2026, 3:38 p.m. CT"
    url: "https://github.com/Lemxy/WinRust/issues/22"
  - title: "WinRust source: rust-search scheduled task (SYSTEM, at boot)"
    url: "https://github.com/Lemxy/WinRust/blob/main/plugins/rust-search/src/main.rs"
  - title: "WinRust source: topbar scheduled task (RunLevel Highest, at logon)"
    url: "https://github.com/Lemxy/WinRust/blob/main/src/install/topbar.rs"
  - title: "WinRust source: installer manifest requesting administrator rights"
    url: "https://github.com/Lemxy/WinRust/blob/main/app.manifest"
source: "Article Desk: winrust-rust-windows-shell-replacement-test-in-vm.md"
---
WinRust is a new attempt, posted in a public GitHub repository, to replace parts of the Windows 10 and Windows 11 shell with small programs written in Rust. The [GitHub repository](https://github.com/Lemxy/WinRust), created on **November 17, 2026, at 8:27 a.m. CT**, describes itself as a "Windows shell replacement in Rust: taskbar, file manager, NTFS search, task manager, disk cleaner." Its [README](https://github.com/Lemxy/WinRust/blob/main/README.md) also lists a disk-usage map and a photo viewer. The latest release, [WinRust v0.4.1](https://github.com/Lemxy/WinRust/releases/tag/v0.4.1), was published on **November 19, 2026, at 8:24 a.m. CT**. GitHub's [repository API](https://api.github.com/repos/Lemxy/WinRust) showed **299 stars** as of **4:00 p.m. CT** the same day. The count is moving quickly.

VetTV News has not installed WinRust and is not recommending that you install it on a PC you rely on. This is a report on what the public project says about itself, plus one user-filed issue.

## What a default install changes

The README says you download WinRust.exe for Windows 10 or 11 (x64), run it as administrator, and install the components you tick. "All are ticked by default." According to that table, a default install:

- Turns off the Windows Search service, blocks SearchHost.exe and hides the taskbar search box (the rust-search plugin).
- Hides the stock Windows taskbar (the topbar plugin).
- Stops File Explorer from being the shell, so folders and drives open in WinRust's file manager instead, and turns off or changes several services, including PcaSvc, InventorySvc, lfsvc and cbdhsvc, while setting DoSvc to manual (the rust-explorer plugin).
- Redirects Task Manager to WinRust's own task manager, without replacing the system file, and also installs a disk cleaner.

The installer itself asks for administrator rights. The project's [application manifest](https://github.com/Lemxy/WinRust/blob/main/app.manifest) in the public source sets requestedExecutionLevel to requireAdministrator. The README and the v0.4.1 release notes both say the exe is not code-signed, "so SmartScreen will warn you."

The public installer source also registers scheduled tasks as part of a normal install. [rust-search's source](https://github.com/Lemxy/WinRust/blob/main/plugins/rust-search/src/main.rs) says it runs its search server "at every boot as a SYSTEM scheduled task." The [topbar installer](https://github.com/Lemxy/WinRust/blob/main/src/install/topbar.rs) registers a logon task for the signed-in user with RunLevel Highest, which in Task Scheduler means the task can run elevated. These details come from the project's own source on GitHub, not from a test install.

## Why that matters

None of this is hidden. The README puts a warning at the top: "WinRust turns off Windows Search, hides the taskbar and can turn off Explorer as the shell. The exe is not code-signed, so SmartScreen will warn you. A restore point is created before install, but try it on a spare machine or a VM first."

Two other gaps are worth spelling out. First, as of our checks between 3:58 and 4:00 p.m. CT on November 19, the repository had no license file, and GitHub's API listed the license as none. Second, the v0.4.1 download is a prebuilt WinRust.exe uploaded to the release by the repository owner, Lemxy. We did not find a published hash or CI artifact that would let a reader confirm that file matches a build of the tagged source.

## A user report of locked Wi-Fi

[Issue #22](https://github.com/Lemxy/WinRust/issues/22), filed on November 19 at 3:38 p.m. CT by GitHub user anonimodj-ops and still open with no comments when we read it at about 3:58 p.m. CT, is titled "Wifi issue." The report says Wi-Fi on the user's laptop was disabled and could not be turned back on, and that it "works good again" after going "Back to normal windows topbar."

That is one user's report. VetTV News has not reproduced it, and the developer had not replied in the thread at the time we checked.

## The optional purge mode

A separate plugin, purge, is not part of the default "install everything" set. The README and the v0.4.1 release notes say it is command-line only, irreversible, and modeled on the kind of cleanup Tiny11 does: it removes built-in apps such as Clipchamp, News, Weather, Xbox overlays, Teams, Cortana, Widgets and Skype, plus telemetry scheduled tasks, for all users and from the Windows image. The Store, Settings, Start and runtimes are listed as left in place.

The v0.4.1 release notes say a dry run of the app and task lists has been checked, but "purge.exe --apply has not been run on a real system, so the removal itself is untested." The notes tell readers to run purge.exe first, read the list, "and try it on a spare machine or a VM before your main one."

## What the author gets right, and what we haven't checked

Credit where it's due: the README is blunt about the installer's lack of a code signature, the changes to Search, the taskbar and Explorer, the restore point, and the advice to use a spare machine or a VM. "Remove all" in the installer is described as putting Windows Search, the taskbar, Explorer and the services back. If the screen is left without a taskbar or desktop, the README says to start explorer.exe from Task Manager and then use Remove all.

VetTV Tech, which tipped us to the project, read the public source and said it did not find hidden downloads, changes to Microsoft Defender, or anything that looked like malware. That was VetTV Tech's read of the source, not a security audit. VetTV News has not installed WinRust, has not examined the prebuilt installer binary beyond the project's own description, and has not audited the code.

## Opinion: too new, test it in a VM first

*This section is opinion.* Two days is not a long record for software that hides the Windows taskbar, takes over Explorer, turns off Search, and installs tasks that run elevated or as SYSTEM. The author is being forthright about those changes and about purge being untested. A user has already reported a Wi-Fi problem that went away after returning to the stock taskbar. If you want to try WinRust, do what the README says: use a spare PC or a virtual machine, not the computer you need tomorrow. This is not a malware warning, and it is not an endorsement.


*Cover:* Original typographic artwork by VetTV News. No third-party photos, screenshots, or leaked images were used.

*Sources:* [GitHub repository: Lemxy/WinRust](https://github.com/Lemxy/WinRust), [GitHub API for Lemxy/WinRust, checked for created date, star count and license field](https://api.github.com/repos/Lemxy/WinRust), [WinRust README on the main branch, checked Nov. 19, 2026](https://github.com/Lemxy/WinRust/blob/main/README.md), [WinRust v0.4.1 release notes, published Nov. 19, 2026, 8:24 a.m. CT](https://github.com/Lemxy/WinRust/releases/tag/v0.4.1), [WinRust issue #22, 'Wifi issue,' filed Nov. 19, 2026, 3:38 p.m. CT](https://github.com/Lemxy/WinRust/issues/22), [WinRust source: rust-search scheduled task (SYSTEM, at boot)](https://github.com/Lemxy/WinRust/blob/main/plugins/rust-search/src/main.rs), [WinRust source: topbar scheduled task (RunLevel Highest, at logon)](https://github.com/Lemxy/WinRust/blob/main/src/install/topbar.rs), [WinRust source: installer manifest requesting administrator rights](https://github.com/Lemxy/WinRust/blob/main/app.manifest)

*Cover:* Original typographic artwork by VetTV News. No third-party photos, screenshots, or leaked images were used.
