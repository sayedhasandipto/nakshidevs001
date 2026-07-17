'use client';

import Link from 'next/link';

const footerLinks = {
  platform: [
    { label: 'সরকারি সেবা', href: '/gov-services' },
    { label: 'ব্যবসায়িক সমাধান', href: '/business-solutions' },
    { label: 'ওয়েব ডেভেলপমেন্ট', href: '/web-dev' },
    { label: 'মূল্য নির্ধারণ', href: '/services' },
  ],
  support: [
    { label: 'হেল্প সেন্টার', href: '/dashboard/support' },
    { label: 'যোগাযোগ করুন', href: '/dashboard/support' },
    { label: 'আমাদের সম্পর্কে', href: '/about' },
  ],
  legal: [
    { label: 'গোপনীয়তা নীতি', href: '#' },
    { label: 'শর্তাবলী', href: '#' },
    { label: 'কুকি নীতি', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #091a30 100%)',
      }}
    >
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/">
              <h3 className="text-xl font-bold text-white">GovService BD</h3>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
              আপনার প্রয়োজনীয় সকল অনলাইন সেবা এখন এক জায়গায়।
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              {['facebook', 'linkedin', 'twitter'].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="w-9 h-9 bg-white/[0.04] border border-white/[0.06] rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300"
                >
                  <span className="text-xs font-bold uppercase">{name[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-bold text-white/80 mb-5 text-sm uppercase tracking-wider" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
              প্লাটফর্ম
            </h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/35 hover:text-white/80 transition-colors duration-200" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-white/80 mb-5 text-sm uppercase tracking-wider" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
              সহায়তা
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/35 hover:text-white/80 transition-colors duration-200" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white/80 mb-5 text-sm uppercase tracking-wider" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
              আইনি
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/35 hover:text-white/80 transition-colors duration-200" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/25" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
            © ২০২৬ GovService BD। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="text-xs text-white/20" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
            বাংলাদেশ থেকে ❤️ দিয়ে তৈরি
          </p>
        </div>
      </div>
    </footer>
  );
}
