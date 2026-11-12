import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* Bagian Atas / Header */}
      <div className="flex h-20 shrink-0 items-center justify-between rounded-lg bg-blue-500 p-4 md:h-52">
        {/* <AcmeLogo /> */}
        <Image
          src="/logo/uia-logo.png"
          width={500}
          height={350}
          className= "hidden md:block"
          alt="Banner UIA"
        />
      </div>

      {/* Bagian Konten Utama */}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        {/* Kolom Kiri: Teks Sambutan */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 dark:bg-gray-800 px-6 py-10 md:w-2/5 md:px-20 transition-colors">
          <p className={`${lusitana.className} text-xl text-gray-800 dark:text-gray-200 md:text-3xl md:leading-normal`}>
            <strong>Selamat Datang!</strong> <br /><br />Ini adalah situs web pembelajaran{' '}
             <a href="https://nextjs.org" className="text-blue-500 hover:underline">
               Mata Kuliah Web teknologi
             </a>
             , Dosen Pengampu <b>Adhitya Ahmad Pradypta, S.Kom., M.T.I.</b>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        {/* Kolom Kanan: Tempat Kartu Produk Anda */}
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12 bg-gray-100 dark:bg-gray-900 rounded-lg transition-colors">
        </div>
      </div>
    </main>
  );
}
