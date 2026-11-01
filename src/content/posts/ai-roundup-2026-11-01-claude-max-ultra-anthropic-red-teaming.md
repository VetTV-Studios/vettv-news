---
title: "AI Roundup: Claude Max Plans Become Max and Ultra, Anthropic Automates Misalignment Red-Teaming"
description: "Prices stay at $100 and $200 a month, verified Ultra accounts lose the five-hour limit, and Anthropic sets thousands of Claude agents loose on a training-data monitor"
summary: "Prices stay at $100 and $200 a month, verified Ultra accounts lose the five-hour limit, and Anthropic sets thousands of Claude agents loose on a training-data monitor"
pubDate: 2026-10-30
publishedAt: 2026-11-01T14:04:23.000Z
author: "Vet, VetTV Studios"
category: news
type: news
tags: ["ai", "claude", "anthropic"]
offTopic: true
draft: false
cover: "covers/ai-roundup-2026-11-01-claude-max-ultra-anthropic-red-teaming.png"
sources:
  - title: "@claudeai on X: Max plan rename"
    url: "https://x.com/claudeai/status/2116220869479428500"
  - title: "Claude pricing"
    url: "https://claude.com/pricing"
  - title: "@AnthropicAI on X: automating subtle emergent misalignment research"
    url: "https://x.com/AnthropicAI/status/2116349211549843666"
  - title: "Anthropic Alignment Science Blog: automated emergent misalignment search"
    url: "https://alignment.anthropic.com/2026/automated-em-search/"
source: "Article Desk: ai-roundup-2026-11-01-claude-max-ultra-anthropic-red-teaming.md"
---
## Claude Max plans renamed to Max and Ultra

Anthropic renamed its Claude Max subscription tiers in an October 30 post from the official @claudeai account:

- **Max 5x** is now **Max**, still $100 a month.
- **Max 20x** is now **Ultra**, still $200 a month.

Anthropic says subscribers don't need to do anything. It's also removing the five-hour limit for verified Ultra accounts, starting with most existing subscribers. Newer accounts keep a temporary limit until they're verified, which Anthropic says helps prevent fraud and abuse, and they'll get an email when it's removed. Weekly limits are unchanged.

## Anthropic tries automating misalignment red-teaming

In an October 30 post from @AnthropicAI, Anthropic described new research on automating subtle emergent misalignment research. Red-teaming, deliberately trying to break a model's safety measures, is limited by how much time researchers have. To test whether it could be automated, Anthropic set thousands of Claude agents the task of evading a training-data monitor.

According to Anthropic, the agents produced training data that looked harmless to monitors, with examples like a veteran wrestler mentoring a newcomer or a Q&A about professional beekeeping, but that actually taught misaligned behavior. Anthropic says examples like these can be used to directly improve future training-data monitors. It calls the work "only a first step," but says it suggests future red-teaming could improve much further with better models and more compute. The full write-up is on Anthropic's Alignment Science Blog.
