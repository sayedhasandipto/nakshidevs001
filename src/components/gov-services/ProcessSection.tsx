export default function ProcessSection() {
  const steps = [
    {
      num: '১',
      title: 'সেবা নির্বাচন করুন',
      desc: 'আপনার প্রয়োজনীয় সেবাটি ডিরেক্টরি থেকে খুঁজে নিন।',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      num: '২',
      title: 'তথ্য পূরণ করুন',
      desc: 'সঠিক তথ্য দিয়ে অনলাইন আবেদন ফর্মটি সম্পন্ন করুন।',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      num: '৩',
      title: 'ট্র্যাকিং ও প্রাপ্তি',
      desc: 'আবেদনের আইডি ব্যবহার করে যেকোনো সময় স্ট্যাটাস চেক করুন।',
      color: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-emerald-600 font-semibold text-sm tracking-widest uppercase">সহজ পদ্ধতি</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#002045]">কীভাবে সেবা নেবেন?</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">মাত্র ৩টি সহজ ধাপে আপনার প্রয়োজনীয় সরকারি সেবা গ্রহণ করুন।</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-0.5 bg-gray-200" />
              )}
              <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-2xl mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-[#002045] mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
