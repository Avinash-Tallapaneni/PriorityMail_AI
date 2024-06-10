import type { Metadata } from "next";
import { Kode_Mono } from "next/font/google";
import "./globals.css";

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
      <body className={Kode.className}>{children}</body>
    </html>
  );
}
