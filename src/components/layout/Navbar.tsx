'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMobileOpen(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gov Services', href: '/govservices' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                <span className="text-lg font-bold text-white">SP</span>
              </div>
              <span className="text-xl font-bold text-gray-900">ServiceHub</span>
            </Link>

            <div className="hidden space-x-6 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "transition-colors hover:text-gray-900",
                    pathname === link.href
                      ? "text-blue-600 font-semibold"
                      : "text-blue-600 font-semibold"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden items-center space-x-4 md:flex">
            <Link href="/auth/login" className="text-gray-600 hover:text-gray-900 transition-colors">
              Log In
            </Link>
            <Link
              href="/auth/signup"
              className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2 font-semibold text-white shadow hover:from-blue-700 hover:to-indigo-700 transition-all hover:shadow-md"
            >
              Sign Up
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="space-y-3 pb-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={cn(
                  "block px-2 py-1 text-base transition-colors hover:text-gray-900 hover:bg-gray-50 rounded-md",
                  pathname === link.href
                    ? "text-blue-600 font-semibold bg-blue-50"
                    : "text-blue-600 font-semibold"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="space-y-2 pt-4 border-t border-gray-100">
              <Link
                href="/auth/login"
                onClick={closeMenu}
                className="block px-2 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Log In
              </Link>
              <Link
                href="/auth/signup"
                onClick={closeMenu}
                className="block mx-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-center font-semibold text-white shadow-sm hover:from-blue-700 hover:to-indigo-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
