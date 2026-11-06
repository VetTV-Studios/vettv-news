---
title: "Virtual Intel Mac 2.0 Runs Mac OS X Tiger Through Big Sur on Apple Silicon"
description: "The open-source app virtualizes every Intel macOS from 10.4 to 11 with graphics acceleration, so older 32-bit apps and even some PowerPC software can run on modern Macs"
summary: "The open-source app virtualizes every Intel macOS from 10.4 to 11 with graphics acceleration, so older 32-bit apps and even some PowerPC software can run on modern Macs"
pubDate: 2026-11-05
publishedAt: 2026-11-05T18:37:08-06:00
author: "Vet, VetTV Studios"
category: macos
type: news
tags: ["virtual-intel-mac", "apple-silicon", "macos"]
offTopic: true
trending: false
draft: false
cover: "covers/virtual-intel-mac-2-0-apple-silicon-tiger-through-big-sur.png"
sources:
  - title: "GitHub: VirtualIntelMacOnAppleSilicon"
    url: "https://github.com/nfzerox/VirtualIntelMacOnAppleSilicon"
  - title: "GitHub: Virtual Intel Mac 2.0 release"
    url: "https://github.com/nfzerox/VirtualIntelMacOnAppleSilicon/releases/tag/2.0"
  - title: "OSXDaily (secondary)"
    url: "https://osxdaily.com/2026/11/05/run-mac-os-x-tiger-snow-leopard-lion-etc-on-apple-silicon-macs-with-virtual-intel-mac/"
  - title: "OSXDaily on X"
    url: "https://x.com/osxdaily/status/2118440416341287317"
source: "Article Desk: virtual-intel-mac-2-0-apple-silicon-tiger-through-big-sur.md"
---
Apple Silicon Macs can now run classic Intel versions of Mac OS X and macOS inside a free open-source app called Virtual Intel Mac. Version [2.0](https://github.com/nfzerox/VirtualIntelMacOnAppleSilicon/releases/tag/2.0), released November 3, adds Mac OS X Tiger 10.4 through macOS High Sierra 10.13 with graphics acceleration, joining earlier support for Mojave through Big Sur.

OSXDaily [covered](https://osxdaily.com/2026/11/05/run-mac-os-x-tiger-snow-leopard-lion-etc-on-apple-silicon-macs-with-virtual-intel-mac/) the project on November 5, and its [X post](https://x.com/osxdaily/status/2118440416341287317) pointed readers to the how-to.

## What it runs

According to the [GitHub README](https://github.com/nfzerox/VirtualIntelMacOnAppleSilicon), guest systems include Mac OS X Tiger 10.4, Leopard 10.5, Snow Leopard 10.6, Lion 10.7, Mountain Lion 10.8, Mavericks 10.9, Yosemite 10.10, El Capitan 10.11, Sierra 10.12, High Sierra 10.13, Mojave 10.14, Catalina 10.15 and Big Sur 11. Monterey 12 and later can be run through VirtualBuddy or UTM, the project says.

The README says that means older 32-bit and 64-bit Intel apps such as iWork '09, iLife '11, Aperture, Final Cut Pro 7 and Front Row, plus PowerPC apps such as AppleWorks through Rosetta on Tiger through Snow Leopard.

## Graphics and features

OpenGL acceleration is available in Tiger through High Sierra guests. Metal and OpenGL are available in Mojave, Catalina and Big Sur guests for 64-bit apps; on Mojave, 32-bit apps currently use software OpenGL. The app also supports Retina resolution, live resizing, USB and audio passthrough, shared and bridged networking, file sharing, remote login and clipboard sync.

Hosts: macOS 27 Golden Gate, macOS Tahoe 26 and macOS Sequoia 15. The app is Universal, so it also runs on Intel Macs.

## Setup notes

The project says installing a guest generally takes about an hour and may take up to two, then about 15–30 minutes for graphics drivers. Automatic Setup can create an account, enable file sharing and remote login, and turn on automatic login. To avoid account lockouts, the README says signing into iCloud or an Apple Account inside the guest "is not supported."

*Opinion:* for anyone who still needs Aperture, Final Cut Pro 7 or classic Aqua, this is the kind of preservation project that used to take a spare Intel Mac. Keeping a legal install image of each guest is still on you.
