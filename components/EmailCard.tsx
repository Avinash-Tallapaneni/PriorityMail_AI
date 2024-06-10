import { EmailCardTypes } from "@/types/EmailCardTypes";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import EmailFullDisplay from "./EmailFullDisplay";
import formatDate from "@/utils/formatDate";
import { Badge } from "./ui/badge";

const EmailCard = ({
  item,
  mailSelected,
  handleMailSelect,
}: EmailCardTypes) => {
  const badgeColor = item.label.toLowerCase().includes("important")
    ? "bg-green-500"
    : item.label.toLowerCase().includes("promotions")
    ? "bg-yellow-500"
    : item.label.toLowerCase().includes("social")
    ? "bg-blue-500"
    : item.label.toLowerCase().includes("marketing")
    ? "bg-red-500"
    : item.label.toLowerCase().includes("spam")
    ? "bg-gray-500"
    : item.label.toLowerCase().includes("general")
    ? "bg-purple-500"
    : "bg-gray-300";

  return (
    <Sheet key={item.id}>
      <SheetTrigger asChild>
        <button
          key={item.id}
          className={cn(
            "flex flex-col w-full group items-start gap-2 rounded-lg border border-zeus p-3 text-left text-sm transition-all hover:bg-zeus/40 hover:text-cream ",
            mailSelected === item.id && "bg-zeus/80 text-cream"
          )}
          onClick={() => {
            handleMailSelect(item.id);
          }}
        >
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="font-extrabold">{item.name}</div>
              </div>

              <div
                className={cn(
                  "ml-auto text-xs  flex items-center justify-between gap-4",
                  mailSelected === item.id ? "text-cream/80" : "text-zeus"
                )}
              >
                <Badge className={badgeColor}>{item.label}</Badge>

                {formatDate(item.date)}
              </div>
            </div>
            <div className="text-xs font-bold line-clamp-2">{item.subject}</div>
          </div>
          <div
            className={`line-clamp-3 w-full break-words text-wrap text-xs group-hover:text-cream  ${
              mailSelected === item.id ? "text-cream/80" : "text-zeus"
            }`}
          >
            {item.text?.substring(0, 300)}
          </div>
        </button>
      </SheetTrigger>

      <SheetContent className="xl:w-[1000px] xl:max-w-none sm:w-[400px] sm:max-w-[540px]">
        <SheetHeader>
          <SheetTitle>{item.subject}</SheetTitle>
        </SheetHeader>
        <EmailFullDisplay mail={item} badgeColor={badgeColor} />
        <SheetClose asChild>
          <Button type="button">Close</Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default EmailCard;
