'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch('/api/auth/session');
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      }
    } catch (error) {
      console.error('Failed to fetch user:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/sign-out', { method: 'POST' });
      window.location.href = '/';
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600">
              <span className="text-white font-bold">
                {user?.name?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h1 className="font-semibold text-gray-900">{user?.name}</h1>
              <p className="text-sm text-gray-500 capitalize">{user?.role}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
          >
            Log Out
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-73px)]">
        {/* Sidebar */}
        <aside className="w-64 border-r border-gray-200 bg-white p-6">
          <nav className="space-y-2">
            <Link
              href="/dashboard"
              className="block rounded-lg bg-blue-50 px-4 py-3 font-medium text-blue-600"
            >
              Dashboard
            </Link>
            
            {(user?.role === 'client' || user?.role === 'provider') && (
              <>
                <Link
                  href="/dashboard/services"
                  className="block rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50"
                >
                  Services
                </Link>
                <Link
                  href="/dashboard/orders"
                  className="block rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50"
                >
                  Orders
                </Link>
              </>
            )}

            {user?.role === 'provider' && (
              <Link
                href="/dashboard/add-service"
                className="block rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50"
              >
                Add Service
              </Link>
            )}

            {user?.role === 'business' && (
              <>
                <Link
                  href="/dashboard/website-builder"
                  className="block rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50"
                >
                  Website Builder
                </Link>
                <Link
                  href="/dashboard/store"
                  className="block rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50"
                >
                  Online Store
                </Link>
              </>
            )}

            <Link
              href="/dashboard/profile"
              className="block rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50"
            >
              Profile Settings
            </Link>
            <Link
              href="/dashboard/support"
              className="block rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50"
            >
              Support Chat
            </Link>
          </nav>
        </aside>

        {/* Main Panel */}
        <main className="flex-1 overflow-auto p-8">
          <div className="max-w-6xl">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">Welcome back, {user?.name?.split(' ')[0]}!</h2>
            <p className="text-gray-600 mb-8">Here&apos;s your dashboard overview</p>

            {/* Quick Stats */}
            <div className="grid gap-6 md:grid-cols-4 mb-8">
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <p className="text-sm text-gray-600">Active Services</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <p className="text-sm text-gray-600">Total Orders</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <p className="text-sm text-gray-600">Revenue</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">৳0</p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <p className="text-sm text-gray-600">Rating</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">0.0★</p>
              </div>
            </div>

            {/* Get Started Section */}
            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Get Started</h3>
              <p className="text-gray-600 mb-6">
                Complete your profile and start using ServiceHub
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/dashboard/profile"
                  className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                >
                  Complete Profile
                </Link>
                <Link
                  href="/services"
                  className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50"
                >
                  Browse Services
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
