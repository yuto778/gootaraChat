import "server-only";

import { createClient } from "@/lib/supabase/server";

export const currentUser = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};
