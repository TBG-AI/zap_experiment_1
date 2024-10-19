import SideNav from '@/app/ui/dashboard/sidenav';
import { GeistMono } from 'geist/font/mono';

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={GeistMono.className}>
      <div >
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}