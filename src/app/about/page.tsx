import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/home/Header';
import FaqAccordion from '@/components/about/FaqAccordion';

export const metadata: Metadata = {
  title: 'About Us | GovService BD',
  description: 'Learn about GovService BD — our mission, team, and commitment to delivering premium digital services.',
};

const stats = [
  { value: '500+', label: 'Projects Completed', icon: '🏆' },
  { value: '200+', label: 'Happy Clients', icon: '😊' },
  { value: '5+', label: 'Years Experience', icon: '⚡' },
  { value: '24/7', label: 'Support Available', icon: '🛡️' },
];

const team = [
  {
    name: 'Sayed Hasan',
    role: 'Founder & CEO',
    bio: 'Visionary entrepreneur with 7+ years in web development and digital transformation.',
    initials: 'SH',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Design Team',
    role: 'UI/UX Designers',
    bio: 'Creative minds crafting pixel-perfect, user-centric interfaces that convert visitors.',
    initials: 'DT',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    name: 'Dev Team',
    role: 'Full-Stack Engineers',
    bio: 'Expert engineers building scalable, high-performance web applications.',
    initials: 'DV',
    gradient: 'from-emerald-500 to-teal-600',
  },
];

const values = [
  { icon: '🎯', title: 'Client-First', desc: 'Every decision guided by what delivers the most value to our clients.' },
  { icon: '⚡', title: 'Speed & Quality', desc: 'Delivered on time without compromising the quality that sets our work apart.' },
  { icon: '🔐', title: 'Trust & Transparency', desc: 'Open communication and honest pricing — no hidden fees, no surprises.' },
  { icon: '🚀', title: 'Innovation-Driven', desc: 'Modern technologies building future-proof digital solutions.' },
];

const services = [
  'Custom Website Development',
  'E-Commerce Solutions',
  'UI/UX Design & Branding',
  'SEO & Digital Marketing',
  'Ongoing Support & Maintenance',
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-white overflow-x-hidden">

        {/* ── Hero ─────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-[#001830] via-[#002045] to-[#0a1628] py-32 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-4xl mx-auto text-center">
            <span className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm font-semibold px-5 py-2 rounded-full mb-8 tracking-wide">
              🏢 About GovService BD
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Building the Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mt-2">
                Digital Bangladesh
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              We are a passionate team of developers, designers, and strategists dedicated to helping businesses thrive in the digital era with premium web solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#pricing"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/40 hover:-translate-y-1"
              >
                View Our Packages
              </Link>
              <Link
                href="/auth/signup"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-sm hover:-translate-y-1"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats ─────────────────────────────────── */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">{stat.icon}</div>
                <p className="text-3xl md:text-4xl font-extrabold text-[#002045] mb-1">{stat.value}</p>
                <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Mission ─────────────────────────────────── */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Our Mission</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#002045] leading-snug">
                Empowering Businesses<br />Through Technology
              </h2>
              <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                At GovService BD, our mission is to make premium digital services accessible to every business — from ambitious startups to established enterprises.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                We have helped hundreds of clients across Bangladesh transform their online presence and achieve measurable growth with world-class web solutions.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/#pricing"
                  className="inline-flex items-center gap-2 bg-[#002045] text-white px-7 py-3 rounded-xl font-semibold hover:bg-[#001530] transition-all duration-300 shadow-md hover:-translate-y-0.5"
                >
                  See Packages →
                </Link>
                <Link
                  href="/auth/login"
                  className="inline-flex items-center gap-2 border-2 border-[#002045] text-[#002045] px-7 py-3 rounded-xl font-semibold hover:bg-[#002045] hover:text-white transition-all duration-300"
                >
                  Log In
                </Link>
              </div>
            </div>

            {/* Services checklist card */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-[#002045] to-[#0a1628] rounded-3xl p-8 shadow-2xl text-white transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-lg font-bold mb-6 text-blue-300">What We Offer</h3>
                <div className="space-y-3">
                  {services.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-200"
                    >
                      <span className="text-green-400 font-bold text-lg shrink-0">✓</span>
                      <span className="font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -inset-6 bg-blue-500/10 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </section>

        {/* ── Core Values ─────────────────────────────────── */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">What We Stand For</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#002045]">Our Core Values</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-default"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">{value.icon}</div>
                  <h3 className="text-lg font-bold text-[#002045] mb-2">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ─────────────────────────────────── */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">The People Behind the Work</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#002045]">Meet Our Team</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-bold text-2xl mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {member.initials}
                  </div>
                  <h3 className="text-xl font-bold text-[#002045]">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────── */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Got Questions?</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#002045]">Frequently Asked</h2>
            </div>
            <FaqAccordion />
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────── */}
        <section className="py-24 px-6 bg-gradient-to-br from-[#001830] via-[#002045] to-[#0a1628] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-3xl mx-auto text-center">
            <span className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm font-semibold px-5 py-2 rounded-full mb-6">
              🚀 Ready to get started?
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              Let&apos;s Build Something<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Great Together
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-12 max-w-xl mx-auto">
              Explore our packages and start your digital journey today. No commitment required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#pricing"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
              >
                View Packages →
              </Link>
              <Link
                href="/auth/signup"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-4 rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-sm hover:-translate-y-1"
              >
                Create Free Account
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
