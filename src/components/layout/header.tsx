"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
	{ label: "What's Happening", href: "/crisis" },
	{ label: "Take Action", href: "/act" },
	{ label: "Understand", href: "/map" },
	{ label: "Digest", href: "/digest" },
	{ label: "Community", href: "/community" },
];

export function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<header className="border-b border-border bg-surface-raised">
			<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
				<Link href="/" className="flex items-center gap-2 font-semibold text-lg">
					<span className="text-accent" aria-hidden="true">
						&#9632;
					</span>
					<span>AISafety.org</span>
				</Link>

				<nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm text-muted hover:text-ink transition-colors"
						>
							{item.label}
						</Link>
					))}
				</nav>

				<div className="flex items-center gap-4">
					<Link
						href="/pricing"
						className="hidden sm:inline-flex text-sm text-muted hover:text-ink transition-colors"
					>
						Pricing
					</Link>
					<Link
						href="/login"
						className="text-sm px-4 py-2 bg-accent text-white rounded-md hover:bg-accent-hover transition-colors"
					>
						Sign in
					</Link>
					<button
						type="button"
						className="md:hidden p-2 text-muted hover:text-ink transition-colors"
						onClick={() => setMobileOpen(!mobileOpen)}
						aria-expanded={mobileOpen}
						aria-label="Toggle navigation menu"
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							aria-hidden="true"
						>
							{mobileOpen ? (
								<>
									<line x1="4" y1="4" x2="16" y2="16" />
									<line x1="16" y1="4" x2="4" y2="16" />
								</>
							) : (
								<>
									<line x1="3" y1="5" x2="17" y2="5" />
									<line x1="3" y1="10" x2="17" y2="10" />
									<line x1="3" y1="15" x2="17" y2="15" />
								</>
							)}
						</svg>
					</button>
				</div>
			</div>

			{mobileOpen && (
				<nav
					className="md:hidden border-t border-border bg-surface-raised px-6 py-4"
					aria-label="Mobile navigation"
				>
					<ul className="space-y-3">
						{navItems.map((item) => (
							<li key={item.href}>
								<Link
									href={item.href}
									className="block text-sm text-muted hover:text-ink transition-colors py-1"
									onClick={() => setMobileOpen(false)}
								>
									{item.label}
								</Link>
							</li>
						))}
						<li className="pt-2 border-t border-border">
							<Link
								href="/pricing"
								className="block text-sm text-muted hover:text-ink transition-colors py-1"
								onClick={() => setMobileOpen(false)}
							>
								Pricing
							</Link>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
}
