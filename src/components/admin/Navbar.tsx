'use client';

import { Bell, Search } from 'react-icons/lu';

export default function Navbar() {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center flex-1">
        <div className="relative w-full max-w-md hidden md:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-slate-700 rounded-xl leading-5 bg-slate-800/50 text-slate-300 placeholder-slate-500 focus:outline-none focus:bg-slate-800 focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 sm:text-sm transition-all"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-400 hover:text-slate-200 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-rose-500 ring-2 ring-slate-900" />
        </button>
        
        <div className="h-8 w-px bg-slate-700 mx-2" />
        
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end hidden sm:flex">
            <span className="text-sm font-medium text-white">Super Admin</span>
            <span className="text-xs text-slate-400">admin@servicehub.com</span>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rose-500 to-indigo-500 p-0.5 shadow-lg shadow-rose-500/20">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center border-2 border-slate-900">
              <span className="text-xs font-bold text-white">SA</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
