'use client';

import Link from 'next/link';

const features = [
  { icon: 'devices', text: 'মোবাইল ফ্রেন্ডলি ডিজাইন' },
  { icon: 'bolt', text: 'সুপার ফাস্ট লোডিং স্পিড' },
  { icon: 'shield', text: 'লাইফটাইম টেকনিক্যাল সাপোর্ট' },
  { icon: 'trending_up', text: 'SEO অপটিমাইজড' },
];

export default function BusinessScaleup() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #0d2137 40%, #0f2b4a 100%)',
      }}
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

        {/* Left Text */}
        <div className="space-y-8 order-2 lg:order-1">
          <div>
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-4" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
              ওয়েব ডেভেলপমেন্ট সার্ভিস
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
              আপনার ছোট ব্যবসাকে বড় করুন{' '}
              <span className="text-transparent bg-clip-text" style={{
                backgroundImage: 'linear-gradient(135deg, #34d399, #60a5fa)',
              }}>
                পেশাদার ওয়েবসাইটের
              </span>{' '}
              মাধ্যমে
            </h2>
          </div>

          <p className="text-lg text-white/50 leading-relaxed" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
            একটি ওয়েবসাইট আপনার ব্যবসার পরিচয় বদলে দিতে পারে। আমরা সুলভ মূল্যে আধুনিক ই-কমার্স বা পোর্টফোলিও ওয়েবসাইট তৈরি করে দিচ্ছি।
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.text} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300 group">
                <div className="w-9 h-9 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>{f.icon}</span>
                </div>
                <span className="text-white/70 text-sm font-medium" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
                  {f.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/business-solutions">
              <button className="px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl font-semibold text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300"
                style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
              >
                প্যাকেজগুলো দেখুন
              </button>
            </Link>
            <button className="px-7 py-3.5 border border-white/10 text-white/70 hover:text-white hover:border-white/25 hover:bg-white/[0.04] rounded-xl font-semibold text-sm transition-all duration-300"
              style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
            >
              ফ্রি কনসালটেশন
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Glow ring */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl blur-2xl scale-105 pointer-events-none" />
            
            {/* Main image card */}
            <div className="relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-3 hover:border-white/[0.15] transition-all duration-500">
              <img
                className="w-full rounded-2xl"
                alt="E-commerce mockup"
                src="https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>

            {/* Floating price badge */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white/[0.08] backdrop-blur-xl border border-white/[0.1] rounded-2xl px-5 py-4 shadow-2xl"
              style={{ animation: 'floatBadge 4s ease-in-out infinite' }}
            >
              <p className="text-xs text-white/40 mb-1" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>শুরু মাত্র</p>
              <p className="text-2xl font-black text-white" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>৳৫,০০০</p>
              <p className="text-xs text-emerald-400 mt-1" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>সম্পূর্ণ ওয়েবসাইট</p>
            </div>

            {/* Floating review badge */}
            <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 bg-white/[0.08] backdrop-blur-xl border border-white/[0.1] rounded-2xl px-4 py-3 shadow-2xl"
              style={{ animation: 'floatBadge 4s ease-in-out infinite 2s' }}
            >
              <div className="flex gap-0.5 mb-1">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="material-symbols-outlined text-amber-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-xs text-white/60" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>১০০+ রিভিউ</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
