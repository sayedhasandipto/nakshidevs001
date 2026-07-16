'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from '@/lib/auth-client';
import toast from 'react-hot-toast';

const pricingData = {
  ecommerce: [
    {
      name: 'বেসিক',
      price: '১৫,০০০',
      features: ['সর্বোচ্চ ৫০টি প্রোডাক্ট', '১টি পেমেন্ট গেটওয়ে', 'বেসিক এসইও', '৩ মাসের সাপোর্ট'],
      isPopular: false,
    },
    {
      name: 'স্ট্যান্ডার্ড',
      price: '২৫,০০০',
      features: ['আনলিমিটেড প্রোডাক্ট', 'মাল্টিপল পেমেন্ট গেটওয়ে', 'অ্যাডভান্সড এসইও', 'কাস্টম ডিজাইন', '৬ মাসের সাপোর্ট'],
      isPopular: true,
    },
    {
      name: 'প্রিমিয়াম',
      price: '৪০,০০০',
      features: ['সব স্ট্যান্ডার্ড ফিচার', 'মোবাইল অ্যাপ (অ্যান্ড্রয়েড)', '১ বছরের সাপোর্ট', 'ফ্রি ডোমেইন ও হোস্টিং (১ বছর)'],
      isPopular: false,
    },
  ],
  portfolio: [
    {
      name: 'স্টার্টার',
      price: '৮,০০০',
      features: ['১ পেজ ডিজাইন', 'কন্টাক্ট ফর্ম', 'বেসিক এসইও', '১ মাসের সাপোর্ট'],
      isPopular: false,
    },
    {
      name: 'প্রো',
      price: '১৫,০০০',
      features: ['মাল্টি-পেজ ডিজাইন', 'ডায়নামিক পোর্টফোলিও', 'অ্যাডভান্সড এসইও', '৩ মাসের সাপোর্ট'],
      isPopular: true,
    },
  ],
  corporate: [
    {
      name: 'স্ট্যান্ডার্ড',
      price: '২০,০০০',
      features: ['১০ পেজ ডিজাইন', 'কর্পোরেট ইমেইল', 'ব্লগ সেকশন', '৬ মাসের সাপোর্ট'],
      isPopular: true,
    },
    {
      name: 'এন্টারপ্রাইজ',
      price: '৩৫,০০০',
      features: ['আনলিমিটেড পেজ', 'অ্যাডভান্সড সিকিউরিটি', 'কাস্টম ফাংশনালিটি', '১ বছরের সাপোর্ট', 'ফ্রি ডোমেইন ও হোস্টিং'],
      isPopular: false,
    },
  ],
};

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<'ecommerce' | 'portfolio' | 'corporate'>('ecommerce');
  const [loadingOrder, setLoadingOrder] = useState<string | null>(null);
  
  const router = useRouter();
  const { data: session } = useSession();

  const handleOrder = async (plan: { name: string; price: string }) => {
    if (!session?.user) {
      router.push('/auth/login');
      return;
    }

    try {
      setLoadingOrder(plan.name);
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        
      const res = await fetch(`${API_URL}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: session.user.name || 'User',
          customerEmail: session.user.email,
          serviceName: plan.name,
          amount: `৳${plan.price}`,
        }),
      });

      if (res.ok) {
        toast.success('Order placed successfully! Redirecting...');
        router.push('/dashboard/orders');
      } else {
        toast.error('Failed to place order. Please try again.');
      }
    } catch (error) {
      console.error('Order error:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoadingOrder(null);
    }
  };

  const tabs = [
    { id: 'ecommerce', label: 'ই-কমার্স ওয়েবসাইট' },
    { id: 'portfolio', label: 'পোর্টফোলিও ওয়েবসাইট' },
    { id: 'corporate', label: 'কর্পোরেট ওয়েবসাইট' },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002045] mb-4">আপনার ব্যবসার জন্য সঠিক প্যাকেজ বেছে নিন</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">আমরা সব ধরণের ব্যবসার জন্য আধুনিক এবং সাশ্রয়ী ওয়েবসাইট প্যাকেজ অফার করছি।</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#002045] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingData[activeTab].map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl flex flex-col transition-transform duration-300 hover:-translate-y-2 bg-white ${
                plan.isPopular ? 'border-2 border-[#0a6c44] shadow-xl relative' : 'border border-gray-200 shadow-md'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-[#0a6c44] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl z-10">
                  জনপ্রিয়
                </div>
              )}
              <div className="flex flex-col items-center pt-2 pb-4">
                <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                <div className="mt-4 flex items-baseline text-4xl font-extrabold text-[#002045]">
                  ৳{plan.price}
                </div>
              </div>
              <div className="py-6 flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-sm">
                      <span className="material-symbols-outlined text-green-500 mr-2 text-lg">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 pb-2 flex justify-center mt-auto">
                <button
                  onClick={() => handleOrder(plan)}
                  disabled={loadingOrder === plan.name}
                  className={`w-full py-4 font-bold text-md rounded-xl transition-colors ${
                    plan.isPopular
                      ? 'bg-[#0a6c44] text-white hover:bg-[#085a38]'
                      : 'bg-[#002045] text-white hover:bg-blue-900'
                  } ${loadingOrder === plan.name ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {loadingOrder === plan.name ? 'প্রসেসিং...' : 'অর্ডার করুন'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
