import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: {
		default: "AISafety.org — Navigate AI Safety with Clarity",
		template: "%s | AISafety.org",
	},
	description:
		"Understand what matters in AI safety and what to do next. A trusted orientation platform for researchers, engineers, policymakers, and anyone working on AI safety.",
	keywords: [
		"AI safety",
		"AI ethics",
		"AI alignment",
		"AI governance",
		"AI risk",
		"machine learning safety",
	],
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://aisafety.org",
		siteName: "AISafety.org",
		title: "AISafety.org — Navigate AI Safety with Clarity",
		description:
			"Understand what matters in AI safety and what to do next. A trusted orientation platform for researchers, engineers, policymakers, and anyone working on AI safety.",
	},
	twitter: {
		card: "summary_large_image",
		title: "AISafety.org — Navigate AI Safety with Clarity",
		description: "Understand what matters in AI safety and what to do next.",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<a href="#main-content" className="skip-to-content">
					Skip to content
				</a>
				{children}
			</body>
		</html>
	);
}
