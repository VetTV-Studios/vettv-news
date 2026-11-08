---
title: "Grok API Text Watermarking Is On by Default for Supported Models"
description: "The documentation sets November 7 as the start date, explains x-watermark response headers, and puts opt-outs under team-admin control."
summary: "The documentation sets November 7 as the start date, explains x-watermark response headers, and puts opt-outs under team-admin control."
pubDate: 2026-11-08
publishedAt: 2026-11-08T11:36:11-06:00
author: "Vet, VetTV Studios"
category: tech
type: news
tags: ["grok", "api", "ai-watermarking"]
offTopic: true
trending: false
draft: false
cover: "covers/grok-api-text-watermarking-default-november-7.png"
sources:
  - title: "docs.x.ai: Output Watermarking"
    url: "https://docs.x.ai/developers/advanced-api-usage/watermarking"
source: "Article Desk: grok-api-text-watermarking-default-november-7.md"
---
The Output Watermarking documentation on **docs.x.ai** says text outputs from supported Grok models include an invisible watermark **by default starting November 7, 2026**. It describes coverage across global and regional endpoints, including api.x.ai.

## Models and output types

The documented model list is:

- grok-4.7
- grok-4.6
- grok-4.5
- grok-4.3
- grok-4.20-reasoning
- grok-4.20-non-reasoning
- grok-4.20-multi-agent

Coverage includes text-generation APIs such as Responses and Chat Completions, and includes ordinary text, structured outputs, and tool-call arguments. This article does not extend that policy to unlisted models or image/audio output.

## Check the response header

There is **no request parameter** to enable watermarking. The docs say **`x-watermark: true`** indicates the request's output was generated with the watermark; any other value or an absent header means it was not.

The watermark subtly shapes token selection during generation, according to the docs. It does not add characters, markup, or hidden text. Detection is statistical and may return watermarked, not watermarked, or uncertain; longer samples provide a stronger signal. Detection API access requires an application.

## Opt-out terms matter

Team administrators can change the Model output watermarking setting per model in the Console. The choice applies across **every API key on that team**. Changes affect new requests within **five minutes**, and opt-in/opt-out events are recorded in the team audit log.

Opting out requires confirming that an exception under applicable law applies and accepting sole responsibility for marking, disclosure, or other legal requirements. Some models may be locked on for a team and cannot be disabled in the Console.

The documentation says watermarking does not affect quality or speed and describes EU AI Act compliance as its purpose. Those are **vendor statements**, not independent benchmark findings or legal advice. This article verifies the published policy, not live responses from each listed model.
