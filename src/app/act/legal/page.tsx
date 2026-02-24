import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Legal Challenges — Action Pathway | AISafety.org",
	description:
		"Legal approaches to AI accountability: workers' rights, class actions, regulatory complaints, anti-discrimination law, and the right to human review. Know your rights and how to use them.",
};

export default function LegalPage() {
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
						/ Legal Challenges
					</p>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						Legal Challenges
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
						The law is catching up to AI. Workers have rights. Consumers have rights. Communities
						have rights. And there are legal tools available right now to enforce them.
					</p>
				</section>

				{/* Workers Rights */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-6">Workers&apos; Rights in the Age of AI</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Wrongful Termination</h3>
								<p className="text-muted text-sm">
									If you were fired based on an AI system&apos;s recommendation without proper human
									review, you may have grounds for a wrongful termination claim. Multiple states now
									require notification when AI is used in employment decisions. Document everything:
									the systems used, the decision-making process, and whether human oversight was
									involved.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Retraining Obligations</h3>
								<p className="text-muted text-sm">
									Some union contracts and emerging state laws require employers to offer retraining
									when AI changes job functions. The IATSE agreement provides severance and
									retraining for members who lose jobs due to AI. Check your collective bargaining
									agreement and state law for similar provisions.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Workplace Surveillance</h3>
								<p className="text-muted text-sm">
									AI-powered surveillance of workers is growing rapidly. The EU AI Act bans emotion
									recognition in workplaces. In the US, several states are considering restrictions
									on AI-powered monitoring. You may have rights to know what data your employer
									collects about you and how it is used in decisions.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Organizing Protections</h3>
								<p className="text-muted text-sm">
									Under the National Labor Relations Act, workers have the right to organize,
									including around technology issues. Employers cannot retaliate against workers for
									raising concerns about AI systems. Washington State is considering legislation to
									make AI adoption a mandatory bargaining subject for public employees.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Class Actions and Litigation */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-6">Class Actions &amp; Litigation</h2>
					<article className="prose mb-8">
						<p>
							AI companies face growing legal challenges from workers, consumers, and creators.
							While individual lawsuits can be difficult and expensive, class actions pool resources
							and create broader accountability. Key areas of active litigation include:
						</p>
					</article>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-2">Copyright &amp; IP</h3>
							<p className="text-muted text-sm">
								Multiple class action lawsuits challenge AI companies&apos; use of copyrighted
								material for training data. Writers, visual artists, musicians, and other creators
								are bringing claims against major AI companies. The Authors Guild and other
								organizations are coordinating legal strategies.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-2">Algorithmic Discrimination</h3>
							<p className="text-muted text-sm">
								AI systems used in hiring, lending, housing, and criminal justice have been shown to
								produce discriminatory outcomes. Existing anti-discrimination laws (Title VII, Fair
								Housing Act, Equal Credit Opportunity Act) apply to AI-driven decisions. California
								has confirmed AI-driven employment discrimination violates state anti-discrimination
								law.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-2">Data Privacy Violations</h3>
							<p className="text-muted text-sm">
								AI systems that collect and process personal data without adequate consent or
								security may violate state privacy laws (CCPA, Illinois BIPA), the EU GDPR, or
								sector-specific regulations (HIPAA, FERPA). Privacy violations can carry significant
								statutory damages.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-2">Consumer Protection</h3>
							<p className="text-muted text-sm">
								AI-driven deceptive practices, manipulative pricing, and false advertising may
								violate state and federal consumer protection laws. The FTC has indicated it
								considers the use of AI tools to engage in unfair or deceptive practices to be a law
								enforcement priority.
							</p>
						</div>
					</div>
				</section>

				{/* Regulatory Complaints */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-6">Regulatory Complaints</h2>
						<p className="text-muted mb-6 max-w-3xl">
							You do not need a lawyer to file a complaint with a government agency. These agencies
							investigate complaints and can bring enforcement actions against companies.
						</p>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="p-5 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">EEOC (Employment Discrimination)</h3>
								<p className="text-muted text-sm">
									If an AI system used in hiring, promotion, or termination produced discriminatory
									results based on race, sex, age, disability, or other protected characteristics,
									file a charge with the EEOC. The agency has issued guidance that employers are
									responsible for AI discrimination even when they use third-party tools.
								</p>
							</div>
							<div className="p-5 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">FTC (Unfair or Deceptive Practices)</h3>
								<p className="text-muted text-sm">
									Report AI-driven deceptive practices, manipulative dark patterns, or false claims
									about AI capabilities. The FTC has taken enforcement action against companies for
									AI misrepresentation and has warned about AI-enabled consumer harm.
								</p>
							</div>
							<div className="p-5 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">State Attorneys General</h3>
								<p className="text-muted text-sm">
									Your state attorney general can investigate companies violating consumer
									protection, privacy, or anti-discrimination laws through AI systems. Many state
									AGs have formed dedicated technology or AI units. Filing a complaint is typically
									free and can be done online.
								</p>
							</div>
							<div className="p-5 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">NLRB (Labor Rights)</h3>
								<p className="text-muted text-sm">
									If your employer retaliates against you for raising concerns about AI in the
									workplace, or refuses to bargain over AI deployment, the NLRB can investigate.
									Workers have the right to engage in concerted activity around workplace
									conditions, including AI.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Right to Human Review */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-4">Right to Human Review of AI Decisions</h2>
					<article className="prose mb-6">
						<p>
							Across nearly all enacted and proposed AI frameworks, human review remains a central
							protection. You may already have the right to have a human review decisions that an AI
							system made about you.
						</p>
					</article>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="p-5 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-2">Where It Exists</h3>
							<ul className="space-y-2 text-muted text-sm">
								<li className="flex gap-2">
									<span className="text-accent font-bold flex-shrink-0">+</span>
									Colorado AI Act: right to appeal AI-driven decisions
								</li>
								<li className="flex gap-2">
									<span className="text-accent font-bold flex-shrink-0">+</span>
									California CCPA: right to opt out of automated decision-making for significant
									decisions
								</li>
								<li className="flex gap-2">
									<span className="text-accent font-bold flex-shrink-0">+</span>
									EU AI Act: human oversight required for high-risk AI systems
								</li>
								<li className="flex gap-2">
									<span className="text-accent font-bold flex-shrink-0">+</span>
									GDPR Article 22: right not to be subject to solely automated decisions with legal
									effects
								</li>
								<li className="flex gap-2">
									<span className="text-accent font-bold flex-shrink-0">+</span>
									NYC Local Law 144: alternative assessment methods required upon request
								</li>
							</ul>
						</div>
						<div className="p-5 rounded-lg border border-border bg-surface-raised">
							<h3 className="font-semibold mb-2">Anti-Discrimination Law Applied to AI</h3>
							<p className="text-muted text-sm mb-3">
								Existing civil rights law already applies to AI decisions. If an AI system produces
								discriminatory outcomes in employment, housing, or credit, the same laws that
								prohibit human discrimination apply.
							</p>
							<ul className="space-y-2 text-muted text-sm">
								<li className="flex gap-2">
									<span className="text-accent font-bold flex-shrink-0">+</span>
									Title VII (employment discrimination)
								</li>
								<li className="flex gap-2">
									<span className="text-accent font-bold flex-shrink-0">+</span>
									Fair Housing Act (housing discrimination)
								</li>
								<li className="flex gap-2">
									<span className="text-accent font-bold flex-shrink-0">+</span>
									Equal Credit Opportunity Act (lending)
								</li>
								<li className="flex gap-2">
									<span className="text-accent font-bold flex-shrink-0">+</span>
									Americans with Disabilities Act
								</li>
							</ul>
						</div>
					</div>
				</section>

				{/* What You Can Do Right Now */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-6">What You Can Do Right Now</h2>
						<ol className="space-y-4">
							<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface">
								<span className="text-2xl font-bold text-accent flex-shrink-0">1</span>
								<div>
									<p className="font-medium">Know your state&apos;s AI laws (10 minutes)</p>
									<p className="text-muted text-sm mt-1">
										Check the NCSL AI Legislation Database for laws in your state. Know what
										protections exist and when they take effect. Colorado, Illinois, California, and
										NYC have the strongest provisions.
									</p>
								</div>
							</li>
							<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface">
								<span className="text-2xl font-bold text-accent flex-shrink-0">2</span>
								<div>
									<p className="font-medium">Document AI decisions that affect you</p>
									<p className="text-muted text-sm mt-1">
										If you are denied a job, credit, housing, or a benefit and suspect AI was
										involved, save all correspondence. Note dates, systems used, and whether you
										were notified about AI involvement. This documentation is essential for any
										legal action.
									</p>
								</div>
							</li>
							<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface">
								<span className="text-2xl font-bold text-accent flex-shrink-0">3</span>
								<div>
									<p className="font-medium">
										File a complaint when your rights are violated (30 minutes)
									</p>
									<p className="text-muted text-sm mt-1">
										EEOC complaints for employment discrimination. FTC complaints for deceptive
										practices. State AG complaints for consumer protection violations. All can be
										filed online at no cost.
									</p>
								</div>
							</li>
							<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface">
								<span className="text-2xl font-bold text-accent flex-shrink-0">4</span>
								<div>
									<p className="font-medium">Request human review when available</p>
									<p className="text-muted text-sm mt-1">
										If you live in Colorado, California, the EU, or NYC, you may have the right to
										request human review of AI decisions affecting you. Exercise these rights. The
										more people use them, the stronger they become.
									</p>
								</div>
							</li>
							<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface">
								<span className="text-2xl font-bold text-accent flex-shrink-0">5</span>
								<div>
									<p className="font-medium">Support legal advocacy organizations</p>
									<p className="text-muted text-sm mt-1">
										The Algorithmic Justice League, ACLU, EFF, and Legal Aid organizations are
										bringing cases that establish precedent for everyone. Your support helps fund
										this work.
									</p>
								</div>
							</li>
							<li className="flex gap-4 p-4 rounded-lg border border-border bg-surface">
								<span className="text-2xl font-bold text-accent flex-shrink-0">6</span>
								<div>
									<p className="font-medium">Ask employers about their AI practices</p>
									<p className="text-muted text-sm mt-1">
										You have the right to ask whether AI is being used in decisions about you. In
										Illinois and several other states, employers are legally required to disclose
										this. Asking normalizes transparency.
									</p>
								</div>
							</li>
						</ol>
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
							<h3 className="font-semibold mb-2">Policy &amp; Legislation</h3>
							<p className="text-muted text-sm">
								The laws being written now determine what legal tools you will have.
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
								Unions negotiate the contract provisions that create enforceable legal rights.
							</p>
							<span className="text-accent text-sm font-medium mt-2 inline-block">
								Learn more &rarr;
							</span>
						</Link>
						<Link
							href="/act/directory"
							className="p-6 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors"
						>
							<h3 className="font-semibold mb-2">Organization Directory</h3>
							<p className="text-muted text-sm">
								Find legal advocacy organizations to connect with.
							</p>
							<span className="text-accent text-sm font-medium mt-2 inline-block">
								Browse directory &rarr;
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
