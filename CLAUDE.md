# CLAUDE.md — Agent Instructions for AISafety.org

## Project Context
This is a Next.js 15 web application for aisafety.org — an AI safety orientation platform. Read PROJECT.md for vision and principles.

## Technical Stack
- **Framework:** Next.js 15 (App Router) with TypeScript
- **Styling:** Tailwind CSS v4 + custom design tokens in globals.css
- **Database:** Supabase (PostgreSQL) — not yet configured
- **Auth:** Supabase Auth — not yet configured
- **Payments:** Stripe — not yet configured
- **Package manager:** pnpm
- **Linting/Formatting:** Biome (not ESLint/Prettier)

## Commands
- `pnpm dev` — start dev server (with Turbopack)
- `pnpm build` — production build
- `pnpm lint` — check linting
- `pnpm lint:fix` — fix linting issues
- `pnpm format` — format code
- `pnpm typecheck` — TypeScript type checking

## Conventions
- Use `@/` path alias for imports from `src/`
- Components in `src/components/` organized by purpose: `layout/`, `ui/`, `content/`
- Pages use Next.js App Router conventions in `src/app/`
- Supabase clients: `src/lib/supabase/client.ts` (browser), `src/lib/supabase/server.ts` (server)
- All pages include skip-to-content link and semantic HTML
- Design tokens defined in `src/app/globals.css` using `@theme`

## Design System
- See `docs/design/design-system.md` for full design system
- Colors: ink (#1a1a2e), surface (#fafaf9), accent (#2563eb), accent-2 (#0f766e)
- Font: Inter (sans), JetBrains Mono (mono)
- Accessibility: WCAG 2.1 AA minimum

## Project Structure
- `src/` — Next.js application code
- `research/` — research artifacts (field mapping, personas, competitors, insights)
- `decisions/` — architecture decision records
- `experiments/` — monetization experiments
- `docs/` — project documentation (strategy, architecture, design)
- `marketing/` — marketing assets (copy, campaigns)

## Guardrails
- No fear-based messaging or manipulative urgency in any content
- No hype language or startup jargon
- Revenue features are experiments — document assumptions explicitly
- Every feature needs evidence of user need (see research strategy)
- Prefer boring reliable tech over clever solutions
- Accessibility is not optional
