import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "AI Safety Research Path | AISafety.org",
	description:
		"A structured path for entering AI safety research. Field orientation, technical depth, open problems, and paths to involvement including programs, fellowships, and labs.",
};

const stages = [
	{
		number: 1,
		title: "Field orientation",
		timeEstimate: "1 week",
		description:
			"Get the lay of the land. Understand what AI safety research actually involves, the major subfields, the key questions, and the institutional landscape. This stage is about breadth before depth.",
		resources: [
			{
				title: "AI Safety Field Map",
				href: "/map",
				type: "Internal",
				description:
					"Our comprehensive map of 10 AI safety subfields: alignment, interpretability, robustness, evaluation, red teaming, governance, ethics, existential risk, forecasting, and sociotechnical safety.",
			},
			{
				title: "Organization Profiles",
				href: "/research/orgs",
				type: "Internal",
				description:
					"44+ organizations working on AI safety. Understand the research landscape: who does what, where the funding comes from, and where the hiring happens.",
			},
			{
				title: "Active Debates in AI Safety",
				href: "/research/debates",
				type: "Internal",
				description:
					"Seven major disagreements that define the field. Understanding these debates is essential context for any research direction you choose.",
			},
			{
				title: "AI Safety Glossary",
				href: "/learn/glossary",
				type: "Internal",
				description:
					"40+ terms defined in plain language. The field uses specialized vocabulary extensively. Bookmark this early.",
			},
		],
	},
	{
		number: 2,
		title: "Technical depth",
		timeEstimate: "2-4 weeks",
		description:
			"Go deep on the core technical subfields. Focus on alignment, interpretability, and evaluation — these are where most active research happens and where the field needs the most contributions.",
		resources: [
			{
				title: "Concept Explainers",
				href: "/learn/concepts",
				type: "Internal",
				description:
					"20+ key concepts explained at multiple difficulty levels. Start with alignment, RLHF, interpretability, and red teaming. Then move to inner/outer alignment, mesa-optimization, and scalable oversight.",
			},
			{
				title: "ARC's Research Agenda (Eliciting Latent Knowledge)",
				href: "#",
				type: "External reading",
				description:
					"Paul Christiano's ELK agenda is one of the most influential open problems in alignment. Understanding it teaches you how the field frames research questions.",
			},
			{
				title: "Anthropic's Interpretability Research",
				href: "#",
				type: "External papers",
				description:
					"Anthropic has published extensively on sparse autoencoders, circuit analysis, and mechanistic interpretability. These papers represent the current frontier of interpretability work.",
			},
			{
				title: "The Alignment Trilemma and Related Results",
				href: "#",
				type: "External paper",
				description:
					"A key theoretical result: no single method can simultaneously guarantee strong optimization, perfect value capture, and robust generalization. Understand why this constrains alignment approaches.",
			},
		],
	},
	{
		number: 3,
		title: "Open problems",
		timeEstimate: "2-3 weeks",
		description:
			"Identify where the field needs work. These are not just theoretical gaps — they are concrete research questions where progress would meaningfully advance AI safety.",
		resources: [
			{
				title: "Scalable Oversight",
				href: "#",
				type: "Research area",
				description:
					"How do we ensure AI systems remain aligned when they surpass human ability to evaluate? Debate, recursive reward modeling, and iterated amplification are active approaches. Fundamental progress is needed.",
			},
			{
				title: "Evaluation-Awareness and Deceptive Alignment",
				href: "#",
				type: "Research area",
				description:
					"Models may detect when they are being evaluated and alter behavior accordingly. Apollo Research and others have demonstrated scheming behaviors. This undermines the entire evaluation paradigm.",
			},
			{
				title: "Mechanistic Interpretability Scaling",
				href: "#",
				type: "Research area",
				description:
					"Current interpretability methods work on small models but face fundamental scaling challenges. Sparse autoencoders capture only a fraction of network information. Bridging this gap is a major open problem.",
			},
			{
				title: "Consensus Open Problems Paper (2025)",
				href: "#",
				type: "External paper",
				description:
					"Landmark paper by 29 researchers across 18 organizations establishing consensus open problems in interpretability. Commissioned by Schmidt Sciences. Essential reading for identifying tractable research directions.",
			},
		],
	},
	{
		number: 4,
		title: "Getting involved",
		timeEstimate: "Ongoing",
		description:
			"Move from learning to contributing. The field has multiple entry points depending on your background, location, and career stage. Programs, fellowships, and direct applications are all viable paths.",
		resources: [
			{
				title: "MATS (ML Alignment Theory Scholars)",
				href: "#",
				type: "External program",
				description:
					"A structured research program matching aspiring researchers with established mentors. One of the most well-regarded entry points into AI safety research.",
			},
			{
				title: "80,000 Hours AI Safety Career Guide",
				href: "#",
				type: "External reading",
				description:
					"Comprehensive career guide surveying 38 top organizations on hiring needs. Covers which skills are in demand, which roles are hardest to fill, and how to position yourself.",
			},
			{
				title: "Open Philanthropy RFP ($40M)",
				href: "#",
				type: "External funding",
				description:
					"Open Philanthropy's $40M request for proposals across 21 AI safety research areas. Even if you are not ready to apply, the RFP document maps what the largest funder considers highest-priority.",
			},
			{
				title: "EleutherAI and Open-Source Research",
				href: "#",
				type: "External community",
				description:
					"The grassroots open-source AI safety research collective. Good for building a track record, collaborating with others, and contributing to shared infrastructure.",
			},
		],
	},
];

const subfields = [
	{
		name: "Alignment",
		description: "RLHF, Constitutional AI, scalable oversight, DPO",
		status: "Very active, many open positions",
	},
	{
		name: "Interpretability",
		description: "Mechanistic interpretability, sparse autoencoders, circuit analysis",
		status: "Growing rapidly, designated 2026 breakthrough",
	},
	{
		name: "Robustness",
		description: "Adversarial robustness, jailbreak defense, agent security",
		status: "Offense-defense imbalance, needs more work",
	},
	{
		name: "Evaluation",
		description: "Capability evals, evaluation-awareness detection, benchmarks",
		status: "Foundational but facing paradigm challenges",
	},
	{
		name: "Governance",
		description: "AI regulation, standards, institutional design",
		status: "Rapidly evolving, high policy impact",
	},
	{
		name: "Existential Risk",
		description: "Loss of control, accumulative risk, weapons capabilities",
		status: "Conceptual and empirical work needed",
	},
	{
		name: "Forecasting",
		description: "Timeline prediction, compute analysis, scenario planning",
		status: "Data-driven, growing methodological rigor",
	},
	{
		name: "Sociotechnical",
		description: "Organizational safety, systemic risk, human-AI interaction",
		status: "Under-resourced relative to importance",
	},
];

export default function ResearchersPath() {
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
						Entering AI Safety Research
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-4 leading-relaxed">
						A structured path for those entering AI safety research. From field orientation to
						identifying open problems to getting your first research position. The field has roughly
						600 FTEs working on technical safety — it needs many more.
					</p>
					<div className="flex flex-wrap gap-4 justify-center mt-6">
						<div className="px-4 py-2 rounded-full bg-surface-raised border border-border text-sm">
							<span className="font-medium">4 stages</span>
							<span className="text-muted"> &middot; 16 resources</span>
						</div>
						<div className="px-4 py-2 rounded-full bg-surface-raised border border-border text-sm">
							<span className="font-medium">~6-8 weeks</span>
							<span className="text-muted"> at 30 min/day</span>
						</div>
						<div className="px-4 py-2 rounded-full bg-surface-raised border border-border text-sm">
							<span className="font-medium">Prereqs:</span>
							<span className="text-muted"> ML/math/CS background helpful</span>
						</div>
					</div>
				</section>

				{/* Subfield Overview */}
				<section className="px-6 pb-12 max-w-5xl mx-auto">
					<h2 className="text-xl font-semibold mb-6">AI safety research subfields</h2>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
						{subfields.map((sf) => (
							<div key={sf.name} className="p-4 rounded-lg border border-border bg-surface-raised">
								<h3 className="font-semibold text-sm mb-1">{sf.name}</h3>
								<p className="text-xs text-muted mb-2">{sf.description}</p>
								<p className="text-xs text-accent-2 font-medium">{sf.status}</p>
							</div>
						))}
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

				{/* Important Context */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-2xl font-semibold text-center mb-4">
							Important context for entering the field
						</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">The field is small but growing</h3>
								<p className="text-sm text-muted leading-relaxed">
									There are roughly 600 FTEs in technical AI safety and 500 in non-technical safety
									across about 70 organizations. This is tiny relative to the scale of the
									challenge. More researchers are needed across every subfield.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Diverse backgrounds are valuable</h3>
								<p className="text-sm text-muted leading-relaxed">
									While ML expertise is valuable, the field also needs people with backgrounds in
									economics, political science, philosophy, security, law, and organizational
									behavior. Sociotechnical safety is under-resourced relative to its importance.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Funding is available but concentrated</h3>
								<p className="text-sm text-muted leading-relaxed">
									Open Philanthropy's $40M RFP covers 21 research areas. However, funding
									concentration in a few sources has implications for research independence. Be
									aware of the incentive landscape.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">The rhetoric-practice gap matters</h3>
								<p className="text-sm text-muted leading-relaxed">
									All major labs received poor safety grades from the Future of Life Institute.
									Doing research at a lab does not mean the lab's practices reflect the research.
									Understand the institutional incentives.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* CTA */}
				<section className="px-6 py-16 max-w-4xl mx-auto text-center">
					<h2 className="text-2xl font-semibold mb-4">Other paths that may interest you</h2>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/learn/paths/engineers"
							className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
						>
							Engineer path
						</Link>
						<Link
							href="/learn/paths/policy"
							className="inline-flex items-center justify-center px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
						>
							Policy path
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
