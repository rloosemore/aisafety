import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Revenue Transparency — Funding | AISafety.org",
	description:
		"How AISafety.org is funded, where the money goes, and what we will never do. Full revenue transparency because editorial independence requires it.",
};

export default function FundingPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1 px-6 py-16 max-w-3xl mx-auto">
				<article className="prose">
					<p className="text-sm font-medium text-accent-2 uppercase tracking-wide">About</p>
					<h1>Revenue Transparency</h1>

					<p>
						You deserve to know how this site is funded, because funding shapes incentives, and
						incentives shape content. This page is our commitment to full financial transparency.
					</p>

					<h2>Our revenue model</h2>
					<p>
						AISafety.org is funded by subscriptions — memberships purchased directly by the people
						who use the site. That is it.
					</p>
					<p>
						This model is deliberate. When our revenue comes from our readers, our incentive is to
						be useful and trustworthy. When revenue comes from advertisers, the incentive is to
						maximize attention. When it comes from corporate sponsors, the incentive is to avoid
						uncomfortable truths. When it comes from grants with strings, the incentive is to align
						with the funder&apos;s agenda.
					</p>
					<p>Subscriptions align our incentives with yours.</p>

					<h2>Why this matters</h2>
					<p>
						A site about AI&apos;s impact on jobs and wealth cannot be funded by the companies doing
						the displacing. A site about policy solutions cannot be funded by entities with policy
						positions. A site that asks you to trust its analysis cannot have hidden financial
						conflicts.
					</p>
					<p>
						Editorial independence is not a branding exercise. It is the structural foundation that
						makes our content worth reading.
					</p>

					<h2>Current revenue</h2>
					<p>
						We will publish real numbers here when we launch paid tiers. Until then, here is what we
						can share: this project is currently self-funded and pre-revenue. Development costs are
						borne by the founding team.
					</p>
					<p>When paid tiers launch, we will publish:</p>
					<ul>
						<li>Total monthly revenue</li>
						<li>Number of paying members (by tier)</li>
						<li>Monthly costs (hosting, tools, services)</li>
						<li>Any other income sources</li>
					</ul>
					<p>We aim to update these numbers quarterly, publicly, on this page.</p>

					<h2>What we will never do</h2>
					<ul>
						<li>
							<strong>Sell user data.</strong> Not to advertisers, not to researchers, not to
							anyone. Your data is not our product.
						</li>
						<li>
							<strong>Run ads.</strong> Advertising creates incentives to maximize pageviews and
							engagement, not accuracy and usefulness.
						</li>
						<li>
							<strong>Accept corporate sponsorships.</strong> No &ldquo;brought to you by&rdquo;
							content, no sponsored sections, no paid placements.
						</li>
						<li>
							<strong>Accept funding that compromises editorial independence.</strong> If a grant or
							donation comes with content expectations, we will not take it.
						</li>
						<li>
							<strong>Paywall action pathways.</strong> How to organize, who to contact, where to
							get involved — this is always free. Revenue comes from depth and tools, never from
							access to action.
						</li>
					</ul>

					<h2>Our costs</h2>
					<p>Running this platform costs money. The main expenses are:</p>
					<ul>
						<li>
							<strong>Hosting and infrastructure</strong> — servers, database, CDN, domain
						</li>
						<li>
							<strong>Research capacity</strong> — time spent monitoring developments, verifying
							sources, updating content
						</li>
						<li>
							<strong>Development</strong> — building and maintaining the platform, community tools,
							dashboards
						</li>
						<li>
							<strong>Services</strong> — email delivery, analytics (privacy-respecting), payment
							processing
						</li>
					</ul>
					<p>
						As the platform grows, so will costs. Sustainable revenue is what allows us to maintain
						and improve the site over time rather than letting it decay.
					</p>

					<h2>The bottom line</h2>
					<p>
						We are building something that earns revenue from being useful, not from exploiting
						fear, selling attention, or serving corporate interests. If that model works, it proves
						that honest, independent information about AI can sustain itself. If it does not work,
						we would rather shut down than compromise.
					</p>

					<div className="mt-12 pt-8 border-t border-border not-prose">
						<Link
							href="/pricing"
							className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
						>
							See our pricing
						</Link>
					</div>
				</article>
			</main>
			<Footer />
		</div>
	);
}
