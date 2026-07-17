'use client';

import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  end: number;
  suffix: string;
  label: string;
  icon: string;
}

function AnimatedCounter({ end, suffix, label, icon }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="relative group text-center p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-12 h-12 mx-auto mb-4 bg-white/[0.06] border border-white/[0.08] rounded-xl flex items-center justify-center text-blue-300 group-hover:scale-110 group-hover:border-blue-400/30 transition-all duration-300">
          <span className="material-symbols-outlined text-xl">{icon}</span>
        </div>
        <p className="text-3xl sm:text-4xl font-black text-white mb-1 tabular-nums">
          {count}{suffix}
        </p>
        <p className="text-sm text-white/50" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
          {label}
        </p>
      </div>
    </div>
  );
}

export default function StatsCounter() {
  const stats = [
    { end: 50, suffix: '+', label: 'সরকারি সেবা', icon: 'account_balance' },
    { end: 10, suffix: 'কে+', label: 'সন্তুষ্ট গ্রাহক', icon: 'groups' },
    { end: 5, suffix: '+', label: 'ব্যবসায়িক অ্যাওয়ার্ড', icon: 'emoji_events' },
    { end: 24, suffix: '/৭', label: 'কাস্টমার সাপোর্ট', icon: 'support_agent' },
  ];

  return (
    <section className="relative -mt-1 py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08]"
          style={{
            background: 'linear-gradient(135deg, #0d2137 0%, #0a1c30 50%, #0f2b4a 100%)',
          }}
        >
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
            {stats.map((stat, i) => (
              <AnimatedCounter key={i} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
