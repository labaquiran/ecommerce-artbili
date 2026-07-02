"use client";

import { useShallow } from "zustand/shallow";
import { useCartStore } from "@/store/cartStore";
import CartItemsList from "@/components/cart-items-list";

export default function Cart() {
  const {
    items: cartItems,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCartStore(
    useShallow((state) => ({
      items: state.items,
      totalPrice: state.calcTotalPrice(),
      increaseQuantity: state.increaseQuantity,
      decreaseQuantity: state.decreaseQuantity,
      removeFromCart: state.removeFromCart,
    })),
  );

  return (
    <main className="min-h-screen bg-zinc-300 p-4">
      {cartItems.length === 0 && (
        <div className="bg-white p-4">
          <p>Your cart is empty.</p>
        </div>
      )}
      {cartItems.length > 0 && (
        <CartItemsList
          items={cartItems}
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      )}

      {totalPrice > 0 && (
        <div className="bg-white p-4 flex items-center justify-center flex-col gap-2">
          <p>Total: {totalPrice}</p>
          <button className="p-2 bg-blue-500 rounded-full text-white cursor-pointer">
            Checkout
          </button>
        </div>
      )}
    </main>
  );
}
