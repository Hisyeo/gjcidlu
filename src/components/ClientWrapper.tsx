"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import SubmissionQueue from "@/components/SubmissionQueue";
import { getQueue } from "@/lib/queue";
import { useAppContext } from "@/app/AppContext";
import { ToastProvider } from "@/app/ToastContext";
import { EntriesData } from "@/lib/types"; // Import EntriesData
import BackToTopButton from "./BackToTopButton";
import { getTranslationStats } from "@/lib/data";

interface Stats {
  translatedCount: number;
  untranslatedCount: number;
}

export default function ClientWrapper({
  children,
  allEntries,
}: {
  children: React.ReactNode;
  allEntries: EntriesData; // Use the specific type
}) {
  const [isQueueOpen, setQueueOpen] = useState(false);
  const [queueCount, setQueueCount] = useState(0);
  const [stats, setStats] = useState<Stats | null>(null);
  const { setShowUntranslated } = useAppContext();

  const toggleQueue = () => setQueueOpen(!isQueueOpen);

  useEffect(() => {
    const updateQueue = () => {
      const queue = getQueue();
      setQueueCount(queue.length);
      setStats(getTranslationStats(queue));
    };
    updateQueue();
    window.addEventListener("storage", updateQueue);
    return () => window.removeEventListener("storage", updateQueue);
  }, []);

  const handleUntranslatedClick = () => {
    setShowUntranslated(true);
  };

  const handleTitleClick = () => {
    setShowUntranslated(false);
  };

  return (
    <ToastProvider>
      <Header 
        toggleQueue={toggleQueue} 
        queueCount={queueCount} 
        stats={stats}
        onUntranslatedClick={handleUntranslatedClick}
        onTitleClick={handleTitleClick}
      />
      {children}
      {isQueueOpen && <SubmissionQueue toggleQueue={toggleQueue} allEntries={allEntries} />}
      <BackToTopButton />
    </ToastProvider>
  );
}
