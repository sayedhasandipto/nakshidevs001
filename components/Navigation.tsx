'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                <span className="text-lg font-bold text-white">SP</span>
              </div>
              <span className="text-xl font-bold text-gray-900">ServiceHub</span>
            </Link>

            <div className="hidden space-x-6 md:flex">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="/govservices" className="text-gray-600 hover:text-gray-900">
                Gov Services
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-gray-900">
                Services
              </Link>
              <Link href="/solutions" className="text-gray-600 hover:text-gray-900">
                Solutions
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
            </div>
          </div>

          <div className="hidden items-center space-x-4 md:flex">
            <Link href="/auth/login" className="text-gray-600 hover:text-gray-900">
              Log In
            </Link>
            <Link
              href="/auth/signup"
              className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2 font-semibold text-white hover:from-blue-700 hover:to-indigo-700"
            >
              Sign Up
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="space-y-3 pb-4 md:hidden">
            <Link href="/" className="block text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/govservices" className="block text-gray-600 hover:text-gray-900">
              Gov Services
            </Link>
            <Link href="/services" className="block text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link href="/solutions" className="block text-gray-600 hover:text-gray-900">
              Solutions
            </Link>
            <Link href="/about" className="block text-gray-600 hover:text-gray-900">
              About
            </Link>
            <div className="space-y-2 pt-4">
              <Link
                href="/auth/login"
                className="block text-gray-600 hover:text-gray-900"
              >
                Log In
              </Link>
              <Link
                href="/auth/signup"
                className="block rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-center font-semibold text-white"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
