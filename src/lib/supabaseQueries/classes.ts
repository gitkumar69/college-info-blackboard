import { supabase } from "@/supabaseClient";

export const fetchClassesBySemester = async (semester: number) => {
  const { data, error } = await supabase
    .from("classes")
    .select("*")
    .eq("semester", semester);

  if (error) throw error;
  return data;
};