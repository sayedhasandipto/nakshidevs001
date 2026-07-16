import { Plus, Edit3, Trash2 } from 'lucide-react';
import { fetchAdminData } from '@/lib/api';

export default async function AdminServices() {
  const fetchedServices = await fetchAdminData('/services') || [];

  const services = fetchedServices.length > 0 ? fetchedServices : [
    { _id: '1', title: 'Web Development', category: 'Tech', price: '$500', status: 'Active' },
    { _id: '2', title: 'Logo Design', category: 'Design', price: '$150', status: 'Active' },
    { _id: '3', title: 'SEO Optimization', category: 'Marketing', price: '$300', status: 'Inactive' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Services Management</h1>
          <p className="text-sm text-slate-400 mt-1">Manage platform services, categories, and pricing.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-medium transition-colors shadow-lg shadow-rose-500/20 text-sm">
          <Plus className="w-4 h-4" />
          Add Service
        </button>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-400 uppercase bg-slate-950/50 border-b border-slate-800">
              <tr>
                <th className="px-6 py-4 font-medium">Service Name</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Price (Starting)</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {services.map((service: any) => (
                <tr key={service._id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-200">{service.title}</td>
                  <td className="px-6 py-4 text-slate-400">{service.category}</td>
                  <td className="px-6 py-4 text-slate-300 font-medium">{service.price}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${
                      service.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-slate-500/10 text-slate-400 border-slate-500/20'
                    }`}>
                      {service.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-indigo-400 hover:text-white hover:bg-indigo-500/20 rounded-lg transition-colors">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-rose-400 hover:text-white hover:bg-rose-500/20 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
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
