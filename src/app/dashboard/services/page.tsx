'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession } from '@/lib/auth-client';

export default function ServicesPage() {
  const { data: session, isPending } = useSession();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isPending) return;
    if (!session?.user?.email) {
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const res = await fetch(`${API_URL}/api/orders/user/${session.user.email}`);
        if (res.ok) {
          const json = await res.json();
          setOrders(json.data || []);
        }
      } catch (error) {
        console.error('Failed to fetch services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [session, isPending]);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-700';
      case 'In Progress': return 'bg-blue-100 text-blue-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">My Services</h2>
          <p className="text-gray-600">All services you have ordered.</p>
        </div>
        <Link
          href="/#pricing"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Order New Service
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-500">Loading your services...</div>
        ) : orders.length === 0 ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
              <span className="material-symbols-outlined text-2xl">design_services</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Services Yet</h3>
            <p className="text-gray-500 mb-6 max-w-sm mx-auto">
              You haven&apos;t ordered any services yet. Browse our packages and get started!
            </p>
            <Link href="/#pricing" className="text-blue-600 font-semibold hover:underline">
              Browse available packages →
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {orders.map((order) => (
              <div key={order._id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    <span className="material-symbols-outlined">design_services</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{order.serviceName}</p>
                    <p className="text-sm text-gray-500">Order ID: {order.orderId}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{new Date(order.orderDate).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <p className="font-bold text-gray-900">{order.amount}</p>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(order.status)}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
