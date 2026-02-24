# Technical Stack — AISafety.org

## Option A: Next.js + Supabase (Recommended)

### Architecture

```
┌──────────────────────────────────────┐
│            Vercel (Hosting)          │
│  ┌────────────────────────────────┐  │
│  │     Next.js App Router        │  │
│  │  ┌──────────┐ ┌────────────┐  │  │
│  │  │   SSR    │ │  Static    │  │  │
│  │  │  Pages   │ │  Content   │  │  │
│  │  │ (app)    │ │  (MDX)     │  │  │
│  │  └──────────┘ └────────────┘  │  │
│  │  ┌──────────┐ ┌────────────┐  │  │
│  │  │   API    │ │  Server    │  │  │
│  │  │  Routes  │ │  Actions   │  │  │
│  │  └──────────┘ └────────────┘  │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘
            │              │
     ┌──────┘              └──────┐
     ▼                            ▼
┌──────────┐              ┌──────────────┐
│ Supabase │              │    Stripe    │
│ ┌──────┐ │              │  (Payments)  │
│ │Postgres│ │             └──────────────┘
│ │  DB   │ │
│ └──────┘ │              ┌──────────────┐
│ ┌──────┐ │              │  Plausible   │
│ │ Auth │ │              │ (Analytics)  │
│ └──────┘ │              └──────────────┘
│ ┌──────┐ │
│ │ Store│ │              ┌──────────────┐
│ │(files)│ │             │   Resend     │
│ └──────┘ │              │  (Email)     │
└──────────┘              └──────────────┘
```

### Components

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Next.js 15 (App Router) | Hybrid SSR/SSG, excellent for content + app |
| Language | TypeScript | Type safety, better DX, ecosystem support |
| Styling | Tailwind CSS + shadcn/ui | Rapid prototyping, accessible components |
| Database | PostgreSQL via Supabase | Relational fits knowledge structures, cheap, mature |
| Auth | Supabase Auth | Integrated with DB, social login, magic links |
| Content | MDX + Contentlayer-style | Version-controlled, git-based, supports rich content |
| Payments | Stripe | Industry standard, great DX, supports subscriptions |
| Email | Resend | Simple transactional + newsletter, good DX |
| Analytics | Plausible | Privacy-friendly, simple, no cookie banner needed |
| Hosting | Vercel | Native Next.js support, edge functions, preview deploys |
| Search | Built-in (later: Algolia/Meilisearch) | Start simple, upgrade when needed |

### Costs (estimated monthly at moderate scale)

| Service | Free Tier | Growth (~5k users) |
|---------|-----------|-------------------|
| Vercel | Hobby free | Pro $20/mo |
| Supabase | Free tier | Pro $25/mo |
| Stripe | 2.9% + 30c per txn | ~$300/mo at $10k rev |
| Plausible | Self-host free | Cloud $9/mo |
| Resend | 3k emails free | $20/mo |
| Domain | Already owned | — |
| **Total** | **~$0** | **~$374/mo** |

### Strengths
- Single deployment target (Vercel)
- Supabase provides auth + DB + storage in one service
- MDX content lives in repo (version controlled)
- Excellent TypeScript integration throughout
- Huge ecosystem and community support
- Easy to iterate and experiment
- Built-in image optimization, caching, ISR

### Weaknesses
- Vercel lock-in (mitigated: Next.js runs elsewhere)
- Supabase is a dependency (mitigated: standard Postgres, can migrate)
- MDX requires build step for content changes

---

## Option B: Astro + Separate Backend

### Architecture

```
┌────────────────────┐     ┌────────────────────┐
│   Astro Frontend   │────▶│   Hono API Server  │
│   (Cloudflare)     │     │   (Cloudflare      │
│   SSG + Islands    │     │    Workers)         │
└────────────────────┘     └────────┬───────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    ▼               ▼               ▼
             ┌──────────┐   ┌──────────┐   ┌──────────┐
             │   Neon    │   │  Clerk   │   │  Stripe  │
             │ Postgres  │   │  (Auth)  │   │(Payments)│
             └──────────┘   └──────────┘   └──────────┘
```

### Components

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Frontend | Astro 5 | Content-first, fast static, island architecture |
| Interactive | React islands | Only hydrate what needs interactivity |
| API | Hono | Lightweight, edge-native, fast |
| Database | Neon Postgres | Serverless Postgres, branching |
| Auth | Clerk | Polished auth UI, easy setup |
| Content | Markdown/MDX | Same as Option A |
| Hosting | Cloudflare Pages + Workers | Cheap, fast, global |

### Strengths
- Faster static pages (less JS shipped)
- Cloudflare is cheaper than Vercel at scale
- Clean separation of content and app
- Astro's content collections are excellent for knowledge bases

### Weaknesses
- Two systems to maintain (frontend + API)
- Smaller ecosystem than Next.js
- More configuration needed for app-like features
- Auth integration requires more wiring
- Less mature for full-stack app patterns

---

## Recommendation: Option A (Next.js + Supabase)

**Reasons:**
1. **Hybrid nature matches the product.** AISafety.org needs both excellent content delivery AND app-like features (dashboards, saved state, auth). Next.js handles both in one codebase.
2. **Speed to iterate.** Supabase provides auth + DB + storage without building backend infrastructure. When you need to test a monetization experiment, you can ship it in hours.
3. **Ecosystem depth.** shadcn/ui for accessible components, Stripe integrations, MDX tooling — the Next.js ecosystem has pre-built solutions for nearly everything we need.
4. **Boring reliability.** Per PROJECT.md: "prefer boring reliable tech." Next.js + Postgres + Stripe is the boring stack. It works.
5. **Team scalability.** If you later bring on contributors or collaborators, Next.js is the most commonly known React framework.

**Migration path if needed:** Next.js runs on any Node host (not locked to Vercel). Postgres is portable. Stripe is service-agnostic. The only real coupling is Supabase Auth, which can be replaced with Auth.js if needed.

---

## Development Tooling

| Tool | Purpose |
|------|---------|
| pnpm | Package manager (fast, disk-efficient) |
| Biome | Linting + formatting (faster than ESLint + Prettier) |
| TypeScript strict mode | Type safety |
| Vitest | Unit testing |
| Playwright | E2E testing (later) |
| GitHub Actions | CI/CD |
| Husky + lint-staged | Pre-commit hooks |

---

## Environment Variables (needed)

```
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Stripe
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=

# Email
RESEND_API_KEY=

# Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=aisafety.org

# App
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

These are not needed to run locally in development mode. The app will work without them (features degrade gracefully).
