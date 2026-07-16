'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession } from '@/lib/auth-client';

export default function Dashboard() {
  const { data: session } = useSession();
  const [ordersCount, setOrdersCount] = useState<number>(0);

  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchOrders = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const res = await fetch(`${API_URL}/api/orders/user/${session.user.email}`);
        if (res.ok) {
          const json = await res.json();
          setOrdersCount(json.data?.length || 0);
        }
      } catch {
        // silently fail
      }
    };

    fetchOrders();
  }, [session]);

  const user = session?.user;
  const firstName = user?.name ? user.name.split(' ')[0] : 'User';

  return (
    <div>
      <h2 className="mb-2 text-3xl font-bold text-gray-900">Welcome back, {firstName}!</h2>
      <p className="text-gray-600 mb-8">Here&apos;s your dashboard overview</p>

      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-4 mb-8">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm font-medium text-gray-600">Active Services</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm font-medium text-gray-600">Total Orders</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">{ordersCount}</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm font-medium text-gray-600">Revenue</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">৳0</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm font-medium text-gray-600">Rating</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">0.0★</p>
        </div>
      </div>

      {/* Get Started Section */}
      <div className="rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border border-blue-100 p-8 text-center shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <svg className="w-48 h-48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 22h20L12 2zm0 3.8L18.4 19H5.6L12 5.8z"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10">Get Started with ServiceHub</h3>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto relative z-10">
          Complete your profile to unlock all features, build trust with users, and start exploring our robust online services.
        </p>
        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          <Link
            href="/dashboard/profile"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-blue-700 hover:shadow-lg transition-all"
          >
            Complete Profile
          </Link>
          <Link
            href="/dashboard/orders"
            className="rounded-lg bg-white border border-blue-200 px-6 py-3 font-semibold text-blue-600 shadow-sm hover:bg-blue-50 hover:border-blue-300 transition-all"
          >
            View My Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
