import { supabase } from "./supabase";

export async function getProducts() {
  const { error, data } = await supabase.from("products").select("*");

  if (error) {
    return { success: false, error: error.message, data: null };
  } else {
    return { success: true, data: data, error: null };
  }
}