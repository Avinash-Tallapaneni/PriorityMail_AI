import { getGmailInstance } from "./gmailInstance";

const getMessageById = async (messageId: string) => {
  try {
    const gmail = getGmailInstance();

    const response = await gmail.users.messages.get({
      userId: "me",
      id: messageId,
    });

    const message = response.data;

    return message;
  } catch (error) {
    console.error("Error fetching message by ID:", error);
    throw new Error("Failed to fetch message by ID");
  }
};

export default getMessageById;
