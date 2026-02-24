import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "AI Safety Field Map",
	description:
		"A structured, continuously updated map of AI safety subfields, organizations, debates, and entry points.",
};

export default function MapPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1 px-6 py-16 max-w-5xl mx-auto">
				<h1 className="text-3xl font-bold mb-4">AI Safety Field Map</h1>
				<p className="text-lg text-muted mb-8 max-w-2xl">
					A structured overview of the AI safety landscape — subfields, organizations, active
					debates, methodologies, and entry points.
				</p>

				<div className="rounded-lg border border-border bg-surface-raised p-8 text-center">
					<p className="text-muted">
						The interactive field map is under active development. Check back soon, or{" "}
						<a href="/newsletter" className="text-accent underline">
							subscribe to the newsletter
						</a>{" "}
						to be notified when it launches.
					</p>
				</div>
			</main>
			<Footer />
		</div>
	);
}
