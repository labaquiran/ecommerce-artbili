import { createClient } from "@/lib/supabase/server";
import ProductCard from "@/components/product-card";
import { Product } from "@/utils/types";

export default async function ProductsList() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isLoggedIn = !!user;

  const { data: products } = await supabase.from("Products").select();

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4">
      {products?.map((product: Product) => (
        <ProductCard
          key={product.id}
          product={product}
          isLoggedIn={isLoggedIn}
        />
      ))}
    </div>
  );
}
