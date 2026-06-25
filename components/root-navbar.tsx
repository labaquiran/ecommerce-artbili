import Link from "next/link";

export default function RootNavbar() {
  return (
    <div className="w-full h-16 bg-white text-black border-b border-gray-200 flex items-center justify-between px-4 ">
      <Link href="/">ARTBILI</Link>
      <div className="flex space-x-4">
        <Link href="/auth/login">Sign In</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </div>
  );
}
