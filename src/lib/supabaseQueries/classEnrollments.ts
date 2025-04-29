import { supabase } from "@/supabaseClient";

export const fetchClassEnrollments = async (classId: string) => {
  const { data, error } = await supabase
    .from("class_enrollments")
    .select("*")
    .eq("class_id", classId);

  if (error) throw error;
  return data;
};