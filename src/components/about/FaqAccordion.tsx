'use client';

import { useState } from 'react';

const faqs = [
  { q: 'How long does a project take?', a: 'Depending on complexity, most websites are delivered within 2–6 weeks. We always agree on a timeline upfront.' },
  { q: 'Do you offer revisions?', a: 'Yes! All our packages include revision rounds to ensure you are 100% satisfied with the final result.' },
  { q: 'What happens after delivery?', a: 'We provide post-delivery support. Our Premium and Standard plans include months of dedicated support.' },
  { q: 'Can I upgrade my plan later?', a: 'Absolutely. You can upgrade your package at any time and we will apply a credit for what you already paid.' },
];

export default function FaqAccordion() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
          >
            <span className="font-semibold text-[#002045] pr-4">{faq.q}</span>
            <span className={`text-blue-600 text-2xl font-bold transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="px-6 pb-6 text-gray-600 leading-relaxed text-sm">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
