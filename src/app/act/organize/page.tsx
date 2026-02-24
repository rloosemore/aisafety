import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Collective Action — Action Pathway | AISafety.org",
	description:
		"Unions are winning real AI protections. Learn from WGA, SAG-AFTRA, and ILA victories, find your union, and organize in your workplace. Concrete steps for collective action on AI.",
};

export default function OrganizePage() {
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
						/ Collective Action
					</p>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						Collective Action
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
						Individual action is insufficient against corporate AI power. But organized workers are
						winning real protections right now. The window for action is open&mdash;and what we
						negotiate today will shape workplace AI governance for years.
					</p>
				</section>

				{/* Victories */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-4">It Works. Here&apos;s the Proof.</h2>
						<p className="text-muted mb-8 max-w-3xl">
							These are not hypothetical victories. These are enforceable contract provisions that
							real workers won through collective bargaining.
						</p>

						<div className="space-y-6">
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="text-xl font-semibold mb-1">Writers Guild of America (2023)</h3>
								<p className="text-sm text-accent-2 mb-3">Entertainment / Film &amp; TV</p>
								<ul className="space-y-2 text-muted text-sm">
									<li className="flex gap-2">
										<span className="text-accent-2 font-bold flex-shrink-0">+</span>
										AI cannot be credited as a writer. AI-generated material is not &ldquo;literary
										material&rdquo; under the contract.
									</li>
									<li className="flex gap-2">
										<span className="text-accent-2 font-bold flex-shrink-0">+</span>
										Writers cannot be forced to use AI. Using it is voluntary and cannot affect
										credits or compensation.
									</li>
									<li className="flex gap-2">
										<span className="text-accent-2 font-bold flex-shrink-0">+</span>
										Companies must disclose if materials given to writers were AI-generated.
									</li>
									<li className="flex gap-2">
										<span className="text-accent-2 font-bold flex-shrink-0">+</span>
										Training data rights reserved&mdash;exploiting writers&apos; work to train AI
										requires authorization.
									</li>
								</ul>
							</div>

							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="text-xl font-semibold mb-1">
									International Longshoremen&apos;s Association (2025)
								</h3>
								<p className="text-sm text-accent-2 mb-3">Port Workers / Logistics</p>
								<ul className="space-y-2 text-muted text-sm">
									<li className="flex gap-2">
										<span className="text-accent-2 font-bold flex-shrink-0">+</span>
										No fully automated terminals or equipment. AI, automation, and quantum computing
										banned from performing clerical functions.
									</li>
									<li className="flex gap-2">
										<span className="text-accent-2 font-bold flex-shrink-0">+</span>
										Minimum one ILA worker per gantry crane. Remote control forbidden for
										ship-to-shore cranes.
									</li>
									<li className="flex gap-2">
										<span className="text-accent-2 font-bold flex-shrink-0">+</span>
										62% pay increase for approximately 25,000 workers. Ratified with nearly 99%
										approval.
									</li>
								</ul>
							</div>

							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="text-xl font-semibold mb-1">
									SAG-AFTRA Video Game Agreement (2025)
								</h3>
								<p className="text-sm text-accent-2 mb-3">Entertainment / Video Games</p>
								<ul className="space-y-2 text-muted text-sm">
									<li className="flex gap-2">
										<span className="text-accent-2 font-bold flex-shrink-0">+</span>
										Consent and disclosure requirements for AI digital replica use.
									</li>
									<li className="flex gap-2">
										<span className="text-accent-2 font-bold flex-shrink-0">+</span>
										Performers can suspend consent for AI-generated material during strikes.
									</li>
									<li className="flex gap-2">
										<span className="text-accent-2 font-bold flex-shrink-0">+</span>
										15.17% compounded compensation increase. Ratified 95% to 5% after an 11-month
										strike.
									</li>
								</ul>
							</div>

							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="text-xl font-semibold mb-1">
									NewsGuild-CWA / POLITICO Arbitration (2025)
								</h3>
								<p className="text-sm text-accent-2 mb-3">Journalism</p>
								<ul className="space-y-2 text-muted text-sm">
									<li className="flex gap-2">
										<span className="text-accent-2 font-bold flex-shrink-0">+</span>
										60 days advance notice before deploying new AI that affects job duties.
									</li>
									<li className="flex gap-2">
										<span className="text-accent-2 font-bold flex-shrink-0">+</span>
										AI used for newsgathering must meet ethics standards and involve human
										oversight.
									</li>
									<li className="flex gap-2">
										<span className="text-accent-2 font-bold flex-shrink-0">+</span>
										43 NewsGuild contracts now include AI-related language.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* The Numbers */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-8">The Bigger Picture</h2>
					<div className="grid md:grid-cols-3 gap-6 mb-8">
						<div className="p-6 rounded-lg border border-border bg-surface-raised text-center">
							<p className="text-3xl font-bold text-accent">42%</p>
							<p className="text-muted text-sm mt-2">
								of European unions are already bargaining on AI
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised text-center">
							<p className="text-3xl font-bold text-accent">175+</p>
							<p className="text-muted text-sm mt-2">
								collective bargaining agreements with technology provisions documented by UC
								Berkeley
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised text-center">
							<p className="text-3xl font-bold text-accent">1,000+</p>
							<p className="text-muted text-sm mt-2">
								AI-related bills introduced across US states in 2024-2025
							</p>
						</div>
					</div>
					<p className="text-muted max-w-3xl">
						The AFL-CIO launched its Workers First Initiative on AI in October 2025. The TUC (UK)
						published a draft AI Bill with comprehensive worker protections. The ILO established an
						Observatory on AI and Work. This is not a future fight&mdash;it is happening now, across
						every sector.
					</p>
				</section>

				{/* How to Organize */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-6">How to Organize in Your Workplace</h2>
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<h3 className="font-semibold mb-4">If You Are Not in a Union</h3>
								<ol className="space-y-3 text-muted text-sm">
									<li className="flex gap-2">
										<span className="text-accent font-bold flex-shrink-0">1.</span>
										Talk to coworkers about shared concerns around AI and technology. Build support
										through one-on-one conversations.
									</li>
									<li className="flex gap-2">
										<span className="text-accent font-bold flex-shrink-0">2.</span>
										Form an organizing committee of trusted coworkers from different departments.
									</li>
									<li className="flex gap-2">
										<span className="text-accent font-bold flex-shrink-0">3.</span>
										Contact a union organizer for guidance. CWA organizes tech workers; SAG-AFTRA
										covers entertainment; NNU covers healthcare.
									</li>
									<li className="flex gap-2">
										<span className="text-accent font-bold flex-shrink-0">4.</span>
										Gather authorization cards (you need 30% for an NLRB election, but aim for 65%+
										before filing).
									</li>
									<li className="flex gap-2">
										<span className="text-accent font-bold flex-shrink-0">5.</span>
										File for a formal NLRB election or request voluntary recognition with majority
										evidence.
									</li>
								</ol>
								<p className="text-muted text-sm mt-4">
									Official US government guide: <strong>worker.gov/form-a-union</strong>
								</p>
							</div>
							<div>
								<h3 className="font-semibold mb-4">If You Are Already in a Union</h3>
								<ol className="space-y-3 text-muted text-sm">
									<li className="flex gap-2">
										<span className="text-accent font-bold flex-shrink-0">1.</span>
										Raise AI as a bargaining priority with your shop steward or bargaining
										committee.
									</li>
									<li className="flex gap-2">
										<span className="text-accent font-bold flex-shrink-0">2.</span>
										Document how AI is being used in your workplace: systems, data, and affected
										decisions.
									</li>
									<li className="flex gap-2">
										<span className="text-accent font-bold flex-shrink-0">3.</span>
										Propose specific contract language using model provisions from Penn State, Unite
										the Union, or UC Berkeley&apos;s Negotiating Tech database.
									</li>
									<li className="flex gap-2">
										<span className="text-accent font-bold flex-shrink-0">4.</span>
										Request information from your employer about AI systems under existing
										information rights.
									</li>
									<li className="flex gap-2">
										<span className="text-accent font-bold flex-shrink-0">5.</span>
										Build a coalition with coworkers who share concerns. Cross-department solidarity
										is powerful.
									</li>
								</ol>
							</div>
						</div>
					</div>
				</section>

				{/* Find Your Union */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-6">Find Your Union</h2>
					<div className="grid md:grid-cols-2 gap-4">
						{[
							{
								sector: "Tech / Communications",
								union: "CWA, Alphabet Workers Union-CWA",
							},
							{
								sector: "Entertainment / Media",
								union: "SAG-AFTRA, WGA, IATSE, NewsGuild-CWA",
							},
							{
								sector: "Healthcare",
								union: "National Nurses United, SEIU, AFSCME",
							},
							{
								sector: "Education",
								union: "American Federation of Teachers, NEA",
							},
							{
								sector: "Transportation / Logistics",
								union: "Teamsters, ILA",
							},
							{
								sector: "Public Sector",
								union: "AFSCME, SEIU",
							},
							{
								sector: "Video Games",
								union: "United Videogame Workers, CWA",
							},
							{
								sector: "Manufacturing / General",
								union: "Unite the Union (UK), CWA",
							},
						].map((item) => (
							<div
								key={item.sector}
								className="p-4 rounded-lg border border-border bg-surface-raised flex justify-between items-start gap-4"
							>
								<div>
									<p className="font-medium text-sm">{item.sector}</p>
									<p className="text-muted text-sm mt-1">{item.union}</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* What to Negotiate */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-6">Key AI Protections to Negotiate</h2>
						<p className="text-muted mb-6 max-w-3xl">
							Model contract language exists. You do not need to start from scratch. Here are the
							key provisions unions are winning.
						</p>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="p-5 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Advance Notice &amp; Consultation</h3>
								<p className="text-muted text-sm">
									60-day bargaining windows before AI deployment. Joint technology committees with
									union representation. Mandatory disclosure of AI systems in use.
								</p>
							</div>
							<div className="p-5 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Job Security &amp; Anti-Displacement</h3>
								<p className="text-muted text-sm">
									No-layoff clauses tied to AI. Bans on full automation of specific functions.
									Severance and retraining when AI-related job loss occurs.
								</p>
							</div>
							<div className="p-5 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Human Oversight</h3>
								<p className="text-muted text-sm">
									No automated decisions that produce detriment without human review. AI as a
									complementary tool, not a replacement. Workers&apos; right to challenge
									algorithmic decisions.
								</p>
							</div>
							<div className="p-5 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Worker Data Protections</h3>
								<p className="text-muted text-sm">
									Right to know about, access, and delete data gathered about workers. Restrictions
									on AI surveillance. Ban on emotion recognition in workplaces.
								</p>
							</div>
							<div className="p-5 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Training &amp; Transition</h3>
								<p className="text-muted text-sm">
									Employer-funded retraining when AI changes job functions. Training time
									compensated as work time. Joint education funds for AI skills development.
								</p>
							</div>
							<div className="p-5 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Compensation Protections</h3>
								<p className="text-muted text-sm">
									AI productivity gains shared through compensation increases. No reduction in pay
									or benefits due to AI adoption. Regular reviews of AI&apos;s impact on workload.
								</p>
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
								<p className="font-medium">Talk to one coworker this week</p>
								<p className="text-muted text-sm mt-1">
									Ask them how AI is affecting their work. Listen to their concerns. Organizing
									always starts with one conversation.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">2</span>
							<div>
								<p className="font-medium">Document AI in your workplace</p>
								<p className="text-muted text-sm mt-1">
									What systems are being used? What decisions do they affect? What data do they
									collect? This documentation is essential for bargaining.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">3</span>
							<div>
								<p className="font-medium">Find your sector&apos;s union</p>
								<p className="text-muted text-sm mt-1">
									Use the table above or search worker.gov. Many unions have specific AI task forces
									and can provide guidance even before you formally organize.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">4</span>
							<div>
								<p className="font-medium">Read model contract language</p>
								<p className="text-muted text-sm mt-1">
									The UC Berkeley Negotiating Tech database has 175+ contracts with technology
									provisions. Penn State and Unite the Union have published model AI provisions.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">5</span>
							<div>
								<p className="font-medium">Support worker-backed legislation</p>
								<p className="text-muted text-sm mt-1">
									Push back against federal preemption of state AI worker protections. Support bills
									that make AI adoption a mandatory bargaining subject.
								</p>
							</div>
						</li>
						<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface-raised">
							<span className="text-2xl font-bold text-accent flex-shrink-0">6</span>
							<div>
								<p className="font-medium">Join non-union organizing if no union fits</p>
								<p className="text-muted text-sm mt-1">
									Tech Workers Coalition, Coworker.org, and professional associations are all paths
									to collective action that don&apos;t require formal union membership.
								</p>
							</div>
						</li>
					</ol>
				</section>

				{/* Cross Links */}
				<section className="px-6 py-16 bg-surface-raised border-t border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-6">Related Pathways</h2>
						<div className="grid md:grid-cols-3 gap-6">
							<Link
								href="/act/policy"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Policy &amp; Legislation</h3>
								<p className="text-muted text-sm">
									The legislative fights that create space for organizing.
								</p>
								<span className="text-accent text-sm font-medium mt-2 inline-block">
									Learn more &rarr;
								</span>
							</Link>
							<Link
								href="/act/legal"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Legal Challenges</h3>
								<p className="text-muted text-sm">Workers&apos; legal rights in the age of AI.</p>
								<span className="text-accent text-sm font-medium mt-2 inline-block">
									Learn more &rarr;
								</span>
							</Link>
							<Link
								href="/act/ownership"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Worker-Owned AI</h3>
								<p className="text-muted text-sm">
									When workers own the tools, the terms change entirely.
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
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
