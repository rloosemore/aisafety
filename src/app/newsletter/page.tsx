import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Newsletter — Stay Informed, Stay Ready | AISafety.org",
	description:
		"Weekly AI safety digest, action alerts, and evidence updates. Honest information about AI's impact — no hype, no fear-mongering.",
};

const benefits = [
	{
		title: "Weekly Signal Digest",
		description:
			"The most important AI safety developments of the week, curated and summarized in a 5-minute read.",
	},
	{
		title: "Action Alerts",
		description:
			"Open comment periods, upcoming votes, campaign deadlines, and time-sensitive opportunities to make a difference.",
	},
	{
		title: "Evidence Updates",
		description:
			"New research, updated statistics, and revised analysis. We keep the evidence base current so you do not have to.",
	},
	{
		title: "Community Highlights",
		description:
			"What members are organizing, building, and winning. Real stories from people taking real action.",
	},
];

export default function NewsletterPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1">
				{/* Hero */}
				<section className="px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						Stay Informed. Stay Ready.
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
						Honest, evidence-based information about AI&apos;s impact on jobs, wealth, and society.
						No hype. No doom. Just what you need to know and what you can do about it.
					</p>
				</section>

				{/* Signup Form */}
				<section className="px-6 py-16 max-w-2xl mx-auto">
					<div className="p-8 rounded-lg border border-border bg-surface-raised">
						<form className="space-y-4" action="#">
							<div>
								<label htmlFor="newsletter-email" className="block text-sm font-medium mb-2">
									Email address
								</label>
								<input
									id="newsletter-email"
									type="email"
									placeholder="you@example.com"
									className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
								/>
							</div>
							<button
								type="submit"
								className="w-full inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
							>
								Subscribe — it&apos;s free
							</button>
						</form>
						<p className="text-xs text-muted mt-4 text-center">
							We never share your email. Unsubscribe anytime.
						</p>
					</div>
				</section>

				{/* What You Get */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-2xl font-semibold text-center mb-10">What subscribers get</h2>
						<div className="grid md:grid-cols-2 gap-6">
							{benefits.map((benefit) => (
								<div key={benefit.title} className="p-6 rounded-lg border border-border bg-surface">
									<h3 className="font-semibold mb-2">{benefit.title}</h3>
									<p className="text-sm text-muted leading-relaxed">{benefit.description}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* What to Expect */}
				<section className="px-6 py-16 max-w-3xl mx-auto">
					<h2 className="text-2xl font-semibold text-center mb-10">What to expect</h2>
					<div className="space-y-6">
						<div className="flex gap-4">
							<span className="text-accent font-bold text-lg flex-shrink-0">1x</span>
							<div>
								<p className="font-medium">Weekly delivery</p>
								<p className="text-sm text-muted">
									One email per week, every Monday morning. Occasional action alerts when
									time-sensitive opportunities arise.
								</p>
							</div>
						</div>
						<div className="flex gap-4">
							<span className="text-accent font-bold text-lg flex-shrink-0">5m</span>
							<div>
								<p className="font-medium">5-minute read</p>
								<p className="text-sm text-muted">
									The free summary is designed to be read in five minutes. Members get the extended
									analysis for deeper reading.
								</p>
							</div>
						</div>
						<div className="flex gap-4">
							<span className="text-accent font-bold text-lg flex-shrink-0">0%</span>
							<div>
								<p className="font-medium">Zero spam</p>
								<p className="text-sm text-muted">
									No promotional emails. No third-party ads. No selling your data. The newsletter is
									the product — and it respects your inbox.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Social Proof */}
				<section className="px-6 py-16 bg-surface-raised border-t border-border">
					<div className="max-w-3xl mx-auto text-center">
						<p className="text-lg text-muted leading-relaxed">
							Join people who want honest information about AI&apos;s impact — and who are ready to
							do something about it.
						</p>
						<p className="text-xs text-muted mt-4">
							Your privacy matters. Read our approach to{" "}
							<span className="underline">data and privacy</span>.
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
