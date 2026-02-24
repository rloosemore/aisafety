import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "AI Safety Organizations | AISafety.org",
	description:
		"Directory of 44+ organizations working on AI safety: dedicated research labs, industry safety teams, policy groups, academic centers, government bodies, and civil society organizations.",
};

type Org = {
	name: string;
	focus: string;
	description: string;
	category: string;
};

const categories = [
	{
		id: "dedicated-research",
		title: "Dedicated AI Safety Research",
		description:
			"Organizations whose primary mission is AI safety research. These range from theoretical alignment work to empirical evaluation and risk assessment.",
		orgs: [
			{
				name: "Machine Intelligence Research Institute (MIRI)",
				focus: "Alignment research, mathematical foundations",
				description:
					"Founded in 2000, one of the oldest organizations focused on long-term AI safety. Conducts technical research on aligning smarter-than-human AI systems with human values, with a focus on agent foundations and decision theory.",
				category: "Nonprofit",
			},
			{
				name: "Alignment Research Center (ARC)",
				focus: "Theoretical alignment, neural network behavior",
				description:
					"Founded by Paul Christiano. Pursues theoretical research on producing formal mechanistic explanations of neural network behavior. Reported accelerating progress in 2025, their fastest period of advancement since 2022.",
				category: "Nonprofit",
			},
			{
				name: "METR (Model Evaluation and Threat Research)",
				focus: "AI capability and risk evaluations",
				description:
					"Spun out of ARC Evals in December 2023. Conducts research and evaluations to improve understanding of frontier AI capabilities and risks. Advises AI developers and governments on risk assessment methodologies.",
				category: "Nonprofit",
			},
			{
				name: "Center for AI Safety (CAIS)",
				focus: "Technical safety research, risk communication",
				description:
					"Founded in 2022 in San Francisco. Gained widespread attention for its Statement on AI Risk signed by hundreds of researchers. Conducts research in both technical AI safety and AI ethics.",
				category: "Nonprofit",
			},
			{
				name: "Redwood Research",
				focus: "Threat assessment and mitigation",
				description:
					"A small, focused lab of approximately 10 researchers working on identifying and addressing potential failure modes in advanced AI. Known for adversarial training research and causal scrubbing.",
				category: "Nonprofit",
			},
			{
				name: "Conjecture",
				focus: "Interpretability, conceptual alignment",
				description:
					"An AI safety company working on interpretability and conceptual alignment research. Has raised at least $10M in funding for research on interpretability methods and alignment theory.",
				category: "For-profit",
			},
			{
				name: "Apollo Research",
				focus: "AI deception detection, behavioral evaluations",
				description:
					"Focuses on reducing dangerous capabilities in advanced AI systems, especially deceptive behaviors. Designs model evaluations and conducts interpretability research on deceptive alignment risks.",
				category: "Nonprofit",
			},
			{
				name: "FAR.AI",
				focus: "Adversarial robustness, safety research",
				description:
					"Conducts safety research with a focus on adversarial robustness. In 2025, demonstrated that leading frontier models have guardrails that can be easily removed while preserving response quality.",
				category: "Nonprofit",
			},
			{
				name: "Epoch AI",
				focus: "AI trends, compute forecasting, data analysis",
				description:
					"A multidisciplinary research institute investigating the trajectory and impact of AI. Publishes datasets, data visualizations, and predictive models analyzing forces shaping AI development.",
				category: "Nonprofit",
			},
			{
				name: "SaferAI",
				focus: "Risk management, governance research",
				description:
					"Governance and research nonprofit focused on AI risk management. Conducts the analysis behind the Future of Life Institute's AI Safety Index. Works to incentivize responsible AI practices.",
				category: "Nonprofit",
			},
		] as Org[],
	},
	{
		id: "industry-safety",
		title: "Industry Safety Teams",
		description:
			"Major AI labs with dedicated safety and alignment research teams. These organizations both develop frontier AI systems and conduct safety research.",
		orgs: [
			{
				name: "Anthropic",
				focus: "Alignment science, responsible scaling",
				description:
					"Founded in 2021 by former OpenAI researchers. Develops Claude while conducting extensive safety research. Alignment Science team works on interpretability, alignment evaluations, and responsible scaling. Pioneered Constitutional AI.",
				category: "Public benefit corporation",
			},
			{
				name: "Google DeepMind",
				focus: "Frontier safety, interpretability",
				description:
					"Maintains dedicated safety teams with three main research bets: amplified oversight, frontier safety to assess catastrophic risk capabilities, and mechanistic interpretability.",
				category: "Corporate",
			},
			{
				name: "OpenAI",
				focus: "Safety, alignment, preparedness",
				description:
					"Develops GPT and o-series models while maintaining safety and alignment teams. Participated in a 2025 joint alignment evaluation exercise with Anthropic testing for sycophancy, self-preservation, and misuse.",
				category: "Capped-profit",
			},
			{
				name: "Meta AI (FAIR)",
				focus: "Open AI research, responsible development",
				description:
					"Develops open-source Llama models and conducts research on responsible AI development. Emphasizes open-source safety research and community-driven safety improvements.",
				category: "Corporate",
			},
		] as Org[],
	},
	{
		id: "policy-governance",
		title: "Policy and Governance",
		description:
			"Think tanks, research centers, and organizations shaping AI governance through research, policy analysis, and advocacy.",
		orgs: [
			{
				name: "Centre for the Governance of AI (GovAI)",
				focus: "AI governance research, talent development",
				description:
					"Produces rigorous governance research and fosters talent at Oxford. Alumni have gone on to influential roles in governments across the US, UK, and EU, major AI companies, and prominent think tanks.",
				category: "Nonprofit / Oxford",
			},
			{
				name: "Center for Security and Emerging Technology (CSET)",
				focus: "AI governance, national security",
				description:
					"Based at Georgetown University. Studies the security implications of emerging technologies. Published work examining how regulators can govern AI effectively and whether new legal powers are needed.",
				category: "University research center",
			},
			{
				name: "AI Now Institute",
				focus: "Social implications, corporate accountability",
				description:
					"Founded at NYU. Researches social implications of AI with emphasis on rights, liberties, and corporate accountability. Focuses on concentration of power in the AI industry.",
				category: "Nonprofit / NYU",
			},
			{
				name: "RAND Corporation",
				focus: "AI policy, socioeconomic impacts",
				description:
					"Provides research on benefits, challenges, and policy implications of AI adoption. Work spans risk assessment for AI loss-of-control incidents, emergency response, and comprehensive policy analysis.",
				category: "Nonprofit think tank",
			},
			{
				name: "Carnegie Endowment for International Peace",
				focus: "International AI governance",
				description:
					"Examines AI safety through an international lens, studying AI safety as a global public good and analyzing the future of international scientific assessments of AI risk.",
				category: "Nonprofit endowment",
			},
			{
				name: "Rethink Priorities",
				focus: "AI strategy, catastrophic risk research",
				description:
					"Conducts decision-oriented research to reduce global catastrophic risks. In 2026, launching a dedicated AI Strategy team focused on informing policy and strategic choices around transformative AI.",
				category: "Nonprofit",
			},
		] as Org[],
	},
	{
		id: "academic",
		title: "Academic Programs",
		description:
			"University-based research centers conducting interdisciplinary AI safety research and training the next generation of researchers.",
		orgs: [
			{
				name: "CHAI — UC Berkeley",
				focus: "Human-compatible AI, value alignment",
				description:
					"Founded by Stuart Russell. Multi-university research center focusing on ensuring AI systems are beneficial to humans. Research spans inverse reinforcement learning, cooperative AI, and human-AI interaction.",
				category: "University center",
			},
			{
				name: "Centre for the Study of Existential Risk (CSER) — Cambridge",
				focus: "Existential risk research",
				description:
					"Based at the University of Cambridge. Multidisciplinary center studying existential risks to civilization, with AI as a major research strand. Brings together scientists, philosophers, and policy researchers.",
				category: "University center",
			},
			{
				name: "Stanford HAI",
				focus: "Human-centered AI, AI Index, policy",
				description:
					"Conducts interdisciplinary research with a human-centered focus. Produces the influential annual AI Index Report and convenes policy discussions on AI governance.",
				category: "University institute",
			},
			{
				name: "Cambridge AI Safety Hub (CAISH)",
				focus: "Existential risk reduction, community building",
				description:
					"Brings together students and professionals at Cambridge to reduce existential risks from advanced AI. Serves as a hub for research, education, and community-building.",
				category: "University-affiliated",
			},
		] as Org[],
	},
	{
		id: "government",
		title: "Government Bodies",
		description:
			"National and international government institutions working on AI safety evaluation, standards, and regulation. An international network of AI Safety Institutes was established following the 2024 AI Seoul Summit.",
		orgs: [
			{
				name: "UK AI Security Institute (AISI)",
				focus: "Model evaluations, frontier safety",
				description:
					"Established within UK government. Renamed from AI Safety Institute in February 2025. Has tested 16 models including at least three frontier models ahead of public launch, with 1.8 million attempts to break safeguards.",
				category: "UK Government",
			},
			{
				name: "US CAISI (formerly US AISI)",
				focus: "AI standards, safety evaluation",
				description:
					"Housed within NIST. Renamed in June 2025, shifting from safety research toward evaluating innovation while ensuring national security standards. Coordinates the AI Safety Institute Consortium (AISIC).",
				category: "US Government",
			},
			{
				name: "EU AI Office",
				focus: "EU AI Act implementation",
				description:
					"Oversees implementation and enforcement of the EU AI Act, the world's first comprehensive AI regulation. Works to ensure AI systems meet safety and fundamental rights requirements.",
				category: "European Commission",
			},
			{
				name: "Japan AI Safety Institute (JAISI)",
				focus: "Safety evaluation, standards development",
				description:
					"Established as part of the international network of AI Safety Institutes agreed at the 2024 AI Seoul Summit. Contributes to international collaboration on safety evaluation.",
				category: "Japan Government",
			},
			{
				name: "International Network of AI Safety Institutes",
				focus: "International coordination on AI safety",
				description:
					"Comprises institutes from the UK, US, Japan, France, Germany, Italy, Singapore, South Korea, Australia, Canada, and the EU. Published the Second International AI Safety Report in February 2026.",
				category: "Multi-government",
			},
		] as Org[],
	},
	{
		id: "civil-society",
		title: "Civil Society and Advocacy",
		description:
			"Organizations working on AI safety through advocacy, field-building, grantmaking, and public engagement.",
		orgs: [
			{
				name: "Future of Life Institute (FLI)",
				focus: "Existential risk mitigation, governance advocacy",
				description:
					"Publishes the AI Safety Index (analysis by SaferAI), advocates for AI regulation, and funds research. Known for the Pause Giant AI Experiments open letter. Found all major labs receive poor safety grades.",
				category: "Nonprofit",
			},
			{
				name: "Open Philanthropy",
				focus: "AI safety grantmaking",
				description:
					"The single largest funder in the AI safety ecosystem. Deployed hundreds of millions toward AI safety research since 2014. Launched a $40M RFP for technical AI safety research in 2025 across 21 research areas.",
				category: "Philanthropic foundation",
			},
			{
				name: "80,000 Hours",
				focus: "Career guidance for high-impact work",
				description:
					"Provides evidence-based career advice with AI safety as a top priority area. Surveys AI safety organizations on hiring needs and provides technical upskilling resources.",
				category: "Nonprofit",
			},
			{
				name: "Americans for Responsible Innovation (ARI)",
				focus: "AI policy advocacy",
				description:
					"Dedicated to policy advocacy around emerging technologies. Mobilized over 60,000 Americans in 2025 to urge the Senate to protect state AI safety enforcement rights.",
				category: "Nonprofit",
			},
			{
				name: "Encode Justice",
				focus: "Youth-led AI ethics advocacy",
				description:
					"Global youth-led organization advocating for ethical AI regulation. Achieved significant legislative impact including sponsoring California SB 53, a landmark US AI safety law.",
				category: "Nonprofit",
			},
			{
				name: "EleutherAI",
				focus: "Open-source AI research, interpretability",
				description:
					"A grassroots research collective researching how AI systems make decisions, maintaining widely-used training datasets, and shaping global policy around AI safety and transparency.",
				category: "Nonprofit",
			},
			{
				name: "Partnership on AI (PAI)",
				focus: "Responsible AI, multi-stakeholder collaboration",
				description:
					"Independent nonprofit originally established by major tech companies, civil society, and academic institutions. Broadened global community in 2025 and published Six AI Governance Priorities for 2026.",
				category: "Nonprofit",
			},
		] as Org[],
	},
];

const fieldStats = [
	{ number: "44+", label: "organizations mapped" },
	{ number: "~1,100", label: "full-time equivalent safety researchers" },
	{ number: "~70", label: "organizations active in AI safety" },
	{ number: "11", label: "countries with AI Safety Institutes" },
];

function getCategoryColor(category: string): string {
	if (category.includes("Nonprofit") || category.includes("Philanthropic"))
		return "bg-accent/10 text-accent";
	if (
		category.includes("Corporate") ||
		category.includes("profit") ||
		category.includes("For-profit")
	)
		return "bg-accent-2/10 text-accent-2";
	if (category.includes("University") || category.includes("Oxford") || category.includes("NYU"))
		return "bg-warm/20 text-warm";
	if (category.includes("Government") || category.includes("Commission"))
		return "bg-ink/10 text-ink";
	return "bg-ink/5 text-muted";
}

export default function OrgsPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1">
				{/* Hero */}
				<section className="px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
					<p className="text-sm font-medium text-accent-2 uppercase tracking-wide mb-4">
						Research Library
					</p>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						Who Is Working on AI Safety
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-4 leading-relaxed">
						A directory of organizations working on AI safety across research, industry, policy,
						academia, government, and civil society. As of 2025, roughly 1,100 full-time researchers
						work on AI safety across about 70 organizations worldwide.
					</p>
					<p className="text-sm text-muted max-w-2xl mx-auto">
						This is not comprehensive — the field is growing rapidly. We focus on organizations
						whose work is relevant to understanding the AI safety landscape.
					</p>
				</section>

				{/* Field Stats */}
				<section className="px-6 pb-12 max-w-5xl mx-auto">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
						{fieldStats.map((stat) => (
							<div key={stat.label}>
								<p className="text-2xl md:text-3xl font-bold text-accent mb-1">{stat.number}</p>
								<p className="text-xs text-muted">{stat.label}</p>
							</div>
						))}
					</div>
				</section>

				{/* Jump Links */}
				<section className="px-6 pb-8 max-w-5xl mx-auto">
					<div className="flex flex-wrap gap-2 justify-center">
						{categories.map((cat) => (
							<a
								key={cat.id}
								href={`#${cat.id}`}
								className="text-xs px-3 py-1.5 rounded-full border border-border text-muted hover:text-ink hover:border-accent transition-colors"
							>
								{cat.title}
							</a>
						))}
					</div>
				</section>

				{/* Organization Categories */}
				<section className="px-6 py-8 max-w-5xl mx-auto">
					<div className="space-y-16">
						{categories.map((category) => (
							<div key={category.id} id={category.id} className="scroll-mt-24">
								<h2 className="text-2xl font-semibold mb-2">{category.title}</h2>
								<p className="text-muted mb-8 max-w-3xl">{category.description}</p>
								<div className="grid md:grid-cols-2 gap-4">
									{category.orgs.map((org) => (
										<div
											key={org.name}
											className="p-6 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors"
										>
											<div className="flex items-start justify-between gap-3 mb-2">
												<h3 className="font-semibold text-ink leading-tight">{org.name}</h3>
												<span
													className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${getCategoryColor(org.category)}`}
												>
													{org.category}
												</span>
											</div>
											<p className="text-xs text-accent-2 font-medium mb-2">{org.focus}</p>
											<p className="text-sm text-muted leading-relaxed">{org.description}</p>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Context Note */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-2xl font-semibold text-center mb-4">Important context</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">The field is growing fast</h3>
								<p className="text-sm text-muted leading-relaxed">
									Several organizations have undergone significant changes recently: Oxford&apos;s
									Future of Humanity Institute closed in April 2024; the UK and US AI Safety
									Institutes were both renamed in 2025; and seven new national institutes were
									established since the 2024 AI Seoul Summit.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Funding is concentrated</h3>
								<p className="text-sm text-muted leading-relaxed">
									Open Philanthropy remains the single largest funder in the AI safety ecosystem.
									This concentration of funding in one source has implications for research
									independence and diversity of approaches. Multiple organizations listed here
									receive Open Philanthropy support.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* CTA */}
				<section className="px-6 py-16 max-w-4xl mx-auto text-center">
					<h2 className="text-2xl font-semibold mb-4">Want to work in AI safety?</h2>
					<p className="text-muted mb-8 max-w-2xl mx-auto">
						Explore learning paths tailored to your background, from engineering to policy to
						research. The field needs diverse perspectives.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/learn/paths/researchers"
							className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
						>
							Researcher path
						</Link>
						<Link
							href="/learn/paths/engineers"
							className="inline-flex items-center justify-center px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
						>
							Engineer path
						</Link>
						<Link
							href="/learn/paths/policy"
							className="inline-flex items-center justify-center px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
						>
							Policy path
						</Link>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
