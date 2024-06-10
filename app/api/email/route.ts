import { auth } from "@/config/auth";
import { CleanedEmailType } from "@/types/CleanedEmailType";
import { EmailMessagesType } from "@/types/EmailMessageType";
import formatEmailData from "@/utils/formatEmailData";
import getMessageById from "@/utils/getMessageById";
import { getGmailInstance, setOAuthCredentials } from "@/utils/gmailInstance";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();

  if (!session) {
    return new Response("Unauthenticated", { status: 401 });
  }

  /**
   * user doesnt have TS type for accesstoken and refreshtoken
   * however i added accesstoken and refreshtoken to nextauth session
   * */

  const { accessToken, refreshToken } = session.user;

  setOAuthCredentials({ accessToken, refreshToken });

  const gmail = getGmailInstance();

  const response = await gmail.users.messages.list({
    userId: "me",
    maxResults: 2,
  });

  const emailMessages = response.data.messages as EmailMessagesType[];

  const emailDataArray = await Promise.all(
    emailMessages.map((message) => getMessageById(message.id))
  );

  const cleanedEmailData: CleanedEmailType[] = emailDataArray.map((emailData) =>
    formatEmailData(emailData)
  );

  return NextResponse.json({ email: cleanedEmailData }, { status: 200 });
}
