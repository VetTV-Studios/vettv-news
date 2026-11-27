---
title: "MCP Servers Can Now Ship Skills to Claude in Public Beta, and Tasks and Elicitation Are Generally Available"
description: "Anthropic said on November 24 that MCP servers can now publish skills alongside their tools, in a public beta in Claude and Claude Code. MCP Tasks and Elicitation are now generally available, and File Uploads is coming soon."
summary: "Anthropic said on November 24 that MCP servers can now publish skills alongside their tools, in a public beta in Claude and Claude Code. MCP Tasks and Elicitation are now generally available, and File Uploads is coming soon."
pubDate: 2026-11-27
publishedAt: 2026-11-27T16:31:00-06:00
author: "Vet, VetTV Studios"
category: tech
type: news
tags: ["anthropic", "claude", "ai"]
offTopic: true
trending: false
draft: false
cover: "covers/claude-skills-over-mcp-beta-tasks-elicitation.png"
sources:
  - title: "Claude by Anthropic: MCP servers can now ship skills, run tasks, and more with Claude, Nov. 24, 2026"
    url: "https://claude.com/resources/articles/skills-over-mcp-tasks-and-more"
  - title: "Model Context Protocol: Skills extension overview"
    url: "https://modelcontextprotocol.io/extensions/skills/overview"
  - title: "Model Context Protocol: Tasks extension overview"
    url: "https://modelcontextprotocol.io/extensions/tasks/overview"
  - title: "Claude Code docs: Use skills from MCP servers"
    url: "https://code.claude.com/docs/en/mcp#use-skills-from-mcp-servers"
  - title: "Dataconomy, Nov. 26, 2026: Anthropic Adds Skills Over MCP To Claude And Claude Code Beta"
    url: "https://dataconomy.com/2026/11/26/anthropic-adds-skills-over-mcp-to-claude-and-claude-code/"
  - title: "Cover photo: Anthropic article artwork, by Anthropic, claude.com"
    url: "https://claude.com/resources/articles/skills-over-mcp-tasks-and-more"
---

Anthropic announced three updates to how Claude works with Model Context Protocol (MCP) servers on November 24, in [MCP servers can now ship skills, run tasks, and more with Claude](https://claude.com/resources/articles/skills-over-mcp-tasks-and-more). **Skills over MCP** is in public beta, **Tasks** and **Elicitation** are generally available, and **File Uploads** is "rolling out soon."

## Skills over MCP (public beta)

MCP servers can now publish skills, which are packaged instructions and workflows, alongside their tools. Anthropic says "Claude loads a skill only when it's needed, keeping context use low," and that skills update with the server, so users have nothing separate to install. The format is described in the MCP [Skills extension overview](https://modelcontextprotocol.io/extensions/skills/overview).

Anthropic's partner examples:

- **Shopify:** designs and updates a merchant's online store from start to finish.
- **HubSpot:** onboards customers and sets them up in Claude.
- **Atlassian:** uses an organization's context for insights and work analysis.
- **Carta:** will help draft and issue equity from an uploaded document (coming soon).

Skills over MCP works in Claude and Claude Code. It's **on by default for Pro, Max and Ultra**. On **Team**, an admin has to turn it on. **Enterprise** support is "coming soon."

## Tasks and Elicitation (generally available)

- **Tasks** let a server run long operations, or full agent loops, in the background. Claude keeps working and picks up the result when it's ready. Anthropic's example is ZoomInfo running deeper account and contact research that used to take several prompts. ([Tasks overview](https://modelcontextprotocol.io/extensions/tasks/overview))
- **Elicitation** lets a server pause mid-call and ask you for input through a form or a link. In Anthropic's words, "Some actions need a user's sign-off, like spending money or deleting data." Supabase confirms costs before it creates a paid project or runs destructive SQL. Railway asks before potentially destructive changes, and GitHub has you type a repository's name before an agent deletes it.

Both are available now on Pro, Max and Ultra in Claude and Claude Code, and are rolling out to Team and Enterprise.

## File Uploads (coming soon)

Anthropic says the File Uploads extension "sends PDFs, spreadsheets, and images to a server without passing them through the context window." It's planned for Pro, Max, Ultra, and eligible Team and Enterprise plans.

## Safety notes

[Dataconomy](https://dataconomy.com/2026/11/26/anthropic-adds-skills-over-mcp-to-claude-and-claude-code/) reports that the extension spec flags server-supplied skills as a prompt-injection risk. According to that report, Claude Code ignores some settings a server skill may declare, such as tool permissions and hooks, and users can block a server's skills or require approval each time one loads. Anthropic's announcement itself only describes Elicitation sign-offs, Enterprise Managed Auth, and the admin switch on Team plans. The [Claude Code MCP docs](https://code.claude.com/docs/en/mcp#use-skills-from-mcp-servers) cover how skills from servers are loaded.

Related: [Claude's "Install as app" beta](/posts/claude-install-as-app-beta-mac-windows/) launched the same day.

*Sources:* [Claude by Anthropic: MCP servers can now ship skills, run tasks, and more with Claude](https://claude.com/resources/articles/skills-over-mcp-tasks-and-more), [MCP: Skills extension overview](https://modelcontextprotocol.io/extensions/skills/overview), [MCP: Tasks extension overview](https://modelcontextprotocol.io/extensions/tasks/overview), [Claude Code docs: Use skills from MCP servers](https://code.claude.com/docs/en/mcp#use-skills-from-mcp-servers), [Dataconomy, Nov. 26, 2026](https://dataconomy.com/2026/11/26/anthropic-adds-skills-over-mcp-to-claude-and-claude-code/)

*Cover photo: Article artwork by Anthropic, from [claude.com](https://claude.com/resources/articles/skills-over-mcp-tasks-and-more).*
