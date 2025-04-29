import { supabase } from "@/supabaseClient";

export const fetchFacultyByDepartment = async (department: string) => {
  const { data, error } = await supabase
    .from("faculty")
    .select("*")
    .eq("department", department);

  if (error) throw error;
  return data;
};