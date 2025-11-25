import React from 'react';
import { Bell, User, LogOut } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-slate-800 border-b border-slate-700 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="text-slate-300 text-sm">
          <span className="text-slate-500">Role:</span> <span className="text-emerald-400 font-semibold">Police Officer</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-slate-700">
          <div className="text-right">
            <div className="text-sm text-white font-medium">Shing Hei Hon</div>
            <div className="text-xs text-slate-400">Badge #4521</div>
          </div>
          <button className="p-2 bg-slate-700 rounded-full text-slate-300 hover:text-white transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-400 hover:text-red-400 transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;