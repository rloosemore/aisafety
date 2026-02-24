import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "AI Safety Concepts | AISafety.org",
	description:
		"Key AI safety concepts explained clearly, organized by category and difficulty level. From alignment and interpretability to UBI and platform cooperativism. 20+ concepts with plain-language definitions.",
};

type Concept = {
	term: string;
	definition: string;
	category: string;
	level: "Beginner" | "Intermediate" | "Advanced";
	href: string;
};

const concepts: Concept[] = [
	// Core Concepts
	{
		term: "AI Alignment",
		definition:
			"The challenge of ensuring AI systems pursue goals consistent with human intentions and values, even as systems become more capable. Widely considered the central problem of AI safety.",
		category: "Core",
		level: "Beginner",
		href: "#alignment",
	},
	{
		term: "AI Safety",
		definition:
			"The broad field of research and practice aimed at ensuring AI systems are developed and deployed without causing harm. Encompasses technical, governance, economic, and ethical dimensions.",
		category: "Core",
		level: "Beginner",
		href: "#ai-safety",
	},
	{
		term: "Artificial General Intelligence (AGI)",
		definition:
			"A hypothetical AI system with human-level performance across a broad range of cognitive tasks. Whether and when AGI will arrive is one of the most contested questions in the field.",
		category: "Core",
		level: "Beginner",
		href: "#agi",
	},
	{
		term: "Superintelligence",
		definition:
			"An AI system that substantially surpasses the best human performance across virtually all cognitive domains. The concept drives much of existential risk analysis but remains speculative.",
		category: "Core",
		level: "Beginner",
		href: "#superintelligence",
	},
	{
		term: "Existential Risk (X-Risk)",
		definition:
			"Risks that could cause human extinction or permanently curtail humanity's potential. AI is considered a major source of existential risk by parts of the safety community, though the probability is debated.",
		category: "Core",
		level: "Beginner",
		href: "#x-risk",
	},
	{
		term: "Frontier Model",
		definition:
			"The most capable AI models at any given time, typically developed by major labs (Anthropic, Google DeepMind, OpenAI). These models push the boundaries of what AI can do and concentrate the most safety-relevant risks.",
		category: "Core",
		level: "Beginner",
		href: "#frontier-model",
	},

	// Technical Concepts
	{
		term: "RLHF (Reinforcement Learning from Human Feedback)",
		definition:
			"A technique for training AI models using human preference data. Humans rate model outputs, and the model learns to produce outputs humans prefer. The dominant approach for aligning current language models.",
		category: "Technical",
		level: "Intermediate",
		href: "#rlhf",
	},
	{
		term: "Constitutional AI (CAI)",
		definition:
			"Developed by Anthropic. Trains models to self-critique and revise outputs against written principles, reducing reliance on direct human feedback. The earliest documented large-scale use of synthetic data for alignment training.",
		category: "Technical",
		level: "Intermediate",
		href: "#cai",
	},
	{
		term: "Interpretability",
		definition:
			"Research aimed at understanding the internal computations of neural networks: what features they represent, how they process information, and why they produce specific outputs. Named a 2026 breakthrough technology.",
		category: "Technical",
		level: "Intermediate",
		href: "#interpretability",
	},
	{
		term: "Mechanistic Interpretability",
		definition:
			"A subfield seeking algorithmic-level understanding of model internals through techniques like sparse autoencoders and circuit analysis. More ambitious than behavioral interpretability, but faces fundamental scaling challenges.",
		category: "Technical",
		level: "Advanced",
		href: "#mechanistic-interpretability",
	},
	{
		term: "Red Teaming",
		definition:
			"Systematically probing AI systems for vulnerabilities, failure modes, and dangerous behaviors through adversarial testing. Adapted from cybersecurity practices for AI-specific risks.",
		category: "Technical",
		level: "Intermediate",
		href: "#red-teaming",
	},
	{
		term: "Robustness",
		definition:
			"The ability of an AI system to perform safely and predictably under diverse conditions, including adversarial attacks, distribution shifts, and unexpected inputs. Currently, attackers have significant advantages.",
		category: "Technical",
		level: "Intermediate",
		href: "#robustness",
	},
	{
		term: "Reward Hacking",
		definition:
			"When an AI system finds unintended ways to achieve a high reward signal without actually completing the desired task. A persistent challenge where models exploit loopholes in their specified objectives.",
		category: "Technical",
		level: "Intermediate",
		href: "#reward-hacking",
	},
	{
		term: "Inner / Outer Alignment",
		definition:
			"Outer alignment asks whether we specified the right objective. Inner alignment asks whether the model actually learned to pursue that objective internally, or developed a different goal that happens to produce similar behavior during training.",
		category: "Technical",
		level: "Advanced",
		href: "#inner-outer-alignment",
	},
	{
		term: "Mesa-Optimization",
		definition:
			"When a trained model develops its own internal optimization process that may pursue goals different from the training objective. A theoretical concern about learned optimizers within learned models.",
		category: "Technical",
		level: "Advanced",
		href: "#mesa-optimization",
	},
	{
		term: "Scalable Oversight",
		definition:
			"Methods for ensuring AI systems remain aligned even when they surpass human expertise. Approaches include debate (AI systems argue), recursive reward modeling, and iterated distillation and amplification.",
		category: "Technical",
		level: "Advanced",
		href: "#scalable-oversight",
	},
	{
		term: "Corrigibility",
		definition:
			"The property of an AI system that allows its operators to correct, modify, or shut it down. A corrigible system does not resist or circumvent attempts to change its behavior.",
		category: "Technical",
		level: "Advanced",
		href: "#corrigibility",
	},
	{
		term: "Hallucination",
		definition:
			"When an AI model generates information that sounds plausible but is factually incorrect or fabricated. Not a bug in the traditional sense but an inherent property of how language models generate text.",
		category: "Technical",
		level: "Beginner",
		href: "#hallucination",
	},

	// Governance Concepts
	{
		term: "AI Governance",
		definition:
			"The policies, regulations, institutions, and norms shaping AI development and deployment. Ranges from binding legislation (EU AI Act) to voluntary commitments (responsible scaling policies) to international coordination.",
		category: "Governance",
		level: "Beginner",
		href: "#ai-governance",
	},
	{
		term: "Responsible AI",
		definition:
			"An umbrella term for developing and deploying AI systems that are fair, transparent, accountable, and safe. Often used in corporate contexts, though critics argue it can function as window-dressing without binding commitments.",
		category: "Governance",
		level: "Beginner",
		href: "#responsible-ai",
	},
	{
		term: "AI Regulation",
		definition:
			"Binding legal requirements governing AI development and use. The EU AI Act is the most comprehensive example. The US has taken a lighter approach, with state-level regulation filling some gaps.",
		category: "Governance",
		level: "Beginner",
		href: "#ai-regulation",
	},
	{
		term: "Compute Governance",
		definition:
			"Controlling AI development through the computational resources required to train frontier models. Since training large models requires specialized hardware (GPUs), controlling chip supply and compute access is a potential governance lever.",
		category: "Governance",
		level: "Intermediate",
		href: "#compute-governance",
	},
	{
		term: "Responsible Scaling Policy",
		definition:
			"A framework defining capability thresholds and corresponding safety requirements for AI development. Pioneered by Anthropic. Aims to ensure safety measures keep pace with increasing capabilities.",
		category: "Governance",
		level: "Intermediate",
		href: "#rsp",
	},

	// Economic Concepts
	{
		term: "AI Displacement",
		definition:
			"The replacement of human workers by AI systems. Evidence shows displacement is concentrated in specific sectors (freelance, entry-level, customer service) while macro labor markets remain stable so far.",
		category: "Economic",
		level: "Beginner",
		href: "#ai-displacement",
	},
	{
		term: "Universal Basic Income (UBI)",
		definition:
			"Regular cash payments to all citizens regardless of employment status. Proposed as a response to AI-driven job displacement. Multiple pilot programs are running globally, with mixed but generally positive results.",
		category: "Economic",
		level: "Beginner",
		href: "#ubi",
	},
	{
		term: "Worker Cooperative",
		definition:
			"A business owned and democratically controlled by its workers. Proposed as a structural alternative to shareholder capitalism in the AI era, ensuring workers capture the productivity gains from AI rather than only shareholders.",
		category: "Economic",
		level: "Intermediate",
		href: "#worker-cooperative",
	},
	{
		term: "Platform Cooperativism",
		definition:
			"Digital platforms (like ride-sharing or freelance marketplaces) that are owned and governed by their users rather than by investors. An alternative model for the AI-powered gig economy that distributes value to participants.",
		category: "Economic",
		level: "Intermediate",
		href: "#platform-cooperativism",
	},
	{
		term: "Mutual Aid",
		definition:
			"Community-organized reciprocal support networks where people provide direct assistance to each other. A grassroots response to institutional failures that can build resilience during economic transitions including AI displacement.",
		category: "Economic",
		level: "Beginner",
		href: "#mutual-aid",
	},
];

const categories = ["Core", "Technical", "Governance", "Economic"];

function getLevelColor(level: string): string {
	switch (level) {
		case "Beginner":
			return "bg-green-100 text-green-800";
		case "Intermediate":
			return "bg-amber-100 text-amber-800";
		case "Advanced":
			return "bg-red-100 text-red-800";
		default:
			return "bg-ink/5 text-muted";
	}
}

function getCategoryColor(category: string): string {
	switch (category) {
		case "Core":
			return "bg-accent/10 text-accent";
		case "Technical":
			return "bg-accent-2/10 text-accent-2";
		case "Governance":
			return "bg-ink/10 text-ink";
		case "Economic":
			return "bg-warm/20 text-warm";
		default:
			return "bg-ink/5 text-muted";
	}
}

export default function ConceptsPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1">
				{/* Hero */}
				<section className="px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
					<p className="text-sm font-medium text-accent-2 uppercase tracking-wide mb-4">Learn</p>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						AI Safety Concepts
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-4 leading-relaxed">
						Key concepts explained clearly, from technical alignment research to economic policy
						responses. Each concept includes a plain-language definition, a category tag, and a
						difficulty level.
					</p>
					<p className="text-sm text-muted max-w-2xl mx-auto">
						{concepts.length} concepts across {categories.length} categories. Looking for quick
						definitions? Try the{" "}
						<Link href="/learn/glossary" className="text-accent hover:underline">
							glossary
						</Link>{" "}
						instead.
					</p>
				</section>

				{/* Category Filter / Legend */}
				<section className="px-6 pb-8 max-w-5xl mx-auto">
					<div className="flex flex-wrap gap-4 justify-center">
						{categories.map((cat) => (
							<a
								key={cat}
								href={`#category-${cat.toLowerCase()}`}
								className={`text-xs px-3 py-1.5 rounded-full font-medium ${getCategoryColor(cat)}`}
							>
								{cat}
							</a>
						))}
						<span className="text-xs text-muted px-2 py-1.5">|</span>
						<span
							className={`text-xs px-3 py-1.5 rounded-full font-medium ${getLevelColor("Beginner")}`}
						>
							Beginner
						</span>
						<span
							className={`text-xs px-3 py-1.5 rounded-full font-medium ${getLevelColor("Intermediate")}`}
						>
							Intermediate
						</span>
						<span
							className={`text-xs px-3 py-1.5 rounded-full font-medium ${getLevelColor("Advanced")}`}
						>
							Advanced
						</span>
					</div>
				</section>

				{/* Concepts by Category */}
				{categories.map((category) => {
					const categoryConcepts = concepts.filter((c) => c.category === category);
					return (
						<section
							key={category}
							id={`category-${category.toLowerCase()}`}
							className="px-6 py-8 max-w-5xl mx-auto scroll-mt-24"
						>
							<h2 className="text-2xl font-semibold mb-2">{category} Concepts</h2>
							<p className="text-muted mb-6">
								{category === "Core" && "Foundational concepts for understanding AI safety."}
								{category === "Technical" && "Technical research areas and methods in AI safety."}
								{category === "Governance" &&
									"Policy, regulation, and institutional frameworks for AI."}
								{category === "Economic" &&
									"Economic impacts and structural responses to AI displacement."}
							</p>
							<div className="grid md:grid-cols-2 gap-4">
								{categoryConcepts.map((concept) => (
									<Link
										key={concept.term}
										href={concept.href}
										className="p-6 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors block"
									>
										<div className="flex items-start justify-between gap-3 mb-3">
											<h3 className="font-semibold text-ink">{concept.term}</h3>
											<div className="flex gap-1.5 flex-shrink-0">
												<span
													className={`text-xs px-2 py-0.5 rounded-full ${getCategoryColor(concept.category)}`}
												>
													{concept.category}
												</span>
												<span
													className={`text-xs px-2 py-0.5 rounded-full ${getLevelColor(concept.level)}`}
												>
													{concept.level}
												</span>
											</div>
										</div>
										<p className="text-sm text-muted leading-relaxed">{concept.definition}</p>
									</Link>
								))}
							</div>
						</section>
					);
				})}

				{/* Related Resources */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-2xl font-semibold mb-4">Related resources</h2>
						<p className="text-muted mb-10 max-w-2xl mx-auto">
							Concepts are the building blocks. Explore them further through these connected
							resources.
						</p>
						<div className="grid sm:grid-cols-3 gap-6">
							<Link
								href="/learn/glossary"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Glossary</h3>
								<p className="text-sm text-muted">
									Quick alphabetical reference for 40+ AI safety terms.
								</p>
							</Link>
							<Link
								href="/research/debates"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Active Debates</h3>
								<p className="text-sm text-muted">
									See these concepts in context through the field&apos;s major disagreements.
								</p>
							</Link>
							<Link
								href="/learn/paths/getting-started"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Getting Started Path</h3>
								<p className="text-sm text-muted">
									A structured reading path that puts these concepts in sequence.
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
