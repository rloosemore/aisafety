# AISafety.org — Source of Truth

## Vision

AI is reshaping the economy and society at a pace that terrifies people — and they're right to be concerned. Millions face the real prospect of economic displacement while a tiny class of AI oligarchs captures nearly all the gains. Meanwhile, technical AI risks (alignment, misuse, loss of control) compound the danger.

AISafety.org exists to:
1. **Tell the truth** about what's happening — without panic, without dismissal
2. **Give people agency** — concrete action pathways, not just information
3. **Build collective power** — connect people who want to change the trajectory
4. **Bridge communities** — the technical researcher and the displaced worker both belong here

This is not an academic resource site. It is an action platform built on honest knowledge.

Target sustainability: ~$10k/month.

This project is a long-horizon trust asset, not a short-term content play.

---

## The Three Pillars

### Pillar 1: AI & Society (the urgent crisis)
Economic displacement, labor market collapse, concentration of wealth and power, what happens when most human work becomes automatable. This is what most people care about and it is the front door.

### Pillar 2: Technical AI Safety
Alignment, interpretability, evaluation, robustness — making AI systems themselves safer. Important, but serves a smaller specialist audience.

### Pillar 3: AI Governance & Action
Regulation, democratic oversight, UBI, worker ownership, collective bargaining, institutional responses. This is where understanding becomes action.

**These three pillars are co-equal.** Pillar 1 is where the audience is. Pillar 2 is where deep expertise lives. Pillar 3 is where change happens.

---

## Core Principles

- No fear-based monetization — but take legitimate fear seriously
- No manipulative urgency — but acknowledge real urgency honestly
- Transparency about funding and goals
- Value first, revenue second
- Respect the intelligence of the audience
- Agency over despair: every piece of content should point toward action
- Anger is valid; channel it constructively, never exploit it

---

## Non-Goals

- Not a doom cult (but not dismissive of genuine danger)
- Not a generic blog farm
- Not purely academic publishing
- Not chasing hype cycles
- Not building complex infrastructure before value is proven
- Not a political party or single-issue advocacy group
- Not Silicon Valley optimism ("AI will create more jobs!")

---

## Product Hypothesis

People come to AISafety.org because they are:
- **Scared** about losing their livelihood to AI
- **Angry** about billionaires capturing all the gains
- **Confused** about what AI safety even means
- **Looking for action** — something they can DO, not just read

They need:
- Honest orientation (what's actually happening)
- Action pathways (what can I do about it)
- Community (others who feel the same and want to act)
- Tools for collective power (organizing, advocacy, alternatives)
- Technical understanding (for those who want depth)
- Ongoing signal filtering (what matters this week)

Revenue should come from deeper value layers:
- Community membership (people pay to be part of something)
- Professional resources and toolkits
- Action coordination tools
- Structured learning
- Consulting / sponsorship later

---

## Action Pathways (Core Product Feature)

The platform must always answer: **"What can I do?"**

Categories:
- **Economic restructuring** — UBI campaigns, AI dividends, profit-sharing mandates
- **Worker ownership** — AI cooperatives, community-owned infrastructure
- **Collective power** — union AI clauses, sector bargaining, consumer coalitions
- **Democratic governance** — citizen assemblies, legislation, algorithmic transparency
- **Direct action** — pressure campaigns, accountability tracking, legal challenges
- **Building alternatives** — mutual aid, skills cooperatives, local economic resilience
- **Open source** — community-controlled AI tools, democratized access

Each pathway should include: what it is, who's doing it, how to join or start, evidence of effectiveness.

---

## Research Strategy

Agent teams should continuously study:
- Economic displacement evidence and projections
- Community concerns, anger, and desires for action
- Existing movements and organizations (UBI, worker ownership, etc.)
- Gaps in tooling and resources
- Willingness to pay and willingness to organize
- Language used by different subgroups
- Technical AI safety developments
- Policy and regulatory developments

Research artifacts must be stored in the repo.

---

## Technical Philosophy

- Iterate quickly
- Keep architecture modular
- Treat monetization features as experiments
- Prefer boring reliable tech

---

## Conventions

- Research lives in /research
- Experiments live in /experiments
- Decisions recorded in /decisions
- Monetization assumptions documented explicitly

---

## Stack Decisions (Confirmed)

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 + shadcn/ui (when needed)
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth
- **Payments:** Stripe
- **Email:** Resend
- **Analytics:** Plausible
- **Hosting:** Vercel
- **Package manager:** pnpm
- **Linting/Formatting:** Biome

---

## Product Direction

Primary: **AI Safety Action Platform**

Three entry points:
1. **"I'm scared about AI and my job"** → AI & Society content → action pathways → community
2. **"I work in AI safety"** → technical content → professional tools → community
3. **"I want to do something about AI"** → action pathways → organizing tools → community

All three converge on community and collective action.

The anchor artifacts:
- AI Safety Field Map (orientation)
- Action Pathway Directory (agency)
- Weekly Signal Digest (ongoing engagement)

Revenue model: free orientation + action info → community membership → professional tools → consulting/workshops

---

## Guardrails for Agents

Agents must:
- Explain reasoning
- Avoid hype language — but never minimize legitimate concerns
- Surface uncertainty
- Propose reversible decisions
- Produce useful artifacts, not just plans
- Cite evidence for feature proposals
- State what is free vs paid and why
- List what NOT to build alongside what to build
- Always connect information to action ("so what can someone do?")
- Never be condescending toward anger or fear

---

## Don't Touch

- PROJECT.md — only modify with explicit approval
- CLAUDE.md — only modify with explicit approval
- research/ artifacts — append, don't overwrite without review
