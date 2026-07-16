'use client';

import { Button } from '@heroui/react';

export default function SupportPage() {
  return (
    <div className="max-w-4xl flex h-[calc(100vh-140px)] flex-col bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      {/* Chat Header */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <span className="material-symbols-outlined">support_agent</span>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">GovService Support</h3>
            <p className="text-xs text-green-600 font-medium">● Online</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" isIconOnly>
          <span className="material-symbols-outlined">more_vert</span>
        </Button>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50">
        <div className="flex flex-col items-center justify-center py-6 text-gray-400">
          <span className="material-symbols-outlined text-4xl mb-2">forum</span>
          <p className="text-sm">Start a conversation with our support team</p>
        </div>
        
        {/* Example Welcome Message */}
        <div className="flex items-start gap-3 max-w-[80%]">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600 mt-1">
            <span className="material-symbols-outlined text-sm">support_agent</span>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
            <p className="text-gray-700 text-sm">Hello! How can we help you today with your services?</p>
            <span className="text-[10px] text-gray-400 mt-1 block">Just now</span>
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-end gap-2 relative">
          <textarea 
            placeholder="Type your message here..."
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none h-14 overflow-hidden"
            rows={1}
          />
          <button className="absolute right-2 bottom-2 p-2 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
