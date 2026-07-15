'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between w-full px-6 py-4 max-w-5xl mx-auto">
        <div className="flex items-center gap-3">
          <Link href="/">
            <h1 className="text-2xl font-bold text-[#002045]">GovService BD</h1>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <Link className="text-sm font-medium text-gray-600 hover:text-[#002045] transition-colors" href="/">Home</Link>
          <Link className="text-sm font-medium text-gray-600 hover:text-[#002045] transition-colors" href="/gov-services">Gov Services</Link>
          <Link className="text-sm font-medium text-gray-600 hover:text-[#002045] transition-colors" href="#business">Business Solutions</Link>
          <Link className="text-sm font-medium text-gray-600 hover:text-[#002045] transition-colors" href="#webdev">Web Dev</Link>
          <Link className="text-sm font-medium text-gray-600 hover:text-[#002045] transition-colors" href="#about">About</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost">
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button variant="primary">
            <Link href="/auth/signup">Sign Up</Link>
          </Button>

          {/* <button className="hidden md:flex items-center px-6 py-2 bg-[#002045] text-white rounded-full text-sm font-semibold hover:bg-blue-800 transition-colors">
            Track Application
          </button> */}
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
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-[400px] opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4 bg-gray-50">
          <Link
            className="text-sm font-medium text-[#002045]"
            href="/"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium text-gray-600 hover:text-[#002045]"
            href="/gov-services"
            onClick={() => setMobileMenuOpen(false)}
          >
            Gov Services
          </Link>
          <Link
            className="text-sm font-medium text-gray-600 hover:text-[#002045]"
            href="#business"
            onClick={() => setMobileMenuOpen(false)}
          >
            Business Solutions
          </Link>
          <Link
            className="text-sm font-medium text-gray-600 hover:text-[#002045]"
            href="#webdev"
            onClick={() => setMobileMenuOpen(false)}
          >
            Web Dev
          </Link>
          <Link
            className="text-sm font-medium text-gray-600 hover:text-[#002045]"
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <button className="md:hidden mt-2 w-full py-2 bg-[#002045] text-white rounded-full text-sm font-semibold hover:bg-blue-800 transition-colors">
            Track Application
          </button>
        </div>
      </div>
    </header>
  );
}
