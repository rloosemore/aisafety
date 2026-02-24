import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "What's Happening: AI's Impact on Jobs, Wealth, and Society | AISafety.org",
	description:
		"Evidence-based overview of AI's impact on employment, wealth concentration, and society. No panic, no denial — what the data actually shows and what you can do about it.",
};

const topicCards = [
	{
		title: "AI & Employment",
		href: "/crisis/jobs",
		description:
			"54,836 documented AI-attributed job cuts in 2025. Entry-level workers hit hardest. What the evidence shows — and what it doesn't.",
		stat: "54,836",
		statLabel: "documented AI job cuts in 2025",
	},
	{
		title: "Concentration of Power",
		href: "/crisis/wealth",
		description:
			"AI minted 50+ new billionaires in 2025. The top 12 now own more than the poorest half of humanity. Where the money is going.",
		stat: "$3.5T",
		statLabel: "billionaire wealth surge in 2025",
	},
	{
		title: "How Fast Is This Happening?",
		href: "/crisis/timeline",
		description:
			"Expert predictions range from 2026 to never. Honest assessment of AI timelines — what we know, what we don't, and why it matters now.",
		stat: "50%",
		statLabel: "prediction market odds for AGI by 2033",
	},
	{
		title: "Real Stories",
		href: "/crisis/stories",
		description:
			"Behind the statistics are real people — customer service reps, writers, translators, developers. What displacement actually looks like.",
		stat: "68%",
		statLabel: "of creative freelancers feel job security reduced",
	},
	{
		title: "Myths vs. Reality",
		href: "/crisis/myths",
		description:
			"Both sides get things wrong. We bust dismisser myths and doomer myths alike. The reality is serious enough without exaggeration.",
		stat: "8",
		statLabel: "common myths debunked with evidence",
	},
];

const evidenceStats = [
	{
		number: "54,836",
		label: "U.S. job cuts attributed to AI in 2025",
		source: "Challenger, Gray & Christmas",
	},
	{
		number: "16-20%",
		label: "employment decline for ages 22-25 in high-AI-exposure jobs",
		source: "Stanford Digital Economy Lab",
	},
	{
		number: "37%",
		label: "of companies expect to have replaced jobs with AI by end of 2026",
		source: "HR Dive / WEF",
	},
	{
		number: "$18.3T",
		label: "global billionaire wealth in 2025, up 81% since 2020",
		source: "Oxfam",
	},
	{
		number: "92M",
		label: "jobs projected to be displaced globally by 2030",
		source: "World Economic Forum",
	},
	{
		number: "71%",
		label: "of Americans fear permanent job loss from AI",
		source: "Reuters/Ipsos",
	},
];

export default function CrisisLanding() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1">
				{/* Hero */}
				<section className="px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
					<p className="text-sm font-medium text-accent-2 uppercase tracking-wide mb-4">
						AI &amp; Society
					</p>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						This is what&apos;s actually happening.
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-4 leading-relaxed">
						AI is displacing workers, concentrating wealth, and reshaping the economy faster than
						institutions can respond. These aren&apos;t predictions — they are documented facts from
						major research institutions, government data, and the companies doing it.
					</p>
					<p className="text-base text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
						We take your concern seriously. We also take accuracy seriously. Here is what the
						evidence shows — including the genuine uncertainties and honest counterarguments.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/crisis/jobs"
							className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
						>
							Start with the evidence
						</Link>
						<Link
							href="/act"
							className="inline-flex items-center justify-center px-6 py-3 bg-accent-2 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
						>
							Skip to what you can do
						</Link>
					</div>
				</section>

				{/* Evidence Stats */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold text-center mb-4">
							The numbers, sourced and cited
						</h2>
						<p className="text-center text-muted mb-12 max-w-2xl mx-auto">
							Every statistic on this site links to its primary source. We distinguish between
							documented facts, projections, and opinions.
						</p>
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
							{evidenceStats.map((stat) => (
								<div key={stat.label} className="text-center">
									<p className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</p>
									<p className="text-sm text-ink font-medium mb-1">{stat.label}</p>
									<p className="text-xs text-muted">{stat.source}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Topic Cards */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold text-center mb-4">
						Understand what&apos;s happening
					</h2>
					<p className="text-center text-muted mb-12 max-w-2xl mx-auto">
						Five in-depth guides covering the evidence on AI displacement, wealth concentration,
						timelines, real stories, and common myths.
					</p>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{topicCards.map((card) => (
							<Link
								key={card.href}
								href={card.href}
								className="p-6 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors flex flex-col"
							>
								<div className="mb-4">
									<span className="text-2xl font-bold text-accent">{card.stat}</span>
									<span className="text-xs text-muted ml-2">{card.statLabel}</span>
								</div>
								<h3 className="text-lg font-semibold mb-2">{card.title}</h3>
								<p className="text-sm text-muted leading-relaxed flex-1">{card.description}</p>
								<span className="text-accent text-sm font-medium mt-4">Read more &rarr;</span>
							</Link>
						))}
					</div>
				</section>

				{/* Important Caveats */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-2xl font-semibold text-center mb-4">What we don&apos;t know</h2>
						<p className="text-center text-muted mb-10 max-w-2xl mx-auto">
							Intellectual honesty requires acknowledging uncertainty. Here is what the evidence
							does not yet clearly show.
						</p>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Macro labor market is still stable</h3>
								<p className="text-sm text-muted leading-relaxed">
									Yale Budget Lab analysis of Bureau of Labor Statistics data through December 2025
									found no statistically significant economy-wide disruption yet. The broader labor
									market shows stability, not collapse. Displacement is concentrated in specific
									sectors and demographics.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">
									Some &ldquo;AI layoffs&rdquo; may not be real
								</h3>
								<p className="text-sm text-muted leading-relaxed">
									Oxford Economics and others have found that companies sometimes attribute layoffs
									to AI to signal innovation to investors. 60% of organizations reduced headcount in
									anticipation of AI, not based on actual AI performance. This &ldquo;AI
									washing&rdquo; inflates displacement numbers.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">AI is also creating jobs</h3>
								<p className="text-sm text-muted leading-relaxed">
									LinkedIn data shows 1.3 million new AI-related roles globally. The WEF projects a
									net gain of 78 million jobs by 2030. AI skills command a 56% wage premium. The
									question is whether new jobs reach displaced workers — and whether they pay as
									well.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Adoption may lag capability</h3>
								<p className="text-sm text-muted leading-relaxed">
									McKinsey notes 57% of work hours are technically automatable, but actual adoption
									depends on cost, regulation, and organizational readiness. Historically,
									technology adoption lags capability by years or decades. The pace of real
									disruption is genuinely uncertain.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* CTA to Action */}
				<section className="px-6 py-24 max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-bold mb-4">This is real. Here&apos;s what you can do.</h2>
					<p className="text-lg text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
						Understanding the problem is the first step. The next step is action — and there are
						concrete, meaningful things you can do right now. UBI campaigns, union organizing,
						policy pressure, community resilience, and more.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/act"
							className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
						>
							See action pathways
						</Link>
						<Link
							href="/community"
							className="inline-flex items-center justify-center px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
						>
							Join the community
						</Link>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
