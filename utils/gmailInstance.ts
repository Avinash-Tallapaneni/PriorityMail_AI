import { google } from "googleapis";
import { GoogleInstanceToken } from "@/types/GoogleInstance";

const clientId = process.env.AUTH_GOOGLE_ID;
const clientSecret = process.env.AUTH_GOOGLE_SECRET;

const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);

export const setOAuthCredentials = ({
  accessToken,
  refreshToken,
}: GoogleInstanceToken) => {
  oauth2Client.setCredentials({
    access_token: accessToken,
    refresh_token: refreshToken,
  });
};

export const getGmailInstance = () => {
  if (!oauth2Client) {
    throw new Error(
      "OAuth credentials not set. Call setOAuthCredentials first."
    );
  }

  return google.gmail({ version: "v1", auth: oauth2Client });
};
