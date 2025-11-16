"use client";

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { UserSystem } from '@/lib/types';

export type Script = 'latin' | 'abugida' | 'syllabary';

interface UserSettings {
  userSystem: UserSystem | null;
  userId: string | null;
  script: Script;
}

interface SettingsContextType {
  settings: UserSettings;
  setSettings: (settings: UserSettings) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

const SETTINGS_CACHE_KEY = 'userSettings';

function getInitialSettings(): UserSettings {
    return { userSystem: null, userId: null, script: 'latin' };
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettingsState] = useState<UserSettings>(getInitialSettings);

  useEffect(() => {
    try {
        const storedSettings = localStorage.getItem(SETTINGS_CACHE_KEY);
        if (storedSettings) {
            const parsed = JSON.parse(storedSettings);
            setSettingsState(s => ({ ...s, ...parsed }));
        }
    } catch (error) {
        console.error("Failed to read user settings from localStorage:", error);
    }
  }, []);

  const setSettings = (newSettings: UserSettings) => {
    try {
      const updatedSettings = { ...settings, ...newSettings };
      localStorage.setItem(SETTINGS_CACHE_KEY, JSON.stringify(updatedSettings));
      setSettingsState(updatedSettings);
    } catch (error) {
      console.error("Failed to save user settings to localStorage:", error);
    }
  };

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}