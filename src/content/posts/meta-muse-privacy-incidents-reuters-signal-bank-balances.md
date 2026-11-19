---
title: "Reuters: Meta Staff Flagged Muse Pulling In Signal Messages and Unexplained Bank Balances"
description: "Internal posts reviewed by Reuters describe Meta's Muse agent surfacing a Signal message and posting bank balances an employee said were not his. Meta calls them isolated incidents and says many such messages were hallucinations. Reuters could not establish whether real data leaked."
summary: "Internal posts reviewed by Reuters describe Meta's Muse agent surfacing a Signal message and posting bank balances an employee said were not his. Meta calls them isolated incidents and says many such messages were hallucinations. Reuters could not establish whether real data leaked."
pubDate: 2026-11-19
publishedAt: 2026-11-19T08:20:40-06:00
author: "Vet, VetTV Studios"
category: tech
type: news
tags: ["meta", "muse", "privacy"]
offTopic: true
trending: false
draft: false
cover: "covers/meta-muse-privacy-incidents-reuters-signal-bank-balances.png"
sources:
  - title: "Reuters: As Meta bets big on Muse AI agent, early safety mishaps surface, Nov. 18, 2026"
    url: "https://www.reuters.com/investigations/meta-bets-big-muse-ai-agent-early-safety-mishaps-surface-2026-11-18/"
  - title: "9to5Mac, Nov. 19, 2026, 6:20 a.m. CT"
    url: "https://9to5mac.com/2026/11/19/major-privacy-breaches-reported-in-muse-ai-including-bank-balances/"
  - title: "The Verge, Nov. 18, 2026, 8:55 a.m. CT"
    url: "https://www.theverge.com/ai-artificial-intelligence/1036541/in-employee-testing-metas-muse-agents-mixed-up-messages-and-pulled-in-unexpected-chats-from-other-apps"
  - title: "Ars Technica, Nov. 18, 2026, 1:19 p.m. CT"
    url: "https://arstechnica.com/tech-policy/2026/11/muse-privacy-invasions-are-freaking-out-meta-staffers-internal-chats-show/"
source: "Article Desk: meta-muse-privacy-incidents-reuters-signal-bank-balances.md"
---
Meta's AI agent Muse pulled in a Signal message one employee says she never shared, and dropped bank balances into another employee's chat that he believed belonged to someone else, according to internal company posts [reviewed by Reuters](https://www.reuters.com/investigations/meta-bets-big-muse-ai-agent-early-safety-mishaps-surface-2026-11-18/). Meta says the cases were isolated and that many of the strange messages were hallucinations, not leaked data.

Reuters published the investigation on November 18. It says it reviewed more than two dozen internal posts describing unwanted actions by Muse since its September launch, many from a feedback group where Meta employees report problems to the team building the agent. [9to5Mac](https://9to5mac.com/2026/11/19/major-privacy-breaches-reported-in-muse-ai-including-bank-balances/), [The Verge](https://www.theverge.com/ai-artificial-intelligence/1036541/in-employee-testing-metas-muse-agents-mixed-up-messages-and-pulled-in-unexpected-chats-from-other-apps) and [Ars Technica](https://arstechnica.com/tech-policy/2026/11/muse-privacy-invasions-are-freaking-out-meta-staffers-internal-chats-show/) have since followed up on the report.

**Disclosure:** VetTV's news team uses Meta's Muse Code command-line tool in its own work. Muse Code is Meta's coding tool, not the Muse consumer agent app covered here. Meta had no input into this story.

## What employees reported

**The Signal reminder.** [Reuters](https://www.reuters.com/investigations/meta-bets-big-muse-ai-agent-early-safety-mishaps-surface-2026-11-18/) says one employee using Muse on her personal phone was surprised by a reminder to reply to a message from her sister on Signal, the end-to-end encrypted messenger. "This seems like an extreme privacy violation. I definitely did not grant it access to other apps, or recall being asked about this," she wrote. A colleague replied that he had found Muse was set up by default with permission to read push notifications on Android phones.

**The bank balances.** In a post from earlier in November, Reuters says, another employee reported that Muse added an unrelated message to its usual fishing weather and tide updates: "BTW, two bank updates, your Capital One balance is $2722.58, your Charles Schwab balance is $5899.57." He wrote that he had never shared a bank account with Muse or discussed banking with it, and that he was "afraid it's sending other's bank info to me."

**Reuters could not confirm that any real data leaked.** It says it "was unable to establish" whether Muse was giving users other people's bank balances and other sensitive information, or making the information up.

Other internal posts described in the [Reuters report](https://www.reuters.com/investigations/meta-bets-big-muse-ai-agent-early-safety-mishaps-surface-2026-11-18/) include messages about a childcare request, a coffee-table pickup and other conversations that employees said were not theirs, made-up purchase details, and one case where an employee said the agent booked a non-refundable Airbnb stay without permission.

## Meta's response

Meta spokesperson Daniel Roberts described the Reuters examples as "isolated incidents," according to [Reuters](https://www.reuters.com/investigations/meta-bets-big-muse-ai-agent-early-safety-mishaps-surface-2026-11-18/). He said Meta prioritizes safety, tests extensively and keeps updating its products to improve protections. He said Muse can reach other apps only through permissions people explicitly grant, and that many of the messages employees flagged as possible account mix-ups were hallucinations that had already been addressed. Roberts declined to tell Reuters how many such cases there were or why they persisted.

Reuters also reports that a member of Meta's Superintelligence team told the internal feedback group in early November that the agent appeared to be hallucinating messages in response to built-in prompts that push it to engage with users between sessions.

## Reuters' Signal test

Reuters says it worked with staff at Signal and the AI Now Institute, a nonprofit that studies AI's effects on society, to try to reproduce the Signal access. When testers prompted Muse to read Signal messages:

- **On Android**, it used its permission to read the phone's push notifications.
- **On macOS**, it used a mix of the Mac's accessibility and screenshot tools.
- **On iPhone**, the same requests were blocked.

In both successful cases, Reuters says, Muse went around Meta's "Connector" tool and relied on permissions granted during setup. **Our read:** that is not the same as breaking Signal's encryption. The text was read on the user's own device, where it was already decrypted for display.

Signal President Meredith Whittaker told Reuters the deployment of agents with wide device access was "technologically reckless." Google noted that people "must deliberately grant permissions" for apps to read Android notifications, and Apple cautioned that using its accessibility tools "for unintended purposes" could put personal information at risk. Reuters reports that an Apple operating system update this week sharply restricted developers' use of Mac accessibility tools and added agent-oriented permissions, closing the macOS pathway its testers used.

## What Muse users can check

These are general steps, not instructions from Meta. On Android, review which apps have notification access in system settings. On a Mac, review the apps listed under Privacy & Security for Accessibility and Screen Recording. In Muse, check which apps are connected. Reuters says Muse has had more than 10 million downloads since its September launch.


*Sources:* [Reuters: As Meta bets big on Muse AI agent, early safety mishaps surface, Nov. 18, 2026](https://www.reuters.com/investigations/meta-bets-big-muse-ai-agent-early-safety-mishaps-surface-2026-11-18/), [9to5Mac, Nov. 19, 2026, 6:20 a.m. CT](https://9to5mac.com/2026/11/19/major-privacy-breaches-reported-in-muse-ai-including-bank-balances/), [The Verge, Nov. 18, 2026, 8:55 a.m. CT](https://www.theverge.com/ai-artificial-intelligence/1036541/in-employee-testing-metas-muse-agents-mixed-up-messages-and-pulled-in-unexpected-chats-from-other-apps), [Ars Technica, Nov. 18, 2026, 1:19 p.m. CT](https://arstechnica.com/tech-policy/2026/11/muse-privacy-invasions-are-freaking-out-meta-staffers-internal-chats-show/)

*Cover:* Original typographic artwork by VetTV News. No third-party photos, screenshots, or leaked images were used.
