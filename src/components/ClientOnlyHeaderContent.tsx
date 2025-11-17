"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSettings } from '@/app/SettingsContext';
import { usePathname } from 'next/navigation';

interface Stats {
  translatedCount: number;
  untranslatedCount: number;
}

interface ClientOnlyHeaderContentProps {
  stats: Stats | null;
  onUntranslatedClick: () => void;
  onTitleClick: () => void;
}

const ClientOnlyHeaderContent: React.FC<ClientOnlyHeaderContentProps> = ({ stats, onUntranslatedClick, onTitleClick }) => {
  const { settings } = useSettings();
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const isTermDetailPage = pathname.includes('/term/');

  useEffect(() => {
    setIsMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let title = "yôn Gicîdolû";
  let subtitle = "Hîsyêô";
  let fontClass = "";
  let heightAdjustment = "";

  if (isMounted) {
    if (settings.script === 'abugida') {
      title = "ɀ̃ı ‹ꜿȷꞇɟʌʓʄ›";
      subtitle = "‹ɂ́ɟɀʇɽı›";
      fontClass = "font-abugida";
    } else if (settings.script === 'syllabary') {
      title = "yoN 〈gjcidlu〉";
      subtitle = "〈hiSyeo〉";
      fontClass = "font-syllabary";
      heightAdjustment = "h-5";
    }
  }

  return (
    <>
      <div className="flex items-center space-x-4">
        <Link href="/" onClick={onTitleClick}>
          <h1 className={`text-2xl font-bold text-gray-900 hover:text-blue-600 ${isMounted ? fontClass : ''}`}>{isMounted ? title : "yôn Gicîdolû"}</h1>
        </Link>
        {stats && (
          <div className="flex items-center space-x-4 pt-1">
            <span className="text-sm text-gray-500">
              {stats.translatedCount}
              <span className="hidden lg:inline"> terms translated</span>
            </span>
            {stats.untranslatedCount > 0 && !isTermDetailPage && (
              <button onClick={onUntranslatedClick} className="flex items-center space-x-1 text-sm text-red-600 hover:text-red-800">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="hidden lg:inline">{stats.untranslatedCount} untranslated</span>
              </button>
            )}
          </div>
        )}
      </div>

      <div className="hidden sm:flex items-center space-x-2 pr-40">
        <span className={`text-sm text-gray-500 ${isMounted ? heightAdjustment : ''}`}>English &rarr; </span>
        <span className={`text-sm text-gray-500 ${isMounted ? fontClass : ''}`} dangerouslySetInnerHTML={{ __html: isMounted ? subtitle : "Hîsyêô" }}></span>
      </div>
    </>
  );
};

export default ClientOnlyHeaderContent;
