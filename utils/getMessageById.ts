import { getGmailInstance } from "./gmailInstance";

const getMessageById = async (messageId: string) => {
  const gmail = getGmailInstance();

  const response = await gmail.users.messages.get({
    userId: "me",
    id: messageId,
  });

  const message = response.data;

  return message;
};

export default getMessageById;
