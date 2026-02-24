import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Community — You're Not Alone in This | AISafety.org",
	description:
		"Connect with others who share your concerns about AI — and your determination to do something about it. Discussion, local groups, and collective action.",
};

const communityFeatures = [
	{
		title: "Discussion",
		description:
			"Thoughtful conversation about AI's impact on jobs, wealth, and society. Not a tech forum — a space for people affected by AI to share experiences, strategies, and support.",
		status: "Coming soon",
		details: [
			"Moderated for quality and respect",
			"Topic channels: jobs, policy, organizing, local action",
			"Weekly discussion threads tied to the digest",
			"Expert Q&A sessions",
		],
	},
	{
		title: "Local Groups",
		description:
			"Find or start a group near you. Local action is the fastest path to impact — from mutual aid to city council testimony to workplace organizing.",
		status: "Coming soon",
		details: [
			"Find existing groups in your area",
			"Start a new group with organizing resources",
			"Share strategies across groups",
			"Coordinate regional campaigns",
		],
	},
	{
		title: "Events & Actions",
		description:
			"Upcoming events, campaigns, and actions. Comment period deadlines, organizing calls, teach-ins, rallies, and legislative hearings.",
		status: "Coming soon",
		details: [
			"Community calendar of events",
			"Campaign coordination",
			"Shared action templates",
			"Victory tracking — celebrate wins",
		],
	},
];

const communityValues = [
	{
		title: "Respectful",
		description:
			"We disagree constructively. We challenge ideas, not people. Everyone here is worried about the same things — even when we disagree on solutions.",
	},
	{
		title: "Constructive",
		description:
			"Venting is valid, but this community is oriented toward action. We support each other in moving from frustration to strategy.",
	},
	{
		title: "Action-oriented",
		description:
			"The goal is not just to discuss — it is to organize, campaign, build, and win. Every conversation should connect to something you can do.",
	},
	{
		title: "Inclusive",
		description:
			"AI affects everyone. This community welcomes workers, students, parents, retirees, technologists, policy people, and anyone else who cares.",
	},
];

export default function CommunityPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1">
				{/* Hero */}
				<section className="px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						You&apos;re not alone in this.
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
						Connect with others who share your concerns about AI — and your determination to do
						something about it.
					</p>
				</section>

				{/* Community Features */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<div className="space-y-8">
							{communityFeatures.map((feature) => (
								<div key={feature.title} className="p-8 rounded-lg border border-border bg-surface">
									<div className="flex items-start justify-between mb-4">
										<h2 className="text-xl font-semibold">{feature.title}</h2>
										<span className="text-xs font-medium text-muted bg-surface-raised px-3 py-1 rounded-full border border-border flex-shrink-0 ml-4">
											{feature.status}
										</span>
									</div>
									<p className="text-muted leading-relaxed mb-6">{feature.description}</p>
									<ul className="grid sm:grid-cols-2 gap-2">
										{feature.details.map((detail) => (
											<li key={detail} className="flex items-start gap-2 text-sm text-muted">
												<span className="text-accent-2 mt-0.5 flex-shrink-0" aria-hidden="true">
													&#10003;
												</span>
												{detail}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Community Values */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold text-center mb-4">Community values</h2>
					<p className="text-center text-muted mb-10 max-w-2xl mx-auto">
						A good community is built on shared norms. Here are ours.
					</p>
					<div className="grid md:grid-cols-2 gap-6">
						{communityValues.map((value) => (
							<div
								key={value.title}
								className="p-6 rounded-lg border border-border bg-surface-raised"
							>
								<h3 className="font-semibold mb-2">{value.title}</h3>
								<p className="text-sm text-muted leading-relaxed">{value.description}</p>
							</div>
						))}
					</div>
				</section>

				{/* Interim CTA */}
				<section className="px-6 py-16 bg-surface-raised border-t border-border">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-2xl font-semibold mb-4">Community features are coming</h2>
						<p className="text-muted leading-relaxed mb-8">
							We are building community tools carefully — because online communities are easy to
							start and hard to sustain. Join the newsletter to be notified when community features
							launch.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/newsletter"
								className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
							>
								Join the newsletter
							</Link>
							<Link
								href="/act"
								className="inline-flex items-center justify-center px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
							>
								Take action now
							</Link>
						</div>
						<p className="text-sm text-muted mt-6">
							In the meantime, the{" "}
							<Link href="/act" className="text-accent underline">
								action pathways
							</Link>{" "}
							connect you to existing organizations and campaigns you can join today.
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
