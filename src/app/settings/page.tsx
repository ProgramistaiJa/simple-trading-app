'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from 'react';

const SettingsPage = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Settings</h1>
        <div className="flex items-center justify-between">
          <p className="text-lg text-gray-600 dark:text-gray-300">Theme</p>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            {mounted ? (theme === 'light' ? 'Switch to Dark' : 'Switch to Light') : '...'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
