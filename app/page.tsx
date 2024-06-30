import { currentUser } from "@/data/user";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();
  if (!user) {
    redirect("/login");
  }
  return (
    <div>
      <div>メイン画面</div>
    </div>
  );
}
