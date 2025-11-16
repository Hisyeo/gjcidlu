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

const defaultSettings: UserSettings = { userSystem: null, userId: null, script: 'latin' };

function getInitialSettings(): UserSettings {
    if (typeof window !== 'undefined') {
        const storedSettings = localStorage.getItem(SETTINGS_CACHE_KEY);
        if (storedSettings) {
            try {
                return { ...defaultSettings, ...JSON.parse(storedSettings) };
            } catch (error) {
                console.error("Failed to parse user settings from localStorage:", error);
            }
        }
    }
    return defaultSettings;
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettingsState] = useState<UserSettings>(getInitialSettings);

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