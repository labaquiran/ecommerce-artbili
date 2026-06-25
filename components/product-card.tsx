"use client";

import Image from "next/image";
import { Product } from "@/utils/types";

export default function ProductCard({ id, image_url, name, price }: Product) {
  const handleAddToCart = (
    id: number,
    image_url: string,
    name: string,
    price: number,
  ) => {
    console.log(id, image_url, name, price);
  };

  return (
    <div className="bg-white p-4 shadow-md relative">
      <Image
        src={image_url}
        alt="img"
        width={500}
        height={500}
        className="object-cover w-full max-h-75"
      />
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          {/* <p className="text-gray-600">{product.description}</p> */}
          <p className="text-2xl font-bold">{price}</p>
        </div>
        <div className="flex items-end">
          <button
            onClick={handleAddToCart.bind(null, id, image_url, name, price)}
            className="bg-blue-500 text-white p-1 rounded-full cursor-pointer whitespace-nowrap"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
