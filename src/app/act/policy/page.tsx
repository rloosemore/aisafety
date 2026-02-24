import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Policy & Legislation — Action Pathway | AISafety.org",
	description:
		"The AI policy landscape is being shaped right now. EU AI Act, US state laws, and where citizens can intervene. Contact representatives, support bills, and participate in public comment periods.",
};

export default function PolicyPage() {
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
						/ Policy &amp; Legislation
					</p>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						Policy &amp; Legislation
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
						Voluntary industry commitments are not working. The Future of Life Institute gave all
						major AI labs poor safety grades. The shape of AI regulation for the next decade is
						being determined right now&mdash;in legislatures, agencies, and public comment periods
						you can participate in.
					</p>
				</section>

				{/* EU AI Act */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-6">The EU AI Act: Global Standard-Setter</h2>
						<p className="text-muted mb-6 max-w-3xl">
							The most comprehensive AI legislation in the world. Its enforcement timeline through
							2027 will shape corporate behavior globally, even for companies not based in Europe.
						</p>

						<div className="space-y-4 mb-8">
							<div className="p-4 rounded-lg border border-border bg-surface">
								<div className="flex items-start gap-3">
									<span className="text-accent font-bold text-sm flex-shrink-0 mt-0.5">
										FEB 2025
									</span>
									<div>
										<p className="font-medium text-sm">Prohibited practices ban in effect</p>
										<p className="text-muted text-xs mt-1">
											Bans emotion recognition in workplaces, social scoring, manipulative AI,
											untargeted facial recognition scraping.
										</p>
									</div>
								</div>
							</div>
							<div className="p-4 rounded-lg border border-border bg-surface">
								<div className="flex items-start gap-3">
									<span className="text-accent font-bold text-sm flex-shrink-0 mt-0.5">
										AUG 2025
									</span>
									<div>
										<p className="font-medium text-sm">
											General-purpose AI obligations; penalties active
										</p>
										<p className="text-muted text-xs mt-1">
											Fines up to 35 million EUR or 7% of global annual turnover. EU AI Office
											operational.
										</p>
									</div>
								</div>
							</div>
							<div className="p-4 rounded-lg border border-border bg-surface">
								<div className="flex items-start gap-3">
									<span className="text-accent font-bold text-sm flex-shrink-0 mt-0.5">
										AUG 2026
									</span>
									<div>
										<p className="font-medium text-sm">High-risk AI rules apply</p>
										<p className="text-muted text-xs mt-1">
											Full enforcement of high-risk AI system requirements including for employment,
											credit, and education decisions.
										</p>
									</div>
								</div>
							</div>
							<div className="p-4 rounded-lg border border-border bg-surface">
								<div className="flex items-start gap-3">
									<span className="text-accent font-bold text-sm flex-shrink-0 mt-0.5">
										AUG 2027
									</span>
									<div>
										<p className="font-medium text-sm">Full scope applies to all risk categories</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* US State Action */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-4">US State Laws: The Real Frontline</h2>
					<p className="text-muted mb-8 max-w-3xl">
						With federal regulation stalled or actively hostile to oversight, states are the primary
						architects of US AI regulation. In 2025, all 50 states introduced AI-related
						legislation, with over 1,200 bills introduced and 145 enacted.
					</p>

					<div className="grid md:grid-cols-2 gap-6">
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-1">Colorado AI Act</h3>
							<p className="text-sm text-accent-2 mb-2">Effective June 30, 2026</p>
							<p className="text-muted text-sm">
								First comprehensive state AI law addressing algorithmic discrimination. Requires
								impact assessments, risk management programs, worker notification when AI is used in
								employment decisions, and the right to appeal AI-driven decisions.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-1">Illinois HB 3773</h3>
							<p className="text-sm text-accent-2 mb-2">Effective January 1, 2026</p>
							<p className="text-muted text-sm">
								Requires all Illinois employers to notify employees and applicants when AI is used
								in employment decisions. Applies to any employer with at least one employee in
								Illinois.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-1">California SB 53 + CCPA Regulations</h3>
							<p className="text-sm text-accent-2 mb-2">
								SB 53 effective Jan 2026; CCPA ADMT Jan 2027
							</p>
							<p className="text-muted text-sm">
								SB 53 requires large frontier developers to publish transparency reports and report
								safety incidents. CCPA regulations give citizens the right to opt out of automated
								decision-making for significant decisions.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-1">NYC Local Law 144</h3>
							<p className="text-sm text-accent-2 mb-2">In force since 2023</p>
							<p className="text-muted text-sm">
								Requires annual independent bias audits of automated hiring tools. Employers must
								give candidates 10 days notice before using automated tools. Penalties of
								$500-$1,500 per day for violations.
							</p>
						</div>
					</div>
				</section>

				{/* Federal Landscape */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-4">The Federal Landscape</h2>
						<article className="prose">
							<p>
								The US lacks a single comprehensive federal AI law. The current administration has
								taken a pro-innovation, deregulatory approach, rescinding Biden-era safety measures
								and signaling potential preemption of stronger state protections. A December 2025
								Executive Order directed the federal government to review state laws deemed
								&ldquo;inconsistent&rdquo; with national AI policy.
							</p>
							<p>
								This is the critical dynamic: the federal government may try to eliminate the very
								state laws that currently provide the strongest protections. This makes state-level
								engagement more important than ever, and makes pushing back against federal
								preemption a priority.
							</p>
							<p>
								There are also bills worth supporting at the federal level. The Algorithmic
								Accountability Act of 2025 would require transparency and accountability for AI in
								housing, employment, credit, and education. The CREATE AI Act would establish a
								National AI Research Resource for broader access to computational resources.
							</p>
						</article>
					</div>
				</section>

				{/* How to Engage */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-6">How to Engage With AI Policy</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div>
							<h3 className="font-semibold mb-4">Contact Your Representatives</h3>
							<ul className="space-y-3 text-muted text-sm">
								<li className="flex gap-2">
									<span className="text-accent font-bold flex-shrink-0">+</span>
									<span>
										<strong>Federal:</strong> Find your members of Congress at congress.gov. Call or
										write about specific AI bills.
									</span>
								</li>
								<li className="flex gap-2">
									<span className="text-accent font-bold flex-shrink-0">+</span>
									<span>
										<strong>State:</strong> Find your state legislators at openstates.org.
										State-level engagement matters most right now.
									</span>
								</li>
								<li className="flex gap-2">
									<span className="text-accent font-bold flex-shrink-0">+</span>
									<span>
										<strong>Key messages:</strong> Support algorithmic accountability. Demand human
										review rights. Push back on federal preemption of state protections.
									</span>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold mb-4">Public Comment Periods</h3>
							<p className="text-muted text-sm mb-3">
								One of the most direct ways to influence AI regulation. When agencies propose new
								rules, you can submit written comments during 30-60 day windows.
							</p>
							<ul className="space-y-2 text-muted text-sm">
								<li className="flex gap-2">
									<span className="text-accent font-bold flex-shrink-0">+</span>
									<span>
										<strong>US Federal:</strong> Search &ldquo;artificial intelligence&rdquo; on
										regulations.gov
									</span>
								</li>
								<li className="flex gap-2">
									<span className="text-accent font-bold flex-shrink-0">+</span>
									<span>
										<strong>EU:</strong> Use the Have Your Say portal at ec.europa.eu
									</span>
								</li>
								<li className="flex gap-2">
									<span className="text-accent font-bold flex-shrink-0">+</span>
									<span>
										<strong>Tips:</strong> Reference specific provisions. Describe real-world
										impacts. Personal stories are powerful. Submit early.
									</span>
								</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Key Organizations */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-6">Organizations Pushing AI Policy</h2>
						<div className="grid md:grid-cols-2 gap-4">
							{[
								{
									name: "Algorithmic Justice League",
									focus: "AI bias, fairness, and policy advocacy",
								},
								{
									name: "AI Now Institute",
									focus: "Social implications, corporate accountability research",
								},
								{
									name: "Electronic Frontier Foundation",
									focus: "Digital civil liberties and AI policy",
								},
								{
									name: "Future of Life Institute",
									focus: "AI safety advocacy and the AI Safety Index",
								},
								{
									name: "AlgorithmWatch",
									focus: "Algorithmic accountability and EU policy",
								},
								{
									name: "Americans for Responsible Innovation",
									focus: "Legislative engagement and coalition building",
								},
								{
									name: "Encode Justice",
									focus: "Youth-led AI ethics advocacy; helped pass CA SB 53",
								},
								{
									name: "Center for AI Safety",
									focus: "Technical safety research and public advocacy",
								},
							].map((org) => (
								<div key={org.name} className="p-4 rounded-lg border border-border bg-surface">
									<p className="font-medium text-sm">{org.name}</p>
									<p className="text-muted text-xs mt-1">{org.focus}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* What You Can Do Right Now */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-6">What You Can Do Right Now</h2>
					<ol className="space-y-4">
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">1</span>
							<div>
								<p className="font-medium">Contact your state legislators (10 minutes)</p>
								<p className="text-muted text-sm mt-1">
									Find them at openstates.org. Ask about AI legislation in your state. State laws
									are where the real protections are being built right now.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">2</span>
							<div>
								<p className="font-medium">Push back against federal preemption (10 minutes)</p>
								<p className="text-muted text-sm mt-1">
									Contact your federal representatives. Tell them you support a federal floor, not a
									federal ceiling, for AI protections. States should be able to go further.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">3</span>
							<div>
								<p className="font-medium">Submit a public comment (30 minutes)</p>
								<p className="text-muted text-sm mt-1">
									Search regulations.gov for open AI rulemaking. Describe how AI has affected you,
									your community, or your industry. Personal stories carry significant weight.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">4</span>
							<div>
								<p className="font-medium">
									Support the Algorithmic Accountability Act (5 minutes)
								</p>
								<p className="text-muted text-sm mt-1">
									Contact your representative and ask them to co-sponsor this comprehensive
									transparency and accountability bill for AI in housing, employment, credit, and
									education.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">5</span>
							<div>
								<p className="font-medium">Track your state&apos;s legislation (ongoing)</p>
								<p className="text-muted text-sm mt-1">
									The NCSL AI Legislation Database and IAPP US State AI Governance Tracker are
									updated regularly. Know what is happening in your state.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">6</span>
							<div>
								<p className="font-medium">
									Demand your city create an algorithm register (when ready)
								</p>
								<p className="text-muted text-sm mt-1">
									Amsterdam, Helsinki, and Barcelona have pioneered transparent algorithm
									registries. An open-source standard exists for any city to adopt. Push your local
									government.
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
								href="/act/legal"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Legal Challenges</h3>
								<p className="text-muted text-sm">
									Legal tools that hold AI companies accountable.
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
									Organized workers drive the legislation that protects everyone.
								</p>
								<span className="text-accent text-sm font-medium mt-2 inline-block">
									Learn more &rarr;
								</span>
							</Link>
							<Link
								href="/act/ubi"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Universal Basic Income</h3>
								<p className="text-muted text-sm">
									The policy campaigns building an economic floor.
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
