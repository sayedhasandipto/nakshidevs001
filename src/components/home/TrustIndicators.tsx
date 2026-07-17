'use client';

const features = [
  {
    icon: 'verified_user',
    title: 'নিরাপত্তা ও গোপনীয়তা',
    description: 'আপনার সকল তথ্য এবং ডকুমেন্টস আমাদের কাছে সম্পূর্ণ নিরাপদ। আধুনিক এনক্রিপশন ব্যবস্থার মাধ্যমে আমরা সুরক্ষা নিশ্চিত করি।',
    accent: 'blue',
  },
  {
    icon: 'electric_bolt',
    title: 'দ্রুত এবং নির্ভরযোগ্য',
    description: 'আমাদের সিস্টেম ২৪/৭ সক্রিয় থাকে। দ্রুত আবেদন প্রক্রিয়াকরণ এবং তাৎক্ষণিক প্রতিক্রিয়া পান।',
    accent: 'emerald',
  },
  {
    icon: 'support_agent',
    title: 'সার্বক্ষণিক সহায়তা',
    description: 'আমাদের দক্ষ টিম সর্বদা আপনার সমস্যা সমাধানে প্রস্তুত। বাংলায় কাস্টমার সাপোর্ট পাবেন।',
    accent: 'violet',
  },
];

const accentMap: Record<string, { iconBg: string; iconColor: string; borderHover: string }> = {
  blue: { iconBg: 'bg-blue-50', iconColor: 'text-blue-600', borderHover: 'hover:border-blue-200' },
  emerald: { iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600', borderHover: 'hover:border-emerald-200' },
  violet: { iconBg: 'bg-violet-50', iconColor: 'text-violet-600', borderHover: 'hover:border-violet-200' },
};

export default function TrustIndicators() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
            কেন আমরা
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002045] mb-4" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
            কেন আমাদের বেছে নেবেন?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
            আমরা শুধুমাত্র সার্ভিস দিই না, আমরা দিই এক নির্ভরযোগ্য অংশীদারিত্বের নিশ্চয়তা।
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colors = accentMap[feature.accent];
            return (
              <div
                key={index}
                className={`group relative p-8 bg-white rounded-2xl border border-gray-100 ${colors.borderHover} hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden`}
              >
                {/* Subtle hover glow */}
                <div className={`absolute top-0 right-0 w-40 h-40 ${colors.iconBg} rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -translate-y-12 translate-x-12`} />

                <div className="relative z-10 text-center space-y-5">
                  <div className={`w-16 h-16 ${colors.iconBg} ${colors.iconColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#002045]" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
