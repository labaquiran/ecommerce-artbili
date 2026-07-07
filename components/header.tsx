import { createClient } from "@/lib/supabase/server";
import RootNavbar from "@/components/root-navbar";

export default async function Header() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <header>
      <RootNavbar user={user} />
    </header>
  );
}
