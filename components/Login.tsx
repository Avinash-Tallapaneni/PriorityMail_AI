"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Google from "../assets/google.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { googleSignIn } from "@/actions/signInAction";

const Login = () => {
  const handleAPI = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("openAI", e.target.value);
  };

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
        <CardContent className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Enter your OpenAI Key</Label>
            <Input
              id="email"
              type="email"
              placeholder="sk-proj-****************"
              onChange={handleAPI}
            />
          </div>
        </CardContent>

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
