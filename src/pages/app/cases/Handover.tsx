import React from 'react';
import { UserPlus, FileText, CheckCircle } from 'lucide-react';

export default function CaseHandover() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Case Handover</h1>
        <p className="text-slate-400">Transfer case ownership and responsibilities</p>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Initiate Case Handover</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Case ID</label>
            <input
              type="text"
              placeholder="CASE-2025-XXX"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Current Owner</label>
              <input
                type="text"
                value="DI Sarah Mitchell"
                disabled
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-slate-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Transfer To</label>
              <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Select officer...</option>
                <option>DI James Thompson</option>
                <option>DI Michael Wilson</option>
                <option>DI Emma Brown</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Handover Reason</label>
            <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Select reason...</option>
              <option>Workload Redistribution</option>
              <option>Specialist Expertise Required</option>
              <option>Officer Leave/Absence</option>
              <option>Case Escalation</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Handover Notes</label>
            <textarea
              rows={4}
              placeholder="Provide context and important information for the new case owner..."
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <h3 className="text-blue-400 font-semibold mb-2">Handover Checklist</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-slate-300">
                <input type="checkbox" className="rounded bg-slate-900 border-slate-700" />
                <span className="text-sm">All evidence properly documented</span>
              </label>
              <label className="flex items-center gap-2 text-slate-300">
                <input type="checkbox" className="rounded bg-slate-900 border-slate-700" />
                <span className="text-sm">Case notes up to date</span>
              </label>
              <label className="flex items-center gap-2 text-slate-300">
                <input type="checkbox" className="rounded bg-slate-900 border-slate-700" />
                <span className="text-sm">Outstanding tasks documented</span>
              </label>
              <label className="flex items-center gap-2 text-slate-300">
                <input type="checkbox" className="rounded bg-slate-900 border-slate-700" />
                <span className="text-sm">Key contacts and witnesses listed</span>
              </label>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <UserPlus className="w-4 h-4" />
              Initiate Handover
            </button>
            <button
              type="button"
              className="text-slate-400 hover:text-white px-6 py-2 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Recent Handovers</h2>
        <div className="space-y-3">
          {[
            { case: 'CASE-2025-003', from: 'DI Wilson', to: 'DI Thompson', date: '14 Jan 2025', status: 'Completed' },
            { case: 'CASE-2025-002', from: 'DI Brown', to: 'DI Mitchell', date: '12 Jan 2025', status: 'Completed' }
          ].map((handover, index) => (
            <div key={index} className="bg-slate-900 border border-slate-700 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-white font-semibold mb-1">{handover.case}</div>
                  <div className="text-sm text-slate-400">
                    {handover.from} → {handover.to}
                  </div>
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  {handover.status}
                </span>
              </div>
              <div className="text-xs text-slate-500">{handover.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}