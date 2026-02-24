import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Sign In | AISafety.org",
	description:
		"Sign in or create an account at AISafety.org. Access your dashboard, community features, and saved resources.",
};

export default function LoginPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main id="main-content" className="flex-1 flex items-center justify-center px-6 py-24">
				<div className="w-full max-w-md">
					<div className="text-center mb-8">
						<h1 className="text-2xl font-bold text-ink mb-2">Welcome to AISafety.org</h1>
						<p className="text-muted">
							Sign in to access your dashboard, community, and saved resources.
						</p>
					</div>

					<div className="p-8 rounded-lg border border-border bg-surface-raised">
						<form className="space-y-4" action="#">
							<div>
								<label htmlFor="login-email" className="block text-sm font-medium mb-2">
									Email address
								</label>
								<input
									id="login-email"
									type="email"
									placeholder="you@example.com"
									className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
								/>
							</div>
							<button
								type="submit"
								className="w-full inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
							>
								Continue with email
							</button>
						</form>

						<div className="relative my-6">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-border" />
							</div>
							<div className="relative flex justify-center text-sm">
								<span className="px-4 bg-surface-raised text-muted">or</span>
							</div>
						</div>

						<div className="space-y-3">
							<button
								type="button"
								className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
							>
								<svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
									<path
										d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
										fill="#4285F4"
									/>
									<path
										d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
										fill="#34A853"
									/>
									<path
										d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
										fill="#FBBC05"
									/>
									<path
										d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
										fill="#EA4335"
									/>
								</svg>
								Continue with Google
							</button>
							<button
								type="button"
								className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 border border-border text-ink font-medium rounded-lg hover:bg-white transition-colors"
							>
								<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
									<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
								</svg>
								Continue with GitHub
							</button>
						</div>
					</div>

					<p className="text-center text-sm text-muted mt-6">
						By signing in, you agree to our <span className="underline">terms of service</span>.
						<br />
						We never share your data. <span className="underline">See our privacy approach</span>.
					</p>

					<div className="text-center mt-4">
						<Link href="/" className="text-sm text-accent hover:text-accent-hover">
							&larr; Back to home
						</Link>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
