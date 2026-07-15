import { GoCheckCircleFill } from "react-icons/go";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-16 lg:pt-24 lg:pb-24 px-6">
      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            ডিজিটাল বাংলাদেশ এখন স্মার্ট বাংলাদেশ
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-[#002045] leading-tight" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
            আপনার প্রয়োজনীয় সকল <span className="text-[#0a6c44]">অনলাইন সেবা</span> এখন এক জায়গায়
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
            সরকারি আবেদন থেকে শুরু করে ব্যবসার জন্য ওয়েবসাইট তৈরি - আমরা আছি আপনার পাশে। স্বচ্ছতা এবং দ্রুততার সাথে নাগরিক সেবা গ্রহণ করুন।
          </p>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-2 p-2 bg-white rounded-xl shadow-lg border border-gray-200 max-w-2xl">
            <div className="flex-1 flex items-center gap-3 px-4">
              <span className="material-symbols-outlined text-gray-400">search</span>
              <input
                className="w-full border-none focus:ring-0 text-gray-900 bg-transparent placeholder-gray-400"
                placeholder="যেমন: জন্ম নিবন্ধন, ট্রেড লাইসেন্স..."
                type="text"
                style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
              />
            </div>
            <button className="px-6 py-2 bg-[#002045] text-white rounded-lg font-semibold hover:bg-blue-800 transition-all" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
              সার্চ করুন
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              className="w-full h-full object-cover"
              alt="Digital service illustration"
              src="https://images.unsplash.com/photo-1641951820920-c90394aef512?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002045]/30 to-transparent"></div>
          </div>

          {/* Floating Stats Card */}
          <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="flex items-center gap-3">
              <div className="bg-[#0a6c44] rounded-full p-2 text-white">
                <GoCheckCircleFill />
              </div>
              <div>
                <p className="font-bold text-[#002045]" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>৯৯% সফলতা</p>
                <p className="text-xs text-gray-600 uppercase" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>আবেদন ভেরিফিকেশন</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50 opacity-50 -skew-x-12 -z-10 translate-x-1/2"></div>
    </section>
  );
}
