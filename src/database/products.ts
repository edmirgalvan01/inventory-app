import { ProductType } from "../types";
import { supabase } from "./supabase";

export async function getProducts() {
  const { error, data } = await supabase.from("products").select("*");

  if (error) {
    return { success: false, error: error.message, data: null };
  } else {
    return { success: true, data: data, error: null };
  }
}

export async function getProductById(id: string) {
  const { error, data } = await supabase
    .from("products")
    .select("*")
    .eq("id", id);

  if (error) {
    return { success: false, error: error.message, data: null };
  } else {
    return { success: true, data: data, error: null };
  }
}

export async function updateProduct(id: string, newProduct: ProductType) {
  const { data, error } = await supabase
    .from("products")
    .update(newProduct)
    .eq("id", id)
    .select();

  if (error) {
    return { success: false, error: error.message, data: null };
  } else {
    return { success: true, data: data, error: null };
  }
}
