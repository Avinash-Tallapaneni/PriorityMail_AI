import { auth } from "@/config/auth";
import Link from "next/link";
import UserButton from "./UserButton";

export const Navbar = async () => {
  const session = await auth();
  const user = session?.user;
  return (
    <header className="sticky top-0  p-3 shadow-sm">
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="text-3xl text-nowrap font-bold">
          PriorityMail AI
        </Link>

        {user && <UserButton user={user} />}
      </nav>
    </header>
  );
};
