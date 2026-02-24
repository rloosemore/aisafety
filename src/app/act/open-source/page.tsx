import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Open & Democratic AI — Action Pathway | AISafety.org",
	description:
		"Community-controlled AI alternatives, open-source projects, platform cooperativism, and democratic governance of AI systems. Build and support AI that serves everyone.",
};

export default function OpenSourcePage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1">
				{/* Hero */}
				<section className="px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
					<p className="text-sm font-medium text-accent-2 mb-4">
						<Link href="/act" className="hover:underline">
							Action Pathways
						</Link>{" "}
						/ Open &amp; Democratic AI
					</p>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						Open &amp; Democratic AI
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
						Nearly every stage of AI development is controlled by a handful of companies.
						Open-source and community-governed alternatives offer a different path&mdash;one where
						AI serves the public, not just shareholders.
					</p>
				</section>

				{/* Why It Matters */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<article className="prose">
						<h2 className="text-2xl font-semibold mb-4">
							Why Open-Source AI Matters for Democratic Control
						</h2>
						<p>
							When AI systems are proprietary, only the companies that build them can inspect,
							audit, or modify them. When something goes wrong&mdash;when an AI system
							discriminates, surveils, or makes harmful decisions&mdash;the public cannot
							investigate. Open source changes that equation.
						</p>
						<p>
							Open-source AI enables independent scrutiny by researchers, journalists, and civil
							society. It allows communities to adapt AI tools to their own needs rather than
							accepting one-size-fits-all systems from corporate providers. And it creates a floor
							of publicly available AI capability that prevents complete corporate monopolization of
							the technology.
						</p>
						<p>
							But openness is not a cure-all. Open-source models can also be misused&mdash;for
							generating misinformation, creating deepfakes, or building surveillance tools. The
							honest debate is about how to maximize the democratic benefits of openness while
							managing real risks. This page presents that debate fairly.
						</p>
					</article>
				</section>

				{/* The Open vs Closed Debate */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-6">The Open vs. Closed Debate</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-3 text-accent-2">Case for Open Source</h3>
								<ul className="space-y-2 text-muted text-sm">
									<li className="flex gap-2">
										<span className="text-accent-2 font-bold flex-shrink-0">+</span>
										Enables independent safety research and auditing
									</li>
									<li className="flex gap-2">
										<span className="text-accent-2 font-bold flex-shrink-0">+</span>
										Prevents monopoly control over foundational technology
									</li>
									<li className="flex gap-2">
										<span className="text-accent-2 font-bold flex-shrink-0">+</span>
										Allows communities to customize tools for their needs
									</li>
									<li className="flex gap-2">
										<span className="text-accent-2 font-bold flex-shrink-0">+</span>
										Reduces dependence on a few corporate providers
									</li>
									<li className="flex gap-2">
										<span className="text-accent-2 font-bold flex-shrink-0">+</span>
										Accelerates safety research by enabling broad participation
									</li>
								</ul>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-3 text-warm">Case for Caution</h3>
								<ul className="space-y-2 text-muted text-sm">
									<li className="flex gap-2">
										<span className="text-warm font-bold flex-shrink-0">+</span>
										Open models can be fine-tuned to remove safety guardrails
									</li>
									<li className="flex gap-2">
										<span className="text-warm font-bold flex-shrink-0">+</span>
										Enables creation of deepfakes, misinformation, and surveillance tools
									</li>
									<li className="flex gap-2">
										<span className="text-warm font-bold flex-shrink-0">+</span>
										Once released, models cannot be recalled or patched
									</li>
									<li className="flex gap-2">
										<span className="text-warm font-bold flex-shrink-0">+</span>
										Most powerful capabilities may require restrictions at frontier levels
									</li>
									<li className="flex gap-2">
										<span className="text-warm font-bold flex-shrink-0">+</span>
										&ldquo;Open source&rdquo; labels can obscure actual corporate control
									</li>
								</ul>
							</div>
						</div>
						<p className="text-muted text-sm mt-6 max-w-3xl">
							The strongest position is not dogmatic open or closed, but calibrated openness:
							open-source infrastructure, tools, and smaller models broadly; graduated restrictions
							on the most capable frontier systems; and genuine democratic governance over the
							decisions about what to release and how.
						</p>
					</div>
				</section>

				{/* Community Projects */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-6">Community-Developed AI Alternatives</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-2">EleutherAI</h3>
							<p className="text-muted text-sm">
								A grassroots research collective that began on a Discord server in 2020. Produces
								open-source AI models, maintains training datasets, conducts interpretability
								research, and shapes global AI safety policy. Demonstrates that volunteer
								communities can produce competitive AI while prioritizing safety.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-2">Hugging Face</h3>
							<p className="text-muted text-sm">
								A platform hosting over 250,000 model cards with 5 million+ users across 100,000+
								organizations. While a for-profit company, Hugging Face is built on open-source
								principles and serves as a commons for sharing AI models, datasets, and tools.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-2">BigScience / BLOOM</h3>
							<p className="text-muted text-sm">
								Over 1,000 volunteer researchers from 60 countries created BLOOM, a
								176-billion-parameter multilingual model, coordinated by Hugging Face with French
								government funding. Proof that international volunteer collaboration can build
								frontier AI.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-2">The AI Alliance</h3>
							<p className="text-muted text-sm">
								An international coalition led by IBM and Meta supporting open, safe, responsible AI
								development. Brings together industry, academia, and civil society around shared
								standards for open AI.
							</p>
						</div>
					</div>
				</section>

				{/* Public AI Infrastructure */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-6">Public AI Infrastructure</h2>
						<p className="text-muted mb-6 max-w-3xl">
							A growing movement argues that governments should build publicly owned AI
							infrastructure&mdash;just as they built public roads, libraries, and utilities.
						</p>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="p-5 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Government Initiatives Underway</h3>
								<ul className="space-y-2 text-muted text-sm">
									<li className="flex gap-2">
										<span className="text-accent font-bold flex-shrink-0">+</span>
										US National AI Research Resource (NAIRR) pilot: compute access for researchers
									</li>
									<li className="flex gap-2">
										<span className="text-accent font-bold flex-shrink-0">+</span>
										European AI Factories: EU investment in shared AI compute
									</li>
									<li className="flex gap-2">
										<span className="text-accent font-bold flex-shrink-0">+</span>
										Canada&apos;s Sovereign AI Compute Strategy
									</li>
									<li className="flex gap-2">
										<span className="text-accent font-bold flex-shrink-0">+</span>
										India&apos;s Open Cloud Compute initiative
									</li>
								</ul>
							</div>
							<div className="p-5 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">What Public AI Could Look Like</h3>
								<ul className="space-y-2 text-muted text-sm">
									<li className="flex gap-2">
										<span className="text-accent font-bold flex-shrink-0">+</span>
										Public data centers for researchers and small businesses
									</li>
									<li className="flex gap-2">
										<span className="text-accent font-bold flex-shrink-0">+</span>
										Open training datasets as a shared resource
									</li>
									<li className="flex gap-2">
										<span className="text-accent font-bold flex-shrink-0">+</span>
										Truly open-source foundation models trained with democratic values
									</li>
									<li className="flex gap-2">
										<span className="text-accent font-bold flex-shrink-0">+</span>
										Municipal AI: local governments deploying on-premise, community-accountable AI
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Platform Cooperativism */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-4">Platform Cooperativism in AI</h2>
					<article className="prose mb-6">
						<p>
							Platform cooperativism applies democratic ownership to digital platforms. In the AI
							context, this means data cooperatives where individuals collectively govern how their
							data is used, cooperative cloud computing infrastructure, and worker-owned AI service
							companies.
						</p>
						<p>
							The Platform Cooperativism Consortium at The New School hosted the first global
							conference on cooperatives and artificial intelligence in 2025, timed to the UN
							International Year of Cooperatives. The Harvard Ash Center has published research
							identifying cooperative structures at every layer of the AI stack as promising paths
							forward.
						</p>
					</article>
					<div className="grid md:grid-cols-3 gap-6">
						<div className="p-5 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-2">Data Cooperatives</h3>
							<p className="text-muted text-sm">
								Member-owned organizations where individuals contribute data, control its usage
								collectively, and share benefits. MIDATA (Switzerland) and Salus Coop (Spain) manage
								health data cooperatively.
							</p>
						</div>
						<div className="p-5 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-2">Community Technology</h3>
							<p className="text-muted text-sm">
								Detroit Community Technology Project trains neighborhood leaders to build and
								maintain community-governed internet infrastructure. Co-op Cloud and Commons Cloud
								are building cooperative cloud computing.
							</p>
						</div>
						<div className="p-5 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-2">AI Commons Initiative</h3>
							<p className="text-muted text-sm">
								Emerging from the Global Coalition for Tech Justice (250 member organizations across
								55 countries), advocating for AI as a public good. Argues that AI in education and
								healthcare must prioritize public infrastructure.
							</p>
						</div>
					</div>
				</section>

				{/* Democratic Governance */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-6">
							Organizations Working on Democratic AI Governance
						</h2>
						<div className="grid md:grid-cols-2 gap-4">
							{[
								{
									name: "DemocracyNext",
									focus: "Citizen-led AI governance through deliberative democracy",
								},
								{
									name: "People Powered",
									focus: "Global hub for citizens' assemblies and participatory governance",
								},
								{
									name: "Open Future Foundation",
									focus: "Digital commons and open governance frameworks",
								},
								{
									name: "Creative Commons",
									focus: "Open licensing and shared resources for AI training data",
								},
								{
									name: "Open Source Initiative",
									focus:
										"Defining standards for open-source AI through multi-stakeholder processes",
								},
								{
									name: "AlgorithmWatch",
									focus: "Transparency and accountability for algorithmic systems",
								},
							].map((org) => (
								<div key={org.name} className="p-4 rounded-lg border border-border bg-surface">
									<p className="font-medium text-sm">{org.name}</p>
									<p className="text-muted text-xs mt-1">{org.focus}</p>
								</div>
							))}
						</div>
						<p className="text-muted text-sm mt-6">
							<strong>What is still missing:</strong> Most &ldquo;democratic AI&rdquo; efforts focus
							on access (open-source models, public compute) rather than governance (who decides
							what gets built, for whom). True community ownership requires shared decision-making
							about AI development priorities, not just shared infrastructure.
						</p>
					</div>
				</section>

				{/* What You Can Do Right Now */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-6">What You Can Do Right Now</h2>
					<ol className="space-y-4">
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">1</span>
							<div>
								<p className="font-medium">Use and support open-source AI tools (today)</p>
								<p className="text-muted text-sm mt-1">
									Choose open-source alternatives when possible. Run local AI models on your own
									hardware. Use Hugging Face&apos;s open models. Every user of open-source AI
									strengthens the ecosystem.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">2</span>
							<div>
								<p className="font-medium">
									Contribute to open-source AI safety projects (if technical)
								</p>
								<p className="text-muted text-sm mt-1">
									EleutherAI, Hugging Face, and many other projects welcome contributors. You do not
									need to be a machine learning expert&mdash;documentation, testing, and community
									management are all valuable.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">3</span>
							<div>
								<p className="font-medium">Advocate for public AI infrastructure (10 minutes)</p>
								<p className="text-muted text-sm mt-1">
									Contact your representatives about funding the National AI Research Resource and
									public AI compute. Advocate for your city to adopt open-source AI tools rather
									than proprietary corporate ones.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">4</span>
							<div>
								<p className="font-medium">Push for algorithm registries in your city</p>
								<p className="text-muted text-sm mt-1">
									Amsterdam, Helsinki, and Barcelona have pioneered transparent registries of
									government algorithms. An open-source standard exists for any city to adopt. Ask
									your local government to use it.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">5</span>
							<div>
								<p className="font-medium">Join or form a data cooperative</p>
								<p className="text-muted text-sm mt-1">
									Data cooperatives give you collective bargaining power over how your data is used.
									Health data cooperatives like MIDATA show this model works. Explore forming one in
									your sector.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">6</span>
							<div>
								<p className="font-medium">Demand transparency from AI companies you use</p>
								<p className="text-muted text-sm mt-1">
									Ask companies what AI models power their products, what data they were trained on,
									and what audits they have undergone. Consumer demand for transparency creates
									market pressure.
								</p>
							</div>
						</li>
					</ol>
				</section>

				{/* Cross Links */}
				<section className="px-6 py-16 bg-surface-raised border-t border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-6">Related Pathways</h2>
						<div className="grid md:grid-cols-3 gap-6">
							<Link
								href="/act/ownership"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Worker-Owned AI</h3>
								<p className="text-muted text-sm">
									Democratic ownership of AI companies and infrastructure.
								</p>
								<span className="text-accent text-sm font-medium mt-2 inline-block">
									Learn more &rarr;
								</span>
							</Link>
							<Link
								href="/act/organize"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Collective Action</h3>
								<p className="text-muted text-sm">
									Tech workers organizing for responsible AI development.
								</p>
								<span className="text-accent text-sm font-medium mt-2 inline-block">
									Learn more &rarr;
								</span>
							</Link>
							<Link
								href="/act/policy"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Policy &amp; Legislation</h3>
								<p className="text-muted text-sm">
									Push for public funding and democratic governance of AI.
								</p>
								<span className="text-accent text-sm font-medium mt-2 inline-block">
									Learn more &rarr;
								</span>
							</Link>
						</div>
						<div className="mt-8 text-center">
							<Link
								href="/act"
								className="inline-flex items-center justify-center px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
							>
								&larr; All Action Pathways
							</Link>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
