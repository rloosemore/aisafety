import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Real Stories: How AI Displacement Affects Real People | AISafety.org",
	description:
		"Behind the statistics are real people. Composite stories based on documented patterns of AI displacement in customer service, writing, translation, software, and data entry.",
};

const stories = [
	{
		name: "Maria",
		role: "Customer Service Representative",
		industry: "Financial Technology",
		location: "Midwest U.S.",
		years: "7 years experience",
		summary:
			'After the company deployed an AI chatbot, Maria\'s team of 40 was cut to 12. The remaining workers handle only "escalated" cases — the hardest, most emotional customer problems — with no increase in pay.',
		details: [
			'Maria\'s company announced an AI chatbot that would "assist" their customer service team. At first, it triaged simple questions — password resets, billing inquiries. Within six months, management announced the bot was handling 70% of customer contacts.',
			'Her 40-person team was cut to 12. The remaining workers were reassigned to "escalation" — the complex, often emotionally charged situations the bot could not resolve. The workload intensified. The pay did not change.',
			'"They told us the bot would make our jobs easier. Instead, it took the easy part and left us with everything that makes you want to cry at the end of the day. And we\'re supposed to be grateful we still have jobs."',
			"Maria is now training for a medical coding certification in the evenings. She joined her local chapter of the Communications Workers of America, which is negotiating AI deployment language in new contracts.",
		],
		pattern:
			"Salesforce cut ~4,000 support workers after deploying AI. Klarna claimed its AI did the work of 700 employees (later partially reversed after customer satisfaction dropped). 37% of companies plan to replace workers with AI by end of 2026.",
	},
	{
		name: "David",
		role: "Freelance Writer and Content Strategist",
		industry: "Digital Media / Marketing",
		location: "East Coast U.S.",
		years: "12 years freelancing",
		summary:
			'David\'s freelance income dropped 40% in 18 months. Clients now use AI for first drafts and pay human writers less to "polish" — a fraction of the original rate for similar effort.',
		details: [
			'David built a successful freelance career over twelve years, writing for tech companies, health publications, and marketing agencies. By late 2023, he started getting a new kind of brief: "We have an AI draft. Can you clean it up?"',
			"The cleanup work paid roughly 30-40% of what original writing paid, but took nearly as long — fixing AI hallucinations, adding genuine expertise, reworking awkward phrasing into something a human would actually want to read.",
			"By mid-2025, several long-term clients stopped commissioning original work entirely. One agency that paid David $2,000 per article switched to paying $500 for AI revision. Another simply stopped responding to emails.",
			"\"The worst part isn't the money — it's watching your craft get redefined as 'editing an AI.' I spent years learning to report, to interview, to find the story. Now someone types a prompt and calls it a first draft.\"",
			"David has pivoted toward specialized content that requires deep subject matter expertise — regulatory analysis, technical documentation. He has also joined the Authors Guild, which is advocating for AI training data compensation and writer protections.",
		],
		pattern:
			"Brookings/Upwork study found freelancers in AI-exposed occupations saw 5% earnings decline. Fiverr active buyer count dropped 10% in 2024. CREAATIF survey: 55% of creative freelancers report declining compensation, 61% say perceived value of their work decreased.",
	},
	{
		name: "Yuki",
		role: "Professional Translator",
		industry: "Translation / Localization",
		location: "Pacific Northwest U.S.",
		years: "15 years in Japanese-English translation",
		summary:
			'Rates for translation work have collapsed. Agencies now send AI-generated translations for "post-editing" at a fraction of the original rate — turning skilled translators into AI proofreaders.',
		details: [
			"Yuki built a reputation as one of the top Japanese-English technical translators on the West Coast. Her clients included legal firms, medical device companies, and game studios. The work was intellectually demanding and well-compensated.",
			'Then the agencies started changing their model. Instead of sending source documents for translation, they sent machine-translated drafts for "post-editing." The rate dropped from roughly 15 cents per word to 5 cents per word — for work that still required deep linguistic knowledge to do well.',
			'"They call it post-editing, but you are essentially doing the same mental work — reading, understanding, reconstructing meaning. The AI gets the easy sentences right and mangles the ones that require actual understanding. You still need a translator. They just pay you less."',
			"Some of Yuki's colleagues left the profession entirely. Others specialized in areas where AI performs worst — legal contracts, literary prose, culturally nuanced marketing. Yuki started teaching translation courses at a local university and advocating for minimum rate standards through the American Translators Association.",
		],
		pattern:
			"Duolingo cut 10% of its contractor workforce as AI took over translation tasks. The translation industry was among the first to feel AI disruption. ILO identifies basic translation as one of the occupations at highest automation risk.",
	},
	{
		name: "James",
		role: "Junior Software Developer",
		industry: "Technology",
		location: "Southern U.S.",
		years: "2 years post-bootcamp",
		summary:
			"After completing a coding bootcamp and landing his first developer job, James was laid off eight months later. Junior developer positions have become scarce as AI coding tools handle the boilerplate work that entry-level developers used to do.",
		details: [
			"James invested $15,000 and six months in an intensive coding bootcamp after working in retail for five years. He learned JavaScript, React, and Node.js. In early 2024, he landed his first developer role at a mid-size company.",
			"Eight months later, his team of six junior developers was cut to two. Management explained that AI coding assistants had dramatically increased the productivity of senior developers, reducing the need for junior team members to handle routine implementations.",
			'"I spent months learning to write the exact kind of code that AI is now good at — forms, API integrations, CRUD operations. The bootcamp taught me to build things. Nobody told me the building part was what machines were about to do."',
			"James applied to over 200 positions in six months. Most junior roles had been eliminated or required 3-5 years of experience. Several interviewers told him they needed people who could architect systems and manage AI tools, not write code from scratch.",
			"He is now working a hybrid role doing QA testing and AI tool management — a job that did not exist two years ago. The pay is lower than his developer position. He volunteers with a local tech workers group that is building mentorship programs to help junior developers navigate the changing landscape.",
		],
		pattern:
			"Stanford Digital Economy Lab found employment for young software developers was 20% below late-2022 peak by July 2025. Employment for 22-25 year olds in AI-exposed occupations declined 16-20%. 77% of new AI jobs require master's degrees, creating barriers for bootcamp graduates.",
	},
	{
		name: "Patricia",
		role: "Data Entry and Administrative Support",
		industry: "Insurance",
		location: "Upper Midwest U.S.",
		years: "22 years at same company",
		summary:
			"Patricia's entire department of 15 was eliminated over 18 months as AI systems automated claims processing. Workers over 50 received severance but found it nearly impossible to find comparable work.",
		details: [
			"Patricia had worked at the same insurance company for 22 years. She started in the mail room and worked her way up to senior claims data processor. Her department of 15 people handled intake, categorization, and initial processing of insurance claims.",
			"In early 2024, the company began piloting an AI system for claims processing. By late 2024, management announced the system could handle 90% of standard claims. The department was phased out over 18 months, from 15 to 8 to 3 to zero.",
			"Workers received severance packages — two weeks per year of service for Patricia, amounting to 44 weeks of pay. The company offered access to a retraining program focused on AI tool management, but it required familiarity with software systems Patricia had never used.",
			'"I am 54 years old. I gave this company 22 years. They gave me a severance check and a link to an online learning platform. I don\'t need to learn to code — I need a job that values what I actually know, which is how insurance claims work from the ground up."',
			"Patricia now works part-time at a non-profit helping other displaced workers navigate unemployment benefits and job searches. She is considering community college courses in healthcare administration — one of the sectors less exposed to AI automation — but the financial pressure of reduced income makes it difficult to invest in multi-year education.",
		],
		pattern:
			"Data entry is among the highest-risk occupations across all major studies (ILO, WEF, McKinsey). 40% of employers in WEF survey expect to reduce staff due to AI. Workers over 50 face significant reemployment challenges, with new jobs often paying less and offering fewer benefits.",
	},
];

export default function CrisisStories() {
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
						Real Stories
					</h1>
					<p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
						Statistics describe trends. Stories describe lives. Behind every data point about AI
						displacement is a person figuring out what comes next.
					</p>
				</section>

				{/* Honesty Notice */}
				<section className="px-6 py-8 bg-highlight border-t border-b border-border">
					<div className="max-w-4xl mx-auto">
						<p className="text-sm text-ink leading-relaxed text-center">
							<strong>A note on honesty:</strong> The following stories are composite vignettes
							based on documented patterns of AI displacement from published research, news reports,
							and industry data. They are representative of real experiences but are not direct
							quotes from specific individuals. We have labeled them clearly because we believe you
							deserve to know exactly what you are reading.
						</p>
					</div>
				</section>

				{/* Stories */}
				<section className="px-6 py-16 max-w-5xl mx-auto">
					<div className="space-y-12">
						{stories.map((story) => (
							<div
								key={story.name}
								className="p-6 md:p-8 rounded-lg border border-border bg-surface-raised"
							>
								{/* Header */}
								<div className="mb-6">
									<div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
										<h2 className="text-xl font-semibold">{story.name}</h2>
										<span className="text-sm text-muted">{story.role}</span>
									</div>
									<div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
										<span>{story.industry}</span>
										<span>{story.location}</span>
										<span>{story.years}</span>
									</div>
								</div>

								{/* Summary */}
								<p className="text-base font-medium text-ink mb-6 leading-relaxed">
									{story.summary}
								</p>

								{/* Full Story */}
								<div className="space-y-4 mb-6">
									{story.details.map((paragraph, i) => (
										<p key={`${story.name}-p${i}`} className="text-sm text-muted leading-relaxed">
											{paragraph}
										</p>
									))}
								</div>

								{/* Documented Pattern */}
								<div className="p-4 rounded-md bg-surface border border-border">
									<p className="text-xs text-muted">
										<strong className="text-ink">Documented pattern:</strong> {story.pattern}
									</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Common Threads */}
				<section className="px-6 py-16 bg-surface-raised border-t border-b border-border">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-2xl font-semibold text-center mb-10">Common threads</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">
									AI as &ldquo;assistant&rdquo; becomes AI as replacement
								</h3>
								<p className="text-sm text-muted leading-relaxed">
									In every story, AI was initially introduced to &ldquo;help&rdquo; workers. Within
									months, it was used to justify cutting them. The assist-then-replace pattern is
									the most common trajectory of AI deployment.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Experience does not equal protection</h3>
								<p className="text-sm text-muted leading-relaxed">
									Patricia had 22 years of experience. Yuki had 15. Experience insulates against
									replacement only when the experience involves skills AI cannot replicate —
									judgment, relationship, physical adaptation.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">
									The &ldquo;just retrain&rdquo; advice falls short
								</h3>
								<p className="text-sm text-muted leading-relaxed">
									Every person in these stories is trying to adapt — certifications,
									specializations, new roles. But retraining takes time, money, and energy that
									displaced workers often do not have. The gap between &ldquo;learn new
									skills&rdquo; and &ldquo;pay rent this month&rdquo; is real.
								</p>
							</div>
							<div className="p-6 rounded-lg border border-border bg-surface">
								<h3 className="font-semibold mb-2">Collective action appears in every story</h3>
								<p className="text-sm text-muted leading-relaxed">
									Maria joined the CWA. David joined the Authors Guild. Yuki advocates through the
									ATA. James volunteers with a tech workers group. Patricia helps other displaced
									workers. None of them are facing this alone — and neither should you.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Share Your Story CTA */}
				<section className="px-6 py-24 max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-bold mb-4">Your story matters.</h2>
					<p className="text-lg text-muted max-w-2xl mx-auto mb-4 leading-relaxed">
						If AI has affected your work, your career, or your community, your experience is part of
						the evidence. Sharing it helps others understand what is happening and builds the case
						for action.
					</p>
					<p className="text-sm text-muted max-w-xl mx-auto mb-8">
						We want to feature real stories from real people — with your permission, in your own
						words, with as much or as little identifying detail as you are comfortable sharing.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/community"
							className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
						>
							Share your story
						</Link>
						<Link
							href="/act"
							className="inline-flex items-center justify-center px-6 py-3 bg-accent-2 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
						>
							Take action
						</Link>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
