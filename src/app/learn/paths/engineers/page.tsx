import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "AI Safety for Engineers | AISafety.org",
	description:
		"A structured learning path for software engineers building ML systems. From safety fundamentals to practical deployment, with concrete steps you can take in your current role.",
};

const stages = [
	{
		number: 1,
		title: "Safety fundamentals",
		timeEstimate: "3-4 days",
		description:
			"Understand what can go wrong with AI systems and why it matters. This is not abstract philosophy — these are failure modes that have occurred in production systems and will become more common as AI capabilities increase.",
		resources: [
			{
				title: "AI Safety Field Map",
				href: "/map",
				type: "Internal",
				description:
					"Start with the big picture. Our 10-subfield map shows how technical safety, governance, and economic concerns interconnect.",
			},
			{
				title: "Key Concepts: Alignment, Robustness, Interpretability",
				href: "/learn/concepts",
				type: "Internal",
				description:
					"Understand the core safety concepts you will encounter throughout this path. Focus on alignment, robustness, reward hacking, and specification gaming.",
			},
			{
				title: "AI Safety Glossary",
				href: "/learn/glossary",
				type: "Internal",
				description:
					"Keep this bookmarked. Covers 40+ terms from RLHF and DPO to mesa-optimization and corrigibility. You will need it.",
			},
			{
				title: "Concrete Problems in AI Safety (Amodei et al., 2016)",
				href: "#",
				type: "External paper",
				description:
					"The foundational paper mapping practical AI safety problems. Still highly relevant. Covers side effects, reward hacking, scalable oversight, safe exploration, and distributional shift.",
			},
		],
	},
	{
		number: 2,
		title: "Technical concepts",
		timeEstimate: "5-7 days",
		description:
			"Dive deeper into the technical landscape of AI safety. Understand alignment techniques (RLHF, Constitutional AI, DPO), interpretability approaches, and robustness challenges.",
		resources: [
			{
				title: "Active Debates: Alignment Difficulty",
				href: "/research/debates#alignment-difficulty",
				type: "Internal",
				description:
					"Understand where the field disagrees on how hard alignment actually is. Three major positions from intractable to engineering-solvable.",
			},
			{
				title: "Active Debates: Interpretability vs. Evaluation",
				href: "/research/debates#interpretability-vs-evaluation",
				type: "Internal",
				description:
					"The field is split on whether understanding model internals or testing behavior is more important for safety. Understand both sides.",
			},
			{
				title: "Anthropic's Core Views on AI Safety",
				href: "#",
				type: "External reading",
				description:
					"Anthropic's published perspective on alignment challenges and their approach. Includes Constitutional AI, scalable oversight, and responsible scaling. Read critically as one lab's view.",
			},
			{
				title: "Neel Nanda's Mechanistic Interpretability Tutorial",
				href: "#",
				type: "External tutorial",
				description:
					"Hands-on introduction to mechanistic interpretability. Teaches how to identify circuits in neural networks and understand what models are computing internally.",
			},
		],
	},
	{
		number: 3,
		title: "Practical safety",
		timeEstimate: "5-7 days",
		description:
			"Move from understanding to practice. Learn evaluation frameworks, red teaming methodologies, and deployment safety practices that you can apply in your work.",
		resources: [
			{
				title: "UK AISI Inspect Framework",
				href: "#",
				type: "External tool",
				description:
					"Open-source evaluation framework for AI safety testing. Customizable, reproducible evaluation pipelines you can integrate into your workflow.",
			},
			{
				title: "OWASP Top 10 for LLM Applications",
				href: "#",
				type: "External framework",
				description:
					"Security-focused guidance for LLM deployments. Covers prompt injection, insecure output handling, training data poisoning, and more. Practical and actionable.",
			},
			{
				title: "Georgetown CSET Red Teaming Framework",
				href: "#",
				type: "External methodology",
				description:
					"Structured approach to designing red-teaming exercises with explicit threat models. Applicable to any AI system, not just frontier models.",
			},
			{
				title: "Responsible Scaling Policies (Anthropic)",
				href: "#",
				type: "External reading",
				description:
					"Anthropic's framework for scaling AI development safely. Defines capability thresholds and corresponding safety requirements. A concrete example of deployment governance.",
			},
		],
	},
	{
		number: 4,
		title: "Contributing",
		timeEstimate: "Ongoing",
		description:
			"Find where you can contribute to AI safety, whether in your current role or by transitioning into safety-focused work. The field needs engineering talent across many domains.",
		resources: [
			{
				title: "Organization Profiles",
				href: "/research/orgs",
				type: "Internal",
				description:
					"44+ organizations working on AI safety. Identify which ones are hiring, what skills they need, and where your background fits.",
			},
			{
				title: "Open Problems in AI Safety",
				href: "/research/debates",
				type: "Internal",
				description:
					"The active debates represent open problems where engineering contributions are needed. Evaluation tools, interpretability infrastructure, and robustness testing all need more builders.",
			},
			{
				title: "80,000 Hours AI Safety Engineering Career Guide",
				href: "#",
				type: "External reading",
				description:
					"Evidence-based analysis of how engineers can contribute to AI safety. Covers roles, organizations, and skill development paths.",
			},
			{
				title: "EleutherAI and Open-Source Safety",
				href: "#",
				type: "External community",
				description:
					"The open-source AI safety community. Contribute to interpretability research, safety tooling, or evaluation frameworks. Good entry point for engineers wanting to contribute.",
			},
		],
	},
];

const currentRoleActions = [
	{
		title: "Advocate for safety practices",
		description:
			"Push for red teaming, adversarial testing, and safety evaluation in your team's development process. You do not need permission to raise these concerns.",
	},
	{
		title: "Build evaluation infrastructure",
		description:
			"Implement automated safety testing in your CI/CD pipeline. Test for prompt injection, jailbreaks, and unexpected outputs before deployment.",
	},
	{
		title: "Document failure modes",
		description:
			"When your AI systems fail, document how and why. Contribute to your organization's understanding of what can go wrong.",
	},
	{
		title: "Learn interpretability basics",
		description:
			"Start understanding what your models are actually doing. Even basic probing and attention analysis can reveal unexpected behaviors.",
	},
	{
		title: "Question deployment decisions",
		description:
			"Ask whether your system has been adequately tested for the context it's deployed in. Ask who is affected if it fails. Make safety a legitimate engineering concern.",
	},
	{
		title: "Contribute to open-source safety tools",
		description:
			"Projects like Inspect, DeepTeam, and FuzzyAI need engineering contributions. Even documentation and testing help.",
	},
];

export default function EngineersPath() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1">
				{/* Hero */}
				<section className="px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
					<p className="text-sm font-medium text-accent-2 uppercase tracking-wide mb-4">
						Learning Path
					</p>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						AI Safety for Engineers
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-4 leading-relaxed">
						A structured path for software engineers who build, deploy, or maintain ML systems. From
						safety fundamentals to practical deployment, with concrete steps you can take in your
						current role.
					</p>
					<div className="flex flex-wrap gap-4 justify-center mt-6">
						<div className="px-4 py-2 rounded-full bg-surface-raised border border-border text-sm">
							<span className="font-medium">4 stages</span>
							<span className="text-muted"> &middot; 16 resources</span>
						</div>
						<div className="px-4 py-2 rounded-full bg-surface-raised border border-border text-sm">
							<span className="font-medium">~3 weeks</span>
							<span className="text-muted"> at 30 min/day</span>
						</div>
						<div className="px-4 py-2 rounded-full bg-surface-raised border border-border text-sm">
							<span className="font-medium">Prereqs:</span>
							<span className="text-muted"> ML/software background</span>
						</div>
					</div>
				</section>

				{/* Stages */}
				<section className="px-6 py-8 max-w-5xl mx-auto">
					<div className="space-y-16">
						{stages.map((stage) => (
							<div key={stage.number}>
								<div className="flex items-start gap-4 mb-6">
									<div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
										{stage.number}
									</div>
									<div>
										<h2 className="text-xl font-bold text-ink">{stage.title}</h2>
										<p className="text-sm text-accent-2 font-medium">{stage.timeEstimate}</p>
									</div>
								</div>
								<p className="text-muted mb-6 ml-16 max-w-3xl">{stage.description}</p>
								<div className="ml-16 grid md:grid-cols-2 gap-4">
									{stage.resources.map((resource) => (
										<Link
											key={resource.title}
											href={resource.href}
											className="p-4 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors block"
										>
											<div className="flex items-center gap-2 mb-2">
												<h3 className="font-semibold text-sm text-ink">{resource.title}</h3>
												<span className="text-xs px-2 py-0.5 rounded-full bg-highlight text-muted">
													{resource.type}
												</span>
											</div>
											<p className="text-sm text-muted leading-relaxed">{resource.description}</p>
										</Link>
									))}
								</div>
							</div>
						))}
					</div>
				</section>

				{/* What You Can Do In Your Current Role */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold text-center mb-4">
							What you can do in your current role
						</h2>
						<p className="text-center text-muted mb-12 max-w-2xl mx-auto">
							You do not need to change jobs to contribute to AI safety. Here are concrete actions
							you can take as an engineer today.
						</p>
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{currentRoleActions.map((action) => (
								<div key={action.title} className="p-6 rounded-lg border border-border bg-surface">
									<h3 className="font-semibold mb-2">{action.title}</h3>
									<p className="text-sm text-muted leading-relaxed">{action.description}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* CTA */}
				<section className="px-6 py-16 max-w-4xl mx-auto text-center">
					<h2 className="text-2xl font-semibold mb-4">Ready to go deeper?</h2>
					<p className="text-muted mb-8 max-w-2xl mx-auto">
						Explore the research path for academic depth, or jump straight to action pathways if you
						want to contribute beyond your day job.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/learn/paths/researchers"
							className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
						>
							Researcher path
						</Link>
						<Link
							href="/act"
							className="inline-flex items-center justify-center px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
						>
							Action pathways
						</Link>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
