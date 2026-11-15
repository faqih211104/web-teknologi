export default function Footer({ className = '' }: { className?: string }) {
  return (
    <footer className={`w-full py-4 text-center text-xs text-gray-500 dark:text-gray-400 ${className}`}>
      <p>
        <span className="font-semibold text-gray-700 dark:text-gray-300">Faqih Nur Zaki</span>
        {' '}&bull;{' '}
        <span>NIM: 3420230041</span>
        {' '}&bull;{' '}
        <span>Teknik Informatika - TFUIA</span>
      </p>
    </footer>
  );
}
