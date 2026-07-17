'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const TYPING_TEXTS = [
  'জন্ম নিবন্ধন',
  'পাসপোর্ট আবেদন',
  'ট্রেড লাইসেন্স',
  'ওয়েবসাইট ডিজাইন',
  'লোগো ডিজাইন',
];

export default function HeroSection() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [services, setServices] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Typewriter effect
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_TEXTS[textIndex];
    const speed = isDeleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(current.slice(0, charIndex + 1));
        setCharIndex((p) => p + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setTypedText(current.slice(0, charIndex - 1));
        setCharIndex((p) => p - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((p) => (p + 1) % TYPING_TEXTS.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const res = await fetch(`${API_URL}/api/services`);
        if (res.ok) {
          const json = await res.json();
          setServices(json.data || []);
        }
      } catch (err) {
        console.error('Failed to fetch services for hero:', err);
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setFiltered([]);
      return;
    }
    const matches = services.filter((s) =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.category.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(matches.slice(0, 5));
  }, [query, services]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/services?search=${encodeURIComponent(query.trim())}`);
    } else {
      router.push('/services');
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center px-4 sm:px-6"
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #0d2137 25%, #0f2b4a 50%, #0a2240 75%, #091a30 100%)',
      }}
    >
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[800px] h-[800px] -top-[200px] -right-[200px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
            animation: 'float 12s ease-in-out infinite',
          }}
        />
        <div className="absolute w-[600px] h-[600px] -bottom-[100px] -left-[150px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 70%)',
            animation: 'float 15s ease-in-out infinite reverse',
          }}
        />
        <div className="absolute w-[400px] h-[400px] top-[40%] left-[30%] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
            animation: 'float 18s ease-in-out infinite 3s',
          }}
        />
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-24 lg:py-0">
        
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/[0.06] border border-white/[0.08] rounded-full backdrop-blur-sm"
            style={{ animation: 'fadeInUp 0.6s ease-out' }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="text-white/80 text-xs font-medium tracking-wide" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
              ডিজিটাল সেবা এখন আপনার দোরগোড়ায়
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            style={{ fontFamily: 'Hind Siliguri, sans-serif', animation: 'fadeInUp 0.6s ease-out 0.15s both' }}
          >
            সকল নাগরিক ও ব্যবসায়িক{' '}
            <span className="text-transparent bg-clip-text" style={{
              backgroundImage: 'linear-gradient(135deg, #60a5fa 0%, #34d399 50%, #a78bfa 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 5s ease-in-out infinite',
            }}>
              অনলাইন সেবা
            </span>{' '}
            এক স্থানে
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/60 max-w-xl leading-relaxed mx-auto lg:mx-0"
            style={{ fontFamily: 'Hind Siliguri, sans-serif', animation: 'fadeInUp 0.6s ease-out 0.3s both' }}
          >
            সরকারি আবেদনপত্র পূরণ, জন্ম নিবন্ধন, ই-টিন, ট্রেড লাইসেন্স থেকে শুরু করে প্রফেশনাল ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট — প্রতিটি কাজ হবে স্বচ্ছ ও দ্রুততম সময়ে।
          </p>

          {/* Search Box */}
          <div className="relative max-w-xl mx-auto lg:mx-0" ref={dropdownRef}
            style={{ animation: 'fadeInUp 0.6s ease-out 0.45s both' }}
          >
            <form onSubmit={handleSearchSubmit}
              className="flex p-1.5 bg-white/[0.07] backdrop-blur-xl rounded-2xl border border-white/[0.1] transition-all duration-300 focus-within:bg-white/[0.1] focus-within:border-white/[0.2] focus-within:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
            >
              <div className="flex-1 flex items-center gap-3 px-4">
                <span className="material-symbols-outlined text-white/40 text-xl">search</span>
                <input
                  className="w-full border-none focus:ring-0 text-white bg-transparent placeholder-white/30 text-sm focus:outline-none"
                  placeholder={typedText + '|'}
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                  style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
                />
              </div>
              <button
                type="submit"
                className="px-5 sm:px-7 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-500/25 transition-all duration-200 shrink-0 hover:shadow-blue-500/40"
                style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
              >
                খুঁজুন
              </button>
            </form>

            {/* Suggestions dropdown */}
            {showDropdown && (query || filtered.length > 0) && (
              <div className="absolute left-0 right-0 mt-3 bg-[#0f2b4a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden z-50">
                {filtered.length > 0 ? (
                  <div className="p-2">
                    {filtered.map((service) => (
                      <button
                        key={service.serviceId}
                        onClick={() => {
                          router.push(`/services/${service.serviceId}`);
                          setShowDropdown(false);
                        }}
                        className="w-full flex items-center justify-between text-left px-4 py-3 hover:bg-white/[0.06] rounded-xl transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center">
                            <span className="material-symbols-outlined text-base">layers</span>
                          </div>
                          <div>
                            <p className="font-semibold text-white text-sm group-hover:text-blue-300 transition-colors" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
                              {service.title}
                            </p>
                            <p className="text-xs text-white/40 capitalize">{service.category}</p>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-white/20 group-hover:text-blue-400 transition-all text-base">arrow_forward</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="px-6 py-6 text-center text-white/40 text-sm" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
                    খুঁজে পাওয়া যায়নি।
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Quick Action Tags */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start" style={{ animation: 'fadeInUp 0.6s ease-out 0.6s both' }}>
            <span className="text-xs text-white/30 mr-1 self-center" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>জনপ্রিয়:</span>
            {['জন্ম নিবন্ধন', 'NID সংশোধন', 'পাসপোর্ট', 'ওয়েবসাইট'].map((tag) => (
              <button
                key={tag}
                onClick={() => { setQuery(tag); setShowDropdown(true); }}
                className="px-3.5 py-1.5 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.06] text-white/50 hover:text-white/80 rounded-lg text-xs transition-all duration-200"
                style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Floating Dashboard Cards */}
        <div className="relative hidden lg:flex flex-col gap-5 justify-center perspective-[1200px]"
          style={{ animation: 'fadeInRight 0.8s ease-out 0.3s both' }}
        >
          {/* Decorative glow */}
          <div className="absolute -inset-12 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Card 1: NID Service (Completed) */}
          <div className="bg-white/[0.06] backdrop-blur-lg rounded-2xl border border-white/[0.08] p-5 hover:bg-white/[0.09] hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group"
            style={{ animation: 'floatCard 6s ease-in-out infinite' }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-r" />
            <div className="flex items-center justify-between pl-3">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">contact_mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>জাতীয় পরিচয়পত্র সংশোধন</h4>
                  <p className="text-xs text-white/30 mt-0.5" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>অর্ডার আইডি: #NID-2026</p>
                </div>
              </div>
              <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-lg" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>সম্পন্ন ✓</span>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-white/30 border-t border-white/[0.05] pt-3 pl-3">
              <span style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>৳৫০০ (পেইড)</span>
              <span style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>১০ মিনিট আগে</span>
            </div>
          </div>

          {/* Card 2: Trade License (In Progress) */}
          <div className="bg-white/[0.06] backdrop-blur-lg rounded-2xl border border-white/[0.08] p-5 hover:bg-white/[0.09] hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group ml-8"
            style={{ animation: 'floatCard 6s ease-in-out infinite 2s' }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-r" />
            <div className="flex items-center justify-between pl-3">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">business</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>নতুন ট্রেড লাইসেন্স আবেদন</h4>
                  <p className="text-xs text-white/30 mt-0.5" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>অর্ডার আইডি: #TRD-4482</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="px-2.5 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-lg" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>চলমান</span>
              </div>
            </div>
            {/* Progress bar */}
            <div className="mt-4 pl-3">
              <div className="w-full bg-white/[0.05] rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full" style={{ width: '65%', animation: 'progressPulse 2s ease-in-out infinite' }} />
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-white/30 border-t border-white/[0.05] pt-3 pl-3">
              <span style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>৳১২০০ (পেইড)</span>
              <span style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>১ ঘণ্টা আগে</span>
            </div>
          </div>

          {/* Card 3: E-Commerce Web (Pending) */}
          <div className="bg-white/[0.06] backdrop-blur-lg rounded-2xl border border-white/[0.08] p-5 hover:bg-white/[0.09] hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group"
            style={{ animation: 'floatCard 6s ease-in-out infinite 4s' }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-amber-600 rounded-r" />
            <div className="flex items-center justify-between pl-3">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-amber-500/10 text-amber-400 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">code</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>ই-কমার্স ওয়েবসাইট তৈরি</h4>
                  <p className="text-xs text-white/30 mt-0.5" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>অর্ডার আইডি: #WEB-9031</p>
                </div>
              </div>
              <span className="px-2.5 py-1 bg-amber-500/10 text-amber-400 text-xs font-bold rounded-lg" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>অপেক্ষমান</span>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-white/30 border-t border-white/[0.05] pt-3 pl-3">
              <span style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>৳১৫,০০০ (আনপেইড)</span>
              <span style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>২ ঘণ্টা আগে</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="white"/>
        </svg>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-30px) translateX(15px); }
          50% { transform: translateY(-15px) translateX(-10px); }
          75% { transform: translateY(-35px) translateX(5px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes progressPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}
