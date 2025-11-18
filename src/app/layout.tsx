import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./AppContext";
import { SettingsProvider } from "./SettingsContext"; // Import SettingsProvider
import ClientWrapper from "@/components/ClientWrapper";
import entriesData from '@/../public/entries.json'; // Import entries data

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const isProd = process.env.NODE_ENV === 'production';

export const metadata: Metadata = {
  title: "yôn Gicîdolû",
  description: "A git-forged local-first tool for tracking conlang compound phrases.",
  manifest: isProd ? '/gjcidlu/manifest.json' : '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        <AppProvider>
          <SettingsProvider> {/* Add SettingsProvider */}
            <ClientWrapper allEntries={entriesData}>
              {children}
              <footer className="bg-gray-100 text-center text-gray-600 text-sm p-4 mt-8">
                © 2025 Copyright:{" "}
                <a href="https://hisyeo.github.io" className="text-blue-600 hover:underline">
                  Hîsyêô Institute
                </a>
              </footer>
            </ClientWrapper>
          </SettingsProvider>
        </AppProvider>
      </body>
    </html>
  );
}