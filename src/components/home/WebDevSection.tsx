import Link from 'next/link';

export default function WebDevSection() {
  const features = [
    {
      icon: 'speed',
      title: 'সুপার ফাস্ট পারফরম্যান্স',
      desc: 'সর্বাধুনিক প্রযুক্তি ব্যবহার করে অত্যন্ত দ্রুত গতির ওয়েবসাইট',
    },
    {
      icon: 'devices',
      title: 'রেস্পন্সিভ ডিজাইন',
      desc: 'মোবাইল, ট্যাবলেট এবং ডেক্সটপ সব ডিভাইসেই পারফেক্ট ভিউ',
    },
    {
      icon: 'security',
      title: 'সর্বোচ্চ নিরাপত্তা',
      desc: 'আপনার ও কাস্টমারের ডেটা সুরক্ষিত রাখতে অ্যাডভান্সড সিকিউরিটি',
    },
    {
      icon: 'search_insights',
      title: 'এসইও ফ্রেন্ডলি',
      desc: 'গুগল সার্চে আপনার ওয়েবসাইটকে সবার উপরে নিয়ে আসার ব্যবস্থা',
    },
  ];

  const technologies = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  ];

  return (
    <section id="webdev" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-50 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#002045] rounded-full text-sm font-bold border border-blue-100">
              <span className="material-symbols-outlined text-sm">code</span>
              প্রফেশনাল ওয়েব ডেভেলপমেন্ট
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#002045] leading-tight">
              আপনার ব্যবসার জন্য <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002045] to-[#0a6c44]">
                কাস্টম ওয়েব সলিউশন
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              আমরা শুধুমাত্র টেমপ্লেট ব্যবহার করে ওয়েবসাইট বানাই না। আমরা আধুনিক প্রযুক্তি ব্যবহার করে একদম শূন্য থেকে আপনার ব্যবসার প্রয়োজন অনুযায়ী কাস্টম ওয়েবসাইট ডেভেলপ করি, যা হবে দ্রুত, নিরাপদ এবং আকর্ষণীয়।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-[#002045] rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link href="/business-solutions">
                <button className="px-8 py-4 bg-[#002045] text-white rounded-xl font-bold text-lg hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
                  ওয়েবসাইট প্যাকেজগুলো দেখুন
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content / Visuals */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#002045] to-[#0a6c44] rounded-3xl transform rotate-3 scale-105 opacity-10"></div>
            <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-2xl relative z-10">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">আমরা যে প্রযুক্তিগুলো ব্যবহার করি</h3>
              
              <div className="grid grid-cols-3 gap-8 place-items-center mb-10">
                {technologies.map((tech, idx) => (
                  <div key={idx} className="group flex flex-col items-center gap-3">
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300 border border-gray-100 group-hover:shadow-md group-hover:border-blue-100">
                      <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-sm font-semibold text-gray-500 group-hover:text-[#002045] transition-colors">{tech.name}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
                <h4 className="font-bold text-[#002045] mb-2">কেন কাস্টম কোডিং?</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  ওয়ার্ডপ্রেস বা অন্যান্য সিএমএস (CMS) এর তুলনায় কাস্টম কোডেড ওয়েবসাইট অনেক বেশি ফাস্ট এবং সিকিউর। আপনার ব্যবসার প্রসারের সাথে সাথে ওয়েবসাইটের ফাংশনালিটি বাড়ানোর ক্ষেত্রে কাস্টম কোড সবচেয়ে ভালো পারফর্ম করে।
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
