'use client';

import { useSession } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

export default function ProfilePage() {
  const { data: session, refetch } = useSession();
  const user = session?.user;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');
  const [address, setAddress] = useState('');
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch full profile info (including bio, address, phone) on load
  useEffect(() => {
    async function fetchProfile() {
      try {
        setIsLoading(true);
        const res = await fetch('/api/user/update');
        if (res.ok) {
          const data = await res.json();
          if (data.user) {
            setName(data.user.name || '');
            setPhone(data.user.phone || '');
            setBio(data.user.bio || '');
            setAddress(data.user.address || '');
          }
        } else {
          // Fallback to session user details
          if (user) {
            setName(user.name || '');
          }
        }
      } catch (err) {
        console.error('Failed to load profile details:', err);
        if (user) {
          setName(user.name || '');
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (user) {
      fetchProfile();
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error('Full Name is required');
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch('/api/user/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          bio: bio.trim(),
          address: address.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || 'Profile updated successfully!');
        // Trigger session refetch to update any client-side cached header/avatar/name details
        await refetch();
      } else {
        toast.error(data.error || 'Failed to update profile');
      }
    } catch (err) {
      console.error(err);
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-3xl flex flex-col items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#002045]"></div>
        <p className="mt-4 text-gray-600 font-medium">Loading profile details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h2>
      <p className="text-gray-600 mb-8">Manage your personal information and preferences.</p>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Personal Details</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                value={user?.email || ''} 
                disabled
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-500 cursor-not-allowed"
              />
              <p className="text-xs text-gray-500 mt-1">Email cannot be changed.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+880 1XXX-XXXXXX"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Account Role</label>
              <input 
                type="text" 
                value={user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : 'Client'} 
                disabled
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-500 cursor-not-allowed"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Short Bio</label>
            <textarea 
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell us a little about yourself or your business..."
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <textarea 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Your physical address or location..."
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 resize-none"
            />
          </div>

          <div className="pt-4 flex justify-end">
            <Button 
              type="submit"
              isDisabled={isSubmitting}
              className="bg-[#002045] hover:bg-[#003066] text-white font-medium px-6 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
