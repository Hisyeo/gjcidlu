"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import SubmissionQueue from "@/components/SubmissionQueue";
import { getQueue } from "@/lib/queue";
import { AppProvider, useAppContext } from "@/app/AppContext";
import { useRouter } from 'next/navigation';

interface Stats {
  translatedCount: number;
  untranslatedCount: number;
}

export default function ClientWrapper({
  children,
  stats,
}: {
  children: React.ReactNode;
  stats: Stats | null;
}) {
  const [isQueueOpen, setQueueOpen] = useState(false);
  const [queueCount, setQueueCount] = useState(0);
  const { setShowUntranslated } = useAppContext();
  const router = useRouter();

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

  const handleUntranslatedClick = () => {
    setShowUntranslated(true);
    // Use Next.js router to navigate to ensure client-side navigation
    router.push('/');
  };

  const handleTitleClick = () => {
    setShowUntranslated(false);
  };

  return (
    <>
      <Header 
        toggleQueue={toggleQueue} 
        queueCount={queueCount} 
        stats={stats}
        onUntranslatedClick={handleUntranslatedClick}
        onTitleClick={handleTitleClick}
      />
      {children}
      {isQueueOpen && <SubmissionQueue toggleQueue={toggleQueue} />}
    </>
  );
}
