import { Eye, Clock, CheckCircle, XCircle } from 'lucide-react';
import { fetchAdminData } from '@/lib/api';

export default async function AdminOrders() {
  const fetchedOrders = await fetchAdminData('/orders') || [];

  const orders = fetchedOrders.length > 0 ? fetchedOrders : [
    { _id: '1', orderId: 'ORD-2026-001', customerName: 'Alice Johnson', serviceName: 'Web Development', amount: '$500', status: 'Completed', orderDate: 'Jul 15, 2026' },
    { _id: '2', orderId: 'ORD-2026-002', customerName: 'Bob Smith', serviceName: 'Logo Design', amount: '$150', status: 'Pending', orderDate: 'Jul 16, 2026' },
    { _id: '3', orderId: 'ORD-2026-003', customerName: 'Charlie Brown', serviceName: 'SEO Optimization', amount: '$300', status: 'In Progress', orderDate: 'Jul 16, 2026' },
    { _id: '4', orderId: 'ORD-2026-004', customerName: 'Diana Prince', serviceName: 'UI/UX Audit', amount: '$250', status: 'Cancelled', orderDate: 'Jul 14, 2026' },
  ];

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Completed': return <CheckCircle className="w-4 h-4 text-emerald-400" />;
      case 'Pending': return <Clock className="w-4 h-4 text-amber-400" />;
      case 'In Progress': return <Clock className="w-4 h-4 text-blue-400" />;
      case 'Cancelled': return <XCircle className="w-4 h-4 text-rose-400" />;
      default: return null;
    }
  };

  const getStatusStyles = (status: string) => {
    switch(status) {
      case 'Completed': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Pending': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'In Progress': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Cancelled': return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Orders Management</h1>
        <p className="text-sm text-slate-400 mt-1">Track and manage all platform orders and their statuses.</p>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-400 uppercase bg-slate-950/50 border-b border-slate-800">
              <tr>
                <th className="px-6 py-4 font-medium">Order ID</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Service</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {orders.map((order: any) => (
                <tr key={order._id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-indigo-400">{order.orderId}</td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-200">{order.customerName}</div>
                    <div className="text-xs text-slate-400">{order.customerEmail}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-400">{order.serviceName}</td>
                  <td className="px-6 py-4 font-medium text-slate-200">{order.amount}</td>
                  <td className="px-6 py-4">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${getStatusStyles(order.status)}`}>
                      {getStatusIcon(order.status)}
                      {order.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
