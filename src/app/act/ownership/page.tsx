import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Worker-Owned AI — Action Pathway | AISafety.org",
	description:
		"Cooperatives, ESOPs, and platform cooperativism as alternatives to corporate AI. How to start or join a worker-owned enterprise, with real examples and concrete steps.",
};

export default function OwnershipPage() {
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
						/ Worker-Owned AI
					</p>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						Worker-Owned AI
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
						Cooperatives represent a $3 trillion global economy. The question is whether democratic
						ownership can move fast enough to matter in the AI era. The answer depends on what we
						build now.
					</p>
				</section>

				{/* The Case */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<article className="prose">
						<h2 className="text-2xl font-semibold mb-4">The Case for Worker Ownership</h2>
						<p>
							As AI concentrates wealth and power among a shrinking number of corporations,
							democratic ownership models offer an alternative path&mdash;one where the people who
							build, maintain, and are affected by AI systems share in their governance and economic
							returns. This is not just idealism. Worker cooperatives have repeatedly proven they
							can operate at scale.
						</p>
						<p>
							The right frame is not &ldquo;can cooperatives replace Big Tech?&rdquo; The right
							frame is: can they create viable alternatives that serve communities Big Tech ignores,
							provide dignified work in sectors being automated, and demonstrate that technology can
							be governed democratically?
						</p>
						<p>
							The evidence says yes&mdash;but only with the right infrastructure, funding, and
							expectations.
						</p>
					</article>
				</section>

				{/* Models That Work */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-8">Models That Work</h2>

						{/* Mondragon */}
						<div className="mb-8 p-6 rounded-lg border border-border bg-surface">
							<h3 className="text-xl font-semibold mb-2">Mondragon Corporation</h3>
							<p className="text-sm text-accent-2 mb-3">Basque Country, Spain</p>
							<p className="text-muted text-sm mb-3">
								The world&apos;s largest cooperative and the seventh-largest business in Spain. Over
								100 independent cooperatives, 70,000+ employees in 65 countries, combined assets of
								18.6 billion euros. Mondragon has its own university, 15 research centers, and
								approximately 2,000 researchers.
							</p>
							<p className="text-muted text-sm">
								<strong>Key lesson:</strong> Cooperatives can operate at massive scale. But
								Mondragon took decades to build, had strong cultural and political support, and
								created its own bank to solve the capital access problem.
							</p>
						</div>

						{/* Evergreen */}
						<div className="mb-8 p-6 rounded-lg border border-border bg-surface">
							<h3 className="text-xl font-semibold mb-2">Evergreen Cooperatives</h3>
							<p className="text-sm text-accent-2 mb-3">Cleveland, Ohio</p>
							<p className="text-muted text-sm mb-3">
								Connects worker-owned cooperatives to anchor institutions&mdash;hospitals,
								universities, and large employers&mdash;that commit to purchasing from the
								cooperatives. The Cleveland Clinic, Case Western, and University Hospitals spend
								over $3 billion annually on goods and services. Evergreen redirects that spending to
								create living-wage jobs for people previously locked out of the job market.
							</p>
							<p className="text-muted text-sm">
								<strong>Key lesson:</strong> Community wealth building works when cooperatives
								connect to institutional demand, not just consumer markets.
							</p>
						</div>

						{/* Tech Coops */}
						<div className="p-6 rounded-lg border border-border bg-surface">
							<h3 className="text-xl font-semibold mb-2">35+ Tech Worker Cooperatives</h3>
							<p className="text-sm text-accent-2 mb-3">Worldwide</p>
							<p className="text-muted text-sm mb-3">
								A growing ecosystem of technology worker cooperatives exists worldwide.
								Argentina&apos;s SoberaniaX federation includes around 35 tech cooperatives with
								500-600 workers. Igalia (Spain) has over 100 members contributing to open-source
								browsers and web standards. CoLab Cooperative (US) builds technology for social
								impact. Nilenso is India&apos;s first employee-owned technology cooperative.
							</p>
						</div>
					</div>
				</section>

				{/* Platform Cooperativism */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-6">
						Platform Cooperativism: Alternatives to the Gig Economy
					</h2>
					<p className="text-muted mb-8 max-w-3xl">
						Platform cooperativism combines the heritage of cooperatives with 21st-century
						technology: worker ownership of digital platforms, decent pay, transparency, and
						democratic governance.
					</p>
					<div className="grid md:grid-cols-3 gap-6">
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-2">Stocksy United</h3>
							<p className="text-muted text-sm mb-2">
								Stock photography cooperative. Over 1,800 artists from 80+ countries. Photographers
								receive 50-75% of license purchases&mdash;among the highest in the industry. Has
								paid over $50 million in royalties.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-2">Up &amp; Go</h3>
							<p className="text-muted text-sm mb-2">
								Worker-owned cleaning platform in NYC. 100% worker-owned, majority immigrant and
								women-owned. Workers earn $4-5 more per hour than area competitors. Only 5 cents of
								every dollar goes to the platform.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-2">The Drivers Cooperative</h3>
							<p className="text-muted text-sm mb-2">
								Ride-hailing cooperative in NYC. Over 10,000 signed-up drivers. Drivers earn 8-10%
								more per trip than on Uber/Lyft. Secured contracts with the MTA.
							</p>
						</div>
					</div>
				</section>

				{/* ESOPs */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-6">ESOPs: Employee Ownership at Scale</h2>
						<p className="text-muted mb-6 max-w-3xl">
							Employee Stock Ownership Plans represent the most widespread form of employee
							ownership in the US, offering a legally established path that does not require full
							cooperative governance.
						</p>
						<div className="grid md:grid-cols-4 gap-4">
							<div className="p-4 rounded-lg border border-border bg-surface text-center">
								<p className="text-2xl font-bold text-accent">6,400+</p>
								<p className="text-muted text-sm">ESOP companies</p>
							</div>
							<div className="p-4 rounded-lg border border-border bg-surface text-center">
								<p className="text-2xl font-bold text-accent">15.1M</p>
								<p className="text-muted text-sm">participants</p>
							</div>
							<div className="p-4 rounded-lg border border-border bg-surface text-center">
								<p className="text-2xl font-bold text-accent">$2.1T</p>
								<p className="text-muted text-sm">in assets</p>
							</div>
							<div className="p-4 rounded-lg border border-border bg-surface text-center">
								<p className="text-2xl font-bold text-accent">3x</p>
								<p className="text-muted text-sm">retirement assets vs. non-ESOP</p>
							</div>
						</div>
						<p className="text-muted text-sm mt-4">
							ESOP companies grow 2.3-2.4% faster than expected, and wages are 5-12% higher.
							Companies combining ownership with participative management grow 8-11% faster.
						</p>
					</div>
				</section>

				{/* How to Start or Join */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-6">How to Start or Join a Cooperative</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div>
							<h3 className="font-semibold mb-4">Join an Existing Cooperative</h3>
							<ul className="space-y-3 text-muted text-sm">
								<li className="flex gap-2">
									<span className="text-accent-2 font-bold flex-shrink-0">+</span>
									<span>
										<strong>US Federation of Worker Cooperatives</strong> directory: nearly 450
										member organizations representing 15,000+ workers
									</span>
								</li>
								<li className="flex gap-2">
									<span className="text-accent-2 font-bold flex-shrink-0">+</span>
									<span>
										<strong>Platform Cooperativism Consortium</strong> directory at platform.coop
										for global platform co-ops
									</span>
								</li>
								<li className="flex gap-2">
									<span className="text-accent-2 font-bold flex-shrink-0">+</span>
									<span>
										<strong>Tech Coops Directory</strong> at tech-coops.xyz for international
										technology cooperatives
									</span>
								</li>
								<li className="flex gap-2">
									<span className="text-accent-2 font-bold flex-shrink-0">+</span>
									<span>
										<strong>Democracy at Work Institute</strong> at institute.coop for education and
										resources
									</span>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold mb-4">Start a New Cooperative</h3>
							<ol className="space-y-3 text-muted text-sm">
								<li className="flex gap-2">
									<span className="text-accent font-bold flex-shrink-0">1.</span>
									Educate yourself&mdash;read Democracy at Work Institute&apos;s guides, attend
									Co-op Clinic sessions
								</li>
								<li className="flex gap-2">
									<span className="text-accent font-bold flex-shrink-0">2.</span>
									Assemble 3-7 committed co-founders with a shared mission
								</li>
								<li className="flex gap-2">
									<span className="text-accent font-bold flex-shrink-0">3.</span>
									Choose your legal structure (cooperative corporation or LLC)
								</li>
								<li className="flex gap-2">
									<span className="text-accent font-bold flex-shrink-0">4.</span>
									Get legal help from the Sustainable Economies Law Center
								</li>
								<li className="flex gap-2">
									<span className="text-accent font-bold flex-shrink-0">5.</span>
									Write bylaws defining membership, voting, and profit distribution
								</li>
								<li className="flex gap-2">
									<span className="text-accent font-bold flex-shrink-0">6.</span>
									Secure funding from non-extractive sources like Seed Commons ($101M+ invested, 99%
									to low-income workers)
								</li>
							</ol>
						</div>
					</div>
				</section>

				{/* Funding */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-6">Funding Sources for Cooperatives</h2>
						<div className="grid md:grid-cols-3 gap-6">
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Seed Commons</h3>
								<p className="text-muted text-sm">
									National network of non-extractive loan funds. Over 422 loans, $101M+ invested. No
									repayments greater than profits, no personal guarantees, no credit scores.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Start.coop</h3>
								<p className="text-muted text-sm">
									Cooperative equity group and accelerator. Provides funding, mentorship, and
									resources specifically for cooperative enterprises.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Shared Capital Cooperative</h3>
								<p className="text-muted text-sm">
									A national CDFI loan fund that is itself a cooperative. Provides financing to
									cooperatives across sectors.
								</p>
							</div>
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
								<p className="font-medium">Shop at cooperatives (ongoing)</p>
								<p className="text-muted text-sm mt-1">
									Every dollar you spend at a cooperative supports democratic ownership. Find local
									co-ops through the NCBA CLUSA directory.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">2</span>
							<div>
								<p className="font-medium">Join or start a cooperative (weeks to months)</p>
								<p className="text-muted text-sm mt-1">
									Search the US Federation of Worker Cooperatives directory for co-ops in your area.
									If there is none, attend a Co-op Clinic session to learn how to start one.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">3</span>
							<div>
								<p className="font-medium">Use platform cooperatives (today)</p>
								<p className="text-muted text-sm mt-1">
									Choose cooperative alternatives when they exist: Stocksy for stock photos, The
									Drivers Cooperative if you are in NYC, Resonate for music streaming.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">4</span>
							<div>
								<p className="font-medium">Talk to your employer about ownership (when ready)</p>
								<p className="text-muted text-sm mt-1">
									If your business owner is approaching retirement, conversion to worker ownership
									is increasingly common. Project Equity specializes in this transition.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">5</span>
							<div>
								<p className="font-medium">Support cooperative-friendly policy (10 minutes)</p>
								<p className="text-muted text-sm mt-1">
									Contact your representatives about cooperative-friendly legislation, tax benefits,
									and procurement preferences that level the playing field.
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
								href="/act/organize"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Collective Action</h3>
								<p className="text-muted text-sm">
									Cooperatives and unions share the same goal: worker power.
								</p>
								<span className="text-accent text-sm font-medium mt-2 inline-block">
									Learn more &rarr;
								</span>
							</Link>
							<Link
								href="/act/local"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Local Action</h3>
								<p className="text-muted text-sm">Community wealth building starts locally.</p>
								<span className="text-accent text-sm font-medium mt-2 inline-block">
									Learn more &rarr;
								</span>
							</Link>
							<Link
								href="/act/open-source"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Open &amp; Democratic AI</h3>
								<p className="text-muted text-sm">
									Open-source AI is a form of community ownership through shared access.
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
