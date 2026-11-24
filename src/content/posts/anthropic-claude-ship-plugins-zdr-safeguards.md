---
title: "Anthropic Opens Claude Ship in Beta, Unifies Plugins, and Adds ZDR Safeguards"
description: "On November 23, Anthropic opened Claude Ship in beta for Team and Enterprise plans on GitHub, merged connectors and skills into a single Plugins page now live on Free, Pro, Max, and Ultra plans, and put Zero Data Retention with Enterprise Frontier Safeguards into public beta for eligible organizations."
summary: "On November 23, Anthropic opened Claude Ship in beta for Team and Enterprise plans on GitHub, merged connectors and skills into a single Plugins page now live on Free, Pro, Max, and Ultra plans, and put Zero Data Retention with Enterprise Frontier Safeguards into public beta for eligible organizations."
pubDate: 2026-11-24
publishedAt: 2026-11-24T08:57:50-06:00
author: "Vet, VetTV Studios"
category: tech
type: news
tags: ["anthropic", "claude", "ai"]
offTopic: true
trending: false
draft: false
cover: "covers/anthropic-claude-ship-plugins-zdr-safeguards.png"
sources:
  - title: "Anthropic / Claude: Introducing Claude Ship, Nov. 23, 2026"
    url: "https://claude.com/resources/articles/introducing-claude-ship"
  - title: "Claude Code docs: Claude Ship"
    url: "https://code.claude.com/docs/en/claude-ship"
  - title: "Claude Help Center: Manage plugins, skills, and connectors from one Plugins page, updated Nov. 23, 2026"
    url: "https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page"
  - title: "Claude (@claudeai) on X, Nov. 23, 2026, 2:56 p.m. CT"
    url: "https://x.com/claudeai/status/2124970294523945328"
  - title: "Anthropic / Claude: Zero data retention with Enterprise Frontier Safeguards is now in beta"
    url: "https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards"
  - title: "Claude Platform docs: Enterprise Frontier Safeguards"
    url: "https://platform.claude.com/docs/en/manage-claude/enterprise-frontier-safeguards/overview"
  - title: "9to5Mac, Nov. 23, 2026: Anthropic launches new Claude Ship feature for builders"
    url: "https://9to5mac.com/2026/11/23/anthropic-launches-new-claude-ship-feature-for-builders/"
source: "Article Desk: anthropic-claude-ship-plugins-zdr-safeguards.md"
---
Anthropic shipped three product updates on **November 23**: [Claude Ship](https://claude.com/resources/articles/introducing-claude-ship) in beta, a unified [Plugins](https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page) page, and [Enterprise Frontier Safeguards](https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards) in public beta. None of these posts were on Anthropic's corporate newsroom when we checked on the morning of November 24; the write-ups are on Claude's product site and help center.

## Claude Ship (beta)

In [Introducing Claude Ship](https://claude.com/resources/articles/introducing-claude-ship), dated November 23, Anthropic says Claude Ship "can review PRs, fix them, and decide what's ready to merge based on policies each team sets." The stated goal is to "ship code as fast as teams write it."

It is made up of **Code Review**, which Anthropic says is already generally available, and two new agents in beta: **PR Steward** and **Claude Approvals**. Together, they "take a pull request through review, fixes, and an approval decision." PR Steward, Anthropic says, is "designed not to approve or merge pull requests." Claude Approvals applies a policy the team writes as a file in the repository.

Developers can try it on their own pull requests with the `/ship` command in Claude Code. Anthropic also describes a repository-level setup that admins turn on, so the agents can run without each developer invoking `/ship`.

**Availability, from Anthropic's article and [docs](https://code.claude.com/docs/en/claude-ship):** Claude Ship is available on **Claude Team and Enterprise plans** for repositories on **GitHub**. It is **not** available to organizations with Zero Data Retention, the HIPAA configuration, or customer-managed encryption keys. Usage is billed on tokens. [9to5Mac](https://9to5mac.com/2026/11/23/anthropic-launches-new-claude-ship-feature-for-builders/) also covered the launch the same day.

## Plugins: connectors and skills in one place

The official [@claudeai](https://x.com/claudeai/status/2124970294523945328) account posted at **2:56 p.m. CT** on November 23: "There's now one way to connect your tools to Claude, teach it a new skill, or do both. Connectors and skills come together as plugins. Live on Free, Pro, Max, and Ultra plans, with Team and Enterprise coming soon. Browse 10,000+ plugins."

Anthropic's [help center](https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page), updated the same day, is more specific on timing. The new Plugins page replaces the separate Skills, Connectors, and Plugins tabs. It is **available now** on Free, Pro, Max, and Ultra plans. **Team** plans "start rolling out gradually starting November 30, 2026," and **Enterprise** plans roll out "in the coming weeks." Existing connectors, skills, and plugins stay installed. The help center also notes that removing a plugin that packages a connector does not disconnect that connector; you have to disconnect it separately.

The "10,000+" figure is Anthropic's own count, from that official account post. We have not independently counted the directory.

## Zero data retention with Enterprise Frontier Safeguards

In a separate [Claude article](https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards), Anthropic says it is opening **Enterprise Frontier Safeguards (EFS)** in **public beta**. EFS, it says, provides automated detection of sophisticated misuse "while remaining compatible with zero data retention (ZDR): neither Anthropic nor any cloud providers retain enterprises' data."

The post says Anthropic has been developing EFS with more than 100 customers since a September announcement, including a private beta. With EFS, customers bring their own storage for inputs and outputs. Anthropic says automated safety monitoring analyzes data stored on the customer's infrastructure, and that a flagged "Safety Case" does not include inputs and outputs.

Anthropic lists availability on the Claude Platform, Claude Platform on AWS, Amazon Bedrock, and Claude on Google Cloud, with Microsoft Foundry "coming soon." [Platform docs](https://platform.claude.com/docs/en/manage-claude/enterprise-frontier-safeguards/overview) say EFS is in beta, that only eligible organizations can get it, and that settings and behavior can change during the beta. Eligible customers, the article says, will be notified with instructions.

*Sources:* [Anthropic / Claude: Introducing Claude Ship, Nov. 23, 2026](https://claude.com/resources/articles/introducing-claude-ship), [Claude Code docs: Claude Ship](https://code.claude.com/docs/en/claude-ship), [Claude Help Center: Manage plugins, skills, and connectors from one Plugins page, updated Nov. 23, 2026](https://support.claude.com/en/articles/17740565-manage-plugins-skills-and-connectors-from-one-plugins-page), [Claude (@claudeai) on X, Nov. 23, 2026, 2:56 p.m. CT](https://x.com/claudeai/status/2124970294523945328), [Anthropic / Claude: Zero data retention with Enterprise Frontier Safeguards is now in beta](https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards), [Claude Platform docs: Enterprise Frontier Safeguards](https://platform.claude.com/docs/en/manage-claude/enterprise-frontier-safeguards/overview), [9to5Mac, Nov. 23, 2026: Anthropic launches new Claude Ship feature for builders](https://9to5mac.com/2026/11/23/anthropic-launches-new-claude-ship-feature-for-builders/)

*Cover image: Anthropic, https://claude.com/resources/articles/introducing-claude-ship*
