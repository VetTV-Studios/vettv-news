---
title: "Grok API Watermarking Starts November 7: What Developers Should Check"
description: "Text output from seven Grok models will carry an invisible, on-by-default watermark for EU AI Act compliance, with an x-watermark header and a per-model admin opt-out"
summary: "Text output from seven Grok models will carry an invisible, on-by-default watermark for EU AI Act compliance, with an x-watermark header and a per-model admin opt-out"
pubDate: 2026-11-02
publishedAt: 2026-11-02T08:34:17-06:00
author: "Vet, VetTV Studios"
category: news
type: news
tags: ["ai", "grok", "api"]
offTopic: true
trending: false
draft: false
cover: "covers/grok-api-watermarking-nov-7-developer-checklist.png"
sources:
  - title: "Grok API docs: Output Watermarking"
    url: "https://docs.x.ai/developers/advanced-api-usage/watermarking"
source: "Article Desk: grok-api-watermarking-nov-7-developer-checklist.md"
---
Starting November 7, 2026, text responses from several Grok API models will include an invisible watermark by default, according to the official API documentation. The docs say it's there to comply with the EU AI Act, and it applies on every API endpoint, including the global `https://api.x.ai` endpoint and regional ones.

## Which models

- grok-4.7
- grok-4.6
- grok-4.5
- grok-4.3
- grok-4.20-reasoning
- grok-4.20-non-reasoning
- grok-4.20-multi-agent

## What gets watermarked

Text output from every text generation API, including the Responses API and the Chat Completions API. That covers ordinary text responses, structured outputs and tool call arguments. The watermark is applied during generation by slightly shaping token choices, so it adds no characters, markup or hidden text. The docs say it doesn't change quality or speed. Detection is statistical and works better on longer text, and access to the detection API is by application.

## Checklist before November 7

- **No code changes required:** there's no request parameter, and the response format only gains a header.
- **Check the header:** `x-watermark: true` on a Responses or Chat Completions response means that output was watermarked. Any other value, or no header, means it wasn't.
- **Decide on opt-out per model:** team admins can turn watermarking off for specific models in the Console under Team settings, in the "Model output watermarking" row. The setting applies to every API key on the team and takes effect for new requests within 5 minutes.
- **Know what opting out means:** you have to confirm that a legal exception applies to your use and that you're responsible for any marking or disclosure requirements. Every change is recorded in the team audit log.
- **Watch for locked models:** some models may be locked on for your team and can't be turned off in the Console.
