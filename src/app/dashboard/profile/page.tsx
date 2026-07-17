'use client';

import { useSession } from '@/lib/auth-client';
import { Button } from '@heroui/react';

export default function ProfilePage() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h2>
      <p className="text-gray-600 mb-8">Manage your personal information and preferences.</p>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Personal Details</h3>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input 
                type="text" 
                defaultValue={user?.name || ''} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                defaultValue={user?.email || ''} 
                disabled
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-500 cursor-not-allowed"
              />
              <p className="text-xs text-gray-500 mt-1">Email cannot be changed.</p>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input 
              type="tel" 
              placeholder="+880 1XXX-XXXXXX"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          <div className="pt-4 flex justify-end">
            <Button variant="primary" className="bg-[#002045] font-medium">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
