import { Keyboard } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { User } from "next-auth";
import Image from "next/image";

import Avatar from "../assets/avatar.png";
import Logoff from "./Logoff";

interface UserButtonProps {
  user: User;
}

const UserButton = ({ user }: UserButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon">
          <Image
            src={Avatar}
            alt="User profile picture"
            width={50}
            height={50}
            className="aspect-square rounded-lg bg-background object-cover"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <Keyboard className="mr-2 h-4 w-4 " />
          <span>ChatGPT APIKEY</span>
          <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="cursor-pointer p-0">
          <Logoff />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
