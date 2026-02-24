# ADR 001: Technology Stack Selection

**Date:** 2026-02-23
**Status:** Accepted
**Decision maker:** Richard

## Context

AISafety.org needs a tech stack that supports:
- Content-heavy pages (SEO, performance)
- App-like features (auth, dashboards, saved state)
- Rapid iteration on monetization experiments
- Long-term maintainability
- Low initial cost

## Decision

**Next.js 15 (App Router) + Supabase + Stripe + Tailwind CSS v4**

Full stack documented in `docs/architecture/technical-stack.md`.

## Rationale

1. **Next.js** handles both static content and dynamic app features in one codebase. This avoids maintaining two separate systems.
2. **Supabase** provides auth, database (Postgres), and storage as a single managed service. The free tier is sufficient for initial development and early users.
3. **Tailwind CSS v4** enables rapid UI development with consistent design tokens. Combined with shadcn/ui when needed, this covers component needs without a heavy framework.
4. **Stripe** is the standard for subscription billing. Excellent developer experience.
5. **Biome** over ESLint/Prettier for faster linting and formatting with simpler configuration.
6. **pnpm** over npm/yarn for faster, more disk-efficient package management.

## Alternatives Considered

**Astro + separate Hono API:** Better for pure content sites, but adds complexity for app features. The split between frontend and API creates maintenance overhead we don't need yet.

## Consequences

- Vercel is the natural deployment target (can migrate if needed)
- Supabase is a dependency for auth/DB (standard Postgres underneath, can migrate)
- Team contributors need React/Next.js knowledge (widely available)

## Reversibility

**High.** Next.js runs on any Node host. Postgres is portable. Stripe is service-agnostic. The main coupling point is Supabase Auth, which can be replaced with Auth.js if needed.
