"use client"; // This is required to use hooks like useState

import { useState, useEffect } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SubmissionQueue from "@/components/SubmissionQueue";
import { getQueue } from "@/lib/queue";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata can't be exported from a client component, so we handle it differently if needed.
// For now, we can remove it from here and add it to the page level or keep the layout as a server component and wrap the client parts.
// Let's wrap the client-dependent parts instead.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isQueueOpen, setQueueOpen] = useState(false);
  const [queueCount, setQueueCount] = useState(0);

  const toggleQueue = () => setQueueOpen(!isQueueOpen);

  const updateQueueCount = () => {
    setQueueCount(getQueue().length);
  };

  useEffect(() => {
    updateQueueCount();
    window.addEventListener('storage', updateQueueCount);
    return () => {
      window.removeEventListener('storage', updateQueueCount);
    };
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        <Header toggleQueue={toggleQueue} queueCount={queueCount} />
        {children}
        {isQueueOpen && <SubmissionQueue toggleQueue={toggleQueue} />}
      </body>
    </html>
  );
}

