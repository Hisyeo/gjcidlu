"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import SubmissionQueue from "@/components/SubmissionQueue";
import { getQueue } from "@/lib/queue";
import { useAppContext } from "@/app/AppContext";
import { ToastProvider } from "@/app/ToastContext";
import { EntriesData } from "@/lib/types"; // Import EntriesData

interface Stats {
  translatedCount: number;
  untranslatedCount: number;
}

export default function ClientWrapper({
  children,
  stats,
  allEntries,
}: {
  children: React.ReactNode;
  stats: Stats | null;
  allEntries: EntriesData; // Use the specific type
}) {
  const [isQueueOpen, setQueueOpen] = useState(false);
  const [queueCount, setQueueCount] = useState(0);
  const { setShowUntranslated } = useAppContext();

  const toggleQueue = () => setQueueOpen(!isQueueOpen);

  useEffect(() => {
    const updateQueueCount = () => {
      const queue = getQueue();
      setQueueCount(queue.length);
    };
    updateQueueCount();
    window.addEventListener("storage", updateQueueCount);
    return () => window.removeEventListener("storage", updateQueueCount);
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
    </ToastProvider>
  );
}
