import React from 'react';
import { Upload, Shield, Lock } from 'lucide-react';

export default function UploadEvidence() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Upload Evidence</h1>
        <p className="text-slate-400">Securely upload and store case evidence</p>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Evidence Upload Form</h2>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Case/Incident ID</label>
              <input
                type="text"
                placeholder="CASE-2025-XXX or INC-2025-XXXX"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Evidence Type</label>
              <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Select type...</option>
                <option>Physical Evidence Photo</option>
                <option>CCTV Footage</option>
                <option>Document</option>
                <option>Audio Recording</option>
                <option>Digital Evidence</option>
                <option>Forensic Report</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Evidence Description</label>
            <textarea
              rows={3}
              placeholder="Detailed description of the evidence..."
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Collection Date</label>
              <input
                type="datetime-local"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Collected By</label>
              <input
                type="text"
                placeholder="Officer name or ID..."
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="border-2 border-dashed border-slate-700 rounded-lg p-8 text-center hover:border-emerald-500 transition-colors cursor-pointer">
            <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <p className="text-white font-semibold mb-2">Drop files here or click to upload</p>
            <p className="text-slate-400 text-sm">Supports: JPG, PNG, MP4, PDF, DOC (Max 500MB)</p>
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-emerald-400 mt-0.5" />
              <div>
                <h3 className="text-emerald-400 font-semibold mb-1">Security Features</h3>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• End-to-end encryption during upload</li>
                  <li>• Cryptographic hash verification</li>
                  <li>• Automatic chain of custody logging</li>
                  <li>• Tamper-proof storage</li>
                </ul>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            <Lock className="w-4 h-4" />
            Upload Securely
          </button>
        </form>
      </div>
    </div>
  );
}