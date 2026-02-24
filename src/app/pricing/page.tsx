import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Pricing — Revenue from Usefulness, Never from Fear | AISafety.org",
	description:
		"Transparent pricing for AISafety.org membership. Crisis content and action pathways are always free. Premium features support independent, evidence-based work.",
};

const tiers = [
	{
		name: "Free",
		price: "$0",
		period: "",
		tagline: "Essential information and action pathways",
		cta: "Get Started",
		ctaHref: "/login",
		ctaStyle:
			"inline-flex items-center justify-center w-full px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors",
		features: [
			"Crisis content & evidence base",
			"All action pathways & directories",
			"Field map & concept explainers",
			"Basic action templates",
			"Weekly digest summary",
			"Community (read-only)",
		],
	},
	{
		name: "Member",
		price: "$10",
		period: "/month",
		tagline: "Full analysis and community access",
		cta: "Join Today",
		ctaHref: "/login",
		ctaStyle:
			"inline-flex items-center justify-center w-full px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors",
		featured: true,
		features: [
			"Everything in Free, plus:",
			"Full weekly digest analysis",
			"Community participation",
			"Full template library",
			"Dashboard & saved items",
			"Local groups (join & create)",
		],
	},
	{
		name: "Professional",
		price: "$35",
		period: "/month",
		tagline: "Tools for policy work, teaching, and organizing",
		cta: "Go Professional",
		ctaHref: "/login",
		ctaStyle:
			"inline-flex items-center justify-center w-full px-6 py-3 bg-accent-2 text-white font-medium rounded-lg hover:opacity-90 transition-opacity",
		features: [
			"Everything in Member, plus:",
			"Professional policy briefings",
			"Full regulatory tracker",
			"Teaching materials & packs",
			"Priority community access",
			"Host events & organize",
		],
	},
];

const faqs = [
	{
		question: "Why charge at all?",
		answer:
			"Independence requires sustainable revenue. We do not take corporate sponsorships, run ads, or accept grants with editorial strings attached. Subscriptions mean our incentive is to be useful to you — not to please advertisers or funders.",
	},
	{
		question: "What is always free?",
		answer:
			"Crisis content, evidence base, action pathways, directories, the field map, and concept explainers are always free. We will never paywall information about what is happening or how to fight for your livelihood. Revenue comes from depth, tools, and community — not from access to action.",
	},
	{
		question: "Can I cancel anytime?",
		answer:
			"Yes. Cancel anytime with one click. No cancellation fees, no retention tricks, no guilt trips. If we are not useful enough to justify the cost, you should cancel.",
	},
	{
		question: "Is there a student or hardship discount?",
		answer:
			"Yes. If the cost is a barrier, email us and we will work something out. We would rather have you as a member at a reduced rate than not have you at all. No documentation required — we trust you.",
	},
	{
		question: "Where does the money go?",
		answer:
			"Hosting, research, development, and the people doing the work. We publish our revenue and costs transparently. See our funding transparency page for details.",
	},
];

export default function PricingPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1">
				{/* Hero */}
				<section className="px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
					<p className="text-sm font-medium text-accent-2 uppercase tracking-wide mb-4">Pricing</p>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						Revenue from usefulness,
						<br />
						never from fear.
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
						Action pathways are always free. Premium features fund independent, evidence-based work
						that answers to you — not to advertisers or corporate sponsors.
					</p>
				</section>

				{/* Pricing Cards */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<div className="grid md:grid-cols-3 gap-6">
						{tiers.map((tier) => (
							<div
								key={tier.name}
								className={`p-8 rounded-lg border bg-surface-raised flex flex-col ${
									tier.featured
										? "border-accent ring-2 ring-accent ring-opacity-20"
										: "border-border"
								}`}
							>
								{tier.featured && (
									<span className="text-xs font-medium text-accent mb-4">Most popular</span>
								)}
								<h2 className="text-xl font-semibold">{tier.name}</h2>
								<div className="mt-2 mb-1">
									<span className="text-4xl font-bold">{tier.price}</span>
									{tier.period && <span className="text-muted">{tier.period}</span>}
								</div>
								<p className="text-sm text-muted mb-6">{tier.tagline}</p>
								<ul className="space-y-3 mb-8 flex-1">
									{tier.features.map((feature) => (
										<li key={feature} className="flex items-start gap-2 text-sm">
											<span className="text-accent-2 mt-0.5 flex-shrink-0" aria-hidden="true">
												&#10003;
											</span>
											<span>{feature}</span>
										</li>
									))}
								</ul>
								<Link href={tier.ctaHref} className={tier.ctaStyle}>
									{tier.cta}
								</Link>
							</div>
						))}
					</div>
				</section>

				{/* Philosophy */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-2xl font-semibold mb-4">Our pricing philosophy</h2>
						<div className="space-y-4 text-muted leading-relaxed">
							<p>
								We believe that understanding what is happening with AI and knowing how to take
								action should be free. You should not have to pay to learn that your job might be at
								risk or that there are things you can do about it.
							</p>
							<p>
								We charge for depth — full analysis, professional tools, community features, and the
								research capacity to keep everything current and accurate. This is the work that
								costs money and time, and sustainable revenue is what keeps us independent.
							</p>
							<p>
								We will never use fear-based marketing, artificial urgency, or dark patterns to
								pressure you into paying. If the free tier gives you what you need, use the free
								tier. We mean it.
							</p>
						</div>
					</div>
				</section>

				{/* FAQ */}
				<section className="px-6 py-16 max-w-3xl mx-auto">
					<h2 className="text-2xl font-semibold text-center mb-10">Frequently asked questions</h2>
					<div className="space-y-8">
						{faqs.map((faq) => (
							<div key={faq.question}>
								<h3 className="font-semibold mb-2">{faq.question}</h3>
								<p className="text-sm text-muted leading-relaxed">{faq.answer}</p>
							</div>
						))}
					</div>
					<div className="mt-10 text-center">
						<Link href="/about/funding" className="text-accent text-sm font-medium">
							See our full funding transparency page &rarr;
						</Link>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
