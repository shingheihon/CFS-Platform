import React from 'react';
import { Link as LinkIcon, FileText } from 'lucide-react';

export default function LinkEvidence() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Link Evidence to Incident</h1>
        <p className="text-slate-400">Associate evidence items with cases and incidents</p>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Link Evidence</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Evidence ID</label>
            <input
              type="text"
              placeholder="EVD-2025-XXXX"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Link To</label>
            <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Select target...</option>
              <option>Incident</option>
              <option>Case</option>
              <option>Suspect</option>
              <option>Location</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Target ID</label>
            <input
              type="text"
              placeholder="INC-2025-XXXX or CASE-2025-XXX"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Relationship Description</label>
            <textarea
              rows={3}
              placeholder="Describe how this evidence relates to the incident/case..."
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            <LinkIcon className="w-4 h-4" />
            Create Link
          </button>
        </form>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Existing Evidence Links</h2>
        <div className="space-y-3">
          {[
            { evidence: 'EVD-2025-0042', linked: 'INC-2025-0421', type: 'CCTV Footage', relation: 'Shows suspect entering premises' },
            { evidence: 'EVD-2025-0041', linked: 'CASE-2025-001', type: 'Fingerprint', relation: 'Matches suspect database entry' },
            { evidence: 'EVD-2025-0040', linked: 'INC-2025-0420', type: 'Witness Statement', relation: 'Corroborates timeline of events' }
          ].map((link, index) => (
            <div key={index} className="bg-slate-900 border border-slate-700 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-white font-semibold mb-1">{link.evidence} → {link.linked}</div>
                  <div className="text-sm text-slate-400">{link.type}</div>
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs font-semibold">
                  Linked
                </span>
              </div>
              <p className="text-sm text-slate-400">{link.relation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}