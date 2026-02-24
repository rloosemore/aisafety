import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "How Fast Is This Happening? AI Timelines and Expert Predictions | AISafety.org",
	description:
		"Honest assessment of AI timelines — from AGI predictions to real-world job displacement. What experts agree on, where they disagree, and why it matters now.",
};

const timelineEvents = [
	{
		year: "2022",
		label: "ChatGPT launches",
		detail:
			"Reaches 100 million users in 2 months — fastest adoption of any technology in history.",
		type: "past" as const,
	},
	{
		year: "2023",
		label: "Hollywood strikes over AI",
		detail:
			"WGA and SAG-AFTRA win first AI labor protections. AI enters mainstream consciousness as a labor issue.",
		type: "past" as const,
	},
	{
		year: "2024",
		label: "EU AI Act takes effect",
		detail:
			"First comprehensive AI regulation. Banned practices enforced February 2025. Full enforcement by August 2026.",
		type: "past" as const,
	},
	{
		year: "2025",
		label: "54,836 documented AI job cuts in the U.S.",
		detail:
			"Stanford study finds 16-20% employment decline for young workers in AI-exposed jobs. 50+ new AI billionaires.",
		type: "past" as const,
	},
	{
		year: "2026-2028",
		label: "Near-term predictions",
		detail:
			'Elon Musk and Eric Schmidt predict AGI by 2026-2027. Sam Altman predicts "palpable" job displacement. 37% of companies expect to replace workers with AI by end of 2026.',
		type: "near" as const,
	},
	{
		year: "2029-2033",
		label: "Medium-term predictions",
		detail:
			"Goldman Sachs: AI agents replace 7% of U.S. roles by 2029. Prediction markets: 50% chance of AGI by 2033. Demis Hassabis (Google DeepMind) estimates AGI in 5-10 years.",
		type: "medium" as const,
	},
	{
		year: "2030",
		label: "WEF projection deadline",
		detail:
			"World Economic Forum projects 92 million jobs displaced, 170 million created (net +78M) by 2030. IMF: 40% of global employment exposed to AI.",
		type: "medium" as const,
	},
	{
		year: "~2032",
		label: "METR projection",
		detail:
			"METR 2026 model projects 99% automation of AI R&D tasks by approximately 2032, based on current capability trends.",
		type: "medium" as const,
	},
	{
		year: "2040+",
		label: "Long-term / skeptical predictions",
		detail:
			"Broader AI research community is more cautious. AAAI survey: 76% of researchers say scaling alone will not produce AGI. Many believe fundamental breakthroughs are still required.",
		type: "long" as const,
	},
];

export default function CrisisTimeline() {
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
						How Fast Is This Happening?
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
						Expert predictions range from &ldquo;AGI by next year&rdquo; to &ldquo;not in our
						lifetimes.&rdquo; Here is an honest assessment of what we know, what we do not, and why
						the timeline question matters less than you might think.
					</p>
				</section>

				{/* Core Insight */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-4xl mx-auto text-center">
						<p className="text-xl md:text-2xl font-semibold text-ink leading-relaxed">
							The key insight: even without AGI, current AI is already displacing workers. The
							debate over when machines become &ldquo;truly intelligent&rdquo; is less urgent than
							the fact that they are already cheaper than humans for a growing list of tasks.
						</p>
					</div>
				</section>

				{/* Visual Timeline */}
				<section className="px-6 py-16 max-w-4xl mx-auto">
					<h2 className="text-2xl font-semibold text-center mb-12">
						Timeline of AI progress and predictions
					</h2>
					<div className="relative">
						{/* Vertical line */}
						<div
							className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border"
							aria-hidden="true"
						/>

						<div className="space-y-8">
							{timelineEvents.map((event) => (
								<div key={event.year} className="relative pl-12 md:pl-20">
									{/* Dot */}
									<div
										className={`absolute left-2.5 md:left-6.5 w-3 h-3 rounded-full border-2 border-surface ${
											event.type === "past"
												? "bg-accent"
												: event.type === "near"
													? "bg-warm"
													: event.type === "medium"
														? "bg-accent-2"
														: "bg-muted"
										}`}
										aria-hidden="true"
									/>

									<div className="p-6 rounded-lg border border-border bg-surface-raised">
										<div className="flex items-baseline gap-3 mb-2">
											<span
												className={`text-sm font-bold ${
													event.type === "past"
														? "text-accent"
														: event.type === "near"
															? "text-warm"
															: event.type === "medium"
																? "text-accent-2"
																: "text-muted"
												}`}
											>
												{event.year}
											</span>
											<h3 className="font-semibold">{event.label}</h3>
										</div>
										<p className="text-sm text-muted leading-relaxed">{event.detail}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Expert Opinion Breakdown */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold text-center mb-4">
							What the experts actually say
						</h2>
						<p className="text-center text-muted mb-12 max-w-2xl mx-auto">
							There is no consensus on AI timelines. The range of credible opinion is enormous. Here
							is how the expert landscape breaks down.
						</p>
						<div className="grid md:grid-cols-3 gap-6">
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-1 text-warm">Aggressive (2026-2030)</h3>
								<p className="text-xs text-muted mb-3">AI company leaders</p>
								<ul className="text-sm text-muted space-y-3">
									<li>
										<strong>Elon Musk:</strong> AGI by 2026
									</li>
									<li>
										<strong>Eric Schmidt:</strong> AGI by 2027
									</li>
									<li>
										<strong>Sam Altman:</strong> &ldquo;Palpable&rdquo; job displacement in the next
										few years
									</li>
									<li>
										<strong>Dario Amodei:</strong> Half of entry-level white-collar jobs could be
										eliminated within five years
									</li>
									<li>
										<strong>Microsoft AI Chief:</strong> All white-collar work done by AI by next
										year (widely viewed as hyperbolic)
									</li>
								</ul>
								<p className="text-xs text-muted mt-4 italic">
									Note: These individuals have financial incentives to project rapid progress.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-1 text-accent-2">Moderate (2030-2040)</h3>
								<p className="text-xs text-muted mb-3">Prediction markets &amp; some researchers</p>
								<ul className="text-sm text-muted space-y-3">
									<li>
										<strong>Demis Hassabis</strong> (Google DeepMind): AGI in 5-10 years
									</li>
									<li>
										<strong>Prediction markets:</strong> 50% probability of AGI by 2033
									</li>
									<li>
										<strong>Goldman Sachs:</strong> AI agents replacing 7% of U.S. roles by 2029
									</li>
									<li>
										<strong>METR 2026 model:</strong> 99% AI R&amp;D automation by approximately
										2032
									</li>
									<li>
										<strong>WEF:</strong> 92 million jobs displaced by 2030
									</li>
								</ul>
								<p className="text-xs text-muted mt-4 italic">
									These predictions aggregate more diverse perspectives but still carry significant
									uncertainty.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-1 text-muted">Skeptical (2040+)</h3>
								<p className="text-xs text-muted mb-3">Broader research community</p>
								<ul className="text-sm text-muted space-y-3">
									<li>
										<strong>AAAI survey:</strong> 76% of AI researchers say current scaling
										approaches will not produce AGI
									</li>
									<li>
										<strong>NBER:</strong> 90% of executives say AI has had no impact on workplace
										employment in the last three years
									</li>
									<li>
										<strong>Yale Budget Lab:</strong> No significant labor market disruption
										detected through December 2025
									</li>
									<li>
										<strong>GPT-5:</strong> Underwhelming relative to hype, suggesting capability
										gains may be slowing
									</li>
								</ul>
								<p className="text-xs text-muted mt-4 italic">
									Academic researchers and empiricists tend to find less evidence of imminent
									transformation.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Why It Matters Now */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<article className="prose mx-auto">
						<h2 className="text-2xl font-semibold">
							Why the timeline debate matters less than you think
						</h2>
						<p>
							The public debate often fixates on AGI — artificial general intelligence, machines
							that can do anything a human can. But this framing obscures something important: AI
							does not need to be &ldquo;generally intelligent&rdquo; to displace workers. It just
							needs to be good enough at specific tasks to be cheaper than hiring a person.
						</p>
						<p>
							For a customer service chatbot to replace a call center worker, it does not need
							consciousness or understanding. It needs to handle 80% of queries well enough that the
							company saves money. Klarna claimed its AI did the work of 700 employees before the
							company even had a particularly sophisticated system (and later partially reversed
							course when customer satisfaction dropped).
						</p>
						<p>
							McKinsey estimates 57% of U.S. work hours are <em>technically</em> automatable with
							current technology. The real question is not &ldquo;when will AI become
							superhuman?&rdquo; but &ldquo;how quickly will companies deploy the AI capabilities
							that already exist?&rdquo;
						</p>

						<h2 className="text-2xl font-semibold">What we are fairly confident about</h2>
						<ul>
							<li>
								Current AI capabilities are already sufficient to displace workers in specific
								sectors — this is documented, not projected
							</li>
							<li>
								The pace of displacement is accelerating — 75% of all AI-attributed layoffs since
								2023 occurred in 2025
							</li>
							<li>Entry-level and routine cognitive work faces the most immediate risk</li>
							<li>
								Every credible projection, including the most optimistic ones, acknowledges
								significant disruption by 2030
							</li>
							<li>
								The window for building safety nets and transition support is now, not after
								displacement has occurred
							</li>
						</ul>

						<h2 className="text-2xl font-semibold">What we genuinely do not know</h2>
						<ul>
							<li>
								<strong>Whether AI capabilities plateau or continue accelerating.</strong> If
								scaling laws hit diminishing returns, the displacement picture changes dramatically.
								GPT-5&apos;s underwhelming reception suggests this is possible. But it is equally
								possible that new architectures or approaches unlock another leap.
							</li>
							<li>
								<strong>How fast real-world adoption will follow technical capability.</strong>{" "}
								Historically, adoption lags capability by years or decades. But AI adoption is
								moving far faster than computers or the internet did.
							</li>
							<li>
								<strong>The quality of new jobs created.</strong> The WEF projects 170 million new
								jobs, but does not specify whether they will be stable, well-paid, and dignified —
								or precarious gig work.
							</li>
							<li>
								<strong>How governments will respond.</strong> Policy choices will shape outcomes
								enormously. The range between &ldquo;no intervention&rdquo; and &ldquo;comprehensive
								transition support&rdquo; is vast.
							</li>
						</ul>

						<h2 className="text-2xl font-semibold">The honest framing</h2>
						<p>
							No one knows exactly how fast this will move. But certainty about the timeline is not
							required for action. If there is a 50% chance your house will flood next year (the
							prediction market odds for AGI by 2033), you buy insurance now. You do not wait for
							certainty.
						</p>
						<p>
							The evidence that displacement is real, accelerating, and concentrated among the most
							vulnerable workers is strong enough to warrant action today. Whether AGI arrives in
							2028 or 2045, the people losing their jobs to current AI need support, organizing, and
							policy change now.
						</p>
					</article>
				</section>

				{/* Action CTA */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-2xl font-semibold mb-4">The window for preparation is now.</h2>
						<p className="text-muted max-w-2xl mx-auto mb-8">
							Whether you think AGI is five years away or fifty, the displacement already happening
							today demands a response. There are concrete actions you can take.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/act"
								className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
							>
								See action pathways
							</Link>
							<Link
								href="/crisis/jobs"
								className="inline-flex items-center justify-center px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
							>
								Review the employment evidence
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
								The documented evidence on current job displacement.
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
								Common claims about AI from both optimists and pessimists — tested against evidence.
							</p>
							<span className="text-accent text-sm font-medium mt-3 inline-block">
								Read more &rarr;
							</span>
						</Link>
						<Link
							href="/map"
							className="p-6 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors"
						>
							<h3 className="font-semibold mb-2">Understand the Field</h3>
							<p className="text-sm text-muted">
								Navigate the AI safety landscape — from technical alignment to economic policy.
							</p>
							<span className="text-accent text-sm font-medium mt-3 inline-block">
								Explore &rarr;
							</span>
						</Link>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
