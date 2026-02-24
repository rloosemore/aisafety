# AISafety.org

A trusted orientation platform for navigating AI safety. Helps researchers, engineers, policymakers, and the technically curious understand what matters — and what to do next.

**This project is a long-horizon trust asset, not a short-term content play.**

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000
```

## Tech Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth
- **Payments:** Stripe
- **Linting:** Biome
- **Hosting:** Vercel

## Project Structure

```
src/                  # Next.js application
  app/                # App Router pages
  components/         # React components (layout, ui, content)
  lib/                # Utilities, config, Supabase clients
  content/            # MDX content (concepts, map, blog)
research/             # Research artifacts
  field-mapping/      # Ecosystem maps
  personas/           # User personas
  competitors/        # Competitive analysis
  insights/           # Synthesis memos
decisions/            # Architecture Decision Records
experiments/          # Monetization experiments
docs/                 # Project documentation
  strategy/           # Product strategy docs
  architecture/       # Technical architecture docs
  design/             # Design system docs
marketing/            # Marketing assets
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server with Turbopack |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Check code with Biome |
| `pnpm lint:fix` | Auto-fix lint issues |
| `pnpm format` | Format code with Biome |
| `pnpm typecheck` | TypeScript type checking |

## Documentation

- [Product Directions](docs/strategy/product-directions.md)
- [Research Strategy](docs/strategy/research-strategy.md)
- [Information Architecture](docs/architecture/information-architecture.md)
- [Technical Stack](docs/architecture/technical-stack.md)
- [Design System](docs/design/design-system.md)
- [Content & Marketing](docs/strategy/content-marketing.md)
- [Monetization Experiments](docs/strategy/monetization-experiments.md)
- [Project Source of Truth](PROJECT.md)
