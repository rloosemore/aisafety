import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Weekly Signal Digest | AISafety.org",
	description:
		"What actually matters this week in AI safety. Curated developments, analysis, and action items — delivered weekly.",
};

const digestSections = [
	{
		title: "The Signal",
		description:
			"3-5 most important developments of the week, curated from hundreds of sources. No noise, no hype — just what you need to know.",
	},
	{
		title: "What It Means",
		description:
			"Analysis and context for each development. Who benefits, who is affected, and what the evidence actually supports.",
	},
	{
		title: "What You Can Do",
		description:
			"Concrete action items for the week. Open comment periods, campaigns to join, representatives to contact, events to attend.",
	},
	{
		title: "Deep Dive",
		description:
			"One topic explored in depth each week. Original analysis backed by primary sources and expert input.",
	},
	{
		title: "From the Community",
		description:
			"What members are doing — local groups forming, campaigns launched, victories won, lessons learned.",
	},
];

export default function DigestPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1">
				{/* Hero */}
				<section className="px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
					<p className="text-sm font-medium text-accent-2 uppercase tracking-wide mb-4">
						Weekly Newsletter
					</p>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						Weekly Signal Digest
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
						What actually matters this week in AI safety. Curated developments, honest analysis, and
						concrete action items — delivered every Monday.
					</p>
				</section>

				{/* What You Get */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold text-center mb-4">What every issue covers</h2>
						<p className="text-center text-muted mb-12 max-w-2xl mx-auto">
							Each digest follows a consistent structure so you know exactly what to expect and can
							find what matters to you.
						</p>
						<div className="space-y-6">
							{digestSections.map((section, index) => (
								<div
									key={section.title}
									className="p-6 rounded-lg border border-border bg-surface flex gap-6 items-start"
								>
									<span className="text-2xl font-bold text-accent flex-shrink-0 w-8 text-center">
										{index + 1}
									</span>
									<div>
										<h3 className="text-lg font-semibold mb-1">{section.title}</h3>
										<p className="text-muted text-sm leading-relaxed">{section.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Signup Form */}
				<section className="px-6 py-16 max-w-3xl mx-auto">
					<div className="text-center mb-10">
						<h2 className="text-2xl font-semibold mb-4">Get the digest every Monday</h2>
						<p className="text-muted leading-relaxed">
							Free subscribers get the summary — the top developments and action items in a 5-minute
							read. Members get the full analysis, deep dive, and community section.
						</p>
					</div>

					<div className="p-8 rounded-lg border border-border bg-surface-raised">
						<form className="flex flex-col sm:flex-row gap-4" action="#">
							<label htmlFor="digest-email" className="sr-only">
								Email address
							</label>
							<input
								id="digest-email"
								type="email"
								placeholder="you@example.com"
								className="flex-1 px-4 py-3 rounded-lg border border-border bg-surface text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
								aria-label="Email address for digest signup"
							/>
							<button
								type="submit"
								className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
							>
								Subscribe free
							</button>
						</form>
						<p className="text-xs text-muted mt-4 text-center">
							We never share your email. Unsubscribe anytime. No spam, ever.
						</p>
					</div>
				</section>

				{/* Membership Upsell */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-2xl font-semibold mb-4">Want the full analysis?</h2>
						<p className="text-muted leading-relaxed mb-8">
							Free subscribers get the summary. Members get the complete digest with in-depth
							analysis, source links, the weekly deep dive, community updates, and access to the
							full archive.
						</p>
						<Link
							href="/pricing"
							className="inline-flex items-center justify-center px-6 py-3 bg-accent-2 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
						>
							See membership options
						</Link>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
