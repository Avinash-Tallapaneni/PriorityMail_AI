import Homepage from "@/components/Homepage";
import Login from "@/components/Login";
import { Navbar } from "@/components/Navbar";
import { auth } from "@/config/auth";

export default async function Home() {
  const session = await auth();
  const user = session?.user;
  return (
    <main className="flex flex-col h-screen overflow-hidden bg-zeus/20 text-zeus  ">
      <Navbar />
      <div className="flex-1 flex items-start justify-center">
        {!user ? <Login /> : <Homepage />}
      </div>
      <div className="my-4">
        <p className="text-sm text-center md:text-lg">
          © 2024 Design &amp; Developed by{" "}
          <span className="text-base font-bold md:text-xl">
            Avinash Tallapaneni.
          </span>
          All rights reserved.
        </p>
      </div>
    </main>
  );
}
