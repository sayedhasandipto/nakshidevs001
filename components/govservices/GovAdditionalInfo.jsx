'use client';

export default function GovAdditionalInfo() {
  const steps = [
    {
      number: '१',
      title: 'সেবা নির্বাচন করুন',
      description: 'আপনার প্রয়োজনীয় সেবাটি ডিরেক্টরি থেকে খুঁজে নিন।'
    },
    {
      number: '२',
      title: 'তথ্য পূরণ করুন',
      description: 'সঠিক তথ্য দিয়ে অনলাইন আবেদন ফর্মটি সম্পন্ন করুন।'
    },
    {
      number: '३',
      title: 'ট্র্যাকিং ও প্রাপ্তি',
      description: 'আবেদনের আইডি ব্যবহার করে যেকোনো সময় স্ট্যাটাস চেক করুন।'
    }
  ];

  return (
    <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Image Section */}
      <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
        <img 
          className="w-full h-full object-cover" 
          alt="Modern government service center with professional staff assisting citizens"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRHMwjhIvQD4xKh2N5yf9zZvl1OYWcuBXoup0rSswDP-anFe8FW9LR607Az-sstob_Aby2_bIxWvfJc4gcVrevaBoJWVsxovox-2jRESDrTSuup-Udm2L5U6w6C8yNigqN_RwDXovISnHxS32-D3DLHAwt3GGPa_JRvQ-yyJ1MjyqNTnvPoPLY8qcCh_2RFnWGHLbcdS--kt22cDmSiSgjL-vjtTLiwMpxn6FVkvtM8SNOvWbguozAEEoFb__tHYzqJaBK3Rr_JvlJ"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002045]/60 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <p 
            style={{
              fontSize: '20px',
              lineHeight: '28px',
              fontWeight: '600'
            }}
          >
            ডিজিটাল বাংলাদেশ, আধুনিক সেবা
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <div>
        <h2 
          className="text-[#002045] mb-6"
          style={{
            fontSize: '30px',
            lineHeight: '38px',
            fontWeight: '600'
          }}
        >
          সহজ ও নিরাপদ পদ্ধতি
        </h2>
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4">
              <div 
                className="w-10 h-10 rounded-full bg-[#002045] text-white flex items-center justify-center shrink-0 font-bold"
                style={{ fontSize: '14px' }}
              >
                {step.number}
              </div>
              <div>
                <h4 
                  className="text-[#002045]"
                  style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontWeight: '600'
                  }}
                >
                  {step.title}
                </h4>
                <p 
                  className="text-[#43474e]"
                  style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontWeight: '400'
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
