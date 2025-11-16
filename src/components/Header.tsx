import React from 'react';
import Link from 'next/link';
import SettingsPopover from './SettingsPopover'; // Import SettingsPopover
import { useSettings } from '@/app/SettingsContext';

interface Stats {
  translatedCount: number;
  untranslatedCount: number;
}

interface HeaderProps {
  toggleQueue: () => void;
  queueCount: number;
  stats: Stats | null;
  onUntranslatedClick: () => void;
  onTitleClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleQueue, queueCount, stats, onUntranslatedClick, onTitleClick }) => {
  const { settings } = useSettings();

  let title = "yôn Gicîdolû";
  let subtitle = "Hîsyêô";
  let fontClass = "";

  if (settings.script === 'abugida') {
    title = "ɀ̃ı ‹ꜿȷꞇɟʌʓʄ›";
    subtitle = "‹ɂ́ɟɀʇɽı›";
    fontClass = "font-abugida";
  } else if (settings.script === 'syllabary') {
    title = "yoN 〈gjcidlu〉";
    subtitle = "〈hiSyeo〉";
    fontClass = "font-syllabary";
  }

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-4">
          <Link href="/" onClick={onTitleClick}>
            <h1 className={`text-2xl font-bold text-gray-900 hover:text-blue-600 ${fontClass}`}>{title}</h1>
          </Link>
          {stats && (
            <div className="flex items-center space-x-4 pt-1">
              <span className="text-sm text-gray-500">{stats.translatedCount} terms translated</span>
              {stats.untranslatedCount > 0 && (
                <button onClick={onUntranslatedClick} className="flex items-center space-x-1 text-sm text-red-600 hover:text-red-800">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <span>{stats.untranslatedCount} untranslated</span>
                </button>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <span className='`text-sm text-gray-500'>English &rarr; </span><span className={`text-sm text-gray-500 ${fontClass}`} dangerouslySetInnerHTML={{ __html: subtitle }}></span>
          <SettingsPopover /> {/* Add SettingsPopover */}
          <button onClick={toggleQueue} className="relative rounded-full p-2 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>

            {queueCount > 0 && (
              <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                {queueCount}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;