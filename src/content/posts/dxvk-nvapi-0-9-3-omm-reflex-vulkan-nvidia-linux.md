---
title: "DXVK-NVAPI 0.9.3 Adds Opacity Micromaps and Layer-Free Vulkan Reflex for NVIDIA on Linux"
description: "The release brings OMM raytracing support with VKD3D-Proton 3.1 and NVIDIA R615 drivers, new DLSS override settings, better VRAM reporting and an ARM64 build"
summary: "The release brings OMM raytracing support with VKD3D-Proton 3.1 and NVIDIA R615 drivers, new DLSS override settings, better VRAM reporting and an ARM64 build"
pubDate: 2026-11-02
publishedAt: 2026-11-02T08:34:17-06:00
author: "Vet, VetTV Studios"
category: linux-steamos
type: news
tags: ["dxvk-nvapi", "nvidia", "linux-gaming"]
offTopic: true
trending: false
draft: false
cover: "covers/dxvk-nvapi-0-9-3-omm-reflex-vulkan-nvidia-linux.png"
sources:
  - title: "GitHub: DXVK-NVAPI v0.9.3 release notes"
    url: "https://github.com/jp7677/dxvk-nvapi/releases/tag/v0.9.3"
  - title: "GitHub: VKD3D-Proton 3.1 release"
    url: "https://github.com/HansKristian-Work/vkd3d-proton/releases/tag/v3.1"
source: "Article Desk: dxvk-nvapi-0-9-3-omm-reflex-vulkan-nvidia-linux.md"
---
DXVK-NVAPI, the project that implements NVIDIA's NVAPI on Linux so Windows games under Proton and Wine can use features like DLSS and Reflex, released version 0.9.3 on October 30. For owners of NVIDIA RTX desktops and laptops on Linux, these are the main changes, per the official release notes:

## Raytracing and Reflex

- **Opacity Micromaps (OMM) for DirectX Raytracing:** supported through NVAPI. This requires VKD3D-Proton 3.1 or newer and the VK_KHR_opacity_micromap extension, available in NVIDIA driver R615 or newer.
- **Reflex for Vulkan games without a layer:** a new implementation uses the VK_NV_low_latency revision 2 extension, in NVIDIA driver R615 and newer. It no longer needs a Vulkan layer, which the notes say makes the DXVK-NVAPI Vulkan layer obsolete.

## DLSS and driver settings

The release adds support for new driver settings from NVAPI's R610 headers (`NGX_DLSS_NR_OVERRIDE`, `NGX_DLSS_NR_OVERRIDE_RENDER_PRESET_SELECTION`, `NGX_DLSS_NR_SL_OVERRIDE`) and R615 headers (`SL_DLSS_OVERRIDE`).

## Fixes and other changes

- **VRAM reporting:** available and free VRAM reporting now behaves more like NVAPI on Windows.
- **Elite Dangerous:** a fix for a race condition during initialization stops a crash when using the EDHM mod.
- **Modding tools:** D3D12 wrapper storage was changed to prevent crashes with several titles when used alongside modding tools.
- **Sound Voltex:** can now read output refresh rate info.
- **War Thunder:** its Pascal spoofing workaround was removed because DLSS with D3D11 now works in that title.
- **ARM64:** the release includes an ARM64 build.

Headers were updated to NVAPI and NVML R615 and Vulkan 1.4.357. To get the OMM and layer-free Reflex features, you need an R615 or newer NVIDIA driver.
