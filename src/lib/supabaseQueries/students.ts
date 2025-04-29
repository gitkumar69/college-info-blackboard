import { supabase } from "@/supabaseClient";

export const fetchStudentsByClass = async (classId: string) => {
  const { data, error } = await supabase
    .from("students")
    .select("*")
    .eq("class_id", classId);

  if (error) throw error;
  return data;
};