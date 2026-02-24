import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Organization Directory — Action Pathway | AISafety.org",
	description:
		"Find organizations to join, support, or volunteer with. Unions, cooperatives, UBI campaigns, policy organizations, legal advocacy, open-source projects, and research organizations.",
};

const categories = [
	{
		title: "Worker Organizing",
		pathway: "/act/organize",
		orgs: [
			{
				name: "AFL-CIO Technology Institute",
				description:
					"Labor movement hub for technology research and education. Launched the Workers First Initiative on AI in 2025.",
				involve: "Support through your union affiliation; follow their AI resources",
			},
			{
				name: "Communications Workers of America (CWA)",
				description:
					"Established an AI Committee in 2023 with comprehensive principles for bargaining and policy. Organizes tech workers through Alphabet Workers Union-CWA.",
				involve: "Contact for organizing guidance if you work in tech or communications",
			},
			{
				name: "NewsGuild-CWA",
				description:
					"Won landmark POLITICO arbitration establishing 60-day notice before AI deployment. 43 contracts now include AI protections.",
				involve: "Join if you work in journalism or digital media",
			},
			{
				name: "Tech Workers Coalition",
				description:
					"Cross-company organizing body for tech workers concerned about the social impact of their work. Does not require formal union membership.",
				involve: "Join their community and participate in campaigns",
			},
			{
				name: "Coworker.org",
				description:
					"Platform enabling workers to launch campaigns at their workplaces without formal union structures.",
				involve: "Start or join a campaign at your workplace",
			},
		],
	},
	{
		title: "UBI Campaigns",
		pathway: "/act/ubi",
		orgs: [
			{
				name: "Basic Income Earth Network (BIEN)",
				description:
					"Global hub for basic income advocacy with 70+ affiliates across 33 countries. Next Congress: July 2026 at UPenn.",
				involve: "Volunteer at basicincome.org/volunteer-for-bien",
			},
			{
				name: "Mayors for a Guaranteed Income",
				description:
					"Coalition of nearly 180 US mayors. Expanded to include state legislators and counties.",
				involve: "Check if your city has a program; advocate for one if not",
			},
			{
				name: "GiveDirectly",
				description:
					"Runs the world's largest and longest UBI study in Kenya (23,000+ recipients). Also operates in Malawi and Liberia.",
				involve: "Donate to directly fund cash transfers to people in extreme poverty",
			},
			{
				name: "Economic Security Project",
				description:
					"Cofounded by Natalie Foster and Chris Hughes. Funded the Stockton SEED program and many other guaranteed income pilots.",
				involve: "Support their research and advocacy",
			},
			{
				name: "USBIG Network",
				description:
					"Free membership open to anyone. Hosts the annual North American Basic Income Guarantee Congress.",
				involve: "Join for free at usbig.net/membership",
			},
		],
	},
	{
		title: "AI Policy Organizations",
		pathway: "/act/policy",
		orgs: [
			{
				name: "Algorithmic Justice League",
				description:
					"Founded by Joy Buolamwini. Combines research with advocacy to fight algorithmic bias and promote equitable AI.",
				involve: "Follow their campaigns; support their policy advocacy",
			},
			{
				name: "AI Now Institute",
				description:
					"Based at NYU. Researches social implications of AI with emphasis on corporate power, rights, and accountability.",
				involve: "Read their annual reports; cite their research in public comments",
			},
			{
				name: "Electronic Frontier Foundation (EFF)",
				description:
					"Leading digital civil liberties organization. Active on AI privacy, surveillance, and free expression issues.",
				involve: "Become a member; use their action alerts for legislative campaigns",
			},
			{
				name: "Americans for Responsible Innovation",
				description:
					"Mobilized 60,000+ Americans in 2025 to protect state AI safety enforcement rights. Coordinates legislative coalitions.",
				involve: "Join their advocacy campaigns",
			},
			{
				name: "Encode Justice",
				description:
					"Youth-led global organization. Helped pass California SB 53, a landmark AI transparency law.",
				involve: "Ideal for young people wanting to engage in AI policy",
			},
		],
	},
	{
		title: "Tech Worker Cooperatives",
		pathway: "/act/ownership",
		orgs: [
			{
				name: "US Federation of Worker Cooperatives",
				description:
					"Nearly 450 member organizations representing 15,000+ workers. Maintains the most comprehensive US co-op directory.",
				involve: "Search their directory; join as a member at usworker.coop",
			},
			{
				name: "Platform Cooperativism Consortium",
				description:
					"Based at The New School in NYC. Supports platform cooperatives worldwide with research, education, and advocacy.",
				involve: "Browse their directory at platform.coop; attend their events",
			},
			{
				name: "Democracy at Work Institute",
				description:
					"Provides education and resources for starting and growing worker cooperatives.",
				involve: "Access their guides at institute.coop; attend Co-op Clinic sessions",
			},
			{
				name: "Seed Commons",
				description:
					"National network of non-extractive loan funds. Over $101M invested in cooperatives with 99% going to low-income workers.",
				involve: "Apply for funding if starting a cooperative",
			},
			{
				name: "Start.coop",
				description:
					"Cooperative equity group and accelerator providing funding, mentorship, and resources specifically for cooperative enterprises.",
				involve: "Apply to their accelerator program",
			},
		],
	},
	{
		title: "Community Resilience Networks",
		pathway: "/act/local",
		orgs: [
			{
				name: "New Economy Coalition",
				description:
					"Network of over 200 member organizations building solidarity economy infrastructure across the US.",
				involve: "Search their member directory at neweconomy.net for local organizations",
			},
			{
				name: "Transition Network",
				description:
					"Over 1,400 communities in 50+ countries building local resilience through food, energy, and economic initiatives.",
				involve: "Find or start a Transition initiative at transitionnetwork.org",
			},
			{
				name: "Mutual Aid Hub",
				description: "Directory connecting people to mutual aid networks across the United States.",
				involve: "Find existing networks at mutualaidhub.org; start one if none exists",
			},
			{
				name: "Detroit Community Technology Project",
				description:
					"Trains neighborhood leaders to build and maintain community-governed technology infrastructure.",
				involve: "Adapt their Digital Stewards model for your community",
			},
		],
	},
	{
		title: "Legal Advocacy",
		pathway: "/act/legal",
		orgs: [
			{
				name: "Sustainable Economies Law Center",
				description:
					"Legal resources for cooperatives and mutual aid. Publishes the Mutual Aid Toolkit and cooperative formation guides.",
				involve: "Access free legal resources at theselc.org",
			},
			{
				name: "Authors Guild",
				description:
					"Leading advocacy organization for writers, actively challenging AI companies' use of copyrighted material for training.",
				involve: "Join if you are a published writer; support their legal efforts",
			},
			{
				name: "ACLU",
				description:
					"Bringing civil liberties challenges to AI-driven surveillance, discrimination, and government overreach.",
				involve: "Support their AI and civil liberties campaigns",
			},
			{
				name: "Center for Democracy and Technology",
				description:
					"Research and advocacy on AI impacts on civil rights, workers, and democratic processes.",
				involve: "Follow their AI and work research; cite in public comments",
			},
		],
	},
	{
		title: "Open-Source AI Projects",
		pathway: "/act/open-source",
		orgs: [
			{
				name: "EleutherAI",
				description:
					"Grassroots research collective producing open-source AI models, training datasets, and interpretability research.",
				involve: "Contribute to their projects on GitHub; join their Discord",
			},
			{
				name: "Hugging Face",
				description:
					"Platform hosting 250,000+ model cards with 5M+ users. The de facto commons for sharing AI models and datasets.",
				involve: "Use their platform; contribute models and datasets",
			},
			{
				name: "Open Source Initiative",
				description: "Defining standards for open-source AI through multi-stakeholder processes.",
				involve: "Participate in their standards development process",
			},
			{
				name: "AI Alliance",
				description:
					"International coalition led by IBM and Meta supporting open, safe, responsible AI development.",
				involve: "Follow their work and support open AI standards",
			},
		],
	},
	{
		title: "AI Safety Research Organizations",
		pathway: "/act/directory",
		orgs: [
			{
				name: "Center for AI Safety (CAIS)",
				description:
					"Technical AI safety research and public advocacy. Published the widely-signed Statement on AI Risk.",
				involve: "Follow their research; support their public communication efforts",
			},
			{
				name: "Future of Life Institute",
				description:
					"Publishes the AI Safety Index grading major labs. Advocates for AI regulation and funds existential risk research.",
				involve: "Sign their campaigns; follow the AI Safety Index",
			},
			{
				name: "Partnership on AI",
				description:
					"Multi-stakeholder organization bringing together industry, civil society, and academia for responsible AI guidelines.",
				involve: "Follow their governance priority frameworks",
			},
			{
				name: "Centre for the Governance of AI (GovAI)",
				description:
					"Oxford-affiliated research center producing rigorous AI governance research. Alumni in governments and major AI companies worldwide.",
				involve: "Read their research; apply for their Summer Fellowship",
			},
			{
				name: "80,000 Hours",
				description:
					"Evidence-based career advice for high-impact work, with AI safety as a top priority area.",
				involve: "Use their career guides if considering work in AI safety",
			},
		],
	},
];

export default function DirectoryPage() {
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
						/ Organization Directory
					</p>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						Organization Directory
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
						Real organizations doing real work. Find one to join, support, or volunteer with. These
						are the groups building alternatives and fighting for accountability.
					</p>
				</section>

				{/* Quick Nav */}
				<section className="px-6 pb-8 max-w-5xl mx-auto">
					<div className="flex flex-wrap gap-2 justify-center">
						{categories.map((cat) => (
							<a
								key={cat.title}
								href={`#${cat.title.toLowerCase().replace(/\s+/g, "-")}`}
								className="text-sm px-3 py-1.5 border border-border rounded-full hover:bg-white hover:border-accent transition-colors text-muted"
							>
								{cat.title}
							</a>
						))}
					</div>
				</section>

				{/* Categories */}
				{categories.map((category, index) => (
					<section
						key={category.title}
						id={category.title.toLowerCase().replace(/\s+/g, "-")}
						className={`px-6 py-16 ${index % 2 === 0 ? "bg-surface-raised border-t border-b border-border" : ""}`}
					>
						<div className="max-w-5xl mx-auto">
							<div className="flex items-center justify-between mb-6">
								<h2 className="text-2xl font-semibold">{category.title}</h2>
								{category.pathway !== "/act/directory" && (
									<Link
										href={category.pathway}
										className="text-sm text-accent font-medium hover:underline"
									>
										Learn more &rarr;
									</Link>
								)}
							</div>
							<div className="space-y-4">
								{category.orgs.map((org) => (
									<div
										key={org.name}
										className="p-5 rounded-lg border border-border bg-surface hover:border-accent/50 transition-colors"
									>
										<h3 className="font-semibold mb-1">{org.name}</h3>
										<p className="text-muted text-sm mb-2">{org.description}</p>
										<p className="text-sm">
											<span className="font-medium text-accent-2">Get involved:</span>{" "}
											<span className="text-muted">{org.involve}</span>
										</p>
									</div>
								))}
							</div>
						</div>
					</section>
				))}

				{/* Suggest an Organization */}
				<section className="px-6 py-16 bg-surface-raised border-t border-border">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-2xl font-semibold mb-4">Know an organization we should include?</h2>
						<p className="text-muted leading-relaxed mb-6">
							This directory is continuously updated. If you know of an organization working on AI
							accountability, worker rights, democratic AI, or community resilience that should be
							listed here, we want to hear about it.
						</p>
						<Link
							href="/community"
							className="inline-flex items-center justify-center px-6 py-3 bg-accent-2 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
						>
							Suggest an Organization
						</Link>
					</div>
				</section>

				{/* Cross Links */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-6">Explore All Action Pathways</h2>
					<div className="grid md:grid-cols-4 gap-4">
						<Link
							href="/act/ubi"
							className="p-4 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors text-center"
						>
							<p className="font-semibold text-sm">UBI</p>
						</Link>
						<Link
							href="/act/ownership"
							className="p-4 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors text-center"
						>
							<p className="font-semibold text-sm">Worker Ownership</p>
						</Link>
						<Link
							href="/act/organize"
							className="p-4 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors text-center"
						>
							<p className="font-semibold text-sm">Collective Action</p>
						</Link>
						<Link
							href="/act/policy"
							className="p-4 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors text-center"
						>
							<p className="font-semibold text-sm">Policy</p>
						</Link>
						<Link
							href="/act/local"
							className="p-4 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors text-center"
						>
							<p className="font-semibold text-sm">Local Action</p>
						</Link>
						<Link
							href="/act/legal"
							className="p-4 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors text-center"
						>
							<p className="font-semibold text-sm">Legal</p>
						</Link>
						<Link
							href="/act/open-source"
							className="p-4 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors text-center"
						>
							<p className="font-semibold text-sm">Open Source</p>
						</Link>
						<Link
							href="/act"
							className="p-4 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors text-center"
						>
							<p className="font-semibold text-sm">All Pathways</p>
						</Link>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
