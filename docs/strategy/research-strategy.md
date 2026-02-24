# Research Strategy — AISafety.org

## Purpose

Research is not optional. It's the competitive advantage. Without continuous, structured understanding of the AI safety community, the platform will drift into generic content production.

Research serves three functions:
1. **Product discovery** — what should we build?
2. **Content intelligence** — what should we write about?
3. **Monetization validation** — what will people pay for?

---

## Agent Team Topology

### Team A: Field Intelligence (Divergent)

**Field Mapper**
- Maps organizations, subfields, key figures, active debates
- Tracks new papers, policy developments, org announcements
- Output: `research/field-mapping/ecosystem-map.md` (living document)
- Cadence: weekly updates

**Audience Anthropologist**
- Studies language, motivations, frustrations, jobs-to-be-done
- Analyzes forums (LessWrong, EA Forum, AI safety subreddits, Twitter/X, LinkedIn)
- Studies who enters the field, why, and what blocks them
- Output: `research/personas/` directory with persona documents
- Cadence: bi-weekly deep dives

**Monetization Scout**
- Finds what people already pay for in adjacent spaces
- Maps pricing of newsletters, courses, tools, communities
- Tracks willingness-to-pay signals (complaints about cost, praise for value)
- Output: `research/competitors/pricing-landscape.md`
- Cadence: monthly update

**Gap Detector**
- Compares community needs vs. existing offerings
- Identifies underserved audiences and unmet needs
- Spots tool gaps (things people do manually)
- Output: `research/insights/opportunity-hypotheses.md`
- Cadence: bi-weekly synthesis

### Team B: Synthesis (Bridge)

**Synthesis Editor**
- Translates research findings into product hypotheses
- Writes decision memos connecting insights to features
- Maintains `decisions/` directory with Architecture Decision Records
- Output: decision memos, product hypotheses
- Cadence: weekly summary

### Team C: Product (Convergent)

**Artifact Designer** — designs the actual user-facing artifacts
**Technical Implementer** — builds features
**Monetization Experimenter** — designs and analyzes pricing/paywall tests

---

## Research Pipelines

### Pipeline 1: Ecosystem Mapping

```
Sources → Collection → Structuring → Map → Publication
```

**Sources:**
- AI safety org websites (MIRI, Anthropic, DeepMind safety, ARC, CAIS, etc.)
- Academic databases (Semantic Scholar, arXiv cs.AI, cs.CL)
- Policy bodies (NIST, EU AI Office, UK AISI)
- Community platforms (LessWrong, EA Forum, Alignment Forum)
- Professional networks (LinkedIn AI safety groups)
- News aggregators (Import AI, The Gradient, AI safety newsletters)

**Collection method:** Web research + structured note-taking

**Output artifact:** `research/field-mapping/ecosystem-map.md`
- Organizations (categorized by focus area)
- Key debates and their positions
- Active research agendas
- Funding landscape
- Entry points by role

### Pipeline 2: Audience Understanding

```
Community observation → Pattern extraction → Persona creation → Validation
```

**Sources:**
- Reddit (r/aisafety, r/machinelearning, r/artificial)
- LessWrong/EA Forum post engagement
- Twitter/X discussions
- Job postings mentioning AI safety
- Course enrollment patterns
- Newsletter growth patterns

**Output artifacts:**
- `research/personas/researcher-entrant.md`
- `research/personas/engineer-pivot.md`
- `research/personas/policy-generalist.md`
- `research/personas/educator.md`
- `research/personas/concerned-professional.md`
- `research/personas/jobs-to-be-done.md`

### Pipeline 3: Competitive Intelligence

```
Identify offerings → Map features → Analyze pricing → Find gaps
```

**Existing offerings to study:**
- 80,000 Hours (career guidance)
- AI Safety Fundamentals (BlueDot Impact)
- Alignment Forum (discussion)
- LessWrong (community)
- AISRP (research programs)
- Various newsletters (Import AI, The Gradient, etc.)
- Paid communities (Palisade, various Discords)
- Course platforms (Coursera AI safety courses)

**Output artifact:** `research/competitors/landscape.md`

### Pipeline 4: Monetization Signal Detection

```
Observe spending → Analyze complaints → Map willingness → Hypothesize
```

**Key questions:**
1. What do people in this space already pay for?
2. What free things do they wish were better?
3. What professional tasks eat their time?
4. Where does confusion cost them reputation or money?
5. What would they pay to have done for them?

**Output artifact:** `research/insights/monetization-signals.md`

---

## Research Artifacts (File Structure)

```
research/
├── field-mapping/
│   ├── ecosystem-map.md          # Master map of the field
│   ├── organizations.md          # Org database
│   ├── debates.md                # Active debates and positions
│   ├── policy-landscape.md       # Regulatory developments
│   └── reading-lists.md          # Curated by topic
├── personas/
│   ├── researcher-entrant.md
│   ├── engineer-pivot.md
│   ├── policy-generalist.md
│   ├── educator.md
│   ├── concerned-professional.md
│   └── jobs-to-be-done.md
├── competitors/
│   ├── landscape.md              # Full competitive landscape
│   └── pricing-landscape.md      # Pricing analysis
└── insights/
    ├── opportunity-hypotheses.md  # Where we see gaps
    ├── monetization-signals.md    # What people pay for
    └── weekly-synthesis.md        # Rolling synthesis
```

---

## Research Cadence

| Activity | Frequency | Owner |
|----------|-----------|-------|
| Field map update | Weekly | Field Mapper |
| Community monitoring | Ongoing | Audience Anthropologist |
| Persona refinement | Bi-weekly | Audience Anthropologist |
| Competitive scan | Monthly | Monetization Scout |
| Gap analysis | Bi-weekly | Gap Detector |
| Synthesis memo | Weekly | Synthesis Editor |
| Decision memo | As needed | Synthesis Editor |

---

## Research-to-Product Rules

1. **No feature without evidence.** Every feature proposal must cite research.
2. **Hypotheses first.** Research produces hypotheses, not feature specs.
3. **User language matters.** Use the community's own words in copy and navigation.
4. **Track signals, not opinions.** Measure behavior (bookmarks, shares, replies) over stated preferences.
5. **Research is public (mostly).** Publishing research builds trust and attracts contributors.
