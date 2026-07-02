import type { Metadata } from "next";
import "@/app/globals.css";
import Footer from "@/components/footer";

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
