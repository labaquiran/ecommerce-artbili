"use client";

import { Product } from "@/utils/types";
import { useCartStore } from "@/store/cartStore";

export default function AddToCartBtn({ id, image_url, name, price }: Product) {
  const addToCart = useCartStore((s) => s.addToCart);

  return (
    <button
      onClick={addToCart.bind(null, { id, image_url, name, price })}
      className="bg-blue-500 text-white p-1 rounded-full cursor-pointer whitespace-nowrap"
    >
      Add to cart
    </button>
  );
}
