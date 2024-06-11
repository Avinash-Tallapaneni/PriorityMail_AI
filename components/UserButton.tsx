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
import ChangeAPI from "./ChangeAPI";

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
            className="aspect-square rounded-md bg-background object-cover"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer p-0">
          <ChangeAPI />
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="cursor-pointer p-0">
          <Logoff />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
