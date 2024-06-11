"use client";

import React from "react";
import { Button } from "./ui/button";
import { Keyboard } from "lucide-react";
import { DropdownMenuShortcut } from "./ui/dropdown-menu";
import { useApiKey } from "@/context/APIContext";

const ChangeAPI = () => {
  const { setIsApiSaved } = useApiKey();

  const handleAPIChange = () => {
    localStorage.removeItem("GeminiAI");
    setIsApiSaved(false);
  };
  return (
    <Button
      onClick={handleAPIChange}
      variant="link"
      className="flex px-2 w-full items-center"
    >
      <Keyboard className="mr-2 h-4 w-4 " />
      <span>Gemini APIKEY</span>
      <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
    </Button>
  );
};

export default ChangeAPI;
