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

const Homepage = () => {
  const [mails, setMails] = useState<CleanedEmailType[] | null>([]);
  const [mailSelected, setMailSelected] = useState<string>("");

  const classifyEmails = async () => {
    const response = await fetch("/api/email");
    const data = await response.json();
    setMails(data.email);
    localStorage.setItem("mails", JSON.stringify(data.email));

    console.log("emails", data.email);
  };

  useEffect(() => {
    const storedMails = localStorage.getItem("mails");

    if (!storedMails) {
      classifyEmails();
    }

    if (storedMails) {
      setMails(JSON.parse(storedMails));
    }
  }, []);

  // useEffect(() => {
  //   if (mails && mails.length > 0 && !mailSelected) {
  //     setMailSelected(mails[0].id);
  //   }
  // }, [mails]);

  return (
    <TooltipProvider>
      <section className="text-zeus flex-1 flex items-start justify-center h-full  ">
        <section className="flex h-full bg-zeus/5 w-full max-w-xl flex-col gap-1">
          <div className="flex flex-col items-start p-3 gap-4 w-full">
            <div className="flex items-center w-full justify-between">
              <div>
                <Select>
                  <SelectTrigger className="">
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
          <section>
            {mails?.map((mail) => (
              <EmailCard
                key={mail.id}
                item={mail}
                mailSelected={mailSelected}
                handleMailSelect={(id) => setMailSelected(id)}
              />
            ))}
          </section>
        </section>
      </section>
    </TooltipProvider>
  );
};

export default Homepage;
