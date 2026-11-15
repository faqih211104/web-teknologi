import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import Footer from '@/app/ui/footer';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-4 md:p-6 justify-between">
      <div>
        {/* Bagian Atas / Header */}
        <div className="flex h-20 shrink-0 items-center justify-start rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 p-4 md:h-44 shadow-md">
          <Image
            src="/uia-logo.png"
            width={450}
            height={200}
            className="block max-h-full w-auto object-contain"
            alt="Banner UIA"
            priority
          />
        </div>

        {/* Bagian Konten Utama */}
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
          {/* Kolom Kiri: Teks Sambutan */}
          <div className="flex flex-col justify-center gap-6 rounded-xl bg-white dark:bg-gray-800 px-6 py-10 md:w-2/5 md:px-16 transition-colors shadow-md border border-blue-100 dark:border-gray-700">
            <p className={`${lusitana.className} text-xl text-gray-800 dark:text-gray-200 md:text-3xl md:leading-normal`}>
              <strong>Selamat Datang!</strong> <br /><br />Ini adalah situs web pembelajaran{' '}
              <a href="https://nextjs.org" className="text-blue-500 hover:underline">
                Mata Kuliah Web teknologi
              </a>
              , Dosen Pengampu <b>Adhitya Ahmad Pradypta, S.Kom., M.T.I.</b>
            </p>
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-500 shadow-md shadow-blue-200 dark:shadow-blue-900/40 md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>

          {/* Kolom Kanan: Spacer / Background */}
          <div className="hidden md:flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12 bg-gradient-to-br from-blue-50 to-blue-100/60 dark:from-gray-800/60 dark:to-blue-900/20 rounded-xl border border-blue-100 dark:border-gray-700 transition-colors shadow-sm">
          </div>
        </div>
      </div>

      {/* Identitas Pembuat */}
      <Footer className="mt-6" />
    </main>
  );
}
