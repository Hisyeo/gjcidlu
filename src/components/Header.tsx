import React from 'react';

interface HeaderProps {
  toggleQueue: () => void;
  queueCount: number;
}

const Header: React.FC<HeaderProps> = ({ toggleQueue, queueCount }) => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">yôn Gicîdolû</h1>
          <span className="text-sm text-gray-500">Native Languages &rarr; Hîsyêô</span>
        </div>

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
      </nav>
    </header>
  );
};

export default Header;
