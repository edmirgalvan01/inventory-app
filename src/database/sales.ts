import { supabase } from "./supabase";

export async function getSales() {
  const { error, data } = await supabase.from("sales").select("*");

  if (error) {
    return { success: false, error: error.message, data: null };
  } else {
    return { success: true, data: data, error: null };
  }
}

export async function getSaleById(id: string) {
  const { error, data } = await supabase.from("sales").select("*").eq("id", id);

  if (error) {
    return { success: false, error: error.message, data: null };
  } else {
    return { success: true, data: data, error: null };
  }
}
