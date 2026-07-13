'use client';

import Link from 'next/link';

export default function GovFooter() {
  return (
    <footer className="w-full py-8 px-6 mt-16 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#002045] text-white">
      <div className="flex flex-col items-center md:items-start gap-2">
        <span 
          className="font-bold"
          style={{
            fontSize: '20px',
            lineHeight: '28px'
          }}
        >
          GovService BD
        </span>
        <p 
          className="text-white/80"
          style={{
            fontSize: '14px',
            lineHeight: '20px'
          }}
        >
          © 2024 GovService BD. Digital Infrastructure for Citizens.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6">
        <Link 
          href="#" 
          className="text-white/80 hover:text-white transition-all"
          style={{
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: '600'
          }}
        >
          Privacy Policy
        </Link>
        <Link 
          href="#" 
          className="text-white/80 hover:text-white transition-all"
          style={{
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: '600'
          }}
        >
          Terms of Service
        </Link>
        <Link 
          href="#" 
          className="text-white/80 hover:text-white transition-all"
          style={{
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: '600'
          }}
        >
          Help Center
        </Link>
        <Link 
          href="#" 
          className="text-white/80 hover:text-white transition-all"
          style={{
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: '600'
          }}
        >
          Contact Us
        </Link>
        <Link 
          href="#" 
          className="text-white/80 hover:text-white transition-all"
          style={{
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: '600'
          }}
        >
          Service Directory
        </Link>
      </div>
    </footer>
  );
}
