import { auth } from "@/config/auth";
import { CleanedEmailType } from "@/types/CleanedEmailType";
import { EmailMessagesType } from "@/types/EmailMessageType";
import classifyEmailGeminiAI from "@/utils/GeminiAI";
import formatEmailData from "@/utils/formatEmailData";
import getMessageById from "@/utils/getMessageById";
import { getGmailInstance, setOAuthCredentials } from "@/utils/gmailInstance";
import { NextResponse } from "next/server";

export async function GET() {
  try {
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

    const emailMessageSummaries = response.data.messages as EmailMessagesType[];

    const detailedEmailDataArray = await Promise.all(
      emailMessageSummaries.map((message) => getMessageById(message.id))
    );

    const classifiedEmails: CleanedEmailType[] = await Promise.all(
      detailedEmailDataArray.map(async (emailData) => {
        const formattedEmail = formatEmailData(emailData);
        const label = await classifyEmailGeminiAI(formattedEmail.text);
        console.log("label", label);
        return { ...formattedEmail, label };
      })
    );

    return NextResponse.json({ email: classifiedEmails }, { status: 200 });
  } catch (error) {
    console.error("Error fetching email data:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
