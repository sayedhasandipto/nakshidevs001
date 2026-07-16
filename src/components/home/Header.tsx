'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { useSession, signOut } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/');
      router.refresh();
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const user = session?.user;
  const firstInitial = user?.name ? user.name.charAt(0).toUpperCase() : 'U';

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-gray-200/50">
      <div className="flex items-center justify-between w-full px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <Link href="/">
            <h1 className="text-2xl font-bold text-[#002045]">GovService BD</h1>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost">Home</Button>
          </Link>
          <Link href="/gov-services">
            <Button variant="ghost">Gov Services</Button>
          </Link>
          <Link href="/business-solutions">
            <Button variant="ghost">Business Solutions</Button>
          </Link>
          <Link href="/web-dev">
            <Button variant="ghost">Web Dev</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost">About</Button>
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {isPending ? (
            <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200"></div>
          ) : session ? (
            <div className="flex items-center gap-3">
              <Link href="/dashboard" title="Go to Dashboard">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 cursor-pointer hover:shadow-lg transition-all">
                  <span className="text-white font-bold">{firstInitial}</span>
                </div>
              </Link>
              <Button variant="ghost" onClick={handleLogout} className="hidden md:flex">
                Log Out
              </Button>
            </div>
          ) : (
            <>
              <Button variant="ghost">
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button variant="primary">
                <Link href="/auth/signup">Sign Up</Link>
              </Button>
            </>
          )}

          <button
            className="lg:hidden p-2 text-gray-600 hover:text-[#002045] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-[500px] opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4 bg-gray-50">
          <Link href="/">
            <Button variant="ghost" className="w-full justify-start">Home</Button>
          </Link>
          <Link href="/gov-services">
            <Button variant="ghost" className="w-full justify-start">Gov Services</Button>
          </Link>
          <Link href="/business-solutions">
            <Button variant="ghost" className="w-full justify-start">Business Solutions</Button>
          </Link>
          <Link href="/web-dev">
            <Button variant="ghost" className="w-full justify-start">Web Dev</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost" className="w-full justify-start">About</Button>
          </Link>
          {session && (
            <Button variant="ghost" className="w-full justify-start text-red-600" onClick={handleLogout}>
              Log Out
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
