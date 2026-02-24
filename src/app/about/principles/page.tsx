import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Our Principles | AISafety.org",
	description:
		"The ten principles that guide everything we publish. Intellectual honesty, evidence-based analysis, free action pathways, and radical transparency.",
};

const principles = [
	{
		number: 1,
		title: "Intellectual honesty",
		explanation:
			"We show uncertainty and disagreement, not false consensus. When experts disagree, we present all sides with the strongest version of each argument. We never pretend to know more than we do.",
		example:
			"In practice: Our crisis content includes a prominent section on what we do not know, including evidence that contradicts our concerns. We label claims by confidence level.",
	},
	{
		number: 2,
		title: "Take fear seriously",
		explanation:
			"Your concerns about AI are legitimate. We validate them with evidence, not dismiss them. When 71% of Americans fear permanent job loss from AI, the correct response is honest information — not reassurance and not amplification.",
		example:
			"In practice: Our crisis section leads with documented evidence of displacement, not with calming platitudes. But it also includes genuine counterarguments and uncertainties.",
	},
	{
		number: 3,
		title: "Channel anger constructively",
		explanation:
			"Anger about unchecked corporate AI power is rational. We do not tone-police it or ask you to be calm. We channel it toward effective action — organizing, policy campaigns, cooperative alternatives, legal challenges.",
		example:
			"In practice: Our action pathways page opens with validation, not with a lecture. Every section connects directly to organizations you can join and campaigns you can support.",
	},
	{
		number: 4,
		title: "Action over information",
		explanation:
			"Every page should answer the question: what can I do? Information without action is insufficient when people's livelihoods are at stake. Understanding the problem is necessary but not enough.",
		example:
			"In practice: Every content page links to relevant action pathways. The crisis section ends with concrete things you can do. We never leave you with just bad news.",
	},
	{
		number: 5,
		title: "Evidence-based",
		explanation:
			"Every substantive claim links to evidence. We cite our sources, explain our methodology, and distinguish between documented facts, supported findings, projections, and disputed claims.",
		example:
			"In practice: Statistics include their source and date. We link to primary sources, not to articles about the sources. Our methodology page explains how we evaluate evidence.",
	},
	{
		number: 6,
		title: "Never exploit fear",
		explanation:
			"We do not use manipulative urgency, dark patterns, countdown timers, or fear-based marketing. We do not exaggerate risks to drive engagement or subscriptions. The reality is serious enough without manipulation.",
		example:
			"In practice: Our pricing page explains what is free and why. No artificial scarcity, no limited-time offers, no guilt about not upgrading. Our content does not use alarming language where measured language is more accurate.",
	},
	{
		number: 7,
		title: "Free action pathways",
		explanation:
			"We never paywall how to fight for your livelihood. How to organize, who to contact, where to get involved, what templates to use — this information is always free. Revenue comes from depth and tools, not from access to action.",
		example:
			"In practice: All eight action pathways, the organization directory, and basic action templates are in the free tier. Paid features are professional tools and deeper analysis.",
	},
	{
		number: 8,
		title: "Transparency",
		explanation:
			"Our methods, funding, reasoning, and biases are public. We publish our research methodology, our revenue numbers, and our known biases. If you cannot verify how we work, you should not trust what we produce.",
		example:
			"In practice: We have public pages for methodology, funding transparency, and this principles page. We will publish revenue numbers when paid tiers launch.",
	},
	{
		number: 9,
		title: "Continuously updated",
		explanation:
			"Living documents, not abandoned blog posts. When new evidence emerges, we update existing content rather than publishing contradictory new posts. Every page shows when it was last reviewed.",
		example:
			"In practice: Our evidence pages include last-updated dates and changelogs for major revisions. We do not let content go stale — if we cannot maintain it, we remove it.",
	},
	{
		number: 10,
		title: "Accessibility",
		explanation:
			"This information is for everyone, regardless of technical background or disability. We write clearly, structure content for screen readers, meet WCAG 2.1 AA standards, and avoid jargon without explanation.",
		example:
			"In practice: The site meets accessibility standards. Technical concepts include plain-language explanations. Content is structured with clear headings and navigation. We test with screen readers.",
	},
];

export default function PrinciplesPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1">
				{/* Hero */}
				<section className="px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
					<p className="text-sm font-medium text-accent-2 uppercase tracking-wide mb-4">About</p>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						Our Principles
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
						These ten principles guide everything we publish, how we build this platform, and how we
						make decisions. They are not aspirational — they are commitments. Hold us to them.
					</p>
				</section>

				{/* Principles */}
				<section className="px-6 py-16 max-w-4xl mx-auto">
					<div className="space-y-12">
						{principles.map((principle) => (
							<div key={principle.number} className="flex gap-6">
								<span className="text-3xl font-bold text-accent flex-shrink-0 w-10 text-right">
									{principle.number}
								</span>
								<div>
									<h2 className="text-xl font-semibold mb-3">{principle.title}</h2>
									<p className="text-muted leading-relaxed mb-3">{principle.explanation}</p>
									<p className="text-sm text-muted leading-relaxed bg-surface-raised rounded-lg p-4 border border-border">
										{principle.example}
									</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* CTA */}
				<section className="px-6 py-16 bg-surface-raised border-t border-border">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-2xl font-semibold mb-4">
							Principles are only as good as their practice
						</h2>
						<p className="text-muted leading-relaxed mb-8">
							If you see us violating these principles, say so. We would rather be corrected than
							comfortable. The methodology page explains how we put these principles into practice,
							and the funding page explains how we stay independent.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/about/methodology"
								className="inline-flex items-center justify-center px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
							>
								Our methodology
							</Link>
							<Link
								href="/about/funding"
								className="inline-flex items-center justify-center px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
							>
								Funding transparency
							</Link>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
