import { signOut } from "@/config/auth";
import { LogOut } from "lucide-react";
import { DropdownMenuShortcut } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const Logoff = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button
        variant="link"
        type="submit"
        className="flex px-2 w-full items-center"
      >
        <LogOut className="mr-2 h-4 w-4 " />
        <span>Log out</span>
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </Button>
    </form>
  );
};

export default Logoff;
