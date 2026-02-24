# Design System — AISafety.org

## Visual Direction

### Brand Character
- **Intellectually serious** — not corporate, not playful
- **Calm authority** — confident without arrogance
- **Warm clarity** — approachable but not dumbed down
- **Living document aesthetic** — feels like it's maintained, not abandoned

### Design References
Think: quality academic press meets modern knowledge tool.
- The visual rigor of Stripe's documentation
- The clarity of Wikipedia's information density
- The warmth of a well-organized research library
- The functionality of Notion's dashboards

### Anti-patterns to avoid
- Startup-bro growth aesthetics (gradients, hero images of hands typing)
- Fear imagery (robots, dystopia, red warning colors)
- Generic stock photography
- Overly minimalist "empty" designs that signal low effort
- Dark mode as default (this audience reads a lot; optimize for reading)

---

## Color System

### Primary Palette
```
--color-ink:        #1a1a2e    /* Near-black for text, deep authority */
--color-surface:    #fafaf9    /* Warm white, easy on eyes */
--color-accent:     #2563eb    /* Blue — trust, clarity, non-alarming */
--color-accent-2:   #0f766e    /* Teal — secondary, knowledge/growth */
--color-warm:       #92400e    /* Amber-brown — warmth, humanity */
```

### Semantic Colors
```
--color-background: var(--color-surface)
--color-text:       var(--color-ink)
--color-link:       var(--color-accent)
--color-highlight:  #dbeafe    /* Light blue for callouts */
--color-border:     #e5e5e4    /* Subtle borders */
--color-muted:      #737373    /* Secondary text */
```

### Status Colors (used sparingly)
```
--color-success:    #16a34a
--color-warning:    #ca8a04
--color-error:      #dc2626
--color-info:       var(--color-accent)
```

### Rationale
- Blue conveys trust without alarm (red/orange would feel fear-adjacent)
- Warm white reduces eye strain for long reading sessions
- Dark ink provides strong contrast for accessibility
- Teal as secondary adds depth without clashing
- Limited palette keeps things focused

---

## Typography

### Font Stack
```
--font-heading: "Inter", system-ui, sans-serif
--font-body:    "Inter", system-ui, sans-serif
--font-mono:    "JetBrains Mono", "Fira Code", monospace
```

Inter chosen because:
- Excellent readability at all sizes
- Free and widely available
- Professional without being sterile
- Great for both headings and body text

### Scale (based on 1.25 ratio)
```
--text-xs:   0.75rem   / 1rem     /* 12px — captions, labels */
--text-sm:   0.875rem  / 1.25rem  /* 14px — secondary text */
--text-base: 1rem      / 1.5rem   /* 16px — body text */
--text-lg:   1.125rem  / 1.75rem  /* 18px — lead text */
--text-xl:   1.25rem   / 1.75rem  /* 20px — h4 */
--text-2xl:  1.5rem    / 2rem     /* 24px — h3 */
--text-3xl:  1.875rem  / 2.25rem  /* 30px — h2 */
--text-4xl:  2.25rem   / 2.5rem   /* 36px — h1 */
```

### Reading Optimization
- Body text: 16px minimum, 1.5 line height
- Max reading width: 65-75 characters (~42rem)
- Generous paragraph spacing (1.5em)
- Heading spacing: 2em above, 0.5em below

---

## Spacing System

Based on 4px grid:
```
--space-1:  0.25rem  /* 4px */
--space-2:  0.5rem   /* 8px */
--space-3:  0.75rem  /* 12px */
--space-4:  1rem     /* 16px */
--space-6:  1.5rem   /* 24px */
--space-8:  2rem     /* 32px */
--space-12: 3rem     /* 48px */
--space-16: 4rem     /* 64px */
--space-24: 6rem     /* 96px */
```

---

## Component Categories

### Navigation
- `Header` — logo, primary nav, auth state, search
- `Sidebar` — section navigation (for map, learn, research)
- `Breadcrumbs` — location awareness
- `Footer` — secondary nav, legal, newsletter signup
- `MobileNav` — slide-out menu

### Content Display
- `Article` — long-form content with table of contents
- `Card` — resource/item preview
- `ConceptExplainer` — term with expandable explanation
- `FieldMapNode` — interactive map element
- `PaperSummary` — structured paper summary card
- `DigestEntry` — weekly digest item
- `Timeline` — chronological events

### Data & Tools
- `Dashboard` — user's personalized view
- `ProgressTracker` — learning path progress
- `Checklist` — interactive safety checklist
- `ComparisonTable` — comparing approaches/tools
- `FilterBar` — filtering content by tags/categories

### Forms & Actions
- `SearchBar` — global search
- `NewsletterSignup` — email capture
- `LoginForm` — authentication
- `SubscribeButton` — payment CTA
- `BookmarkButton` — save item
- `ShareButton` — share resource

### Layout
- `PageLayout` — consistent page structure
- `ContentLayout` — reading-optimized layout with optional sidebar
- `GridLayout` — card grids
- `SplitLayout` — sidebar + content

### Feedback
- `Badge` — tags, categories, status
- `Callout` — info/warning/tip blocks in content
- `Toast` — non-blocking notifications
- `EmptyState` — when no content/data available
- `LoadingSkeleton` — loading placeholders

---

## Accessibility Approach

### WCAG 2.1 AA Compliance (minimum)

**Color contrast:**
- All text meets 4.5:1 contrast ratio against background
- Large text (18px+) meets 3:1 minimum
- Interactive elements have visible focus indicators
- Color is never the sole means of conveying information

**Keyboard navigation:**
- All interactive elements reachable via keyboard
- Logical tab order following visual layout
- Skip-to-content link on every page
- Escape closes modals/overlays
- Arrow keys navigate within complex components (map, lists)

**Screen readers:**
- Semantic HTML (proper heading hierarchy, landmarks, lists)
- ARIA labels where semantics aren't sufficient
- Alt text for all informational images
- Descriptive link text (no "click here")
- Live regions for dynamic content updates

**Motion & preferences:**
- `prefers-reduced-motion` respected
- No auto-playing animations
- `prefers-color-scheme` supported (light/dark)
- `prefers-contrast` considered for high-contrast mode

**Content:**
- Reading level appropriate for target audience (not artificially simplified)
- Clear headings and scannable structure
- Tables have proper headers and captions
- Forms have associated labels and error messages

### Testing Plan
- axe-core automated testing in CI
- Manual keyboard navigation testing
- Screen reader testing (VoiceOver, NVDA)
- Lighthouse accessibility audits
- User testing with assistive technology users (later)

---

## Responsive Breakpoints

```
sm:  640px   /* Mobile landscape */
md:  768px   /* Tablet */
lg:  1024px  /* Desktop */
xl:  1280px  /* Wide desktop */
2xl: 1536px  /* Ultra-wide */
```

### Mobile-first principles:
- Content readable without horizontal scrolling at 320px
- Navigation collapses to hamburger below md
- Sidebar becomes top-level navigation on mobile
- Cards stack vertically on small screens
- Reading content uses full width on mobile
