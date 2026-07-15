'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { FaBuilding, FaTools, FaUser } from 'react-icons/fa';

const ROLES = [
  { value: 'client', label: 'Service Client', icon: < FaUser className="text-gray-400" />, desc: 'Looking for services' },
  { value: 'provider', label: 'Service Provider', icon: <FaTools className="text-gray-400" />, desc: 'Offering my skills' },
  { value: 'business', label: 'Small Business', icon: <FaBuilding className="text-gray-400" />, desc: 'Managing a business' },
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
      setError('Passwords do not match');
      return;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { error: authError } = await authClient.signUp.email({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        // additionalFields defined in auth.ts
        role: formData.role as any,
        callbackURL: '/dashboard',
      });

      if (authError) {
        throw new Error(authError.message ?? 'Failed to create account');
      }

      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message ?? 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full rounded-xl py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-200`;

  const inputStyle = (field: string) => ({
    background: focusedField === field ? 'rgba(99,102,241,0.12)' : 'rgba(255,255,255,0.06)',
    border: focusedField === field ? '1px solid rgba(99,102,241,0.6)' : '1px solid rgba(255,255,255,0.08)',
    boxShadow: focusedField === field ? '0 0 0 3px rgba(99,102,241,0.12)' : 'none',
  });

  const iconColor = (field: string) =>
  ({ color: focusedField === field ? '#6366f1' : 'rgba(148,163,184,0.6)' });

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-violet-950" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }} />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }} />
        <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />
        <div className="absolute top-24 left-16 h-3 w-3 rounded-full bg-violet-400 opacity-60 animate-pulse" />
        <div className="absolute top-48 right-24 h-2 w-2 rounded-full bg-indigo-300 opacity-40 animate-pulse" style={{ animationDelay: '0.8s' }} />
        <div className="absolute bottom-40 left-32 h-2 w-2 rounded-full bg-blue-400 opacity-50 animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-24 right-16 h-3 w-3 rounded-full bg-purple-300 opacity-30 animate-pulse" style={{ animationDelay: '2.2s' }} />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Brand header */}
        <div className="mb-8 text-center">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
            style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)' }}
          >
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Create account</h1>
          <p className="mt-1 text-slate-400 text-sm">Join thousands on ServiceHub today</p>
        </div>

        {/* Glass card */}
        <div
          className="rounded-2xl p-8 shadow-2xl"
          style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Error */}
            {error && (
              <div
                className="flex items-center gap-3 rounded-xl p-4 text-sm"
                style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)' }}
              >
                <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-red-300">{error}</span>
              </div>
            )}

            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(148,163,184,0.9)' }}>
                Full Name
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 transition-colors duration-200" style={iconColor('name')} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
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
                  placeholder="Your full name"
                  className={`${inputClass('name')} pl-11 pr-4`}
                  style={inputStyle('name')}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(148,163,184,0.9)' }}>
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 transition-colors duration-200" style={iconColor('email')} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
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
                  placeholder="your@email.com"
                  className={`${inputClass('email')} pl-11 pr-4`}
                  style={inputStyle('email')}
                />
              </div>
            </div>

            {/* Account Type — custom radio-style selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(148,163,184,0.9)' }}>
                Account Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {ROLES.map((r) => (
                  <button
                    key={r.value}
                    type="button"
                    onClick={() => setFormData((p) => ({ ...p, role: r.value }))}
                    className="flex flex-col items-center gap-1 rounded-xl p-4 text-center transition-all duration-200"
                    style={{
                      background: formData.role === r.value ? 'rgba(139,92,246,0.2)' : 'rgba(255,255,255,0.04)',
                      border: formData.role === r.value ? '1px solid rgba(139,92,246,0.7)' : '1px solid rgba(255,255,255,0.08)',
                      boxShadow: formData.role === r.value ? '0 0 0 2px rgba(139,92,246,0.15)' : 'none',
                    }}
                  >
                    <span className="text-xl">{r.icon}</span>
                    <span className="text-xs font-semibold" style={{ color: formData.role === r.value ? '#c4b5fd' : 'rgba(148,163,184,0.8)' }}>
                      {r.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(148,163,184,0.9)' }}>
                Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 transition-colors duration-200" style={iconColor('password')} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
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
                  className={`${inputClass('password')} pl-11 pr-12`}
                  style={inputStyle('password')}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 transition-opacity hover:opacity-80"
                  style={{ color: 'rgba(148,163,184,0.6)' }}>
                  {showPassword
                    ? <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                    : <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  }
                </button>
              </div>
              {/* Strength indicator */}
              {formData.password && (
                <div className="flex gap-1 mt-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-1 flex-1 rounded-full transition-all duration-300"
                      style={{
                        background: formData.password.length >= i * 2
                          ? i <= 2 ? '#f59e0b' : i === 3 ? '#10b981' : '#6366f1'
                          : 'rgba(255,255,255,0.1)'
                      }} />
                  ))}
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(148,163,184,0.9)' }}>
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 transition-colors duration-200" style={iconColor('confirm')} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
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
                  placeholder="Re-enter your password"
                  className={`${inputClass('confirm')} pl-11 pr-12`}
                  style={{
                    ...inputStyle('confirm'),
                    border: formData.confirmPassword && formData.confirmPassword !== formData.password
                      ? '1px solid rgba(239,68,68,0.5)'
                      : formData.confirmPassword && formData.confirmPassword === formData.password
                        ? '1px solid rgba(16,185,129,0.5)'
                        : inputStyle('confirm').border,
                  }}
                />
                <button type="button" onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 transition-opacity hover:opacity-80"
                  style={{ color: 'rgba(148,163,184,0.6)' }}>
                  {showConfirm
                    ? <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                    : <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  }
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              id="signup-submit"
              disabled={loading}
              className="relative w-full rounded-xl py-3.5 font-semibold text-white text-sm overflow-hidden transition-all duration-300 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                boxShadow: loading ? 'none' : '0 4px 20px rgba(139,92,246,0.4)',
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </span>
            </button>

            <div className="flex items-center gap-4 py-1">
              <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
              <span className="text-xs" style={{ color: 'rgba(148,163,184,0.5)' }}>already a member?</span>
              <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
            </div>

            <p className="text-center text-sm" style={{ color: 'rgba(148,163,184,0.8)' }}>
              Already have an account?{' '}
              <Link href="/auth/login" className="font-semibold transition-colors hover:opacity-80" style={{ color: '#a78bfa' }}>
                Sign in →
              </Link>
            </p>
          </form>
        </div>

        <p className="text-center mt-6 text-xs" style={{ color: 'rgba(148,163,184,0.4)' }}>
          By creating an account you agree to our Terms of Service
        </p>
      </div>
    </div>
  );
}
