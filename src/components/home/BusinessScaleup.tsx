import Link from 'next/link';

export default function BusinessScaleup() {
  return (
    <section className="bg-[#002045] py-16 px-6 overflow-hidden relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Text */}
        <div className="space-y-6 order-2 lg:order-1">
          <h2 className="text-4xl font-bold text-white leading-snug" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
            আপনার ছোট ব্যবসাকে বড় করুন <span className="text-green-400">পেশাদার ওয়েবসাইটের</span> মাধ্যমে
          </h2>
          <p className="text-lg text-white/80" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
            একটি ওয়েবসাইট আপনার ব্যবসার পরিচয় বদলে দিতে পারে। আমরা সুলভ মূল্যে আধুনিক ই-কমার্স বা পোর্টফোলিও ওয়েবসাইট তৈরি করে দিচ্ছি।
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-white" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
              <span className="material-symbols-outlined text-green-400" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              মোবাইল ফ্রেন্ডলি ডিজাইন
            </li>
            <li className="flex items-center gap-3 text-white" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
              <span className="material-symbols-outlined text-green-400" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              সুপার ফাস্ট লোডিং স্পিড
            </li>
            <li className="flex items-center gap-3 text-white" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
              <span className="material-symbols-outlined text-green-400" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              লাইফটাইম টেকনিক্যাল সাপোর্ট
            </li>
          </ul>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/business-solutions">
              <button className="px-6 py-3 bg-[#0a6c44] text-white rounded-xl font-semibold hover:brightness-110 shadow-lg" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
                প্যাকেজগুলো দেখুন
              </button>
            </Link>
            <button className="px-6 py-3 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
              ফ্রি কনসালটেশন
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 lg:order-2">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#0a6c44] rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <img
              className="w-full relative z-10 rounded-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl"
              alt="E-commerce mockup"
              src="https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-64 h-64 border border-white/10 rounded-full"></div>
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#0a6c44]/10 rounded-full blur-3xl"></div>
    </section>
  );
}
