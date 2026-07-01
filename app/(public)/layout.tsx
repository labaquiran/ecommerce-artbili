import type { Metadata } from "next";
import RootNavbar from "@/components/root-navbar";
import "@/app/globals.css";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <RootNavbar />
      {children}
    </>
  );
}
