'use client';
import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserIcon, LockClosedIcon, SunIcon, BellIcon, CreditCardIcon } from '@/components/Icons';

const settingsNav = [
  { name: 'Profile', href: '/settings', icon: UserIcon },
  { name: 'Password', href: '/settings/password', icon: LockClosedIcon },
  { name: 'Theme', href: '/settings/theme', icon: SunIcon },
  { name: 'Notifications', href: '/settings/notifications', icon: BellIcon },
  { name: 'Billing', href: '/settings/billing', icon: CreditCardIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function SettingsLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-primary text-light">
      <div className="w-1/4 bg-secondary p-6">
        <h2 className="text-2xl font-bold mb-6">Settings</h2>
        <nav className="space-y-1">
          {settingsNav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                pathname === item.href
                  ? 'bg-accent text-white'
                  : 'text-gray-400 hover:bg-primary hover:text-white',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
              )}
            >
              <item.icon
                className={classNames(
                  pathname === item.href
                    ? 'text-white'
                    : 'text-gray-400 group-hover:text-white',
                  'mr-3 flex-shrink-0 h-6 w-6'
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="w-3/4 p-8">
        {children}
      </div>
    </div>
  );
}
