"use client";
import { CleanedEmailType } from "@/types/CleanedEmailType";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { TooltipProvider } from "./ui/tooltip";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";
import EmailCard from "./EmailCard";
import { SkeletonCard } from "./Skeleton";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [numOfMails, setNumOfMails] = useState<string>("2");
  const [mails, setMails] = useState<CleanedEmailType[] | null>([]);
  const [mailSelected, setMailSelected] = useState<string>("");
  const [GEMINI_KEY, setGEMINI_KEY] = useState<string>("");
  const [classifyClicked, setClassifyClicked] = useState(false);

  const classifyEmails = async () => {
    setIsLoading(true);
    setClassifyClicked(true);
    const response = await fetch(
      `/api/email?maxEmailResults=${numOfMails}&GEMINI_KEY=${GEMINI_KEY}`
    );
    const data = await response.json();
    setMails(data.email);
    setIsLoading(false);
    setClassifyClicked(false);
    localStorage.setItem("mails", JSON.stringify(data.email));

    console.log("emails", data.email);
  };

  useEffect(() => {
    const storedMails = localStorage.getItem("mails");
    const geminiKey = localStorage.getItem("GeminiAI") as string;

    setGEMINI_KEY(geminiKey);

    if (!storedMails) {
      // classifyEmails();
    }

    if (storedMails) {
      setMails(JSON.parse(storedMails));
      setIsLoading(false);
    }
  }, []);

  // useEffect(() => {
  //   if (mails && mails.length > 0 && !mailSelected) {
  //     setMailSelected(mails[0].id);
  //   }
  // }, [mails]);

  const renderEmails = () => {
    if (mails?.length === 0 && !classifyClicked) {
      return (
        <div className="text-xl pt-10 p-6">
          Select number of email to classify and then click on classify. If none
          selected, 2 Emails are classified
        </div>
      );
    }

    if (isLoading) {
      return Array(parseInt(numOfMails))
        .fill(0)
        .map((_, index) => <SkeletonCard key={index} />);
    }

    return mails?.map((mail) => (
      <EmailCard
        key={mail.id}
        item={mail}
        mailSelected={mailSelected}
        handleMailSelect={(id) => setMailSelected(id)}
      />
    ));
  };

  return (
    <TooltipProvider>
      <section className="text-zeus flex-1 flex items-start justify-center h-full  ">
        <section className="flex h-full bg-zeus/5 w-full max-w-xl flex-col gap-1">
          <div className="flex flex-col items-start p-3 gap-4 w-full">
            <div className="flex items-center w-full justify-between">
              <div>
                <Select
                  onValueChange={(value: string) => {
                    setNumOfMails(value);
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select number of email to classify" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="15">15</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-zeus" onClick={classifyEmails}>
                Classify
              </Button>
            </div>
          </div>
          <Separator className="bg-zeus" />
          <section className="w-full h-screen overflow-scroll flex flex-col gap-2">
            {renderEmails()}
          </section>
        </section>
      </section>
    </TooltipProvider>
  );
};

export default Homepage;
