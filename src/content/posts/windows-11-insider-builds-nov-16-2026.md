---
title: "Windows 11 Insider Builds 26320.10003 and 26340.10013 Arrive November 16"
description: "The Beta notes focus on File Explorer and BitLocker PIN changes. Taskbar list view, Magnifier gestures, FIDO2 per-passkey management, and Intune Remote Lock appear in the Experimental notes, not the Beta notes."
summary: "The Beta notes focus on File Explorer and BitLocker PIN changes. Taskbar list view, Magnifier gestures, FIDO2 per-passkey management, and Intune Remote Lock appear in the Experimental notes, not the Beta notes."
pubDate: 2026-11-17
publishedAt: 2026-11-17T08:15:22-06:00
author: "Vet, VetTV Studios"
category: windows
type: news
tags: ["windows-11", "windows-insider", "microsoft"]
offTopic: true
trending: false
draft: false
cover: "covers/windows-11-insider-builds-nov-16-2026.png"
sources:
  - title: "Windows Insider Blog: Announcing new builds for 16 November 2026"
    url: "https://blogs.windows.com/windows-insider/2026/11/16/announcing-new-builds-for-16-november-2026/"
  - title: "Microsoft Learn: Beta Preview Build 26320.10003"
    url: "https://learn.microsoft.com/en-us/windows-insider/release-notes/beta/preview-build-26320-10003"
  - title: "Microsoft Learn: Experimental Preview Build 26340.10013"
    url: "https://learn.microsoft.com/en-us/windows-insider/release-notes/experimental/preview-build-26340-10013"
source: "Article Desk: windows-11-insider-builds-nov-16-2026.md"
---
Microsoft [posted new Windows 11 Insider Preview builds](https://blogs.windows.com/windows-insider/2026/11/16/announcing-new-builds-for-16-november-2026/) on November 16, in a Windows Insider Blog entry by Stephen Lines. The overview lists Beta build 26320.10003 and Experimental build 26340.10013. "Please note that we are temporarily blocking movement from Experimental or Beta to Experimental (Future Platforms), we are working to resolve this as soon as possible," the post says.

The [Beta release notes](https://learn.microsoft.com/en-us/windows-insider/release-notes/beta/preview-build-26320-10003) and [Experimental release notes](https://learn.microsoft.com/en-us/windows-insider/release-notes/experimental/preview-build-26340-10013) on Microsoft Learn are both dated 16 November 2026. Each says the updates are based on Windows 11, version 26H2, via an enablement package. Microsoft reminds Insiders that features in these builds might change, be removed, or never ship beyond the program.

## Experimental 26340.10013

The overview marks Advanced security key management as "Release channel: Experimental." The Experimental notes say you can "see the passkeys stored on a FIDO2 (Fast Identity Online 2) security key and remove them one at a time, instead of resetting the entire key," and that admins can configure settings such as minimum PIN length, always-required user verification, and enterprise attestation.

The same Experimental notes describe Remote Lock, which "lets IT lock a lost, stolen or compromised Windows device from Microsoft Intune without wiping it." Windows "signs out every active session, hides all sign-in options and shows a Device Locked screen." Microsoft says nothing is erased: the device stays enrolled and managed, BitLocker stays on, and user data stays in place. Only an admin can lift the lock remotely.

On the taskbar, Experimental notes say you can "choose to use the list view anytime." When that option is on, hovering over an app shows its open windows by title in a list instead of as previews. The setting is under Settings > Personalization > Taskbar.

Magnifier, the notes say, now supports touchpad and touch gestures. Both gesture sets "are on by default," and can be turned off under Settings > Accessibility > Magnifier. The Experimental notes also list a preview of the Microsoft Pluton Cryptographic Provider on supported devices, and a change that prompts users switching from a Microsoft account to a local account to back up their BitLocker recovery key.

## Beta 26320.10003

Those taskbar, Magnifier, FIDO2, Remote Lock, and Pluton items do not appear in the Beta 26320.10003 notes.

The Beta notes say search from This PC in File Explorer "is now indexer-based, making it much faster and consistent with search from File Explorer Home," and that progress indication is improved when navigating to slower locations such as network drives. They also say standard users on managed devices can now set a BitLocker preboot PIN when the listed Intune (or other MDM) policies apply. The same BitLocker PIN item also appears in the Experimental notes.

Both channel notes say Microsoft is removing the Offline Maps feature and related Settings pages, following an April 2025 deprecation announcement for the Windows UWP Map control and Maps platform APIs. Both also list a Remote Desktop certificate-mismatch fix, input fixes including an invisible mouse cursor, and a known issue that the CPU speed shown in Task Manager may stop updating.

*Sources:* [Windows Insider Blog: Announcing new builds for 16 November 2026](https://blogs.windows.com/windows-insider/2026/11/16/announcing-new-builds-for-16-november-2026/), [Microsoft Learn: Beta Preview Build 26320.10003](https://learn.microsoft.com/en-us/windows-insider/release-notes/beta/preview-build-26320-10003), [Microsoft Learn: Experimental Preview Build 26340.10013](https://learn.microsoft.com/en-us/windows-insider/release-notes/experimental/preview-build-26340-10013)
