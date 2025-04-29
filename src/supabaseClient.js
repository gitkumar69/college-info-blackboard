import { createClient } from "@supabase/supabase-js";

console.log("Supabase client imported successfully");

const supabaseUrl = "https://your-supabase-url.supabase.co";
const supabaseKey = "your-supabase-key";
export const supabase = createClient(supabaseUrl, supabaseKey);
