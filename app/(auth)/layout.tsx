import AuthNavbar from "@/components/auth-navbar";

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
