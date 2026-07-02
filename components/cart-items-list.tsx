import { CartProduct } from "@/utils/types";
import Image from "next/image";

interface CartItemsListProps {
  items: CartProduct[];
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeFromCart: (productId: number) => void;
}

export default function CartItemsList({
  items,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}: CartItemsListProps) {
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
            <div className="flex flex-col items-center justify-center gap-2">
              <p>{product.price}</p>
              <div className="flex gap-2 ">
                <button
                  onClick={decreaseQuantity.bind(null, product.id)}
                  className="px-2 rounded bg-gray-400 cursor-pointer"
                >
                  -
                </button>
                <button
                  onClick={increaseQuantity.bind(null, product.id)}
                  className="px-2 rounded bg-gray-400 cursor-pointer"
                >
                  +
                </button>
              </div>
              <button
                onClick={removeFromCart.bind(null, product.id)}
                className="bg-red-500 text-white px-2 cursor-pointer rounded-full"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
