import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Concentration of Power: Who Benefits from AI | AISafety.org",
	description:
		"AI is concentrating wealth at unprecedented speed. 50+ new billionaires in 2025, $3.5 trillion in billionaire wealth gains, and the gap between AI winners and losers is widening.",
};

export default function CrisisWealth() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1">
				{/* Hero */}
				<section className="px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
					<Link
						href="/crisis"
						className="text-sm text-accent hover:text-accent-hover transition-colors mb-4 inline-block"
					>
						&larr; Back to What&apos;s Happening
					</Link>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						Concentration of Power
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
						The gains from AI are flowing overwhelmingly to a small number of companies and
						individuals. This is not a side effect — it is the central economic story of AI.
					</p>
				</section>

				{/* Key Numbers */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
							<div>
								<p className="text-3xl font-bold text-accent">$18.3T</p>
								<p className="text-sm text-muted mt-1">global billionaire wealth in 2025</p>
							</div>
							<div>
								<p className="text-3xl font-bold text-accent">81%</p>
								<p className="text-sm text-muted mt-1">increase in billionaire wealth since 2020</p>
							</div>
							<div>
								<p className="text-3xl font-bold text-accent">50+</p>
								<p className="text-sm text-muted mt-1">new AI billionaires minted in 2025</p>
							</div>
							<div>
								<p className="text-3xl font-bold text-accent">285:1</p>
								<p className="text-sm text-muted mt-1">
									average CEO-to-worker pay ratio at S&amp;P 500 companies
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Article Content */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<article className="prose mx-auto">
						<h2 className="text-2xl font-semibold">The AI billionaire boom</h2>
						<p>
							Global billionaire wealth reached $18.3 trillion in 2025, according to Oxfam — an 81%
							increase since 2020, growing at three times the rate of the previous five years. The
							12 richest billionaires now own more than the poorest half of humanity — four billion
							people. Billionaire wealth surged by $3.5 trillion in 2025 alone, nearly equivalent to
							the total wealth held by the bottom half of humanity.
						</p>
						<p>
							AI has been the primary engine of this concentration. AI-linked ventures minted over
							50 new billionaires in 2025, adding hundreds of billions to tech-sector net worth.
							Twenty billionaires gained a combined $460 billion through AI investments in a single
							year. Technology is now the single largest contributor to billionaire wealth at $5.2
							trillion, representing 32% of the total.
						</p>
						<p>
							The investment numbers are staggering: 498 AI &ldquo;unicorns&rdquo; (private
							companies valued at $1 billion or more) with a combined valuation of $2.7 trillion. AI
							companies attracted roughly 50% of all global venture funding in 2025 — approximately
							$200 billion. Eight of the top ten AI companies are billionaire-controlled.
						</p>

						<h2 className="text-2xl font-semibold">The companies at the center</h2>
						<p>
							A handful of companies dominate the AI economy. Nvidia became the first company to
							reach a $5 trillion market cap in October 2025, driven by demand for AI training
							chips. The &ldquo;Magnificent 7&rdquo; tech companies — Apple, Microsoft, Alphabet,
							Amazon, Nvidia, Meta, and Tesla — collectively command market capitalizations
							exceeding $16 trillion, driven substantially by AI expectations.
						</p>
						<p>
							This concentration means that the economic benefits of AI — the productivity gains,
							the cost savings, the new capabilities — flow primarily to the shareholders of these
							companies. When a corporation replaces 4,000 customer service workers with an AI
							system, the savings do not go to the displaced workers or their communities. They go
							to shareholders and executives.
						</p>

						<h2 className="text-2xl font-semibold">CEO compensation vs. worker displacement</h2>
						<p>
							The pattern is stark. Average CEO pay at S&amp;P 500 companies reached $18.9 million
							in 2024, up 7% year-over-year, with an average CEO-to-worker pay ratio of 285 to 1.
							Some companies show ratios that are hard to comprehend: Starbucks&apos;s CEO made
							$97.8 million in 2024, a ratio of 6,666 to 1 compared to the median employee.
						</p>
						<p>
							At the same time, AI executive compensation averages $1.6 million, with the 75th
							percentile reaching $2.5 million. Meanwhile, median AI talent salary sits at $160,000,
							and entry-level AI positions pay $70,000 to $120,000 — reasonable numbers that still
							represent a fraction of executive compensation.
						</p>
						<p>
							The core dynamic: companies announce layoffs, cite AI as the strategic rationale, and
							executive compensation continues to rise. The productivity gains from AI flow to the
							top.
						</p>

						<h2 className="text-2xl font-semibold">A two-track labor market</h2>
						<p>
							AI is creating a bifurcated economy. On one track: workers with AI skills command a
							56% wage premium (up from 25% the year before). AI-related job postings grew 7.5% even
							as total job postings fell 11.3%. Skills demanded are changing 66% faster in
							AI-exposed occupations.
						</p>
						<p>
							On the other track: displaced and commoditized workers face declining prospects.
							High-end salaries have grown 30% or more since January 2023, while lower-wage salaries
							grew only about 10%. Average AI-adoption rates are negatively correlated with wage
							growth at the bottom of the distribution. Freelancers in AI-exposed fields saw 5%
							earnings declines. Creative freelancers report 55% decline in financial compensation.
						</p>
						<p>
							This is not a market that &ldquo;lifts all boats.&rdquo; It is a market that lifts
							some boats dramatically while swamping others.
						</p>

						<h2 className="text-2xl font-semibold">Who benefits, who loses</h2>

						<h3 className="text-lg font-semibold">The winners</h3>
						<ul>
							<li>
								<strong>Capital owners and shareholders</strong> — Productivity gains from AI flow
								to company profits and stock prices, benefiting those who own equity
							</li>
							<li>
								<strong>AI companies and their founders</strong> — The builders and deployers of AI
								systems capture an outsized share of the value created
							</li>
							<li>
								<strong>Workers with AI skills</strong> — Those who can build, manage, and work
								alongside AI systems command premium wages
							</li>
							<li>
								<strong>Early adopters in competitive markets</strong> — Companies that deploy AI
								effectively gain advantages over slower competitors
							</li>
						</ul>

						<h3 className="text-lg font-semibold">The losers</h3>
						<ul>
							<li>
								<strong>Routine cognitive workers</strong> — Customer service, content creation,
								translation, data entry, and basic analysis roles face direct replacement
							</li>
							<li>
								<strong>Young and entry-level workers</strong> — The 16-20% employment decline for
								22-25 year olds in AI-exposed jobs represents a broken career ladder
							</li>
							<li>
								<strong>Freelancers and gig workers</strong> — Already seeing contract and earnings
								declines, with minimal safety net
							</li>
							<li>
								<strong>Developing economies</strong> — BPO workers in India, the Philippines, and
								elsewhere face existential threats to industries employing millions. AI data
								labelers in Kenya earn as little as $1.50 per hour training the systems that will
								automate their own roles
							</li>
							<li>
								<strong>Workers without bargaining power</strong> — Without union representation or
								collective organizing, workers absorb transition costs while shareholders capture
								gains
							</li>
						</ul>

						<h2 className="text-2xl font-semibold">The global divide</h2>
						<p>
							The UNDP warns that AI risks sparking a &ldquo;new era of divergence&rdquo; between
							nations. Benefits of AI-driven automation favor capital over labor, widening
							inequality and reducing the competitive advantage of low-cost labor in developing
							economies.
						</p>
						<p>
							In India, 20-25 million jobs could be displaced by 2030, with 1.65 million BPO workers
							facing existential threats. In the Philippines, up to 300,000 BPO jobs could be lost
							in the next five years out of an industry worth $40 billion. In Bangladesh, up to 60%
							of garment sector jobs could be lost to automation by 2030.
						</p>
						<p>
							Jobs held by women are nearly twice as exposed to automation globally. In high-income
							countries, 9.6% of female employment is at the highest automation risk, compared to
							3.5% for men. Without intervention, the long trend of narrowing development
							inequalities could reverse.
						</p>

						<h2 className="text-2xl font-semibold">Even AI leaders are worried</h2>
						<p>
							Dario Amodei, CEO of Anthropic (one of the leading AI companies), announced he is
							giving away 80% of his wealth, explicitly warning that &ldquo;the thing to worry about
							is a level of wealth concentration that will break society.&rdquo; When the people
							building these systems warn about the concentration of power they are creating, it is
							worth listening.
						</p>

						<h2 className="text-2xl font-semibold">The bargaining power problem</h2>
						<p>
							The Economic Policy Institute argues that the core issue is not technology itself but
							unbalanced labor market power. AI can be used as a tool for increased employer control
							of work intensity and wages. The &ldquo;AI is taking your job&rdquo; narrative can
							itself be weaponized to suppress worker demands. Employers use algorithmic
							wage-setting to erode transparency in pay. Without strong bargaining positions,
							workers absorb the costs of transition while shareholders capture the gains.
						</p>
						<p>
							This is not inevitable. It is a political and economic choice. How AI benefits are
							distributed depends on policy, organizing, and collective action — not on the
							technology itself.
						</p>
					</article>
				</section>

				{/* Action CTA */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-2xl font-semibold mb-4">
							Redistribution is possible. It requires action.
						</h2>
						<p className="text-muted max-w-2xl mx-auto mb-8">
							Universal basic income, worker ownership of AI tools, policy pressure for AI taxation,
							and union organizing are all proven strategies for ensuring the gains from technology
							are shared. None of them happen on their own.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/act/ubi"
								className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
							>
								Support UBI
							</Link>
							<Link
								href="/act/ownership"
								className="inline-flex items-center justify-center px-6 py-3 bg-accent-2 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
							>
								Worker ownership
							</Link>
							<Link
								href="/act/policy"
								className="inline-flex items-center justify-center px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
							>
								Policy action
							</Link>
						</div>
					</div>
				</section>

				{/* Continue Reading */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-xl font-semibold mb-6">Continue reading</h2>
					<div className="grid md:grid-cols-3 gap-6">
						<Link
							href="/crisis/jobs"
							className="p-6 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors"
						>
							<h3 className="font-semibold mb-2">AI &amp; Employment</h3>
							<p className="text-sm text-muted">
								The documented evidence on AI job displacement — who is affected and how much.
							</p>
							<span className="text-accent text-sm font-medium mt-3 inline-block">
								Read more &rarr;
							</span>
						</Link>
						<Link
							href="/crisis/timeline"
							className="p-6 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors"
						>
							<h3 className="font-semibold mb-2">How Fast Is This Happening?</h3>
							<p className="text-sm text-muted">
								Expert predictions on AI timelines and why the pace of change matters.
							</p>
							<span className="text-accent text-sm font-medium mt-3 inline-block">
								Read more &rarr;
							</span>
						</Link>
						<Link
							href="/crisis/stories"
							className="p-6 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors"
						>
							<h3 className="font-semibold mb-2">Real Stories</h3>
							<p className="text-sm text-muted">
								Behind the statistics are real people dealing with real consequences.
							</p>
							<span className="text-accent text-sm font-medium mt-3 inline-block">
								Read more &rarr;
							</span>
						</Link>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
