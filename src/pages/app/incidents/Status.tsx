import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

export default function StatusUpdates() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Status Updates</h1>
        <p className="text-slate-400">Update incident status and progress</p>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Update Incident Status</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Incident ID</label>
            <input
              type="text"
              placeholder="INC-2025-XXXX"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Current Status</label>
            <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Registered</option>
              <option>Dispatched</option>
              <option>En Route</option>
              <option>On Scene</option>
              <option>Under Investigation</option>
              <option>Resolved</option>
              <option>Closed</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Status Notes</label>
            <textarea
              rows={4}
              placeholder="Add notes about status change..."
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Update Status
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
        <h2 className="text-xl font-bold text-white mb-4">Recent Status Changes</h2>
        <div className="space-y-3">
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white font-semibold">INC-2025-0420</span>
                  <span className="text-xs text-slate-500">10 min ago</span>
                </div>
                <div className="text-sm text-slate-400 mb-1">Status changed to: <span className="text-emerald-400">Resolved</span></div>
                <div className="text-sm text-slate-500">Updated by PC Wilson</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white font-semibold">INC-2025-0421</span>
                  <span className="text-xs text-slate-500">15 min ago</span>
                </div>
                <div className="text-sm text-slate-400 mb-1">Status changed to: <span className="text-blue-400">On Scene</span></div>
                <div className="text-sm text-slate-500">Updated by PC Thompson</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white font-semibold">INC-2025-0422</span>
                  <span className="text-xs text-slate-500">22 min ago</span>
                </div>
                <div className="text-sm text-slate-400 mb-1">Status changed to: <span className="text-yellow-400">Under Investigation</span></div>
                <div className="text-sm text-slate-500">Updated by DI Mitchell</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}