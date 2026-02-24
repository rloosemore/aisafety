import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Myths vs. Reality: AI Claims from Both Sides | AISafety.org",
	description:
		"Common myths about AI — from both dismissers and doomers — tested against evidence. The real situation is serious enough without exaggeration or denial.",
};

const dismisserMyths = [
	{
		myth: "AI will create more jobs than it destroys.",
		reality:
			'It might — eventually. The WEF projects 170 million new jobs and 92 million displaced by 2030. But "net positive" masks devastating transition costs. The coal miner does not become a data scientist. 77% of new AI jobs require master\'s degrees. New roles are concentrated in different locations, industries, and demographics than the ones being lost. The historical pattern of eventual job creation offers cold comfort to someone whose career is ending now.',
		evidence:
			"WEF Future of Jobs Report 2025; LinkedIn data on 1.3M new AI roles; PwC AI Jobs Barometer showing 56% wage premium for AI skills but 7.5% job posting growth only in AI-specific roles while total postings fell 11.3%.",
		why: "The question is not whether new jobs will exist, but whether displaced workers can access them in time. Without transition support, the gap between job loss and job creation is a personal and community crisis.",
	},
	{
		myth: "Just learn to code — or upskill.",
		reality:
			'The irony: AI is coming for coding jobs too. Stanford data shows employment for young software developers is 20% below its 2022 peak. The "learn to code" advice, already patronizing to a 55-year-old copywriter, is now empirically undermined by the fact that junior coding roles are among the fastest-shrinking categories. Genuine reskilling takes years and significant resources that many displaced workers simply do not have.',
		evidence:
			'Stanford Digital Economy Lab "Canaries in the Coal Mine" (Aug 2025): 20% employment decline for young developers. CREAATIF survey: 61% of creative workers say perceived value of their work decreased. Retraining programs have mixed track records — many workers who "retrain" end up in lower-paying work.',
		why: 'Individual adaptation matters, but it is not a substitute for collective action and policy. Telling displaced workers to "just learn new skills" puts the burden entirely on the people least equipped to bear it.',
	},
	{
		myth: "This is just like previous industrial revolutions.",
		reality:
			"Previous transitions targeted specific sectors and unfolded over decades. The Industrial Revolution took roughly 50-80 years before living standards improved for ordinary workers. AI affects cognitive work across all sectors simultaneously, and diffuses faster than any prior technology — ChatGPT reached 100 million users in two months versus the roughly 100 years it took steam engines to reach peak adoption. Columbia Business School projects a labor share decline comparable to the Industrial Revolution, but potentially happening in years rather than decades.",
		evidence:
			"Columbia Business School research on AI and labor share decline; McKinsey analysis of technology diffusion rates; Stanford data showing simultaneous impact across customer service, writing, translation, coding, and financial analysis.",
		why: "Historical parallels are useful, but this time the speed and breadth of disruption are genuinely unprecedented. Using past transitions as reassurance ignores the specific characteristics that make this one different.",
	},
	{
		myth: "AI isn't that good yet.",
		reality:
			'For many practical purposes, it does not need to be. A customer service chatbot that handles 70% of queries poorly but cheaply still displaces the humans who handled them well. Klarna deployed an AI system and cut human support — then partially reversed course when quality dropped. But many companies will accept lower quality for dramatically lower cost. The relevant bar is not "as good as a human" but "good enough to be cheaper."',
		evidence:
			"Klarna AI deployment and partial reversal; Salesforce cutting ~4,000 support workers; 54,836 documented AI-attributed job cuts in 2025 despite AI systems having well-known limitations. McKinsey: 57% of U.S. work hours technically automatable with current capabilities.",
		why: "Dismissing current AI capabilities ignores the economic reality: companies are making replacement decisions based on cost, not perfection. Workers are being displaced by systems that are merely adequate.",
	},
];

const doomerMyths = [
	{
		myth: "AI will become sentient and turn evil.",
		reality:
			'Current AI systems are not sentient, do not have desires, and are not going to "wake up" and decide to harm humanity. The real risks are more mundane and more immediate: AI systems that are misaligned with human values (doing what we asked, not what we meant), AI deployed without adequate oversight, and AI concentrating power in the hands of a few. The science fiction scenario distracts from the economic and political harms happening right now.',
		evidence:
			"AAAI survey: 76% of AI researchers say current scaling approaches will not produce AGI. No credible AI researcher has claimed current systems are sentient. The genuine technical safety risks (alignment, robustness, misuse) are serious but entirely different from science fiction scenarios.",
		why: "Fear of a fictional robot apocalypse diverts attention and political energy from the real, documented harms of AI displacement and concentration of power that are happening today.",
	},
	{
		myth: "Nothing can be done.",
		reality:
			"Collective action has shaped every previous technological transition. The WGA and SAG-AFTRA won the first AI labor protections through strikes. Port workers secured a ban on full automation at 100 seaports. The EU enacted the first comprehensive AI regulation. Over 150 U.S. cities have guaranteed income programs. More than 1,000 AI-related bills were introduced in U.S. state legislatures in 2024-2025. People are not powerless — they are organizing.",
		evidence:
			"WGA 2023 contract: AI cannot be credited as a writer. ILA 2025 contract: ban on full automation at ports, 62% pay increase. EU AI Act: comprehensive regulation with fines up to 7% of global revenue. Cook County, IL: first permanent guaranteed income program in the U.S.",
		why: "Fatalism is the most useful thing for those who benefit from the status quo. The evidence shows that organized workers, engaged citizens, and responsive policymakers can shape how AI is deployed and who benefits.",
	},
	{
		myth: "AI will replace ALL jobs.",
		reality:
			"Many categories of work are resistant to automation: physical trades in unpredictable environments (plumbing, electrical, HVAC), work requiring deep human connection (healthcare, counseling, teaching), emergency response, skilled crafts, and roles requiring judgment in genuinely novel situations. MIT estimates only 12% of the U.S. labor market can be cost-effectively automated today. The ILO's primary finding is that AI's main effect is augmentation, not wholesale replacement.",
		evidence:
			"MIT: 12% of labor market cost-effectively automatable today. ILO/NASK 2025: primary effect is augmentation, not automation. WEF: projects net job growth despite significant displacement. Yale Budget Lab: no economy-wide disruption detected through December 2025.",
		why: "Overstating the threat is as dishonest as understating it. Claiming all jobs will disappear causes panic rather than productive action, and makes legitimate concerns easier to dismiss.",
	},
	{
		myth: "We should just stop developing AI.",
		reality:
			"Stopping AI development entirely is neither feasible nor, arguably, desirable. AI is being developed globally — no single country stopping would prevent others from continuing. More importantly, AI has genuine beneficial applications in medicine, science, accessibility, and solving complex problems. The realistic question is not whether AI should exist but how it is deployed, who it benefits, who controls it, and what safeguards exist. Banning AI is a political non-starter; regulating it is achievable.",
		evidence:
			"PauseAI movement advocates for pausing the most dangerous frontier models, not all AI development. The EU AI Act regulates AI by risk level rather than banning it. Even the most cautious AI safety researchers generally advocate for careful development with strong oversight, not a complete halt.",
		why: "Calls to stop AI entirely are unrealistic and make it easy to dismiss the entire AI safety and worker protection movement as fringe. Focused demands — for regulation, transition support, and fair distribution of benefits — are more effective.",
	},
];

function MythCard({
	myth,
	reality,
	evidence,
	why,
	type,
}: {
	myth: string;
	reality: string;
	evidence: string;
	why: string;
	type: "dismisser" | "doomer";
}) {
	return (
		<div className="p-6 md:p-8 rounded-lg border border-border bg-surface-raised">
			<div className="mb-4">
				<span
					className={`text-xs font-medium px-2 py-1 rounded ${
						type === "dismisser" ? "bg-highlight text-accent" : "bg-surface text-warm"
					}`}
				>
					{type === "dismisser" ? "Dismisser Myth" : "Doomer Myth"}
				</span>
			</div>
			<h3 className="text-lg font-semibold mb-4">&ldquo;{myth}&rdquo;</h3>
			<div className="space-y-4">
				<div>
					<h4 className="text-sm font-semibold text-accent-2 mb-1">The reality</h4>
					<p className="text-sm text-muted leading-relaxed">{reality}</p>
				</div>
				<div>
					<h4 className="text-sm font-semibold text-accent-2 mb-1">The evidence</h4>
					<p className="text-sm text-muted leading-relaxed">{evidence}</p>
				</div>
				<div>
					<h4 className="text-sm font-semibold text-accent-2 mb-1">Why it matters</h4>
					<p className="text-sm text-muted leading-relaxed">{why}</p>
				</div>
			</div>
		</div>
	);
}

export default function CrisisMyths() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1">
				{/* Hero */}
				<section className="px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
					<Link
						href="/crisis"
						className="text-sm text-accent hover:text-accent-hover transition-colors mb-4 inline-block"
					>
						&larr; Back to What&apos;s Happening
					</Link>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
						Myths vs. Reality
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
						The conversation about AI is full of claims — from people who insist everything will be
						fine and people who insist the world is ending. Both sides get important things wrong.
						Here is what the evidence actually supports.
					</p>
				</section>

				{/* Framing */}
				<section className="px-6 py-8 bg-surface-raised border-t border-b border-border">
					<div className="max-w-4xl mx-auto text-center">
						<p className="text-base text-ink leading-relaxed">
							We test claims from <strong>both</strong> directions.{" "}
							<span className="text-accent font-medium">Dismisser myths</span> downplay real harm.{" "}
							<span className="text-warm font-medium">Doomer myths</span> overstate threats in ways
							that are counterproductive. The truth requires rejecting both.
						</p>
					</div>
				</section>

				{/* Dismisser Myths */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<h2 className="text-2xl font-semibold mb-3">Myths that minimize the problem</h2>
					<p className="text-muted mb-8 max-w-3xl">
						These claims are often repeated by tech executives, economists focused on aggregate
						data, and commentators who have not experienced displacement firsthand. They contain
						grains of truth but miss critical nuances.
					</p>
					<div className="space-y-8">
						{dismisserMyths.map((myth) => (
							<MythCard key={myth.myth} {...myth} type="dismisser" />
						))}
					</div>
				</section>

				{/* Doomer Myths */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-2xl font-semibold mb-3">Myths that overstate the threat</h2>
						<p className="text-muted mb-8 max-w-3xl">
							These claims come from apocalyptic narratives, media sensationalism, and genuine fear.
							They reflect real anxiety but channel it in counterproductive directions — toward
							panic or fatalism instead of action.
						</p>
						<div className="space-y-8">
							{doomerMyths.map((myth) => (
								<MythCard key={myth.myth} {...myth} type="doomer" />
							))}
						</div>
					</div>
				</section>

				{/* The Real Picture */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-2xl font-semibold text-center mb-10">The real picture</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="p-6 rounded-lg border border-border bg-surface-raised">
								<h3 className="font-semibold text-accent mb-2">What is actually happening</h3>
								<ul className="text-sm text-muted space-y-2">
									<li>
										Specific sectors and demographics are experiencing documented displacement now
									</li>
									<li>Entry-level workers and freelancers are hit first and hardest</li>
									<li>Wealth from AI is concentrating at unprecedented speed</li>
									<li>
										The macro labor market has not yet collapsed, but disruption is accelerating
									</li>
									<li>Collective action is winning real protections where it is organized</li>
								</ul>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface-raised">
								<h3 className="font-semibold text-accent-2 mb-2">What is not happening</h3>
								<ul className="text-sm text-muted space-y-2">
									<li>AI is not sentient and is not going to &ldquo;wake up&rdquo;</li>
									<li>All jobs are not disappearing — many categories of work resist automation</li>
									<li>The situation is not hopeless — organized responses are already working</li>
									<li>
										Economy-wide collapse is not imminent (Yale Budget Lab data shows broad
										stability)
									</li>
									<li>Individual upskilling alone is not solving the structural problem</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Closing */}
				<section className="px-6 py-24 max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">
						The real situation is serious enough.
					</h2>
					<p className="text-lg text-muted max-w-2xl mx-auto mb-4 leading-relaxed">
						It does not need exaggeration or dismissal. Documented displacement, accelerating wealth
						concentration, and a narrowing window for policy response — these are facts that demand
						action, not panic and not denial.
					</p>
					<p className="text-base text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
						The most productive response is clear-eyed assessment followed by organized action. The
						evidence tells us what is happening. History tells us that collective action shapes how
						technological transitions unfold. The question is whether we act in time.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/act"
							className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
						>
							See what you can do
						</Link>
						<Link
							href="/crisis/jobs"
							className="inline-flex items-center justify-center px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
						>
							Review the evidence
						</Link>
					</div>
				</section>

				{/* Continue Reading */}
				<section className="px-6 py-16 bg-surface-raised border-t border-border">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-xl font-semibold mb-6">Continue reading</h2>
						<div className="grid md:grid-cols-3 gap-6">
							<Link
								href="/crisis/jobs"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">AI &amp; Employment</h3>
								<p className="text-sm text-muted">
									The full evidence on AI job displacement — documented numbers and honest caveats.
								</p>
								<span className="text-accent text-sm font-medium mt-3 inline-block">
									Read more &rarr;
								</span>
							</Link>
							<Link
								href="/crisis/wealth"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Concentration of Power</h3>
								<p className="text-sm text-muted">
									How AI wealth is concentrating and what it means for everyone else.
								</p>
								<span className="text-accent text-sm font-medium mt-3 inline-block">
									Read more &rarr;
								</span>
							</Link>
							<Link
								href="/crisis/stories"
								className="p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
							>
								<h3 className="font-semibold mb-2">Real Stories</h3>
								<p className="text-sm text-muted">
									What displacement looks like in practice — from the people experiencing it.
								</p>
								<span className="text-accent text-sm font-medium mt-3 inline-block">
									Read more &rarr;
								</span>
							</Link>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
