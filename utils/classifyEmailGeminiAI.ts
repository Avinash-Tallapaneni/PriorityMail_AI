import { GoogleGenerativeAI } from "@google/generative-ai";

async function classifyEmailGeminiAI(bodyContent: string, GEMINI_KEY: string) {
  // const GEMINI_KEY = process.env.NEXT_PUBLIC_GEMINI_KEY;

  // if (!GEMINI_KEY) {
  //   throw new Error("GEMINI_KEY is not set in the environment variables");
  // }

  const googleAI = new GoogleGenerativeAI(GEMINI_KEY);

  const geminiConfig = {
    temperature: 0.9,
    topP: 1,
    topK: 1,
    maxOutputTokens: 4096,
  };

  const geminiModel = googleAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const prompt = `Classify the following email content into one of these categories: Important, Promotions, Social, Marketing, Spam, General.\n\nEmail Content:\n${bodyContent}\n\nDont give explanation, give me the one word category,Classification:`;

  const result = await geminiModel.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  return text;
}

export default classifyEmailGeminiAI;
