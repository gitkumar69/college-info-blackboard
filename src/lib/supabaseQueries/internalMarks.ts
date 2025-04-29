import { supabase } from "@/supabaseClient";

export const fetchInternalMarksByStudent = async (studentId: string) => {
  const { data, error } = await supabase
    .from("internal_marks")
    .select("*")
    .eq("student_id", studentId);

  if (error) throw error;
  return data;
};