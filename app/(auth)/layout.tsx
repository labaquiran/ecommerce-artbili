import type { Metadata } from "next";
import AuthNavbar from "@/components/auth-navbar";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Artbili",
  description: "Ecommerce platform for artists to sell their work",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AuthNavbar />
      {children}
    </>
  );
}
