import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1">
				{/* Hero Section */}
				<section className="px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						AI is changing everything.
						<br />
						<span className="text-accent">Here&apos;s what&apos;s real — and what you can do.</span>
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
						Millions of people are worried about AI — their jobs, their future, the concentration of
						power in fewer and fewer hands. Those concerns are legitimate. We provide honest
						information, concrete action pathways, and a community that&apos;s doing something about
						it.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="/crisis"
							className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
						>
							What&apos;s Actually Happening
						</a>
						<a
							href="/act"
							className="inline-flex items-center justify-center px-6 py-3 bg-accent-2 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
						>
							What You Can Do
						</a>
					</div>
				</section>

				{/* Three Pillars */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<div className="grid md:grid-cols-3 gap-8">
							<PillarCard
								title="The Crisis Is Real"
								description="AI is displacing workers, concentrating wealth, and reshaping society faster than institutions can respond. We track the evidence — no panic, no denial, just what's actually happening."
								href="/crisis"
								cta="See the evidence"
							/>
							<PillarCard
								title="You Can Do Something"
								description="UBI campaigns, worker-owned AI, union organizing, policy pressure, community resilience. Real action pathways with real organizations you can join today."
								href="/act"
								cta="Find your path"
							/>
							<PillarCard
								title="Understand the Landscape"
								description="AI safety is a sprawling, confusing field. Our continuously updated field map makes it navigable — from technical alignment to economic policy."
								href="/map"
								cta="Explore the map"
							/>
						</div>
					</div>
				</section>

				{/* Why This Site Exists */}
				<section className="px-6 py-16 max-w-4xl mx-auto">
					<div className="grid md:grid-cols-2 gap-12">
						<div>
							<h3 className="text-xl font-semibold mb-4">What we believe</h3>
							<ul className="space-y-3 text-muted">
								<li className="flex gap-2">
									<span className="text-accent-2 font-bold">+</span>
									Your fear about AI and jobs is rational, not alarmist
								</li>
								<li className="flex gap-2">
									<span className="text-accent-2 font-bold">+</span>
									The benefits of AI should accrue to everyone, not just billionaires
								</li>
								<li className="flex gap-2">
									<span className="text-accent-2 font-bold">+</span>
									Anger is valid — and it&apos;s most powerful when channeled into action
								</li>
								<li className="flex gap-2">
									<span className="text-accent-2 font-bold">+</span>
									Honest information is the foundation for effective action
								</li>
								<li className="flex gap-2">
									<span className="text-accent-2 font-bold">+</span>
									Neither panic nor dismissal serves you — clarity does
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-4">Who this is for</h3>
							<ul className="space-y-3 text-muted">
								<li>Workers whose jobs are threatened by AI</li>
								<li>People angry about unchecked corporate AI power</li>
								<li>Engineers who want to build AI responsibly</li>
								<li>Policymakers navigating AI regulation</li>
								<li>Organizers building collective responses</li>
								<li>Anyone who wants to do something, not just worry</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Newsletter CTA */}
				<section className="px-6 py-16 bg-surface-raised border-t border-border">
					<div className="max-w-2xl mx-auto text-center">
						<h2 className="text-2xl font-semibold mb-4">Weekly Signal Digest</h2>
						<p className="text-muted mb-6">
							What actually matters this week in AI safety — the developments, the fights, and what
							you can do. No hype, no spam.
						</p>
						<a
							href="/newsletter"
							className="inline-flex items-center justify-center px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
						>
							Get the Digest
						</a>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

function PillarCard({
	title,
	description,
	href,
	cta,
}: {
	title: string;
	description: string;
	href: string;
	cta: string;
}) {
	return (
		<a
			href={href}
			className="block p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
		>
			<h3 className="text-lg font-semibold mb-3">{title}</h3>
			<p className="text-muted leading-relaxed mb-4">{description}</p>
			<span className="text-accent text-sm font-medium">{cta} &rarr;</span>
		</a>
	);
}
