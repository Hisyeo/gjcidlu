"use client";

import { createContext, useState, useContext, ReactNode } from 'react';
import { UserSystem } from '@/lib/types';

interface UserSettings {
  userSystem: UserSystem | null;
  userId: string | null;
}

interface SettingsContextType {
  settings: UserSettings;
  setSettings: (settings: UserSettings) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

const SETTINGS_CACHE_KEY = 'userSettings';

function getInitialSettings(): UserSettings {
    if (typeof window === 'undefined') {
        return { userSystem: null, userId: null };
    }
    try {
        const storedSettings = localStorage.getItem(SETTINGS_CACHE_KEY);
        return storedSettings ? JSON.parse(storedSettings) : { userSystem: null, userId: null };
    } catch (error) {
        console.error("Failed to read user settings from localStorage:", error);
        return { userSystem: null, userId: null };
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