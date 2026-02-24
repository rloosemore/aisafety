import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "AI Safety Research Library | AISafety.org",
	description:
		"Curated, continuously updated research synthesis covering AI safety organizations, active debates, economic evidence, and key papers. Every claim sourced and cited.",
};

const researchSections = [
	{
		title: "Active Debates",
		href: "/research/debates",
		description:
			"Where experts disagree and why it matters. Seven major debates in AI safety, with all sides presented fairly: timelines, alignment difficulty, open vs. closed source, regulation, existential risk, and more.",
		icon: "Debates",
		count: "7 debates mapped",
	},
	{
		title: "Organization Profiles",
		href: "/research/orgs",
		description:
			"Who is working on AI safety and what are they doing? A directory of 44+ organizations across research labs, industry safety teams, policy groups, academic centers, and government bodies.",
		icon: "Orgs",
		count: "44+ organizations",
	},
	{
		title: "Economic Evidence Base",
		href: "/research/evidence",
		description:
			"The detailed data on AI's economic impact: job displacement, wage effects, wealth concentration, and global disparities. Includes honest counterarguments and key uncertainties.",
		icon: "Evidence",
		count: "15+ major studies",
	},
	{
		title: "Concept Explainers",
		href: "/learn/concepts",
		description:
			"Key AI safety concepts explained clearly, from alignment and interpretability to UBI and platform cooperativism. Organized by category and difficulty level.",
		icon: "Concepts",
		count: "20+ concepts",
	},
];

const methodologyPoints = [
	{
		title: "Source-cited",
		description:
			"Every factual claim links to its primary source. We distinguish between documented data, projections, and expert opinion.",
	},
	{
		title: "Continuously updated",
		description:
			"Research synthesis is updated as new studies, reports, and developments emerge. Last major update: February 2026.",
	},
	{
		title: "Multi-perspective",
		description:
			"We present all credible positions on active debates. Where experts disagree, we show you the disagreement rather than picking sides.",
	},
	{
		title: "Uncertainty acknowledged",
		description:
			"We are explicit about what the evidence does and does not show. Honest gaps and limitations are stated clearly, not hidden.",
	},
];

export default function ResearchLibrary() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1">
				{/* Hero */}
				<section className="px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
					<p className="text-sm font-medium text-accent-2 uppercase tracking-wide mb-4">
						Research Library
					</p>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						AI Safety Research Library
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-4 leading-relaxed">
						Curated, continuously updated research synthesis covering the organizations, debates,
						evidence, and concepts that define AI safety.
					</p>
					<p className="text-base text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
						We synthesize research from dozens of institutions, cite every source, present all sides
						of active debates, and update continuously as the field evolves. This is not a static
						library — it is a living document.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/research/debates"
							className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
						>
							Explore the debates
						</Link>
						<Link
							href="/research/orgs"
							className="inline-flex items-center justify-center px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
						>
							Browse organizations
						</Link>
					</div>
				</section>

				{/* Research Section Cards */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold text-center mb-4">Research sections</h2>
					<p className="text-center text-muted mb-12 max-w-2xl mx-auto">
						Four sections covering the breadth of AI safety research, from technical debates to
						economic evidence.
					</p>
					<div className="grid md:grid-cols-2 gap-6">
						{researchSections.map((section) => (
							<Link
								key={section.href}
								href={section.href}
								className="p-6 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors flex flex-col"
							>
								<div className="flex items-center justify-between mb-3">
									<h3 className="text-lg font-semibold">{section.title}</h3>
									<span className="text-xs text-accent font-medium bg-highlight px-2 py-1 rounded">
										{section.count}
									</span>
								</div>
								<p className="text-sm text-muted leading-relaxed flex-1">{section.description}</p>
								<span className="text-accent text-sm font-medium mt-4">Explore &rarr;</span>
							</Link>
						))}
					</div>
				</section>

				{/* Methodology */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold text-center mb-4">Our research methodology</h2>
						<p className="text-center text-muted mb-12 max-w-2xl mx-auto">
							We believe transparency about methodology is as important as the research itself. Here
							is how we work.
						</p>
						<div className="grid sm:grid-cols-2 gap-6">
							{methodologyPoints.map((point) => (
								<div key={point.title} className="p-6 rounded-lg border border-border bg-surface">
									<h3 className="font-semibold mb-2">{point.title}</h3>
									<p className="text-sm text-muted leading-relaxed">{point.description}</p>
								</div>
							))}
						</div>
						<div className="text-center mt-8">
							<Link
								href="/about/methodology"
								className="text-accent text-sm font-medium hover:underline"
							>
								Read our full methodology &rarr;
							</Link>
						</div>
					</div>
				</section>

				{/* Quick Links */}
				<section className="px-6 py-16 max-w-4xl mx-auto">
					<h2 className="text-2xl font-semibold text-center mb-4">Not sure where to start?</h2>
					<p className="text-center text-muted mb-10 max-w-2xl mx-auto">
						Choose your path based on what you need right now.
					</p>
					<div className="grid sm:grid-cols-3 gap-6 text-center">
						<div className="p-6">
							<p className="font-semibold mb-2">&ldquo;I want to understand the debates&rdquo;</p>
							<p className="text-sm text-muted mb-4">
								Seven active disagreements in AI safety, with all sides presented.
							</p>
							<Link
								href="/research/debates"
								className="text-accent text-sm font-medium hover:underline"
							>
								Active debates &rarr;
							</Link>
						</div>
						<div className="p-6">
							<p className="font-semibold mb-2">&ldquo;I want the economic data&rdquo;</p>
							<p className="text-sm text-muted mb-4">
								Detailed evidence on job displacement, wages, and wealth concentration.
							</p>
							<Link
								href="/research/evidence"
								className="text-accent text-sm font-medium hover:underline"
							>
								Economic evidence &rarr;
							</Link>
						</div>
						<div className="p-6">
							<p className="font-semibold mb-2">
								&ldquo;I want to know who is working on this&rdquo;
							</p>
							<p className="text-sm text-muted mb-4">
								Directory of 44+ organizations working on AI safety worldwide.
							</p>
							<Link
								href="/research/orgs"
								className="text-accent text-sm font-medium hover:underline"
							>
								Organizations &rarr;
							</Link>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
