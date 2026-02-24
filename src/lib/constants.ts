export const SITE_CONFIG = {
	name: "AISafety.org",
	tagline: "Navigate AI Safety with Clarity",
	description:
		"Understand what matters in AI safety and what to do next. A trusted orientation platform for researchers, engineers, policymakers, and anyone working on AI safety.",
	url: process.env.NEXT_PUBLIC_SITE_URL || "https://aisafety.org",
} as const;

export const NAV_ITEMS = [
	{ label: "Map", href: "/map", description: "AI Safety Field Map" },
	{ label: "Learn", href: "/learn", description: "Reading Paths & Concepts" },
	{ label: "Research", href: "/research", description: "Research Library" },
	{ label: "Digest", href: "/digest", description: "Weekly Signal Digest" },
	{ label: "Blog", href: "/blog", description: "Analysis & Commentary" },
] as const;
