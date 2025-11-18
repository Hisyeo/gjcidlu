"use client";

import { useState } from 'react';

export default function VoteCategoryHelpPopover() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-gray-100 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-40v-329L110-580l185-300h370l185 300-130 211v329l-240-80-240 80Zm80-111 160-53 160 53v-129H320v129Zm20-649L204-580l136 220h280l136-220-136-220H340Zm98 383L296-558l57-57 85 85 169-170 57 56-226 227ZM320-280h320-320Z"/></svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 -ml-4 mt-2 w-screen max-w-sm transform px-4 sm:px-0 lg:max-w-lg">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-1">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Vote Category Meanings</h3>
                <div>
                  <h4 className="font-semibold">Overall</h4>
                  <p className="text-sm text-gray-500">This translation is the best <em>overall</em> translation of the term.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Minimal</h4>
                  <p className="text-sm text-gray-500">This translation is the best <em>minimalist</em> translation of the term. Meaning that it&apos;s the most succinct while still achieving the necessary amount of specificity.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Specific</h4>
                  <p className="text-sm text-gray-500">This translation is the most <em>specific</em> translation of the term. Meaning that it captures all of the nuance that the term holds in English.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Humorous</h4>
                  <p className="text-sm text-gray-500">This translation is the most <em>humorous</em> translation of the term. Meaning that it made you laugh, simple as that!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
