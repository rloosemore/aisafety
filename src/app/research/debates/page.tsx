import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Active Debates in AI Safety | AISafety.org",
	description:
		"Seven major debates shaping AI safety: timelines, alignment difficulty, open vs. closed source, regulation, P(doom), interpretability, and near-term vs. long-term priorities. All sides presented fairly.",
};

const debates = [
	{
		id: "timelines",
		question: "When will transformative AI arrive?",
		title: "AI Timelines",
		whyItMatters:
			"Timeline beliefs shape everything: how urgently to pursue alignment research, when governance structures need to be in place, and how to allocate resources between near-term and long-term safety work.",
		positions: [
			{
				label: "Short timelines (2026-2030)",
				description:
					"Held by many industry leaders and some researchers. Points to rapid capability gains in large language models, scaling laws, and increasing investment. OpenAI, Anthropic, and Google DeepMind have oriented internal planning around relatively short timelines.",
			},
			{
				label: "Medium timelines (2030-2040)",
				description:
					"Prediction markets as of February 2026 average a 25% chance of AGI by 2029 and 50% by 2033. METR projects 99% AI R&D automation by approximately 2032. Notes both real progress and remaining gaps.",
			},
			{
				label: "Long timelines (2040+)",
				description:
					"Broader community of specialized AI researchers points toward 2040-2045 for a 50% likelihood. A 2025 AAAI survey found 76% of researchers thought scaling current approaches would be unlikely to produce general intelligence, implying new breakthroughs are needed.",
			},
		],
	},
	{
		id: "alignment-difficulty",
		question: "How hard is the core alignment problem?",
		title: "Alignment Difficulty",
		whyItMatters:
			"This shapes research strategy. If alignment is very hard, the field should invest heavily in foundational theory and potentially slow AI development. If tractable, the focus should be on engineering improvements to existing methods.",
		positions: [
			{
				label: "Very hard / possibly intractable",
				description:
					"Associated with Eliezer Yudkowsky and MIRI. Argues current methods (RLHF, Constitutional AI) are superficial fixes that will not scale to superhuman systems. Key concerns include inner alignment failures, deceptive alignment, and the difficulty of verifying alignment in systems smarter than us.",
			},
			{
				label: "Hard but tractable",
				description:
					"Associated with Paul Christiano and many industry safety researchers. Argues that empirical, iterative approaches can progressively solve alignment as systems become more capable. More optimistic about RLHF, scalable oversight, debate, and interpretability as paths forward.",
			},
			{
				label: "May be easier than expected",
				description:
					"A minority position holding that sufficiently capable AI systems may naturally understand human values, or that simple approaches like instruction-following and constitutional principles may scale further than pessimists expect.",
			},
		],
	},
	{
		id: "open-closed",
		question: "Does open-source AI make us safer or more vulnerable?",
		title: "Open vs. Closed Source",
		whyItMatters:
			"This debate directly affects policy decisions about model weight release, business strategy and competitive dynamics between labs, and who has access to study frontier models for safety research.",
		positions: [
			{
				label: "Open source improves safety",
				description:
					"Argues that democratization is the best defense against AI monopolies, independent researchers can inspect weights for vulnerabilities, and concentration of AI power in a few closed labs is itself a major risk. The 2025 International AI Safety Report found no scientific consensus on many risk questions.",
			},
			{
				label: "Open source increases risk",
				description:
					"Argues that releasing powerful model weights allows bad actors to strip safety filters, potentially enabling weapons development or sophisticated cyberattacks. Safety fine-tuning can be cheaply removed, making open-weight models essentially uncensored.",
			},
			{
				label: "Context-dependent / threshold-based",
				description:
					"An emerging middle position holding that open-sourcing is beneficial below certain capability thresholds but dangerous above them. Meta itself has shifted toward this view, with Mark Zuckerberg acknowledging that superintelligence would require more careful approaches to openness.",
			},
		],
	},
	{
		id: "regulation",
		question: "What regulatory framework best ensures AI safety?",
		title: "Regulation Approaches",
		whyItMatters:
			"Regulatory choices determine the incentive structure for the entire industry. Too little regulation may allow unsafe deployment; too much may drive development to less safety-conscious jurisdictions or slow beneficial applications.",
		positions: [
			{
				label: "Comprehensive mandatory regulation",
				description:
					"The EU AI Act implements tiered-risk classification with mandatory requirements for high-risk systems. Proponents argue voluntary approaches create a race to the bottom on safety, and that regulatory clarity benefits industry planning.",
			},
			{
				label: "Innovation-first voluntary frameworks",
				description:
					"The US federal approach under the December 2025 Executive Order emphasizes minimal regulatory burden to sustain AI dominance. Relies on voluntary industry commitments and existing regulatory authorities. Argues mandatory regulation stifles innovation.",
			},
			{
				label: "State-level and sector-specific regulation",
				description:
					"California, Colorado, and other states have enacted AI governance statutes. Allows policy experimentation but creates regulatory fragmentation. The federal government is attempting to preempt this patchwork.",
			},
		],
	},
	{
		id: "pdoom",
		question: "How likely is existential catastrophe from AI, and is P(doom) even useful?",
		title: "P(doom) Discourse",
		whyItMatters:
			"P(doom) estimates drive resource allocation between existential risk and near-term harms, shape public discourse, and influence governance priorities and the urgency of intervention.",
		positions: [
			{
				label: "High P(doom) (>25%)",
				description:
					"Held by Eliezer Yudkowsky and MIRI-adjacent researchers. Argues the default outcome of building superintelligence without solving alignment is catastrophe, current methods are inadequate, and competitive pressures make inadequate safety the likely path.",
			},
			{
				label: "Moderate P(doom) (5-25%)",
				description:
					"Held by Paul Christiano and many in the AI safety community. Takes the risk seriously enough to warrant major investment in safety research, but believes tractable approaches exist and the problem is not necessarily intractable.",
			},
			{
				label: "Low P(doom) or bad framing",
				description:
					"Some argue loss of control is implausible given current architectures and AI development will be gradual enough for course-correction. A growing camp argues P(doom) is too vague to be useful, with a 2025 survey finding only 21% of experts had heard of key concepts like instrumental convergence.",
			},
		],
	},
	{
		id: "interpretability-vs-evaluation",
		question: "Should we prioritize understanding model internals or testing model behavior?",
		title: "Interpretability vs. Behavioral Evaluation",
		whyItMatters:
			"This shapes research funding, hiring priorities, and the structure of safety teams at major labs. If behavioral evaluation is unreliable, regulatory frameworks based on evaluation requirements may provide false assurance.",
		positions: [
			{
				label: "Interpretability-first",
				description:
					"Argues behavioral evaluation is fundamentally limited because models can behave well during testing while harboring misaligned internal goals. Only understanding internal computations can provide genuine confidence. MIT Technology Review designated mechanistic interpretability a 2026 breakthrough technology.",
			},
			{
				label: "Behavioral evaluation is sufficient",
				description:
					"Argues mechanistic understanding may not be necessary for safety. Behavioral evaluation is more mature, scalable, and directly relevant to deployment decisions. Some researchers argue the most ambitious vision of mechanistic interpretability may be unachievable.",
			},
			{
				label: "Complementary approaches",
				description:
					"A middle position holding both are necessary in parallel. Interpretability provides depth while behavioral evaluation provides breadth and practicality. Anthropic uses both approaches in pre-deployment safety assessment of Claude models.",
			},
		],
	},
	{
		id: "current-vs-future",
		question: "Should we prioritize current AI harms or future catastrophic risks?",
		title: "Near-term vs. Long-term Priorities",
		whyItMatters:
			"This determines the allocation of limited resources between different types of safety work. It also shapes coalition-building, as the AI safety and AI ethics communities have historically struggled to collaborate despite overlapping concerns.",
		positions: [
			{
				label: "Prioritize current harms",
				description:
					"Associated with AI ethics researchers and civil society organizations. Argues AI is already causing real harm through worker exploitation, bias, surveillance, and disinformation. Resources spent on speculative future risks come at the expense of addressing concrete present suffering.",
			},
			{
				label: "Prioritize future / existential risks",
				description:
					"Associated with effective altruism and parts of the technical AI safety community. Argues the expected value of preventing existential catastrophe dwarfs near-term harm, and the window for establishing safety measures is closing as capabilities advance.",
			},
			{
				label: "Near-term and long-term risks are connected",
				description:
					"An emerging synthesis holds that current harms are precursors to existential risks. Individually minor AI harms can compound into society-level threats. A 2025 PNAS study found discussing existential risk does not distract from near-term concerns.",
			},
		],
	},
];

const crossCuttingPatterns = [
	{
		title: "Information asymmetry drives disagreement",
		description:
			"A survey found only 21% of AI researchers have heard of key safety concepts like instrumental convergence, suggesting many disagreements stem from differential exposure to arguments rather than genuine evaluation of the same evidence.",
	},
	{
		title: "Institutional incentives shape positions",
		description:
			"Labs working on frontier models tend toward tractable alignment; academics tend toward longer timelines or greater alarm about current harms; organizations focused on existential risk tend toward shorter timelines and higher P(doom).",
	},
	{
		title: "Converging middle ground",
		description:
			"On several debates, a synthesis position is emerging that rejects binary framing. Meta's shift on open-source, the accumulative x-risk framework, and dual safety assessment approaches all reflect this convergence.",
	},
	{
		title: "Empirical evidence is scarce",
		description:
			"Most debates involve predictions about unprecedented scenarios. The 2025 International AI Safety Report noted there is no scientific consensus on many key questions, making disagreements hard to resolve empirically.",
	},
];

export default function DebatesPage() {
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
						Active Debates in AI Safety
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-4 leading-relaxed">
						Seven major disagreements shaping the future of AI safety. We present all credible
						positions fairly — not to avoid taking a stand, but because understanding the full
						landscape of disagreement is itself essential.
					</p>
					<p className="text-sm text-muted max-w-2xl mx-auto">
						Where experts disagree, the honest thing is to show you the disagreement. Where evidence
						exists, we cite it. Where uncertainty reigns, we say so.
					</p>
				</section>

				{/* Jump Links */}
				<section className="px-6 pb-8 max-w-5xl mx-auto">
					<div className="flex flex-wrap gap-2 justify-center">
						{debates.map((debate) => (
							<a
								key={debate.id}
								href={`#${debate.id}`}
								className="text-xs px-3 py-1.5 rounded-full border border-border text-muted hover:text-ink hover:border-accent transition-colors"
							>
								{debate.title}
							</a>
						))}
					</div>
				</section>

				{/* Debate Cards */}
				<section className="px-6 py-8 max-w-5xl mx-auto">
					<div className="space-y-12">
						{debates.map((debate, index) => (
							<article key={debate.id} id={debate.id} className="scroll-mt-24">
								<div className="p-8 rounded-lg border border-border bg-surface-raised">
									<div className="flex items-start gap-4 mb-6">
										<span className="text-3xl font-bold text-accent/30">
											{String(index + 1).padStart(2, "0")}
										</span>
										<div>
											<h2 className="text-xl font-bold text-ink mb-1">{debate.title}</h2>
											<p className="text-base text-accent-2 font-medium">{debate.question}</p>
										</div>
									</div>

									<div className="grid md:grid-cols-3 gap-4 mb-6">
										{debate.positions.map((position) => (
											<div
												key={position.label}
												className="p-4 rounded-lg border border-border bg-surface"
											>
												<h3 className="font-semibold text-sm mb-2 text-ink">{position.label}</h3>
												<p className="text-sm text-muted leading-relaxed">{position.description}</p>
											</div>
										))}
									</div>

									<div className="pt-4 border-t border-border">
										<p className="text-sm">
											<span className="font-semibold text-ink">Why it matters: </span>
											<span className="text-muted">{debate.whyItMatters}</span>
										</p>
									</div>
								</div>
							</article>
						))}
					</div>
				</section>

				{/* Cross-Cutting Patterns */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold text-center mb-4">Cross-cutting patterns</h2>
						<p className="text-center text-muted mb-12 max-w-2xl mx-auto">
							Several patterns emerge across these debates that are worth understanding in their own
							right.
						</p>
						<div className="grid sm:grid-cols-2 gap-6">
							{crossCuttingPatterns.map((pattern) => (
								<div key={pattern.title} className="p-6 rounded-lg border border-border bg-surface">
									<h3 className="font-semibold mb-2">{pattern.title}</h3>
									<p className="text-sm text-muted leading-relaxed">{pattern.description}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Rhetoric-Action Gap */}
				<section className="px-6 py-16 max-w-4xl mx-auto">
					<div className="p-8 rounded-lg border border-border bg-surface-raised text-center">
						<h2 className="text-xl font-semibold mb-4">The rhetoric-action gap</h2>
						<p className="text-muted leading-relaxed max-w-2xl mx-auto mb-6">
							Regardless of which positions labs publicly endorse in these debates, the Future of
							Life Institute found that all major labs received poor safety grades. The
							highest-scoring company (Anthropic) received a D for existential safety. Stated
							positions and actual safety investment often diverge.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/research/orgs"
								className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
							>
								See organization profiles
							</Link>
							<Link
								href="/act"
								className="inline-flex items-center justify-center px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
							>
								What you can do about it
							</Link>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
