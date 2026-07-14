'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function GovHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#c4c6cf] bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span 
            className="font-bold text-[#002045]"
            style={{
              fontSize: '36px',
              lineHeight: '44px',
              letterSpacing: '-0.02em'
            }}
          >
            GovService BD
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className="text-[#43474e] hover:text-[#002045] transition-colors"
            style={{
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '600'
            }}
          >
            Home
          </Link>
          <Link 
            href="/govservices" 
            className="text-[#002045] border-b-2 border-[#002045] pb-1"
            style={{
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '600'
            }}
          >
            Gov Services
          </Link>
          <Link 
            href="/solutions" 
            className="text-[#43474e] hover:text-[#002045] transition-colors"
            style={{
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '600'
            }}
          >
            Business Solutions
          </Link>
          <Link 
            href="/webdev" 
            className="text-[#43474e] hover:text-[#002045] transition-colors"
            style={{
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '600'
            }}
          >
            Web Dev
          </Link>
          <Link 
            href="/about" 
            className="text-[#43474e] hover:text-[#002045] transition-colors"
            style={{
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '600'
            }}
          >
            About
          </Link>
        </nav>

        {/* CTA Button */}
        <button className="bg-[#002045] text-white px-6 py-2 rounded-lg hover:opacity-90 active:scale-95 transition-all"
          style={{
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '600'
          }}
        >
          Track Application
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-4"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#c4c6cf] px-6 py-4 space-y-3">
          <Link href="/" className="block text-[#43474e] hover:text-[#002045]">
            Home
          </Link>
          <Link href="/govservices" className="block text-[#002045] font-semibold">
            Gov Services
          </Link>
          <Link href="/solutions" className="block text-[#43474e] hover:text-[#002045]">
            Business Solutions
          </Link>
          <Link href="/webdev" className="block text-[#43474e] hover:text-[#002045]">
            Web Dev
          </Link>
          <Link href="/about" className="block text-[#43474e] hover:text-[#002045]">
            About
          </Link>
        </div>
      )}
    </header>
  );
}
