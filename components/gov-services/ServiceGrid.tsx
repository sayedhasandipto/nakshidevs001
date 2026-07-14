export default function ServiceGrid() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Service 1: Birth Registration */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 transition-all hover:shadow-lg">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center text-[#002045] shrink-0">
              <span className="material-symbols-outlined text-4xl">child_care</span>
            </div>
            <div>
              <h3 
                className="text-2xl font-bold text-[#002045] mb-3"
                style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
              >
                জন্ম নিবন্ধন (আবেদন ও সংশোধন)
              </h3>
              <p 
                className="text-gray-600 mb-6"
                style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
              >
                নতুন জন্ম নিবন্ধনের জন্য অনলাইনে আবেদন করুন অথবা বিদ্যমান নিবন্ধনের যেকোনো তথ্য নির্ভুলভাবে সংশোধন করার প্রক্রিয়া শুরু করুন। আপনার পরিচয় নিশ্চিত করতে এটি একটি অত্যাবশ্যকীয় ধাপ।
              </p>
              <ul className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
                  <span className="material-symbols-outlined text-[#0a6c44] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  অনলাইন আবেদন
                </li>
                <li className="flex items-center gap-2" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
                  <span className="material-symbols-outlined text-[#0a6c44] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  তথ্য যাচাই
                </li>
                <li className="flex items-center gap-2" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
                  <span className="material-symbols-outlined text-[#0a6c44] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  দ্রুত সংশোধন
                </li>
                <li className="flex items-center gap-2" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
                  <span className="material-symbols-outlined text-[#0a6c44] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  ডিজিটাল কপি ডাউনলোড
                </li>
              </ul>
              <button 
                className="bg-[#002045] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all flex items-center gap-2"
                style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
              >
                আবেদন করুন <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Service 2: Voter ID */}
        <div className="md:col-span-4 group relative overflow-hidden rounded-xl border border-gray-200 bg-blue-50 p-8 transition-all hover:shadow-lg">
          <div className="flex flex-col h-full">
            <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center text-[#002045] mb-6">
              <span className="material-symbols-outlined text-4xl">how_to_reg</span>
            </div>
            <h3 
              className="text-2xl font-bold text-[#002045] mb-3"
              style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
            >
              ভোটার আইডি কার্ড
            </h3>
            <p 
              className="text-gray-600 mb-6"
              style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
            >
              নতুন ভোটার হিসেবে নিবন্ধন করুন বা জাতীয় পরিচয়পত্রের ভুল সংশোধন করুন। স্মার্ট কার্ডের স্ট্যাটাস চেক করুন।
            </p>
            <div className="mt-auto">
              <button 
                className="w-full bg-[#0a6c44] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
              >
                আবেদন করুন
              </button>
            </div>
          </div>
        </div>

        {/* Service 3: Government Allowances */}
        <div className="md:col-span-6 group relative overflow-hidden rounded-xl border-l-4 border-l-[#0a6c44] bg-white border border-gray-200 p-6 transition-all hover:shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-[#0a6c44]">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <h3 
              className="text-xl font-bold text-[#002045]"
              style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
            >
              সরকারি ভাতা
            </h3>
          </div>
          <p 
            className="text-gray-600 mb-4"
            style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
          >
            বয়স্ক ভাতা, বিধবা ভাতা এবং প্রতিবন্ধী ভাতাসহ সকল সরকারি সামাজিক সুরক্ষা প্রোগ্রামের আবেদন ও তালিকা।
          </p>
          <button 
            className="text-[#002045] font-semibold flex items-center gap-2 hover:underline"
            style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
          >
            বিস্তারিত দেখুন <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        {/* Service 4: Passport & Visa */}
        <div className="md:col-span-6 group relative overflow-hidden rounded-xl border-l-4 border-l-[#002045] bg-white border border-gray-200 p-6 transition-all hover:shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#002045]">
              <span className="material-symbols-outlined">flight_takeoff</span>
            </div>
            <h3 
              className="text-xl font-bold text-[#002045]"
              style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
            >
              পাসপোর্ট ও ভিসা
            </h3>
          </div>
          <p 
            className="text-gray-600 mb-4"
            style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
          >
            ই-পাসপোর্ট আবেদন, রিনিউয়াল এবং ভিসা সংক্রান্ত সকল তথ্যের জন্য ডিজিটাল পোর্টাল ব্যবহার করুন।
          </p>
          <button 
            className="text-[#002045] font-semibold flex items-center gap-2 hover:underline"
            style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
          >
            আবেদন করুন <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
}
