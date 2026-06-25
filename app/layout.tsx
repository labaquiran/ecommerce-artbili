import type { Metadata } from "next";
import RootNavbar from "@/components/root-navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artbili",
  description: "Ecommerce platform for artists to sell their work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body>
        <RootNavbar />
        {children}
      </body>
    </html>
  );
}
