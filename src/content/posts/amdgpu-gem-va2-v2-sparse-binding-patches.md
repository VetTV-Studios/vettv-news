---
title: "AMDGPU Patches Would Batch Sparse Bindings to Cut Proton Stutters"
description: "The Nov. 17 v2 series is under review and includes no benchmarks. Userspace would need to adopt the new ioctl before players could benefit."
summary: "The Nov. 17 v2 series is under review and includes no benchmarks. Userspace would need to adopt the new ioctl before players could benefit."
pubDate: 2026-11-18
publishedAt: 2026-11-18T09:06:58-06:00
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["amdgpu", "proton", "linux"]
offTopic: true
trending: false
draft: false
cover: "covers/amdgpu-gem-va2-v2-sparse-binding-patches.png"
sources:
  - title: "Natalie Vock, About, pixelcluster.dev"
    url: "https://pixelcluster.dev/about/"
  - title: "VideoCardz: Valve posts AMDGPU patches to reduce stutter in some Proton games"
    url: "https://videocardz.com/newz/valve-posts-amdgpu-patches-to-reduce-stutter-in-some-proton-games"
source: "Article Desk: amdgpu-gem-va2-v2-sparse-binding-patches.md"
---
Natalie Vock [posted](https://lore-kernel.gnuweeb.org/dri-devel/20261117-prt-explicit-sync-v2-0-bb3851cb6a0c@pixelcluster.dev/) version 2 of a 10-patch series for the Linux AMDGPU kernel driver on November 17, 2026, at 13:50 +0100 (6:50 a.m. CT). The cover letter, sent to the dri-devel and amd-gfx lists, is titled "[PATCH v2 00/10] drm/amdgpu: Rework VM update ops for batching and explicit sync."

The patches are signed "Natalie Vock <nat@pixelcluster.dev>." They do not state an employer. On [her site](https://pixelcluster.dev/about/), Vock writes: "I'm working as an independent contractor for Valve on RADV, the community-developed open-source Vulkan driver for AMD GPUs."

## Sparse bindings and hitches

Vock describes the series as "v2 of my attempt at improving sparse binding perf." She writes that many games "have come to heavily use sparse bindings, and they often rely on being able to overlap frame work on gfx/compute queues with sparse binding work on sdma."

"If PRT mappings are synced to every other submissions like they are right now, heavy sparse binding load can stall the gfx/compute submissions for quite a long while, leading to very noticeable stutters and hitches."

She also writes that "each sparse binding update requires a separate ioctl, so the CPU will also spend significant time constantly switching between user and kernel mode to execute the binding changes one at a time."

## AMDGPU_GEM_VA2

The ninth patch [adds](https://lore-kernel.gnuweeb.org/dri-devel/20261117-prt-explicit-sync-v2-9-bb3851cb6a0c@pixelcluster.dev/) a new ioctl, AMDGPU_GEM_VA2. Vock calls it "a modernized version of AMDGPU_GEM_VA, with the main changes being support for many operations batched in one ioctl, and a better sync model that allows passing multiple syncobjs for both wait and signal."

"One breaking change compared to AMDGPU_GEM_VA is that synchronization is now explicit (where possible), meaning that previous submissions are not necessarily waited on."

She writes: "Using this ioctl allows applications that hammer lots of sparse operations, particularly some games running under Proton, to see significant reductions in stuttering."

The cover letter says v2 "Added pending change structures to update context in order to batch changes," and links a first version from May. Neither the cover letter nor the AMDGPU_GEM_VA2 patch includes game benchmarks.

## Still under review

The series was posted as patches for review on dri-devel. It is not described as merged. Because AMDGPU_GEM_VA2 is a new kernel ioctl, userspace has to call it before games would see a change.

[VideoCardz](https://videocardz.com/newz/valve-posts-amdgpu-patches-to-reduce-stutter-in-some-proton-games), which reported the series, wrote that it "is under review and includes no game benchmarks" and that "A user-space driver such as Mesa's RADV would need to use the new interface before players could benefit." The patch series itself does not name RADV.

*Sources:* [[PATCH v2 00/10] drm/amdgpu: Rework VM update ops for batching and explicit sync, Nov. 17, 2026](https://lore-kernel.gnuweeb.org/dri-devel/20261117-prt-explicit-sync-v2-0-bb3851cb6a0c@pixelcluster.dev/), [[PATCH v2 09/10] drm/amdgpu: Add new AMDGPU_GEM_VA2 ioctl, Nov. 17, 2026](https://lore-kernel.gnuweeb.org/dri-devel/20261117-prt-explicit-sync-v2-9-bb3851cb6a0c@pixelcluster.dev/), [Natalie Vock, About, pixelcluster.dev](https://pixelcluster.dev/about/), [VideoCardz: Valve posts AMDGPU patches to reduce stutter in some Proton games](https://videocardz.com/newz/valve-posts-amdgpu-patches-to-reduce-stutter-in-some-proton-games)
