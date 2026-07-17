import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Sidebar from '@/components/admin/Sidebar';
import Navbar from '@/components/admin/Navbar';
import { verifyJWT } from '@/lib/jwt';

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');

  if (!session) {
    redirect('/admin/login');
  }

  const payload = await verifyJWT(session.value);
  if (!payload || payload.role !== 'admin') {
    redirect('/admin/login');
  }

  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 overflow-hidden font-sans">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 -z-10" />
          {children}
        </main>
      </div>
    </div>
  );
}
