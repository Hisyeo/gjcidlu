"use client";

import { useState } from 'react';
import { useSettings, Script } from '@/app/SettingsContext';
import { UserSystem } from '@/lib/types';

export default function SettingsPopover() {
  const [isOpen, setIsOpen] = useState(false);
  const { settings, setSettings } = useSettings();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const userSystem = form.elements.namedItem('userSystem') as HTMLSelectElement;
    const userId = form.elements.namedItem('userId') as HTMLInputElement;
    const script = form.elements.namedItem('script') as HTMLSelectElement;

    setSettings({
      userSystem: userSystem.value as UserSystem,
      userId: userId.value,
      script: script.value as Script,
    });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="relative rounded-full p-2 hover:bg-gray-100">
        {/* Settings Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 rounded-lg bg-white shadow-xl border border-gray-200 z-50">
          <div className="p-4">
            <h3 className="font-medium text-gray-900">User Settings</h3>
            <p className="text-sm text-gray-500 mt-1">This information is saved in your browser.</p>
            <form onSubmit={handleSave} className="mt-4 space-y-4">
              <div>
                <label htmlFor="userSystem" className="block text-sm font-medium text-gray-700">User System</label>
                <select
                  id="userSystem"
                  name="userSystem"
                  defaultValue={settings.userSystem || ''}
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
                >
                  <option value="">-- Select --</option>
                  <option value="Discord">Discord</option>
                  <option value="Reddit">Reddit</option>
                  <option value="Email">Email</option>
                </select>
              </div>
              <div>
                <label htmlFor="userId" className="block text-sm font-medium text-gray-700">User ID</label>
                <input
                  type="text"
                  id="userId"
                  name="userId"
                  defaultValue={settings.userId || ''}
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2"
                />
              </div>
              <div>
                <label htmlFor="script" className="block text-sm font-medium text-gray-700">Translation Script</label>
                <select
                  id="script"
                  name="script"
                  defaultValue={settings.script || 'latin'}
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
                >
                  <option value="latin">Latin</option>
                  <option value="abugida">Abugida</option>
                  <option value="syllabary">Syllabary</option>
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  Only effects translation display, all submissions must be done in Latin script
                </p>
              </div>
              <div className="pt-2 flex justify-end">
                <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
