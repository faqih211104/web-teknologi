import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'; 
import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-center justify-start rounded-xl bg-gradient-to-b from-blue-500 to-blue-700 p-4 md:h-40 shadow-md"
        href="/"
      >
        <div className="w-36 h-full flex items-center md:w-44">
          <Image
            src="/uia-logo.png"
            width={300}
            height={160}
            className="block max-h-full w-auto object-contain"
            alt="Banner uia"
            priority
          />
        </div>
      </Link>
      
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 dark:bg-gray-800 md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-lg bg-gray-50 dark:bg-gray-800 p-3 text-sm font-medium hover:bg-red-50 hover:text-red-600 dark:hover:bg-gray-700 dark:hover:text-red-400 md:flex-none md:justify-start md:p-2 md:px-3 text-gray-700 dark:text-gray-200 transition-colors">
            <PowerIcon className="w-6 shrink-0" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
