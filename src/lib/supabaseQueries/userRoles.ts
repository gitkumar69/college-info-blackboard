import { supabase } from "@/supabaseClient";

export const fetchUserRoles = async (userId: string) => {
  const { data, error } = await supabase
    .from("user_roles")
    .select("*")
    .eq("user_id", userId);

  if (error) throw error;
  return data;
};