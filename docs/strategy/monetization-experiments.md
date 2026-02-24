# Monetization Experimentation Plan — AISafety.org

## Philosophy

Revenue must be validated, not assumed. Every monetization feature starts as a hypothesis, is tested with real users, and is either scaled or killed based on evidence.

No feature becomes permanent without demonstrating value to users.

---

## Experiment 1: Newsletter Premium (Week 4-6)

**Hypothesis:** People will pay $10/month for a deeper version of the weekly digest.

**Setup:**
- Publish free weekly digest (summary, 3-5 items)
- Add "full analysis" section visible only to subscribers
- Simple Stripe checkout, no complex billing

**Metrics:**
- Newsletter signup rate (target: 5% of unique visitors)
- Free-to-paid conversion rate (target: 2-3% of newsletter subscribers)
- Churn rate (target: <5% monthly)
- Email open rate (target: >40%)

**Success criteria:** 50 paying subscribers within 8 weeks of launch

**Kill criteria:** <10 paying subscribers after 8 weeks despite >1000 newsletter subscribers

**Cost to run:** Near zero (Stripe + email service)

---

## Experiment 2: Saved Orientation (Month 2-3)

**Hypothesis:** Users will create accounts to save their reading progress and get personalized recommendations.

**Setup:**
- Add "save this" buttons to resources
- Create simple dashboard showing saved items
- "Continue where you left off" on return visit
- Free tier: save up to 10 items
- Paid tier: unlimited saves + reading path tracking

**Metrics:**
- Account creation rate (target: 3% of visitors)
- Items saved per user (engagement depth)
- Return visit rate for account holders (target: >30% weekly)
- Free-to-paid conversion for saves limit (target: 5%)

**Success criteria:** 200 accounts, 30% weekly active, 15+ paid conversions

**Kill criteria:** <50 accounts after 6 weeks of availability

---

## Experiment 3: Professional Toolkit (Month 3-4)

**Hypothesis:** Practitioners will pay $35/month for professional-grade AI safety tools and templates.

**Setup:**
- Create 3-5 high-quality templates (evaluation checklist, risk assessment, regulatory summary)
- Offer 1 template free as sample
- Gate remaining behind Professional tier
- Highlight time-saved value proposition

**Metrics:**
- Template download rate (free sample)
- Professional tier signup rate
- Template usage (are people actually using them?)
- Feedback quality (do people request more?)

**Success criteria:** 30 Professional subscribers within 6 weeks

**Kill criteria:** <5 signups despite >500 template page views

---

## Experiment 4: Community Discussion (Month 4-5)

**Hypothesis:** A small, curated discussion space adds enough value to justify subscription.

**Setup:**
- Simple threaded discussion (can start with hosted forum or Discord)
- Subscriber-only access
- Weekly discussion prompts
- Occasional expert AMAs

**Metrics:**
- Posts per week (community health)
- Active participants as % of members (target: >20%)
- Retention impact (do community members churn less?)
- Qualitative feedback

**Success criteria:** Active discussion with >20% participation rate, positive retention impact

**Kill criteria:** <5 posts per week after 4 weeks, or community becomes low-quality

---

## Metrics Framework

### North Star Metric
**Monthly Recurring Revenue (MRR)**

### Leading Indicators (track weekly)
| Metric | What it tells you |
|--------|-------------------|
| Unique visitors | Awareness health |
| Newsletter signups | Trust building |
| Account creations | Engagement depth |
| Return visit rate | Stickiness |
| Content engagement (time, scroll depth) | Content quality |
| Free-to-paid conversion | Value perception |

### Lagging Indicators (track monthly)
| Metric | What it tells you |
|--------|-------------------|
| MRR | Revenue health |
| Subscriber churn | Value delivery |
| LTV (lifetime value) | Sustainability |
| CAC (if any paid acquisition) | Efficiency |
| Net Promoter Score | Advocacy |

### Health Metrics (monitor always)
| Metric | Danger zone |
|--------|-------------|
| Churn rate | >8% monthly |
| Email open rate | <25% |
| Bounce rate | >70% |
| Page load time | >3 seconds |
| Accessibility score | <90 Lighthouse |

---

## Iteration Loop

```
Week 1: Observe metrics
Week 2: Identify biggest opportunity/problem
Week 3: Design small experiment
Week 4: Ship experiment
Week 5: Measure results
Week 6: Decide: scale, iterate, or kill
```

### Decision Framework

**Scale** if:
- Metric exceeds success criteria
- User feedback is positive
- Revenue impact is clear

**Iterate** if:
- Signal is promising but below target
- Users engage but don't convert
- Feedback suggests specific improvements

**Kill** if:
- Below kill criteria after full test period
- User feedback is negative
- Opportunity cost is too high

---

## Pricing Evolution Plan

### Phase 1 (Months 1-3): Simple
- Free (core content)
- Supporter: $10/month (digest + saves + community)

### Phase 2 (Months 3-5): Add professional tier
- Free
- Supporter: $10/month
- Professional: $35/month (tools + templates + regulatory)

### Phase 3 (Months 5-7): Refine and add annual
- Free
- Supporter: $10/month or $96/year (20% discount)
- Professional: $35/month or $336/year (20% discount)
- Team: $80/seat/month (by request)

### Phase 4 (Month 7+): Experiment with high-ticket
- Workshops: $300-500 per session
- Consulting: hourly/project basis
- Sponsored research: by arrangement

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Premature monetization damages trust | Lead with 6+ weeks of free value first |
| Paywall too aggressive | Keep the boundary generous toward free |
| Wrong price point | Start low, raise based on demand (easier than lowering) |
| Feature creep | One experiment at a time, clear kill criteria |
| Burnout from content treadmill | Systematize production, use research artifacts |
| Competitor enters space | Focus on continuity moat, not feature race |
