import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

export default function StatusUpdates() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Status Updates</h1>
        <p className="text-slate-600">Update incident status and progress</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Update Incident Status</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Incident ID</label>
            <input
              type="text"
              placeholder="INC-2025-XXXX"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Current Status</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue">
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
            <label className="block text-sm font-medium text-slate-700 mb-2">Status Notes</label>
            <textarea
              rows={4}
              placeholder="Add notes about status change..."
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            ></textarea>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Update Status
            </button>
            <button
              type="button"
              className="text-slate-500 hover:text-slate-700 px-6 py-2 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Status Changes</h2>
        <div className="space-y-3">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-900 font-semibold">INC-2025-0420</span>
                  <span className="text-xs text-slate-500">10 min ago</span>
                </div>
                <div className="text-sm text-slate-600 mb-1">Status changed to: <span className="text-green-600">Resolved</span></div>
                <div className="text-sm text-slate-500">Updated by PC Wilson</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-brand-blue mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-900 font-semibold">INC-2025-0421</span>
                  <span className="text-xs text-slate-500">15 min ago</span>
                </div>
                <div className="text-sm text-slate-600 mb-1">Status changed to: <span className="text-brand-blue">On Scene</span></div>
                <div className="text-sm text-slate-500">Updated by PC Thompson</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-brand-yellow mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-900 font-semibold">INC-2025-0422</span>
                  <span className="text-xs text-slate-500">22 min ago</span>
                </div>
                <div className="text-sm text-slate-600 mb-1">Status changed to: <span className="text-brand-yellow">Under Investigation</span></div>
                <div className="text-sm text-slate-500">Updated by DI Mitchell</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}