import React from 'react';
import { Shield, User, Clock, MapPin } from 'lucide-react';

export default function ChainOfCustody() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Chain of Custody Timeline</h1>
        <p className="text-slate-400">Track evidence handling and custody transfers</p>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Evidence: EVD-2025-0042</h2>
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded text-sm font-semibold">
            Integrity Verified
          </span>
        </div>

        <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6">
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="text-slate-400 mb-1">Evidence Type</div>
              <div className="text-white font-semibold">CCTV Footage</div>
            </div>
            <div>
              <div className="text-slate-400 mb-1">Related Case</div>
              <div className="text-white font-semibold">CASE-2025-001</div>
            </div>
            <div>
              <div className="text-slate-400 mb-1">Current Location</div>
              <div className="text-white font-semibold">Evidence Storage - Bay 12</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 border-2 border-emerald-500">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="w-0.5 h-full bg-emerald-500 mt-2"></div>
            </div>
            <div className="flex-1 bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold">Evidence Collected</h3>
                <span className="text-emerald-400 text-sm">15 Jan 2025, 14:30</span>
              </div>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Collected by: PC James Wilson (Badge #4521)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Location: Bank Street Crime Scene</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 border-2 border-emerald-500">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="w-0.5 h-full bg-emerald-500 mt-2"></div>
            </div>
            <div className="flex-1 bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold">Transferred to Evidence Storage</h3>
                <span className="text-emerald-400 text-sm">15 Jan 2025, 16:15</span>
              </div>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Transferred by: PC Wilson → Evidence Clerk Sarah Jones</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Location: Central Evidence Facility</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 border-2 border-emerald-500">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="w-0.5 h-full bg-emerald-500 mt-2"></div>
            </div>
            <div className="flex-1 bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold">Accessed for Analysis</h3>
                <span className="text-emerald-400 text-sm">16 Jan 2025, 09:45</span>
              </div>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Accessed by: DI Sarah Mitchell (Badge #4500)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Duration: 2 hours 15 minutes</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 border-2 border-emerald-500">
                <Shield className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="flex-1 bg-slate-900 border border-slate-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold">Returned to Storage</h3>
                <span className="text-emerald-400 text-sm">16 Jan 2025, 12:00</span>
              </div>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Returned by: DI Mitchell → Evidence Clerk Jones</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Current Location: Evidence Storage - Bay 12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-emerald-400 mt-0.5" />
          <div>
            <h3 className="text-emerald-400 font-semibold mb-1">Chain of Custody Verified</h3>
            <p className="text-slate-300 text-sm">
              All custody transfers have been properly documented and verified. Evidence integrity maintained throughout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}