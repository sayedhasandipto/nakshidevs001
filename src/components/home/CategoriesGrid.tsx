export default function CategoriesGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-[#002045] mb-3" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>জনপ্রিয় সেবা ক্যাটাগরি</h2>
          <p className="text-gray-600" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>আপনার প্রয়োজনীয় সেবাটি সহজেই খুঁজে নিন আমাদের ক্যাটাগরিগুলো থেকে।</p>
        </div>
        <a href="/gov-services" className="flex items-center gap-2 text-[#002045] hover:gap-4 transition-all font-semibold" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
          সবগুলো দেখুন <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Large Card: Gov Services */}
        <a href="/gov-services" className="md:col-span-8 bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-lg transition-shadow group">
          <div className="flex justify-between items-start mb-8">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#002045]">
              <span className="material-symbols-outlined text-5xl">account_balance</span>
            </div>
            <span className="material-symbols-outlined text-gray-400 group-hover:text-[#002045] transition-colors">open_in_new</span>
          </div>
          <h3 className="text-2xl font-bold text-[#002045] mb-4" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>সরকারি আবেদন</h3>
          <p className="text-gray-600 mb-6" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>জন্ম নিবন্ধন, এনআইডি সংশোধন, পাসপোর্ট থেকে শুরু করে সকল সরকারি ফর্ম ফিলআপে আমরা বিশেষজ্ঞ।</p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>জন্ম নিবন্ধন</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>NID সেবা</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>পাসপোর্ট আবেদন</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>+১२ আরও</span>
          </div>
        </a>

        {/* Small Card: Business */}
        <div className="md:col-span-4 bg-green-50 p-8 rounded-3xl border border-green-200 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-[#0a6c44] text-white rounded-xl flex items-center justify-center mb-6">
            <span className="material-symbols-outlined">business_center</span>
          </div>
          <h3 className="text-xl font-bold text-[#002045] mb-3" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>ব্যবসায়িক সেবা</h3>
          <p className="text-gray-600 mb-4" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>ট্রেড লাইসেন্স, টিআইএন এবং ভ্যাট সংক্রান্ত সকল সমাধান।</p>
          <a className="text-[#0a6c44] inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all" href="#" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
            শুরু করুন <span className="material-symbols-outlined text-lg">chevron_right</span>
          </a>
        </div>

        {/* Small Card: Web Dev */}
        <div className="md:col-span-4 bg-blue-50 p-8 rounded-3xl border border-blue-200 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-[#002045] text-white rounded-xl flex items-center justify-center mb-6">
            <span className="material-symbols-outlined">code</span>
          </div>
          <h3 className="text-xl font-bold text-[#002045] mb-3" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>ওয়েবসাইট ডেভেলপমেন্ট</h3>
          <p className="text-gray-600 mb-4" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>আপনার ব্যবসার জন্য আধুনিক ও দ্রুত ওয়েবসাইট।</p>
          <a className="text-[#002045] inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all" href="#" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
            বিস্তারিত <span className="material-symbols-outlined text-lg">chevron_right</span>
          </a>
        </div>

        {/* Large Card: Support */}
        <div className="md:col-span-8 bg-white p-8 rounded-3xl border border-gray-200 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition-shadow">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#002045] mb-3" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>সার্বক্ষণিক সহায়তা কেন্দ্র</h3>
            <p className="text-gray-600 mb-4" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>আমাদের সাপোর্ট টিম যে কোন জটিলতায় আপনার পাশে আছে।</p>
            <button className="px-6 py-2 border-2 border-[#002045] text-[#002045] rounded-lg font-semibold hover:bg-[#002045] hover:text-white transition-all" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
              কল করুন
            </button>
          </div>
          <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Customer support"
              src="https://images.unsplash.com/photo-1714079761488-e0c9b9ac4138?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
