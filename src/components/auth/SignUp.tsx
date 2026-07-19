'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { User, ShieldCheck, Mail, Lock, Eye, EyeOff, ArrowRight, Home, Wrench, Building2, UserCircle2 } from 'react-icons/lu';

const ROLES = [
  { value: 'client', label: 'গ্রাহক (Client)', icon: UserCircle2, desc: 'Looking for services' },
  { value: 'provider', label: 'সেবাদাতা (Provider)', icon: Wrench, desc: 'Offering my skills' },
  { value: 'business', label: 'ব্যবসা (Business)', icon: Building2, desc: 'Managing business' },
];

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'client',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('পাসওয়ার্ড মিলছে না');
      return;
    }
    if (formData.password.length < 8) {
      setError('পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { error: authError } = await authClient.signUp.email({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role as any,
        callbackURL: '/dashboard',
      });

      if (authError) {
        throw new Error(authError.message ?? 'অ্যাকাউন্ট তৈরি করতে ব্যর্থ হয়েছে');
      }

      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message ?? 'একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।');
    } finally {
      setLoading(false);
    }
  };

  const getPasswordStrength = () => {
    const len = formData.password.length;
    if (len === 0) return 0;
    if (len < 6) return 1;
    if (len < 10) return 2;
    if (len < 14) return 3;
    return 4;
  };

  const strength = getPasswordStrength();

  return (
    <div 
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16"
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #0d2137 25%, #0f2b4a 50%, #0a2240 75%, #091a30 100%)',
      }}
    >
      {/* Animated Mesh Gradient Background (Matching Home Page) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[700px] h-[700px] -top-[150px] -right-[150px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
            animation: 'float 12s ease-in-out infinite',
          }}
        />
        <div className="absolute w-[500px] h-[500px] -bottom-[100px] -left-[100px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(16,185,129,0.25) 0%, transparent 70%)',
            animation: 'float 15s ease-in-out infinite reverse',
          }}
        />
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[440px] px-2">
        {/* Brand Header */}
        <div className="mb-6 flex flex-col items-center">
          <Link href="/" className="group mb-4 flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.05] border border-white/[0.08] rounded-full backdrop-blur-sm hover:border-blue-500/30 hover:bg-white/[0.08] transition-all duration-300">
            <Home className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-bold tracking-wider text-white/70 group-hover:text-white uppercase transition-colors" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
              GovService BD
            </span>
          </Link>
          <h1 className="text-3xl font-extrabold text-white tracking-tight" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
            নিবন্ধন করুন
          </h1>
          <p className="mt-1.5 text-white/50 text-sm" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
            নতুন অ্যাকাউন্ট তৈরি করুন
          </p>
        </div>

        {/* Premium Card Container */}
        <div
          className="rounded-2xl p-8 border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden bg-white/[0.04]"
        >
          {/* Border Accent Line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-emerald-400 to-violet-500" />

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-3 rounded-xl p-3.5 text-xs bg-rose-500/10 border border-rose-500/20 text-rose-300 animate-in fade-in duration-300" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
                <ShieldCheck className="w-4.5 h-4.5 text-rose-400 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Full Name */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-white/60" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
                পূর্ণ নাম (Full Name)
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-200">
                  <User className={`w-4 h-4 ${focusedField === 'name' ? 'text-blue-400' : 'text-white/30'}`} />
                </div>
                <input
                  id="signup-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  placeholder="John Doe"
                  className="w-full rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300 bg-white/[0.05] border border-white/[0.06] focus:border-blue-500/50 focus:bg-white/[0.08]"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-white/60" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
                ইমেইল ঠিকানা (Email)
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-200">
                  <Mail className={`w-4 h-4 ${focusedField === 'email' ? 'text-blue-400' : 'text-white/30'}`} />
                </div>
                <input
                  id="signup-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  placeholder="name@example.com"
                  className="w-full rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300 bg-white/[0.05] border border-white/[0.06] focus:border-blue-500/50 focus:bg-white/[0.08]"
                />
              </div>
            </div>

            {/* Account Type Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-white/60" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
                অ্যাকাউন্টের ধরন (Account Type)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {ROLES.map((r) => {
                  const Icon = r.icon;
                  const isSelected = formData.role === r.value;
                  return (
                    <button
                      key={r.value}
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, role: r.value }))}
                      className="flex flex-col items-center gap-1.5 rounded-xl p-2.5 text-center transition-all duration-300 bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/30 hover:bg-white/[0.06]"
                      style={{
                        borderColor: isSelected ? 'rgba(59, 130, 246, 0.4)' : '',
                        backgroundColor: isSelected ? 'rgba(59, 130, 246, 0.08)' : '',
                        boxShadow: isSelected ? '0 0 15px -3px rgba(59, 130, 246, 0.2)' : '',
                      }}
                    >
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-400' : 'text-white/30'}`} />
                      <span 
                        className={`text-[9px] font-bold tracking-tight ${isSelected ? 'text-white' : 'text-white/40'}`}
                        style={{ fontFamily: 'Hind Siliguri, sans-serif' }}
                      >
                        {r.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-white/60" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
                পাসওয়ার্ড (Password)
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-200">
                  <Lock className={`w-4 h-4 ${focusedField === 'password' ? 'text-blue-400' : 'text-white/30'}`} />
                </div>
                <input
                  id="signup-password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  required
                  minLength={8}
                  placeholder="Min. 8 characters"
                  className="w-full rounded-xl pl-11 pr-12 py-3.5 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300 bg-white/[0.05] border border-white/[0.06] focus:border-blue-500/50 focus:bg-white/[0.08]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="flex gap-1.5 pt-1">
                  {[1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className="h-1 flex-1 rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: strength >= level
                          ? strength === 1 ? '#ef4444' : strength === 2 ? '#f59e0b' : strength === 3 ? '#10b981' : '#3b82f6'
                          : 'rgba(255, 255, 255, 0.08)'
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-white/60" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
                পাসওয়ার্ড নিশ্চিত করুন (Confirm Password)
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-200">
                  <Lock className={`w-4 h-4 ${focusedField === 'confirm' ? 'text-blue-400' : 'text-white/30'}`} />
                </div>
                <input
                  id="signup-confirm-password"
                  type={showConfirm ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('confirm')}
                  onBlur={() => setFocusedField(null)}
                  required
                  placeholder="Re-enter password"
                  className="w-full rounded-xl pl-11 pr-12 py-3.5 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300 bg-white/[0.05] border border-white/[0.06] focus:border-blue-500/50 focus:bg-white/[0.08]"
                  style={{
                    borderColor: formData.confirmPassword && formData.confirmPassword !== formData.password
                      ? 'rgba(239,68,68,0.4)'
                      : formData.confirmPassword && formData.confirmPassword === formData.password
                        ? 'rgba(16,185,129,0.4)'
                        : '',
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="relative w-full rounded-xl py-3.5 font-bold text-white text-sm transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed group overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                boxShadow: loading ? 'none' : '0 8px 20px -4px rgba(59, 130, 246, 0.4)',
                fontFamily: 'Hind Siliguri, sans-serif',
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    নিবন্ধন হচ্ছে...
                  </>
                ) : (
                  <>
                    নিবন্ধন সম্পন্ন করুন
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
            </button>

            {/* Bottom Link */}
            <div className="pt-1 text-center text-sm text-white/50" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
              ইতিমধ্যে অ্যাকাউন্ট আছে?{' '}
              <Link href="/auth/login" className="font-bold text-blue-400 hover:text-blue-300 transition-colors">
                লগইন করুন
              </Link>
            </div>
          </form>
        </div>

        <p className="text-center mt-6 text-xs text-white/20" style={{ fontFamily: 'Hind Siliguri, sans-serif' }}>
          নিবন্ধন করার মাধ্যমে আপনি আমাদের শর্তাবলীর সাথে সম্মত হচ্ছেন
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>
    </div>
  );
}


