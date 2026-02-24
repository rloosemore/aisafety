import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Universal Basic Income — Action Pathway | AISafety.org",
	description:
		"Join UBI campaigns and movements as AI automates more work. Evidence from dozens of pilots, active organizations to join, and concrete steps you can take today.",
};

export default function UBIPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1">
				{/* Hero */}
				<section className="px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
					<p className="text-sm font-medium text-accent-2 mb-4">
						<Link href="/act" className="hover:underline">
							Action Pathways
						</Link>{" "}
						/ Universal Basic Income
					</p>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						Universal Basic Income
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
						If AI eliminates tens of millions of jobs, some form of universal income support will
						become not a luxury but a necessity. The question is whether we build the infrastructure
						now, or scramble after the crisis hits.
					</p>
				</section>

				{/* What UBI Is */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<article className="prose">
						<h2 className="text-2xl font-semibold mb-4">What UBI Is and Why It Matters</h2>
						<p>
							Universal Basic Income is a regular cash payment given to every person,
							unconditionally. No means test, no work requirement, no bureaucratic gatekeeping. The
							idea has supporters across the political spectrum because it addresses a simple truth:
							in an economy where AI and automation are capturing more and more of the value that
							workers used to earn, people need a floor to stand on.
						</p>
						<p>
							UBI is not a silver bullet. It does not by itself address structural inequality, the
							housing crisis, or who controls AI development. But it provides the economic stability
							that makes everything else possible: the ability to retrain, to organize, to start a
							business, to leave an exploitative job, to take care of your family while you figure
							out what comes next.
						</p>
					</article>
				</section>

				{/* Evidence */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-8">What the Evidence Shows</h2>
						<p className="text-muted mb-8 max-w-3xl">
							Dozens of pilots across Finland, Germany, Kenya, India, the US, and elsewhere have
							produced consistent findings. Here is what the research actually says.
						</p>

						<div className="grid md:grid-cols-2 gap-6 mb-10">
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">People do not quit working</h3>
								<p className="text-muted text-sm">
									Germany&apos;s three-year study (2021-2024) found participants worked an average
									of 40 hours per week&mdash;identical to the control group. The Stockton SEED
									program saw full-time employment increase among recipients.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Money goes to essentials</h3>
								<p className="text-muted text-sm">
									Across every major study, recipients spent cash on rent, food, transportation, and
									bills. The myth of frivolous spending has been debunked repeatedly.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Mental health improves</h3>
								<p className="text-muted text-sm">
									Reduced stress, anxiety, and depression are the most consistent findings across
									all studies. Finland, Germany, Stockton, and Kenya all confirm this.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Some effects fade over time</h3>
								<p className="text-muted text-sm">
									The OpenResearch study (3,000 participants, $1,000/month for 3 years) found
									well-being improvements faded by year three. UBI alone may not be sufficient.
									Honest assessment matters.
								</p>
							</div>
						</div>

						<h3 className="text-xl font-semibold mb-4">Landmark Developments</h3>
						<div className="space-y-4">
							<div className="p-4 rounded-lg border border-border bg-surface">
								<p className="font-medium">
									Marshall Islands: First Nationwide UBI (November 2025)
								</p>
								<p className="text-muted text-sm mt-1">
									Every resident Marshallese citizen receives quarterly payments of approximately
									$200, with no means test and no work requirement. The first permanent, nationwide
									UBI program in the world.
								</p>
							</div>
							<div className="p-4 rounded-lg border border-border bg-surface">
								<p className="font-medium">
									Cook County, IL: First Permanent US Program (November 2025)
								</p>
								<p className="text-muted text-sm mt-1">
									After a pilot where 75% of participants felt more financially secure and 70%
									reported reduced stress, Cook County approved $7.5 million for a permanent
									guaranteed income program.
								</p>
							</div>
							<div className="p-4 rounded-lg border border-border bg-surface">
								<p className="font-medium">Over 150 US Cities Have Guaranteed Income Programs</p>
								<p className="text-muted text-sm mt-1">
									The Mayors for a Guaranteed Income coalition includes nearly 180 mayors. The
									Stanford Basic Income Lab tracks 30+ active pilots across the country.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Current Campaigns */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-6">Campaigns and Organizations to Join</h2>
					<p className="text-muted mb-8 max-w-3xl">
						You do not need to start from scratch. These organizations are already doing the work
						and they need your support.
					</p>

					<div className="grid md:grid-cols-2 gap-6">
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-1">Basic Income Earth Network (BIEN)</h3>
							<p className="text-sm text-accent-2 mb-2">Global</p>
							<p className="text-muted text-sm mb-3">
								The global hub for basic income advocacy with 70+ affiliates across 33 countries.
								Volunteer, attend the 2026 Congress at UPenn, or join your local affiliate.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-1">Mayors for a Guaranteed Income</h3>
							<p className="text-sm text-accent-2 mb-2">United States</p>
							<p className="text-muted text-sm mb-3">
								Coalition of nearly 180 US mayors. Check if your city has a pilot or advocate for
								one. Now expanded to include state legislators and counties.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-1">GiveDirectly</h3>
							<p className="text-sm text-accent-2 mb-2">Global</p>
							<p className="text-muted text-sm mb-3">
								Runs the world&apos;s largest and longest UBI study in Kenya (23,000+ recipients).
								Your donation directly funds cash transfers to people in extreme poverty.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-1">USBIG Network</h3>
							<p className="text-sm text-accent-2 mb-2">United States</p>
							<p className="text-muted text-sm mb-3">
								Free membership open to anyone. Join the general assembly, attend the annual
								Congress, and access the Income Movement Toolkit.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-1">UBI Works</h3>
							<p className="text-sm text-accent-2 mb-2">Canada</p>
							<p className="text-muted text-sm mb-3">
								Canada&apos;s leading basic income advocacy organization. Use their tools to contact
								your provincial representatives with pre-written letters.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-1">Unconditional Basic Income Europe (UBIE)</h3>
							<p className="text-sm text-accent-2 mb-2">Europe</p>
							<p className="text-muted text-sm mb-3">
								400+ active members across 30+ European countries. Preparing a European
								Citizens&apos; Initiative for UBI expected to launch in 2026, aiming for one million
								signatures.
							</p>
						</div>
					</div>
				</section>

				{/* How to Advocate */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-6">How to Advocate for UBI</h2>
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<h3 className="font-semibold mb-3">Contact Your Representatives</h3>
								<ul className="space-y-2 text-muted text-sm">
									<li className="flex gap-2">
										<span className="text-accent font-bold flex-shrink-0">1.</span>
										Find your representative at house.gov or senate.gov
									</li>
									<li className="flex gap-2">
										<span className="text-accent font-bold flex-shrink-0">2.</span>
										Ask them to co-sponsor H.R. 5830 (Guaranteed Income Pilot Program Act of 2025)
									</li>
									<li className="flex gap-2">
										<span className="text-accent font-bold flex-shrink-0">3.</span>
										Reference the 20+ academic studies showing guaranteed income increases financial
										stability
									</li>
									<li className="flex gap-2">
										<span className="text-accent font-bold flex-shrink-0">4.</span>
										Mention Cook County as the first permanent program in the US
									</li>
								</ul>
							</div>
							<div>
								<h3 className="font-semibold mb-3">Key Legislation to Support</h3>
								<div className="space-y-3">
									<div className="p-3 rounded border border-border bg-surface">
										<p className="font-medium text-sm">
											H.R. 5830 — Guaranteed Income Pilot Program Act
										</p>
										<p className="text-muted text-xs mt-1">
											$495M/year for fiscal years 2026-2030. Would select 20,000 participants and
											payments would not count as income for federal benefit eligibility.
										</p>
									</div>
									<div className="p-3 rounded border border-border bg-surface">
										<p className="font-medium text-sm">
											European Citizens&apos; Initiative for UBI
										</p>
										<p className="text-muted text-xs mt-1">
											Campaign for one million signatures to push basic income at the EU level. UBIE
											is coordinating the 2026 launch.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* What You Can Do Right Now */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-6">What You Can Do Right Now</h2>
					<ol className="space-y-4">
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">1</span>
							<div>
								<p className="font-medium">Sign a petition (2 minutes)</p>
								<p className="text-muted text-sm mt-1">
									Search &ldquo;UBI petition&rdquo; on ActionNetwork.org or MoveOn.org. If you are
									in Europe, support the European Citizens&apos; Initiative through UBIE.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">2</span>
							<div>
								<p className="font-medium">Contact your representative (10 minutes)</p>
								<p className="text-muted text-sm mt-1">
									Call or write your congressional representative. Ask them to co-sponsor H.R. 5830.
									Personal stories about economic insecurity are powerful.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">3</span>
							<div>
								<p className="font-medium">Join a UBI organization (15 minutes)</p>
								<p className="text-muted text-sm mt-1">
									USBIG offers free membership. BIEN has volunteer opportunities. Your local Mayors
									for GI chapter may need advocates.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">4</span>
							<div>
								<p className="font-medium">Check if your city has a pilot (5 minutes)</p>
								<p className="text-muted text-sm mt-1">
									The Stanford Guaranteed Income Dashboard tracks 30+ US pilots. If your city
									doesn&apos;t have one, advocate with your mayor&apos;s office to start one.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">5</span>
							<div>
								<p className="font-medium">Fund cash transfers directly (any amount)</p>
								<p className="text-muted text-sm mt-1">
									GiveDirectly sends 100% of donations to recipients in extreme poverty. It is one
									of the most directly impactful uses of money in the UBI space.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">6</span>
							<div>
								<p className="font-medium">Stay informed (ongoing)</p>
								<p className="text-muted text-sm mt-1">
									Follow Basic Income Today for daily UBI news. Listen to The Basic Income Show
									podcast. Track pilots through the Stanford dashboard.
								</p>
							</div>
						</li>
					</ol>
				</section>

				{/* Honest Assessment */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-2xl font-semibold mb-4">An Honest Assessment</h2>
						<article className="prose">
							<p>
								UBI is not inevitable and it is not easy. A meaningful UBI for US adults would cost
								approximately $3.8-4 trillion per year. No country has fully implemented a
								nationwide program at scale. The political obstacles are real: it faces opposition
								from both left and right.
							</p>
							<p>
								But the evidence from dozens of pilots is genuinely encouraging. And the
								forward-looking argument is compelling: if AI eliminates tens of millions of jobs,
								some form of universal income support becomes not optional but necessary. The most
								realistic near-term path is expanding guaranteed income programs, building on the
								Cook County model, and generating evidence at scale through federal legislation like
								H.R. 5830.
							</p>
							<p>
								UBI alone is insufficient. It works best alongside other action pathways: collective
								bargaining for AI protections, worker ownership of AI systems, policy reform, and
								community resilience. These are not competing strategies. They reinforce each other.
							</p>
						</article>
					</div>
				</section>

				{/* Cross Links */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-6">Related Pathways</h2>
					<div className="grid md:grid-cols-3 gap-6">
						<Link
							href="/act/policy"
							className="p-6 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors"
						>
							<h3 className="font-semibold mb-2">Policy & Legislation</h3>
							<p className="text-muted text-sm">Push for the laws that make UBI possible.</p>
							<span className="text-accent text-sm font-medium mt-2 inline-block">
								Learn more &rarr;
							</span>
						</Link>
						<Link
							href="/act/local"
							className="p-6 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors"
						>
							<h3 className="font-semibold mb-2">Local Action</h3>
							<p className="text-muted text-sm">
								Advocate for guaranteed income pilots in your city.
							</p>
							<span className="text-accent text-sm font-medium mt-2 inline-block">
								Learn more &rarr;
							</span>
						</Link>
						<Link
							href="/act/organize"
							className="p-6 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors"
						>
							<h3 className="font-semibold mb-2">Collective Action</h3>
							<p className="text-muted text-sm">
								Unions are bargaining for protections UBI alone cannot provide.
							</p>
							<span className="text-accent text-sm font-medium mt-2 inline-block">
								Learn more &rarr;
							</span>
						</Link>
					</div>
					<div className="mt-8 text-center">
						<Link
							href="/act"
							className="inline-flex items-center justify-center px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
						>
							&larr; All Action Pathways
						</Link>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
