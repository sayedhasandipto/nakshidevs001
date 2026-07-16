import Header from '@/components/home/Header';
import Footer from '@/components/layout/Footer';
import WebDevSection from '@/components/home/WebDevSection';
import { Metadata } from 'next';
import Link from 'next/link';
import { MdOutlineShoppingCart } from 'react-icons/md';

export const metadata: Metadata = {
  title: 'Web Development | GovService BD',
  description: 'আপনার ব্যবসার জন্য আধুনিক ও দ্রুত ওয়েবসাইট তৈরি করুন। প্রফেশনাল ওয়েব ডেভেলপমেন্ট সলিউশন।',
};

export default function WebDevPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-hind-siliguri">
      <Header />

      <main className="pt-24 pb-0">
        {/* Full Page Hero / Header for Web Dev */}
        <section className="bg-gradient-to-r from-blue-900 to-[#002045] text-white py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              প্রফেশনাল ওয়েবসাইট ডেভেলপমেন্ট
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
              কাস্টম কোডিং থেকে শুরু করে ই-কমার্স সলিউশন—আপনার ব্যবসার ডিজিটাল উপস্থিতিকে আরও শক্তিশালী করতে আমরা রয়েছি আপনার পাশে।
            </p>
          </div>
        </section>

        {/* Using the detailed component we already built */}
        <WebDevSection />

        {/* Additional Details Section for the Page */}
        <section className="py-20 px-6 bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#002045] mb-12">আমরা যে ধরণের ওয়েবসাইট তৈরি করি</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 text-[#002045] rounded-xl flex items-center justify-center mb-6">
                  <MdOutlineShoppingCart className="w-6 h-6" />

                </div>
                <h3 className="text-xl font-bold text-[#002045] mb-3">ই-কমার্স ওয়েবসাইট</h3>
                <p className="text-gray-600 leading-relaxed">
                  আপনার প্রোডাক্ট অনলাইনে বিক্রি করার জন্য পেমেন্ট গেটওয়ে, ইনভেন্টরি ম্যানেজমেন্ট সহ সম্পূর্ণ কাস্টম ই-কমার্স সলিউশন।
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-50 text-[#0a6c44] rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">business</span>
                </div>
                <h3 className="text-xl font-bold text-[#002045] mb-3">কর্পোরেট ওয়েবসাইট</h3>
                <p className="text-gray-600 leading-relaxed">
                  কোম্পানির প্রোফাইল, সার্ভিস সমূহ এবং কন্টাক্ট ইনফরমেশন সুন্দরভাবে উপস্থাপন করার জন্য ডাইনামিক কর্পোরেট সাইট।
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">person</span>
                </div>
                <h3 className="text-xl font-bold text-[#002045] mb-3">পোর্টফোলিও/পার্সোনাল</h3>
                <p className="text-gray-600 leading-relaxed">
                  আপনার কাজ বা সার্ভিস ক্লায়েন্টদের কাছে প্রফেশনালভাবে তুলে ধরতে ওয়ান পেজ বা মাল্টি পেজ পোর্টফোলিও সাইট।
                </p>
              </div>
            </div>

            <div className="mt-16">
              <Link href="/business-solutions">
                <button className="px-10 py-4 bg-green-500 hover:bg-green-400 text-[#002045] rounded-full font-bold text-xl shadow-lg transition-all transform hover:-translate-y-1">
                  মূল্য তালিকা দেখুন
                </button>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
