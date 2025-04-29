import { supabase } from "@/supabaseClient";

export const fetchUserByEmail = async (email: string) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email);

  if (error) throw error;
  return data;
};