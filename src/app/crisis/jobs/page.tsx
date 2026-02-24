import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "AI & Employment: What the Evidence Shows | AISafety.org",
	description:
		"In-depth analysis of AI's impact on jobs — 54,836 documented cuts, entry-level workers hit hardest, freelance markets disrupted. Evidence-based, honestly caveated.",
};

export default function CrisisJobs() {
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
						AI &amp; Employment
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
						What the data actually shows about AI and jobs — the documented losses, the sectors most
						affected, the genuine uncertainties, and what it means for you.
					</p>
				</section>

				{/* Key Numbers */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
							<div>
								<p className="text-3xl font-bold text-accent">54,836</p>
								<p className="text-sm text-muted mt-1">U.S. job cuts attributed to AI in 2025</p>
							</div>
							<div>
								<p className="text-3xl font-bold text-accent">16-20%</p>
								<p className="text-sm text-muted mt-1">
									employment decline for ages 22-25 in AI-exposed jobs
								</p>
							</div>
							<div>
								<p className="text-3xl font-bold text-accent">37%</p>
								<p className="text-sm text-muted mt-1">
									of companies expect to replace jobs with AI by 2026
								</p>
							</div>
							<div>
								<p className="text-3xl font-bold text-accent">5%</p>
								<p className="text-sm text-muted mt-1">
									earnings decline for freelancers in AI-exposed fields
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Article Content */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<article className="prose mx-auto">
						<h2 className="text-2xl font-semibold">The documented numbers</h2>
						<p>
							According to Challenger, Gray &amp; Christmas, 54,836 U.S. job cuts were directly
							attributed to AI in 2025, out of 1,206,374 total announced layoffs. AI-attributed cuts
							represent roughly 4.5% of total job losses but account for over 75% of all AI-related
							cuts reported since tracking began in 2023.
						</p>
						<p>
							These are not projections. These are documented, employer-announced cuts where AI was
							cited as the reason. Companies like Salesforce (approximately 4,000 customer support
							workers), Amazon (14,000 corporate roles in October 2025 alone, with 16,000 more in
							early 2026), IBM, Workday, and Duolingo have all publicly confirmed replacing human
							workers with AI systems.
						</p>
						<p>
							For context: AI was not the leading cause of 2025 layoffs. Government efficiency
							actions accounted for 293,753 cuts. But AI displacement is accelerating — 75% of all
							AI-attributed layoffs since 2023 occurred in 2025.
						</p>

						<h2 className="text-2xl font-semibold">
							The critical caveat: &ldquo;AI washing&rdquo;
						</h2>
						<p>
							Not all layoffs attributed to AI are genuinely caused by AI. This is important to
							state clearly.
						</p>
						<p>
							Oxford Economics found in January 2026 that firms do not appear to be replacing
							workers with AI on a significant scale, suspecting some companies are &ldquo;dressing
							up layoffs&rdquo; as AI-driven because it sends a positive signal to investors. A
							Harvard Business Review survey of over 1,000 global executives found that 60% of
							organizations reduced headcount <em>in anticipation</em> of AI&apos;s future impact —
							not based on actual AI performance.
						</p>
						<p>
							Even Sam Altman, CEO of OpenAI, acknowledged in February 2026 that there is
							&ldquo;some AI washing where people are blaming AI for layoffs that they would
							otherwise do.&rdquo; Deutsche Bank analysts warned that &ldquo;AI redundancy washing
							will be a significant feature of 2026.&rdquo;
						</p>
						<p>
							This does not mean AI displacement is fake — it means the numbers likely overstate the
							current scale while understating the coming trajectory.
						</p>

						<h2 className="text-2xl font-semibold">Entry-level workers are the canaries</h2>
						<p>
							The most concerning data comes from Stanford&apos;s Digital Economy Lab, whose August
							2025 study &ldquo;Canaries in the Coal Mine&rdquo; found that employment for
							22-to-25-year-olds in the most AI-exposed occupations declined 16% relative to other
							occupations, even after controlling for firm-level effects. For young software
							developers specifically, employment was 20% below its late-2022 peak by July 2025.
						</p>
						<p>
							Meanwhile, workers aged 30 and older in the same AI-exposed categories saw employment{" "}
							<em>grow</em> 6-12% over the same period. This creates what researchers call a
							&ldquo;broken ladder&rdquo; problem: if entry-level roles disappear, how do people
							gain the experience needed for senior roles?
						</p>

						<h2 className="text-2xl font-semibold">Freelancers feel it first</h2>
						<p>
							The freelance market shows the clearest early evidence of displacement. A
							Brookings/Upwork study found that freelancers in AI-exposed occupations experienced a
							2% decline in contracts and a 5% drop in earnings since late 2022 — and the declines
							are persistent and growing, not fading.
						</p>
						<p>
							Fiverr, one of the largest freelance platforms, saw revenue decline 2% and active
							buyer count drop 10% in 2024. Translation, basic graphic design, and coding tasks are
							migrating to AI tools.
						</p>
						<p>
							A survey of creative freelancers by the CREAATIF project found that 73% believe
							generative AI is altering the quality of work in creative fields, 68% feel their job
							security has been reduced, 61% say the perceived value of their work has decreased,
							and 55% report declining financial compensation.
						</p>

						<h2 className="text-2xl font-semibold">Which sectors are most affected</h2>
						<p>
							Cross-referencing data from the ILO, WEF, McKinsey, and Stanford, the roles facing the
							highest current automation risk include:
						</p>
						<ul>
							<li>
								<strong>Customer service</strong> — Salesforce cut approximately 4,000 support
								workers; Klarna claimed its AI did the work of 700 employees (though it later
								reversed course after customer satisfaction dropped)
							</li>
							<li>
								<strong>Content and copywriting</strong> — Freelance writing rates have fallen as
								clients shift to AI-generated first drafts
							</li>
							<li>
								<strong>Translation and transcription</strong> — Duolingo cut 10% of its contractor
								workforce as AI handles translation tasks
							</li>
							<li>
								<strong>Data entry and administrative support</strong> — Among the most automatable
								categories across all studies
							</li>
							<li>
								<strong>Junior software development</strong> — 20% employment decline for young
								developers, as AI coding tools handle boilerplate work
							</li>
							<li>
								<strong>Basic financial analysis</strong> — Increasingly done by AI tools, though
								complex judgment work remains human
							</li>
						</ul>
						<p>
							Roles with lower automation risk include those requiring physical presence in
							unpredictable environments (skilled trades, emergency response), deep human connection
							(healthcare, counseling, teaching), and complex strategic judgment in novel
							situations.
						</p>

						<h2 className="text-2xl font-semibold">Why this time may be different</h2>
						<p>
							Every previous technology transition eventually created more jobs than it destroyed.
							There are legitimate reasons to believe this pattern will hold again — and legitimate
							reasons to worry it may not.
						</p>
						<p>
							<strong>Speed:</strong> ChatGPT reached 100 million users in two months. Steam engines
							took roughly 100 years to peak adoption. Generative AI is diffusing dramatically
							faster than any previous technology.
						</p>
						<p>
							<strong>Breadth:</strong> AI affects cognitive work across nearly every sector
							simultaneously. The Industrial Revolution affected manufacturing. Computers affected
							specific office functions. AI affects writing, coding, design, analysis, customer
							service, translation, legal work, and finance — all at once.
						</p>
						<p>
							<strong>The broken ladder:</strong> If AI eliminates entry-level roles, the pipeline
							for developing experienced workers breaks. This is new territory.
						</p>
						<p>
							<strong>Labor share decline:</strong> Columbia Business School research predicts a 5%
							decline in labor&apos;s share of income — comparable to the Industrial
							Revolution&apos;s 5-15% decline, but potentially happening in years rather than
							decades.
						</p>

						<h2 className="text-2xl font-semibold">The honest counterargument</h2>
						<p>
							The most rigorous counter-evidence comes from Yale Budget Lab, which found no
							statistically significant differences in occupational change rates or unemployment
							duration for AI-exposed jobs through December 2025. The broader labor market shows
							stability, not major disruption.
						</p>
						<p>
							LinkedIn data shows 1.3 million new AI-related roles globally, including AI engineers,
							data annotators, and over 600,000 data center jobs. The WEF projects a net gain of 78
							million jobs by 2030 (170 million created versus 92 million displaced). Jobs requiring
							AI skills command a 56% wage premium.
						</p>
						<p>
							The question is not simply &ldquo;will there be enough jobs?&rdquo; but &ldquo;will
							they be accessible to the people who lose their current ones?&rdquo; 77% of new AI
							jobs require master&apos;s degrees. They are concentrated in different locations and
							demographics than the jobs being lost.
						</p>

						<h2 className="text-2xl font-semibold">What this means for you</h2>
						<p>
							If your job involves routine cognitive tasks — customer service scripts,
							template-based writing, basic translation, data entry, boilerplate coding — the
							evidence suggests real and growing risk. The displacement is already measurable in
							freelance markets and entry-level hiring.
						</p>
						<p>
							If you are a young worker early in your career, the data is particularly concerning.
							The 16-20% employment decline for 22-25 year olds is not a prediction; it is a
							measurement of what has already happened.
						</p>
						<p>
							This is not a call to panic. It is a call to act — individually and collectively.
							History shows that technological transitions are not inevitable in their outcomes.
							Workers who organized collectively, through unions, cooperatives, and mutual aid,
							consistently fared better than those who tried to adapt alone.
						</p>
					</article>
				</section>

				{/* Action CTA */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-2xl font-semibold mb-4">You don&apos;t have to face this alone.</h2>
						<p className="text-muted max-w-2xl mx-auto mb-8">
							Collective action has shaped every previous technological transition. There are
							concrete things you can do right now — organizing with coworkers, supporting UBI
							campaigns, pushing for policy changes, and building community resilience.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/act/organize"
								className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
							>
								Organize your workplace
							</Link>
							<Link
								href="/act/ubi"
								className="inline-flex items-center justify-center px-6 py-3 bg-accent-2 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
							>
								Support UBI campaigns
							</Link>
							<Link
								href="/act"
								className="inline-flex items-center justify-center px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
							>
								All action pathways
							</Link>
						</div>
					</div>
				</section>

				{/* Continue Reading */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-xl font-semibold mb-6">Continue reading</h2>
					<div className="grid md:grid-cols-3 gap-6">
						<Link
							href="/crisis/wealth"
							className="p-6 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors"
						>
							<h3 className="font-semibold mb-2">Concentration of Power</h3>
							<p className="text-sm text-muted">
								Where the gains from AI are actually going — and who is being left behind.
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
								Expert predictions, honest uncertainties, and why the pace matters.
							</p>
							<span className="text-accent text-sm font-medium mt-3 inline-block">
								Read more &rarr;
							</span>
						</Link>
						<Link
							href="/crisis/myths"
							className="p-6 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors"
						>
							<h3 className="font-semibold mb-2">Myths vs. Reality</h3>
							<p className="text-sm text-muted">
								Common claims from both doomers and dismissers — and what the evidence actually
								supports.
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
