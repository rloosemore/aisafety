import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "How We Research — Methodology | AISafety.org",
	description:
		"How AISafety.org selects sources, evaluates evidence, handles uncertainty, and maintains accuracy. Our research methodology is public because trust requires transparency.",
};

export default function MethodologyPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1 px-6 py-16 max-w-3xl mx-auto">
				<article className="prose">
					<p className="text-sm font-medium text-accent-2 uppercase tracking-wide">About</p>
					<h1>How We Research</h1>

					<p>
						Trust is built on transparency. This page explains how we find, evaluate, and present
						information. If you think we are getting something wrong, this methodology tells you
						exactly where to challenge us.
					</p>

					<h2>How we select sources</h2>
					<p>
						We prioritize primary sources: government data, peer-reviewed research, court filings,
						regulatory documents, and official company disclosures. When we cite analysis or
						reporting, we prefer established research institutions and outlets with strong editorial
						standards.
					</p>
					<p>
						We do not treat all sources equally. A Bureau of Labor Statistics report carries more
						weight than a management consulting survey. An independently audited study carries more
						weight than a corporate press release. We make these distinctions explicit.
					</p>

					<h2>How we evaluate evidence</h2>
					<p>For every substantive claim on this site, we ask:</p>
					<ul>
						<li>What is the primary source?</li>
						<li>What is the methodology, and is it sound?</li>
						<li>What is the sample size and scope?</li>
						<li>Who funded the research, and does that create bias?</li>
						<li>Has it been replicated or independently verified?</li>
						<li>What are the limitations the authors themselves acknowledge?</li>
					</ul>
					<p>
						We label claims by confidence level: documented facts (strong evidence, widely
						verified), supported findings (good evidence with caveats), projections (modeled
						estimates with inherent uncertainty), and disputed claims (credible disagreement among
						experts).
					</p>

					<h2>How we handle uncertainty</h2>
					<p>
						Intellectual honesty requires acknowledging what we do not know. When the evidence is
						genuinely uncertain — and on many AI questions, it is — we say so explicitly. We never
						present projections as facts or opinions as evidence.
					</p>
					<p>
						Where experts disagree, we present the strongest version of each position. We do not
						create false balance between well-supported and fringe positions, but we do distinguish
						between genuine scientific uncertainty and manufactured doubt.
					</p>

					<h2>How we present debates</h2>
					<p>
						AI safety involves real disagreements among thoughtful people. On questions where
						credible experts disagree — the pace of automation, the likelihood of specific outcomes,
						the best policy responses — we present all sides fairly.
					</p>
					<p>
						Fairly does not mean equally. If 90% of the evidence supports one position, we say that
						while still presenting the minority view and explaining why it exists. We never pretend
						there is consensus where there is not, and we never pretend there is controversy where
						there is not.
					</p>

					<h2>Update cadence</h2>
					<p>
						Our content is structured as living documents, not static posts. When new evidence
						emerges, we update the relevant pages rather than publishing a new article that
						contradicts an old one. Every page shows when it was last reviewed and updated.
					</p>
					<p>
						Major updates include a changelog noting what changed and why. If we change our
						assessment on something substantive, we explain what new evidence shifted our view.
					</p>

					<h2>Our biases and how we account for them</h2>
					<p>Everyone has biases. Here are ours, stated openly:</p>
					<ul>
						<li>
							We believe economic displacement from AI is a serious and underappreciated problem.
							This makes us more alert to displacement evidence and potentially less sensitive to
							countervailing trends. We counteract this by actively seeking and prominently
							featuring evidence that challenges our concerns.
						</li>
						<li>
							We believe collective action is effective. This makes us more likely to highlight
							organizing successes. We counteract this by honestly reporting failures and
							limitations of collective action approaches.
						</li>
						<li>
							We are skeptical of corporate self-regulation. This makes us more critical of
							industry-funded research. We counteract this by evaluating industry research on its
							methodology, not its funding alone.
						</li>
					</ul>

					<h2>How to report errors</h2>
					<p>
						If you find something wrong — a factual error, a misleading framing, an outdated
						statistic, a broken source link — we want to know. Corrections make us more trustworthy,
						not less.
					</p>
					<p>
						For now, report errors through the newsletter. We are building a dedicated corrections
						system. When we fix an error, we note the correction publicly on the affected page.
					</p>

					<h2>A note on humility</h2>
					<p>
						We would rather be honest about what we do not know than pretend to have answers we do
						not. AI is developing rapidly, and the evidence base shifts frequently. We are building
						this platform to be useful, accurate, and trustworthy — and that means being willing to
						say &ldquo;we are not sure&rdquo; when that is the honest answer.
					</p>

					<div className="mt-12 pt-8 border-t border-border not-prose">
						<div className="flex flex-col sm:flex-row gap-4">
							<Link href="/about/principles" className="text-accent text-sm font-medium">
								Read our principles &rarr;
							</Link>
							<Link href="/about/funding" className="text-accent text-sm font-medium">
								See our funding transparency &rarr;
							</Link>
						</div>
					</div>
				</article>
			</main>
			<Footer />
		</div>
	);
}
