'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemePage() {
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
        className="px-4 py-2 text-white bg-accent rounded-md hover:bg-accent-dark"
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    );
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Theme</h1>
      <div className="space-y-4">
        <p className="text-gray-400">Customize the appearance of the application.</p>
        {renderThemeButton()}
      </div>
    </div>
  );
}
