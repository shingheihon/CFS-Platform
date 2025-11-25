import React from 'react';
import { CheckCircle, AlertTriangle, Shield } from 'lucide-react';

export default function EvidenceIntegrityCheck() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Evidence Integrity Check</h1>
        <p className="text-slate-600">Verify evidence authenticity and detect tampering</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">847</div>
          <div className="text-sm text-slate-600">Verified Items</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <AlertTriangle className="w-8 h-8 text-brand-yellow mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">3</div>
          <div className="text-sm text-slate-600">Pending Verification</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <Shield className="w-8 h-8 text-brand-blue mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">100%</div>
          <div className="text-sm text-slate-600">Integrity Rate</div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Run Integrity Check</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Evidence ID</label>
            <input
              type="text"
              placeholder="EVD-2025-XXXX"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>
          <button
            type="submit"
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Verify Integrity
          </button>
        </form>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Integrity Checks</h2>
        <div className="space-y-3">
          {[
            { id: 'EVD-2025-0042', status: 'Verified', hash: 'a3f5...8d2c', time: '5 min ago', result: 'Pass' },
            { id: 'EVD-2025-0041', status: 'Verified', hash: 'b7e2...4f1a', time: '12 min ago', result: 'Pass' },
            { id: 'EVD-2025-0040', status: 'Verified', hash: 'c9d8...6e3b', time: '1 hour ago', result: 'Pass' }
          ].map((check, index) => (
            <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-slate-900 font-semibold mb-1">{check.id}</div>
                  <div className="text-sm text-slate-600 font-mono">Hash: {check.hash}</div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {check.result}
                  </span>
                  <span className="text-xs text-slate-500">{check.time}</span>
                </div>
              </div>
              <div className="text-sm text-slate-600">
                Cryptographic verification completed. No tampering detected.
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-green-600 mt-0.5" />
          <div>
            <h3 className="text-green-700 font-semibold mb-1">Integrity Verification Process</h3>
            <ul className="text-slate-700 text-sm space-y-1">
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