import { supabase } from "@/supabaseClient";

export const getStudents = async () => {
  const { data, error } = await supabase.from("students").select("*");
  if (error) {
    console.error("Error fetching students:", error);
  }
  return { data, error };
};