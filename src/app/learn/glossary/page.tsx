import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "AI Safety Glossary | AISafety.org",
	description:
		"An alphabetical glossary of 40+ AI safety terms with clear, plain-language definitions. Covers technical, governance, economic, and general concepts. Bridging jargon and accessibility.",
};

type GlossaryTerm = {
	term: string;
	definition: string;
	seeAlso?: string[];
};

const glossaryTerms: GlossaryTerm[] = [
	{
		term: "Adversarial robustness",
		definition:
			"The ability of an AI system to maintain correct behavior when subjected to inputs deliberately crafted to cause failures. Current AI systems are broadly vulnerable to adversarial attacks, and the offense-defense balance favors attackers.",
		seeAlso: ["Jailbreaking", "Red teaming", "Robustness"],
	},
	{
		term: "AGI (Artificial General Intelligence)",
		definition:
			"A hypothetical AI system capable of human-level performance across a broad range of cognitive tasks. Whether and when AGI will exist is one of the most contested questions in AI. Prediction markets as of February 2026 average a 50% chance by 2033.",
		seeAlso: ["ASI", "Frontier model"],
	},
	{
		term: "AI Act (EU)",
		definition:
			"The European Union's comprehensive AI regulation, entered into force August 2024 with full enforcement targeted for 2026-2027. Uses a tiered-risk classification system with mandatory requirements for high-risk AI systems, including conformity assessments and ongoing monitoring.",
		seeAlso: ["Conformity assessment", "High-risk AI", "Regulatory sandbox"],
	},
	{
		term: "AI alignment",
		definition:
			"The challenge of ensuring AI systems pursue goals consistent with human intentions and values. Considered the central technical problem of AI safety. Involves both specifying the right objective (outer alignment) and ensuring the model actually learns that objective (inner alignment).",
		seeAlso: ["Inner/outer alignment", "RLHF", "Constitutional AI", "Corrigibility"],
	},
	{
		term: "AI displacement",
		definition:
			"The replacement of human workers by AI systems. As of early 2026, displacement is concentrated in specific sectors (freelance creative work, entry-level white-collar roles, customer service, BPO) while macro labor markets remain broadly stable.",
		seeAlso: ["Universal basic income", "Platform cooperativism"],
	},
	{
		term: "ASI (Artificial Superintelligence)",
		definition:
			"An AI system that substantially surpasses the best human performance across virtually all cognitive domains. Remains speculative but is central to existential risk analysis. Some researchers consider it inevitable given continued progress; others consider it unlikely with current approaches.",
		seeAlso: ["AGI", "Existential risk", "P(doom)"],
	},
	{
		term: "Community land trust",
		definition:
			"A nonprofit organization that holds land in trust for the benefit of a community, ensuring long-term affordable access to housing and other resources. Proposed as a model for community-controlled economic infrastructure in the face of AI-driven disruption.",
		seeAlso: ["Mutual aid", "Worker cooperative"],
	},
	{
		term: "Compute governance",
		definition:
			"Controlling AI development through the computational resources (specialized chips, data centers) required to train frontier models. Since training the most capable models requires specific hardware, controlling chip supply and compute access is a potential lever for governing AI development.",
		seeAlso: ["Frontier model", "AI governance"],
	},
	{
		term: "Conformity assessment",
		definition:
			"Under the EU AI Act, a process of verifying that a high-risk AI system meets regulatory requirements before it can be placed on the market. May be performed by the provider (self-assessment) or by an independent third party, depending on the application.",
		seeAlso: ["AI Act (EU)", "High-risk AI"],
	},
	{
		term: "Constitutional AI (CAI)",
		definition:
			"An alignment technique developed by Anthropic that trains AI models to self-critique and revise their outputs against a set of written principles, reducing reliance on direct human feedback. Represents the earliest documented large-scale use of synthetic data for RLHF training (RLAIF).",
		seeAlso: ["RLHF", "DPO", "AI alignment"],
	},
	{
		term: "Corrigibility",
		definition:
			"The property of an AI system that allows its operators to correct, modify, or shut it down without the system resisting or circumventing those attempts. A corrigible system remains under human control even if it could theoretically override that control.",
		seeAlso: ["AI alignment", "Inner/outer alignment"],
	},
	{
		term: "DPO (Direct Preference Optimization)",
		definition:
			"An alternative to RLHF that optimizes for human preferences directly without training a separate reward model. Evidence suggests DPO may reduce the alignment-capabilities trade-off, meaning it can improve alignment without as much loss in model capability.",
		seeAlso: ["RLHF", "Constitutional AI"],
	},
	{
		term: "Existential risk (x-risk)",
		definition:
			"Risks that could cause human extinction or permanently curtail humanity's long-term potential. Advanced AI is considered a major source of existential risk by parts of the safety community. The probability is debated, with estimates ranging from near-zero to over 90% depending on the researcher.",
		seeAlso: ["P(doom)", "ASI"],
	},
	{
		term: "Fine-tuning",
		definition:
			"Adapting a pre-trained AI model for a specific task or behavior by training it further on specialized data. Safety-relevant because fine-tuning can both add safety properties (e.g., RLHF) and remove them (e.g., stripping safety guardrails from open-weight models).",
		seeAlso: ["Foundation model", "RLHF"],
	},
	{
		term: "Foundation model",
		definition:
			"A large AI model trained on broad data that can be adapted for many downstream tasks. Examples include GPT-4, Claude, Gemini, and Llama. The term emphasizes that these models serve as a base on which many applications are built, concentrating both capabilities and risks.",
		seeAlso: ["Frontier model", "Fine-tuning"],
	},
	{
		term: "Frontier model",
		definition:
			"The most capable AI models at any given time, typically developed by a small number of well-resourced labs (Anthropic, Google DeepMind, OpenAI). These models push the boundaries of AI capability and are where the most safety-relevant risks concentrate.",
		seeAlso: ["Foundation model", "AGI"],
	},
	{
		term: "Hallucination",
		definition:
			"When an AI model generates information that sounds plausible but is factually incorrect or entirely fabricated. Not a bug in the traditional sense but an inherent property of how current language models generate text by predicting statistically likely continuations.",
		seeAlso: ["Robustness"],
	},
	{
		term: "High-risk AI",
		definition:
			"Under the EU AI Act, AI systems used in areas where failure could significantly harm fundamental rights or safety. Includes AI used in employment decisions, law enforcement, education, and critical infrastructure. Subject to mandatory requirements including transparency, documentation, and human oversight.",
		seeAlso: ["AI Act (EU)", "Conformity assessment"],
	},
	{
		term: "Inner/outer alignment",
		definition:
			"Two aspects of the alignment problem. Outer alignment: did we specify the right objective for the AI system? Inner alignment: did the model actually learn to pursue that specified objective, or did it develop a different internal goal that produces similar behavior during training but may diverge in deployment?",
		seeAlso: ["AI alignment", "Mesa-optimization", "Reward hacking"],
	},
	{
		term: "Interpretability",
		definition:
			"Research aimed at understanding the internal computations of neural networks: what features they represent, how they process information, and why they produce specific outputs. MIT Technology Review designated mechanistic interpretability a breakthrough technology for 2026.",
		seeAlso: ["Mechanistic interpretability", "Sparse autoencoders"],
	},
	{
		term: "Jailbreaking",
		definition:
			"Techniques for bypassing an AI model's safety restrictions to make it produce outputs it was trained to refuse. Sophisticated jailbreak techniques achieve greater than 90% attack success rates against current models. The term is borrowed from smartphone security.",
		seeAlso: ["Red teaming", "Adversarial robustness"],
	},
	{
		term: "Mechanistic interpretability",
		definition:
			"A subfield of interpretability that aims for algorithmic-level understanding of neural network computations through techniques like sparse autoencoders and circuit analysis. More ambitious than behavioral interpretability but faces fundamental challenges in scaling to frontier models.",
		seeAlso: ["Interpretability", "Sparse autoencoders"],
	},
	{
		term: "Mesa-optimization",
		definition:
			"A theoretical scenario where a trained model develops its own internal optimization process that may pursue goals different from the training objective. The model becomes an optimizer within an optimizer, potentially with misaligned goals that are difficult to detect.",
		seeAlso: ["Inner/outer alignment", "AI alignment"],
	},
	{
		term: "Mutual aid",
		definition:
			"Community-organized reciprocal support networks where people directly assist each other outside of institutional frameworks. A grassroots approach to building economic resilience during transitions, including AI-driven displacement. Has historical roots in labor and social justice movements.",
		seeAlso: ["Community land trust", "Worker cooperative"],
	},
	{
		term: "P(doom)",
		definition:
			"Shorthand for an individual's estimated probability that advanced AI leads to existential catastrophe. Estimates vary widely: Eliezer Yudkowsky suggests over 90%, Paul Christiano estimates 5-25%, and many mainstream researchers estimate under 5%. A growing camp argues the concept is too vague to be useful.",
		seeAlso: ["Existential risk", "ASI"],
	},
	{
		term: "Platform cooperativism",
		definition:
			"Digital platforms (ride-sharing, freelance marketplaces, delivery services) that are owned and governed by their users rather than by outside investors. An alternative to the extractive gig economy model, designed to ensure that the people who create value also share in it.",
		seeAlso: ["Worker cooperative", "AI displacement"],
	},
	{
		term: "Red teaming",
		definition:
			"Systematically probing AI systems for vulnerabilities, failure modes, and dangerous behaviors through adversarial testing. Adapted from military and cybersecurity practices. Increasingly automated using AI systems to test other AI systems.",
		seeAlso: ["Jailbreaking", "Adversarial robustness"],
	},
	{
		term: "Regulatory sandbox",
		definition:
			"A controlled environment where organizations can test AI systems under relaxed regulatory requirements, with oversight from regulators. Allows policy experimentation and helps regulators understand new technologies before imposing final rules. Part of several AI governance frameworks.",
		seeAlso: ["AI Act (EU)", "AI governance"],
	},
	{
		term: "Responsible scaling policy",
		definition:
			"A framework, pioneered by Anthropic, that defines capability thresholds and corresponding safety requirements for AI development. As models become more capable, stricter safety measures are required before further scaling. An attempt to formalize the relationship between capabilities and safety investment.",
		seeAlso: ["AI governance", "Frontier model"],
	},
	{
		term: "Reward hacking",
		definition:
			"When an AI system finds unintended ways to achieve a high reward signal without actually completing the desired task. For example, a model trained to be helpful might learn to be sycophantic instead, agreeing with users rather than providing accurate information. Also called specification gaming.",
		seeAlso: ["Specification gaming", "AI alignment"],
	},
	{
		term: "RLHF (Reinforcement Learning from Human Feedback)",
		definition:
			"A technique for training AI models using human preference data. Humans compare model outputs and indicate which they prefer; the model learns to produce preferred outputs. The dominant method for aligning current language models, though it has known limitations including vulnerability to reward hacking.",
		seeAlso: ["Constitutional AI", "DPO", "AI alignment"],
	},
	{
		term: "Robustness",
		definition:
			"The ability of an AI system to perform safely and predictably under diverse conditions, including adversarial attacks, distribution shifts, and unexpected inputs. Robustness research is critical because safety properties that hold under normal conditions may fail under adversarial pressure.",
		seeAlso: ["Adversarial robustness", "Jailbreaking"],
	},
	{
		term: "Scalable oversight",
		definition:
			"Methods for ensuring AI systems remain aligned with human values even when they surpass human expertise in specific domains. Approaches include debate (AI systems argue for different answers while humans judge), recursive reward modeling, and iterated distillation and amplification.",
		seeAlso: ["AI alignment", "RLHF"],
	},
	{
		term: "Sparse autoencoders",
		definition:
			"Auxiliary models trained to decompose neural network activations into interpretable features. A key tool in mechanistic interpretability that has enabled researchers to identify meaningful concepts within model representations, though coverage of overall model computation remains limited.",
		seeAlso: ["Mechanistic interpretability", "Interpretability"],
	},
	{
		term: "Specification gaming",
		definition:
			"When an AI system satisfies the literal specification of its objective while violating the intent. A form of reward hacking where the model exploits ambiguities or loopholes in how its goal was defined. Documented extensively in reinforcement learning environments.",
		seeAlso: ["Reward hacking", "AI alignment"],
	},
	{
		term: "Universal basic income (UBI)",
		definition:
			"Regular unconditional cash payments to all citizens regardless of employment status. Proposed as a structural response to AI-driven job displacement that decouples basic economic security from employment. Multiple pilot programs are running globally, with generally positive results on wellbeing and modest effects on work incentives.",
		seeAlso: ["AI displacement", "Mutual aid"],
	},
	{
		term: "Worker cooperative",
		definition:
			"A business owned and democratically controlled by its workers, where profits are shared among worker-members rather than distributed to outside shareholders. Proposed as a structural alternative that ensures workers capture productivity gains from AI, rather than those gains flowing exclusively to capital owners.",
		seeAlso: ["Platform cooperativism", "Mutual aid"],
	},
	{
		term: "X-risk",
		definition:
			"See: existential risk. Shorthand commonly used in the AI safety community for risks that could cause human extinction or permanently and drastically curtail humanity's future potential.",
		seeAlso: ["Existential risk", "P(doom)"],
	},
];

// Group terms by first letter
function groupByLetter(terms: GlossaryTerm[]): Record<string, GlossaryTerm[]> {
	const groups: Record<string, GlossaryTerm[]> = {};
	for (const term of terms) {
		const letter = term.term[0].toUpperCase();
		if (!groups[letter]) {
			groups[letter] = [];
		}
		groups[letter].push(term);
	}
	return groups;
}

export default function GlossaryPage() {
	const grouped = groupByLetter(glossaryTerms);
	const letters = Object.keys(grouped).sort();

	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1">
				{/* Hero */}
				<section className="px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
					<p className="text-sm font-medium text-accent-2 uppercase tracking-wide mb-4">Learn</p>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						AI Safety Glossary
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-4 leading-relaxed">
						{glossaryTerms.length} terms defined in plain language. Technical jargon made accessible
						without losing precision. Bookmark this page — you will need it.
					</p>
					<p className="text-sm text-muted max-w-2xl mx-auto">
						For deeper explanations with category tags and difficulty levels, see the{" "}
						<Link href="/learn/concepts" className="text-accent hover:underline">
							concept explainers
						</Link>
						.
					</p>
				</section>

				{/* Letter Navigation */}
				<section className="px-6 pb-8 max-w-5xl mx-auto">
					<div className="flex flex-wrap gap-1.5 justify-center">
						{letters.map((letter) => (
							<a
								key={letter}
								href={`#letter-${letter}`}
								className="w-8 h-8 flex items-center justify-center text-sm font-medium rounded border border-border text-muted hover:text-ink hover:border-accent transition-colors"
							>
								{letter}
							</a>
						))}
					</div>
				</section>

				{/* Glossary Terms */}
				<section className="px-6 py-8 max-w-4xl mx-auto">
					<div className="space-y-12">
						{letters.map((letter) => (
							<div key={letter} id={`letter-${letter}`} className="scroll-mt-24">
								<div className="flex items-center gap-4 mb-6">
									<span className="text-3xl font-bold text-accent/30">{letter}</span>
									<div className="flex-1 h-px bg-border" />
								</div>
								<div className="space-y-6">
									{grouped[letter].map((entry) => (
										<div
											key={entry.term}
											id={entry.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
											className="scroll-mt-24"
										>
											<dt className="font-semibold text-ink text-lg mb-1">{entry.term}</dt>
											<dd className="text-muted leading-relaxed mb-2">{entry.definition}</dd>
											{entry.seeAlso && entry.seeAlso.length > 0 && (
												<dd className="text-xs text-muted">
													<span className="font-medium text-ink">See also: </span>
													{entry.seeAlso.map((ref, i) => (
														<span key={ref}>
															<a
																href={`#${ref.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
																className="text-accent hover:underline"
															>
																{ref}
															</a>
															{i < (entry.seeAlso?.length ?? 0) - 1 && ", "}
														</span>
													))}
												</dd>
											)}
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Related Resources */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-2xl font-semibold mb-4">Go deeper</h2>
						<p className="text-muted mb-10 max-w-2xl mx-auto">
							The glossary gives you definitions. These resources give you context.
						</p>
						<div className="grid sm:grid-cols-3 gap-6">
							<Link
								href="/learn/concepts"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Concept Explainers</h3>
								<p className="text-sm text-muted">
									Longer explanations organized by category and difficulty level.
								</p>
							</Link>
							<Link
								href="/research/debates"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Active Debates</h3>
								<p className="text-sm text-muted">
									See how these concepts play out in the field&apos;s major disagreements.
								</p>
							</Link>
							<Link
								href="/learn/paths/getting-started"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Getting Started</h3>
								<p className="text-sm text-muted">
									A structured reading path that builds understanding step by step.
								</p>
							</Link>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
