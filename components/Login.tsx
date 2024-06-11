"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Google from "../assets/google.png";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import { googleSignIn } from "@/actions/signInAction";
import ApikeyInput from "./ApikeyInput";

const Login = () => {
  return (
    <div className=" flex flex-1 h-full items-center justify-center ">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Login to your gmail to categorize emails
          </CardDescription>
          <Separator className="bg-zeus/20" />
        </CardHeader>

        <ApikeyInput />

        <CardFooter>
          <form action={googleSignIn} className="w-full">
            <Button variant="outline" className="w-full gap-2">
              <Image src={Google} alt="Google Icon" className="w-6 h-6" />
              Google
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
