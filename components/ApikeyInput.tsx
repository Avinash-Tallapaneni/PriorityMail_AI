"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useApiKey } from "@/context/APIContext";

const ApikeyInput = () => {
  const [apiKey, setApiKey] = useState<string>("");
  const { setIsApiSaved } = useApiKey();

  const handleAPI = () => {
    localStorage.setItem("GeminiAI", apiKey);

    toast.success("Api key is stored in localStorage");

    setIsApiSaved(true);
  };

  return (
    <div className=" flex flex-1 h-full items-center justify-center ">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Gemini Api</CardTitle>
          <CardDescription>Please enter your Gemini ApI key </CardDescription>
          <Separator className="bg-zeus/20" />
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="apiKey">Enter your Gemini Key</Label>
            <div className="flex items-center justify-between gap-4">
              <Input
                id="apiKey"
                type="password"
                placeholder="****************"
                onChange={(e) => setApiKey(e.target.value)}
              />
              <Button
                variant="default"
                className="shrink-0"
                onClick={handleAPI}
                disabled={!(apiKey.length > 0)}
              >
                Save
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApikeyInput;
