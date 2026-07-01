"use client";

import Image from "next/image";
import { Product } from "@/utils/types";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import productPlaceholder from "@/public/product-placeholder.jpg";

export default function ProductCard({ id, image_url, name, price }: Product) {
  const [src, setSrc] = useState(image_url || productPlaceholder);
  const addToCart = useCartStore((s) => s.addToCart);

  return (
    <div className="bg-white p-4 shadow-md relative">
      <Image
        src={src}
        alt="img"
        width={500}
        height={500}
        onError={() => setSrc(productPlaceholder)}
        className="object-cover w-full max-h-75"
      />
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-2xl font-bold">{price}</p>
        </div>
        <div className="flex items-end">
          <button
            onClick={addToCart.bind(null, { id, image_url, name, price })}
            className="bg-blue-500 text-white p-1 rounded-full cursor-pointer whitespace-nowrap"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
