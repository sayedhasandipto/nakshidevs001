export default function StatsCounter() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-[#002045] rounded-3xl text-white shadow-xl">
        <div className="text-center space-y-2">
          <p className="text-3xl font-bold" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>৫০+</p>
          <p className="text-sm opacity-80" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>সরকারি সেবা</p>
        </div>
        <div className="text-center space-y-2 border-l border-white/20">
          <p className="text-3xl font-bold" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>১০কে+</p>
          <p className="text-sm opacity-80" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>সন্তুষ্ট গ্রাহক</p>
        </div>
        <div className="text-center space-y-2 border-l border-white/20">
          <p className="text-3xl font-bold" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>৫+</p>
          <p className="text-sm opacity-80" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>ব্যবসায়িক অ্যাওয়ার্ড</p>
        </div>
        <div className="text-center space-y-2 border-l border-white/20">
          <p className="text-3xl font-bold" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>২৪/৭</p>
          <p className="text-sm opacity-80" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>কাস্টমার সাপোর্ট</p>
        </div>
      </div>
    </section>
  );
}
