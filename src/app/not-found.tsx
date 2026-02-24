import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1 flex items-center justify-center px-6 py-24">
				<div className="max-w-lg text-center">
					<p className="text-6xl font-bold text-accent mb-4">404</p>
					<h1 className="text-2xl font-bold text-ink mb-4">Page not found</h1>
					<p className="text-muted leading-relaxed mb-8">
						The page you are looking for does not exist or has been moved. Here are some places to
						start:
					</p>
					<div className="grid grid-cols-2 gap-4 mb-8">
						<Link
							href="/crisis"
							className="p-4 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors text-center"
						>
							<p className="font-medium text-sm">What&apos;s Happening</p>
							<p className="text-xs text-muted mt-1">Evidence on AI&apos;s impact</p>
						</Link>
						<Link
							href="/act"
							className="p-4 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors text-center"
						>
							<p className="font-medium text-sm">Take Action</p>
							<p className="text-xs text-muted mt-1">What you can do</p>
						</Link>
						<Link
							href="/map"
							className="p-4 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors text-center"
						>
							<p className="font-medium text-sm">Field Map</p>
							<p className="text-xs text-muted mt-1">Navigate AI safety</p>
						</Link>
						<Link
							href="/learn"
							className="p-4 rounded-lg border border-border bg-surface-raised hover:border-accent transition-colors text-center"
						>
							<p className="font-medium text-sm">Learn</p>
							<p className="text-xs text-muted mt-1">Understand the landscape</p>
						</Link>
					</div>
					<Link
						href="/"
						className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
					>
						Back to home
					</Link>
				</div>
			</main>
			<Footer />
		</div>
	);
}
