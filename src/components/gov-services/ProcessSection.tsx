export default function ProcessSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left: Image */}
      <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
        <img
          className="w-full h-full object-cover"
          alt="আধুনিক সরকারি সেবা কেন্দ্র"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRHMwjhIvQD4xKh2N5yf9zZvl1OYWcuBXoup0rSswDP-anFe8FW9LR607Az-sstob_Aby2_bIxWvfJc4gcVrevaBoJWVsxovox-2jRESDrTSuup-Udm2L5U6w6C8yNigqN_RwDXovISnHxS32-D3DLHAwt3GGPa_JRvQ-yyJ1MjyqNTnvPoPLY8qcCh_2RFnWGHLbcdS--kt22cDmSiSgjL-vjtTLiwMpxn6FVkvtM8SNOvWbguozAEEoFb__tHYzqJaBK3Rr_JvlJ"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002045]/60 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <p
            className="text-xl font-bold"
            style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
          >
            ডিজিটাল বাংলাদেশ, আধুনিক সেবা
          </p>
        </div>
      </div>

      {/* Right: Process Steps */}
      <div className="order-1 lg:order-2">
        <h2
          className="text-3xl font-bold text-[#002045] mb-8"
          style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
        >
          সহজ ও নিরাপদ পদ্ধতি
        </h2>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#002045] text-white flex items-center justify-center shrink-0 font-bold">
              ১
            </div>
            <div>
              <h4
                className="font-bold text-[#002045] mb-1"
                style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
              >
                সেবা নির্বাচন করুন
              </h4>
              <p
                className="text-gray-600 text-sm"
                style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
              >
                আপনার প্রয়োজনীয় সেবাটি ডিরেক্টরি থেকে খুঁজে নিন।
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#002045] text-white flex items-center justify-center shrink-0 font-bold">
              ২
            </div>
            <div>
              <h4
                className="font-bold text-[#002045] mb-1"
                style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
              >
                তথ্য পূরণ করুন
              </h4>
              <p
                className="text-gray-600 text-sm"
                style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
              >
                সঠিক তথ্য দিয়ে অনলাইন আবেদন ফর্মটি সম্পন্ন করুন।
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#002045] text-white flex items-center justify-center shrink-0 font-bold">
              ৩
            </div>
            <div>
              <h4
                className="font-bold text-[#002045] mb-1"
                style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
              >
                ট্র্যাকিং ও প্রাপ্তি
              </h4>
              <p
                className="text-gray-600 text-sm"
                style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
              >
                আবেদনের আইডি ব্যবহার করে যেকোনো সময় স্ট্যাটাস চেক করুন।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
