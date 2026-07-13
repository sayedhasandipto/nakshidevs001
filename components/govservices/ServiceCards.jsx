'use client';

import { useState } from 'react';

export default function ServiceCards() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: 'জন্ম নিবন্ধন (আবেদন ও সংশোধন)',
      description: 'নতুন জন্ম নিবন্ধনের জন্য অনলাইনে আবেদন করুন অথবা বিদ্যমান নিবন্ধনের যেকোনো তথ্য নির্ভুলভাবে সংশোধন করার প্রক্রিয়া শুরু করুন। আপনার পরিচয় নিশ্চিত করতে এটি একটি অত্যাবশ্যকীয় ধাপ।',
      icon: 'child_care',
      features: ['অনলাইন আবেদন', 'তথ্য যাচাই', 'দ্রুত সংশোধন', 'ডিজিটাল কপি ডাউনলোড'],
      size: 'large',
      bgColor: 'bg-surface-container-lowest',
      buttonBg: 'bg-primary',
      buttonText: 'text-on-primary'
    },
    {
      id: 2,
      title: 'ভোটার আইডি কার্ড',
      description: 'নতুন ভোটার হিসেবে নিবন্ধন করুন বা জাতীয় পরিচয়পত্রের ভুল সংশোধন করুন। স্মার্ট কার্ডের স্ট্যাটাস চেক করুন।',
      icon: 'how_to_reg',
      size: 'small-right',
      bgColor: 'bg-surface-container-low',
      buttonBg: 'bg-secondary',
      buttonText: 'text-on-secondary'
    },
    {
      id: 3,
      title: 'সরকারি ভাতা',
      description: 'বয়স্ক ভাতা, বিধবা ভাতা এবং প্রতিবন্ধী ভাতাসহ সকল সরকারি সামাজিক সুরক্ষা প্রোগ্রামের আবেদন ও তালিকা।',
      icon: 'payments',
      size: 'small-left',
      bgColor: 'bg-white',
      borderColor: 'border-l-4 border-l-secondary',
      hasCircleIcon: true,
      iconBgColor: 'bg-secondary-container',
      iconColor: 'text-on-secondary-container'
    },
    {
      id: 4,
      title: 'পাসপোর্ট ও ভিসা',
      description: 'ই-পাসপোর্ট আবেদন, রিনিউয়াল এবং ভিসা সংক্রান্ত সকল তথ্যের জন্য ডিজিটাল পোর্টাল ব্যবহার করুন।',
      icon: 'flight_takeoff',
      size: 'small-right',
      bgColor: 'bg-white',
      borderColor: 'border-l-4 border-l-primary',
      hasCircleIcon: true,
      iconBgColor: 'bg-primary-fixed',
      iconColor: 'text-primary'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Large Card - Birth Registration */}
      <div 
        className="md:col-span-8 group relative overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest p-6 transition-all hover:shadow-lg cursor-pointer"
        onMouseEnter={() => setHoveredCard(1)}
        onMouseLeave={() => setHoveredCard(null)}
        style={{
          transform: hoveredCard === 1 ? 'translateY(-4px)' : 'translateY(0)',
          transitionDuration: '300ms'
        }}
      >
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-16 h-16 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined text-[40px]">child_care</span>
          </div>
          <div className="flex-1">
            <h3 className="text-headline-md text-primary mb-3">{services[0].title}</h3>
            <p className="text-body-md text-on-surface-variant mb-6">
              {services[0].description}
            </p>
            <ul className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-on-surface-variant text-label-lg">
              {services[0].features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-primary text-on-primary px-6 py-3 rounded-lg text-label-lg hover:opacity-90 active:scale-95 transition-all flex items-center gap-2">
              আবেদন করুন <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* Small Card Right - Voter ID */}
      <div 
        className="md:col-span-4 group relative overflow-hidden rounded-xl border border-outline-variant bg-surface-container-low p-6 transition-all hover:shadow-lg cursor-pointer h-full"
        onMouseEnter={() => setHoveredCard(2)}
        onMouseLeave={() => setHoveredCard(null)}
        style={{
          transform: hoveredCard === 2 ? 'translateY(-4px)' : 'translateY(0)',
          transitionDuration: '300ms'
        }}
      >
        <div className="flex flex-col h-full">
          <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center text-primary mb-6">
            <span className="material-symbols-outlined text-[40px]">how_to_reg</span>
          </div>
          <h3 className="text-headline-md text-primary mb-3">{services[1].title}</h3>
          <p className="text-body-md text-on-surface-variant mb-6 flex-grow">
            {services[1].description}
          </p>
          <button className="w-full bg-secondary text-on-secondary px-6 py-3 rounded-lg text-label-lg hover:opacity-90 transition-all">
            আবেদন করুন
          </button>
        </div>
      </div>

      {/* Small Card Left - Allowances */}
      <div 
        className="md:col-span-6 group relative overflow-hidden rounded-xl border border-outline-variant bg-white p-4 transition-all hover:shadow-lg cursor-pointer border-l-4 border-l-secondary"
        onMouseEnter={() => setHoveredCard(3)}
        onMouseLeave={() => setHoveredCard(null)}
        style={{
          transform: hoveredCard === 3 ? 'translateY(-4px)' : 'translateY(0)',
          transitionDuration: '300ms'
        }}
      >
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
            <span className="material-symbols-outlined">payments</span>
          </div>
          <h3 className="text-headline-sm text-primary">{services[2].title}</h3>
        </div>
        <p className="text-body-md text-on-surface-variant mb-4">
          {services[2].description}
        </p>
        <button className="text-primary text-label-lg flex items-center gap-1 hover:underline">
          বিস্তারিত দেখুন <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      {/* Small Card Right - Passport */}
      <div 
        className="md:col-span-6 group relative overflow-hidden rounded-xl border border-outline-variant bg-white p-4 transition-all hover:shadow-lg cursor-pointer border-l-4 border-l-primary"
        onMouseEnter={() => setHoveredCard(4)}
        onMouseLeave={() => setHoveredCard(null)}
        style={{
          transform: hoveredCard === 4 ? 'translateY(-4px)' : 'translateY(0)',
          transitionDuration: '300ms'
        }}
      >
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">flight_takeoff</span>
          </div>
          <h3 className="text-headline-sm text-primary">{services[3].title}</h3>
        </div>
        <p className="text-body-md text-on-surface-variant mb-4">
          {services[3].description}
        </p>
        <button className="text-primary text-label-lg flex items-center gap-1 hover:underline">
          আবেদন করুন <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
