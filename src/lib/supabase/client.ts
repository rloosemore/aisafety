import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
	const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

	if (!supabaseUrl || !supabaseKey) {
		// Return null in development when Supabase is not configured
		// This allows the app to run without a database connection
		return null;
	}

	return createBrowserClient(supabaseUrl, supabaseKey);
}
