import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Economic Evidence Base: AI's Impact on Jobs and Wealth | AISafety.org",
	description:
		"Detailed evidence on AI-driven economic displacement, wealth concentration, wage effects, and global disparities. Includes honest counterarguments and key uncertainties. Every claim sourced.",
};

const headlineStats = [
	{
		number: "54,836",
		label: "US job cuts attributed to AI in 2025",
		source: "Challenger, Gray & Christmas",
	},
	{
		number: "16-20%",
		label: "employment decline for ages 22-25 in high-AI-exposure jobs",
		source: "Stanford Digital Economy Lab",
	},
	{
		number: "$18.3T",
		label: "global billionaire wealth in 2025 (up 81% since 2020)",
		source: "Oxfam",
	},
	{
		number: "92M",
		label: "jobs projected displaced globally by 2030",
		source: "World Economic Forum",
	},
	{
		number: "56%",
		label: "wage premium for AI-skilled workers",
		source: "PwC AI Jobs Barometer",
	},
	{
		number: "285:1",
		label: "average CEO-to-worker pay ratio at S&P 500 companies",
		source: "AFL-CIO",
	},
];

const displacementData = [
	{
		company: "Salesforce",
		detail:
			"CEO confirmed approximately 4,000 customer support workers cut with help of AI (September 2025).",
	},
	{
		company: "Amazon",
		detail:
			"14,000 corporate roles cut (October 2025), citing AI investment; 16,000 more in early 2026.",
	},
	{
		company: "IBM",
		detail: "CEO confirmed AI chatbots replaced a few hundred HR workers.",
	},
	{
		company: "Workday",
		detail: "Cut 1,750 jobs (8.5% of workforce) in February 2025, investing more in AI.",
	},
	{
		company: "Duolingo",
		detail:
			"Terminated contracts with 10% of contractor workforce; AI now handles translation tasks.",
	},
	{
		company: "Klarna",
		detail:
			"Claimed AI assistant did work of 700 employees; later reversed course and rehired humans after customer satisfaction dropped.",
	},
];

const projections = [
	{
		org: "World Economic Forum",
		projection: "92M jobs displaced, 170M created (net +78M) by 2030",
	},
	{
		org: "Goldman Sachs",
		projection: "300M jobs globally affected; agents replacing 7% of US roles by 2029",
	},
	{
		org: "McKinsey",
		projection: "57% of US work hours technically automatable (tasks, not whole jobs)",
	},
	{
		org: "IMF",
		projection: "40% of global employment exposed to AI; 60% in advanced economies",
	},
	{
		org: "ILO/NASK",
		projection:
			"25% of global employment in occupations exposed to GenAI; primary effect is augmentation",
	},
	{
		org: "MIT",
		projection: "12% of US labor market could be cost-effectively automated today",
	},
];

const vulnerableRoles = {
	highest: [
		"Data entry clerks, payroll clerks, typists",
		"Customer service representatives (basic)",
		"Telemarketers",
		"Basic translation and transcription",
		"Simple graphic design and template work",
		"Junior/entry-level software development",
		"Basic financial analysis and bookkeeping",
		"Administrative and office support",
	],
	rising: [
		"Financial analysts",
		"Multimedia developers",
		"Software professionals (broader scope)",
		"Database administrators",
		"Legal research and document review",
		"Marketing copywriting",
	],
	lower: [
		"Complex strategic work, creative direction",
		"Roles requiring physical presence and dexterity",
		"Healthcare (direct patient care)",
		"Skilled trades",
		"Teaching (relationship-intensive)",
		"Social work, counseling",
	],
};

const globalImpacts = [
	{
		region: "United States",
		detail:
			"Deregulated, private-sector-led approach. 12% of labor market cost-effectively automatable today (MIT). 71% of Americans fear permanent job loss from AI.",
	},
	{
		region: "European Union",
		detail:
			"EU AI Act establishes risk-based regulation. 34% of employment in exposed occupations. AI used in employment decisions classified as high-risk requiring transparency and oversight.",
	},
	{
		region: "India",
		detail:
			"20-25 million jobs could be displaced by 2030. 1.65 million workers in voice support, data processing, and administrative BPO roles face existential threat from AI agents.",
	},
	{
		region: "Philippines",
		detail:
			"BPO sector reached $40B revenue in 2025, but up to 300,000 BPO jobs could be lost to AI in the next five years. 12.7 million jobs overall at risk.",
	},
	{
		region: "Africa",
		detail:
			"1.2 million Kenyan online workers training AI systems for wages as low as $1.50/hour, building systems that may automate their own roles.",
	},
];

const counterarguments = [
	{
		title: "Macro labor market still stable",
		detail:
			"Yale Budget Lab analysis of BLS data through December 2025 found no statistically significant differences in occupational change rates or unemployment duration for AI-exposed jobs. The broader market shows stability, not disruption, at the economy-wide level.",
	},
	{
		title: "AI is creating new jobs",
		detail:
			"LinkedIn data shows 1.3 million new AI-related roles globally. WEF projects net +78 million jobs by 2030. AI skills command a 56% wage premium. 54,000+ new AI-focused startups launched globally by mid-2025.",
	},
	{
		title: "Historical patterns favor job creation",
		detail:
			"Every major technology transition eventually created more jobs than it destroyed. ITIF argues AI gains are outpacing losses as of late 2025. CEPR suggests AI may reduce wage inequality by targeting high-skilled tasks.",
	},
	{
		title: "AI washing inflates displacement numbers",
		detail:
			"Oxford Economics found firms may be dressing up layoffs as AI-related to convey positive messages to investors. 60% of organizations reduced headcount in anticipation of AI, not based on actual AI performance. NBER found 90% of executives say AI has had no employment impact.",
	},
];

const counterCounters = [
	{
		title: "Speed",
		detail:
			"ChatGPT reached 100M users in 2 months. Previous transitions unfolded over decades. AI capabilities are advancing in months, not years.",
	},
	{
		title: "Breadth",
		detail:
			"AI affects cognitive work across nearly every sector simultaneously, unlike previous automation waves that targeted specific industries.",
	},
	{
		title: "The broken ladder",
		detail:
			"If AI eliminates entry-level roles, the pipeline for developing experienced workers breaks. Stanford data shows 16-20% declines in young worker employment while 30+ employment grows.",
	},
	{
		title: "Transition costs are uneven",
		detail:
			"77% of new AI jobs require master's degrees. New roles are concentrated in different locations and demographics than displaced jobs.",
	},
	{
		title: "Capital vs. labor share",
		detail:
			"Gains flow disproportionately to capital owners. Without bargaining power and policy intervention, workers absorb costs while shareholders capture gains.",
	},
];

const uncertainties = [
	"Pace of real-world adoption vs. technical capability: McKinsey notes 57% of work hours are technically automatable, but actual adoption depends on cost, regulation, and organizational readiness.",
	"Whether current AI capabilities plateau or continue accelerating: if scaling laws hit diminishing returns, the displacement picture changes dramatically.",
	"Quality of new jobs: the WEF's 170 million new jobs projection does not specify whether these are well-paid, stable roles or precarious gig work.",
	"Policy responses: governments could intervene with UBI, retraining, AI taxes, or worker ownership mandates — or do nothing. The range of outcomes is enormous.",
	"The AI washing proportion: we do not know what percentage of reported AI layoffs are genuine displacement vs. corporate cover stories.",
	"Second-order effects: what happens to communities, tax bases, local economies, and mental health when major employers automate.",
];

export default function EvidencePage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1">
				{/* Hero */}
				<section className="px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
					<p className="text-sm font-medium text-accent-2 uppercase tracking-wide mb-4">
						Research Library
					</p>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						Economic Evidence Base
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-4 leading-relaxed">
						The detailed data on AI&apos;s economic impact: job displacement, wage effects, wealth
						concentration, and global disparities. This is the evidence base — sourced, cited, and
						presented with honest counterarguments.
					</p>
					<p className="text-sm text-muted max-w-2xl mx-auto mb-8">
						Looking for the accessible overview?{" "}
						<Link href="/crisis/jobs" className="text-accent hover:underline">
							Start with AI &amp; Employment
						</Link>{" "}
						instead. This page is the detailed research backing.
					</p>
				</section>

				{/* Headline Stats */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold text-center mb-4">Key data points</h2>
						<p className="text-center text-muted mb-12 max-w-2xl mx-auto">
							Each statistic links to its primary source. We distinguish documented data from
							projections.
						</p>
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
							{headlineStats.map((stat) => (
								<div key={stat.label} className="text-center">
									<p className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</p>
									<p className="text-sm text-ink font-medium mb-1">{stat.label}</p>
									<p className="text-xs text-muted">{stat.source}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Documented Displacement */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-4">Documented job displacement (2025)</h2>
					<p className="text-muted mb-8 max-w-3xl">
						Challenger, Gray &amp; Christmas reported 54,836 US job cuts directly attributed to AI
						in 2025, out of 1,206,374 total announced layoffs. AI-attributed cuts represent about
						4.5% of total job losses. For context: the leading reason for 2025 layoffs was DOGE
						Actions (293,753 cuts), not AI.
					</p>

					<h3 className="text-lg font-semibold mb-4">
						Companies citing AI in workforce reductions
					</h3>
					<div className="grid md:grid-cols-2 gap-4 mb-8">
						{displacementData.map((item) => (
							<div
								key={item.company}
								className="p-4 rounded-lg border border-border bg-surface-raised"
							>
								<h4 className="font-semibold text-ink mb-1">{item.company}</h4>
								<p className="text-sm text-muted leading-relaxed">{item.detail}</p>
							</div>
						))}
					</div>

					<div className="p-6 rounded-lg border border-border bg-highlight">
						<h3 className="font-semibold mb-2">Critical caveat: the AI washing problem</h3>
						<p className="text-sm text-muted leading-relaxed">
							Oxford Economics (January 2026) found firms may not actually be replacing workers with
							AI on a significant scale — some are &ldquo;dressing up layoffs&rdquo; as AI-driven
							because it conveys a positive message to investors. Harvard Business Review found 60%
							of organizations reduced headcount in anticipation of AI&apos;s future impact, not
							based on actual AI performance. NBER found 90% of executives say AI has had no impact
							on workplace employment. This &ldquo;AI washing&rdquo; means displacement numbers
							should be treated with caution.
						</p>
					</div>
				</section>

				{/* Freelance Impact */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-4">Freelance and entry-level impact</h2>
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<h3 className="text-lg font-semibold mb-3">Freelance market</h3>
								<p className="text-sm text-muted leading-relaxed mb-4">
									The freelance market shows the clearest early evidence of AI displacement.
									Brookings/Upwork data shows freelancers in AI-exposed occupations experienced a 2%
									decline in contracts and a 5% drop in earnings since late 2022, with declines
									persistent and growing.
								</p>
								<ul className="space-y-2 text-sm text-muted">
									<li className="flex gap-2">
										<span className="text-accent font-bold">73%</span>
										<span>of creative freelancers believe GenAI is altering quality of work</span>
									</li>
									<li className="flex gap-2">
										<span className="text-accent font-bold">68%</span>
										<span>feel job security has been reduced</span>
									</li>
									<li className="flex gap-2">
										<span className="text-accent font-bold">55%</span>
										<span>report decline in financial compensation</span>
									</li>
								</ul>
							</div>
							<div>
								<h3 className="text-lg font-semibold mb-3">Entry-level workers</h3>
								<p className="text-sm text-muted leading-relaxed mb-4">
									Stanford Digital Economy Lab (August 2025) found employment for 22-to-25-year-olds
									in the most AI-exposed occupations declined 16% (relative), even after controlling
									for firm-level impacts. For young software developers specifically, employment was
									20% below its late fall 2022 peak.
								</p>
								<p className="text-sm text-muted leading-relaxed">
									For workers aged 30+, employment in the highest AI-exposure categories grew 6-12%
									over the same period. This creates a &ldquo;broken ladder&rdquo; problem: if
									entry-level roles disappear, how do people gain the experience needed for senior
									roles?
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Projections */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-4">Automation projections (1-5 years)</h2>
					<p className="text-muted mb-8 max-w-3xl">
						Major institutions have produced widely varying estimates. This variance itself is
						informative — it reflects genuine uncertainty about how fast technical capabilities will
						translate to real-world job displacement.
					</p>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
						{projections.map((p) => (
							<div key={p.org} className="p-4 rounded-lg border border-border bg-surface-raised">
								<h3 className="font-semibold text-sm text-accent-2 mb-2">{p.org}</h3>
								<p className="text-sm text-muted leading-relaxed">{p.projection}</p>
							</div>
						))}
					</div>
				</section>

				{/* Vulnerable Roles */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-4">Most affected roles</h2>
						<p className="text-muted mb-8 max-w-3xl">
							Based on cross-referencing ILO, WEF, McKinsey, and Stanford data. These are
							occupational categories, not predictions for individual jobs — actual impact depends
							on organizational context, cost-effectiveness, and adoption pace.
						</p>
						<div className="grid md:grid-cols-3 gap-6">
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-3 text-red-600">Highest automation risk</h3>
								<ul className="space-y-2">
									{vulnerableRoles.highest.map((role) => (
										<li key={role} className="text-sm text-muted leading-relaxed">
											{role}
										</li>
									))}
								</ul>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-3 text-amber-600">Rising automation potential</h3>
								<ul className="space-y-2">
									{vulnerableRoles.rising.map((role) => (
										<li key={role} className="text-sm text-muted leading-relaxed">
											{role}
										</li>
									))}
								</ul>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-3 text-green-700">Lower automation risk</h3>
								<ul className="space-y-2">
									{vulnerableRoles.lower.map((role) => (
										<li key={role} className="text-sm text-muted leading-relaxed">
											{role}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Wealth Concentration */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-4">Wealth concentration</h2>
					<p className="text-muted mb-8 max-w-3xl">
						AI-linked ventures minted 50+ new billionaires in 2025. Technology is the single largest
						contributor to billionaire wealth at $5.2 trillion (32% of total). AI companies
						attracted roughly half of all global venture funding in 2025.
					</p>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
						<div className="p-6 rounded-lg border border-border bg-surface-raised text-center">
							<p className="text-3xl font-bold text-accent mb-2">$3.5T</p>
							<p className="text-sm text-muted">
								billionaire wealth surge in 2025 alone — nearly equivalent to the total wealth held
								by the bottom half of humanity (Oxfam)
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised text-center">
							<p className="text-3xl font-bold text-accent mb-2">50+</p>
							<p className="text-sm text-muted">
								new billionaires minted through AI in 2025, with 20 billionaires gaining a combined
								$460B through AI investments
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised text-center">
							<p className="text-3xl font-bold text-accent mb-2">498</p>
							<p className="text-sm text-muted">
								AI &ldquo;unicorns&rdquo; (private companies valued at $1B+) with combined valuation
								of $2.7 trillion
							</p>
						</div>
					</div>

					<div className="p-6 rounded-lg border border-border bg-surface-raised">
						<h3 className="font-semibold mb-2">The wage bifurcation</h3>
						<p className="text-sm text-muted leading-relaxed">
							AI is creating a two-track labor market. Jobs requiring AI skills command a 56% wage
							premium (up from 25% the previous year), and AI-related postings grew 7.5% even as
							total postings fell 11.3%. Meanwhile, high-end salaries (top 25%) grew 30%+ since
							January 2023 while lower-wage salaries grew only about 10%. The pattern is clear:
							those with AI skills are capturing disproportionate gains while those in AI-exposed
							roles without those skills face stagnant or declining compensation.
						</p>
					</div>
				</section>

				{/* Global Perspective */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-4">Global perspective</h2>
						<p className="text-muted mb-8 max-w-3xl">
							UNDP warns AI risks sparking a new era of divergence between nations. Jobs held by
							women are nearly twice as exposed to automation globally, and 77% of new AI jobs
							require master&apos;s degrees.
						</p>
						<div className="space-y-4">
							{globalImpacts.map((impact) => (
								<div key={impact.region} className="p-6 rounded-lg border border-border bg-surface">
									<h3 className="font-semibold mb-2">{impact.region}</h3>
									<p className="text-sm text-muted leading-relaxed">{impact.detail}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Counterarguments */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-4">Honest counterarguments</h2>
					<p className="text-muted mb-8 max-w-3xl">
						Intellectual honesty requires presenting the strongest arguments against the
						displacement narrative. Here is the evidence that suggests the situation may be less
						dire than headlines suggest.
					</p>
					<div className="grid md:grid-cols-2 gap-6 mb-12">
						{counterarguments.map((arg) => (
							<div
								key={arg.title}
								className="p-6 rounded-lg border border-border bg-surface-raised"
							>
								<h3 className="font-semibold mb-2">{arg.title}</h3>
								<p className="text-sm text-muted leading-relaxed">{arg.detail}</p>
							</div>
						))}
					</div>

					<h3 className="text-lg font-semibold mb-4">
						Why the counterarguments may not apply this time
					</h3>
					<p className="text-muted mb-6 max-w-3xl">
						The optimistic case relies heavily on historical precedent. Here is why this transition
						may be different.
					</p>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
						{counterCounters.map((cc) => (
							<div key={cc.title} className="p-4 rounded-lg border border-border bg-surface-raised">
								<h4 className="font-semibold text-sm text-accent-2 mb-2">{cc.title}</h4>
								<p className="text-sm text-muted leading-relaxed">{cc.detail}</p>
							</div>
						))}
					</div>
				</section>

				{/* Key Uncertainties */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold text-center mb-4">Key uncertainties</h2>
						<p className="text-center text-muted mb-10 max-w-2xl mx-auto">
							What we genuinely do not know. These are not gaps in our research — they are genuine
							open questions that the evidence has not yet resolved.
						</p>
						<div className="space-y-4">
							{uncertainties.map((u) => (
								<div key={u} className="p-4 rounded-lg border border-border bg-surface">
									<p className="text-sm text-muted leading-relaxed">{u}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Bottom Assessment */}
				<section className="px-6 py-16 max-w-4xl mx-auto">
					<div className="p-8 rounded-lg border border-border bg-surface-raised">
						<h2 className="text-xl font-semibold mb-4 text-center">Summary assessment</h2>
						<div className="prose max-w-none">
							<p className="text-muted leading-relaxed mb-4">
								The macro-level labor market data does not yet show large-scale AI job displacement
								at an economy-wide level. This is the most important empirical finding and should be
								stated clearly.
							</p>
							<p className="text-muted leading-relaxed mb-4">
								However, displacement is clearly happening in specific sectors: freelancers
								(especially creative, writing, translation, and basic coding), entry-level
								white-collar workers (especially ages 22-25), customer service roles, and BPO/call
								center workers in developing countries.
							</p>
							<p className="text-muted leading-relaxed mb-4">
								At the same time, AI-related wealth is concentrating at unprecedented speed. The
								critical question is not whether AI will cause significant economic displacement —
								the CEOs building these systems openly acknowledge it will. The question is whether
								the transition will be managed through policy, organizing, and redistribution, or
								unmanaged.
							</p>
							<p className="text-ink font-medium leading-relaxed">
								Every credible projection suggests the disruption will accelerate. The window for
								building safety nets, retraining systems, and redistributive mechanisms is now.
							</p>
						</div>
					</div>

					<div className="mt-8 text-center">
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/act"
								className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
							>
								See action pathways
							</Link>
							<Link
								href="/crisis"
								className="inline-flex items-center justify-center px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
							>
								Read the accessible overview
							</Link>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
