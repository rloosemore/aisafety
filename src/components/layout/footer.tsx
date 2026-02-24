import Link from "next/link";

const footerLinks = {
	Platform: [
		{ label: "Field Map", href: "/map" },
		{ label: "Learning Paths", href: "/learn" },
		{ label: "Research Library", href: "/research" },
		{ label: "Weekly Digest", href: "/digest" },
	],
	Resources: [
		{ label: "Blog", href: "/blog" },
		{ label: "Glossary", href: "/learn/glossary" },
		{ label: "Tools", href: "/tools" },
	],
	About: [
		{ label: "Our Approach", href: "/about" },
		{ label: "Methodology", href: "/about/methodology" },
		{ label: "Funding Transparency", href: "/about/funding" },
		{ label: "Pricing", href: "/pricing" },
	],
};

export function Footer() {
	return (
		<footer className="border-t border-border bg-surface-raised">
			<div className="max-w-6xl mx-auto px-6 py-12">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{/* Brand */}
					<div className="col-span-2 md:col-span-1">
						<Link href="/" className="font-semibold text-lg">
							AISafety.org
						</Link>
						<p className="mt-2 text-sm text-muted leading-relaxed">
							Helping you understand what matters in AI safety — and what to do next.
						</p>
					</div>

					{/* Link columns */}
					{Object.entries(footerLinks).map(([category, links]) => (
						<div key={category}>
							<h3 className="font-medium text-sm mb-3">{category}</h3>
							<ul className="space-y-2">
								{links.map((link) => (
									<li key={link.href}>
										<Link
											href={link.href}
											className="text-sm text-muted hover:text-ink transition-colors"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
					<p className="text-xs text-muted">
						&copy; {new Date().getFullYear()} AISafety.org. Content is source-cited and continuously
						updated.
					</p>
					<p className="text-xs text-muted">
						Built with transparency.{" "}
						<Link href="/about/methodology" className="underline hover:text-ink">
							See our methodology
						</Link>
						.
					</p>
				</div>
			</div>
		</footer>
	);
}
