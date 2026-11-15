'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-lg bg-gray-50 dark:bg-gray-800 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 dark:hover:bg-gray-700 md:flex-none md:justify-start md:p-2 md:px-3 text-gray-600 dark:text-gray-300 transition-colors',
              {
                'bg-sky-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 font-semibold': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6 shrink-0 text-current" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
