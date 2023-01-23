const {
  VITE_SUPABASE_URL: urlSupabase,
  VITE_SUPABASE_ANON_PUBLIC: supabaseKey,
} = import.meta.env;
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(urlSupabase, supabaseKey);

export { supabase };
