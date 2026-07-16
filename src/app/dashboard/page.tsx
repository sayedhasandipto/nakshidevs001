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
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://nakshidevs001server.vercel.app';
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

  const stats = [
    { title: 'Active Services', value: '0', icon: 'bolt', color: 'text-amber-500', bg: 'bg-amber-50' },
    { title: 'Total Orders', value: ordersCount.toString(), icon: 'shopping_cart', color: 'text-blue-500', bg: 'bg-blue-50' },
    { title: 'Revenue', value: '৳0', icon: 'account_balance_wallet', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { title: 'Rating', value: '0.0', icon: 'star', color: 'text-purple-500', bg: 'bg-purple-50', suffix: '★' },
  ];

  return (
    <div className="pb-12">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#002045] tracking-tight">
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{firstName}!</span>
          </h2>
          <p className="text-gray-500 mt-2 text-lg">Here&apos;s what&apos;s happening with your account today.</p>
        </div>
        
        <Link
          href="/services"
          className="inline-flex items-center justify-center gap-2 bg-[#002045] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-[#001530] hover:-translate-y-0.5 transition-all duration-300"
        >
          <span className="material-symbols-outlined text-xl">add</span>
          New Order
        </Link>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
        {stats.map((stat, i) => (
          <div key={i} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden cursor-default hover:-translate-y-1">
            <div className={`absolute top-0 right-0 w-32 h-32 ${stat.bg} rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 opacity-50`}></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}>
                <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
              </div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.title}</p>
              <div className="mt-2 flex items-baseline gap-1">
                <h3 className="text-3xl font-extrabold text-gray-900">{stat.value}</h3>
                {stat.suffix && <span className={`text-xl font-bold ${stat.color}`}>{stat.suffix}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Sections */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Left Column (Wider) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Welcome/Action Card */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-[#002045] p-1 relative overflow-hidden shadow-lg group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-150"></div>
            
            <div className="relative z-10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm p-8 rounded-xl h-full flex flex-col md:flex-row items-center justify-between gap-8 border border-white/20">
              <div className="text-left max-w-md">
                <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3 backdrop-blur-md">
                  Action Required
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">Complete your GovService BD profile</h3>
                <p className="text-blue-100 mb-0 leading-relaxed text-sm">
                  Unlock all platform features, build trust with service providers, and get personalized recommendations by completing your profile information.
                </p>
              </div>
              
              <div className="shrink-0 w-full md:w-auto flex flex-col gap-3">
                <Link
                  href="/dashboard/profile"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-6 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-lg">person_add</span>
                  Complete Profile
                </Link>
                <Link
                  href="/dashboard/services"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/30 px-6 py-3.5 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 backdrop-blur-md"
                >
                  View My Services
                </Link>
              </div>
            </div>
          </div>
          
          {/* Recent Activity placeholder (Optional enhancement) */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#002045]">Recent Activity</h3>
              <Link href="/dashboard/orders" className="text-blue-600 text-sm font-semibold hover:underline">View All</Link>
            </div>
            
            {ordersCount > 0 ? (
               <div className="space-y-4">
                 <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                   <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                     <span className="material-symbols-outlined">receipt_long</span>
                   </div>
                   <div className="flex-1">
                     <h4 className="font-bold text-gray-900">Order Placed</h4>
                     <p className="text-sm text-gray-500">You recently placed a new order.</p>
                   </div>
                   <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-2 py-1 rounded-md">Recently</span>
                 </div>
               </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-gray-400 text-2xl">history</span>
                </div>
                <p className="text-gray-500 font-medium">No recent activity found.</p>
                <p className="text-sm text-gray-400 mt-1">Place an order to see it here.</p>
              </div>
            )}
          </div>
          
        </div>
        
        {/* Right Column (Sidebar) */}
        <div className="space-y-8">
           {/* Support Card */}
           <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 relative overflow-hidden group">
             <div className="absolute -right-6 -top-6 w-24 h-24 bg-emerald-50 rounded-full transition-transform duration-500 group-hover:scale-150"></div>
             <div className="relative z-10">
               <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-5">
                 <span className="material-symbols-outlined">support_agent</span>
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-2">Need Help?</h3>
               <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                 Our dedicated support team is available 24/7 to assist you with any questions or issues.
               </p>
               <Link href="/dashboard/support" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors">
                 Contact Support <span className="material-symbols-outlined text-sm">arrow_forward</span>
               </Link>
             </div>
           </div>
           
           {/* Discover Services */}
           <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-8">
             <div className="flex items-center gap-3 mb-4">
               <span className="material-symbols-outlined text-blue-600">explore</span>
               <h3 className="text-lg font-bold text-[#002045]">Discover More</h3>
             </div>
             <p className="text-sm text-gray-600 mb-5">Explore our wide range of government and business services.</p>
             <Link href="/services" className="block w-full text-center bg-white border border-blue-200 text-blue-700 font-bold py-3 rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm">
               Browse Directory
             </Link>
           </div>
        </div>
        
      </div>
    </div>
  );
}
