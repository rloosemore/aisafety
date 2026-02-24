import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "AI Safety for Policymakers | AISafety.org",
	description:
		"A structured learning path for policy professionals navigating AI. From capabilities and limitations to governance frameworks and available policy levers.",
};

const stages = [
	{
		number: 1,
		title: "AI capabilities and limitations",
		timeEstimate: "3-4 days",
		description:
			"Before crafting policy, understand what AI can and cannot do today. Many policy discussions are distorted by either hype (AI can do everything) or dismissal (AI is just autocomplete). The reality is more nuanced and more important.",
		resources: [
			{
				title: "AI & Society (our crisis overview)",
				href: "/crisis",
				type: "Internal",
				description:
					"Evidence-based overview of AI's actual impact on jobs, wealth, and society. Start here to ground your understanding in documented data rather than industry claims.",
			},
			{
				title: "AI Safety Field Map",
				href: "/map",
				type: "Internal",
				description:
					"Overview of the 10 AI safety subfields. As a policymaker, focus on governance, ethics, evaluation, and sociotechnical safety — but understand why the technical subfields matter for regulation.",
			},
			{
				title: "AI Safety Glossary",
				href: "/learn/glossary",
				type: "Internal",
				description:
					"Essential vocabulary for AI policy discussions. Focus on: AGI, frontier model, foundation model, fine-tuning, high-risk AI, conformity assessment, regulatory sandbox.",
			},
			{
				title: "The AI Index Report (Stanford HAI)",
				href: "#",
				type: "External report",
				description:
					"The most comprehensive annual data compilation on AI progress. Use the policy and governance chapters for regulatory context. Data-driven rather than opinion-driven.",
			},
		],
	},
	{
		number: 2,
		title: "Risk landscape",
		timeEstimate: "4-5 days",
		description:
			"Understand the full spectrum of AI risks, from bias and discrimination in deployed systems today to potential catastrophic risks from future systems. Good policy must address both without pretending either does not exist.",
		resources: [
			{
				title: "Economic Evidence Base",
				href: "/research/evidence",
				type: "Internal",
				description:
					"Detailed evidence on AI's economic impact: job displacement, wealth concentration, wage effects, and global disparities. The economic dimension is the most politically salient risk for most constituents.",
			},
			{
				title: "Active Debates: Near-term vs. Long-term Priorities",
				href: "/research/debates#current-vs-future",
				type: "Internal",
				description:
					"The field disagrees on whether to prioritize current harms or future risks. As a policymaker, you need to address both — a 2025 PNAS study found the public cares about both without trade-off.",
			},
			{
				title: "Active Debates: Regulation Approaches",
				href: "/research/debates#regulation",
				type: "Internal",
				description:
					"Four major regulatory approaches: comprehensive mandatory (EU), innovation-first voluntary (US federal), state-level, and self-regulation. Understand the arguments for each.",
			},
			{
				title: "International AI Safety Report (2025/2026)",
				href: "#",
				type: "External report",
				description:
					"The multi-country consensus assessment of AI risks. Led by Yoshua Bengio with 100+ experts. Found no scientific consensus on many key risk questions — itself an important finding for policy.",
			},
		],
	},
	{
		number: 3,
		title: "Governance frameworks",
		timeEstimate: "5-7 days",
		description:
			"Survey the existing and proposed governance frameworks worldwide. The regulatory landscape is evolving rapidly, with fundamental disagreements about approach between major jurisdictions.",
		resources: [
			{
				title: "EU AI Act Overview",
				href: "#",
				type: "External resource",
				description:
					"The world's first comprehensive AI regulation. Tiered-risk classification with mandatory requirements for high-risk systems. Entered into force August 2024, full enforcement by 2026-2027. The benchmark for comprehensive regulation.",
			},
			{
				title: "US Federal AI Policy (Executive Orders)",
				href: "#",
				type: "External resource",
				description:
					"The December 2025 Executive Order emphasizes minimal regulatory burden and federal preemption of state rules. Contrast this with the previous administration's approach to understand the policy landscape.",
			},
			{
				title: "State-Level AI Legislation Tracker",
				href: "#",
				type: "External resource",
				description:
					"California SB 53, Colorado's AI Act, and others represent significant state-level governance. These create the regulatory fragmentation that federal preemption attempts to address.",
			},
			{
				title: "Organization Profiles: Government Bodies",
				href: "/research/orgs#government",
				type: "Internal",
				description:
					"Directory of government AI safety bodies: UK AISI, US CAISI, EU AI Office, Japan AISI, and the International Network. Understand the institutional landscape for AI governance.",
			},
		],
	},
	{
		number: 4,
		title: "Policy levers",
		timeEstimate: "Ongoing",
		description:
			"Identify the specific policy tools available for addressing AI risks. Regulation is one lever, but standards, procurement, investment, trade policy, tax policy, and labor policy are equally important.",
		resources: [
			{
				title: "Action Pathways: Policy",
				href: "/act/policy",
				type: "Internal",
				description:
					"Concrete policy actions for AI governance: legislative approaches, regulatory design, international coordination, and constituency engagement. Connects research to action.",
			},
			{
				title: "Center for Security and Emerging Technology (CSET)",
				href: "#",
				type: "External resource",
				description:
					"Georgetown's CSET publishes data-driven analysis of AI governance questions. Their work on whether existing federal authorities suffice or new powers are needed is particularly relevant.",
			},
			{
				title: "PAI Six AI Governance Priorities for 2026",
				href: "#",
				type: "External report",
				description:
					"The Partnership on AI's multi-stakeholder priority framework for AI governance. Represents a consensus view across industry, civil society, and academia on what policy should address.",
			},
			{
				title: "Economic Policy Institute: AI and Labor Markets",
				href: "#",
				type: "External report",
				description:
					"The EPI's analysis argues the core issue is unbalanced labor market power, not technology per se. Policy levers include bargaining rights, AI taxes, UBI, and worker ownership mandates.",
			},
		],
	},
];

const policyLevers = [
	{
		title: "Regulation",
		items: [
			"Risk-based classification (EU model)",
			"Mandatory safety evaluations before deployment",
			"Transparency and documentation requirements",
			"Third-party auditing and conformity assessment",
		],
	},
	{
		title: "Standards and procurement",
		items: [
			"Government procurement requirements for AI safety",
			"NIST standards for AI risk management",
			"Certification frameworks for high-risk applications",
			"Interoperability and portability requirements",
		],
	},
	{
		title: "Economic policy",
		items: [
			"AI automation taxes to fund transition programs",
			"Universal basic income pilots and expansion",
			"Worker retraining and reskilling investment",
			"Worker ownership and cooperative incentives",
		],
	},
	{
		title: "International coordination",
		items: [
			"AI Safety Institute network cooperation",
			"Trade agreements incorporating AI safety standards",
			"Compute governance and export controls",
			"Multilateral risk assessment frameworks",
		],
	},
];

export default function PolicyPath() {
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
						AI Safety for Policymakers
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-4 leading-relaxed">
						A structured path for policy professionals, legislators, and governance researchers
						navigating AI. From understanding capabilities and risks to identifying available policy
						levers.
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
							<span className="font-medium">No technical prereqs</span>
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

				{/* Policy Levers Overview */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold text-center mb-4">Available policy levers</h2>
						<p className="text-center text-muted mb-12 max-w-2xl mx-auto">
							Regulation is important but not the only tool. Effective AI governance requires using
							multiple levers in coordination.
						</p>
						<div className="grid sm:grid-cols-2 gap-6">
							{policyLevers.map((lever) => (
								<div key={lever.title} className="p-6 rounded-lg border border-border bg-surface">
									<h3 className="font-semibold mb-3">{lever.title}</h3>
									<ul className="space-y-2">
										{lever.items.map((item) => (
											<li key={item} className="text-sm text-muted leading-relaxed flex gap-2">
												<span className="text-accent flex-shrink-0">&bull;</span>
												{item}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Key Tensions */}
				<section className="px-6 py-16 max-w-4xl mx-auto">
					<h2 className="text-2xl font-semibold text-center mb-4">Key tensions to navigate</h2>
					<p className="text-center text-muted mb-10 max-w-2xl mx-auto">
						Effective AI policy requires navigating genuine tensions, not pretending they do not
						exist.
					</p>
					<div className="space-y-4">
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-2">Safety vs. innovation</h3>
							<p className="text-sm text-muted leading-relaxed">
								Stringent safety requirements can slow development and shift activity to less
								regulated jurisdictions. But insufficient safety requirements can lead to real harm
								and erode public trust. Finding the right balance depends on the specific
								application and risk level.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-2">Federal coherence vs. state experimentation</h3>
							<p className="text-sm text-muted leading-relaxed">
								Regulatory fragmentation creates compliance burdens and uncertainty. But federal
								preemption can also eliminate laboratories of policy innovation. California&apos;s
								SB 53 and Colorado&apos;s AI Act emerged precisely because of federal inaction.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-2">Current harms vs. future risks</h3>
							<p className="text-sm text-muted leading-relaxed">
								Policy attention is finite. Addressing algorithmic bias, surveillance, and labor
								displacement today requires different tools than preparing for potential
								loss-of-control scenarios. Research suggests the public cares about both without
								trade-off, but policy bandwidth may not accommodate both equally.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-2">
								Technical complexity vs. democratic accountability
							</h3>
							<p className="text-sm text-muted leading-relaxed">
								AI safety involves deeply technical questions that most legislators and citizens
								cannot evaluate directly. But delegating all decisions to technical experts
								undermines democratic oversight. Fairness definitions alone are too technically
								complex for effective legislation, yet the decisions they encode are fundamentally
								political.
							</p>
						</div>
					</div>
				</section>

				{/* CTA */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-2xl font-semibold mb-4">Ready to act?</h2>
						<p className="text-muted mb-8 max-w-2xl mx-auto">
							Connect research to action. Our action pathways include specific policy
							recommendations, advocacy resources, and community organizing tools.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/act/policy"
								className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
							>
								Policy action pathways
							</Link>
							<Link
								href="/research/debates"
								className="inline-flex items-center justify-center px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
							>
								Explore the debates
							</Link>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
