import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Team — Who's Behind This | AISafety.org",
	description:
		"AISafety.org is an early-stage project building an action platform for AI safety. We're looking for contributors in research, content, engineering, community, and policy.",
};

const contributorAreas = [
	{
		title: "Research",
		description:
			"Monitoring AI developments, fact-checking claims, evaluating sources, updating evidence pages, and tracking policy changes across jurisdictions.",
	},
	{
		title: "Content",
		description:
			"Writing clear explanations of complex topics, editing for accuracy and accessibility, translating content for non-English audiences, and developing action guides.",
	},
	{
		title: "Engineering",
		description:
			"Front-end development, back-end infrastructure, accessibility testing, performance optimization, and building community tools.",
	},
	{
		title: "Community",
		description:
			"Moderation, local group coordination, event planning, member support, and helping build a constructive community culture.",
	},
	{
		title: "Policy Expertise",
		description:
			"Reviewing policy content for accuracy, tracking regulatory developments, explaining legal frameworks in plain language, and connecting to the advocacy ecosystem.",
	},
];

export default function TeamPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1">
				{/* Hero */}
				<section className="px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
					<p className="text-sm font-medium text-accent-2 uppercase tracking-wide mb-4">About</p>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						Who&apos;s behind this
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
						AISafety.org is an early-stage project. We are honest about where we are because trust
						starts with transparency — including transparency about our own limitations.
					</p>
				</section>

				{/* What We're Building */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-3xl mx-auto">
						<h2 className="text-2xl font-semibold mb-6">What we are building</h2>
						<div className="space-y-4 text-muted leading-relaxed">
							<p>
								An action platform for people concerned about AI&apos;s impact on jobs, wealth, and
								society. Not another AI news site. Not a technical research hub. A place where
								worried people can find honest information and concrete things to do about it.
							</p>
							<p>
								We center economic displacement because that is what most people are actually
								worried about. We provide action pathways because information without action is not
								enough when livelihoods are at stake. We maintain editorial independence because
								trust is everything.
							</p>
							<p>
								We are building this in public, with public principles, a public methodology, and a
								commitment to publishing our revenue and costs. This level of transparency is
								deliberate — it is how we earn and keep trust.
							</p>
						</div>
					</div>
				</section>

				{/* Contributors Wanted */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<div className="text-center mb-10">
						<h2 className="text-2xl font-semibold mb-4">We are looking for contributors</h2>
						<p className="text-muted max-w-2xl mx-auto">
							This project is bigger than any one team. If you have skills in any of these areas and
							care about AI&apos;s impact on people, we want to hear from you.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{contributorAreas.map((area) => (
							<div
								key={area.title}
								className="p-6 rounded-lg border border-border bg-surface-raised"
							>
								<h3 className="font-semibold mb-2">{area.title}</h3>
								<p className="text-sm text-muted leading-relaxed">{area.description}</p>
							</div>
						))}
					</div>
				</section>

				{/* Get in Touch */}
				<section className="px-6 py-16 bg-surface-raised border-t border-border">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-2xl font-semibold mb-4">Interested? Get in touch.</h2>
						<p className="text-muted leading-relaxed mb-8">
							We are still early. That means you can have real impact on what this becomes. Join the
							newsletter to stay updated on contributor opportunities, or reach out directly if you
							want to get involved now.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/newsletter"
								className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
							>
								Join the newsletter
							</Link>
							<Link
								href="/community"
								className="inline-flex items-center justify-center px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
							>
								Community hub
							</Link>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
