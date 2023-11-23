import { supabase } from "./supabase";

export async function getSales() {
  const { error, data } = await supabase.from("sales").select("*");

  if (error) {
    return { success: false, error: error.message, data: null };
  } else {
    return { success: true, data: data, error: null };
  }
}
