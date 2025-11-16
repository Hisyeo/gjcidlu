"use client";

import { createContext, useState, useContext, ReactNode } from 'react';
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
    const defaultSettings: UserSettings = { userSystem: null, userId: null, script: 'latin' };
    if (typeof window === 'undefined') {
        return defaultSettings;
    }
    try {
        const storedSettings = localStorage.getItem(SETTINGS_CACHE_KEY);
        if (storedSettings) {
            const parsed = JSON.parse(storedSettings);
            return { ...defaultSettings, ...parsed };
        }
        return defaultSettings;
    } catch (error) {
        console.error("Failed to read user settings from localStorage:", error);
        return defaultSettings;
    }
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettingsState] = useState<UserSettings>(getInitialSettings);

  const setSettings = (newSettings: UserSettings) => {
    try {
      localStorage.setItem(SETTINGS_CACHE_KEY, JSON.stringify(newSettings));
      setSettingsState(newSettings);
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