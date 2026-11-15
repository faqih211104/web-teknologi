import SideNav from '@/app/ui/dashboard/sidenav';
import Footer from '@/app/ui/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow flex flex-col justify-between p-6 md:overflow-y-auto md:p-12">
        <div className="flex-grow">
          {children}
        </div>
        <Footer className="mt-8" />
      </div>
    </div>
  );
}
