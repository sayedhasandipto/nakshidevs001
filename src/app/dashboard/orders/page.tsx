'use client';

import { useEffect, useState } from 'react';
import { useSession } from '@/lib/auth-client';
import toast from 'react-hot-toast';

export default function OrdersPage() {
  const { data: session, isPending } = useSession();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  const fetchOrders = async () => {
    try {
      const res = await fetch(`${API_URL}/api/orders/user/${session?.user?.email}`);
      if (res.ok) {
        const json = await res.json();
        setOrders(json.data || []);
      }
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isPending) return;
    
    if (!session?.user?.email) {
      setLoading(false);
      return;
    }

    fetchOrders();
  }, [session, isPending]);

  const handleCancelOrder = async (orderId: string) => {
    if (!confirm('Are you sure you want to cancel this order?')) return;

    try {
      const res = await fetch(`${API_URL}/api/orders/${orderId}/cancel`, {
        method: 'PUT',
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Order cancelled successfully! Reloading...');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        toast.error(data.error || 'Failed to cancel order.');
      }
    } catch (error) {
      console.error('Error cancelling order:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const handleDeleteOrder = async (orderId: string, status: string) => {
    const isWorking = status === 'Pending' || status === 'In Progress';
    const msg = isWorking
      ? 'WARNING: This order is still active. Deleting it will permanently remove the record from your dashboard. Are you sure you want to delete?'
      : 'Are you sure you want to permanently delete this order record?';
      
    if (!confirm(msg)) return;

    try {
      const res = await fetch(`${API_URL}/api/orders/${orderId}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        toast.success('Order deleted successfully! Reloading...');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        toast.error('Failed to delete order.');
      }
    } catch (error) {
      console.error('Error deleting order:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const isCancelable = (orderDateStr: string, status: string) => {
    if (status === 'Cancelled' || status === 'Completed') return false;
    
    const orderDate = new Date(orderDateStr).getTime();
    const currentDate = new Date().getTime();
    const diffTime = currentDate - orderDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    
    return diffDays <= 3;
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h2>
      <p className="text-gray-600 mb-8">Track the status of your recent transactions and service requests.</p>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
              <tr>
                <th scope="col" className="px-6 py-4">Order ID</th>
                <th scope="col" className="px-6 py-4">Service Name</th>
                <th scope="col" className="px-6 py-4">Date</th>
                <th scope="col" className="px-6 py-4">Amount</th>
                <th scope="col" className="px-6 py-4">Status</th>
                <th scope="col" className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    Loading your orders...
                  </td>
                </tr>
              ) : orders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    <div className="flex flex-col items-center justify-center">
                      <span className="material-symbols-outlined text-4xl mb-3 text-gray-300">receipt_long</span>
                      <p>No orders found.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order._id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-blue-600">{order.orderId}</td>
                    <td className="px-6 py-4 text-gray-900">{order.serviceName}</td>
                    <td className="px-6 py-4">{new Date(order.orderDate).toLocaleDateString()}</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">{order.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        order.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right flex items-center justify-end gap-3">
                      {isCancelable(order.orderDate, order.status) && (
                        <button
                          onClick={() => handleCancelOrder(order._id)}
                          className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 font-semibold rounded-lg text-xs transition-colors"
                        >
                          Cancel
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteOrder(order._id, order.status)}
                        className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-gray-700 font-semibold rounded-lg text-xs transition-colors"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
