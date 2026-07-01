import RootNavbar from "@/components/root-navbar";

export default function PrivateLayout({
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
