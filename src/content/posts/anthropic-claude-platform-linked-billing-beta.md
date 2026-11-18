---
title: "Anthropic Opens Linked Billing Beta on the Claude Platform"
description: "Third-party apps can bill a customer's Claude organization for API usage without handling an API key. Customers set a spend limit per platform."
summary: "Third-party apps can bill a customer's Claude organization for API usage without handling an API key. Customers set a spend limit per platform."
pubDate: 2026-11-18
publishedAt: 2026-11-18T08:32:13-06:00
author: "Vet, VetTV Studios"
category: tech
type: news
tags: ["anthropic", "claude", "api"]
offTopic: true
trending: false
draft: false
cover: "covers/anthropic-claude-platform-linked-billing-beta.png"
sources:
  - title: "Anthropic: Linked billing on the Claude Platform, Nov. 17, 2026"
    url: "https://claude.com/resources/articles/linked-billing-on-claude-platform"
  - title: "Claude Help Center: Offer linked billing in your platform"
    url: "https://support.claude.com/en/articles/18467110-offer-linked-billing-in-your-platform"
  - title: "Anthropic, PBC, Form S-1/A filed Nov. 17, 2026"
    url: "https://www.sec.gov/Archives/edgar/data/2130357/000162828026074338/anthropicpbc-sx1ax3.htm"
  - title: "Anthropic: Roadshow for proposed initial public offering, Nov. 10, 2026"
    url: "https://www.anthropic.com/news/roadshow-launch"
source: "Article Desk: anthropic-claude-platform-linked-billing-beta.md"
---
Anthropic [said](https://claude.com/resources/articles/linked-billing-on-claude-platform) on November 17, 2026, that it is introducing linked billing on the Claude Platform in beta. Third-party platforms, "such as coding agents and workflow automation tools, can let their end customers pay for Claude API usage without sharing an API key." End customers "keep their existing Anthropic billing and set their own spend limits."

The company says that paying for Claude API usage on a third-party platform "usually means sharing an API key, which works like a password." With linked billing, "customers link their Claude Platform organization instead, and usage is billed directly to it. No API key changes hands."

Customers "approve each linked platform, set a spend limit, and can unlink at any time." A Console user "with an Owner, Admin, or Billing role approves the link," and customers "can set a monthly spend limit for each platform, or a default that applies to each one." They can also "link once for the whole organization."

Anthropic says platforms can "decide on each request whether the platform or the end customer pays," and can see usage for each linked customer in Console or "programmatically with the Usage and Cost Analytics API (beta)."

"Requests run in the platform's organization, so settings in the customer's organization, such as IP allowlists, encryption keys, and data retention, don't apply."

"Platforms that support linked billing today include Asana, ClickHouse, Factory, Gumloop, Harness, Higgsfield AI, Kilo Code, Linear, Major, Mintlify, Omni, OpenArt, Niteshift, Railway, Ramp, Runlayer, Tessera, Tines, and Warp." Customers "can link their organization from any supported platform, and find platforms that offer linked billing on Claude Marketplace."

Tom Moor, a member of technical staff at Linear, is quoted in Anthropic's post: "Manually copying API keys is inherently insecure. With linked billing, admins can now use their committed Claude spend directly with the Linear cloud coding agent in a click."

A [Claude Help Center article](https://support.claude.com/en/articles/18467110-offer-linked-billing-in-your-platform) for platforms offering linked billing, which Anthropic says is in beta, adds restrictions that are not listed in the main announcement. "Linked billing works only for customers whose Claude Console organization is billed directly by Anthropic." It says the following can't be linked:

- "Customers who get Claude through a cloud provider, such as Bedrock, Vertex AI, or Foundry, can't link"
- "Claude subscription plans (Pro, Max, Ultra, Team, and Enterprise) can't be linked"
- "Claude Console organizations that pay through the AWS, Google Cloud, or Azure marketplace can't use linked billing"

The Help Center also says monthly API credits that come with Max, Ultra, and Team plans can't pay for linked usage.

## IPO pricing is still expected

Separately, Anthropic is preparing an initial public offering of Class A common stock. In a [November 17 amendment to its Form S-1](https://www.sec.gov/Archives/edgar/data/2130357/000162828026074338/anthropicpbc-sx1ax3.htm), Anthropic, PBC said it "has been approved to list" that stock on the Nasdaq Global Select Market under the symbol "ANT," and that "It is currently estimated that the initial public offering price per share will be between $70.00 and $78.00." Anthropic's [November 10 roadshow announcement](https://www.anthropic.com/news/roadshow-launch) used the same expected range. As of November 18, a final priced prospectus had not appeared in the company's SEC filings, and pricing is still expected. We [previously covered](/posts/anthropic-s1-ipo-filing/) the S-1 filing.

*Sources:* [Anthropic: Linked billing on the Claude Platform, Nov. 17, 2026](https://claude.com/resources/articles/linked-billing-on-claude-platform), [Claude Help Center: Offer linked billing in your platform](https://support.claude.com/en/articles/18467110-offer-linked-billing-in-your-platform), [Anthropic, PBC, Form S-1/A filed Nov. 17, 2026](https://www.sec.gov/Archives/edgar/data/2130357/000162828026074338/anthropicpbc-sx1ax3.htm), [Anthropic: Roadshow for proposed initial public offering, Nov. 10, 2026](https://www.anthropic.com/news/roadshow-launch)
