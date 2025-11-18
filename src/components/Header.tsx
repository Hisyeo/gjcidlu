import React from 'react';
import SettingsPopover from './SettingsPopover'; // Import SettingsPopover
import ClientOnlyHeaderContent from './ClientOnlyHeaderContent';

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
  const repoUrl = process.env.NEXT_PUBLIC_GITHUB_REPO_URL;

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <ClientOnlyHeaderContent
          stats={stats}
          onUntranslatedClick={onUntranslatedClick}
          onTitleClick={onTitleClick}
        />

        <div className="flex items-center space-x-2">
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
          )}
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