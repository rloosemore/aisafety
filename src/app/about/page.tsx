import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description:
		"AISafety.org is a trust-driven platform helping people navigate AI safety with clarity. Learn about our approach, methodology, and principles.",
};

export default function AboutPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1 px-6 py-16 max-w-3xl mx-auto">
				<article className="prose">
					<h1>About AISafety.org</h1>

					<p>
						AISafety.org helps you understand what matters in AI safety — and what to do next. We
						are an orientation platform, not an advocacy organization.
					</p>

					<h2>What we do</h2>
					<p>
						We synthesize the AI safety landscape into navigable, structured resources. We track
						subfields, organizations, debates, and methodologies so you don&apos;t have to piece it
						together yourself.
					</p>

					<h2>Our principles</h2>
					<ul>
						<li>
							<strong>Intellectual honesty</strong> — we show uncertainty and disagreement, not
							false consensus
						</li>
						<li>
							<strong>Non-alarmist</strong> — no fear-based messaging or manipulative urgency
						</li>
						<li>
							<strong>Source-cited</strong> — every substantive claim links to evidence
						</li>
						<li>
							<strong>Transparent</strong> — our methods, funding, and reasoning are public
						</li>
						<li>
							<strong>Continuously updated</strong> — living documents, not abandoned blog posts
						</li>
					</ul>

					<h2>How we sustain ourselves</h2>
					<p>
						We offer free access to our core orientation resources. Premium features — deeper
						analysis, professional tools, personalized dashboards — are available through paid
						subscriptions. We believe revenue should arise from usefulness, not from fear or
						manipulation.
					</p>
					<p>
						We are transparent about our revenue model because trust is our most important asset.
					</p>
				</article>
			</main>
			<Footer />
		</div>
	);
}
