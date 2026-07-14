'use client';

export default function GovHero() {
  return (
    <section className="mb-16 text-center py-12">
      <h1 
        className="font-bold text-[#002045] mb-4"
        style={{
          fontSize: '48px',
          lineHeight: '56px',
          letterSpacing: '-0.02em',
          fontWeight: '700'
        }}
      >
        নাগরিক সেবা দিকনির্দেশনা
      </h1>
      <p 
        className="text-[#43474e] max-w-2xl mx-auto"
        style={{
          fontSize: '18px',
          lineHeight: '28px',
          fontWeight: '400'
        }}
      >
        বাংলাদেশের নাগরিকদের জন্য ডিজিটাল প্রশাসনিক সেবা এখন হাতের মুঠোয়। দ্রুত এবং স্বচ্ছ আবেদন প্রক্রিয়ার মাধ্যমে আপনার প্রয়োজনীয় সেবা গ্রহণ করুন।
      </p>
    </section>
  );
}
