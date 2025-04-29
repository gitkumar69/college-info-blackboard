import { supabase } from "@/supabaseClient";

export const getUserRole = async (userId: string) => {
  const { data, error } = await supabase
    .from("user_roles")
    .select("role, ref_id")
    .eq("user_id", userId)
    .single();

  if (error) {
    console.error("Error fetching user role:", error);
  }
  return { data, error };
};