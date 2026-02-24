import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Local Action — Action Pathway | AISafety.org",
	description:
		"Build community resilience against AI displacement. Mutual aid networks, timebanks, community land trusts, local currencies, and grassroots organizing you can start now.",
};

export default function LocalPage() {
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
						/ Local Action
					</p>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						Local Action
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
						National policy is slow. International coordination is fragile. But your community can
						act now. Every movement in history started with a few people in one place deciding to do
						something.
					</p>
				</section>

				{/* Mutual Aid */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-4">Mutual Aid Networks</h2>
						<p className="text-muted mb-6 max-w-3xl">
							Mutual aid is people helping each other as equals. Not charity, not government
							services&mdash;horizontal, reciprocal support built on the understanding that everyone
							has something to give and something they need.
						</p>

						<div className="p-6 rounded-lg border border-border bg-surface mb-6">
							<h3 className="font-semibold mb-2">Lessons from COVID-19</h3>
							<p className="text-muted text-sm mb-3">
								The pandemic triggered the largest mutual aid mobilization in modern American
								history. Bed-Stuy Strong in Brooklyn supported 28,000 people through a
								volunteer-driven grocery delivery program, raising approximately $1.2 million in
								grassroots donations. They went from ad-hoc Slack messages to processing 40 requests
								daily within a month.
							</p>
							<p className="text-muted text-sm">
								<strong>Key lesson:</strong> Communities that had existing networks before crisis
								hit were far better able to respond. Building mutual aid now&mdash;before AI
								displacement peaks&mdash;is an investment in resilience.
							</p>
						</div>

						<h3 className="font-semibold mb-3">Starting a Mutual Aid Network</h3>
						<ol className="space-y-2 text-muted text-sm">
							<li className="flex gap-2">
								<span className="text-accent font-bold flex-shrink-0">1.</span>
								Start with 5-20 people you already know and trust. Check mutualaidhub.org for
								existing groups in your area.
							</li>
							<li className="flex gap-2">
								<span className="text-accent font-bold flex-shrink-0">2.</span>
								Understand community needs through informal conversations. What gaps exist in food
								access, transportation, childcare, tech support?
							</li>
							<li className="flex gap-2">
								<span className="text-accent font-bold flex-shrink-0">3.</span>
								Identify community strengths. Every person has something to offer&mdash;make those
								offers visible.
							</li>
							<li className="flex gap-2">
								<span className="text-accent font-bold flex-shrink-0">4.</span>
								Set up communication. Start simple: a group text or Signal group. Add structure as
								needed.
							</li>
							<li className="flex gap-2">
								<span className="text-accent font-bold flex-shrink-0">5.</span>
								Start helping with concrete, immediate services. Iterate quickly&mdash;what works,
								do more of.
							</li>
							<li className="flex gap-2">
								<span className="text-accent font-bold flex-shrink-0">6.</span>
								Connect with other mutual aid groups and link immediate relief with longer-term
								organizing.
							</li>
						</ol>
					</div>
				</section>

				{/* Timebanks */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-4">Timebanks and Skills Sharing</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div>
							<p className="text-muted text-sm mb-4">
								Timebanks operate on a radical principle: one hour of your time equals one hour of
								anyone else&apos;s time, regardless of the skill. A lawyer&apos;s legal advice is
								worth the same as an hour of gardening help. This makes skills-sharing accessible to
								everyone.
							</p>
							<p className="text-muted text-sm mb-4">
								For AI-displaced workers, timebanks are particularly powerful. They provide a way to
								contribute and receive help without money, value skills the market may temporarily
								undervalue, and build the community connections that create resilience.
							</p>
							<p className="text-muted text-sm">
								<strong>hOurWorld</strong> (hourworld.org) is the largest international timebank
								platform, providing free software for communities to set up their own exchanges.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-3">Community Skills Audit</h3>
							<p className="text-muted text-sm mb-3">
								Before reskilling, understand what your community already has. Ask:
							</p>
							<ul className="space-y-2 text-muted text-sm">
								<li className="flex gap-2">
									<span className="text-accent-2 font-bold flex-shrink-0">+</span>
									What do people in our community know how to do?
								</li>
								<li className="flex gap-2">
									<span className="text-accent-2 font-bold flex-shrink-0">+</span>
									What services do we currently import from outside?
								</li>
								<li className="flex gap-2">
									<span className="text-accent-2 font-bold flex-shrink-0">+</span>
									What needs are going unmet?
								</li>
								<li className="flex gap-2">
									<span className="text-accent-2 font-bold flex-shrink-0">+</span>
									Which skills are unlikely to be automated in the next 10-20 years?
								</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Community Land Trusts and Local Currencies */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-6">
							Community Land Trusts &amp; Local Economies
						</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Community Land Trusts</h3>
								<p className="text-muted text-sm">
									Nonprofit organizations that hold land in trust for community benefit. They keep
									housing affordable, prevent speculative displacement, and create stable platforms
									for local economic development. People who cannot lose their homes can take risks,
									retrain, and rebuild. Grounded Solutions Network provides resources and technical
									assistance.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Local Currencies</h3>
								<p className="text-muted text-sm">
									BerkShares in Massachusetts has issued over 10 million units accepted by 300
									businesses. For every dollar spent at a local business, 68 cents stays in the
									community versus 43 cents for non-local businesses. Local currencies create
									economic circuits insulated from global disruption and incentivize buying from
									local businesses rather than automated platforms.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Transition Towns</h3>
								<p className="text-muted text-sm">
									Over 1,400 communities in 50+ countries building local resilience. Totnes, England
									(the original Transition Town) has launched a local currency, community energy
									initiatives, local food systems, and a local economic development center.
									Communities that have already built local self-sufficiency are far more resilient
									to technological disruption.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Buy Local Campaigns</h3>
								<p className="text-muted text-sm">
									Communities with active buy-local campaigns saw independent business revenues rise
									by 7.2% compared to 2.6% without campaigns. As AI enables ever-greater economic
									centralization, buy-local becomes a form of economic self-defense. The American
									Independent Business Alliance provides campaign resources.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Local Policy */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-4">Local Policy Advocacy</h2>
					<article className="prose mb-8">
						<p>
							Your city council, school board, and county government make decisions about AI every
							day&mdash;whether they realize it or not. Are city services using AI? Are schools
							deploying AI-powered tools? Are police using predictive policing algorithms? You can
							influence these decisions directly.
						</p>
					</article>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-2">Demand an Algorithm Register</h3>
							<p className="text-muted text-sm">
								Amsterdam and Helsinki pioneered transparent registries of all government
								algorithms. An open-source standard (developed by 7 European cities) exists for any
								city to adopt. Push your local government to disclose every AI system it uses.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-2">Community AI Conversations</h3>
							<p className="text-muted text-sm">
								Start with stories, not statistics. Ask people how AI has affected them. Map local
								impacts together. Identify shared concerns. Explore options. End every conversation
								with specific next steps: who will do what, by when.
							</p>
						</div>
					</div>
				</section>

				{/* Building AI Literacy */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-4">Building AI Literacy in Your Community</h2>
						<p className="text-muted mb-6 max-w-3xl">
							People cannot fight what they do not understand. Community AI literacy is not about
							teaching everyone to code&mdash;it is about helping people understand how AI affects
							their lives and what they can do about it.
						</p>
						<div className="grid md:grid-cols-3 gap-6">
							<div className="p-5 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Host Workshops</h3>
								<p className="text-muted text-sm">
									Libraries, community centers, and churches are natural venues. Focus on practical
									impacts: how AI affects hiring, credit, housing, and government services in your
									area.
								</p>
							</div>
							<div className="p-5 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Digital Stewards Model</h3>
								<p className="text-muted text-sm">
									Detroit Community Technology Project trains neighborhood leaders to manage
									community technology infrastructure. The model can be adapted for AI literacy:
									train trusted community members to be AI resource people.
								</p>
							</div>
							<div className="p-5 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">School Board Engagement</h3>
								<p className="text-muted text-sm">
									AI tools are being deployed in schools with minimal oversight. Attend school board
									meetings. Ask what AI systems are being used, what data they collect, and who made
									the decision to adopt them.
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
								<p className="font-medium">
									Check for existing mutual aid in your area (5 minutes)
								</p>
								<p className="text-muted text-sm mt-1">
									Search mutualaidhub.org. If groups exist, reach out. If they don&apos;t, you now
									know there is a gap you could fill.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">2</span>
							<div>
								<p className="font-medium">Talk to five neighbors this month</p>
								<p className="text-muted text-sm mt-1">
									Ask how technology changes are affecting them. Are they worried about their jobs?
									Do they know what AI tools their employer uses? Every movement starts with
									conversation.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">3</span>
							<div>
								<p className="font-medium">Attend a local government meeting (one evening)</p>
								<p className="text-muted text-sm mt-1">
									City council, school board, or county commission. Ask during public comment: what
									AI systems does the government use, and is there public oversight?
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">4</span>
							<div>
								<p className="font-medium">Buy local this week (ongoing)</p>
								<p className="text-muted text-sm mt-1">
									Every dollar spent at a local business keeps 68 cents in your community. It is the
									simplest form of economic self-defense against AI-driven centralization.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">5</span>
							<div>
								<p className="font-medium">Explore starting a timebank (weeks)</p>
								<p className="text-muted text-sm mt-1">
									hOurWorld provides free software. Start with a small group exchanging skills.
									Timebanks build exactly the kind of reciprocal relationships that create community
									resilience.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">6</span>
							<div>
								<p className="font-medium">
									Organize a community AI conversation (a few weeks of planning)
								</p>
								<p className="text-muted text-sm mt-1">
									Start with stories, map local impacts together, and end with commitments to
									specific next steps. A library or community center is a natural venue.
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
									Local organizing feeds into broader collective power.
								</p>
								<span className="text-accent text-sm font-medium mt-2 inline-block">
									Learn more &rarr;
								</span>
							</Link>
							<Link
								href="/act/ownership"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Worker-Owned AI</h3>
								<p className="text-muted text-sm">
									Community wealth building starts with local cooperatives.
								</p>
								<span className="text-accent text-sm font-medium mt-2 inline-block">
									Learn more &rarr;
								</span>
							</Link>
							<Link
								href="/community"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Community</h3>
								<p className="text-muted text-sm">Connect with others doing this work.</p>
								<span className="text-accent text-sm font-medium mt-2 inline-block">
									Join the community &rarr;
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
