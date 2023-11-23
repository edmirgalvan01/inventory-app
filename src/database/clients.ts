import { supabase } from "./supabase";

export async function getClients() {
  const { error, data } = await supabase.from("clients").select("*");

  if (error) {
    return { success: false, error: error.message, data: null };
  } else {
    return { success: true, data: data, error: null };
  }
}
