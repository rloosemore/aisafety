import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Analysis & Commentary | AISafety.org",
	description:
		"In-depth analysis of AI safety developments, policy changes, and what they mean for workers, communities, and society.",
};

const placeholderArticles = [
	{
		title: "What the EU AI Act Means for Workers",
		date: "Coming soon",
		category: "Policy",
		categoryColor: "bg-accent",
		description:
			"The EU AI Act is the most comprehensive AI regulation in the world. Here is what it actually requires for workplace AI — and where it falls short.",
	},
	{
		title: "Worker Cooperatives in AI: Three Models That Work",
		date: "Coming soon",
		category: "Analysis",
		categoryColor: "bg-accent-2",
		description:
			"From data labeling cooperatives to community-owned infrastructure, workers are building alternatives to corporate AI. Three models worth watching.",
	},
	{
		title: "Monthly Evidence Review: AI & Employment",
		date: "Coming soon",
		category: "Evidence Review",
		categoryColor: "bg-warm",
		description:
			"What the latest data actually shows about AI and jobs. New studies, updated statistics, and honest assessment of what we still do not know.",
	},
	{
		title: "How to Read an AI Impact Assessment",
		date: "Coming soon",
		category: "Community",
		categoryColor: "bg-accent",
		description:
			"Companies are publishing AI impact assessments. Most are incomplete. Here is how to read them critically and what to demand when they fall short.",
	},
];

export default function BlogPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1">
				{/* Hero */}
				<section className="px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						Analysis &amp; Commentary
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
						In-depth analysis of AI safety developments, policy changes, and what they mean for you.
						Evidence-based, source-cited, and regularly updated.
					</p>
				</section>

				{/* Articles Grid */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<div className="grid md:grid-cols-2 gap-6">
						{placeholderArticles.map((article) => (
							<article
								key={article.title}
								className="p-6 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors relative"
							>
								<div className="flex items-center gap-3 mb-4">
									<span
										className={`text-xs font-medium text-white px-2 py-1 rounded ${article.categoryColor}`}
									>
										{article.category}
									</span>
									<span className="text-xs text-muted">{article.date}</span>
								</div>
								<h2 className="text-lg font-semibold mb-2">{article.title}</h2>
								<p className="text-sm text-muted leading-relaxed">{article.description}</p>
								<div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-muted bg-surface px-2 py-1 rounded border border-border">
									Coming soon
								</div>
							</article>
						))}
					</div>
				</section>

				{/* What to Expect */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-2xl font-semibold text-center mb-4">What you can expect</h2>
						<p className="text-center text-muted mb-10 max-w-2xl mx-auto">
							We are building a publication grounded in evidence, not engagement metrics.
						</p>
						<div className="grid md:grid-cols-3 gap-6">
							<div className="text-center">
								<p className="font-semibold mb-2">Source-cited</p>
								<p className="text-sm text-muted">
									Every substantive claim links to its primary source. We show our work.
								</p>
							</div>
							<div className="text-center">
								<p className="font-semibold mb-2">Honest about uncertainty</p>
								<p className="text-sm text-muted">
									When experts disagree, we present all sides. When the evidence is unclear, we say
									so.
								</p>
							</div>
							<div className="text-center">
								<p className="font-semibold mb-2">Action-oriented</p>
								<p className="text-sm text-muted">
									Every analysis connects to what you can do about it. We link to action pathways.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Newsletter CTA */}
				<section className="px-6 py-16 max-w-3xl mx-auto text-center">
					<h2 className="text-2xl font-semibold mb-4">Be the first to read</h2>
					<p className="text-muted leading-relaxed mb-8">
						Sign up for the newsletter and we will let you know when we publish our first articles.
					</p>
					<Link
						href="/newsletter"
						className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
					>
						Join the newsletter
					</Link>
				</section>
			</main>
			<Footer />
		</div>
	);
}
