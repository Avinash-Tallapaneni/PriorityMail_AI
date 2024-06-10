import { CleanedEmailType } from "./CleanedEmailType";

export interface EmailCardTypes {
  item: CleanedEmailType;
  mailSelected: string;
  handleMailSelect: (text: string) => void;
}
