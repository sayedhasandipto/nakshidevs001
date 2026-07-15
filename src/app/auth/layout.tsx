import Header from '@/components/home/Header';
import Navigation from '@/components/layout/Navbar';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
