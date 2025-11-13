import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./AppContext";
import ClientWrapper from "@/components/ClientWrapper";
import { getTranslationStats } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "yôn Gicîdolû",
  description: "A git-forged local-first tool for tracking conlang compound phrases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const stats = getTranslationStats();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        <AppProvider>
          <ClientWrapper stats={stats}>
            {children}
          </ClientWrapper>
        </AppProvider>
      </body>
    </html>
  );
}
