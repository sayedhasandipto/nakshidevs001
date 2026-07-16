'use client';

import Link from 'next/link';
import { useSession } from '@/lib/auth-client';
import Header from '@/components/home/Header';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: session, isPending } = useSession();
  const pathname = usePathname();

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const user = session?.user;

  // Helper for active link styling
  const isActive = (path: string) => pathname === path;
  const linkClass = (path: string) => 
    `block rounded-lg px-4 py-3 font-medium transition-colors ${
      isActive(path) 
        ? 'bg-blue-50 text-blue-600' 
        : 'text-gray-700 hover:bg-gray-50'
    }`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex h-[calc(100vh-73px)] pt-[73px]">
        <aside className="w-64 border-r border-gray-200 bg-white p-6 overflow-y-auto hidden md:block">
          <nav className="space-y-2">
            <Link href="/dashboard" className={linkClass('/dashboard')}>
              Dashboard
            </Link>
            
            {(user?.role === 'client' || user?.role === 'provider' || !user?.role) && (
              <>
                <Link href="/dashboard/services" className={linkClass('/dashboard/services')}>
                  Services
                </Link>
                <Link href="/dashboard/orders" className={linkClass('/dashboard/orders')}>
                  Orders
                </Link>
              </>
            )}

            {user?.role === 'provider' && (
              <Link href="/dashboard/add-service" className={linkClass('/dashboard/add-service')}>
                Add Service
              </Link>
            )}

            {user?.role === 'business' && (
              <>
                <Link href="/dashboard/website-builder" className={linkClass('/dashboard/website-builder')}>
                  Website Builder
                </Link>
                <Link href="/dashboard/store" className={linkClass('/dashboard/store')}>
                  Online Store
                </Link>
              </>
            )}

            <Link href="/dashboard/profile" className={linkClass('/dashboard/profile')}>
              Profile Settings
            </Link>
            <Link href="/dashboard/support" className={linkClass('/dashboard/support')}>
              Support Chat
            </Link>
          </nav>
        </aside>

        <main className="flex-1 overflow-auto p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
