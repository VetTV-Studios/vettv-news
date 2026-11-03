---
title: "AI Roundup: Anthropic's FlashProve Proves Which Model Answered, and SpaceXSI's Data Bot Saved About 70 Hours in a Week"
description: "Anthropic releases an open-source provable inference prototype, and SpaceXSI describes a Grok Bot Team Bot that answers data questions company-wide"
summary: "Anthropic releases an open-source provable inference prototype, and SpaceXSI describes a Grok Bot Team Bot that answers data questions company-wide"
pubDate: 2026-11-03
publishedAt: 2026-11-03T08:05:21-06:00
author: "Vet, VetTV Studios"
category: news
type: news
tags: ["ai", "anthropic", "xai"]
offTopic: true
trending: false
draft: false
cover: "covers/ai-roundup-2026-11-03-anthropic-flashprove-xai-data-bot.png"
sources:
  - title: "Anthropic: Progress on provable inference for large language models"
    url: "https://www.anthropic.com/research/provable-inference"
  - title: "SpaceXSI (x.ai): Giving every team a data scientist with Grok Bot"
    url: "https://x.ai/news/data-bot"
source: "Article Desk: ai-roundup-2026-11-03-anthropic-flashprove-xai-data-bot.md"
---
## Anthropic FlashProve: proving which model produced a response

Anthropic's Frontier Red Team, with collaborators from EPFL, MIT and others, published research on November 2 on provable inference: cryptographic proofs that a given response was produced by a specific, committed set of model weights, without revealing those weights. The system, called FlashProve, uses a zkSNARK.

Key numbers from Anthropic's post:

- **Model:** tested on Llama 4 Maverick, a 400B-parameter mixture-of-experts model, using 4-bit weights.
- **Speed:** a single H100 GPU generates proofs at about 110 tokens per second.
- **Proof size:** about 19 MB per 1,024-token request.
- **Verification:** checking a proof takes about 17 seconds on a 24-thread CPU, with no GPU needed.
- **Cost:** proving takes roughly 70 to 95 times the GPU time of running the model on vLLM.

Anthropic says Claude produced improvements to the system, and that the security properties are stated and proved in the Lean formal verification language. The code, Lean proofs and documentation are released under the Apache 2.0 license. Anthropic calls it a research prototype. Listed limitations include contexts of only 1,024 tokens, a proof that covers an integer version of the model under greedy decoding, and a model architecture that isn't hidden.

## SpaceXSI's Data Bot

In a post on x.ai, SpaceXSI described Data Bot, a Team Bot in Grok Bot that its data science team trains through shared skills. It can query the company's data warehouse, run analyses, build Databricks or Hex dashboards, and post scheduled updates in Slack channels. It has shared memory that the bot's managers review and approve before the knowledge is shared. SpaceXSI says that last week alone, it estimates Data Bot handled "about 70 hours of work that would otherwise have landed on the data science team." The post adds that the data team still handles complex analyses that need more judgment.
