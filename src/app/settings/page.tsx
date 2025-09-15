'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function SettingsPage() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeButton = () => {
    if (!mounted) {
      return null;
    }

    return (
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-center">Settings</h1>
        <p className="text-center text-gray-500 dark:text-gray-400">
          Manage your account settings and preferences.
        </p>
        <div className="flex items-center justify-between">
          <p className="text-lg text-gray-600 dark:text-gray-300">Theme</p>
          {renderThemeButton()}
        </div>
      </div>
    </div>
  );
}
