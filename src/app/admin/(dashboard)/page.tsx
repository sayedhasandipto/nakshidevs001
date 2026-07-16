'use client';

import { useState, useEffect } from 'react';
import { Users, Briefcase, ShoppingCart, TrendingUp } from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';
import toast from 'react-hot-toast';

export default function AdminDashboard() {
  const [stats, setStats] = useState<any[]>([]);
  const [chartData, setChartData] = useState<any[]>([]);
  const [recentOrders, setRecentOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  const fetchData = async () => {
    try {
      setLoading(true);
      // Fetch stats
      const statsRes = await fetch(`${API_URL}/api/admin/stats`);
      if (statsRes.ok) {
        const json = await statsRes.json();
        setStats(json.data || []);
      }

      // Fetch chart data
      const chartRes = await fetch(`${API_URL}/api/admin/revenue-chart`);
      if (chartRes.ok) {
        const json = await chartRes.json();
        setChartData(json.data || []);
      }

      // Fetch recent orders for activity
      const ordersRes = await fetch(`${API_URL}/api/admin/orders`);
      if (ordersRes.ok) {
        const json = await ordersRes.json();
        setRecentOrders(json.data?.slice(0, 5) || []);
      }
    } catch (error) {
      console.error('Error fetching admin dashboard data:', error);
      toast.error('Failed to load dashboard statistics.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const icons = [Users, Briefcase, ShoppingCart, TrendingUp];

  const getRelativeTime = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minutes ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    return `${diffDays} days ago`;
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-16">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Dashboard Overview</h1>
          <p className="text-sm text-slate-400 mt-1">Welcome back to your admin portal.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 animate-pulse h-32"></div>
          ))
        ) : (
          stats.map((stat: any, i: number) => {
            const Icon = icons[i % icons.length];
            return (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-400">{stat.title}</p>
                    <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-xl ${stat.bg}`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-sm font-medium text-emerald-400">{stat.change}</span>
                  <span className="text-sm text-slate-500">vs last month</span>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Charts & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recharts Area Chart */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm flex flex-col">
          <h2 className="text-lg font-semibold text-white mb-6">Revenue & Orders Overview</h2>
          
          <div className="h-72 w-full mt-auto">
            {loading ? (
              <div className="h-full flex items-center justify-center text-slate-500">Loading chart data...</div>
            ) : chartData.length === 0 ? (
              <div className="h-full flex items-center justify-center text-slate-500">No data available for chart</div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" opacity={0.3} />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={11} tickLine={false} />
                  <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }}
                    labelStyle={{ color: '#94a3b8', fontWeight: 'bold' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Legend verticalAlign="top" height={36} iconType="circle" />
                  <Area 
                    name="Revenue (৳)" 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#10b981" 
                    fillOpacity={1} 
                    fill="url(#colorRevenue)" 
                    strokeWidth={2.5}
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-white mb-4">Recent Activity</h2>
          <div className="space-y-6">
            {loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4 animate-pulse">
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                    <div className="h-3 bg-slate-800 rounded w-1/2"></div>
                  </div>
                </div>
              ))
            ) : recentOrders.length === 0 ? (
              <div className="text-center py-8 text-slate-500 text-sm">No recent activities.</div>
            ) : (
              recentOrders.map((order, i) => (
                <div key={order._id} className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1.5 shrink-0 shadow-md shadow-emerald-500/20" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-300 truncate">
                      New order for <span className="text-white font-bold">{order.serviceName}</span>
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {order.customerName} ({order.customerEmail}) - {getRelativeTime(order.orderDate)}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
