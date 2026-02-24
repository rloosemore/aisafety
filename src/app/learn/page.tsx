import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Learn AI Safety",
	description:
		"Structured reading paths and concept explainers for understanding AI safety, tailored to your background and goals.",
};

export default function LearnPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1 px-6 py-16 max-w-5xl mx-auto">
				<h1 className="text-3xl font-bold mb-4">Learn AI Safety</h1>
				<p className="text-lg text-muted mb-8 max-w-2xl">
					Structured reading paths and concept explainers tailored to your role and goals. Choose a
					path to get started.
				</p>

				<div className="grid md:grid-cols-2 gap-6">
					<PathCard
						title="For Engineers"
						description="Practical AI safety for software engineers building ML systems."
						href="/learn/paths/engineers"
					/>
					<PathCard
						title="For Researchers"
						description="Orientation for entering alignment and safety research."
						href="/learn/paths/researchers"
					/>
					<PathCard
						title="For Policymakers"
						description="AI governance, regulation, and risk frameworks."
						href="/learn/paths/policy"
					/>
					<PathCard
						title="Getting Started"
						description="New to AI safety? Start here for a broad overview."
						href="/learn/paths/getting-started"
					/>
				</div>
			</main>
			<Footer />
		</div>
	);
}

function PathCard({
	title,
	description,
	href,
}: {
	title: string;
	description: string;
	href: string;
}) {
	return (
		<a
			href={href}
			className="block p-6 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors"
		>
			<h2 className="text-lg font-semibold mb-2">{title}</h2>
			<p className="text-muted">{description}</p>
		</a>
	);
}
