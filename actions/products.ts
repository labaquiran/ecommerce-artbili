"use server";

import { createClient } from "@/lib/supabase/server";

export async function getProductById(id: string) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("Products")
      .select()
      .eq("id", id);

    if (data) {
      return data[0];
    }
  } catch (e) {
    console.log(e);
  }
}
