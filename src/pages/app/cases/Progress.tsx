import React from 'react';
import { TrendingUp, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export default function CaseProgressTracking() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Case Progress Tracking</h1>
        <p className="text-slate-600">Monitor investigation milestones and case advancement</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">CASE-2025-001: Organised Burglary Ring</h2>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-700 font-semibold">Overall Progress</span>
            <span className="text-brand-blue font-bold">68%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-3">
            <div className="bg-brand-blue h-3 rounded-full" style={{ width: '68%' }}></div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 border-2 border-green-500">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="w-0.5 h-full bg-green-500 mt-2"></div>
            </div>
            <div className="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-slate-900 font-semibold">Initial Investigation</h3>
                <span className="text-green-600 text-sm font-semibold">Completed</span>
              </div>
              <p className="text-slate-600 text-sm mb-2">All incident reports collected and reviewed</p>
              <p className="text-slate-500 text-xs">Completed on 10 Jan 2025</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 border-2 border-green-500">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="w-0.5 h-full bg-green-500 mt-2"></div>
            </div>
            <div className="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-slate-900 font-semibold">Evidence Collection</h3>
                <span className="text-green-600 text-sm font-semibold">Completed</span>
              </div>
              <p className="text-slate-600 text-sm mb-2">CCTV footage and forensic evidence secured</p>
              <p className="text-slate-500 text-xs">Completed on 12 Jan 2025</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue border-2 border-brand-blue">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div className="w-0.5 h-full bg-slate-300 mt-2"></div>
            </div>
            <div className="flex-1 bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-slate-900 font-semibold">Suspect Identification</h3>
                <span className="text-brand-blue text-sm font-semibold">In Progress</span>
              </div>
              <p className="text-slate-600 text-sm mb-2">Analysing evidence to identify suspects</p>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                <div className="bg-brand-blue h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 border-2 border-slate-300">
                <AlertCircle className="w-5 h-5 text-slate-500" />
              </div>
              <div className="w-0.5 h-full bg-slate-300 mt-2"></div>
            </div>
            <div className="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-slate-900 font-semibold">Arrest & Prosecution</h3>
                <span className="text-slate-500 text-sm font-semibold">Pending</span>
              </div>
              <p className="text-slate-600 text-sm">Awaiting completion of previous stages</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 border-2 border-slate-300">
                <CheckCircle className="w-5 h-5 text-slate-500" />
              </div>
            </div>
            <div className="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-slate-900 font-semibold">Case Closure</h3>
                <span className="text-slate-500 text-sm font-semibold">Pending</span>
              </div>
              <p className="text-slate-600 text-sm">Final documentation and case closure</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <TrendingUp className="w-8 h-8 text-green-600 mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">5</div>
          <div className="text-sm text-slate-600">Milestones Completed</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <Clock className="w-8 h-8 text-brand-blue mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">2</div>
          <div className="text-sm text-slate-600">In Progress</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <AlertCircle className="w-8 h-8 text-slate-400 mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">3</div>
          <div className="text-sm text-slate-600">Pending</div>
        </div>
      </div>
    </div>
  );
}