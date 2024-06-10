"use server";

import { signIn } from "@/config/auth";

export const googleSignIn = async () => {
  await signIn("google");
};
