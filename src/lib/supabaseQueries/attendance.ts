import { supabase } from "@/supabaseClient";

export const fetchAttendanceByStudent = async (studentId: string) => {
  const { data, error } = await supabase
    .from("attendance")
    .select("*")
    .eq("student_id", studentId);

  if (error) throw error;
  return data;
};