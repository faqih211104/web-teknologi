'use client';

import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/solid';  
import { Button } from '@/app/ui/button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions'; // autentikasi

export default function Page() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-center justify-between rounded-lg bg-blue-500 p-4 md:h-52">
        <Image
          src="/uia-logo.png"
          width={500}
          height={350}
          className="block max-h-full w-auto object-contain"
          alt="Banner UIA"
          priority
        />
      </div>
      
      <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 dark:bg-gray-800 px-6 py-10 md:w-2/5 md:px-20 m-auto shadow-md transition-colors">
        <form action={formAction} className="space-y-3">
          <div className="flex-1 rounded-lg bg-gray-50 dark:bg-gray-800 px-6 pb-4 pt-8">
            <h1 className={`${lusitana.className} mb-3 text-2xl font-semibold text-gray-900 dark:text-gray-100`}>
              Silakan Masuk dengan akun Anda.
            </h1>
            
            <div className="w-full">
              {/* Kolom Email */}
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-gray-200"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 py-[9px] pl-10 text-sm text-gray-900 dark:text-gray-100 outline-2 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Ketikkkan alamat email"
                    required
                  />
                  <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-400 dark:peer-focus:text-gray-200" />
                </div>
              </div>
              
              {/* Kolom Password */}
              <div className="mt-4">
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-gray-200"
                  htmlFor="password"
                >
                  Kata Sandi
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 py-[9px] pl-10 text-sm text-gray-900 dark:text-gray-100 outline-2 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Ketikkkan Kata Sandi"
                    required
                    minLength={6}
                  />
                  <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-400 dark:peer-focus:text-gray-200" />
                </div>
              </div>
              
              {/* Tombol Submit */}
              <Button className="mt-4 w-full" aria-disabled={isPending} disabled={isPending}>
                {isPending ? 'Memproses...' : 'Masuk'}{' '}
                <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
              </Button>
              
              <div
                className="flex h-8 items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
              >
                {errorMessage && (
                  <>
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">{errorMessage}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
