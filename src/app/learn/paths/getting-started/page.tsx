import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Getting Started with AI Safety | AISafety.org",
	description:
		"A structured reading path for complete newcomers to AI safety. Four stages from understanding the crisis to finding your role. About 2 weeks at 30 minutes per day.",
};

const stages = [
	{
		number: 1,
		title: "What's actually happening",
		timeEstimate: "3-4 days",
		description:
			"Before diving into AI safety concepts, ground yourself in what AI is actually doing to the world right now. Start with the economic and social impact, then broaden to the technical landscape.",
		resources: [
			{
				title: "AI & Society (our crisis overview)",
				href: "/crisis",
				type: "Internal",
				description:
					"Evidence-based overview of AI's impact on jobs, wealth concentration, and society. Start here for the facts without panic or denial.",
			},
			{
				title: "AI & Employment (the evidence)",
				href: "/crisis/jobs",
				type: "Internal",
				description:
					"Detailed look at documented job displacement, who is affected, and the honest counterarguments. Includes the AI washing caveat.",
			},
			{
				title: "Situational Awareness by Leopold Aschenbrenner",
				href: "#",
				type: "External reading",
				description:
					"A comprehensive look at where AI development is headed and why it matters. Long but foundational. Read critically — it represents one perspective.",
			},
			{
				title: "The AI Index Report (Stanford HAI)",
				href: "#",
				type: "External report",
				description:
					"Annual data-driven overview of AI trends. Dense but authoritative. Skim the executive summary for a broad picture of the state of AI.",
			},
		],
	},
	{
		number: 2,
		title: "Understanding the landscape",
		timeEstimate: "3-4 days",
		description:
			"Now orient yourself within the AI safety field. Who is working on what? What are the major organizations and subfields? Where does technical safety meet governance and economic policy?",
		resources: [
			{
				title: "AI Safety Field Map",
				href: "/map",
				type: "Internal",
				description:
					"Our orientation map of the AI safety field: 10 subfields, key concepts, and how they connect to each other.",
			},
			{
				title: "Organization Profiles",
				href: "/research/orgs",
				type: "Internal",
				description:
					"Directory of 44+ organizations working on AI safety. Understand the ecosystem of research labs, companies, policy groups, and advocacy organizations.",
			},
			{
				title: "AI Safety Glossary",
				href: "/learn/glossary",
				type: "Internal",
				description:
					"Bookmark this. You will encounter unfamiliar terms constantly. Our glossary covers 40+ terms in plain language.",
			},
			{
				title: "80,000 Hours AI Safety Problem Profile",
				href: "#",
				type: "External reading",
				description:
					"A thorough analysis of why AI safety matters and where the field stands. Written for people considering career paths but useful for anyone seeking depth.",
			},
		],
	},
	{
		number: 3,
		title: "The core debates",
		timeEstimate: "3-4 days",
		description:
			"The AI safety community disagrees about fundamental questions. Understanding these disagreements is essential — they shape research priorities, governance, and public discourse.",
		resources: [
			{
				title: "Active Debates in AI Safety",
				href: "/research/debates",
				type: "Internal",
				description:
					"Seven major disagreements: timelines, alignment difficulty, open vs. closed source, regulation, P(doom), interpretability, and near-term vs. long-term priorities.",
			},
			{
				title: "Concept Explainers",
				href: "/learn/concepts",
				type: "Internal",
				description:
					"Key concepts explained clearly. Focus on alignment, interpretability, and existential risk to understand the core debates.",
			},
			{
				title: "The Alignment Problem by Brian Christian",
				href: "#",
				type: "External book",
				description:
					"An accessible book-length treatment of the alignment challenge. Well-researched narrative that covers history, key figures, and open questions.",
			},
			{
				title: "International AI Safety Report (2025/2026)",
				href: "#",
				type: "External report",
				description:
					"The largest global collaboration on AI safety to date, led by Yoshua Bengio with 100+ experts from 30+ countries. Dense but represents near-consensus where it exists.",
			},
		],
	},
	{
		number: 4,
		title: "Finding your role",
		timeEstimate: "2-3 days",
		description:
			"AI safety needs diverse contributions — not just researchers. Technologists, policymakers, organizers, educators, and engaged citizens all play critical roles. Find where your skills and concerns fit.",
		resources: [
			{
				title: "Take Action",
				href: "/act",
				type: "Internal",
				description:
					"Concrete action pathways: UBI campaigns, worker organizing, policy pressure, open-source contributions, community resilience, and more. Start with what matters to you.",
			},
			{
				title: "For Engineers Path",
				href: "/learn/paths/engineers",
				type: "Internal",
				description:
					"If you build software or ML systems, this path covers what you can do in your current role and how to move toward safety work.",
			},
			{
				title: "For Policymakers Path",
				href: "/learn/paths/policy",
				type: "Internal",
				description:
					"If you work in government, policy, or advocacy, this path covers the governance landscape and available policy levers.",
			},
			{
				title: "For Researchers Path",
				href: "/learn/paths/researchers",
				type: "Internal",
				description:
					"If you want to enter AI safety research, this path covers field orientation, open problems, programs, and fellowships.",
			},
		],
	},
];

export default function GettingStartedPath() {
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
						Getting Started with AI Safety
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-4 leading-relaxed">
						A structured path from &ldquo;I keep hearing about AI and I&apos;m concerned&rdquo; to
						understanding the landscape, the debates, and where you fit in.
					</p>
					<div className="flex flex-wrap gap-4 justify-center mt-6">
						<div className="px-4 py-2 rounded-full bg-surface-raised border border-border text-sm">
							<span className="font-medium">4 stages</span>
							<span className="text-muted"> &middot; 16 resources</span>
						</div>
						<div className="px-4 py-2 rounded-full bg-surface-raised border border-border text-sm">
							<span className="font-medium">~2 weeks</span>
							<span className="text-muted"> at 30 min/day</span>
						</div>
						<div className="px-4 py-2 rounded-full bg-surface-raised border border-border text-sm">
							<span className="font-medium">No prerequisites</span>
						</div>
					</div>
				</section>

				{/* What you'll get */}
				<section className="px-6 pb-12 max-w-4xl mx-auto">
					<div className="p-6 rounded-lg border border-border bg-surface-raised">
						<h2 className="font-semibold mb-3">What you will get from this path</h2>
						<ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted">
							<li className="flex gap-2">
								<span className="text-accent">&#10003;</span>
								<span>Clear understanding of AI&apos;s actual economic and social impact</span>
							</li>
							<li className="flex gap-2">
								<span className="text-accent">&#10003;</span>
								<span>Orientation to the AI safety field: who is working on what</span>
							</li>
							<li className="flex gap-2">
								<span className="text-accent">&#10003;</span>
								<span>Familiarity with the 7 major debates and all sides of each</span>
							</li>
							<li className="flex gap-2">
								<span className="text-accent">&#10003;</span>
								<span>Ability to identify where your skills and concerns fit</span>
							</li>
							<li className="flex gap-2">
								<span className="text-accent">&#10003;</span>
								<span>Vocabulary to discuss AI safety with confidence</span>
							</li>
							<li className="flex gap-2">
								<span className="text-accent">&#10003;</span>
								<span>Concrete next steps for action, whatever your background</span>
							</li>
						</ul>
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

				{/* After this path */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-2xl font-semibold mb-4">After completing this path</h2>
						<p className="text-muted mb-10 max-w-2xl mx-auto">
							You will have a solid foundation for engaging with AI safety at whatever depth suits
							your goals. Here are natural next steps.
						</p>
						<div className="grid sm:grid-cols-3 gap-6">
							<Link
								href="/learn/paths/engineers"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Go deeper (technical)</h3>
								<p className="text-sm text-muted">
									Explore engineering or research paths for hands-on technical depth.
								</p>
							</Link>
							<Link
								href="/act"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Take action</h3>
								<p className="text-sm text-muted">
									Move from understanding to concrete action pathways you can start today.
								</p>
							</Link>
							<Link
								href="/community"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Join others</h3>
								<p className="text-sm text-muted">
									Connect with others who are concerned and taking action.
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
