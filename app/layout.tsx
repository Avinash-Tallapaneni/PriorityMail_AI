import type { Metadata } from "next";
import { Kode_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ApiKeyProvider } from "@/context/APIContext";

const Kode = Kode_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Priority Mail AI",
  description: "Gmail are categorized using OpenAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Kode.className}>
        <ApiKeyProvider>{children}</ApiKeyProvider>
        <Toaster />
      </body>
    </html>
  );
}
