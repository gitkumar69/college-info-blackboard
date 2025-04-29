import { supabase } from "@/supabaseClient";

export const fetchHODDetails = async (department: string) => {
  const { data, error } = await supabase
    .from("hod")
    .select("*")
    .eq("department", department);

  if (error) throw error;
  return data;
};