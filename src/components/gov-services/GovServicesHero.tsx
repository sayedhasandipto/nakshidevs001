export default function GovServicesHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#001830] via-[#002045] to-[#0a1628] py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <span className="inline-block bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-sm font-semibold px-5 py-2 rounded-full mb-6 tracking-wide">
          🇧🇩 সরকারি সেবা পোর্টাল
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          নাগরিক সেবা
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mt-2">
            ডিরেক্টরি
          </span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          বাংলাদেশের নাগরিকদের জন্য ডিজিটাল প্রশাসনিক সেবা এখন হাতের মুঠোয়। দ্রুত এবং স্বচ্ছ আবেদন প্রক্রিয়ার মাধ্যমে আপনার প্রয়োজনীয় সেবা গ্রহণ করুন।
        </p>
      </div>
    </section>
  );
}