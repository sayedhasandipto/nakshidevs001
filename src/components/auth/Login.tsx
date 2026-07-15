'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: authError } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
        callbackURL: '/dashboard',
      });

      if (authError) {
        throw new Error(authError.message ?? 'Failed to sign in');
      }

      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message ?? 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}
        />
        {/* Floating decorative dots */}
        <div className="absolute top-20 left-20 h-3 w-3 rounded-full bg-blue-400 opacity-60 animate-pulse" />
        <div className="absolute top-40 right-32 h-2 w-2 rounded-full bg-indigo-400 opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-40 h-2 w-2 rounded-full bg-violet-400 opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 h-3 w-3 rounded-full bg-blue-300 opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Brand header */}
        <div className="mb-8 text-center">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
            style={{ background: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)' }}
          >
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Welcome back</h1>
          <p className="mt-1 text-slate-400 text-sm">Sign in to your ServiceHub account</p>
        </div>

        {/* Glassmorphism card */}
        <div
          className="rounded-2xl p-8 shadow-2xl"
          style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error alert */}
            {error && (
              <div
                className="flex items-center gap-3 rounded-xl p-4 text-sm"
                style={{
                  background: 'rgba(239,68,68,0.12)',
                  border: '1px solid rgba(239,68,68,0.3)',
                }}
              >
                <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-red-300">{error}</span>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(148,163,184,0.9)' }}>
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 transition-colors duration-200" style={{ color: focusedField === 'email' ? '#6366f1' : 'rgba(148,163,184,0.6)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  id="login-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-200"
                  style={{
                    background: focusedField === 'email' ? 'rgba(99,102,241,0.12)' : 'rgba(255,255,255,0.06)',
                    border: focusedField === 'email' ? '1px solid rgba(99,102,241,0.6)' : '1px solid rgba(255,255,255,0.08)',
                    boxShadow: focusedField === 'email' ? '0 0 0 3px rgba(99,102,241,0.12)' : 'none',
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(148,163,184,0.9)' }}>
                  Password
                </label>
                <button type="button" className="text-xs font-medium transition-colors hover:opacity-80" style={{ color: '#818cf8' }}>
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 transition-colors duration-200" style={{ color: focusedField === 'password' ? '#6366f1' : 'rgba(148,163,184,0.6)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  required
                  placeholder="Enter your password"
                  className="w-full rounded-xl pl-11 pr-12 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-200"
                  style={{
                    background: focusedField === 'password' ? 'rgba(99,102,241,0.12)' : 'rgba(255,255,255,0.06)',
                    border: focusedField === 'password' ? '1px solid rgba(99,102,241,0.6)' : '1px solid rgba(255,255,255,0.08)',
                    boxShadow: focusedField === 'password' ? '0 0 0 3px rgba(99,102,241,0.12)' : 'none',
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 transition-opacity hover:opacity-80"
                  style={{ color: 'rgba(148,163,184,0.6)' }}
                >
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              id="login-submit"
              disabled={loading}
              className="relative w-full rounded-xl py-3.5 font-semibold text-white text-sm overflow-hidden transition-all duration-300 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)',
                boxShadow: loading ? 'none' : '0 4px 20px rgba(99,102,241,0.4)',
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 py-1">
              <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
              <span className="text-xs" style={{ color: 'rgba(148,163,184,0.5)' }}>new here?</span>
              <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
            </div>

            <p className="text-center text-sm" style={{ color: 'rgba(148,163,184,0.8)' }}>
              Don&apos;t have an account?{' '}
              <Link href="/auth/signup" className="font-semibold transition-colors hover:opacity-80" style={{ color: '#818cf8' }}>
                Create one free →
              </Link>
            </p>
          </form>
        </div>

        <p className="text-center mt-6 text-xs" style={{ color: 'rgba(148,163,184,0.4)' }}>
          Protected by industry-standard encryption
        </p>
      </div>
    </div>
  );
}
