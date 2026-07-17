'use client';

import { useState, useEffect, useCallback } from 'react';
import { Search, Shield, User, Plus, X, Eye, EyeOff, RefreshCw, Trash2, AlertTriangle } from 'lucide-react';
import toast from 'react-hot-toast';

interface UserData {
  _id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  joinedAt: string;
}

export default function AdminUsers() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');
  const [showAddModal, setShowAddModal] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState<string | null>(null);
  const [deleteUserName, setDeleteUserName] = useState('');
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'client',
  });

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/users');
      if (!res.ok) throw new Error('Failed to fetch users');
      const json = await res.json();
      setUsers(json.data || []);
    } catch (err) {
      toast.error('Failed to load users');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    let result = [...users];
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
      );
    }
    if (sortOrder === 'oldest') result.reverse();
    else if (sortOrder === 'name') result.sort((a, b) => a.name.localeCompare(b.name));
    setFilteredUsers(result);
  }, [users, searchQuery, sortOrder]);

  const handleDeleteUser = async () => {
    if (!deleteUserId) return;
    setDeleteLoading(true);
    try {
      const res = await fetch(`/api/admin/users/${deleteUserId}`, { method: 'DELETE' });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to delete user');
      toast.success(`"${deleteUserName}" has been deleted.`);
      setDeleteUserId(null);
      setDeleteUserName('');
      setUsers((prev) => prev.filter((u) => u._id !== deleteUserId));
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong');
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setAddLoading(true);
    try {
      const res = await fetch('/api/admin/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to add user');

      toast.success(`User "${formData.name}" added successfully!`);
      setShowAddModal(false);
      setFormData({ name: '', email: '', password: '', role: 'client' });
      fetchUsers();
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong');
    } finally {
      setAddLoading(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Users Management</h1>
          <p className="text-sm text-slate-400 mt-1">Manage platform users, roles, and permissions.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={fetchUsers}
            title="Refresh"
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-medium transition-colors shadow-lg shadow-rose-500/20 text-sm"
          >
            <Plus className="w-4 h-4" />
            Add New User
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between gap-4 bg-slate-900/80">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-500" />
            </div>
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-slate-700 rounded-xl bg-slate-950/50 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 sm:text-sm transition-all"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span className="hidden sm:inline">Sort by:</span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-slate-950 border border-slate-700 text-slate-300 rounded-lg px-3 py-1.5 focus:outline-none focus:border-rose-500/50 transition-colors"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="name">Name A-Z</option>
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
              {loading ? (
                Array.from({ length: 4 }).map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-800" />
                        <div className="space-y-2">
                          <div className="h-3 bg-slate-800 rounded w-28" />
                          <div className="h-2 bg-slate-800 rounded w-40" />
                        </div>
                      </div>
                    </td>
                    {[...Array(4)].map((_, j) => (
                      <td key={j} className="px-6 py-4">
                        <div className="h-3 bg-slate-800 rounded w-20" />
                      </td>
                    ))}
                  </tr>
                ))
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                    {searchQuery ? 'No users match your search.' : 'No users found.'}
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user._id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-indigo-500/20 shrink-0">
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
                        user.role === 'Provider' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                        'bg-slate-500/10 text-slate-400 border-slate-500/20'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                        <span className={user.status === 'Active' ? 'text-emerald-400' : 'text-rose-400'}>
                          {user.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-400">{user.joinedAt}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => {
                          setDeleteUserId(user._id);
                          setDeleteUserName(user.name);
                        }}
                        title="Delete user"
                        className="p-2 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between text-sm text-slate-400">
          <div>
            Showing <span className="text-white font-medium">{filteredUsers.length}</span> of{' '}
            <span className="text-white font-medium">{users.length}</span> users
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteUserId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => !deleteLoading && setDeleteUserId(null)}
          />
          <div
            className="relative w-full max-w-sm rounded-2xl p-6 shadow-2xl z-10"
            style={{
              background: 'rgba(15, 23, 42, 0.97)',
              border: '1px solid rgba(244, 63, 94, 0.25)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.7)',
            }}
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                <AlertTriangle className="w-7 h-7 text-rose-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Delete User?</h2>
                <p className="text-sm text-slate-400 mt-1">
                  Are you sure you want to delete{' '}
                  <span className="text-white font-semibold">{deleteUserName}</span>?
                  <br />
                  This will remove their account, credentials, and sessions permanently.
                </p>
              </div>
              <div className="flex gap-3 w-full">
                <button
                  onClick={() => setDeleteUserId(null)}
                  disabled={deleteLoading}
                  className="flex-1 py-2.5 rounded-xl text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteUser}
                  disabled={deleteLoading}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-60 flex items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #f43f5e 0%, #be123c 100%)' }}
                >
                  {deleteLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Deleting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowAddModal(false)}
          />
          <div
            className="relative w-full max-w-md rounded-2xl p-6 shadow-2xl z-10"
            style={{
              background: 'rgba(15, 23, 42, 0.95)',
              border: '1px solid rgba(244, 63, 94, 0.2)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
            }}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-white">Add New User</h2>
                <p className="text-xs text-slate-400 mt-0.5">User will be saved directly to MongoDB.</p>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddUser} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  placeholder="John Doe"
                  className="w-full rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 bg-slate-800/50 border border-slate-700 focus:outline-none focus:border-rose-500/60 focus:ring-1 focus:ring-rose-500/40 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  placeholder="john@example.com"
                  className="w-full rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 bg-slate-800/50 border border-slate-700 focus:outline-none focus:border-rose-500/60 focus:ring-1 focus:ring-rose-500/40 transition-all"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={8}
                    value={formData.password}
                    onChange={(e) => setFormData((p) => ({ ...p, password: e.target.value }))}
                    placeholder="Min. 8 characters"
                    className="w-full rounded-xl pl-4 pr-10 py-2.5 text-sm text-white placeholder-slate-600 bg-slate-800/50 border border-slate-700 focus:outline-none focus:border-rose-500/60 focus:ring-1 focus:ring-rose-500/40 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Role */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Role
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData((p) => ({ ...p, role: e.target.value }))}
                  className="w-full rounded-xl px-4 py-2.5 text-sm text-white bg-slate-800/50 border border-slate-700 focus:outline-none focus:border-rose-500/60 focus:ring-1 focus:ring-rose-500/40 transition-all"
                >
                  <option value="client">Client</option>
                  <option value="provider">Provider</option>
                  <option value="business">Business</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2.5 rounded-xl text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={addLoading}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-60"
                  style={{ background: 'linear-gradient(135deg, #f43f5e 0%, #be123c 100%)' }}
                >
                  {addLoading ? 'Adding...' : 'Add User'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
