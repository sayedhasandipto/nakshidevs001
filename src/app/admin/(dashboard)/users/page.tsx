import { MoreVertical, Search, Shield, User } from 'lucide-react';
import { fetchAdminData } from '@/lib/api';

export default async function AdminUsers() {
  const users = await fetchAdminData('/users') || [];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Users Management</h1>
          <p className="text-sm text-slate-400 mt-1">Manage platform users, roles, and permissions.</p>
        </div>
        <button className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-medium transition-colors shadow-lg shadow-rose-500/20 text-sm">
          Add New User
        </button>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between gap-4 bg-slate-900/80">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-500" />
            </div>
            <input
              type="text"
              placeholder="Search users..."
              className="block w-full pl-10 pr-3 py-2 border border-slate-700 rounded-xl bg-slate-950/50 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 sm:text-sm transition-all"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span className="hidden sm:inline">Sort by:</span>
            <select className="bg-slate-950 border border-slate-700 text-slate-300 rounded-lg px-3 py-1.5 focus:outline-none focus:border-rose-500/50 transition-colors">
              <option>Newest</option>
              <option>Oldest</option>
              <option>Name A-Z</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-400 uppercase bg-slate-950/50 border-b border-slate-800">
              <tr>
                <th className="px-6 py-4 font-medium">User</th>
                <th className="px-6 py-4 font-medium">Role</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Joined</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {users.map((user: any) => (
                <tr key={user._id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-indigo-500/20">
                        {user.role === 'Admin' ? (
                          <Shield className="w-5 h-5 text-indigo-400" />
                        ) : (
                          <User className="w-5 h-5 text-slate-400" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-slate-200">{user.name}</div>
                        <div className="text-xs text-slate-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${
                      user.role === 'Admin' ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' :
                      user.role === 'Vendor' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                      'bg-slate-500/10 text-slate-400 border-slate-500/20'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                      <span className={user.status === 'Active' ? 'text-emerald-400' : 'text-rose-400'}>{user.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-400">
                    {user.joinedAt}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between text-sm text-slate-400">
          <div>Showing 1 to {users.length} of {users.length} entries</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-700 rounded hover:bg-slate-800 transition-colors disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 border border-slate-700 rounded hover:bg-slate-800 transition-colors disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
