"use client";

import { useCartStore } from "@/store/cartStore";
import type { User } from "@supabase/supabase-js";
import { signOut } from "@/actions/auth";
import Link from "next/link";

interface RootNavbarProps {
  user: User | null;
}

export default function RootNavbar({ user }: RootNavbarProps) {
  const totalItems = useCartStore((s) => s.calcTotalItems());
  return (
    <nav className="w-full h-16 bg-white text-black border-b border-gray-200 flex items-center justify-between px-4 ">
      <Link href="/">ARTBILI</Link>
      <div className="flex space-x-4">
        {user ? (
          <>
            <button onClick={signOut}>Sign Out</button>
            <Link href="/cart">{`Cart (${totalItems})`}</Link>
          </>
        ) : (
          <Link href="/auth/login">Sign In</Link>
        )}
      </div>
    </nav>
  );
}
