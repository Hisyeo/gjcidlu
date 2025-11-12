import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header"; // Import Header component
import SubmissionQueue from "../components/SubmissionQueue"; // Import SubmissionQueue component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "yôn Gicîdolû", // Updated title
  description: "A git-forged local-first tool for tracking conlang compound phrases.", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`} // Added body classes
      >
        <Header /> {/* Render Header component */}
        {children}
        <SubmissionQueue /> {/* Render SubmissionQueue component */}
      </body>
    </html>
  );
}
