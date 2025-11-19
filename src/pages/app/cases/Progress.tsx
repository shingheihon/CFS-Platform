import React from 'react';
import { TrendingUp, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export default function CaseProgressTracking() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Case Progress Tracking</h1>
        <p className="text-slate-400">Monitor investigation milestones and case advancement</p>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">CASE-2025-001: Organized Burglary Ring</h2>
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-300 font-semibold">Overall Progress</span>
            <span className="text-emerald-400 font-bold">68%</span>
          </div>
          <div className="w-full bg-slate-900 rounded-full h-3">
            <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '68%' }}></div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 border-2 border-emerald-500">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="w-0.5 h-full bg-emerald-500 mt-2"></div>
            </div>
            <div className="flex-1 bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold">Initial Investigation</h3>
                <span className="text-emerald-400 text-sm font-semibold">Completed</span>
              </div>
              <p className="text-slate-400 text-sm mb-2">All incident reports collected and reviewed</p>
              <p className="text-slate-500 text-xs">Completed on 10 Jan 2025</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 border-2 border-emerald-500">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="w-0.5 h-full bg-emerald-500 mt-2"></div>
            </div>
            <div className="flex-1 bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold">Evidence Collection</h3>
                <span className="text-emerald-400 text-sm font-semibold">Completed</span>
              </div>
              <p className="text-slate-400 text-sm mb-2">CCTV footage and forensic evidence secured</p>
              <p className="text-slate-500 text-xs">Completed on 12 Jan 2025</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 border-2 border-blue-500">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div className="w-0.5 h-full bg-slate-700 mt-2"></div>
            </div>
            <div className="flex-1 bg-slate-900 border border-blue-700 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold">Suspect Identification</h3>
                <span className="text-blue-400 text-sm font-semibold">In Progress</span>
              </div>
              <p className="text-slate-400 text-sm mb-2">Analyzing evidence to identify suspects</p>
              <div className="w-full bg-slate-800 rounded-full h-2 mt-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-700">
                <AlertCircle className="w-5 h-5 text-slate-400" />
              </div>
              <div className="w-0.5 h-full bg-slate-700 mt-2"></div>
            </div>
            <div className="flex-1 bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold">Arrest & Prosecution</h3>
                <span className="text-slate-400 text-sm font-semibold">Pending</span>
              </div>
              <p className="text-slate-400 text-sm">Awaiting completion of previous stages</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-700">
                <CheckCircle className="w-5 h-5 text-slate-400" />
              </div>
            </div>
            <div className="flex-1 bg-slate-900 border border-slate-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold">Case Closure</h3>
                <span className="text-slate-400 text-sm font-semibold">Pending</span>
              </div>
              <p className="text-slate-400 text-sm">Final documentation and case closure</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <TrendingUp className="w-8 h-8 text-emerald-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">5</div>
          <div className="text-sm text-slate-400">Milestones Completed</div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <Clock className="w-8 h-8 text-blue-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">2</div>
          <div className="text-sm text-slate-400">In Progress</div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <AlertCircle className="w-8 h-8 text-slate-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">3</div>
          <div className="text-sm text-slate-400">Pending</div>
        </div>
      </div>
    </div>
  );
}