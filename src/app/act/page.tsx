import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Take Action — What You Can Do About AI | AISafety.org",
	description:
		"Concrete action pathways for people concerned about AI's impact on jobs, wealth, and power. UBI campaigns, worker ownership, organizing, policy, legal challenges, and more. All free, always.",
};

const pathways = [
	{
		symbol: "$",
		color: "text-accent",
		title: "Universal Basic Income",
		description:
			"Join campaigns for guaranteed income as AI automates more work. Over 150 US cities already have programs.",
		href: "/act/ubi",
	},
	{
		symbol: "\u2692",
		color: "text-accent-2",
		title: "Worker-Owned AI",
		description:
			"Cooperatives, ESOPs, and platform cooperativism. Who benefits from AI should include the people who build it and are affected by it.",
		href: "/act/ownership",
	},
	{
		symbol: "\u270A",
		color: "text-warm",
		title: "Collective Action",
		description:
			"Unions are winning real AI protections. 42% of European unions are already bargaining on AI. You can organize too.",
		href: "/act/organize",
	},
	{
		symbol: "\u2696",
		color: "text-accent",
		title: "Policy & Legislation",
		description:
			"Contact representatives, support legislation, participate in public comment periods. State laws are the frontline right now.",
		href: "/act/policy",
	},
	{
		symbol: "\u2302",
		color: "text-accent-2",
		title: "Local Action",
		description:
			"Mutual aid networks, timebanks, community land trusts, and local policy. Your community can act before national policy catches up.",
		href: "/act/local",
	},
	{
		symbol: "\u00A7",
		color: "text-warm",
		title: "Legal Challenges",
		description:
			"Workers' rights, anti-discrimination law, regulatory complaints, and class actions. The law is catching up to AI.",
		href: "/act/legal",
	},
	{
		symbol: "\u2691",
		color: "text-accent",
		title: "Open & Democratic AI",
		description:
			"Open-source alternatives, community-controlled infrastructure, and democratic governance of AI systems.",
		href: "/act/open-source",
	},
	{
		symbol: "\u2709",
		color: "text-accent-2",
		title: "Organization Directory",
		description:
			"Find organizations to join, support, or volunteer with. Unions, cooperatives, advocacy groups, and research organizations.",
		href: "/act/directory",
	},
];

export default function ActLanding() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1">
				{/* Hero */}
				<section className="px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						You&apos;re angry. Good.
						<br />
						<span className="text-accent-2">Here&apos;s what you can do.</span>
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
						These aren&apos;t theoretical suggestions. These are real movements, real organizations,
						real campaigns you can join today. Every pathway below is free and always will be.
					</p>
				</section>

				{/* Pathways Grid */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-8 text-center">8 Ways to Fight Back</h2>
						<div className="grid md:grid-cols-2 gap-6">
							{pathways.map((pathway) => (
								<Link
									key={pathway.href}
									href={pathway.href}
									className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors flex gap-4"
								>
									<span className={`text-2xl ${pathway.color} flex-shrink-0`} aria-hidden="true">
										{pathway.symbol}
									</span>
									<div>
										<h3 className="text-lg font-semibold mb-2">{pathway.title}</h3>
										<p className="text-muted text-sm leading-relaxed">{pathway.description}</p>
										<span className="text-accent text-sm font-medium mt-2 inline-block">
											Learn more &rarr;
										</span>
									</div>
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* Not Sure Where to Start */}
				<section className="px-6 py-16 max-w-4xl mx-auto">
					<h2 className="text-2xl font-semibold mb-8 text-center">Not sure where to start?</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-3">&ldquo;I&apos;m worried about my job&rdquo;</h3>
							<p className="text-muted text-sm mb-4">
								Start with collective action. Unions are winning concrete AI protections right now.
								If you&apos;re not in a union, you can still organize.
							</p>
							<Link href="/act/organize" className="text-accent text-sm font-medium">
								Go to Collective Action &rarr;
							</Link>
						</div>

						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-3">&ldquo;I want to change the system&rdquo;</h3>
							<p className="text-muted text-sm mb-4">
								Policy is where systemic change happens. Multiple states are passing AI legislation
								right now, and public comment periods are open.
							</p>
							<Link href="/act/policy" className="text-accent text-sm font-medium">
								Go to Policy & Legislation &rarr;
							</Link>
						</div>

						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-3">&ldquo;I want to help my community&rdquo;</h3>
							<p className="text-muted text-sm mb-4">
								Local action is the fastest path to impact. Mutual aid networks, timebanks, and
								community organizing don&apos;t wait for legislation.
							</p>
							<Link href="/act/local" className="text-accent text-sm font-medium">
								Go to Local Action &rarr;
							</Link>
						</div>

						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-3">&ldquo;I want to build alternatives&rdquo;</h3>
							<p className="text-muted text-sm mb-4">
								Worker-owned cooperatives and open-source AI offer real alternatives to corporate
								control. The cooperative economy is already $3 trillion globally.
							</p>
							<Link href="/act/ownership" className="text-accent text-sm font-medium">
								Go to Worker Ownership &rarr;
							</Link>
						</div>
					</div>
				</section>

				{/* Reinforcement */}
				<section className="px-6 py-16 bg-surface-raised border-t border-border">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-2xl font-semibold mb-4">These pathways reinforce each other</h2>
						<p className="text-muted leading-relaxed mb-6">
							Organizing strengthens your ability to push for policy change. Policy creates space
							for cooperative ownership. Local action builds the community resilience that makes
							everything else possible. UBI provides the economic floor that lets people take risks
							and organize. You don&apos;t have to pick just one.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/crisis"
								className="inline-flex items-center justify-center px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
							>
								Understand the Crisis
							</Link>
							<Link
								href="/community"
								className="inline-flex items-center justify-center px-6 py-3 bg-accent-2 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
							>
								Join the Community
							</Link>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
