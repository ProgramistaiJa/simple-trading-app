'use client';

import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <header className="p-4 bg-transparent">
      <nav className="container flex items-center justify-between mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <RocketLaunchIcon className="w-8 h-8 text-indigo-500" />
          <span className="text-2xl font-bold">MyApp</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="hover:text-indigo-500">Dashboard</Link>
          <Link href="/settings" className="hover:text-indigo-500">Settings</Link>
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Header;
