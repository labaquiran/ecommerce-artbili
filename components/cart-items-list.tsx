import { CartProduct } from "@/utils/types";
import Image from "next/image";

interface CartItemsListProps {
  items: CartProduct[];
}

export default function CartItemsList({ items }: CartItemsListProps) {
  return (
    <div className="">
      {items.map((product) => (
        <div
          key={product.id}
          className="flex flex-col justify-center items-center p-4 bg-white"
        >
          <div className="flex justify-between items-center w-full">
            <div>
              <Image
                src={product.image_url}
                alt="product display"
                width={50}
                height={25}
              />
              <p>{product.name}</p>
              <span>{product.quantity}</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>{product.price}</p>
              <div className="flex gap-2 ">
                <button className="px-2 rounded bg-gray-400 cursor-pointer">
                  -
                </button>
                <button className="px-2 rounded bg-gray-400 cursor-pointer">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
