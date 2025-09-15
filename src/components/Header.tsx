'use client';

import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <header className="p-4 bg-gray-100 dark:bg-gray-800">
      <nav className="container flex items-center justify-between mx-auto">
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/signup">Sign Up</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/settings">Settings</Link></li>
        </ul>
        <ThemeSwitcher />
      </nav>
    </header>
  );
};

export default Header;
