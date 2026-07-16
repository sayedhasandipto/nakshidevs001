'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit3, Trash2, X } from 'lucide-react';
import toast from 'react-hot-toast';

export default function AdminServices() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<any>(null);
  
  // Form fields
  const [serviceId, setServiceId] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('government');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState('');
  const [providerName, setProviderName] = useState('GovService BD');
  const [providerBio, setProviderBio] = useState('');
  
  // Rating states
  const [serviceRating, setServiceRating] = useState('5.0');
  const [serviceReviews, setServiceReviews] = useState('1');
  const [providerRating, setProviderRating] = useState('5.0');
  const [providerReviews, setProviderReviews] = useState('1');

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  const fetchServices = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/api/admin/services`);
      if (res.ok) {
        const json = await res.json();
        setServices(json.data || []);
      }
    } catch (error) {
      console.error('Error fetching admin services:', error);
      toast.error('Failed to load services.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const openAddModal = () => {
    setEditingService(null);
    setServiceId((services.length + 1).toString());
    setTitle('');
    setCategory('government');
    setPrice('');
    setDuration('');
    setDescription('');
    setFeatures('');
    setProviderName('GovService BD');
    setProviderBio('');
    setServiceRating('5.0');
    setServiceReviews('1');
    setProviderRating('5.0');
    setProviderReviews('1');
    setModalOpen(true);
  };

  const openEditModal = (service: any) => {
    setEditingService(service);
    setServiceId(service.serviceId || '');
    setTitle(service.title || '');
    setCategory(service.category || 'government');
    setPrice(service.price?.toString() || '');
    setDuration(service.duration || '');
    setDescription(service.description || '');
    setFeatures(service.features?.join(', ') || '');
    setProviderName(service.providerId?.name || 'GovService BD');
    setProviderBio(service.providerId?.bio || '');
    setServiceRating(service.rating?.toString() || '5.0');
    setServiceReviews(service.reviews?.toString() || '1');
    setProviderRating(service.providerId?.rating?.toString() || '5.0');
    setProviderReviews(service.providerId?.reviews?.toString() || '1');
    setModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!serviceId || !title || !category || !price || !duration || !description || !providerName) {
      toast.error('Please fill in all required fields.');
      return;
    }

    const payload = {
      serviceId,
      title,
      category,
      price: Number(price),
      duration,
      description,
      features: features.split(',').map(f => f.trim()).filter(Boolean),
      rating: Number(serviceRating),
      reviews: Number(serviceReviews),
      providerId: {
        name: providerName,
        rating: Number(providerRating),
        reviews: Number(providerReviews),
        bio: providerBio
      }
    };

    try {
      const url = editingService 
        ? `${API_URL}/api/admin/services/${editingService._id}`
        : `${API_URL}/api/admin/services`;
      
      const method = editingService ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(editingService ? 'Service updated successfully!' : 'Service added successfully!');
        setModalOpen(false);
        fetchServices();
      } else {
        toast.error(data.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Network error. Please try again.');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;

    try {
      const res = await fetch(`${API_URL}/api/admin/services/${id}`, {
        method: 'DELETE'
      });

      if (res.ok) {
        toast.success('Service deleted successfully!');
        fetchServices();
      } else {
        toast.error('Failed to delete service.');
      }
    } catch (error) {
      console.error('Error deleting service:', error);
      toast.error('Network error. Please try again.');
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Services Management</h1>
          <p className="text-sm text-slate-400 mt-1">Manage platform services, categories, and pricing.</p>
        </div>
        <button 
          onClick={openAddModal}
          className="flex items-center gap-2 px-4 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-medium transition-all shadow-lg shadow-rose-500/20 text-sm hover:-translate-y-0.5"
        >
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
              {loading ? (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-slate-400">Loading services...</td>
                </tr>
              ) : services.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-slate-400">No services found. Click Add Service to create one.</td>
                </tr>
              ) : (
                services.map((service: any) => (
                  <tr key={service._id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-200">{service.title}</td>
                    <td className="px-6 py-4 text-slate-400 capitalize">{service.category}</td>
                    <td className="px-6 py-4 text-slate-300 font-medium">৳{service.price}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${
                        service.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-slate-500/10 text-slate-400 border-slate-500/20'
                      }`}>
                        {service.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => openEditModal(service)}
                          className="p-2 text-indigo-400 hover:text-white hover:bg-indigo-500/20 rounded-lg transition-colors"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(service._id)}
                          className="p-2 text-rose-400 hover:text-white hover:bg-rose-500/20 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Dialog */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-800 sticky top-0 bg-slate-900 z-10">
              <h2 className="text-xl font-bold text-white">
                {editingService ? 'Edit Service' : 'Add New Service'}
              </h2>
              <button 
                onClick={() => setModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 hover:bg-slate-800 rounded-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6 flex-1 text-slate-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Service ID (Unique) *</label>
                  <input 
                    type="text" 
                    value={serviceId} 
                    onChange={e => setServiceId(e.target.value)}
                    disabled={!!editingService}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-rose-500 disabled:opacity-50"
                    placeholder="e.g. 7"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Category *</label>
                  <select 
                    value={category} 
                    onChange={e => setCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                  >
                    <option value="government">Government (সরকারি)</option>
                    <option value="business">Business</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="finance">Finance</option>
                    <option value="legal">Legal</option>
                    <option value="technical">Technical</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Service Title *</label>
                <input 
                  type="text" 
                  value={title} 
                  onChange={e => setTitle(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-rose-500"
                  placeholder="e.g. Passport Assistance"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Price (৳ BDT) *</label>
                  <input 
                    type="number" 
                    value={price} 
                    onChange={e => setPrice(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-rose-500"
                    placeholder="e.g. 500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Duration *</label>
                  <input 
                    type="text" 
                    value={duration} 
                    onChange={e => setDuration(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-rose-500"
                    placeholder="e.g. 5-7 days"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Service Rating (0.0 to 5.0)</label>
                  <input 
                    type="number" 
                    step="0.1"
                    min="0"
                    max="5"
                    value={serviceRating} 
                    onChange={e => setServiceRating(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-rose-500"
                    placeholder="e.g. 4.8"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Service Reviews Count</label>
                  <input 
                    type="number" 
                    min="0"
                    value={serviceReviews} 
                    onChange={e => setServiceReviews(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-rose-500"
                    placeholder="e.g. 15"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Description *</label>
                <textarea 
                  value={description} 
                  onChange={e => setDescription(e.target.value)}
                  rows={4}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-rose-500"
                  placeholder="Enter details about this service..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Features (comma-separated)</label>
                <input 
                  type="text" 
                  value={features} 
                  onChange={e => setFeatures(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-rose-500"
                  placeholder="e.g. Online application, Document review, Fast processing"
                />
              </div>

              <div className="border-t border-slate-800 pt-6">
                <h3 className="text-md font-bold text-white mb-4">Service Provider Info</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Provider Name *</label>
                    <input 
                      type="text" 
                      value={providerName} 
                      onChange={e => setProviderName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-rose-500"
                      placeholder="e.g. GovService BD"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Provider Bio (Optional)</label>
                    <input 
                      type="text" 
                      value={providerBio} 
                      onChange={e => setProviderBio(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-rose-500"
                      placeholder="e.g. Certified solutions provider"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Provider Rating (0.0 to 5.0)</label>
                    <input 
                      type="number" 
                      step="0.1"
                      min="0"
                      max="5"
                      value={providerRating} 
                      onChange={e => setProviderRating(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-rose-500"
                      placeholder="e.g. 5.0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Provider Reviews Count</label>
                    <input 
                      type="number" 
                      min="0"
                      value={providerReviews} 
                      onChange={e => setProviderReviews(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-rose-500"
                      placeholder="e.g. 120"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4 border-t border-slate-800 bg-slate-900 sticky bottom-0 z-10">
                <button 
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl shadow-lg shadow-rose-500/20 transition-all"
                >
                  {editingService ? 'Save Changes' : 'Create Service'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
