import { GiCheckedShield } from "react-icons/gi";
import { HiOutlineLightBulb, HiOutlineSupport } from "react-icons/hi";

export default function TrustIndicators() {
  const features = [
    {
      icon: < GiCheckedShield />,
      title: 'নিরাপত্তা ও গোপনীয়তা',
      description: 'আপনার সকল তথ্য এবং ডকুমেন্টস আমাদের কাছে সম্পূর্ণ নিরাপদ। আধুনিক এনক্রিপশন ব্যবস্থার মাধ্যমে আমরা সুরক্ষা নিশ্চিত করি।'
    },
    {
      icon: <HiOutlineLightBulb />,
      title: 'দ্রুত এবং নির্ভরযোগ্য',
      description: 'আমাদের সিস্টেম ২৪/৭ সক্রিয় থাকে। দ্রুত আবেদন প্রক্রিয়াকরণ এবং তাৎক্ষণিক প্রতিক্রিয়া পান।'
    },
    {
      icon: <HiOutlineSupport />,
      title: 'সার্বক্ষণিক সহায়তা',
      description: 'আমাদের দক্ষ টিম সর্বদা আপনার সমস্যা সমাধানে প্রস্তুত। বাংলায় কাস্টমার সাপোর্ট পাবেন।'
    }
  ];

  return (
    <section className="py-16 px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#002045] mb-3" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>কেন আমাদের বেছে নেবেন?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>আমরা শুধুমাত্র সার্ভিস দিই না, আমরা দিই এক নির্ভরযোগ্য অংশীদারিত্বের নিশ্চয়তা।</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-white rounded-2xl border border-gray-200 text-center space-y-4 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-[#002045]">
              <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-[#002045]" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
