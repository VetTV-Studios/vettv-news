---
title: "Some PCs Can't Install Windows 11's Optional KB5132057 Preview, Users Report"
description: "Microsoft Q&A threads document install failures with several error codes, including 0x800f0993 and 0x800f0989. As of November 25, Microsoft's KB5132057 support page still does not list those errors as a known issue."
summary: "Microsoft Q&A threads document install failures with several error codes, including 0x800f0993 and 0x800f0989. As of November 25, Microsoft's KB5132057 support page still does not list those errors as a known issue."
pubDate: 2026-11-25
publishedAt: 2026-11-25T13:48:12-06:00
author: "Vet, VetTV Studios"
category: windows
type: news
tags: ["windows-11","kb5132057","windows-update"]
offTopic: true
trending: false
draft: false
cover: "covers/windows-11-kb5132057-optional-preview-install-errors.png"
sources:
  - title: "Microsoft Support: November 19, 2026 — KB5132057 (OS Builds 26300.10075 and 26200.10075) Preview, rechecked Nov. 25, 2026, 1:46 p.m. CT"
    url: "https://support.microsoft.com/en-us/servicing/os/windows-11/2026/11/kb5132057-windows-11-25h2-26h2-update"
  - title: "Microsoft Q&A: Windows 11 update install error 0x800F0993, opened Nov. 22, 2026"
    url: "https://learn.microsoft.com/en-us/answers/questions/6079310/windows-11-update-install-error-0x800f0993"
  - title: "Microsoft Q&A: We couldn't install this update, but you can try again (0x800f0989), opened Nov. 21, 2026"
    url: "https://learn.microsoft.com/en-us/answers/questions/6078086/we-couldnt-install-this-update-but-you-can-try-aga"
  - title: "Microsoft Q&A: (KB5132057) (26300.10075) will not install, opened Nov. 20, 2026, including reports of 0xc000012f, 0x800f081f, and 0x800736b3"
    url: "https://learn.microsoft.com/en-us/answers/questions/6077949/kb5132057-26300-10075-will-not-install"
  - title: "Microsoft Q&A: How to fix 2026-11 Preview Update (KB5132057) (26300.10075 Install error - 0x800f081f), opened Nov. 24, 2026"
    url: "https://learn.microsoft.com/en-us/answers/questions/6081719/how-to-fix-2026-11-preview-update-kb5132057-26300"
  - title: "Windows Central, Nov. 25, 2026: some users are hitting KB5132057 install errors"
    url: "https://www.windowscentral.com/microsoft/windows-11/windows-11-kb5132057-install-errors"
  - title: "VetTV News: Windows 11's Optional KB5132057 Preview Adds a New Search Experience"
    url: "https://news.vettvstudios.com/posts/windows-11-kb5132057-optional-preview-new-search/"
source: "Article Desk: windows-11-kb5132057-optional-preview-install-errors.md"
---

Microsoft's optional, non-security preview [KB5132057](https://support.microsoft.com/en-us/servicing/os/windows-11/2026/11/kb5132057-windows-11-25h2-26h2-update), released November 19 for Windows 11 versions 26H2 and 25H2, is failing to install on some PCs, according to users on Microsoft Q&A. We [covered the preview itself](/posts/windows-11-kb5132057-optional-preview-new-search/) when it shipped, including the new Windows Search experience.

This is **not** a Microsoft acknowledgment that the update is broken. We rechecked the official KB5132057 support page at 1:46 p.m. CT on November 25. Its only listed known issue is still the SQL Server linked-server connection problem Microsoft has noted since October. The page does not mention these install errors.

## What users are reporting

Several Microsoft Q&A threads describe the preview failing with a "We couldn't install this update, but you can try again" message, or a similar install failure, and they cite different error codes:

- [0x800F0993](https://learn.microsoft.com/en-us/answers/questions/6079310/windows-11-update-install-error-0x800f0993), in a thread opened November 22 about the 2026-11 Preview Update (KB5132057) for build 26300.10075
- [0x800f0989](https://learn.microsoft.com/en-us/answers/questions/6078086/we-couldnt-install-this-update-but-you-can-try-aga), in a thread opened November 21 about the same preview
- [0xc000012f](https://learn.microsoft.com/en-us/answers/questions/6077949/kb5132057-26300-10075-will-not-install), in a thread opened November 20; later comments in that thread also report **0x800f081f** and **0x800736b3**
- A separate thread opened November 24 is specifically about [install error 0x800f081f](https://learn.microsoft.com/en-us/answers/questions/6081719/how-to-fix-2026-11-preview-update-kb5132057-26300)

[Windows Central](https://www.windowscentral.com/microsoft/windows-11/windows-11-kb5132057-install-errors) reported the same set of codes on November 25, and said it did not appear to be a widespread failure "judging by the usual online communities." We have not independently measured how common the failures are.

## What has, and has not, been promised

An independent advisor on the Microsoft Q&A threads, Estrella721, has told multiple users that KB5132057 is an optional November preview they "can safely skip," and that these preview updates are test releases for a full version "which will be rolled out on the second Tuesday of December." The second Tuesday of December 2026 is **December 8**.

[Windows Central](https://www.windowscentral.com/microsoft/windows-11/windows-11-kb5132057-install-errors) went further, reporting that "the full version, including fixes for this specific installation issue, is expected to arrive" with December 8's Patch Tuesday update, which "arrives automatically for most Windows 11 users." That timing and the claim that December's update will include a fix for these install errors are Windows Central's reporting and the advisor's guidance, **not** language we found on Microsoft's KB5132057 page.

KB5132057 is listed under Optional updates. You do not have to install it. *Our take (opinion):* if the preview fails on your PC, skip it and wait for the regular December cumulative update rather than chasing community workarounds.

*Sources:* [Microsoft Support: November 19, 2026 — KB5132057 Preview, rechecked Nov. 25, 2026, 1:46 p.m. CT](https://support.microsoft.com/en-us/servicing/os/windows-11/2026/11/kb5132057-windows-11-25h2-26h2-update), [Microsoft Q&A: install error 0x800F0993](https://learn.microsoft.com/en-us/answers/questions/6079310/windows-11-update-install-error-0x800f0993), [Microsoft Q&A: 0x800f0989](https://learn.microsoft.com/en-us/answers/questions/6078086/we-couldnt-install-this-update-but-you-can-try-aga), [Microsoft Q&A: KB5132057 will not install, including 0xc000012f, 0x800f081f, and 0x800736b3](https://learn.microsoft.com/en-us/answers/questions/6077949/kb5132057-26300-10075-will-not-install), [Microsoft Q&A: install error 0x800f081f](https://learn.microsoft.com/en-us/answers/questions/6081719/how-to-fix-2026-11-preview-update-kb5132057-26300), [Windows Central, Nov. 25, 2026](https://www.windowscentral.com/microsoft/windows-11/windows-11-kb5132057-install-errors), [VetTV News: Windows 11's Optional KB5132057 Preview Adds a New Search Experience](/posts/windows-11-kb5132057-optional-preview-new-search/)

*Cover image: Microsoft, https://blogs.windows.com/windows-insider/2026/10/07/from-searching-to-doing-building-a-faster-more-streamlined-windows-search/*
