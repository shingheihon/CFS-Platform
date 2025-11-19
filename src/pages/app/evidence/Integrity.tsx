import React from 'react';
import { CheckCircle, AlertTriangle, Shield } from 'lucide-react';

export default function EvidenceIntegrityCheck() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Evidence Integrity Check</h1>
        <p className="text-slate-400">Verify evidence authenticity and detect tampering</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <CheckCircle className="w-8 h-8 text-emerald-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">847</div>
          <div className="text-sm text-slate-400">Verified Items</div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <AlertTriangle className="w-8 h-8 text-yellow-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">3</div>
          <div className="text-sm text-slate-400">Pending Verification</div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <Shield className="w-8 h-8 text-blue-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">100%</div>
          <div className="text-sm text-slate-400">Integrity Rate</div>
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Run Integrity Check</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Evidence ID</label>
            <input
              type="text"
              placeholder="EVD-2025-XXXX"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Verify Integrity
          </button>
        </form>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Recent Integrity Checks</h2>
        <div className="space-y-3">
          {[
            { id: 'EVD-2025-0042', status: 'Verified', hash: 'a3f5...8d2c', time: '5 min ago', result: 'Pass' },
            { id: 'EVD-2025-0041', status: 'Verified', hash: 'b7e2...4f1a', time: '12 min ago', result: 'Pass' },
            { id: 'EVD-2025-0040', status: 'Verified', hash: 'c9d8...6e3b', time: '1 hour ago', result: 'Pass' }
          ].map((check, index) => (
            <div key={index} className="bg-slate-900 border border-slate-700 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-white font-semibold mb-1">{check.id}</div>
                  <div className="text-sm text-slate-400 font-mono">Hash: {check.hash}</div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {check.result}
                  </span>
                  <span className="text-xs text-slate-500">{check.time}</span>
                </div>
              </div>
              <div className="text-sm text-slate-400">
                Cryptographic verification completed. No tampering detected.
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-emerald-400 mt-0.5" />
          <div>
            <h3 className="text-emerald-400 font-semibold mb-1">Integrity Verification Process</h3>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• SHA-256 cryptographic hashing on upload</li>
              <li>• Periodic automated integrity checks</li>
              <li>• Blockchain-based audit trail</li>
              <li>• Immediate alerts on hash mismatch</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}