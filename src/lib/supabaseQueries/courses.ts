import { supabase } from "@/supabaseClient";

export const fetchCoursesByFaculty = async (facultyId: string) => {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .eq("faculty_id", facultyId);

  if (error) throw error;
  return data;
};