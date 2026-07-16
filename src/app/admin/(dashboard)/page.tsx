import { Users, Briefcase, ShoppingCart, TrendingUp } from 'lucide-react';
import { fetchAdminData } from '@/lib/api';

export default async function AdminDashboard() {
  const statsData = await fetchAdminData('/stats') || [];

  // Map string icon names to Lucide icons if needed, or we just map by index
  const icons = [Users, Briefcase, ShoppingCart, TrendingUp];

  const stats = statsData.map((stat: any, index: number) => ({
    ...stat,
    icon: icons[index % icons.length]
  }));

  if (stats.length === 0) {
    // Fallback if API fails
    stats.push(
      { title: 'Total Users', value: '0', change: '0%', icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
      { title: 'Active Services', value: '0', change: '0%', icon: Briefcase, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
      { title: 'Total Orders', value: '0', change: '0%', icon: ShoppingCart, color: 'text-rose-500', bg: 'bg-rose-500/10' },
      { title: 'Monthly Revenue', value: '$0', change: '0%', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Dashboard Overview</h1>
          <p className="text-sm text-slate-400 mt-1">Welcome back to your admin portal.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
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
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-white mb-4">Revenue Overview</h2>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-slate-800 rounded-xl bg-slate-900/50">
            <span className="text-slate-500">Chart Visualization Space</span>
          </div>
        </div>
        
        <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-rose-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-300">New user registered</p>
                  <p className="text-xs text-slate-500">2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
