import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
	const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

	if (!supabaseUrl || !supabaseKey) {
		return null;
	}

	const cookieStore = await cookies();

	return createServerClient(supabaseUrl, supabaseKey, {
		cookies: {
			getAll() {
				return cookieStore.getAll();
			},
			setAll(
				cookiesToSet: Array<{ name: string; value: string; options?: Record<string, unknown> }>,
			) {
				for (const { name, value, options } of cookiesToSet) {
					cookieStore.set(name, value, options);
				}
			},
		},
	});
}
