"use client";

import ApikeyInput from "./ApikeyInput";
import Homepage from "./Homepage";
import Login from "./Login";
import { User } from "next-auth";
import { useApiKey } from "@/context/APIContext";

interface MainpageProps {
  user: User | undefined;
}

const Mainpage = ({ user }: MainpageProps) => {
  const { isApiSaved } = useApiKey();

  if (!user) return <Login />;
  if (!isApiSaved) return <ApikeyInput />;

  return <Homepage />;
};

export default Mainpage;
