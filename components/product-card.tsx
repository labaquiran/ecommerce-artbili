"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/utils/types";
import { useState } from "react";
import productPlaceholder from "@/public/product-placeholder.jpg";
import AddToCartBtn from "@//components/add-to-cart-btn";

interface ProductCartProps {
  product: Product;
  isLoggedIn: boolean;
}

export default function ProductCard({ product, isLoggedIn }: ProductCartProps) {
  const { id, name, image_url, price } = product;
  const [src, setSrc] = useState(image_url || productPlaceholder);

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
          <Link href={`/${id}`} className="text-xl font-bold">
            {name}
          </Link>
          <p className="text-2xl font-bold">{price}</p>
        </div>
        {isLoggedIn && (
          <div className="flex items-end">
            <AddToCartBtn
              id={id}
              image_url={image_url}
              name={name}
              price={price}
            />
          </div>
        )}
      </div>
    </div>
  );
}
