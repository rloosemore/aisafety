import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Tools & Resources | AISafety.org",
	description:
		"Practical tools for AI safety evaluation, policy advocacy, and community organizing. Checklists, decision frameworks, policy trackers, and action templates.",
};

const toolCategories = [
	{
		title: "Safety Checklists",
		description:
			"Evaluation tools for assessing AI systems in your workplace. Is your employer using AI responsibly? What questions should you ask? What red flags should you watch for?",
		status: "Coming soon",
		icon: "\u2611",
	},
	{
		title: "Decision Frameworks",
		description:
			"Structured approaches to AI governance decisions. For union negotiators, city council members, school boards, and anyone making decisions about AI adoption.",
		status: "Coming soon",
		icon: "\u2261",
	},
	{
		title: "Policy Tracker",
		description:
			"Regulatory developments by jurisdiction — federal, state, and international. What has been proposed, what has passed, and where to submit public comments.",
		status: "Coming soon",
		icon: "\u2691",
	},
	{
		title: "Action Templates",
		description:
			"Letters to representatives, public comment templates, petition frameworks, and proposals you can customize and use. Written by people who do this work.",
		status: "Coming soon",
		icon: "\u270E",
	},
];

export default function ToolsPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1">
				{/* Hero */}
				<section className="px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						Tools &amp; Resources
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
						Practical tools for AI safety evaluation, policy advocacy, and community organizing.
						Built to help you take informed action.
					</p>
				</section>

				{/* Tool Cards */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<div className="grid md:grid-cols-2 gap-6">
						{toolCategories.map((tool) => (
							<div
								key={tool.title}
								className="p-6 rounded-lg border border-border bg-surface-raised"
							>
								<div className="flex items-start justify-between mb-4">
									<span className="text-2xl text-accent" aria-hidden="true">
										{tool.icon}
									</span>
									<span className="text-xs font-medium text-muted bg-surface px-3 py-1 rounded-full border border-border">
										{tool.status}
									</span>
								</div>
								<h2 className="text-lg font-semibold mb-2">{tool.title}</h2>
								<p className="text-sm text-muted leading-relaxed">{tool.description}</p>
							</div>
						))}
					</div>
				</section>

				{/* What to Expect */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-2xl font-semibold mb-4">Tools built for real use</h2>
						<p className="text-muted leading-relaxed mb-4">
							Every tool we build is designed for people doing real work — union negotiators at the
							bargaining table, organizers writing to their representatives, community members
							evaluating AI in their schools and workplaces.
						</p>
						<p className="text-muted leading-relaxed">
							We prioritize what to build based on what people actually need. If you have a
							suggestion for a tool that would help you take action, we want to hear about it.
						</p>
					</div>
				</section>

				{/* Pricing Note */}
				<section className="px-6 py-16 max-w-3xl mx-auto text-center">
					<h2 className="text-2xl font-semibold mb-4">Basic tools are free</h2>
					<p className="text-muted leading-relaxed mb-8">
						Core checklists and action templates are available to everyone. The professional toolkit
						— advanced frameworks, the full regulatory tracker, teaching materials, and customizable
						templates — is available with membership.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/newsletter"
							className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
						>
							Get notified when tools launch
						</Link>
						<Link
							href="/pricing"
							className="inline-flex items-center justify-center px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
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
